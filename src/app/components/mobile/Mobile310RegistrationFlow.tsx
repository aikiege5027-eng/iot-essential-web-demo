import { useEffect, useState, type ReactNode } from "react";
import { StickyTabBar } from "./StickyTabBar";
import { Button } from "tdesign-react";
import MobileDialog from "tdesign-mobile-react/es/dialog/Dialog";
import MobileMessage from "tdesign-mobile-react/es/message/Message";
import { MobileDeviceDetailTabs } from "../device-detail/DeviceDetailTabs";
import { DetailSection } from "../device-detail/DetailSection";
import { MetricCard, type MetricCardMetric } from "../device-detail/MetricCard";
import { ElevatorIcon, NodeIcon } from "../icons/device-icons";
import {
  RegistrationModuleTabIcon,
  RegistrationRealtimeTabIcon,
} from "../icons/registration-icons";
import {
  ArrowUpIcon,
  ClockIcon,
  CurrentIcon,
  DashboardIcon,
  ElevatorDoorClosedIcon,
  LayersIcon,
  LevelingIcon,
} from "../icons/live-data-icons";
import { MobileBottomBar, MobilePageTitle, type MobileLang } from "./MobileShell";
import { CONNECTION_310_REGISTRATION_DATA } from "../../data/deviceRegistration";
import realtimeLoadingIllustration from "../../../assets/registration-310-realtime-loading.svg";
import realtimeFailedIllustration from "../../../assets/registration-310-realtime-failed.svg";

type Connection310State = "offline" | "loading" | "guidance" | "refreshing" | "ready";
type Connection310Tab = "module" | "realtime";

const copy = {
  cn: {
    title: "设备数据", refresh: "刷新", module: "模块信息", realtime: "实时数据", complete: "完成",
    offlineNotice: "请检查设备号、DTU序列号是否正确，网络连接是否正确，待DTU上电后，自动完成注册。",
    loadingNotice: "请确保控制器加载成功，并获取实时数据后，完成设备注册。",
    project: "所属项目", address: "项目地址", serial: "序列号", software: "软件版本", registration: "注册状态", registrationTime: "注册时间",
    offline: "未上线", online: "在线", registered: "已注册", submodule: "子模块", childModule: "子模块", submoduleInfo: "子模块信息", loading: "子模块数据加载中", failed: "加载失败", zeroSeconds: "00秒前", updated: "更新时间",
    loadWaiting: "当前模块信息暂未加载完，实时数据暂无获取。", loadFailed: "当前未能获取到实时数据，加载失败。", offlineRealtime: "DTU尚未上线，暂无实时数据。",
    checkNetwork: "请检查网络和控制器连接是否正常...", timestamp: "2026-04-04 16:49:39",
    currentFloor: "当前楼层", serviceMode: "服务模式", doorStatus: "门状态", doorZone: "门区状态", speed: "运行速度", load: "实时负载", carCall: "轿厢召唤", hallCall: "厅外召唤",
    normal: "正常", doorClosed: "已关门", inZone: "在门区", pendingTitle: "设备注册尚未完成", pendingBody: "系统正在同步设备模块信息与实时数据，请留在当前页面，等待数据加载完毕后注册流程才能正常完成。", restart: "重新注册", stay: "留在当页",
    doneTitle: "设备注册完成", doneBody: "所有数据已加载，本设备已成功完成注册。", home: "返回首页",
  },
  en: {
    title: "Device Data", refresh: "Refresh", module: "Module Info", realtime: "Live Data", complete: "Complete",
    offlineNotice: "Check device, DTU and network before registration.",
    loadingNotice: "Load controller and live data before registration.",
    project: "Project", address: "Address", serial: "Serial", software: "Software version", registration: "Registration", registrationTime: "Registration time",
    offline: "Offline", online: "Online", registered: "Registered", submodule: "Submodule", childModule: "Child", submoduleInfo: "Submodule information", loading: "Loading submodule data", failed: "Load failed", zeroSeconds: "0 sec ago", updated: "Updated",
    loadWaiting: "Module information is still loading. Live data is unavailable.", loadFailed: "Live data could not be retrieved. Loading failed.", offlineRealtime: "The DTU is offline. Live data is unavailable.",
    checkNetwork: "Check that the network and controller connection are working...", timestamp: "2026-04-04 16:49:39",
    currentFloor: "Current floor", serviceMode: "Service mode", doorStatus: "Door status", doorZone: "Door zone", speed: "Speed", load: "Live load", carCall: "Last car call", hallCall: "Last hall call",
    normal: "Normal", doorClosed: "Closed", inZone: "In zone", pendingTitle: "Registration incomplete", pendingBody: "The system is synchronising module information and live data. Stay on this page until loading finishes, otherwise registration cannot complete.", restart: "Restart", stay: "Stay here",
    doneTitle: "Registration complete", doneBody: "All data is loaded and this device has been registered.", home: "Return home",
  },
} as const;

/** Mobile-only Connection 310 post-registration flow for the exact 31031031 fixture. */
export function Mobile310RegistrationFlow({ language, onRestart, onReturnHome }: { language: MobileLang; onRestart: () => void; onReturnHome?: () => void }) {
  const t = copy[language];
  const [state, setState] = useState<Connection310State>("offline");
  const [tab, setTab] = useState<Connection310Tab>("module");
  const [pendingOpen, setPendingOpen] = useState(false);
  const [completeOpen, setCompleteOpen] = useState(false);

  useEffect(() => {
    const transition = state === "offline"
      ? { delay: 1600, next: "loading" as const }
      : state === "loading"
        ? { delay: 3400, next: "guidance" as const }
        : state === "guidance"
          ? { delay: 1800, next: "ready" as const }
          : state === "refreshing"
            ? { delay: 1800, next: "ready" as const }
            : undefined;
    if (!transition) return;
    const timer = window.setTimeout(() => setState(transition.next), transition.delay);
    return () => window.clearTimeout(timer);
  }, [state]);

  useEffect(() => {
    if (state === "ready") setCompleteOpen(true);
  }, [state]);

  const refresh = () => {
    if (state !== "refreshing") setState("refreshing");
  };

  const ready = state === "ready";
  const notice = state === "offline" ? t.offlineNotice : t.loadingNotice;

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-page">
      <MobilePageTitle
        title={t.title}
        language={language}
        onBack={() => ready ? setCompleteOpen(true) : setPendingOpen(true)}
        extra={<button type="button" onClick={refresh} className="cursor-pointer rounded-sm border-0 bg-transparent p-1 text-body font-normal text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base">{t.refresh}</button>}
      />
      <div className="flex-1 px-4 pb-4">
        {!ready && <RegistrationNotice message={notice} />}
        <DeviceSummary language={language} />
        <RegistrationTabs language={language} value={tab} onChange={setTab} />
        <div className="mt-4">
          {tab === "module" ? <ModulePanel language={language} state={state} /> : <RealtimePanel language={language} state={state} />}
        </div>
      </div>
      {ready && <MobileBottomBar><Button theme="primary" size="large" block onClick={() => setCompleteOpen(true)}>{t.complete}</Button></MobileBottomBar>}
      <MobileDialog
        className="km-mobile-registration-dialog"
        visible={pendingOpen}
        title={t.pendingTitle}
        content={t.pendingBody}
        cancelBtn={t.restart}
        confirmBtn={t.stay}
        closeOnOverlayClick={false}
        onCancel={() => { setPendingOpen(false); onRestart(); }}
        onConfirm={() => setPendingOpen(false)}
        onClose={() => setPendingOpen(false)}
      />
      <MobileDialog
        className="km-mobile-registration-dialog"
        visible={completeOpen}
        title={t.doneTitle}
        content={t.doneBody}
        cancelBtn={t.home}
        confirmBtn={t.stay}
        closeOnOverlayClick={false}
        onCancel={() => { setCompleteOpen(false); onReturnHome?.(); }}
        onConfirm={() => setCompleteOpen(false)}
        onClose={() => setCompleteOpen(false)}
      />
    </div>
  );
}

export function RegistrationNotice({ message }: { message: string }) {
  return (
    <div className="mt-4">
      <MobileMessage
        className="km-mobile-message"
        theme="warning"
        visible
        duration={0}
        content={message}
      />
    </div>
  );
}

export function DeviceSummary({ language }: { language: MobileLang }) {
  const t = copy[language];
  const data = CONNECTION_310_REGISTRATION_DATA;

  return (
    <article className="mt-4 box-border flex h-36 flex-col gap-4 rounded-lg border border-stroke bg-container px-3 py-4">
      {/* Figma 9746:71205: the title, icon and device tag are one fixed left-aligned group. */}
      <h2 className="m-0 flex h-7 shrink-0 items-center gap-3 whitespace-nowrap">
        <ElevatorIcon aria-hidden="true" className="size-7 shrink-0 text-icon-primary" />
        <span className="shrink-0 text-h6 font-medium text-primary-text">{data.name}</span>
        <span className="box-border flex h-[26px] w-[85px] shrink-0 items-center justify-center rounded-md border border-stroke bg-section-header px-1.5 text-body font-medium text-primary-text tabular-nums">
          #{data.tag}
        </span>
      </h2>
      {/* The Figma divider has no layout height: it sits after the 16px flex gap. */}
      <div aria-hidden="true" className="h-0 shrink-0 border-t border-dashed border-stroke" />
      <dl className="m-0 flex flex-col gap-2 text-body">
        <SummaryRow label={t.project} value={data.project[language]} />
        <SummaryRow label={t.address} value={data.address[language]} />
      </dl>
    </article>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return <div className="flex min-w-0 items-center gap-3"><dt className="shrink-0 text-secondary-text">{label}</dt><dd className="m-0 min-w-0 flex-1 truncate text-right text-primary-text">{value}</dd></div>;
}

function RegistrationTabs({ language, value, onChange }: { language: MobileLang; value: Connection310Tab; onChange: (value: Connection310Tab) => void }) {
  const t = copy[language];

  return (
    <StickyTabBar>
      <MobileDeviceDetailTabs
        tabs={[
          { key: "module", label: t.module, Icon: RegistrationModuleTabIcon },
          { key: "realtime", label: t.realtime, Icon: RegistrationRealtimeTabIcon },
        ]}
        value={value}
        onChange={onChange}
        equalWidth
        ariaLabel={language === "cn" ? "设备数据内容" : "Device data content"}
      />
    </StickyTabBar>
  );
}

function ModulePanel({ language, state }: { language: MobileLang; state: Connection310State }) {
  const t = copy[language];
  const offline = state === "offline";
  const ready = state === "ready";
  const needsGuidance = state === "guidance";
  const data = CONNECTION_310_REGISTRATION_DATA;
  return <div id="connection-310-module-panel" role="tabpanel" aria-labelledby="connection-310-module-tab" className="flex flex-col gap-4">
    <RegistrationCard title="KONE Connection 310" titleId="connection-310-main-title" className="h-[175px]" status={<RegistrationStatus online={!offline} offlineLabel={t.offline} onlineLabel={t.online} />}>
      <ModuleDetails rows={[
        [t.serial, data.serial],
        [t.software, offline ? "-" : data.software],
        [t.registration, offline ? "-" : t.registered],
        [t.registrationTime, offline ? "-" : data.registrationTime],
      ]} />
    </RegistrationCard>
    {!offline && <RegistrationCard
      title={ready ? data.submodule : t.submoduleInfo}
      titleId="connection-310-submodule-title"
      className={ready ? "h-[115px]" : needsGuidance ? "h-[173px]" : "h-[145px]"}
      headerTag={<SubmoduleTag label={t.childModule} />}
      timestampClassName="-ml-1"
      status={ready ? <RegistrationStatus online offlineLabel={t.offline} onlineLabel={t.online} /> : undefined}
    >
      {ready ? <ModuleDetails rows={[[t.serial, data.submoduleSerial], [t.software, data.submoduleSoftware]]} /> : <LoadingModule language={language} guidance={needsGuidance} />}
    </RegistrationCard>}
  </div>;
}

function RegistrationCard({ title, titleId, headerTag, timestampClassName, status, children, className }: { title: string; titleId: string; headerTag?: ReactNode; timestampClassName?: string; status?: ReactNode; children: ReactNode; className: string }) {
  return (
    <DetailSection
      title={title}
      titleId={titleId}
      timestamp={headerTag}
      timestampClassName={timestampClassName}
      extra={status}
      className={`flex flex-col ${className}`}
      contentClassName="min-h-0 flex-1 px-3 py-[11px]"
    >
      {children}
    </DetailSection>
  );
}

export function RegistrationStatus({ online, offlineLabel, onlineLabel }: { online: boolean; offlineLabel: string; onlineLabel: string }) {
  return <span className={`inline-flex items-center gap-1 text-body ${online ? "text-success" : "text-placeholder"}`}>
    <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-current" />
    {online ? onlineLabel : offlineLabel}
  </span>;
}

export function SubmoduleTag({ label }: { label: string }) {
  return (
    <span className="km-mobile-submodule-tag">
      <NodeIcon aria-hidden="true" className="size-3.5" />
      {label}
    </span>
  );
}

export function ModuleDetails({ rows }: { rows: readonly (readonly [string, string])[] }) {
  return <dl className="m-0 flex flex-col gap-2 text-body">{rows.map(([label, value]) => <div key={label} className="flex min-w-0 items-center gap-3"><dt className="shrink-0 text-secondary-text">{label}</dt><dd className="m-0 min-w-0 flex-1 truncate text-right text-primary-text tabular-nums">{value}</dd></div>)}</dl>;
}

function LoadingModule({ language, guidance }: { language: MobileLang; guidance: boolean }) {
  const t = copy[language];
  return <div className={`flex h-full flex-col items-center text-center ${guidance ? "justify-between" : "justify-center gap-2"}`}>
    <div className="flex h-[82px] items-center justify-center gap-2 text-body text-secondary-text">
      <span aria-hidden="true" className="size-5 shrink-0 animate-spin rounded-full border-2 border-stroke border-t-brand-base" />
      <span>{t.loading}</span>
    </div>
    {guidance && <p className="m-0 text-foot12 text-secondary-text">{t.checkNetwork}</p>}
  </div>;
}

function RealtimeEmptyState({ failed, message }: { failed: boolean; message: string }) {
  return <div role={failed ? "alert" : "status"} className="flex h-[220px] flex-col items-center justify-center gap-3 text-center">
    <img
      aria-hidden="true"
      className="size-32"
      src={failed ? realtimeFailedIllustration : realtimeLoadingIllustration}
      alt=""
    />
    <p className="m-0 text-body text-secondary-text">{message}</p>
  </div>;
}

function RealtimePanel({ language, state }: { language: MobileLang; state: Connection310State }) {
  const t = copy[language];
  if (state !== "ready") {
    const failed = state === "guidance";
    const message = state === "offline" ? t.offlineRealtime : failed ? t.loadFailed : t.loadWaiting;
    return <div id="connection-310-realtime-panel" role="tabpanel" aria-labelledby="connection-310-realtime-tab"><RegistrationCard title={t.realtime} titleId="connection-310-realtime-title" className="h-[283px]"><RealtimeEmptyState failed={failed} message={message} /></RegistrationCard></div>;
  }
  const metrics: MetricCardMetric[] = [
    { id: "current-floor", label: t.currentFloor, value: "1F [5]", icon: LayersIcon, trailing: <span role="img" aria-label={language === "cn" ? "上行" : "Moving up"} className="inline-flex"><ArrowUpIcon className="size-[22px] text-primary-text" /></span> },
    { id: "service-mode", label: t.serviceMode, value: t.normal, icon: LayersIcon },
    { id: "door-status", label: t.doorStatus, value: t.doorClosed, icon: ElevatorDoorClosedIcon },
    { id: "door-zone", label: t.doorZone, value: t.inZone, icon: LevelingIcon },
    { id: "speed", label: t.speed, value: "2m/s", icon: DashboardIcon },
    { id: "live-load", label: t.load, value: "00%", icon: CurrentIcon },
    { id: "last-car-call", label: t.carCall, value: t.zeroSeconds, icon: ClockIcon },
    { id: "last-hall-call", label: t.hallCall, value: t.zeroSeconds, icon: ClockIcon },
    { id: "updated", label: t.updated, value: "16:49:39", icon: ClockIcon },
  ];
  return <div id="connection-310-realtime-panel" role="tabpanel" aria-labelledby="connection-310-realtime-tab"><RegistrationCard title={t.realtime} titleId="connection-310-realtime-title" headerTag={t.timestamp} className="h-[397px]"><div className="grid grid-cols-3 gap-2">{metrics.map((metric) => <MetricCard key={metric.id} metric={metric} tone="brand" layout="mobile" fluid />)}</div></RegistrationCard></div>;
}
