import type { ComponentType, ReactNode, SVGProps } from "react";
import { Button, Link, MessagePlugin } from "tdesign-react";
import { CheckRectangleIcon, UserMaintenanceIcon } from "./icons/device-detail-icons";
import { NodeIcon } from "./icons/device-icons";
import {
  ArrowUpIcon,
  Chart1Icon,
  ClockIcon,
  CurrentIcon,
  DashboardIcon,
  ElevatorDoorClosedIcon,
  ElevatorDoorIcon,
  ElevatorDoorOpenIcon,
  LayersIcon,
  LevelingIcon,
  More1Icon,
  Refresh1Icon,
  ThermometerIcon,
  VibrationLateralIcon,
  VibrationLongitudinalIcon,
  VibrationVerticalIcon,
  WarningTriangleIcon,
  WaterDropletsIcon,
} from "./icons/live-data-icons";
import { DetailSection } from "./device-detail/DetailSection";
import { StatusLabel } from "./StatusLabel";

/**
 * 设备详情 · 实时数据页签（Figma IOT Delivery 8460:8453「轿门传感器数据字段增加」）。
 *
 * 四个分区自上而下：
 *   · 实时数据   6 格一行，图标底 color/blue/70 + 品牌色图标
 *   · 传感器数据 轿门A / 轿门B（各 8 项，4 格一行）与机房（5 项一行）三组平铺，组间以虚线 + 组名分隔；
 *                图标底 color/purple/50 + 紫色图标；厅门回路异常值用错误色
 *   · 运行数据   4 格一行，图标底 color/grey/250 + 次要文字色图标
 *   · 模块信息   主模块行（灰底）+ 子模块行（浅灰底，左缩进 30px，虚线树形连接线），行尾「重启模块 / 系统升级 / 更多」
 */

type Language = "en" | "cn";
type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const T = {
  en: {
    realtimeData: "Real-time Data",
    sensorData: "Sensor Data",
    operationData: "Operation Data",
    moduleInfo: "Module Info",
    currentFloor: "Current Floor",
    runSpeed: "Speed",
    serviceMode: "Service Mode",
    doorAStat: "Car Door A",
    doorBStat: "Car Door B",
    doorZoneStat: "Door Zone",
    doorASensor: "Car Door A Sensor",
    doorBSensor: "Car Door B Sensor",
    machineRoomSensor: "Machine Room Sensor",
    temperature: "Temperature",
    humidity: "Humidity",
    velocity: "Speed",
    leveling: "Leveling",
    lateralVibration: "Lateral Vibration",
    longitudinalVibration: "Longitudinal Vibration",
    verticalVibration: "Vertical Vibration",
    noise: "Noise",
    inspectionCircuit: "Inspection Circuit",
    landingDoorACircuit: "Landing Door A Circuit",
    landingDoorBCircuit: "Landing Door B Circuit",
    runDuration: "Run Duration",
    startFloor: "Start Floor",
    stopFloor: "Stop Floor",
    upward: "Moving up",
    values: { normal: "Normal", closed: "Closed", opened: "Open", inZone: "In Zone", level: "Level" },
    columns: {
      name: "Module Name",
      status: "Connection",
      serial: "Serial No.",
      type: "Type",
      registration: "Reg. Status",
      version: "SW Version",
      actions: "Actions",
    },
    online: "Online",
    registered: "Registered",
    restart: "Restart Module",
    upgrade: "System Upgrade",
    more: (name: string) => `More actions for ${name}`,
    demoOnly: "Demo only. No command was sent to the device.",
  },
  cn: {
    realtimeData: "实时数据",
    sensorData: "传感器数据",
    operationData: "运行数据",
    moduleInfo: "模块信息",
    currentFloor: "当前楼层",
    runSpeed: "运行速度",
    serviceMode: "服务模式",
    doorAStat: "轿门A状态",
    doorBStat: "轿门B状态",
    doorZoneStat: "门区状态",
    doorASensor: "轿门A传感器",
    doorBSensor: "轿门B传感器",
    machineRoomSensor: "机房传感器",
    temperature: "温度",
    humidity: "湿度",
    velocity: "速度",
    leveling: "平层感应",
    lateralVibration: "横向振动",
    longitudinalVibration: "纵向振动",
    verticalVibration: "垂直振动",
    noise: "噪音",
    inspectionCircuit: "检修回路",
    landingDoorACircuit: "厅门A回路",
    landingDoorBCircuit: "厅门B回路",
    runDuration: "运行持续时间",
    startFloor: "启动楼层",
    stopFloor: "停止楼层",
    upward: "上行",
    values: { normal: "正常", closed: "已关门", opened: "已开门", inZone: "在门区", level: "水平" },
    columns: {
      name: "模块名称",
      status: "连接状态",
      serial: "序列号",
      type: "类型",
      registration: "注册状态",
      version: "软件版本",
      actions: "操作",
    },
    online: "在线",
    registered: "已注册",
    restart: "重启模块",
    upgrade: "系统升级",
    more: (name: string) => `${name} 更多操作`,
    demoOnly: "演示环境，未向设备下发指令",
  },
};

type Copy = (typeof T)["en"];

const TIMESTAMP = "2026-04-04 16:49:39";

// ─── 分区与数据格 ──────────────────────────────────────────────────────────────

/** 分区卡片：通用卡片标题（DetailSection，Figma 7363:30962）+ 12px 内边距的内容区。 */
function LiveSection({ id, title, timestamp, children }: { id: string; title: string; timestamp?: string; children: ReactNode }) {
  return (
    <DetailSection title={title} titleId={id} timestamp={timestamp}>
      <div className="p-3">{children}</div>
    </DetailSection>
  );
}

type Tone = "brand" | "sensor" | "neutral";

const TILE_CLASS: Record<Tone, string> = {
  brand: "bg-metric-tile-brand text-brand",
  sensor: "bg-metric-tile-sensor text-metric-icon-sensor",
  neutral: "bg-metric-tile-neutral text-secondary-text",
};

type Metric = {
  label: string;
  value: string;
  icon: Icon;
  /** 数值后的附加图标，例如当前楼层的运行方向 */
  trailing?: ReactNode;
  /** 异常值（如厅门回路）用错误色 */
  alert?: boolean;
};

/** 数据格：灰底 6px 圆角，左侧标签 + 数值，右侧 36px 圆角 12 的图标底。 */
function MetricCell({ metric, tone }: { metric: Metric; tone: Tone }) {
  const { label, value, icon: MetricIcon, trailing, alert } = metric;
  return (
    <div className="flex min-w-0 items-center justify-between gap-2 rounded-md bg-secondarycontainer px-4 py-2.5">
      <div className="flex min-w-0 flex-col gap-0.5">
        <dt className="truncate text-foot12 text-secondary-text">{label}</dt>
        <dd className={`m-0 flex items-end gap-0.5 text-body font-semibold ${alert ? "text-error" : "text-primary-text"}`}>
          <span className="whitespace-nowrap">{value}</span>
          {trailing}
        </dd>
      </div>
      <span aria-hidden="true" className={`flex size-9 shrink-0 items-center justify-center rounded-xl ${TILE_CLASS[tone]}`}>
        <MetricIcon className="size-5" />
      </span>
    </div>
  );
}

function MetricGrid({ metrics, tone, columns }: { metrics: Metric[]; tone: Tone; columns: string }) {
  return (
    <dl className={`m-0 grid gap-3 ${columns}`}>
      {metrics.map((metric) => (
        <MetricCell key={metric.label} metric={metric} tone={tone} />
      ))}
    </dl>
  );
}

/** 传感器分组标题：40px 虚线 + 组名 + 撑满的虚线。 */
function GroupDivider({ id, label }: { id: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span aria-hidden="true" className="w-10 border-t border-dashed border-stroke" />
      <h3 id={id} className="m-0 shrink-0 text-foot12 font-normal text-primary-text">
        {label}
      </h3>
      <span aria-hidden="true" className="flex-1 border-t border-dashed border-stroke" />
    </div>
  );
}

// ─── 各分区 ────────────────────────────────────────────────────────────────────

function RealtimeDataSection({ t }: { t: Copy }) {
  const metrics: Metric[] = [
    {
      label: t.currentFloor,
      value: "1F [5]",
      icon: LayersIcon,
      trailing: (
        <span role="img" aria-label={t.upward} className="inline-flex">
          <ArrowUpIcon className="size-[22px]" />
        </span>
      ),
    },
    { label: t.runSpeed, value: "2m/s", icon: DashboardIcon },
    { label: t.serviceMode, value: t.values.normal, icon: CheckRectangleIcon },
    { label: t.doorAStat, value: t.values.closed, icon: ElevatorDoorClosedIcon },
    { label: t.doorBStat, value: t.values.opened, icon: ElevatorDoorOpenIcon },
    { label: t.doorZoneStat, value: t.values.inZone, icon: WarningTriangleIcon },
  ];
  return (
    <LiveSection id="live-realtime-title" title={t.realtimeData} timestamp={TIMESTAMP}>
      <MetricGrid metrics={metrics} tone="brand" columns="grid-cols-2 md:grid-cols-3 xl:grid-cols-6" />
    </LiveSection>
  );
}

function SensorDataSection({ t }: { t: Copy }) {
  const doorSensor: Metric[] = [
    { label: t.temperature, value: "23.5℃", icon: ThermometerIcon },
    { label: t.humidity, value: "58.1%", icon: WaterDropletsIcon },
    { label: t.velocity, value: "2m/s", icon: DashboardIcon },
    { label: t.leveling, value: t.values.level, icon: LevelingIcon },
    { label: t.lateralVibration, value: "12mg", icon: VibrationLateralIcon },
    { label: t.longitudinalVibration, value: "8mg", icon: VibrationLongitudinalIcon },
    { label: t.verticalVibration, value: "4mg", icon: VibrationVerticalIcon },
    { label: t.noise, value: "50dB", icon: CurrentIcon },
  ];
  const machineRoom: Metric[] = [
    { label: t.temperature, value: "23.5℃", icon: ThermometerIcon },
    { label: t.humidity, value: "58.1%", icon: WaterDropletsIcon },
    { label: t.inspectionCircuit, value: "402", icon: UserMaintenanceIcon },
    { label: t.landingDoorACircuit, value: "302", icon: ElevatorDoorIcon, alert: true },
    { label: t.landingDoorBCircuit, value: "302", icon: ElevatorDoorIcon, alert: true },
  ];
  const groups = [
    { id: "live-sensor-door-a", label: t.doorASensor, metrics: doorSensor, columns: "grid-cols-2 xl:grid-cols-4" },
    { id: "live-sensor-door-b", label: t.doorBSensor, metrics: doorSensor, columns: "grid-cols-2 xl:grid-cols-4" },
    { id: "live-sensor-machine-room", label: t.machineRoomSensor, metrics: machineRoom, columns: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5" },
  ];
  return (
    <LiveSection id="live-sensor-title" title={t.sensorData} timestamp={TIMESTAMP}>
      <div className="flex flex-col gap-3">
        {groups.map((group) => (
          <section key={group.id} aria-labelledby={group.id} className="flex flex-col gap-1">
            <GroupDivider id={group.id} label={group.label} />
            <MetricGrid metrics={group.metrics} tone="sensor" columns={group.columns} />
          </section>
        ))}
      </div>
    </LiveSection>
  );
}

function OperationDataSection({ t }: { t: Copy }) {
  const metrics: Metric[] = [
    { label: t.runDuration, value: "30s", icon: ClockIcon },
    { label: t.startFloor, value: "1F [2]", icon: LayersIcon },
    { label: t.stopFloor, value: "11F [12]", icon: LayersIcon },
    { label: t.serviceMode, value: t.values.normal, icon: CheckRectangleIcon },
  ];
  return (
    <LiveSection id="live-operation-title" title={t.operationData} timestamp={TIMESTAMP}>
      <MetricGrid metrics={metrics} tone="neutral" columns="grid-cols-2 xl:grid-cols-4" />
    </LiveSection>
  );
}

// ─── 模块信息 ──────────────────────────────────────────────────────────────────

type ModuleRow = { id: string; name: string; serial: string; type: string; version: string };

const MAIN_MODULE: ModuleRow = {
  id: "main",
  name: "310",
  serial: "KM52152006G02.100ALZ244700005",
  type: "KONE Connection 310",
  version: "2.0.1d",
};

const SUB_MODULES: ModuleRow[] = [
  { id: "nexus-1", name: "Nexus-D", serial: "KM52152006G02.100ALZ244700005", type: "KONE Connection 310", version: "SN1.00.07" },
  { id: "nexus-2", name: "Nexus-D", serial: "KM52152006G02.100ALZ244700005", type: "KONE Connection 310", version: "SN1.00.07" },
];

/**
 * 列宽按设计稿表头（146 / 86 / 287 / 194 / 110 / 108）的比例分配剩余宽度（fr），操作列按内容收紧，
 * 宽屏时前六列均匀拉开；行首、行尾内边距 = 表格首尾边距（--iot-table-edge-start / -end）（与其他表格首尾列边距一致）；每列设下限，窄屏时横向滚动。所有行共用同一套列模板，子模块行的缩进只体现在
 * 背景与首列内边距上，因此各列与表头始终对齐。
 */
const COLUMNS = [
  "minmax(176px,146fr)",
  "minmax(86px,86fr)",
  "minmax(270px,287fr)",
  "minmax(170px,194fr)",
  "minmax(90px,110fr)",
  "minmax(90px,108fr)",
  // 操作列按内容收紧，多余宽度分给前面各列；行尾保留统一边距
  "max-content",
].join(" ");
/** 子模块行相对主模块行的缩进（设计稿 30px），树形连接线落在缩进区内 */
const SUB_INDENT = 30;

function ModuleActions({ t, row }: { t: Copy; row: ModuleRow }) {
  const notify = (event: React.MouseEvent) => {
    event.preventDefault();
    MessagePlugin.info(t.demoOnly, 3000);
  };
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-3">
        <Link theme="primary" hover="color" href="#" prefixIcon={<Refresh1Icon className="size-4" />} onClick={notify}>
          {t.restart}
        </Link>
        <Link theme="primary" hover="color" href="#" prefixIcon={<Chart1Icon className="size-4" />} onClick={notify}>
          {t.upgrade}
        </Link>
      </div>
      <Button
        variant="text"
        shape="square"
        size="small"
        aria-label={t.more(row.name)}
        icon={<More1Icon className="size-4 text-icon-primary" />}
        onClick={notify}
      />
    </div>
  );
}

function ModuleCells({ t, row, isMain }: { t: Copy; row: ModuleRow; isMain: boolean }) {
  const valueClass = `truncate pr-3 ${isMain ? "font-medium" : ""}`;
  return (
    <>
      <div role="cell" className="flex min-w-0 items-center gap-[18px] pr-3" style={isMain ? undefined : { paddingLeft: SUB_INDENT }}>
        {!isMain && (
          <span aria-hidden="true" className="flex size-6 shrink-0 items-center justify-center rounded-md bg-metric-tile-neutral text-secondary-text">
            <NodeIcon className="size-3.5" />
          </span>
        )}
        <span className={valueClass}>{row.name}</span>
      </div>
      <div role="cell" className="flex items-center">
        <StatusLabel tone="success">{t.online}</StatusLabel>
      </div>
      <div role="cell" className={valueClass}>{row.serial}</div>
      <div role="cell" className={valueClass}>{row.type}</div>
      <div role="cell" className={valueClass}>{t.registered}</div>
      <div role="cell" className={valueClass}>{row.version}</div>
      <div role="cell" className="flex items-center">
        <ModuleActions t={t} row={row} />
      </div>
    </>
  );
}

function ModuleInfoSection({ t }: { t: Copy }) {
  const headers = [t.columns.name, t.columns.status, t.columns.serial, t.columns.type, t.columns.registration, t.columns.version, t.columns.actions];
  return (
    <LiveSection id="live-module-title" title={t.moduleInfo}>
      <div className="overflow-x-auto">
        {/* 列模板定义在表格上，各行用 subgrid 继承：操作列按所有行里最宽的内容收紧，表头与各行始终同宽对齐 */}
        <div role="table" aria-labelledby="live-module-title" className="grid min-w-[1100px] gap-y-2 text-body text-primary-text" style={{ gridTemplateColumns: COLUMNS }}>
          <div role="row" className="col-span-full grid grid-cols-subgrid pl-[var(--iot-table-edge-start)] pr-[var(--iot-table-edge-end)]">
            {headers.map((header) => (
              <div key={header} role="columnheader" className="font-medium text-placeholder">
                {header}
              </div>
            ))}
          </div>

          <div role="rowgroup" className="col-span-full grid grid-cols-subgrid gap-y-2">
            <div role="row" className="col-span-full grid grid-cols-subgrid items-center rounded-md bg-secondarycontainer py-2 pl-[var(--iot-table-edge-start)] pr-[var(--iot-table-edge-end)]">
              <ModuleCells t={t} row={MAIN_MODULE} isMain />
            </div>

            {SUB_MODULES.map((row, index) => {
              const isLast = index === SUB_MODULES.length - 1;
              return (
                <div key={row.id} className="relative col-span-full grid grid-cols-subgrid">
                  {/* 子模块行背景（color/grey/50）从缩进处开始 */}
                  <span aria-hidden="true" className="absolute inset-y-0 right-0 rounded-md bg-section-header" style={{ left: SUB_INDENT }} />
                  {/* 树形连接线（设计稿 Vector 13，#c8cad0 虚线）：从上一行底部竖下，在本行中线处横向接入；末行转角带圆角 */}
                  <span
                    aria-hidden="true"
                    className={`absolute -top-2 h-[calc(50%+8px)] w-4 border-b border-l border-dashed border-component-border ${isLast ? "rounded-bl-md" : ""}`}
                    style={{ left: SUB_INDENT - 16 }}
                  />
                  {!isLast && (
                    <span aria-hidden="true" className="absolute bottom-0 top-1/2 border-l border-dashed border-component-border" style={{ left: SUB_INDENT - 16 }} />
                  )}
                  <div role="row" className="relative col-span-full grid grid-cols-subgrid items-center py-1 pl-[var(--iot-table-edge-start)] pr-[var(--iot-table-edge-end)]">
                    <ModuleCells t={t} row={row} isMain={false} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </LiveSection>
  );
}

// ─── 导出 ──────────────────────────────────────────────────────────────────────

export function LiveDataContent({ language }: { language: Language }) {
  const t = T[language];
  return (
    <div className="flex w-full flex-col gap-4">
      <RealtimeDataSection t={t} />
      <SensorDataSection t={t} />
      <OperationDataSection t={t} />
      <ModuleInfoSection t={t} />
    </div>
  );
}
