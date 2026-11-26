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
import { RegistrationSmlDialog } from "./RegistrationSmlDialog";
import { RegistrationSmlUnbindDialog } from "./RegistrationSmlUnbindDialog";
import { TagFilterButton } from "../TagFilterButton";
import { CONNECTION_310_REGISTRATION_DATA, createCloudModules, type CloudModule, type RegistrationDeviceInfo } from "../../data/deviceRegistration";
import realtimeLoadingIllustration from "../../../assets/registration-310-realtime-loading.svg";
import realtimeFailedIllustration from "../../../assets/registration-310-realtime-failed.svg";

type Connection310State = "offline" | "loading" | "guidance" | "refreshing" | "ready";
type Connection310Tab = "module" | "realtime";
/** 注册过 SML 的设备有两套数据：云管家数据（原有）和 SML 数据（新注册），模块信息与实时数据页用标签切换。 */
export type DataSource = "sml" | "cloud";
/** 补注册的 SML：序列号由用户输入，软件版本为演示值，注册时间取提交时刻。 */
export type SmlRegistration = { serial: string; software: string; registrationTime: string };
const SML_DEMO_SOFTWARE = "1.0.4";
function formatNow() {
  const now = new Date();
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${now.getFullYear()}/${pad(now.getMonth() + 1)}/${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

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
    smlNotice: "当前设备可注册 SML 信息，请及时注册。", cloudNotice: "当前设备可注册云管家信息，请及时注册。", registerNow: "立即注册", unbind: "解绑", dataSource: "数据类型", smlTag: "SML", cloudTag: "云管家",
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
    smlNotice: "SML information can be registered for this device. Please register it promptly.", cloudNotice: "Cloud Butler information can be registered for this device. Please register it promptly.", registerNow: "Register now", unbind: "Unbind", dataSource: "Data type", smlTag: "SML", cloudTag: "Cloud Butler",
    doneTitle: "Registration complete", doneBody: "All data is loaded and this device has been registered.", home: "Return home",
  },
} as const;

/** 注册 SML 弹窗确认后生成的 SML 数据：序列号来自输入，软件版本是演示值，注册时间取提交时刻。 */
export function createSmlRegistration(serial: string): SmlRegistration {
  return { serial, software: SML_DEMO_SOFTWARE, registrationTime: formatNow() };
}
/** 模块信息 / 实时数据页签下的「SML / 云管家」数据切换标签（310 与 320 共用）。 */
export function SmlSourceFilter({ language, value, onChange, className = "" }: { language: MobileLang; value: DataSource; onChange: (value: DataSource) => void; className?: string }) {
  const t = copy[language];
  return (
    <div role="group" aria-label={t.dataSource} className={`flex gap-2 ${className}`}>
      <TagFilterButton size="large" label={t.smlTag} active={value === "sml"} onClick={() => onChange("sml")} />
      <TagFilterButton size="large" label={t.cloudTag} active={value === "cloud"} onClick={() => onChange("cloud")} />
    </div>
  );
}
/** Mobile-only Connection 310 post-registration flow for the exact 31031031 fixture. */
/** `registered`：已注册设备（31031000），直接显示已同步完成的数据，没有注册完成弹窗和底部「完成」按钮。 */
export function Mobile310RegistrationFlow({ language, onRestart, onReturnHome, registered = false, smlPending = false, mainModule, cloudModules, device, initialSml = null, onSmlChange, cloudPending = false }: { language: MobileLang; onRestart: () => void; onReturnHome?: () => void; registered?: boolean; smlPending?: boolean; mainModule?: { title: string; serial: string }; /** 云管家侧的完整模块列表（多个主模块 + 子模块）；不传则沿用单个 Connection 310 + 子模块。 */ cloudModules?: CloudModule[]; /** 设备卡片信息；不传则用默认演示设备。 */ device?: RegistrationDeviceInfo; /** 进入页面时这台设备已经注册过的 SML（再次进入同一设备号时带出）。 */ initialSml?: SmlRegistration | null; /** SML 注册 / 解绑后通知外层保存，供再次进入时带出。 */ onSmlChange?: (sml: SmlRegistration | null) => void; /** 设备已注册 SML、云管家尚未注册（LCE 设备 00000001）：顶部提示补注册云管家，注册后云管家数据加载进来。 */ cloudPending?: boolean }) {
  const t = copy[language];
  const [state, setState] = useState<Connection310State>(registered ? "ready" : "offline");
  const [tab, setTab] = useState<Connection310Tab>("module");
  const [pendingOpen, setPendingOpen] = useState(false);
  const [completeOpen, setCompleteOpen] = useState(false);
  const [smlDialogOpen, setSmlDialogOpen] = useState(false);
  const [cloudDialogOpen, setCloudDialogOpen] = useState(false);
  // 补注册云管家后加载进来的模块（只在 cloudPending 的设备上使用）。
  const [registeredCloudModules, setRegisteredCloudModules] = useState<CloudModule[] | null>(null);
  const [unbindOpen, setUnbindOpen] = useState(false);
  const [sml, setSml] = useState<SmlRegistration | null>(initialSml);
  // 本次进入页面时刚注册的 SML：底部是「解绑 + 完成」；再次进入时 SML 早已注册，底部只有「解绑」。
  const [justRegistered, setJustRegistered] = useState(false);
  // 刚注册完 SML 默认先看 SML 数据，可以切回云管家。
  const [source, setSource] = useState<DataSource>(initialSml ? "sml" : "cloud");
  const hasCloud = !cloudPending || registeredCloudModules !== null;

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
    if (state === "ready" && !registered) setCompleteOpen(true);
  }, [state, registered]);

  const refresh = () => {
    if (state !== "refreshing") setState("refreshing");
  };

  const ready = state === "ready";
  const notice = state === "offline" ? t.offlineNotice : t.loadingNotice;
  // 已注册 SML 且数据已同步时才出现「SML / 云管家」切换；刷新加载期间回到云管家数据的加载态。
  // 只有 SML 与云管家两套数据都有时才出现；LCE 设备云管家还没注册时只显示 SML 数据。
  const showSources = ready && sml !== null && hasCloud;
  const activeSource: DataSource = !ready ? "cloud" : sml !== null && hasCloud ? source : sml !== null ? "sml" : "cloud";

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-page">
      <MobilePageTitle
        title={t.title}
        language={language}
        onBack={() => registered ? onRestart() : ready ? setCompleteOpen(true) : setPendingOpen(true)}
        extra={<button type="button" onClick={refresh} className="cursor-pointer rounded-sm border-0 bg-transparent p-1 text-body font-normal text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base">{t.refresh}</button>}
      />
      <div className="flex-1 px-4 pb-4">
        {!ready && <RegistrationNotice message={notice} />}
        {ready && cloudPending && !registeredCloudModules && <RegistrationNotice message={t.cloudNotice} action={<Button size="small" theme="primary" onClick={() => setCloudDialogOpen(true)}>{t.registerNow}</Button>} />}
        {ready && smlPending && !sml && <RegistrationNotice message={t.smlNotice} action={<Button size="small" theme="primary" onClick={() => setSmlDialogOpen(true)}>{t.registerNow}</Button>} />}
        <DeviceSummary language={language} device={device} />
        <RegistrationTabs language={language} value={tab} onChange={setTab} />
        <div className="mt-4">
          {showSources && (
            <SmlSourceFilter language={language} value={source} onChange={setSource} className="mb-4" />
          )}
          {tab === "module" ? <ModulePanel language={language} state={state} sml={sml} source={activeSource} mainModule={mainModule} cloudModules={registeredCloudModules ?? cloudModules} /> : <RealtimePanel language={language} state={state} sml={sml} source={activeSource} />}
        </div>
      </div>
      {ready && registered && sml && (
        <MobileBottomBar>
          <Button className="km-mobile-button--secondary" theme="default" size="large" block onClick={() => setUnbindOpen(true)}>{t.unbind}</Button>
          {justRegistered && <Button theme="primary" size="large" block onClick={onRestart}>{t.complete}</Button>}
        </MobileBottomBar>
      )}
      {ready && !registered && (
        <MobileBottomBar>
          {/* 全新注册的 SML 设备（主模块就是 SML）：同样可以解绑 */}
          {mainModule && <Button className="km-mobile-button--secondary" theme="default" size="large" block onClick={() => setUnbindOpen(true)}>{t.unbind}</Button>}
          <Button theme="primary" size="large" block onClick={() => setCompleteOpen(true)}>{t.complete}</Button>
        </MobileBottomBar>
      )}
      <RegistrationSmlDialog
        kind="cloud"
        language={language}
        visible={cloudDialogOpen}
        onCancel={() => setCloudDialogOpen(false)}
        onConfirm={(serial) => { setRegisteredCloudModules(createCloudModules(serial)); setSource("cloud"); setCloudDialogOpen(false); }}
      />
      <RegistrationSmlUnbindDialog
        language={language}
        visible={unbindOpen}
        onCancel={() => setUnbindOpen(false)}
        // 只解绑 SML：回到「云管家已注册、可注册 SML」的状态，云管家数据保持不变。
        onConfirm={() => {
          setUnbindOpen(false);
          // 全新注册的 SML 设备只有 SML 这一套数据，解绑后没有可看的内容，回到设备注册首页。
          if (mainModule || !hasCloud) { onRestart(); return; }
          setSml(null); onSmlChange?.(null); setJustRegistered(false); setSource("cloud");
        }}
      />
      <RegistrationSmlDialog
        language={language}
        visible={smlDialogOpen}
        onCancel={() => setSmlDialogOpen(false)}
        onConfirm={(serial) => { const next = createSmlRegistration(serial); setSml(next); onSmlChange?.(next); setJustRegistered(true); setSource("sml"); setSmlDialogOpen(false); }}
      />
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

/** 顶部提示条；`action` 放在文案右侧（如「立即注册」按钮），走 Message 的 link 插槽。 */
export function RegistrationNotice({ message, action }: { message: string; action?: ReactNode }) {
  return (
    <div className="mt-4">
      <MobileMessage
        className="km-mobile-message"
        theme="warning"
        visible
        duration={0}
        content={message}
        link={action}
      />
    </div>
  );
}

/** `device` 不传时用 310 默认演示设备；31031001 等有自己模拟数据的设备传入各自的名称、编号、项目和地址。 */
export function DeviceSummary({ language, device }: { language: MobileLang; device?: RegistrationDeviceInfo }) {
  const t = copy[language];
  const fallback = CONNECTION_310_REGISTRATION_DATA;
  const data = device ?? fallback;
  const name = device ? device.name[language] : fallback.name;

  return (
    <article className="mt-4 box-border flex h-36 flex-col gap-4 rounded-lg border border-stroke bg-container px-3 py-4">
      {/* Figma 9746:71205: the title, icon and device tag are one fixed left-aligned group. */}
      <h2 className="m-0 flex h-7 shrink-0 items-center gap-3 whitespace-nowrap">
        <ElevatorIcon aria-hidden="true" className="size-7 shrink-0 text-icon-primary" />
        <span className="shrink-0 text-h6 font-medium text-primary-text">{name}</span>
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

function ModulePanel({ language, state, sml, source, mainModule, cloudModules }: { language: MobileLang; state: Connection310State; sml: SmlRegistration | null; source: DataSource; mainModule?: { title: string; serial: string }; cloudModules?: CloudModule[] }) {
  const t = copy[language];
  const offline = state === "offline";
  const ready = state === "ready";
  const needsGuidance = state === "guidance";
  const data = CONNECTION_310_REGISTRATION_DATA;
  // 云管家侧有完整模块列表且数据已同步时，按列表展示（主模块 + 各自的子模块）。
  const useCloudList = source === "cloud" && ready && Boolean(cloudModules?.length);
  return <div id="connection-310-module-panel" role="tabpanel" aria-labelledby="connection-310-module-tab" className="flex flex-col gap-4">
    {useCloudList && cloudModules?.map((module, index) => (
      <RegistrationCard
        key={`${module.title}-${index}`}
        title={module.title}
        titleId={`connection-310-cloud-${index}-title`}
        className=""
        headerTag={module.kind === "sub" ? <SubmoduleTag label={t.childModule} /> : undefined}
        timestampClassName="-ml-1"
        status={<RegistrationStatus online offlineLabel={t.offline} onlineLabel={t.online} />}
      >
        <ModuleDetails rows={module.rows.map((row) => [row.label[language], row.value] as const)} />
      </RegistrationCard>
    ))}
    {source === "cloud" && !useCloudList && <RegistrationCard title={mainModule?.title ?? "KONE Connection 310"} titleId="connection-310-main-title" className="h-[175px]" status={<RegistrationStatus online={!offline} offlineLabel={t.offline} onlineLabel={t.online} />}>
      <ModuleDetails rows={[
        [t.serial, mainModule?.serial ?? data.serial],
        [t.software, offline ? "-" : data.software],
        [t.registration, offline ? "-" : t.registered],
        [t.registrationTime, offline ? "-" : data.registrationTime],
      ]} />
    </RegistrationCard>}
    {source === "cloud" && !useCloudList && !offline && <RegistrationCard
      title={ready ? data.submodule : t.submoduleInfo}
      titleId="connection-310-submodule-title"
      className={ready ? "h-[115px]" : needsGuidance ? "h-[173px]" : "h-[145px]"}
      headerTag={<SubmoduleTag label={t.childModule} />}
      timestampClassName="-ml-1"
      status={ready ? <RegistrationStatus online offlineLabel={t.offline} onlineLabel={t.online} /> : undefined}
    >
      {ready ? <ModuleDetails rows={[[t.serial, data.submoduleSerial], [t.software, data.submoduleSoftware]]} /> : <LoadingModule language={language} guidance={needsGuidance} />}
    </RegistrationCard>}
    {source === "sml" && ready && sml && <RegistrationCard title="SML" titleId="connection-310-sml-title" className="h-[175px]" status={<RegistrationStatus online offlineLabel={t.offline} onlineLabel={t.online} />}>
      <ModuleDetails rows={[[t.serial, sml.serial], [t.software, sml.software], [t.registration, t.registered], [t.registrationTime, sml.registrationTime]]} />
    </RegistrationCard>}
    {source === "sml" && ready && sml && <RegistrationCard
      title={data.submodule}
      titleId="connection-310-sml-submodule-title"
      className="h-[115px]"
      headerTag={<SubmoduleTag label={t.childModule} />}
      timestampClassName="-ml-1"
      status={<RegistrationStatus online offlineLabel={t.offline} onlineLabel={t.online} />}
    >
      <ModuleDetails rows={[[t.serial, data.submoduleSerial], [t.software, data.submoduleSoftware]]} />
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

function RealtimePanel({ language, state, sml, source }: { language: MobileLang; state: Connection310State; sml: SmlRegistration | null; source: DataSource }) {
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
  const tiles = <div className="grid grid-cols-3 gap-2">{metrics.map((metric) => <MetricCard key={metric.id} metric={metric} tone="brand" layout="mobile" fluid />)}</div>;
  return <div id="connection-310-realtime-panel" role="tabpanel" aria-labelledby="connection-310-realtime-tab">
    {source === "cloud" && <RegistrationCard title={t.realtime} titleId="connection-310-realtime-title" headerTag={t.timestamp} className="h-[397px]">{tiles}</RegistrationCard>}
    {source === "sml" && sml && <RegistrationCard title="SML" titleId="connection-310-sml-realtime-title" headerTag={t.timestamp} className="h-[397px]">{tiles}</RegistrationCard>}
  </div>;
}
