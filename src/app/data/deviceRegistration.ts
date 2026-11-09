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

export const SENSOR_PORT_OPTIONS: Record<RegistrationSensorKind, string[]> = {
  doorA: ["平层感应-上", "平层感应-下"],
  doorB: ["平层感应-上", "平层感应-下"],
  machine: ["轿厢回路", "厅门回路"],
};

export const realtimeMetrics = [
  ["当前楼层", "1F [5]"],
  ["运行状态", "正常服务"],
  ["门状态", "关门"],
  ["门区", "门区内"],
  ["速度", "2m/s"],
  ["负载", "00%"],
] as const;
