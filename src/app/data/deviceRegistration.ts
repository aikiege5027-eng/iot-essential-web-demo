export const ADVANCED_EQUIPMENT_NUMBER = "32032032";
/** The sole equipment number that opens the mobile Connection 310 post-registration data flow. */
export const CONNECTION_310_POST_REGISTRATION_EQUIPMENT_NUMBER = "31031031";
export const DEMO_DTU_SERIAL = "KM52152006G02.100ALZ244700059";
export const DEMO_MACHINE_SENSOR_SERIAL = "KM52268921G24.100ALX202603014";

/** Immutable Figma fixture for the mobile-only Connection 310 post-registration screen. */
export const CONNECTION_310_REGISTRATION_DATA = {
  name: "办公楼北侧客梯",
  tag: "45509091",
  project: { cn: "通力电梯有限公司", en: "KONE Elevator Co., Ltd." },
  address: { cn: "江苏省苏州市工业园区吴胜路26号", en: "26 Wusheng Road, Suzhou Industrial Park, Jiangsu" },
  serial: "KM52152006G02.100ALZ244700059",
  software: "1.2.11",
  registrationTime: "2026/03/02 00:00:00",
  submodule: "LCECPU561",
  submoduleSerial: "KM773390",
  submoduleSoftware: "9.4.7",
} as const;

export type RegistrationSensorKind = "doorA" | "doorB" | "machine";

export type RegistrationSensorConfig = {
  kind: RegistrationSensorKind;
  enabled: boolean;
  placement: string;
  serial: string;
  ports: string[];
};

export type RegistrationFloor = {
  label: string;
  spacing: string;
  base: boolean;
};

export const recognizedFloorLabels = ["B1", "1F", "2F", "3F", "4F", "5F"];

export function createDemoFloors(count = recognizedFloorLabels.length): RegistrationFloor[] {
  return Array.from({ length: count }, (_, index) => ({
    label: count === recognizedFloorLabels.length ? recognizedFloorLabels[index] : index === 0 ? "B1" : `${index}F`,
    spacing: "",
    base: false,
  }));
}

/**
 * 传感器功能选项（IOT Delivery 12360:76329「传感器选择」）。
 * 轿门传感器固定两项；机房传感器的回路按轿门数量变化：
 * 单轿门为 检修 / 厅门 / 轿门 三项，A、B 两个轿门时厅门与轿门各拆成 A / B（共五项）。
 */
const DOOR_SENSOR_OPTIONS = ["光电传感器-平层感应_上", "光电传感器-平层感应_下"];
export function getSensorPortOptions(kind: RegistrationSensorKind, pairedDoors: boolean): string[] {
  if (kind !== "machine") return DOOR_SENSOR_OPTIONS;
  return pairedDoors
    ? ["电流传感器-检修回路", "电流传感器-厅门A回路", "电流传感器-厅门B回路", "电流传感器-轿门A回路", "电流传感器-轿门B回路"]
    : ["电流传感器-检修回路", "电流传感器-厅门回路", "电流传感器-轿门回路"];
}
/** 轿门数量变化后，清掉机房传感器里已不在新选项中的功能，避免保留无效值。 */
export function sanitizeMachinePorts(ports: string[], pairedDoors: boolean): string[] {
  const options = getSensorPortOptions("machine", pairedDoors);
  return ports.map((port) => (options.includes(port) ? port : ""));
}

/** 选择器里的完整功能名（如「光电传感器-平层感应_上」）在设备数据页显示为「平层感应-上」。 */
export function sensorFunctionName(full: string): string {
  const [, ...rest] = full.split("-");
  return (rest.length ? rest.join("-") : full).replace(/_/g, "-");
}
/** 实时数据方格的标签：「平层感应-上」→「平层感应上」。 */
export function sensorFunctionTileLabel(full: string): string {
  return sensorFunctionName(full).replace(/-/g, "");
}
export const realtimeMetrics = [
  ["当前楼层", "1F [5]"],
  ["运行状态", "正常服务"],
  ["门状态", "关门"],
  ["门区", "门区内"],
  ["速度", "2m/s"],
  ["负载", "00%"],
] as const;
