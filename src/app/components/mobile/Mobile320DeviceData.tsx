import { useState, type ReactNode } from "react";
import { StickyTabBar } from "./StickyTabBar";
import { Button } from "tdesign-react";
import { DetailSection } from "../device-detail/DetailSection";
import { MobileDeviceDetailTabs } from "../device-detail/DeviceDetailTabs";
import { MetricCard, type MetricCardMetric } from "../device-detail/MetricCard";
import { CheckRectangleIcon, UserMaintenanceIcon } from "../icons/device-detail-icons";
import {
  ArrowDownKoneIcon,
  ArrowUpIcon,
  ArrowUpKoneIcon,
  DashboardIcon,
  ElevatorDoorClosedIcon,
  ElevatorDoorIcon,
  ElevatorDoorOpenIcon,
  LayersIcon,
  ThermometerIcon,
  WarningTriangleIcon,
  WaterDropletsIcon,
} from "../icons/live-data-icons";
import { WarningCircleFilledIcon } from "../icons/warning-circle-filled";
import { RegistrationModuleTabIcon, RegistrationRealtimeTabIcon } from "../icons/registration-icons";
import elevatorPanelPhoto from "../../../assets/registration-elevator-panel.jpg";
import { sensorFunctionName, sensorFunctionTileLabel, type RegistrationFloor, type RegistrationSensorConfig } from "../../data/deviceRegistration";
import { FloorDetails } from "./Mobile320ConnectionView";
import { sensorTitle } from "./Mobile320ModulePanel";
import { DeviceSummary, ModuleDetails, RegistrationStatus, SubmoduleTag } from "./Mobile310RegistrationFlow";
import { MobileBottomBar, MobilePageTitle, type MobileLang } from "./MobileShell";

/**
 * Connection 320 注册完成后的设备数据页（IOT Delivery 12363:76333「设备数据」，只展示成功、无异常的状态）。
 *
 * 三个页签：模块信息（主模块 + 每个已配置传感器的子模块）、楼层信息（配置完成时间、面板照片、楼层标签及间距，可编辑标签）、
 * 实时数据（电梯运行数据 + 每个传感器的温湿度与所选传感器功能对应的方格）。内容都来自前面填写的配置。
 * 若之前跳过了安装检查（`skipped`），楼层信息和实时数据页会给出「楼层学习未完成」的提示。
 */
type Tab = "module" | "floor" | "realtime";

const CONFIG_TIME = "2026/03/02 00:00:00";
const DATA_TIME = "2026-04-04 16:49:39";

const copy = {
  cn: {
    title: "设备数据", refresh: "刷新", module: "模块信息", floor: "楼层信息", realtime: "实时数据",
    connection: "KONE Connection 320", online: "在线", offline: "未上线", submodule: "子模块",
    serial: "序列号", software: "软件版本", registration: "注册状态", registrationTime: "注册时间", registered: "已注册",
    portName: "端口名称", placement: "安装位置", left: "左侧轿门", right: "右侧轿门", configState: "配置状态", configured: "已配置",
    configTime: "配置完成时间", functions: "传感器功能",
    floorConfigTime: "楼层配置完成时间", photo: "电梯面板照片", labels: "楼层标签及楼层间距", totalFloors: "总楼层数：",
    edit: "编辑", cancel: "取消", done: "完成", floorLearning: "楼层学习尚未完成，当前楼层间距非最终准确结果。",
    labelRequired: "楼层标签不能为空。",
    runtime: "实时数据", realtimeWarning: "楼层学习未完成，当前楼层信息展示可能不准确。",
    currentFloor: "当前楼层", speed: "运行速度", serviceMode: "服务模式", normal: "正常",
    door: "轿门状态", doorA: "轿门A状态", doorB: "轿门B状态", closed: "已关门", open: "已开门", doorZone: "门区状态", inZone: "在门区",
    temperature: "温度", humidity: "湿度", velocity: "速度",
    reconfigure: "重新配置", complete: "完成", ariaTabs: "设备数据内容",
  },
  en: {
    title: "Device Data", refresh: "Refresh", module: "Modules", floor: "Floors", realtime: "Live data",
    connection: "KONE Connection 320", online: "Online", offline: "Offline", submodule: "Submodule",
    serial: "Serial", software: "Software version", registration: "Registration", registrationTime: "Registration time", registered: "Registered",
    portName: "Port name", placement: "Placement", left: "Left door", right: "Right door", configState: "Configuration", configured: "Configured",
    configTime: "Configured at", functions: "Sensor functions",
    floorConfigTime: "Floor configured at", photo: "Elevator panel photo", labels: "Floor labels and spacing", totalFloors: "Total floors: ",
    edit: "Edit", cancel: "Cancel", done: "Done", floorLearning: "Floor learning is not finished. Floor spacing is not final yet.",
    labelRequired: "Floor labels cannot be empty.",
    runtime: "Live data", realtimeWarning: "Floor learning is not finished. Floor information may be inaccurate.",
    currentFloor: "Current floor", speed: "Speed", serviceMode: "Service mode", normal: "Normal",
    door: "Door status", doorA: "Door A status", doorB: "Door B status", closed: "Closed", open: "Open", doorZone: "Door zone", inZone: "In zone",
    temperature: "Temperature", humidity: "Humidity", velocity: "Speed",
    reconfigure: "Reconfigure", complete: "Complete", ariaTabs: "Device data content",
  },
} as const;

export function Mobile320DeviceData({ language, serial, sensors, floors, skipped, onBack, onRefresh, onFloorLabels, onReconfigure, onComplete }: {
  language: MobileLang;
  serial: string;
  /** 已启用的传感器（轿门 A / B、机房）。 */
  sensors: RegistrationSensorConfig[];
  floors: RegistrationFloor[];
  /** 之前是否跳过了安装检查。 */
  skipped: boolean;
  onBack: () => void;
  onRefresh: () => void;
  onFloorLabels: (labels: string[]) => void;
  onReconfigure: () => void;
  onComplete: () => void;
}) {
  const t = copy[language];
  const [tab, setTab] = useState<Tab>("module");
  const paired = sensors.some((sensor) => sensor.kind === "doorB");

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-page">
      <MobilePageTitle
        title={t.title}
        language={language}
        onBack={onBack}
        extra={<button type="button" onClick={onRefresh} className="cursor-pointer rounded-sm border-0 bg-transparent p-1 text-body font-normal text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base">{t.refresh}</button>}
      />
      <div className="flex-1 px-4 pt-4 pb-4">
        <DeviceSummary language={language} />
        <StickyTabBar>
          <MobileDeviceDetailTabs
            tabs={[
              { key: "module" as Tab, label: t.module, Icon: RegistrationModuleTabIcon },
              { key: "floor" as Tab, label: t.floor, Icon: LayersIcon },
              { key: "realtime" as Tab, label: t.realtime, Icon: RegistrationRealtimeTabIcon },
            ]}
            value={tab}
            onChange={setTab}
            equalWidth
            ariaLabel={t.ariaTabs}
          />
        </StickyTabBar>
        <div className="mt-4 flex flex-col gap-3">
          {tab === "module" && <ModuleTab language={language} serial={serial} sensors={sensors} paired={paired} />}
          {tab === "floor" && <FloorTab language={language} floors={floors} skipped={skipped} onFloorLabels={onFloorLabels} />}
          {tab === "realtime" && <RealtimeTab language={language} sensors={sensors} paired={paired} skipped={skipped} />}
        </div>
      </div>
      <MobileBottomBar>
        <Button className="km-mobile-button--secondary" theme="default" size="large" block onClick={onReconfigure}>{t.reconfigure}</Button>
        <Button theme="primary" size="large" block onClick={onComplete}>{t.complete}</Button>
      </MobileBottomBar>
    </div>
  );
}

/** 子模块名：单轿门为 Nexus-Door，A / B 两个轿门为 Nexus-DoorA / Nexus-DoorB，机房为 Nexus-Machine。 */
function moduleName(kind: RegistrationSensorConfig["kind"], paired: boolean) {
  if (kind === "machine") return "Nexus-Machine";
  return paired ? (kind === "doorA" ? "Nexus-DoorA" : "Nexus-DoorB") : "Nexus-Door";
}

function ModuleTab({ language, serial, sensors, paired }: { language: MobileLang; serial: string; sensors: RegistrationSensorConfig[]; paired: boolean }) {
  const t = copy[language];
  return (
    <div id="connection-320-data-module-panel" role="tabpanel" className="flex flex-col gap-3">
      <DetailSection
        title={t.connection}
        titleId="data-main-title"
        extra={<RegistrationStatus online offlineLabel={t.offline} onlineLabel={t.online} />}
        contentClassName="px-3 py-[11px]"
      >
        <ModuleDetails rows={[[t.serial, serial], [t.software, "1.2.11"], [t.registration, t.registered], [t.registrationTime, CONFIG_TIME]]} />
      </DetailSection>
      {sensors.map((sensor) => {
        const machine = sensor.kind === "machine";
        const rows: (readonly [string, string])[] = [
          [t.serial, sensor.serial || "-"],
          [t.portName, machine ? "USB-LoRa" : "USB"],
          ...(machine ? [] : [[t.placement, sensor.placement === "left" ? t.left : sensor.placement === "right" ? t.right : "-"] as const]),
          [t.software, "30.20.7"],
          [t.configState, t.configured],
          [t.configTime, CONFIG_TIME],
        ];
        return (
          <DetailSection
            key={sensor.kind}
            title={moduleName(sensor.kind, paired)}
            titleId={`data-${sensor.kind}-title`}
            timestamp={<SubmoduleTag label={t.submodule} />}
            timestampClassName="-ml-1"
            extra={<RegistrationStatus online offlineLabel={t.offline} onlineLabel={t.online} />}
            contentClassName="flex flex-col gap-3 px-3 py-[11px]"
          >
            <ModuleDetails rows={rows} />
            <div className="flex flex-col gap-1">
              <h3 className="m-0 text-body font-medium text-primary-text">{t.functions}</h3>
              <ModuleDetails rows={sensor.ports.map((port, index) => [`Port X${index + 1}`, port ? sensorFunctionName(port) : "-"] as const)} />
            </div>
          </DetailSection>
        );
      })}
    </div>
  );
}

function FloorTab({ language, floors, skipped, onFloorLabels }: { language: MobileLang; floors: RegistrationFloor[]; skipped: boolean; onFloorLabels: (labels: string[]) => void }) {
  const t = copy[language];
  const [draft, setDraft] = useState<string[] | null>(null);
  const editing = draft !== null;
  const invalid = editing && draft.some((label) => !label.trim());

  return (
    <div id="connection-320-data-floor-panel" role="tabpanel" className="flex flex-col gap-3">
      <div className="flex items-start gap-3 rounded-lg border border-stroke bg-container px-3 py-2 text-body text-primary-text">
        <span className="shrink-0 font-medium">{t.floorConfigTime}</span>
        <span className="min-w-0 flex-1 text-right tabular-nums">{CONFIG_TIME}</span>
      </div>
      <DetailSection title={t.photo} titleId="data-photo-title" contentClassName="p-3">
        <img alt="" src={elevatorPanelPhoto} className="aspect-[1672/941] w-full rounded-md object-cover" />
      </DetailSection>
      <section aria-labelledby="data-labels-title" className="relative overflow-hidden rounded-lg border border-stroke bg-container">
        <header className="box-border flex h-[39px] items-center gap-3 border-b border-stroke bg-section-header px-3">
          <h2 id="data-labels-title" className="m-0 flex shrink-0 items-center gap-2 whitespace-nowrap text-body font-medium text-primary-text">
            <span aria-hidden="true" className="h-3.5 w-1 shrink-0 rounded-[1px] bg-brand-hover" />
            {t.labels}
          </h2>
          <p className="m-0 min-w-0 flex-1 truncate whitespace-nowrap text-foot12 text-secondary-text">{t.totalFloors}{floors.length}</p>
          <div className="flex shrink-0 items-center gap-2">
            {editing ? (
              <>
                <HeaderButton onClick={() => setDraft(null)}>{t.cancel}</HeaderButton>
                <HeaderButton primary disabled={invalid} onClick={() => { onFloorLabels(draft); setDraft(null); }}>{t.done}</HeaderButton>
              </>
            ) : (
              <HeaderButton primary onClick={() => setDraft(floors.map((floor) => floor.label))}>{t.edit}</HeaderButton>
            )}
          </div>
        </header>
        <div className="flex flex-col gap-2 p-3">
          {skipped && <NoticeBar>{t.floorLearning}</NoticeBar>}
          <FloorDetails
            language={language}
            floors={floors}
            editingLabels={draft ?? undefined}
            onLabelChange={(index, value) => setDraft((current) => current ? current.map((label, labelIndex) => labelIndex === index ? value : label) : current)}
          />
          {invalid && <p role="alert" className="m-0 text-foot12 text-error">{t.labelRequired}</p>}
        </div>
      </section>
    </div>
  );
}

function HeaderButton({ children, primary = false, disabled = false, onClick }: { children: ReactNode; primary?: boolean; disabled?: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`h-6 cursor-pointer rounded-sm border px-2 py-0.5 text-foot12 font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-base disabled:cursor-not-allowed disabled:opacity-50 ${primary ? "border-brand-base bg-brand-base text-white-text" : "border-component-border bg-container text-primary-text"}`}
    >
      {children}
    </button>
  );
}

function NoticeBar({ children }: { children: ReactNode }) {
  return (
    <div role="status" className="flex items-start gap-2 rounded-md bg-warning-light p-2 text-body text-primary-text">
      <WarningCircleFilledIcon className="size-[22px] shrink-0 text-warning" />
      <span className="min-w-0 flex-1">{children}</span>
    </div>
  );
}

function Tiles({ metrics, tone }: { metrics: MetricCardMetric[]; tone: "brand" | "sensor" }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {metrics.map((metric) => <MetricCard key={metric.id} metric={metric} tone={tone} layout="mobile" fluid />)}
    </div>
  );
}

/** 所选传感器功能对应的方格：平层感应上 / 下为 0 / 1，检修回路 402，厅门 / 轿门回路 302（与设计稿一致，302 标红）。 */
function functionMetric(full: string, index: number): MetricCardMetric {
  const label = sensorFunctionTileLabel(full);
  const id = `function-${index}`;
  if (label.includes("平层感应")) {
    const up = label.endsWith("上");
    return { id, label, value: up ? "0" : "1", icon: up ? ArrowUpKoneIcon : ArrowDownKoneIcon };
  }
  if (label.includes("检修")) return { id, label, value: "402", icon: UserMaintenanceIcon };
  return { id, label, value: "302", icon: ElevatorDoorIcon, valueTone: "error" };
}

function RealtimeTab({ language, sensors, paired, skipped }: { language: MobileLang; sensors: RegistrationSensorConfig[]; paired: boolean; skipped: boolean }) {
  const t = copy[language];
  const runtime: MetricCardMetric[] = [
    { id: "current-floor", label: t.currentFloor, value: "1F [5]", icon: LayersIcon, trailing: <ArrowUpIcon aria-hidden="true" className="size-[22px] text-primary-text" /> },
    { id: "speed", label: t.speed, value: "2m/s", icon: DashboardIcon },
    { id: "service-mode", label: t.serviceMode, value: t.normal, icon: CheckRectangleIcon },
    { id: "door-a", label: paired ? t.doorA : t.door, value: t.closed, icon: ElevatorDoorClosedIcon },
    ...(paired ? [{ id: "door-b", label: t.doorB, value: t.open, icon: ElevatorDoorOpenIcon }] : []),
    { id: "door-zone", label: t.doorZone, value: t.inZone, icon: WarningTriangleIcon },
  ];
  return (
    <div id="connection-320-data-realtime-panel" role="tabpanel" className="flex flex-col gap-3">
      <DetailSection title={t.runtime} titleId="data-runtime-title" timestamp={DATA_TIME} contentClassName="flex flex-col gap-2 p-3">
        {skipped && <NoticeBar>{t.realtimeWarning}</NoticeBar>}
        <Tiles metrics={runtime} tone="brand" />
      </DetailSection>
      {sensors.map((sensor) => {
        const functions = [...new Set(sensor.ports.filter(Boolean))].map(functionMetric);
        const machine = sensor.kind === "machine";
        const metrics: MetricCardMetric[] = [
          { id: "temperature", label: t.temperature, value: "23.5℃", icon: ThermometerIcon },
          { id: "humidity", label: t.humidity, value: "58.1%", icon: WaterDropletsIcon },
          ...(machine ? [] : [{ id: "velocity", label: t.velocity, value: "2m/s", icon: DashboardIcon }]),
          ...functions,
        ];
        return (
          <DetailSection key={sensor.kind} title={sensorTitle(sensor.kind, paired, language)} titleId={`data-live-${sensor.kind}-title`} timestamp={DATA_TIME} contentClassName="p-3">
            <Tiles metrics={metrics} tone="sensor" />
          </DetailSection>
        );
      })}
    </div>
  );
}
