import type { AppEdition } from "./accounts";
import {
  getOverviewDataset,
  matchesDeviceFilters,
  type DeviceFilters,
  type OverviewDevice,
  type OverviewProject,
} from "./deviceOverview";

/**
 * 设备查询的演示数据：直接复用设备总览的设备清单（同一平台两处数字一致），
 * 再按设备编号派生卡片需要的展示字段（注册来源、信号、模块等），结果稳定可复现。
 */

/** 物联卡信号档位，对应 Figma 物联卡状态标签（5813:33542）的 status 轴；none 显示「--（无信号）」。 */
export type SignalLevel = "strong" | "medium" | "weak" | "none";
/** 运营商，对应同一组件的 Type 轴（移动 / 联通）；未装卡时 sim 为 null（Type=无卡）。 */
export type Carrier = "mobile" | "unicom";
/** 注册来源，对应 Figma 注册来源标签（8601:28788）：Property 1 = AWS / IOT（文案 IESS）。 */
export type RegistrationSource = "IESS" | "AWS";

export type DeviceModule = {
  /** 主模块：310 / 320 / 330；子模块：Nexus-D / Nexus-M */
  name: string;
  kind: "main" | "nexus";
  online: boolean;
  serial: string;
  type: string;
  /** 主模块为「已注册」，Nexus 子模块为「已配置」 */
  state: "registered" | "configured";
  version: string;
};

export type QueryDevice = OverviewDevice & {
  project?: OverviewProject;
  /** 设备形态，对应项目面板 5532:18192 的 property1：直梯 / 扶梯 / 步道梯（自动人行道） */
  equipment: "elevator" | "escalator" | "walkway";
  /** 保养合同产品名，合同有效时显示为「有效 (KONE Care Plus)」 */
  contractPlan: string | null;
  /** 24/7 服务 */
  service247: boolean;
  /** 注册来源；未注册的设备没有 */
  source: RegistrationSource | null;
  /** 物联卡；null 表示未安装。dbm 为 null 表示无信号（显示「--」） */
  sim: { carrier: Carrier; level: SignalLevel; dbm: number | null } | null;
  modules: DeviceModule[];
};

/**
 * 按设备编号 + 盐值派生一个互相独立的伪随机整数。
 * 直接用 id 取模的话，相邻编号的各字段会同步变化（例如 IESS 永远配同一档信号），变体就不够散。
 */
function pick(id: string, salt: number, modulo: number) {
  let value = 2166136261 ^ salt;
  for (const char of id) value = Math.imul(value ^ char.charCodeAt(0), 16777619);
  value ^= value >>> 13;
  value = Math.imul(value, 0x5bd1e995);
  value ^= value >>> 15;
  return (value >>> 0) % modulo;
}

const DBM_RANGE: Record<Exclude<SignalLevel, "none">, [number, number]> = {
  strong: [-50, -64],
  medium: [-65, -79],
  weak: [-80, -100],
};

const MAIN_VERSIONS = ["1.5.0d", "1.4.2b", "1.6.1a", "2.0.1d"];
const NEXUS_VERSIONS = ["SN2.00.08", "SN2.00.06", "SN1.00.07"];
const CONTRACT_PLANS = ["KONE Care Plus", "KONE Care", "KONE Care Premium", "KONE Care Basic"];

function toQueryDevice(device: OverviewDevice, project?: OverviewProject): QueryDevice {
  const id = device.id;
  const registered = device.status !== "unregistered";
  const deviceOnline = device.status === "online";
  // 注册来源：IESS 与 AWS 大致对半
  const source: RegistrationSource | null = registered ? (pick(id, 1, 2) === 0 ? "IESS" : "AWS") : null;

  // 物联卡：约 1/6 未安装；运营商移动 : 联通 ≈ 3 : 2；信号四档都有，离线设备更容易是弱信号 / 无信号
  let sim: QueryDevice["sim"] = null;
  if (registered && pick(id, 2, 6) !== 0) {
    const carrier: Carrier = pick(id, 3, 5) < 3 ? "mobile" : "unicom";
    const levels: SignalLevel[] = deviceOnline ? ["strong", "strong", "medium", "medium", "medium", "weak"] : ["medium", "weak", "weak", "none", "none"];
    const level = levels[pick(id, 4, levels.length)];
    const dbm = level === "none" ? null : (() => {
      const [high, low] = DBM_RANGE[level];
      return high - pick(id, 5, high - low + 1);
    })();
    sim = { carrier, level, dbm };
  }

  // 模块：主模块 310 / 320 / 330 各若干；IESS 设备带 Nexus 子模块（门机 + 机房 / 只有门机 / 只有机房）
  const mainType = ["310", "320", "330"][pick(id, 6, 3)];
  const nexusSets: ("D" | "M")[][] = [["D", "M"], ["D", "M"], ["D"], ["M"]];
  const nexus = source === "IESS" ? nexusSets[pick(id, 7, nexusSets.length)] : [];
  // 在线设备里偶有某个子模块单独离线，让状态列出现「在线 / 离线」混排
  const nexusOffline = deviceOnline && pick(id, 8, 5) === 0 ? nexus[nexus.length - 1] : null;
  const serialTail = (salt: number) => String(pick(id, salt, 1000000)).padStart(6, "0");

  const modules: DeviceModule[] = registered
    ? [
        {
          name: mainType,
          kind: "main",
          online: deviceOnline,
          serial: `KM52152006G02.100ALZ262${serialTail(9)}`,
          type: `KONE Connection ${mainType}`,
          state: "registered",
          version: MAIN_VERSIONS[pick(id, 10, MAIN_VERSIONS.length)],
        },
        ...nexus.map<DeviceModule>((code) => ({
          name: `Nexus-${code}`,
          kind: "nexus",
          online: deviceOnline && code !== nexusOffline,
          serial: `KM52268921G2${code === "D" ? 3 : 4}.100ALX202${serialTail(code === "D" ? 11 : 12)}`,
          type: code === "D" ? "Nexus-Door" : "Nexus-Machine",
          state: "configured",
          version: NEXUS_VERSIONS[pick(id, code === "D" ? 13 : 14, NEXUS_VERSIONS.length)],
        })),
      ]
    : [];

  return {
    ...device,
    project,
    // 扶梯类设备里约 1/3 是自动人行道
    equipment: device.kind === "elevator" ? "elevator" : pick(id, 16, 3) === 0 ? "walkway" : "escalator",
    contractPlan: device.contractValid ? CONTRACT_PLANS[pick(id, 17, CONTRACT_PLANS.length)] : null,
    service247: pick(id, 15, 4) !== 0,
    source,
    sim,
    modules,
  };
}

const cache = new Map<AppEdition, { devices: QueryDevice[]; byId: Map<string, QueryDevice> }>();

function getQueryDataset(edition: AppEdition) {
  let entry = cache.get(edition);
  if (!entry) {
    const dataset = getOverviewDataset(edition);
    const projects = new Map(dataset.projects.map((project) => [project.id, project]));
    const devices = dataset.devices.map((device) => toQueryDevice(device, projects.get(device.projectId)));
    entry = { devices, byId: new Map(devices.map((device) => [device.id, device])) };
    cache.set(edition, entry);
  }
  return entry;
}

export const getQueryDevice = (edition: AppEdition, id: string) => getQueryDataset(edition).byId.get(id);

/**
 * 匹配设备编号、设备名称、项目编号、项目名称、项目地址。
 * 「多设备查询」开启时关键词可用中英文逗号或空格分隔多个，任一命中即可；关闭时整串作为一个关键词。
 */
export function searchDevices(
  edition: AppEdition,
  { keyword, stewardOnly, multi = false, filters }: { keyword: string; stewardOnly: boolean; multi?: boolean; filters: DeviceFilters },
) {
  const keywords = (multi ? keyword.split(/[,，\s]+/) : [keyword])
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
  return getQueryDataset(edition).devices.filter((device) => {
    if (stewardOnly && !device.steward) return false;
    if (!matchesDeviceFilters(device, filters)) return false;
    if (keywords.length === 0) return true;
    const haystack = [device.id, device.name, device.project?.code ?? "", device.project?.name ?? "", device.project?.address ?? ""].map((value) =>
      value.toLowerCase(),
    );
    return keywords.some((item) => haystack.some((value) => value.includes(item)));
  });
}

// ---------------------------------------------------------------------------
// 最近查看：按平台 + 账号存在 localStorage，「下次再次进入」时展示
// ---------------------------------------------------------------------------

const RECENT_LIMIT = 10;
const recentKey = (edition: AppEdition, email: string) => `iot-essential:recent-devices:${edition}:${email || "guest"}`;

export function loadRecentDeviceIds(edition: AppEdition, email: string): string[] {
  try {
    const raw = window.localStorage.getItem(recentKey(edition, email));
    const ids = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(ids) ? ids.filter((id): id is string => typeof id === "string") : [];
  } catch {
    return [];
  }
}

/** 记录一次查看：移到最前，最多保留 10 台。 */
export function pushRecentDeviceId(edition: AppEdition, email: string, id: string): string[] {
  const next = [id, ...loadRecentDeviceIds(edition, email).filter((item) => item !== id)].slice(0, RECENT_LIMIT);
  try {
    window.localStorage.setItem(recentKey(edition, email), JSON.stringify(next));
  } catch {
    // 隐私模式等场景写入失败时，只在本次会话内生效
  }
  return next;
}
