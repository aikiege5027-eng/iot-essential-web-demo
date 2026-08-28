import { ChevronDown, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import ruleSvgPaths from "../../imports/规则配置/svg-rnnbuwzt9g";
import stepperSvgPaths from "../../imports/AddonInput标签输入框/svg-wileltcvna";

type Language = "en" | "cn";
type Tab = "batch" | "unbind";

type NumberFieldProps = {
  label: string;
  hint: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
  showControls?: boolean;
};

const copy = {
  cn: {
    title: "规则配置", batch: "设备批量操作设置", unbind: "单设备解绑操作审批设置", approvalRole: "审批角色",
    batchRoleHint: "批量设备操作将提交至所选角色审批。", unbindRoleHint: "设备解绑超过设置上限时，将提交至所选角色审批。",
    dispatch: "单次调度数量", dispatchHint: "批量任务中单次执行的子任务数量，范围 100–1000，步长 100。",
    completion: "单次调度完成率指标", completionHint: "单次调度验证结果视为通过的完成率标准，范围 0–100%。",
    dailyLimit: "单日解绑操作触发审批上限", dailyHint: "平台内用户在 1 个自然日内解绑设备数量超过该值后，当日后续解绑操作均需要审批。",
    weeklyLimit: "7日内解绑操作触发审批上限", weeklyHint: "平台内用户在 7 个自然日内解绑设备数量超过该值后，该周期内后续解绑操作均需要审批。",
    save: "保存配置", saved: "规则配置已保存", systemAdmin: "系统管理员", l2: "L2", deviceUnit: "台", percent: "%", help: "查看说明",
  },
  en: {
    title: "Rule configuration", batch: "Batch device operation settings", unbind: "Single-device unbind approval settings", approvalRole: "Approval role",
    batchRoleHint: "Batch device operations are submitted to the selected role for approval.", unbindRoleHint: "Unbind actions exceeding the threshold are submitted to the selected role for approval.",
    dispatch: "Devices per dispatch", dispatchHint: "Number of devices in each batch sub-task. Range 100–1000, step 100.",
    completion: "Dispatch completion-rate threshold", completionHint: "Completion-rate threshold for a validated dispatch. Range 0–100%.",
    dailyLimit: "Daily unbind approval threshold", dailyHint: "When a user exceeds this number of device unbinds in one calendar day, later unbind actions that day require approval.",
    weeklyLimit: "7-day unbind approval threshold", weeklyHint: "When a user exceeds this number of device unbinds in seven calendar days, subsequent unbind actions in that period require approval.",
    save: "Save configuration", saved: "Rule configuration saved", systemAdmin: "System administrator", l2: "L2", deviceUnit: "devices", percent: "%", help: "View explanation",
  },
};

function HelpTooltip({ text, label }: { text: string; label: string }) {
  return (
    <span className="group relative inline-flex shrink-0">
      <button type="button" aria-label={label} className="flex size-4 items-center justify-center rounded-full text-[#8f9195] outline-none hover:text-[#676a72] focus-visible:ring-2 focus-visible:ring-[#1450f5]">
        <svg aria-hidden="true" className="size-[14px]" fill="none" viewBox="0 0 14 14">
          <path d={ruleSvgPaths.p313397f0} fill="currentColor" />
          <path d={ruleSvgPaths.p3c610f80} fill="currentColor" />
          <path d={ruleSvgPaths.p375ffc00} fill="currentColor" />
        </svg>
      </button>
      <span role="tooltip" className="pointer-events-none absolute bottom-[calc(100%+7px)] left-1/2 z-30 hidden w-max max-w-[min(440px,calc(100vw-48px))] -translate-x-1/2 rounded-[6px] bg-white px-2 py-1 text-[14px] leading-[22px] text-[#141414] shadow-[0_4px_5px_rgba(0,0,0,0.1)] group-hover:block group-focus-within:block">
        {text}
        <span aria-hidden="true" className="absolute left-1/2 top-full -translate-x-1/2 border-x-[5px] border-t-[6px] border-x-transparent border-t-white" />
      </span>
    </span>
  );
}

function FieldLabel({ label, hint, helpLabel }: { label: string; hint: string; helpLabel: string }) {
  return <div className="flex items-center gap-0.5 pb-2 text-[14px] leading-[22px] text-[#141414]"><span>{label}</span><HelpTooltip text={hint} label={helpLabel} /><span className="text-[#f51414]">*</span></div>;
}

function NumericField({ label, hint, value, onChange, min, max, step, unit, showControls = false }: NumberFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const setValue = (next: number) => onChange(Math.max(min, Math.min(max, next)));
  return (
    <label className="block pb-6">
      <FieldLabel label={label} hint={hint} helpLabel={`${label}说明`} />
      <span className="flex h-8 w-full isolate">
        <span className="relative min-w-0 flex-1">
          <input type="number" min={min} max={max} step={step} value={value} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} onChange={(event) => setValue(Number(event.target.value) || min)} className={`z-[2] h-8 w-full rounded-l-[4px] border border-[#c8cad0] bg-white px-2 text-[14px] leading-[22px] text-[#141414] outline-none focus:border-[#1450f5] focus:shadow-[0_0_0_2px_#d0dcfd] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none ${showControls && isFocused ? "pr-10" : ""}`} />
          {showControls && isFocused && <span className="absolute bottom-px right-1 top-px z-[3] flex w-7 flex-col gap-0.5 overflow-hidden">
            <button type="button" aria-label={`${label} increase`} onMouseDown={(event) => event.preventDefault()} onClick={() => setValue(value + step)} className="flex h-[14px] items-center justify-center bg-[#f2f4f7] transition-colors hover:bg-[#e5e7eb] focus-visible:bg-[#e5e7eb] focus-visible:outline-none"><svg aria-hidden="true" className="h-[6px] w-[10px]" fill="none" viewBox="0 0 10 5.56346"><path clipRule="evenodd" d={stepperSvgPaths.p3d4ce700} fill="#141414" fillRule="evenodd" /></svg></button>
            <button type="button" aria-label={`${label} decrease`} onMouseDown={(event) => event.preventDefault()} onClick={() => setValue(value - step)} className="flex h-[14px] items-center justify-center bg-[#f2f4f7] transition-colors hover:bg-[#e5e7eb] focus-visible:bg-[#e5e7eb] focus-visible:outline-none"><svg aria-hidden="true" className="h-[6px] w-[10px]" fill="none" viewBox="0 0 10 5.56346"><path clipRule="evenodd" d={stepperSvgPaths.p11476100} fill="#141414" fillRule="evenodd" /></svg></button>
          </span>}
        </span>
        <span className="-ml-px flex min-w-[32px] items-center justify-center rounded-r-[3px] border border-[#c8cad0] bg-[#f2f4f7] px-2 text-[14px] leading-[22px] text-[#141414]">{unit}</span>
      </span>
    </label>
  );
}

export default function RuleConfigurationContent({ language }: { language: Language }) {
  const t = copy[language];
  const [activeTab, setActiveTab] = useState<Tab>("batch");
  const [batchRole, setBatchRole] = useState("system");
  const [unbindRole, setUnbindRole] = useState("l2");
  const [dispatch, setDispatch] = useState(200);
  const [completion, setCompletion] = useState(95);
  const [dailyLimit, setDailyLimit] = useState(10);
  const [weeklyLimit, setWeeklyLimit] = useState(50);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!saved) return;
    const timeoutId = window.setTimeout(() => setSaved(false), 2800);
    return () => window.clearTimeout(timeoutId);
  }, [saved]);

  const selectedRole = activeTab === "batch" ? batchRole : unbindRole;
  const setSelectedRole = activeTab === "batch" ? setBatchRole : setUnbindRole;
  const roles = activeTab === "batch" ? [{ value: "system", label: t.systemAdmin }, { value: "l2", label: t.l2 }] : [{ value: "l2", label: t.l2 }, { value: "system", label: t.systemAdmin }];
  const roleHint = activeTab === "batch" ? t.batchRoleHint : t.unbindRoleHint;

  return <section className="overflow-visible rounded-[8px] border border-[#dfe1e8] bg-white font-['PingFang_SC:Regular',sans-serif]" aria-label={t.title}>
    <header className="flex h-[68px] items-center px-5 pb-4 pt-6"><h1 className="font-['PingFang_SC:Semibold',sans-serif] text-[20px] font-semibold leading-7 text-[#141414]">{t.title}</h1></header>
    <div className="bg-white px-5 py-[2px]">
      <nav className="border-b border-[#dfe1e8]" aria-label={t.title}><div className="flex items-start">{(["batch", "unbind"] as const).map((tab) => {
        const active = activeTab === tab;
        return <button key={tab} type="button" onClick={() => setActiveTab(tab)} className={`relative p-2 transition-colors ${active ? "border-b-[3px] border-[#1450f5]" : "border-b-[3px] border-transparent hover:bg-[#fafbfc]"}`}><span className={`flex items-center rounded-[3px] bg-white px-2 py-[5px] text-[14px] leading-[22px] ${active ? "font-medium text-[#1450f5]" : "text-[#676a72]"}`}>{tab === "batch" ? t.batch : t.unbind}</span></button>;
      })}</div></nav>
      <div className="mx-auto w-full max-w-[440px] pt-5">
        <label className="block pb-6">
          <FieldLabel label={t.approvalRole} hint={roleHint} helpLabel={`${t.approvalRole}说明`} />
          <span className="relative block h-8"><select value={selectedRole} onChange={(event) => setSelectedRole(event.target.value)} className="h-8 w-full appearance-none rounded-[4px] border border-[#c8cad0] bg-white px-2 pr-9 text-[14px] leading-[22px] text-[#141414] outline-none focus:border-[#1450f5] focus:ring-2 focus:ring-[#d0dcfd]">{roles.map((role) => <option key={role.value} value={role.value}>{role.label}</option>)}</select><ChevronDown aria-hidden="true" className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-[#8f9195]" /></span>
        </label>
        {activeTab === "batch" ? <><NumericField label={t.dispatch} hint={t.dispatchHint} value={dispatch} onChange={setDispatch} min={100} max={1000} step={100} unit={t.deviceUnit} showControls /><NumericField label={t.completion} hint={t.completionHint} value={completion} onChange={setCompletion} min={0} max={100} step={1} unit={t.percent} /></> : <><NumericField label={t.dailyLimit} hint={t.dailyHint} value={dailyLimit} onChange={setDailyLimit} min={1} max={100} step={1} unit={t.deviceUnit} /><NumericField label={t.weeklyLimit} hint={t.weeklyHint} value={weeklyLimit} onChange={setWeeklyLimit} min={1} max={100} step={1} unit={t.deviceUnit} /></>}
        <div className="flex h-[82px] items-start justify-center pt-6"><button type="button" onClick={() => setSaved(true)} className="h-8 rounded-[4px] bg-[#1450f5] px-4 text-[14px] leading-[22px] text-white transition-colors hover:bg-[#0e43d0]">{t.save}</button></div>
      </div>
    </div>
    {saved && <div role="status" className="fixed left-1/2 top-[68px] z-[140] flex -translate-x-1/2 items-center gap-6 rounded-[6px] border-[0.5px] border-[#c8cad0] bg-white px-4 py-[13px] text-[14px] leading-[22px] text-[#141414] shadow-[0_8px_10px_rgba(0,0,0,0.1)]"><span className="flex items-center gap-2"><CheckCircle2 className="size-5 text-[#1ed273]" aria-hidden="true" />{t.saved}</span></div>}
  </section>;
}
