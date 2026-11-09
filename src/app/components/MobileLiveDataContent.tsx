import { useState } from "react";
import type { ReactNode } from "react";
import { Button, Drawer, MessagePlugin } from "tdesign-react";
import { MobileBottomBar } from "./mobile/MobileShell";
import { CloseMIcon } from "./icons/mobile-icons";
import { DetailCardHeader } from "./device-detail/DetailSection";
import { MetricCard, type MetricCardMetric, type MetricCardTone } from "./device-detail/MetricCard";
import { CheckRectangleIcon, ChevronRightIcon } from "./icons/device-detail-icons";
import { NodeIcon } from "./icons/device-icons";
import {
  ArrowDownKoneIcon,
  ArrowUpIcon,
  ArrowUpKoneIcon,
  ClockIcon,
  DashboardIcon,
  ElevatorDoorClosedIcon,
  ElevatorDoorOpenIcon,
  LayersIcon,
  LinkIcon,
  LinkUnlinkIcon,
  Refresh1Icon,
  ThermometerIcon,
  WarningTriangleIcon,
  WaterDropletsIcon,
} from "./icons/live-data-icons";
import { StatusLabel } from "./StatusLabel";

/**
 * 设备详情 · Mobile 实时数据（Figma IOT Delivery 7779:20791）。
 *
 * 四个模块均使用 DetailCardHeader（7363:30962）的移动端标题变体：实时数据、
 * 传感器数据、运行数据与模块信息。数据格固定 100×106，按 375px 设计画板在
 * 343px 内容区内三列换行；模块卡保留主模块 / 子模块的关联关系与操作入口。
 */

type Language = "cn" | "en";
type SensorKey = "doorA" | "doorB" | "machineRoom";

const TIMESTAMP = "2026-04-04 16:49:39";

const COPY = {
  en: {
    realtimeData: "Real-time Data",
    sensorData: "Sensor Data",
    operationData: "Operation Data",
    moduleInfo: "Module Info",
    moduleDetails: "Module Details",
    currentFloor: "Current Floor",
    runSpeed: "Speed",
    serviceMode: "Service Mode",
    doorAStat: "Car Door A",
    doorBStat: "Car Door B",
    doorZoneStat: "Door Zone",
    temperature: "Temperature",
    humidity: "Humidity",
    velocity: "Velocity",
    levelingUp: "Leveling Up",
    levelingDown: "Leveling Down",
    runDuration: "Run Duration",
    startFloor: "Start Floor",
    stopFloor: "Stop Floor",
    serialNo: "Serial No.",
    type: "Type",
    registration: "Reg. Status",
    softwareVersion: "SW Version",
    connectionStatus: "Connection",
    connectionUpdatedAt: "Connection Updated",
    deviceId: "Device ID",
    networkSignal: "Network Signal",
    lastSignalStrength: "Last Signal Strength",
    phoneNumber: "Phone Number",
    signalUpdatedAt: "Signal Updated",
    registeredBy: "Registered By",
    registeredAt: "Registered At",
    online: "Online",
    registered: "Registered",
    restart: "Restart Module",
    unbind: "Unbind",
    normal: "Normal",
    closed: "Closed",
    open: "Open",
    inZone: "In Zone",
    doorASensor: "Car Door A Sensor",
    doorBSensor: "Car Door B Sensor",
    machineRoomSensor: "Machine Room",
    moduleActionNotice: "Demo only. No command was sent to the device.",
  },
  cn: {
    realtimeData: "实时数据",
    sensorData: "传感器数据",
    operationData: "运行数据",
    moduleInfo: "模块信息",
    moduleDetails: "模块详情",
    currentFloor: "当前楼层",
    runSpeed: "运行速度",
    serviceMode: "服务模式",
    doorAStat: "轿门A状态",
    doorBStat: "轿门B状态",
    doorZoneStat: "门区状态",
    temperature: "温度",
    humidity: "湿度",
    velocity: "速度",
    levelingUp: "平层感应上",
    levelingDown: "平层感应下",
    runDuration: "运行持续时间",
    startFloor: "启动楼层",
    stopFloor: "停止楼层",
    serialNo: "序列号",
    type: "类型",
    registration: "注册状态",
    softwareVersion: "软件版本",
    connectionStatus: "连接状态",
    connectionUpdatedAt: "连接状态更新日期",
    deviceId: "装置ID",
    networkSignal: "网络信号",
    lastSignalStrength: "最后一次信号强度",
    phoneNumber: "电话号码",
    signalUpdatedAt: "信号强度更新时间",
    registeredBy: "注册人邮箱",
    registeredAt: "注册日期",
    online: "在线",
    registered: "已注册",
    restart: "重启模块",
    unbind: "解绑",
    normal: "正常",
    closed: "已关门",
    open: "已开门",
    inZone: "在门区",
    doorASensor: "轿门A传感器",
    doorBSensor: "轿门B传感器",
    machineRoomSensor: "机房传感器",
    moduleActionNotice: "演示环境，未向设备下发指令",
  },
};

type Copy = (typeof COPY)["cn"];

function MobileSection({
  id,
  title,
  timestamp,
  extra,
  children,
}: {
  id: string;
  title: string;
  timestamp?: string;
  extra?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="relative w-full overflow-hidden rounded-lg border border-stroke bg-container">
      <DetailCardHeader title={title} titleId={id} timestamp={timestamp} extra={extra} />
      {children}
    </section>
  );
}

function MetricGrid({ metrics, tone, className = "p-3" }: { metrics: MetricCardMetric[]; tone: MetricCardTone; className?: string }) {
  return (
    <div className={`flex flex-wrap items-start gap-2 ${className}`}>
      {metrics.map((metric) => <MetricCard key={metric.id} metric={metric} tone={tone} layout="mobile" />)}
    </div>
  );
}

function RealtimeDataSection({ t }: { t: Copy }) {
  const metrics: MetricCardMetric[] = [
    { id: "current-floor", label: t.currentFloor, value: "1F [5]", icon: LayersIcon, trailing: <ArrowUpIcon className="size-[22px] text-primary-text" /> },
    { id: "run-speed", label: t.runSpeed, value: "2m/s", icon: DashboardIcon },
    { id: "service-mode", label: t.serviceMode, value: t.normal, icon: CheckRectangleIcon },
    { id: "car-door-a", label: t.doorAStat, value: t.closed, icon: ElevatorDoorClosedIcon },
    { id: "car-door-b", label: t.doorBStat, value: t.open, icon: ElevatorDoorOpenIcon },
    { id: "door-zone", label: t.doorZoneStat, value: t.inZone, icon: WarningTriangleIcon },
  ];

  return (
    <MobileSection id="mobile-live-realtime-title" title={t.realtimeData} timestamp={TIMESTAMP}>
      <MetricGrid metrics={metrics} tone="brand" />
    </MobileSection>
  );
}

const SENSOR_DATA: Record<SensorKey, { temperature: string; humidity: string; velocity: string; levelingUp: string; levelingDown: string }> = {
  doorA: { temperature: "23.5℃", humidity: "58.1%", velocity: "2m/s", levelingUp: "0", levelingDown: "1" },
  doorB: { temperature: "21.0℃", humidity: "55.3%", velocity: "1.6m/s", levelingUp: "1", levelingDown: "0" },
  machineRoom: { temperature: "28.2℃", humidity: "62.0%", velocity: "—", levelingUp: "—", levelingDown: "—" },
};

function SensorDataSection({ t }: { t: Copy }) {
  const groups: { id: SensorKey; label: string; data: (typeof SENSOR_DATA)[SensorKey] }[] = [
    { id: "doorA", label: t.doorASensor, data: SENSOR_DATA.doorA },
    { id: "doorB", label: t.doorBSensor, data: SENSOR_DATA.doorB },
    { id: "machineRoom", label: t.machineRoomSensor, data: SENSOR_DATA.machineRoom },
  ];

  return (
    <MobileSection id="mobile-live-sensor-title" title={t.sensorData} timestamp={TIMESTAMP}>
      <div className="flex flex-col">
        {groups.map((group, index) => {
          const metrics: MetricCardMetric[] = [
            { id: "temperature", label: t.temperature, value: group.data.temperature, icon: ThermometerIcon },
            { id: "humidity", label: t.humidity, value: group.data.humidity, icon: WaterDropletsIcon },
            { id: "velocity", label: t.velocity, value: group.data.velocity, icon: DashboardIcon },
            { id: "leveling-up", label: t.levelingUp, value: group.data.levelingUp, icon: ArrowUpKoneIcon },
            { id: "leveling-down", label: t.levelingDown, value: group.data.levelingDown, icon: ArrowDownKoneIcon },
          ];
          return (
            <section key={group.id} aria-labelledby={`mobile-live-${group.id}-title`} className="flex flex-col">
              <div className={`flex items-center gap-2 px-3 ${index === 0 ? "pt-3" : "pt-1"}`}>
                <span aria-hidden="true" className="flex-1 border-t border-dashed border-stroke" />
                <h3 id={`mobile-live-${group.id}-title`} className="m-0 shrink-0 text-foot12 font-normal text-primary-text">{group.label}</h3>
                <span aria-hidden="true" className="flex-1 border-t border-dashed border-stroke" />
              </div>
              <MetricGrid
                metrics={metrics}
                tone="sensor"
                className={`px-3 pt-3 ${index === groups.length - 1 ? "pb-3" : "pb-1"}`}
              />
            </section>
          );
        })}
      </div>
    </MobileSection>
  );
}

function OperationDataSection({ t }: { t: Copy }) {
  const metrics: MetricCardMetric[] = [
    { id: "run-duration", label: t.runDuration, value: "30s", icon: ClockIcon },
    { id: "start-floor", label: t.startFloor, value: "1F [2]", icon: LayersIcon },
    { id: "stop-floor", label: t.stopFloor, value: "11F [12]", icon: LayersIcon },
    { id: "service-mode", label: t.serviceMode, value: t.normal, icon: CheckRectangleIcon },
  ];

  return (
    <MobileSection id="mobile-live-operation-title" title={t.operationData} timestamp={TIMESTAMP}>
      <MetricGrid metrics={metrics} tone="neutral" />
    </MobileSection>
  );
}

type Module = {
  id: string;
  name: string;
  kind: "main" | "child";
  serial: string;
  type: string;
  registration: string;
  version: string;
};

const MODULE_GROUPS: Module[][] = [
  [
    { id: "310", name: "310", kind: "main", serial: "KM52152006G02.100ALZ244700005", type: "KONE Connection 310", registration: "registered", version: "2.0.1d" },
    { id: "nexus-d", name: "Nexus-D", kind: "child", serial: "KM52152006G02.100ALZ244700005", type: "KONE Connection 310", registration: "registered", version: "2.0.1d" },
  ],
  [
    { id: "320", name: "320", kind: "main", serial: "KM52152006G02.100ALZ244700006", type: "KONE Connection 320", registration: "registered", version: "1.5.0d" },
    { id: "nexus-m", name: "Nexus-M", kind: "child", serial: "KM52268921G24.100ALX202244700006", type: "Nexus-Machine", registration: "registered", version: "SN2.00.08" },
  ],
];

function ModuleCard({ module, t, onOpen }: { module: Module; t: Copy; onOpen: (module: Module) => void }) {
  const isChild = module.kind === "child";
  const notify = () => MessagePlugin.info(t.moduleActionNotice, 3000);

  return (
    <article className={`flex w-full flex-col gap-4 rounded-md px-3 py-4 ${isChild ? "bg-section-header" : "bg-secondarycontainer"}`}>
      <header>
        <button
          type="button"
          onClick={() => onOpen(module)}
          aria-label={`${module.name} ${t.moduleInfo}`}
          className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-xs border-0 bg-transparent p-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
        >
          <span className="flex min-w-0 items-center gap-3">
            {isChild && (
              <span aria-hidden="true" className="flex size-6 shrink-0 items-center justify-center rounded-md bg-metric-tile-neutral text-secondary-text">
                <NodeIcon className="size-3.5" />
              </span>
            )}
            <h3 className={`m-0 truncate text-h7 text-primary-text ${isChild ? "font-normal" : "font-medium"}`}>{module.name}</h3>
          </span>
          <span className="flex shrink-0 items-center gap-1.5">
            <StatusLabel tone="success">{t.online}</StatusLabel>
            <ChevronRightIcon aria-hidden="true" className="size-4 text-icon-primary" />
          </span>
        </button>
      </header>

      <dl className="m-0 flex flex-col gap-2 text-body">
        <div className="flex flex-col">
          <dt className="text-secondary-text">{t.serialNo}</dt>
          <dd className="m-0 truncate font-medium text-primary-text tabular-nums" title={module.serial}>{module.serial}</dd>
        </div>
        <div className="flex flex-col">
          <dt className="text-secondary-text">{t.type}</dt>
          <dd className="m-0 truncate font-medium text-primary-text">{module.type}</dd>
        </div>
        <div className="flex gap-2.5">
          <div className="min-w-0 flex-1">
            <dt className="text-secondary-text">{t.registration}</dt>
            <dd className="m-0 font-medium text-primary-text">{module.registration === "registered" ? t.registered : module.registration}</dd>
          </div>
          <div className="min-w-0 flex-1">
            <dt className="text-secondary-text">{t.softwareVersion}</dt>
            <dd className="m-0 font-medium text-primary-text">{module.version}</dd>
          </div>
        </div>
      </dl>

      <div className="flex gap-2">
        <Button className={isChild ? "km-mobile-module-button--child" : "km-mobile-module-button--main"} theme="default" variant="outline" size="medium" block icon={<Refresh1Icon className="size-4" />} onClick={notify}>
          {t.restart}
        </Button>
        <Button className={isChild ? "km-mobile-module-button--child" : "km-mobile-module-button--main"} theme="default" variant="outline" size="medium" block icon={<LinkUnlinkIcon className="size-4" />} onClick={notify}>
          {t.unbind}
        </Button>
      </div>
    </article>
  );
}

function ModuleConnector() {
  return (
    <div aria-hidden="true" className="flex items-center gap-2">
      <span className="flex-1 border-t border-dashed border-stroke" />
      <span className="flex size-5 items-center justify-center rounded-md bg-brand-light p-0.5 text-brand">
        <LinkIcon className="size-4" />
      </span>
      <span className="flex-1 border-t border-dashed border-stroke" />
    </div>
  );
}

function ModuleDetailField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex min-w-0 flex-col gap-0.5 rounded-md bg-secondarycontainer px-3 py-1.5">
      <span className="truncate text-foot12 font-medium text-primary-text">{label}</span>
      <span className="min-w-0 truncate text-body text-secondary-text">{children}</span>
    </div>
  );
}

function ModuleDetailDrawer({ module, t, onClose }: { module: Module | null; t: Copy; onClose: () => void }) {
  const notify = () => MessagePlugin.info(t.moduleActionNotice, 3000);
  const fields = module
    ? [
        { label: t.type, value: module.type },
        { label: t.connectionStatus, value: <StatusLabel tone="success">{t.online}</StatusLabel> },
        { label: t.connectionUpdatedAt, value: "2026-03-16 13:57:32" },
        { label: t.deviceId, value: `t_98f6_${module.id}_ign0sc0jsikh_ian0sc0jsiki` },
        { label: t.softwareVersion, value: module.version },
        { label: t.serialNo, value: module.serial },
        { label: t.networkSignal, value: "--" },
        { label: t.lastSignalStrength, value: "--" },
        { label: t.phoneNumber, value: "00000000000" },
        { label: t.signalUpdatedAt, value: "--" },
        { label: t.registration, value: module.registration === "registered" ? t.registered : module.registration },
        { label: t.registeredBy, value: "TEST_PMCKAM1@kone.com" },
        { label: t.registeredAt, value: "2026-01-28 11:04:31" },
      ]
    : [];

  return (
    <Drawer
      className="km-mobile-sheet"
      visible={Boolean(module)}
      placement="bottom"
      size="90%"
      header={<h2 className="m-0 text-h6 font-semibold text-primary-text">{t.moduleDetails}</h2>}
      closeBtn={<CloseMIcon className="size-6" />}
      onClose={onClose}
      footer={
        <MobileBottomBar>
          <Button className="km-mobile-module-detail-action" theme="default" size="large" block icon={<Refresh1Icon className="size-5" />} onClick={notify}>
            {t.restart}
          </Button>
          <Button className="km-mobile-module-detail-action" theme="default" size="large" block icon={<LinkUnlinkIcon className="size-5" />} onClick={notify}>
            {t.unbind}
          </Button>
        </MobileBottomBar>
      }
    >
      <div className="flex flex-col gap-2 pb-6">
        {fields.map((field) => <ModuleDetailField key={field.label} label={field.label}>{field.value}</ModuleDetailField>)}
      </div>
    </Drawer>
  );
}

function ModuleInfoSection({ t, onOpenModule }: { t: Copy; onOpenModule: (module: Module) => void }) {
  return (
    <MobileSection id="mobile-live-module-title" title={t.moduleInfo}>
      <div className="flex flex-col gap-4 p-3">
        {MODULE_GROUPS.map((group, groupIndex) => (
          <div key={group[0].id} className="flex flex-col gap-2">
            {group.map((module, index) => (
              <div key={module.id} className="flex flex-col gap-2">
                <ModuleCard module={module} t={t} onOpen={onOpenModule} />
                {index < group.length - 1 && <ModuleConnector />}
              </div>
            ))}
            {groupIndex < MODULE_GROUPS.length - 1 && <span aria-hidden="true" className="mt-2 h-px w-full bg-stroke" />}
          </div>
        ))}
      </div>
    </MobileSection>
  );
}

export function MobileLiveDataContent({ language = "cn" }: { language?: Language }) {
  const t = COPY[language];
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  return (
    <div className="flex flex-col gap-3">
      <RealtimeDataSection t={t} />
      <SensorDataSection t={t} />
      <OperationDataSection t={t} />
      <ModuleInfoSection t={t} onOpenModule={setSelectedModule} />
      <ModuleDetailDrawer module={selectedModule} t={t} onClose={() => setSelectedModule(null)} />
    </div>
  );
}
