export const ADVANCED_EQUIPMENT_NUMBER = "32032032";
/** 已注册的 Connection 320 设备：提交 DTU 序列号后直接进入设备数据页（IOT Delivery 10291:155068），不再走配置与安装检查。 */
export const REGISTERED_320_EQUIPMENT_NUMBER = "32032000";
/** 已注册但机房传感器尚未配置的 Connection 320 设备（IOT Delivery 10291:154884）：验证后直接进入设备数据页，顶部提示「当前有传感器未完成配置」。 */
export const REGISTERED_320_INCOMPLETE_EQUIPMENT_NUMBER = "32032001";
/** 已注册的 Connection 320 设备，线下新增了 SML：设备数据页顶部提示可注册 SML，注册后模块信息与实时数据多一套 SML 数据（楼层信息不区分）。 */
export const REGISTERED_320_SML_EQUIPMENT_NUMBER = "32032002";
/** The sole equipment number that opens the mobile Connection 310 post-registration data flow. */
export const CONNECTION_310_POST_REGISTRATION_EQUIPMENT_NUMBER = "31031031";
/** 已注册的 Connection 310 设备：设备号验证后直接进入设备数据页（与注册完成后的页面一致，只是底部没有按钮）。 */
export const REGISTERED_310_EQUIPMENT_NUMBER = "31031000";
/** 已注册的 Connection 310 设备，线下新增了 SML 传感器：设备数据页顶部提示「当前设备可注册 SML 信息」并给出「立即注册」入口。 */
export const REGISTERED_310_SML_EQUIPMENT_NUMBER = "31031001";
/**
 * 31031001 在云管家（AWS）已注册的模块数据（参考云管家模块页）：两个主模块，第一个主模块 CPUc 下面有 5 个子模块。
 * 主模块字段：序列号 / 状态 / 类型ID / 级别 / FW_VERSION；子模块字段：序列号 / 类型ID / 软件版本。
 */
/** 设备卡片信息（名称、设备编号、所属项目、项目地址）；310 页面默认用 CONNECTION_310_REGISTRATION_DATA 里的同名字段。 */
export type RegistrationDeviceInfo = {
  name: { cn: string; en: string };
  tag: string;
  project: { cn: string; en: string };
  address: { cn: string; en: string };
};
/** 31031001 的设备卡片：设备编号就是输入的设备号 31031001；项目、地址、楼号取自云管家模块页参考图（客户成都金浣花实业有限公司，当前楼号 B座L1）。 */
export const DEVICE_INFO_310_SML: RegistrationDeviceInfo = {
  name: { cn: "B座L1", en: "Block B L1" },
  tag: REGISTERED_310_SML_EQUIPMENT_NUMBER,
  project: { cn: "成都金浣花实业有限公司", en: "Chengdu Jinhuanhua Industrial Co., Ltd." },
  address: { cn: "成都市浣花北路1号, 610000, 成都市", en: "1 Huanhua North Road, Chengdu, 610000" },
};
/**
 * 全新注册的 SML 设备卡片：设备编号就是输入的设备号，名称 / 项目 / 地址与设备号验证成功页展示的同一台电梯一致
 * （电梯名称 L3、标力大厦、福州市鼓楼区湖东路99号）。
 */
export function createSmlDeviceInfo(equipment: string): RegistrationDeviceInfo {
  return {
    name: { cn: "L3", en: "L3" },
    tag: equipment,
    project: { cn: "标力大厦", en: "Biaoli Building" },
    address: { cn: "福州市鼓楼区湖东路99号", en: "99 Hudong Road, Gulou District, Fuzhou" },
  };
}
/** LCE 类型设备 00000001：本身已注册 SML，后续需要补注册云管家（顶部提示 + 输入序列号）。 */
export const LCE_SML_REGISTERED_EQUIPMENT_NUMBER = "00000001";
/** 补注册云管家后加载进来的模块：沿用云管家模块页参考图，两个主模块的序列号换成输入的序列号。 */
export function createCloudModules(serial: string): CloudModule[] {
  return CLOUD_MODULES_310_SML.map((module) => module.kind === "main"
    ? { ...module, rows: module.rows.map((row, index) => (index === 0 ? { ...row, value: serial } : row)) }
    : module);
}
export type CloudModuleRow = { label: { cn: string; en: string }; value: string };
export type CloudModule = { kind: "main" | "sub"; title: string; rows: CloudModuleRow[] };
const CLOUD_LABEL = {
  serial: { cn: "序列号", en: "Serial" },
  status: { cn: "状态", en: "Status" },
  typeId: { cn: "类型ID", en: "Type ID" },
  level: { cn: "级别", en: "Level" },
  fw: { cn: "FW_VERSION", en: "FW_VERSION" },
  software: { cn: "软件版本", en: "Software version" },
};
const cloudMain = (title: string, typeId: string): CloudModule => ({
  kind: "main",
  title,
  rows: [
    { label: CLOUD_LABEL.serial, value: "316AZ251900522" },
    { label: CLOUD_LABEL.status, value: "Connect" },
    { label: CLOUD_LABEL.typeId, value: typeId },
    { label: CLOUD_LABEL.level, value: "Active" },
    { label: CLOUD_LABEL.fw, value: "7.10.1.1" },
  ],
});
const cloudSub = (title: string, serial: string, typeId: string, software: string): CloudModule => ({
  kind: "sub",
  title,
  rows: [
    { label: CLOUD_LABEL.serial, value: serial },
    { label: CLOUD_LABEL.typeId, value: typeId },
    { label: CLOUD_LABEL.software, value: software },
  ],
});
export const CLOUD_MODULES_310_SML: CloudModule[] = [
  cloudMain("CPUc", "KCECPUc"),
  cloudSub("GCD", "316AZ251900522", "GCD", "16.10.21.12"),
  cloudSub("AP", "316AZ251900522", "KCEAP", "9.7.4"),
  cloudSub("CPU", "316AZ251900522", "KCECPU", "16.10.2.7"),
  cloudSub("DRIVE", "107AZ251500221", "DRIVE KDM G01", "0.0.22.37"),
  cloudSub("4G", "100ALZ252000268", "KONE4G", "18.06.01.12"),
  cloudMain("KCESC", "Site controller"),
];

/** 全新的 SML 设备注册：流程同 DTU 注册（设备号 → 序列号），但序列号实际是 SML 的序列号，之后沿用 310 的主模块 / 子模块等待与注册完成方式。 */
export const SML_DEVICE_EQUIPMENT_NUMBER = "00000000";
export const DEMO_DTU_SERIAL = "KM52152006G02.100ALZ244700059";
export const DEMO_MACHINE_SENSOR_SERIAL = "KM52268921G24.100ALX202603014";
/** 点击注册 SML 弹窗里的扫码图标时直接填入的演示序列号（与机房传感器一样不弹扫码面板）。 */
export const DEMO_SML_SERIAL = "KM52268921G24.100ALX202603015";

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

/** 已注册 320 设备的演示配置（设计稿：轿门 A 左侧、轿门 B 右侧、机房，四个端口均为平层感应-上）。 */
/** `machineConfigured` 为 false 时机房传感器只有序列号，没有端口功能（设备数据页显示「未上线 / 未配置」）。 */
export function createRegistered320Sensors(serial: string, machineConfigured = true): RegistrationSensorConfig[] {
  const ports = Array.from({ length: 4 }, () => DOOR_SENSOR_OPTIONS[0]);
  return [
    { kind: "doorA", enabled: true, placement: "left", serial, ports },
    { kind: "doorB", enabled: true, placement: "right", serial, ports },
    { kind: "machine", enabled: true, placement: "machine room", serial, ports: machineConfigured ? ports : ["", "", "", ""] },
  ];
}
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
