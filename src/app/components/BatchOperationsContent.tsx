import { useEffect, useMemo, useRef, useState } from "react";
import type { UpgradeDetail } from "../data/approvalWorkflow";
import batchSvgPaths from "../../imports/IotWebTemplateUntitledEmbedFilterButton3StateCollapsed-1/svg-k7keowhjm7";
import upgradeSvgPaths from "../../imports/IotWebTemplate批量升级OverlayContentDialogContent/svg-uj64kmlbtu";
import upgradeSelectedSvgPaths from "../../imports/IotWebTemplate批量升级OverlayContentDialogContent-2/svg-p0m9k99e2p";
import toastSvgPaths from "../../imports/ToastMessage/svg-5yubahwo3j";

type Language = "en" | "cn";
type Operation = "restart" | "upgrade" | "config";

type Device = {
  id: string;
  type: string;
  typeCode: "connection-310" | "connection-320" | "connection-330";
  company: "kone" | "giant-kone" | "kone-hk";
  status: "online" | "offline" | "disconnected";
  serial: string;
  version: string;
  km: string;
};

const devices: Device[] = Array.from({ length: 20000 }, (_, index) => {
  const deviceNumber = 30358715 + index;
  const suffix = String(index + 51).padStart(6, "0");
  const statuses: Device["status"][] = ["online", "disconnected", "disconnected", "offline", "online", "online"];
  const isKoneConnection320 = index < 10000;
  const isKoneConnection310 = index >= 10000 && index < 12000;
  const typeCode: Device["typeCode"] = isKoneConnection320 ? "connection-320" : isKoneConnection310 ? "connection-310" : (["connection-310", "connection-330", "connection-320"] as const)[index % 3];
  const company: Device["company"] = isKoneConnection320 || isKoneConnection310 ? "kone" : (["giant-kone", "kone-hk", "giant-kone"] as const)[index % 3];
  const typeName = typeCode === "connection-310" ? "KONE Connection 310" : typeCode === "connection-330" ? "KONE Connection 330" : "KONE Connection 320";
  return {
    id: String(deviceNumber),
    type: typeName,
    typeCode,
    company,
    status: statuses[index % statuses.length],
    serial: `KM52152006G02.100ALZ2447${suffix}`,
    version: "15.0d",
    km: `KM52152006G${String((index % 6) + 2).padStart(2, "0")}`,
  };
});

const copy = {
  cn: {
    title: "设备批量操作",
    placeholder: "设备编号/项目编号/项目名称/项目地址",
    filter: "筛选状态",
    batch: "批量操作",
    reset: "重置",
    query: "查询",
    deviceType: "设备类型",
    connection: "连接状态",
    serial: "序列号",
    version: "软件版本",
    deviceNo: "设备编号",
    restart: "重启模块",
    upgrade: "系统升级",
    batchUpgradeTitle: "批量系统升级",
    hardwareTypes: "个硬件类型",
    stepPackage: "选择安装包",
    stepSchedule: "设置执行时间",
    stepConfirm: "升级内容确认",
    packageList: "安装包列表",
    fileName: "文件名称",
    fileSize: "文件大小",
    hardwareType: "硬件类型",
    fileDate: "文件日期",
    cancel: "取消",
    previous: "上一步",
    next: "下一步",
    confirm: "提交",
    remark: "备注",
    remarkOptional: "备注（选填）",
    remarkPlaceholder: "请输入备注信息",
    upgradePackage: "升级安装包",
    upgradeQuantity: "升级数量",
    executeNow: "立即执行",
    scheduleExecution: "定时执行",
    executionTime: "执行时间",
    selectedDevices: "已选择设备",
    selectedPackages: "安装包",
    upgradeReady: "批量升级任务已创建",
    upgradeSubmitted: "批量升级任务已进入审批，您可以在审批中心查看进度。",
    removeUpgrade: "移除升级",
    scheduleHint: "请设定批量系统升级执行时间。",
    schedulePlaceholder: "请设定执行时间",
    selectDeviceFirst: "请先勾选至少一台设备后再执行批量系统升级。",
    config: "配置更新",
    online: "在线",
    offline: "离线",
    disconnected: "断连",
    selected: "已选择",
    deviceUnit: "台设备",
    allStatuses: "全部状态",
    dataScope: "数据范围",
    chooseCompany: "选择公司",
    chooseRegion: "选择区域",
    chooseBranch: "选择分公司",
    chooseOffice: "选择办事处",
    choosePg: "选择PG",
    chooseWorkgroup: "选择工作组",
    deviceFilter: "设备筛选",
    chooseDeviceType: "选择设备类型",
    chooseHardwareType: "选择硬件类型",
    chooseSoftwareVersion: "选择软件版本",
    onlineStatus: "在线状态",
    chooseContent: "请选择内容",
  },
  en: {
    title: "Device Batch Operations",
    placeholder: "Device / project ID / project name / project address",
    filter: "Filter status",
    batch: "Batch operations",
    reset: "Reset",
    query: "Query",
    deviceType: "Device Type",
    connection: "Connection Status",
    serial: "Serial No.",
    version: "Software Version",
    deviceNo: "Device No.",
    restart: "Restart Module",
    upgrade: "System Upgrade",
    batchUpgradeTitle: "Batch System Upgrade",
    hardwareTypes: "hardware types",
    stepPackage: "Select package",
    stepSchedule: "Set execution time",
    stepConfirm: "Confirm upgrade",
    packageList: "Package list",
    fileName: "File name",
    fileSize: "File size",
    hardwareType: "Hardware type",
    fileDate: "File date",
    cancel: "Cancel",
    previous: "Previous",
    next: "Next",
    confirm: "Submit",
    remark: "Remark",
    remarkOptional: "Remark (optional)",
    remarkPlaceholder: "Enter a remark",
    upgradePackage: "Upgrade package",
    upgradeQuantity: "Upgrade quantity",
    executeNow: "Run immediately",
    scheduleExecution: "Schedule execution",
    executionTime: "Execution time",
    selectedDevices: "Selected devices",
    selectedPackages: "Packages",
    upgradeReady: "Batch upgrade task created",
    upgradeSubmitted: "The batch upgrade request was submitted for approval. Track progress in the Approval Center.",
    removeUpgrade: "Remove upgrade",
    scheduleHint: "Set the execution time for this batch system upgrade.",
    schedulePlaceholder: "Set execution time",
    selectDeviceFirst: "Select at least one device before starting a batch system upgrade.",
    config: "Configuration Update",
    online: "Online",
    offline: "Offline",
    disconnected: "Disconnected",
    selected: "Selected",
    deviceUnit: "devices",
    allStatuses: "All statuses",
    dataScope: "Data scope",
    chooseCompany: "Select company",
    chooseRegion: "Select region",
    chooseBranch: "Select branch",
    chooseOffice: "Select office",
    choosePg: "Select PG",
    chooseWorkgroup: "Select workgroup",
    deviceFilter: "Device filter",
    chooseDeviceType: "Select device type",
    chooseHardwareType: "Select hardware type",
    chooseSoftwareVersion: "Select software version",
    onlineStatus: "Online status",
    chooseContent: "Please select",
  },
};

function BatchOperationIcon({ operation }: { operation: Operation }) {
  if (operation === "restart") {
    return <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16"><g fill="currentColor" transform="translate(1 1)"><path d={batchSvgPaths.p118f3a80} /><path d={batchSvgPaths.pfc65c00} /></g></svg>;
  }
  if (operation === "upgrade") {
    return <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16"><path d={batchSvgPaths.p2538db80} fill="currentColor" transform="translate(2 2)" /></svg>;
  }
  return <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16"><g fill="currentColor" transform="translate(1.46 .46)"><path d={batchSvgPaths.p249a2fb0} /><path d={batchSvgPaths.p32af2800} /><path d={batchSvgPaths.p20b73a80} /><path d={batchSvgPaths.p15c9d200} /><path d={batchSvgPaths.p2e4b7980} /><path d={batchSvgPaths.p3988e800} /><path d={batchSvgPaths.p5a3c800} /></g></svg>;
}

function FilterSelect({ value, onChange, placeholder, disabled = false, options = [] }: { value?: string; onChange?: (value: string) => void; placeholder: string; disabled?: boolean; options?: { value: string; label: string }[] }) {
  return (
    <select
      value={value || ""}
      onChange={(event) => onChange?.(event.target.value)}
      disabled={disabled}
      className={`h-8 min-w-0 flex-1 appearance-none rounded-[4px] border border-[#c8cad0] bg-white bg-[linear-gradient(45deg,transparent_50%,#8f9195_50%),linear-gradient(135deg,#8f9195_50%,transparent_50%)] bg-[position:calc(100%-12px)_13px,calc(100%-8px)_13px] bg-[size:4px_4px,4px_4px] bg-no-repeat px-2 pr-7 text-[14px] leading-[22px] outline-none ${disabled ? "cursor-not-allowed bg-[#f2f4f7] text-[#abadb2]" : "text-[#8f9195] focus:border-[#1450f5]"}`}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
  );
}

function TableCheckbox({ checked, onChange, label, disabled = false }: { checked: boolean; onChange: () => void; label: string; disabled?: boolean }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={label}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={onChange}
      className={`flex size-4 items-center justify-center rounded-[4px] border transition-colors ${checked ? "border-[#1450f5] bg-[#1450f5]" : "border-[#c8cad0] bg-white hover:border-[#1450f5]"} ${disabled ? "cursor-not-allowed opacity-55" : ""}`}
    >
      {checked && <svg aria-hidden="true" className="size-3" fill="none" viewBox="0 0 12 12"><path d="M2.4 6.1 4.75 8.3 9.65 3.55" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>}
    </button>
  );
}

function padTimeValue(value: number) {
  return String(value).padStart(2, "0");
}

function parseDateTimeValue(value: string) {
  if (!value) return new Date();
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

function toDateTimeValue(date: Date) {
  return `${date.getFullYear()}-${padTimeValue(date.getMonth() + 1)}-${padTimeValue(date.getDate())}T${padTimeValue(date.getHours())}:${padTimeValue(date.getMinutes())}:${padTimeValue(date.getSeconds())}`;
}

function TimePickerColumn({ label, value, values, onSelect }: { label: string; value: number; values: number[]; onSelect: (value: number) => void }) {
  return <div className="min-w-0 flex-1 border-l border-[#dfe1e8] first:border-l-0">
    <div className="border-b border-[#dfe1e8] px-2 py-2 text-center text-[14px] leading-[22px] text-[#141414]">{label}</div>
    <div className="h-[168px] overflow-y-auto px-3 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {values.map((item) => <button key={item} type="button" onClick={() => onSelect(item)} className={`flex h-6 w-full items-center justify-center rounded-[4px] text-[14px] leading-[22px] ${item === value ? "bg-[#f3f6fe] text-[#1450f5]" : "text-[#676a72] hover:bg-[#f5f7fa]"}`}>{padTimeValue(item)}</button>)}
    </div>
  </div>;
}

function BulkSystemUpgradeDialog({ language, selectedDevices, onClose, onComplete }: { language: Language; selectedDevices: Device[]; onClose: () => void; onComplete: (submission: { scheduledAt: string; packages: Record<string, string>; upgradeDetails: UpgradeDetail[]; submissionRemark?: string }) => void }) {
  const t = copy[language];
  const kmNumbers = Array.from(new Set(selectedDevices.map((device) => device.km)));
  const [step, setStep] = useState(1);
  const [activeKm, setActiveKm] = useState(kmNumbers[0]);
  const [selectedPackages, setSelectedPackages] = useState<Record<string, string>>({});
  const [previewedPackage, setPreviewedPackage] = useState("");
  const [scheduledAt, setScheduledAt] = useState("");
  const [submissionRemark, setSubmissionRemark] = useState("");
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [pickerDate, setPickerDate] = useState(() => new Date());
  const [pickerMonth, setPickerMonth] = useState(() => new Date());
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollTabs = (direction: "left" | "right") => {
    tabsRef.current?.scrollBy({ left: direction === "left" ? -260 : 260, behavior: "smooth" });
  };

  const packagesForKm = (km: string) => [
    `ES-NKE-ALL-99.0.2.2-250617 T08:24:04UTC`,
    `ES-NKE-ALL-99.0.2.1-250512 T12:18:43UTC`,
    `ES-NKE-ALL-98.9.8.6-250406 T03:45:19UTC`,
    `ES-NKE-ALL-98.9.7.4-250318 T16:07:55UTC`,
    `ES-NKE-ALL-98.8.4.9-250122 T09:12:30UTC`,
  ].map((name) => `${km} · ${name}`);

  const activePackages = packagesForKm(activeKm);
  const visiblePreview = activePackages.includes(previewedPackage) ? previewedPackage : "";
  const previewName = visiblePreview.replace(`${activeKm} · `, "").replace(/ T.*$/, "");
  const hasSelectedPackage = Object.keys(selectedPackages).length > 0;
  const canAdvance = step === 1 ? hasSelectedPackage : step === 2 ? Boolean(scheduledAt) : hasSelectedPackage;
  const formatExecutionTime = (value: string) => value ? value.replace("T", " ") : "";
  const removeSelectedPackage = (km: string) => setSelectedPackages((current) => { const { [km]: _removedPackage, ...remainingPackages } = current; return remainingPackages; });
  const upgradeRows: UpgradeDetail[] = Object.entries(selectedPackages).map(([hardwareType, packageName]) => ({
    deviceType: "LCE",
    hardwareType,
    packageName: packageName.replace(`${hardwareType} · `, ""),
    quantity: String(selectedDevices.filter((device) => device.km === hardwareType).length).padStart(3, "0"),
  }));
  const next = () => {
    if (step < 3) setStep((current) => current + 1);
    else onComplete({ scheduledAt, packages: selectedPackages, upgradeDetails: upgradeRows, submissionRemark: submissionRemark.trim() || undefined });
  };

  const steps = [t.stepPackage, t.stepSchedule, t.stepConfirm];
  const calendarDays = useMemo(() => {
    const year = pickerMonth.getFullYear();
    const month = pickerMonth.getMonth();
    const leadingDays = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: 42 }, (_, index) => {
      const day = index - leadingDays + 1;
      return day > 0 && day <= daysInMonth ? new Date(year, month, day) : null;
    });
  }, [pickerMonth]);
  const openDatePicker = () => {
    const current = parseDateTimeValue(scheduledAt);
    setPickerDate(current);
    setPickerMonth(new Date(current.getFullYear(), current.getMonth(), 1));
    setIsDatePickerOpen(true);
  };
  const updatePickerTime = (part: "hours" | "minutes" | "seconds", value: number) => {
    setPickerDate((current) => { const next = new Date(current); next[`set${part[0].toUpperCase()}${part.slice(1)}` as "setHours" | "setMinutes" | "setSeconds"](value); return next; });
  };
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#141414]/60 p-4" role="dialog" aria-modal="true" aria-label={t.batchUpgradeTitle}>
      <div className="flex h-[634px] w-full max-w-[900px] flex-col overflow-hidden rounded-[8px] bg-white shadow-2xl">
        <header className="flex items-center justify-between border-b border-[#e7e7e7] px-8 py-6">
          <div className="flex items-center gap-2"><h2 className="text-[16px] font-semibold leading-6 text-[#141414]">{t.batchUpgradeTitle}</h2><span className="text-[14px] leading-[22px] text-[#676a72]">{kmNumbers.length} {t.hardwareTypes}</span></div>
          <button type="button" onClick={onClose} aria-label={t.cancel} className="flex size-6 items-center justify-center rounded-[3px] text-[#727272] hover:bg-[#f5f7fa]"><svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16"><path d={upgradeSvgPaths.p1e5ad00} fill="currentColor" transform="translate(4 4)" /></svg></button>
        </header>
        <div className="flex-1 overflow-y-auto px-8 py-3">
          <ol className="flex w-full items-start">{steps.map((label, index) => { const number = index + 1; const active = step === number; const complete = step > number; return <li key={label} className="flex min-w-0 flex-1 items-center last:flex-none"><div className="flex items-center gap-3"><span className={`flex size-6 shrink-0 items-center justify-center rounded-full border text-[14px] font-semibold ${active ? "border-[#1450f5] bg-[#1450f5] text-white" : complete ? "border-[#1450f5] bg-white text-[#1450f5]" : "border-[#8f9195] text-[#8f9195]"}`}>{complete ? "✓" : number}</span><span className={`whitespace-nowrap text-[16px] leading-6 ${active ? "font-semibold text-[#1450f5]" : complete ? "text-[#141414]" : "text-[#8f9195]"}`}>{label}</span></div>{index < 2 && <span className={`mx-4 h-[2px] min-w-4 flex-1 ${step > number ? "bg-[#1450f5]" : "bg-[#c8cad0]"}`} />}</li>; })}</ol>
          {step === 1 && <div className="mt-4">
            <div className="relative border-b border-[#dfe1e8]">
              <div ref={tabsRef} className="flex h-12 items-center overflow-x-auto pl-10 pr-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {kmNumbers.map((km) => { const hasSelectedPackage = Boolean(selectedPackages[km]); return <button type="button" key={km} onClick={() => { setActiveKm(km); setPreviewedPackage(""); }} className={`relative inline-flex h-full min-w-[152px] shrink-0 items-center justify-center gap-1 px-3 text-[14px] leading-[22px] ${activeKm === km ? "font-medium text-[#1450f5] after:absolute after:inset-x-0 after:bottom-[-1px] after:z-10 after:h-[3px] after:bg-[#1450f5]" : "text-[#676a72] hover:bg-[#fafbfc] hover:text-[#141414]"}`}>{hasSelectedPackage && <svg aria-hidden="true" className={`size-3 shrink-0 ${activeKm === km ? "text-[#1450f5]" : "text-[#8f9195]"}`} fill="none" viewBox="0 0 14 14"><path d={upgradeSelectedSvgPaths.p72a000} fill="currentColor" /></svg>}{km}</button>; })}
              </div>
              <button type="button" aria-label="Previous KM" onClick={() => scrollTabs("left")} className="absolute left-0 top-0 z-20 flex size-10 items-center justify-center border-r border-[#dfe1e8] bg-white text-[#676a72] shadow-[10px_0_10px_rgba(0,0,0,0.05)] hover:bg-[#f5f7fa]"><svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16"><path d={upgradeSvgPaths.p2e389000} fill="currentColor" transform="translate(5.31 3.54)" /></svg></button>
              <button type="button" aria-label="Next KM" onClick={() => scrollTabs("right")} className="absolute right-0 top-0 z-20 flex size-10 items-center justify-center border-l border-[#dfe1e8] bg-white text-[#676a72] shadow-[-10px_0_10px_rgba(0,0,0,0.05)] hover:bg-[#f5f7fa]"><svg aria-hidden="true" className="size-4 rotate-180" fill="none" viewBox="0 0 16 16"><path d={upgradeSvgPaths.p2e389000} fill="currentColor" transform="translate(5.31 3.54)" /></svg></button>
            </div>
            <div className={`mt-3 h-[300px] overflow-hidden rounded-[8px] border border-[#c8cad0] bg-white p-2 ${visiblePreview ? "grid grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] gap-4" : "block"}`}>
              <div className="min-w-0 overflow-y-auto rounded-[6px] bg-white px-2 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <p className="mb-2 px-1 text-[14px] font-medium leading-[22px] text-[#141414]">{t.packageList}</p>
                <div className="space-y-0.5" role="listbox" aria-label={t.packageList}>
                  {activePackages.map((pkg) => {
                    const selectedPackage = selectedPackages[activeKm] === pkg;
                    const previewed = visiblePreview === pkg;
                    const emphasized = previewed || selectedPackage;
                    const choosePackage = () => setSelectedPackages((current) => {
                      if (current[activeKm] === pkg) {
                        const { [activeKm]: _removedPackage, ...remainingPackages } = current;
                        return remainingPackages;
                      }
                      return { ...current, [activeKm]: pkg };
                    });
                    return <div key={pkg} role="option" aria-selected={previewed} tabIndex={0} onClick={() => setPreviewedPackage(pkg)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setPreviewedPackage(pkg); } }} className={`flex w-full cursor-pointer items-center gap-2 rounded-[4px] px-3 py-3 text-left text-[14px] leading-[22px] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#1450f5] ${previewed ? "bg-[#f3f6fe]" : "hover:bg-[#f5f7fa]"}`}>
                      <button type="button" role="radio" aria-checked={selectedPackage} aria-label={`${pkg.replace(`${activeKm} · `, "")} ${language === "cn" ? "选择安装包" : "Select package"}`} onClick={(event) => { event.stopPropagation(); choosePackage(); }} className={`flex size-4 shrink-0 items-center justify-center rounded-full border bg-white outline-none focus-visible:ring-2 focus-visible:ring-[#1450f5] ${emphasized ? "border-[#1450f5]" : "border-[#c8cad0]"}`}>{selectedPackage && <span className="size-2 rounded-full bg-[#1450f5]" />}</button>
                      <svg aria-hidden="true" className={`size-4 shrink-0 ${emphasized ? "text-[#1450f5]" : "text-[#141414]"}`} fill="none" viewBox="0 0 16 16"><path d={upgradeSvgPaths.p3a3c6d00} fill="currentColor" transform="translate(1.5 2)" /></svg>
                      <span className={`truncate ${emphasized ? "text-[#1450f5]" : "text-[#141414]"}`}>{pkg.replace(`${activeKm} · `, "")}</span>
                    </div>;
                  })}
                </div>
              </div>
              {visiblePreview && <>
                <div aria-hidden="true" className="border-l border-dashed border-[#dfe1e8]" />
                <aside className="rounded-[6px] bg-[#f5f7fa] px-5 py-3" aria-live="polite">
                  <dl className="space-y-3 text-[14px] leading-[22px]">
                    <div><dt className="text-[#676a72]">{t.fileName}</dt><dd className="truncate font-medium text-[#141414]" title={previewName}>{previewName}</dd></div>
                    <div><dt className="text-[#676a72]">{t.fileSize}</dt><dd className="font-medium text-[#141414]">17.30MB</dd></div>
                    <div><dt className="text-[#676a72]">{t.hardwareType}</dt><dd className="font-medium text-[#141414]">{activeKm}</dd></div>
                    <div><dt className="text-[#676a72]">{t.fileDate}</dt><dd className="font-medium text-[#141414]">2025-06-24 17:14:21</dd></div>
                  </dl>
                </aside>
              </>}
            </div>
          </div>}
          {step === 2 && <div className="mt-5 w-full">
            <p className="text-[14px] leading-[22px] text-[#676a72]">{t.scheduleHint}</p>
            <div className="relative mt-3 w-full max-w-[500px]">
              <label className="mb-2 block text-[14px] leading-[22px] text-[#141414]">{t.executionTime}<span className="ml-0.5 text-[#f51414]">*</span></label>
              <button type="button" aria-haspopup="dialog" aria-expanded={isDatePickerOpen} onClick={() => isDatePickerOpen ? setIsDatePickerOpen(false) : openDatePicker()} className={`flex h-8 w-full items-center justify-between rounded-[4px] border bg-white px-2 text-left text-[14px] leading-[22px] outline-none transition-colors ${isDatePickerOpen ? "border-[#1450f5]" : "border-[#c8cad0] hover:border-[#1450f5]"}`}>
                <span className={scheduledAt ? "text-[#141414]" : "text-[#8f9195]"}>{scheduledAt ? formatExecutionTime(scheduledAt) : t.schedulePlaceholder}</span>
                <svg aria-hidden="true" className="size-4 text-[#8f9195]" fill="none" viewBox="0 0 16 16"><rect x="2.5" y="3.5" width="11" height="10" rx="1" stroke="currentColor" /><path d="M5 2.5v3M11 2.5v3M2.5 7h11" stroke="currentColor" strokeLinecap="round" /></svg>
              </button>
              {isDatePickerOpen && <div role="dialog" aria-label={t.executionTime} className="absolute left-0 top-[78px] z-40 w-[496px] overflow-hidden rounded-[6px] border border-[#c8cad0] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
                <div className="flex">
                  <div className="w-[217px] p-3">
                    <div className="flex items-center justify-between"><button type="button" onClick={() => setPickerMonth((current) => new Date(current.getFullYear(), current.getMonth() - 1, 1))} className="flex size-6 items-center justify-center rounded-[3px] text-[#141414] hover:bg-[#f5f7fa]">‹</button><span className="text-[14px] leading-[22px] text-[#141414]">{pickerMonth.getFullYear()}年 {pickerMonth.getMonth() + 1}月</span><button type="button" onClick={() => setPickerMonth((current) => new Date(current.getFullYear(), current.getMonth() + 1, 1))} className="flex size-6 items-center justify-center rounded-[3px] text-[#141414] hover:bg-[#f5f7fa]">›</button></div>
                    <div className="mt-3 grid grid-cols-7 gap-y-1 text-center text-[12px] leading-5 text-[#8f9195]">{(language === "cn" ? ["日", "一", "二", "三", "四", "五", "六"] : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]).map((day) => <span key={day}>{day}</span>)}</div>
                    <div className="mt-1 grid grid-cols-7 gap-y-1">{calendarDays.map((date, index) => date ? <button key={date.toISOString()} type="button" onClick={() => setPickerDate((current) => new Date(date.getFullYear(), date.getMonth(), date.getDate(), current.getHours(), current.getMinutes(), current.getSeconds()))} className={`mx-auto flex size-6 items-center justify-center rounded-[3px] text-[14px] leading-[22px] ${date.getFullYear() === pickerDate.getFullYear() && date.getMonth() === pickerDate.getMonth() && date.getDate() === pickerDate.getDate() ? "bg-[#1450f5] text-white" : "text-[#676a72] hover:bg-[#f3f6fe]"}`}>{date.getDate()}</button> : <span key={`empty-${index}`} />)}</div>
                  </div>
                  <div className="w-px self-stretch bg-[#dfe1e8]" />
                  <div className="flex flex-1"><TimePickerColumn label={language === "cn" ? "时" : "Hour"} value={pickerDate.getHours()} values={Array.from({ length: 24 }, (_, index) => index)} onSelect={(value) => updatePickerTime("hours", value)} /><TimePickerColumn label={language === "cn" ? "分" : "Min"} value={pickerDate.getMinutes()} values={Array.from({ length: 60 }, (_, index) => index)} onSelect={(value) => updatePickerTime("minutes", value)} /><TimePickerColumn label={language === "cn" ? "秒" : "Sec"} value={pickerDate.getSeconds()} values={Array.from({ length: 60 }, (_, index) => index)} onSelect={(value) => updatePickerTime("seconds", value)} /></div>
                </div>
                <div className="flex h-12 items-center justify-between border-t border-[#dfe1e8] px-3"><button type="button" onClick={() => { const now = new Date(); setPickerDate(now); setPickerMonth(new Date(now.getFullYear(), now.getMonth(), 1)); }} className="text-[12px] leading-5 text-[#1450f5] hover:underline">{language === "cn" ? "此刻" : "Now"}</button><button type="button" onClick={() => { setScheduledAt(toDateTimeValue(pickerDate)); setIsDatePickerOpen(false); }} className="h-[22px] rounded-[4px] bg-[#1450f5] px-2 text-[12px] leading-5 text-white hover:bg-[#0e43d0]">{language === "cn" ? "确定" : "Confirm"}</button></div>
              </div>}
            </div>
          </div>}
          {step === 3 && <div className="mt-5 w-full">
            <p className="text-[14px] leading-[22px] text-[#676a72]">{language === "cn" ? "请核对升级内容，确认无误后提交。" : "Review the upgrade content before submitting."}</p>
            <p className="mt-4 text-[14px] font-medium leading-[22px] text-[#141414]">{t.executionTime}：{formatExecutionTime(scheduledAt)}</p>
            <div className="mt-4 overflow-hidden rounded-[6px] border border-[#dfe1e8]">
              <table className="w-full border-collapse text-left text-[12px] leading-5">
                <thead className="bg-[#f5f7fa] text-[#8f9195]"><tr><th className="w-[132px] border-b border-[#dfe1e8] px-2 py-2 font-normal">{t.deviceType}</th><th className="w-[132px] border-b border-[#dfe1e8] px-2 py-2 font-normal">{t.hardwareType}</th><th className="border-b border-[#dfe1e8] px-2 py-2 font-normal">{t.upgradePackage}</th><th className="w-[100px] border-b border-[#dfe1e8] px-2 py-2 font-normal">{t.upgradeQuantity}</th><th className="w-[96px] border-b border-[#dfe1e8] px-2 py-2 font-normal">{language === "cn" ? "操作" : "Action"}</th></tr></thead>
                <tbody>{upgradeRows.map((row) => <tr key={row.hardwareType} className="bg-white last:[&>td]:border-b-0"><td className="border-b border-[#e7e7e7] px-2 py-2 text-[#141414]">{row.deviceType}</td><td className="border-b border-[#e7e7e7] px-2 py-2 text-[#141414]">{row.hardwareType}</td><td className="border-b border-[#e7e7e7] px-2 py-2 text-[#141414]">{row.packageName}</td><td className="border-b border-[#e7e7e7] px-2 py-2 text-[#141414]">{row.quantity}</td><td className="border-b border-[#e7e7e7] px-2 py-2"><button type="button" onClick={() => removeSelectedPackage(row.hardwareType)} className="text-[12px] leading-5 text-[#1450f5] hover:underline">{t.removeUpgrade}</button></td></tr>)}</tbody>
              </table>
            </div>
            <label className="mt-4 block text-[14px] font-medium leading-[22px] text-[#141414]">{t.remarkOptional}<textarea value={submissionRemark} onChange={(event) => setSubmissionRemark(event.target.value)} placeholder={t.remarkPlaceholder} className="mt-2 block h-[72px] w-full resize-none rounded-[4px] border border-[#c8cad0] px-3 py-2 text-[14px] font-normal leading-[22px] text-[#141414] outline-none placeholder:text-[#8f9195] focus:border-[#1450f5]" /></label>
          </div>}
        </div>
        <footer className="flex justify-end gap-2 border-t border-[#e7e7e7] px-8 py-6"><button type="button" onClick={step === 1 ? onClose : () => setStep((current) => current - 1)} className="h-8 rounded-[4px] bg-[#f1f1f1] px-4 text-[14px] text-[#141414] hover:bg-[#e8e8e8]">{step === 1 ? t.cancel : t.previous}</button><button type="button" disabled={!canAdvance} onClick={next} className={`h-8 rounded-[4px] px-4 text-[14px] text-white ${canAdvance ? "bg-[#1450f5] hover:bg-[#0e43d0]" : "cursor-not-allowed bg-[#a1b9fb]"}`}>{step === 3 ? t.confirm : t.next}</button></footer>
      </div>
    </div>
  );
}

export default function BatchOperationsContent({ language, onSubmitForApproval }: { language: Language; onSubmitForApproval?: (submission: { scheduledAt: string; packages: Record<string, string>; upgradeDetails: UpgradeDetail[]; submissionRemark?: string }) => void }) {
  const t = copy[language];
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  const [upgradeError, setUpgradeError] = useState("");
  const [statusFilter, setStatusFilter] = useState<Device["status"] | "all">("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [company, setCompany] = useState("");
  const [deviceTypeFilter, setDeviceTypeFilter] = useState("");
  const [hasQueried, setHasQueried] = useState(false);
  const [appliedCompany, setAppliedCompany] = useState("");
  const [appliedDeviceType, setAppliedDeviceType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectAllResults, setSelectAllResults] = useState(false);
  const [isQueryLoading, setIsQueryLoading] = useState(false);
  const queryTimerRef = useRef<number | null>(null);
  const [lastOperation, setLastOperation] = useState<Operation | null>(null);
  const [isSuccessToastVisible, setIsSuccessToastVisible] = useState(false);

  useEffect(() => {
    if (!isSuccessToastVisible) return;
    const timeoutId = window.setTimeout(() => setIsSuccessToastVisible(false), 5000);
    return () => window.clearTimeout(timeoutId);
  }, [isSuccessToastVisible]);

  useEffect(() => () => {
    if (queryTimerRef.current !== null) window.clearTimeout(queryTimerRef.current);
  }, []);

  const visibleDevices = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return devices.filter((device) => {
      const matchesQuery = !normalized || [device.id, device.type, device.serial].some((value) => value.toLowerCase().includes(normalized));
      const matchesAppliedFilters = !hasQueried || (device.company === appliedCompany && device.typeCode === appliedDeviceType);
      return matchesQuery && matchesAppliedFilters && (statusFilter === "all" || device.status === statusFilter);
    });
  }, [appliedCompany, appliedDeviceType, hasQueried, query, statusFilter]);

  const pageSize = 20;
  const totalPages = Math.max(1, Math.ceil(visibleDevices.length / pageSize));
  const pagedDevices = visibleDevices.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const manualSelectionLimit = 500;
  const manualSelectionAtLimit = !selectAllResults && selected.length >= manualSelectionLimit;
  const selectedAll = pagedDevices.length > 0 && pagedDevices.every((device) => selected.includes(device.id));
  const toggleAll = () => {
    if (selectAllResults) return;
    setSelected((current) => {
      const selectedOnPage = pagedDevices.filter((device) => current.includes(device.id));
      if (selectedOnPage.length === pagedDevices.length) return current.filter((id) => !pagedDevices.some((device) => device.id === id));
      const remainingSlots = Math.max(0, manualSelectionLimit - current.length);
      const additions = pagedDevices.filter((device) => !current.includes(device.id)).slice(0, remainingSlots).map((device) => device.id);
      return Array.from(new Set([...current, ...additions]));
    });
  };
  const toggleAllResults = () => {
    if (selectAllResults) { setSelectAllResults(false); setSelected([]); }
    else { setSelectAllResults(true); setSelected(visibleDevices.map((device) => device.id)); }
  };
  const toggleDevice = (id: string) => setSelected((current) => current.includes(id) ? current.filter((selectedId) => selectedId !== id) : current.length >= manualSelectionLimit ? current : [...current, id]);
  const runOperation = (operation: Operation) => {
    setIsMenuOpen(false);
    if (operation === "upgrade") {
      if (selected.length === 0) { setUpgradeError(t.selectDeviceFirst); return; }
      setUpgradeError("");
      setIsUpgradeOpen(true);
      return;
    }
    setLastOperation(operation);
  };
  const reset = () => { if (queryTimerRef.current !== null) window.clearTimeout(queryTimerRef.current); setIsQueryLoading(false); setQuery(""); setSelected([]); setSelectAllResults(false); setStatusFilter("all"); setCompany(""); setDeviceTypeFilter(""); setAppliedCompany(""); setAppliedDeviceType(""); setHasQueried(false); setCurrentPage(1); setLastOperation(null); setUpgradeError(""); };
  const submitQuery = () => {
    if (isQueryLoading) return;
    setSelected([]); setSelectAllResults(false); setCurrentPage(1); setUpgradeError(""); setIsQueryLoading(true);
    if (queryTimerRef.current !== null) window.clearTimeout(queryTimerRef.current);
    queryTimerRef.current = window.setTimeout(() => {
      setAppliedCompany(company); setAppliedDeviceType(deviceTypeFilter); setHasQueried(Boolean(company && deviceTypeFilter)); setIsQueryLoading(false); queryTimerRef.current = null;
    }, 700);
  };
  const hasActiveFilter = Boolean(company || deviceTypeFilter || statusFilter !== "all");
  const hasExceededResultLimit = visibleDevices.length > 5000;

  const operationLabel: Record<Operation, string> = { restart: t.restart, upgrade: t.upgrade, config: t.config };
  const statusLabel: Record<Device["status"], string> = { online: t.online, offline: t.offline, disconnected: t.disconnected };
  const statusColor: Record<Device["status"], string> = { online: "#1ed273", offline: "#f51414", disconnected: "#ff8a00" };

  return (
    <section className="overflow-hidden rounded-[8px] border border-[#dfe1e8] bg-white font-['PingFang_SC:Regular',sans-serif] font-normal" aria-label={t.title}>
      {isUpgradeOpen && <BulkSystemUpgradeDialog language={language} selectedDevices={devices.filter((device) => selected.includes(device.id))} onClose={() => setIsUpgradeOpen(false)} onComplete={(submission) => { setIsUpgradeOpen(false); setLastOperation("upgrade"); setIsSuccessToastVisible(true); onSubmitForApproval?.(submission); }} />}
      {isSuccessToastVisible && <div role="status" className="fixed left-1/2 top-[68px] z-[120] flex -translate-x-1/2 items-center gap-6 rounded-[6px] border-[0.5px] border-[#c8cad0] bg-white px-4 py-[13px] text-[14px] leading-[22px] text-[#141414] shadow-[0_8px_10px_rgba(0,0,0,0.1)]"><div className="flex items-center gap-2"><span className="relative size-5 shrink-0" aria-hidden="true"><svg className="absolute inset-[6.25%] size-[87.5%]" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5"><path d={toastSvgPaths.p2cd67100} fill="#1ED273" /></svg></span><span className="whitespace-nowrap">{t.upgradeSubmitted}</span></div><button type="button" onClick={() => setIsSuccessToastVisible(false)} aria-label={t.cancel} className="relative flex size-4 shrink-0 items-center justify-center rounded-[3px] hover:bg-[#f5f7fa]"><span className="absolute inset-[25.03%]"><svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99031 7.99033"><path d={toastSvgPaths.p1e5ad00} fill="#676A72" /></svg></span></button></div>}
      <div className="px-5 pb-4 pt-6">
        <h1 className="text-[20px] font-semibold leading-7 text-[#141414]">{t.title}</h1>
      </div>
      <div className="space-y-4 px-5 pb-5 pt-0">
        <div className="flex flex-wrap items-center justify-between gap-3 pt-0">
          <div className="flex min-w-[280px] flex-1 items-center gap-4">
            <label className="flex h-8 w-full max-w-[400px] items-center rounded-[4px] border border-[#d0d0d0] bg-white pl-1 pr-2 focus-within:border-[#1450f5]">
              <svg aria-hidden="true" className="mr-1 size-4 text-[#727272]" fill="none" viewBox="0 0 16 16"><path d={batchSvgPaths.p396f6980} fill="currentColor" transform="translate(2 2)" /></svg>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.placeholder} className="h-full min-w-0 flex-1 border-0 bg-transparent text-[14px] text-[#141414] outline-none placeholder:text-[#959595]" />
            </label>
            <div className="relative">
              <button type="button" aria-label={t.filter} aria-expanded={isFilterOpen} onClick={() => setIsFilterOpen((current) => !current)} className={`flex size-8 items-center justify-center rounded-[4px] border transition-colors ${hasActiveFilter ? "border-[#1450f5] bg-[#f3f6fe] text-[#1450f5]" : isFilterOpen ? "border-[#c8cad0] bg-[#f5f7fa] text-[#141414]" : "border-transparent bg-[#f2f4f7] text-[#141414] hover:bg-[#e8ebf0]"}`}>
                <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16"><path d={batchSvgPaths.p1d949680} fill="currentColor" transform="translate(2 2)" /></svg>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <button type="button" onClick={() => setIsMenuOpen((current) => !current)} className="flex h-8 items-center gap-1 rounded-[4px] border-0 bg-[#f2f4f7] py-[5px] pl-4 pr-2 text-[14px] leading-[22px] text-[#141414] hover:bg-[#e8ebf0]">
                {t.batch}<svg aria-hidden="true" className={`size-4 transition-transform ${isMenuOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 16 16"><path d={batchSvgPaths.p1df28700} fill="currentColor" transform="translate(3.54 5.31)" /></svg>
              </button>
              {isMenuOpen && <div className="absolute right-0 top-9 z-20 w-[120px] rounded-[8px] bg-white px-[6px] py-2 shadow-[0_4px_5px_rgba(0,0,0,0.1)]">{(["restart", "upgrade", "config"] as Operation[]).map((operation) => <button key={operation} type="button" onClick={() => runOperation(operation)} className="flex w-full items-center gap-[6px] rounded-[4px] px-[6px] py-[3px] text-left text-[14px] leading-[22px] text-[#141414] hover:bg-[#f2f4f7]"><BatchOperationIcon operation={operation} />{operationLabel[operation]}</button>)}</div>}
            </div>
            <button type="button" onClick={reset} className="h-8 rounded-[4px] border-0 bg-[#f2f4f7] px-4 text-[14px] leading-[22px] text-[#141414] hover:bg-[#e8ebf0]">{t.reset}</button>
            <button type="button" disabled={isQueryLoading} onClick={submitQuery} className="flex h-8 items-center justify-center gap-1.5 rounded-[4px] border-0 bg-[#1450f5] px-4 text-[14px] leading-[22px] text-white hover:bg-[#0e43d0] disabled:cursor-wait disabled:bg-[#7d9cf8]">{isQueryLoading && <span aria-hidden="true" className="size-3 animate-spin rounded-full border-2 border-white/40 border-t-white" />}{isQueryLoading ? (language === "cn" ? "查询中" : "Searching") : t.query}</button>
          </div>
        </div>
        {isFilterOpen && (
          <div className="rounded-[6px] bg-[#fafbfc] px-4 pb-4 pt-2">
            <div className="text-[14px] leading-[22px] text-[#141414]">{t.dataScope}</div>
            <div className="mt-1 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-6">
              <FilterSelect value={company} onChange={setCompany} placeholder={t.chooseCompany} options={[{ value: "kone", label: language === "cn" ? "通力" : "KONE" }, { value: "giant-kone", label: language === "cn" ? "巨人通力" : "Giant KONE" }, { value: "kone-hk", label: language === "cn" ? "通力香港" : "KONE Hong Kong" }]} />
              <FilterSelect placeholder={t.chooseRegion} disabled />
              <FilterSelect placeholder={t.chooseBranch} disabled />
              <FilterSelect placeholder={t.chooseOffice} disabled />
              <FilterSelect placeholder={t.choosePg} disabled />
              <FilterSelect placeholder={t.chooseWorkgroup} disabled />
            </div>
            <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_238px]">
              <div>
                <div className="mb-2 text-[14px] leading-[22px] text-[#141414]">{t.deviceFilter}</div>
                <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
                  <FilterSelect value={deviceTypeFilter} onChange={setDeviceTypeFilter} placeholder={t.chooseDeviceType} options={[{ value: "connection-310", label: "KONE Connection 310" }, { value: "connection-320", label: "KONE Connection 320" }, { value: "connection-330", label: "KONE Connection 330" }]} />
                  <FilterSelect placeholder={t.chooseHardwareType} disabled />
                  <FilterSelect placeholder={t.chooseSoftwareVersion} disabled />
                </div>
              </div>
              <div>
                <div className="mb-2 text-[14px] leading-[22px] text-[#141414]">{t.onlineStatus}</div>
                <FilterSelect value={statusFilter === "all" ? "" : statusFilter} onChange={(value) => setStatusFilter((value || "all") as Device["status"] | "all")} placeholder={t.chooseContent} options={[{ value: "online", label: t.online }, { value: "disconnected", label: t.disconnected }, { value: "offline", label: t.offline }]} />
              </div>
            </div>
          </div>
        )}
        {hasQueried && <div className={`flex flex-wrap items-center justify-between gap-3 rounded-[6px] px-4 py-[10px] text-[14px] leading-[22px] text-[#141414] ${hasExceededResultLimit ? "bg-[#fff1db]" : "bg-[#f3f6fe]"}`}>
          <div className="flex min-w-0 items-center gap-2"><svg aria-hidden="true" className={`size-5 shrink-0 ${hasExceededResultLimit ? "text-[#f98600]" : "text-[#1450f5]"}`} fill="none" viewBox="0 0 16 16"><path d={batchSvgPaths.p1d949680} fill="currentColor" transform="translate(2 2)" /></svg><span>{language === "cn" ? (hasExceededResultLimit ? `共有${visibleDevices.length}台设备符合筛选结果，已超出5000上限，若全选，则自动拆分为多任务执行，提交后请留意任务列表中拆分任务的处理状态。` : `共有${visibleDevices.length}台设备符合筛选结果。`) : (hasExceededResultLimit ? `${visibleDevices.length} devices match the filters and exceed the 5,000-device limit. Selecting all will split execution into multiple tasks; check the task list after submission.` : `${visibleDevices.length} devices match the filters.`)}</span></div>
          <div className="flex shrink-0 items-center gap-2"><TableCheckbox checked={selectAllResults} onChange={toggleAllResults} label={language === "cn" ? "全部选择筛选结果" : "Select all filtered results"} /><span>{language === "cn" ? "全部选择" : "Select all"}</span></div>
        </div>}
        {hasQueried && manualSelectionAtLimit && <p className="-mt-2 px-1 text-[12px] leading-5 text-[#8f9195]">{language === "cn" ? "当前手动勾选最多支持500台" : "Manual selection supports up to 500 devices."}</p>}
        {upgradeError && <div role="alert" className="rounded-[4px] bg-[#fff1f0] px-3 py-2 text-[13px] text-[#d92d20]">{upgradeError}</div>}
        {lastOperation && <div className="rounded-[4px] bg-[#f3f6fe] px-3 py-2 text-[13px] text-[#1450f5]">{lastOperation === "upgrade" ? t.upgradeReady : operationLabel[lastOperation]} · {t.selected} {selected.length} {t.deviceUnit}</div>}
        <div className="relative overflow-x-auto rounded-[6px] border border-[#dfe1e8]">
          {isQueryLoading && <div className="absolute inset-0 z-10 flex min-h-[280px] items-center justify-center bg-white/85 backdrop-blur-[1px]"><div className="flex items-center gap-2 rounded-[6px] bg-white px-4 py-3 text-[14px] leading-[22px] text-[#1450f5] shadow-[0_4px_10px_rgba(0,0,0,0.08)]"><span aria-hidden="true" className="size-4 animate-spin rounded-full border-2 border-[#b8cafb] border-t-[#1450f5]" />{language === "cn" ? "正在查询设备数据…" : "Searching device data…"}</div></div>}
          <table className="w-full min-w-[820px] border-collapse text-left text-[14px]">
            <thead className="bg-[#f5f7fa] text-[#8f9195]"><tr className="h-[46px] border-b border-[#dfe1e8]"><th className="w-[52px] px-3 text-center"><TableCheckbox checked={selectAllResults || selectedAll} onChange={toggleAll} disabled={selectAllResults || (manualSelectionAtLimit && !selectedAll)} label={language === "cn" ? "选择当前页设备" : "Select current page devices"} /></th><th className="font-normal">{t.deviceType}</th><th className="font-normal">{t.connection}</th><th className="font-normal">{t.serial}</th><th className="font-normal">{t.version}</th><th className="font-normal">{t.deviceNo}</th></tr></thead>
            <tbody>{pagedDevices.map((device) => <tr key={device.id} className="h-[54px] border-b border-[#eef0f4] last:border-b-0 hover:bg-[#fafbfc]"><td className="px-3 text-center"><TableCheckbox checked={selectAllResults || selected.includes(device.id)} onChange={() => toggleDevice(device.id)} disabled={selectAllResults || (manualSelectionAtLimit && !selected.includes(device.id))} label={`${language === "cn" ? "选择设备" : "Select device"} ${device.id}`} /></td><td className="text-[#141414]">{device.type}</td><td><span className="inline-flex items-center gap-1" style={{ color: statusColor[device.status] }}><i className="size-1 rounded-full bg-current" />{statusLabel[device.status]}</span></td><td className="text-[#141414]">{device.serial}</td><td className="text-[#141414]">{device.version}</td><td className="text-[#141414]">{device.id}</td></tr>)}</tbody>
          </table>
          {pagedDevices.length === 0 && <div className="border-t border-[#eef0f4] px-4 py-8 text-center text-[14px] text-[#8f9195]">{language === "cn" ? "暂无符合条件的设备" : "No matching devices"}</div>}
        </div>
        {visibleDevices.length > 0 && <div className="flex flex-wrap items-center justify-between gap-3 pt-4 text-[14px] leading-[22px] text-[#676a72]">
          <span>{language === "cn" ? `共 ${visibleDevices.length} 台设备` : `${visibleDevices.length} devices`}</span>
          <div className="flex items-center gap-2">
            <button type="button" disabled={currentPage === 1} onClick={() => setCurrentPage((page) => Math.max(1, page - 1))} className="flex size-8 items-center justify-center rounded-[4px] border border-[#c8cad0] bg-white text-[#676a72] disabled:cursor-not-allowed disabled:opacity-40">‹</button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
              const startPage = Math.min(Math.max(1, currentPage - 2), Math.max(1, totalPages - 4));
              const page = startPage + index;
              return <button key={page} type="button" onClick={() => setCurrentPage(page)} className={`size-8 rounded-[4px] border text-[14px] ${page === currentPage ? "border-[#1450f5] bg-[#1450f5] text-white" : "border-[#c8cad0] bg-white text-[#141414] hover:border-[#1450f5]"}`}>{page}</button>;
            })}
            {totalPages > 5 && <><span className="px-1 text-[#8f9195]">…</span><button type="button" onClick={() => setCurrentPage(totalPages)} className={`size-8 rounded-[4px] border text-[14px] ${currentPage === totalPages ? "border-[#1450f5] bg-[#1450f5] text-white" : "border-[#c8cad0] bg-white text-[#141414]"}`}>{totalPages}</button></>}
            <button type="button" disabled={currentPage === totalPages} onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))} className="flex size-8 items-center justify-center rounded-[4px] border border-[#c8cad0] bg-white text-[#676a72] disabled:cursor-not-allowed disabled:opacity-40">›</button>
            <span className="ml-2 text-[#8f9195]">{language === "cn" ? `第 ${currentPage} / ${totalPages} 页` : `${currentPage} / ${totalPages}`}</span>
          </div>
        </div>}
      </div>
    </section>
  );
}
