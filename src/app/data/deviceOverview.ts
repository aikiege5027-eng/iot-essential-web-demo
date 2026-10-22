import type { AppEdition } from "./accounts";

/**
 * 设备总览 / 设备筛选的演示数据（通力、仟帆各一份）。
 *
 * 数据用固定种子的伪随机数生成，刷新页面结果不变；总览卡片、趋势图、项目列表
 * 和设备筛选结果都从同一份设备清单实时统计，筛选后各处数字保持一致。
 */

// ---------------------------------------------------------------------------
// 类型
// ---------------------------------------------------------------------------

export type DeviceKind = "elevator" | "escalator";
export type ControllerType = "LCE" | "KCE" | "KCECPUc" | "STEP" | "GCE" | "NKE" | "ESC" | "KSE" | "KIE";
export type OnlineStatus = "online" | "disconnected" | "offline" | "unregistered";
export type Ownership = "company" | "customer";
export type ContractType = "LIS" | "LIFS";

export type OverviewDevice = {
  id: string;
  name: string;
  projectId: string;
  kind: DeviceKind;
  controller: ControllerType;
  claimed: boolean;
  scheduled: boolean;
  /** 云管家设备 */
  steward: boolean;
  /** 云管家状态；非云管家设备恒为 unregistered */
  status: OnlineStatus;
  /** 离线 / 断连天数，status = offline / disconnected 时有意义 */
  offlineDays: number;
  /** 云管家派单；非云管家设备为 null（表格显示「-」） */
  isnDispatch: boolean | null;
  /** 云管家物权归属；非云管家设备为 null */
  ownership: Ownership | null;
  contractValid: boolean;
  contractType: ContractType;
  /** 维保合同 30 天内到期 */
  contractExpiring: boolean;
  /** 有云管家协议 */
  agreement: boolean;
};

export type OverviewProject = {
  id: string;
  name: string;
  code: string;
  address: string;
  /** 所属工作组（组织树叶子节点 id） */
  workgroupId: string;
};

export type OrgNode = { id: string; label: string; children?: OrgNode[] };

export type OverviewDataset = {
  /** 公司 → 区域 → 分公司 → 办事处 → PG → 工作组 */
  org: OrgNode[];
  projects: OverviewProject[];
  devices: OverviewDevice[];
};

/** 数据范围筛选：每一级为空表示「不限」，工作组可多选。 */
export type DataScope = {
  company: string;
  region: string;
  branch: string;
  office: string;
  pg: string;
  workgroups: string[];
};

export const EMPTY_SCOPE: DataScope = { company: "", region: "", branch: "", office: "", pg: "", workgroups: [] };

// ---------------------------------------------------------------------------
// 生成
// ---------------------------------------------------------------------------

/** mulberry32：小而稳定的种子随机数，保证演示数据可复现。 */
function createRandom(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type OrgSeed = {
  companies: string[];
  regions: { name: string; branches: { name: string; offices: string[] }[] }[];
};

const IOT_ORG: OrgSeed = {
  companies: ["通力", "巨人通力"],
  regions: [
    { name: "华东区", branches: [{ name: "杭州分公司", offices: ["杭州", "嘉兴"] }, { name: "上海分公司", offices: ["浦东", "浦西"] }] },
    { name: "华北区", branches: [{ name: "北京分公司", offices: ["朝阳", "海淀"] }, { name: "天津分公司", offices: ["和平"] }] },
    { name: "华南区", branches: [{ name: "广州分公司", offices: ["天河"] }, { name: "深圳分公司", offices: ["福田", "南山"] }] },
  ],
};

const QIANFAN_ORG: OrgSeed = {
  companies: ["申城电梯维保", "鼎力机电维保", "恒安电梯服务"],
  regions: [
    { name: "华东区", branches: [{ name: "苏州分公司", offices: ["工业园区", "姑苏"] }, { name: "南京分公司", offices: ["鼓楼"] }] },
    { name: "西南区", branches: [{ name: "成都分公司", offices: ["高新", "锦江"] }, { name: "重庆分公司", offices: ["渝中"] }] },
  ],
};

const PG_LEADERS = ["张三", "李伟", "王芳", "陈杰", "刘洋", "赵磊", "孙丽", "周涛"];
const WORKERS = [
  "张老三/李老四/王老五",
  "陈小明/刘大海/赵子龙",
  "孙一鸣/周文斌/吴志刚",
  "郑海涛/王建军/冯晓东",
];

function buildOrg(seed: OrgSeed): OrgNode[] {
  let pgSerial = 11;
  let workgroupSerial = 21;
  return seed.companies.map((company, companyIndex) => ({
    id: `c${companyIndex}`,
    label: company,
    children: seed.regions.map((region, regionIndex) => ({
      id: `c${companyIndex}-r${regionIndex}`,
      label: region.name,
      children: region.branches.map((branch, branchIndex) => ({
        id: `c${companyIndex}-r${regionIndex}-b${branchIndex}`,
        label: branch.name,
        children: branch.offices.map((office, officeIndex) => {
          const officeId = `c${companyIndex}-r${regionIndex}-b${branchIndex}-o${officeIndex}`;
          return {
            id: officeId,
            label: office,
            children: [0, 1].map((pgIndex) => {
              const pgCode = `KCC-J${String(pgSerial++).padStart(2, "0")}`;
              const pgId = `${officeId}-p${pgIndex}`;
              return {
                id: pgId,
                label: `${pgCode} ${PG_LEADERS[(pgSerial + pgIndex) % PG_LEADERS.length]}`,
                children: [0, 1].map((groupIndex) => {
                  const code = `KCCJ${String(workgroupSerial++).padStart(4, "0")}`;
                  return {
                    id: `${pgId}-w${groupIndex}`,
                    label: `${code} ${WORKERS[(workgroupSerial + groupIndex) % WORKERS.length]}`,
                  };
                }),
              };
            }),
          };
        }),
      })),
    })),
  }));
}

const PROJECT_PREFIXES = ["世纪", "万象", "金融", "滨江", "国贸", "未来", "星河", "天街", "海岸", "中心", "东方", "银泰", "环球", "湖畔", "云谷"];
const PROJECT_SUFFIXES = ["大厦", "广场", "中心", "花园", "公寓", "写字楼", "商场", "医院", "学校", "产业园"];
const STREETS = ["世纪大道", "人民路", "解放路", "中山路", "延安路", "建设路", "长江路", "滨江大道", "科技路", "文化路"];
const CONTROLLERS: ControllerType[] = ["LCE", "LCE", "LCE", "KCE", "KCECPUc", "STEP", "GCE", "NKE", "KSE", "KIE"];

function collectLeaves(nodes: OrgNode[], path: string[] = []): { id: string; path: string[] }[] {
  return nodes.flatMap((node) =>
    node.children?.length ? collectLeaves(node.children, [...path, node.label]) : [{ id: node.id, path: [...path, node.label] }],
  );
}

function buildDataset(edition: AppEdition): OverviewDataset {
  const random = createRandom(edition === "iot" ? 20260101 : 20260202);
  const pick = <T,>(items: readonly T[]) => items[Math.floor(random() * items.length)];
  const chance = (probability: number) => random() < probability;

  const org = buildOrg(edition === "iot" ? IOT_ORG : QIANFAN_ORG);
  const leaves = collectLeaves(org);
  const projects: OverviewProject[] = [];
  const devices: OverviewDevice[] = [];
  const projectCount = edition === "iot" ? 101 : 64;
  let deviceSerial = edition === "iot" ? 30358715 : 51200310;

  for (let index = 0; index < projectCount; index++) {
    const leaf = leaves[index % leaves.length];
    // leaf.path：公司 / 区域 / 分公司 / 办事处 / PG / 工作组 —— 城市取分公司名去掉「分公司」
    const city = leaf.path[2].replace("分公司", "");
    const name = `${city}${pick(PROJECT_PREFIXES)}${pick(PROJECT_SUFFIXES)}`;
    const project: OverviewProject = {
      id: `${edition}-p${index}`,
      name: projects.some((item) => item.name === name) ? `${name}${(index % 3) + 2}期` : name,
      code: `${edition === "iot" ? "3100" : "5100"}${String(20250000 + index * 37).padStart(8, "0")}`,
      address: `${city}市${pick(STREETS)}${10 + Math.floor(random() * 890)}号`,
      workgroupId: leaf.id,
    };
    projects.push(project);

    const deviceCount = 6 + Math.floor(random() * 30);
    const escalatorShare = project.name.includes("商场") || project.name.includes("广场") ? 0.35 : 0.08;
    for (let d = 0; d < deviceCount; d++) {
      const kind: DeviceKind = chance(escalatorShare) ? "escalator" : "elevator";
      const agreement = chance(0.3);
      const steward = agreement ? chance(0.92) : chance(0.08);
      let status: OnlineStatus = "unregistered";
      if (steward) {
        const roll = random();
        // 演示需要四种云管家状态都常见：在线 66% / 断连 12% / 离线 14% / 未注册 8%
        status = roll < 0.66 ? "online" : roll < 0.78 ? "disconnected" : roll < 0.92 ? "offline" : "unregistered";
      }
      const contractValid = chance(0.9);
      const deviceNumber = kind === "elevator" ? `DT${d + 1}` : `FT${d + 1}`;
      devices.push({
        id: String(deviceSerial++),
        name: `${project.name}${deviceNumber}`,
        projectId: project.id,
        kind,
        controller: kind === "escalator" ? "ESC" : pick(CONTROLLERS),
        claimed: chance(0.9),
        scheduled: contractValid ? chance(0.96) : chance(0.55),
        steward,
        status,
        // 离线 / 断连都记天数：云管家状态标签显示「已离线 N 天」「已断连 N 天」
        offlineDays: status === "offline" ? 1 + Math.floor(random() * 40) : status === "disconnected" ? 1 + Math.floor(random() * 6) : 0,
        isnDispatch: steward ? chance(0.85) : null,
        ownership: steward ? (chance(0.7) ? "company" : "customer") : null,
        contractValid,
        contractType: chance(0.75) ? "LIS" : "LIFS",
        contractExpiring: contractValid && chance(0.06),
        agreement,
      });
    }
  }

  return { org, projects, devices };
}

const cache = new Map<AppEdition, OverviewDataset>();

export function getOverviewDataset(edition: AppEdition): OverviewDataset {
  let dataset = cache.get(edition);
  if (!dataset) {
    dataset = buildDataset(edition);
    cache.set(edition, dataset);
  }
  return dataset;
}

// ---------------------------------------------------------------------------
// 数据范围
// ---------------------------------------------------------------------------

/** 按当前已选的上级返回下一级候选项。 */
export function getScopeOptions(org: OrgNode[], scope: DataScope) {
  const find = (nodes: OrgNode[] | undefined, id: string) => nodes?.find((node) => node.id === id);
  const company = find(org, scope.company);
  const region = find(company?.children, scope.region);
  const branch = find(region?.children, scope.branch);
  const office = find(branch?.children, scope.office);
  const pg = find(office?.children, scope.pg);
  return {
    companies: org,
    regions: company?.children ?? [],
    branches: region?.children ?? [],
    offices: branch?.children ?? [],
    pgs: office?.children ?? [],
    workgroups: pg?.children ?? [],
  };
}

/** 数据范围覆盖的工作组 id；返回 null 表示不限。 */
function resolveScopeWorkgroups(org: OrgNode[], scope: DataScope): Set<string> | null {
  if (scope.workgroups.length > 0) return new Set(scope.workgroups);
  const deepest = scope.pg || scope.office || scope.branch || scope.region || scope.company;
  if (!deepest) return null;
  const result = new Set<string>();
  const walk = (nodes: OrgNode[], inside: boolean) => {
    for (const node of nodes) {
      const within = inside || node.id === deepest;
      if (node.children?.length) walk(node.children, within);
      else if (within) result.add(node.id);
    }
  };
  walk(org, false);
  return result;
}

export function filterByScope(dataset: OverviewDataset, scope: DataScope) {
  const workgroups = resolveScopeWorkgroups(dataset.org, scope);
  const projects = workgroups ? dataset.projects.filter((project) => workgroups.has(project.workgroupId)) : dataset.projects;
  const projectIds = new Set(projects.map((project) => project.id));
  const devices = workgroups ? dataset.devices.filter((device) => projectIds.has(device.projectId)) : dataset.devices;
  return { projects, devices };
}

// ---------------------------------------------------------------------------
// 统计（口径与设计稿字段说明一致）
// ---------------------------------------------------------------------------

type RegistrationBreakdown = { total: number; registered: number; unregistered: number; online: number; abnormal: number };

function breakdown(devices: OverviewDevice[]): RegistrationBreakdown {
  let registered = 0;
  let online = 0;
  for (const device of devices) {
    if (device.status !== "unregistered") registered++;
    if (device.status === "online") online++;
  }
  return { total: devices.length, registered, unregistered: devices.length - registered, online, abnormal: registered - online };
}

const ratio = (part: number, whole: number) => (whole === 0 ? 0 : part / whole);

export function computeOverviewStats(projects: OverviewProject[], devices: OverviewDevice[]) {
  const activeProjects = new Set(devices.map((device) => device.projectId));
  const validContract = devices.filter((device) => device.contractValid);
  const invalidScheduled = devices.filter((device) => !device.contractValid && device.scheduled);
  // 在保总台量：维保合同有效的所有设备 + 有编排无合同的所有设备
  const inWarranty = [...validContract, ...invalidScheduled];
  // 设备注册率：有云管家协议台量中，已注册台量 / 有云管家协议台量
  const withAgreement = breakdown(inWarranty.filter((device) => device.agreement));
  // 真实在线率：在保总台量内已注册台量中，在线设备台量 / 已注册台量
  const warrantyBreakdown = breakdown(inWarranty);
  const expiring = devices.filter((device) => device.steward && device.contractExpiring);

  return {
    kpi: {
      projects: projects.filter((project) => activeProjects.has(project.id)).length,
      devices: devices.length,
      elevators: devices.filter((device) => device.kind === "elevator").length,
      escalators: devices.filter((device) => device.kind === "escalator").length,
      stewards: devices.filter((device) => device.steward).length,
    },
    inWarranty: inWarranty.length,
    registrationRate: ratio(withAgreement.registered, withAgreement.total),
    onlineRate: ratio(warrantyBreakdown.online, warrantyBreakdown.registered),
    contract: {
      valid: validContract.length,
      withAgreement: breakdown(validContract.filter((device) => device.agreement)),
      withoutAgreement: breakdown(validContract.filter((device) => !device.agreement)),
      invalidScheduled: breakdown(invalidScheduled),
      expiring: {
        total: expiring.length,
        company: expiring.filter((device) => device.ownership === "company").length,
        customer: expiring.filter((device) => device.ownership === "customer").length,
      },
    },
  };
}

export type OverviewStats = ReturnType<typeof computeOverviewStats>;

/** 近 7 天的注册率 / 在线率走势；最后一天等于当前统计值，前几天在其附近按固定种子浮动。 */
export function buildTrend(registrationRate: number, onlineRate: number, today = new Date()) {
  const random = createRandom(Math.round(registrationRate * 1000) * 31 + Math.round(onlineRate * 1000));
  const clamp = (value: number) => Math.min(1, Math.max(0, value));
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (6 - index));
    const isToday = index === 6;
    const drift = (6 - index) * 0.012;
    return {
      date,
      registration: isToday ? registrationRate : clamp(registrationRate - drift + (random() - 0.5) * 0.06),
      online: isToday ? onlineRate : clamp(onlineRate - drift * 0.6 + (random() - 0.5) * 0.05),
    };
  });
}

// ---------------------------------------------------------------------------
// 设备筛选
// ---------------------------------------------------------------------------

export type DeviceFilterKey =
  | "kind"
  | "controller"
  | "claim"
  | "schedule"
  | "steward"
  | "status"
  | "dispatch"
  | "ownership"
  | "contract"
  | "contractType"
  | "expiring"
  | "agreement";

/** 每个筛选项都可多选；空数组表示不限。 */
export type DeviceFilters = Record<DeviceFilterKey, string[]>;

export const EMPTY_DEVICE_FILTERS: DeviceFilters = {
  kind: [],
  controller: [],
  claim: [],
  schedule: [],
  steward: [],
  status: [],
  dispatch: [],
  ownership: [],
  contract: [],
  contractType: [],
  expiring: [],
  agreement: [],
};

export const CONTROLLER_OPTIONS: ControllerType[] = ["LCE", "KCE", "KCECPUc", "STEP", "GCE", "NKE", "ESC", "KSE", "KIE"];

/**
 * 选项值与设计稿下拉内容一一对应。
 * 同一筛选项内多选为「或」，不同筛选项之间为「且」；空数组表示不限。
 */
export function matchesDeviceFilters(device: OverviewDevice, filters: DeviceFilters) {
  const anyOf = (selected: string[], test: (value: string) => boolean) => selected.length === 0 || selected.some(test);
  const bool = (actual: boolean | null) => (value: string) => (value === "yes" ? actual === true : actual === false);

  if (!anyOf(filters.kind, (value) => device.kind === value)) return false;
  if (!anyOf(filters.controller, (value) => device.controller === value)) return false;
  if (!anyOf(filters.claim, bool(device.claimed))) return false;
  if (!anyOf(filters.schedule, bool(device.scheduled))) return false;
  if (!anyOf(filters.steward, bool(device.steward))) return false;
  if (
    !anyOf(filters.status, (value) =>
      value === "offline15" ? device.status === "offline" && device.offlineDays >= 15 : device.status === value,
    )
  )
    return false;
  if (!anyOf(filters.dispatch, bool(device.isnDispatch))) return false;
  if (!anyOf(filters.ownership, (value) => device.ownership === value)) return false;
  if (!anyOf(filters.contract, bool(device.contractValid))) return false;
  if (!anyOf(filters.contractType, (value) => device.contractType === value)) return false;
  // 「所有合同」不过滤；只选「30 天内到期」时才保留临期合同
  if (!anyOf(filters.expiring, (value) => value === "all" || device.contractExpiring)) return false;
  if (!anyOf(filters.agreement, bool(device.agreement))) return false;
  return true;
}
