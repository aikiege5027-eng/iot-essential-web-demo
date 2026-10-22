/**
 * 设备事件的演示数据（设备详情 · 设备事件页签，Figma IOT Delivery 7447:28496 / 7447:28827 / 7173:14163）。
 *
 * 全部按「设备编号 + 时间桶」用固定种子生成，同一台设备、同一时间段每次生成的结果完全一致：
 *   · 业务事件（故障 / 警铃 / 模式变化 / 客户通知 / 服务需求 / 走修工单 / 保养工单）按小时桶生成，
 *     默认列表、Top3 统计、时间戳列表与时间线读的是同一份数据；
 *   · 运动记录（静止 / 运行）与呼叫记录只在时间线里出现，按 5 分钟桶生成。
 */

export type DeviceEventType = "fault" | "alarm" | "mode" | "customer" | "service" | "repair" | "maintenance";
export type TimelineRowType = "motion" | "call" | DeviceEventType;

export const EVENT_TYPES: DeviceEventType[] = ["fault", "alarm", "mode", "customer", "service", "repair", "maintenance"];
export const TIMELINE_ROWS: TimelineRowType[] = ["motion", "call", ...EVENT_TYPES];

export type DeviceEvent = {
  id: string;
  type: DeviceEventType;
  /** 事件代码；警铃、模式变化没有代码 */
  code: string | null;
  /** 描述；警铃没有描述 */
  description: string | null;
  time: number;
  /** 故障类与工单类有恢复状态，其余为 null（显示「-」） */
  status: "unrecovered" | "recovered" | null;
};

export type MotionSegment = { id: string; state: "static" | "running"; start: number; end: number; from: string; to?: string; fromLevel: number; toLevel?: number };
export type CallRecord = { id: string; time: number; kind: "hall" | "car"; floor: string };

const HOUR = 3600_000;
const MINUTE = 60_000;

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

const seedOf = (deviceId: string, bucket: number, salt: number) => {
  let value = 2166136261 ^ salt;
  for (const char of `${deviceId}:${bucket}`) value = Math.imul(value ^ char.charCodeAt(0), 16777619);
  return value >>> 0;
};

const FAULTS: [string, string][] = [
  ["10096", "厅门触点未打开"],
  ["15119", "运行过程中厅门触点断开"],
  ["00834", "安全回路断开"],
  ["48394", "平层误差过大"],
  ["20115", "门锁回路异常"],
  ["30027", "驱动器过热"],
];
const CUSTOMER: [string, string][] = [
  ["CN000007", "电梯停止运行"],
  ["CN000009", "电梯门打开异常"],
  ["CN000002", "电梯困人"],
  ["CN000003", "电梯异响"],
];
const SERVICE: [string, string][] = [
  ["SN000008", "楼层位置丢失"],
  ["SN000012", "电梯门打开异常"],
  ["SN000004", "轿厢照明故障"],
  ["SN000003", "按钮失灵"],
];
const REPAIR = ["厅门触点断开", "安全隐患", "门机异响", "钢丝绳磨损"];
const MAINTENANCE = ["半月保", "季度保", "半年保", "年度保"];
const MODES: [string, string][] = [
  ["检修模式", "普通模式"],
  ["普通模式", "检修模式"],
  ["普通模式", "消防模式"],
  ["消防模式", "普通模式"],
];

/** 各类型每小时出现的概率权重：模式变化、客户通知更频繁，工单较少。 */
const TYPE_WEIGHTS: [DeviceEventType, number][] = [
  ["fault", 3],
  ["alarm", 2],
  ["mode", 4],
  ["customer", 3],
  ["service", 2],
  ["repair", 1],
  ["maintenance", 1],
];
const TOTAL_WEIGHT = TYPE_WEIGHTS.reduce((sum, [, weight]) => sum + weight, 0);

function pickType(random: () => number): DeviceEventType {
  let roll = random() * TOTAL_WEIGHT;
  for (const [type, weight] of TYPE_WEIGHTS) {
    roll -= weight;
    if (roll < 0) return type;
  }
  return "mode";
}

function hourEvents(deviceId: string, hour: number): DeviceEvent[] {
  const random = createRandom(seedOf(deviceId, hour, 1));
  const count = 3 + Math.floor(random() * 7); // 3–9 条 / 小时，时间戳的一小时窗口里各类事件都有机会出现
  const events: DeviceEvent[] = [];
  for (let index = 0; index < count; index++) {
    const type = pickType(random);
    const time = hour * HOUR + Math.floor(random() * HOUR / 1000) * 1000;
    const pickOne = <T,>(items: T[]) => items[Math.floor(random() * items.length)];
    const recovered = random() < 0.6 ? "recovered" : "unrecovered";
    let code: string | null = null;
    let description: string | null = null;
    let status: DeviceEvent["status"] = null;
    switch (type) {
      case "fault": {
        const [faultCode, text] = pickOne(FAULTS);
        code = faultCode;
        description = text;
        status = recovered;
        break;
      }
      case "alarm":
        break;
      case "mode": {
        const [from, to] = pickOne(MODES);
        description = `${from}→${to}`;
        break;
      }
      case "customer": {
        const [customerCode, text] = pickOne(CUSTOMER);
        code = customerCode;
        description = text;
        status = random() < 0.5 ? recovered : null;
        break;
      }
      case "service": {
        const [serviceCode, text] = pickOne(SERVICE);
        code = serviceCode;
        description = text;
        status = random() < 0.5 ? recovered : null;
        break;
      }
      case "repair":
        code = String(58300000 + Math.floor(random() * 99999));
        description = pickOne(REPAIR);
        status = random() < 0.5 ? recovered : null;
        break;
      case "maintenance":
        code = String(94900000 + Math.floor(random() * 99999));
        description = pickOne(MAINTENANCE);
        break;
    }
    events.push({ id: `${deviceId}-${hour}-${index}`, type, code, description, time, status });
  }
  return events;
}

/** [start, end) 内的业务事件，按时间倒序（最新在前）。 */
export function getDeviceEvents(deviceId: string, start: number, end: number): DeviceEvent[] {
  const result: DeviceEvent[] = [];
  for (let hour = Math.floor(start / HOUR); hour * HOUR < end; hour++) {
    for (const event of hourEvents(deviceId, hour)) {
      if (event.time >= start && event.time < end) result.push(event);
    }
  }
  return result.sort((a, b) => b.time - a.time);
}

// ---------------------------------------------------------------------------
// 时间线专用：运动记录 + 呼叫记录（5 分钟桶）
// ---------------------------------------------------------------------------

const FLOORS = ["B1", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "12F"];
const BUCKET = 5 * MINUTE;

function bucketMotion(deviceId: string, bucket: number): { segments: MotionSegment[]; calls: CallRecord[] } {
  const random = createRandom(seedOf(deviceId, bucket, 2));
  // 每个桶从一个确定的楼层开始，避免跨桶时楼层跳变太突兀也无所谓：演示里按桶独立
  let level = Math.floor(random() * FLOORS.length);
  let cursor = bucket * BUCKET;
  const end = cursor + BUCKET;
  const segments: MotionSegment[] = [];
  const calls: CallRecord[] = [];
  let running = random() < 0.5;
  let index = 0;
  while (cursor < end) {
    const duration = (running ? 8 + Math.floor(random() * 18) : 6 + Math.floor(random() * 40)) * 1000;
    const segmentEnd = Math.min(end, cursor + duration);
    if (running) {
      let target = Math.floor(random() * FLOORS.length);
      if (target === level) target = (level + 3) % FLOORS.length;
      segments.push({ id: `${deviceId}-m${bucket}-${index}`, state: "running", start: cursor, end: segmentEnd, from: FLOORS[level], to: FLOORS[target], fromLevel: level, toLevel: target });
      // 运行前多半有一次呼梯
      if (random() < 0.45) calls.push({ id: `${deviceId}-c${bucket}-${index}`, time: Math.max(bucket * BUCKET, cursor - 4000), kind: random() < 0.5 ? "hall" : "car", floor: FLOORS[target] });
      level = target;
    } else {
      segments.push({ id: `${deviceId}-m${bucket}-${index}`, state: "static", start: cursor, end: segmentEnd, from: FLOORS[level], fromLevel: level });
    }
    cursor = segmentEnd;
    running = !running;
    index++;
  }
  return { segments, calls };
}

export function getTimelineRecords(deviceId: string, start: number, end: number) {
  const segments: MotionSegment[] = [];
  const calls: CallRecord[] = [];
  for (let bucket = Math.floor(start / BUCKET); bucket * BUCKET < end; bucket++) {
    const part = bucketMotion(deviceId, bucket);
    segments.push(...part.segments.filter((segment) => segment.end > start && segment.start < end));
    calls.push(...part.calls.filter((call) => call.time >= start && call.time < end));
  }
  return { segments, calls };
}

// ---------------------------------------------------------------------------

export function topThree(events: DeviceEvent[], type: DeviceEventType, key: "code" | "description") {
  const counts = new Map<string, number>();
  for (const event of events) {
    if (event.type !== type) continue;
    const value = event[key];
    if (value) counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3);
}

export const TIME = { HOUR, MINUTE };
