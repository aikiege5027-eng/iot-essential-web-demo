import { Check, ChevronDown, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Tabs } from "tdesign-react";
import type {
  BatchDispatchRule,
  BatchValidationCriterion,
  NkeFloorLearningRule,
  UnbindApprovalRule,
} from "../data/ruleConfiguration";
import stepperSvgPaths from "../../imports/AddonInput标签输入框/svg-wileltcvna";
import { HelpCircleIcon } from "./icons/help-circle";

/**
 * TabPanel 只能从 Tabs 的静态属性上取，不能 `import { TabPanel } from "tdesign-react"`。
 * 原因：package.json 的 `module` 指向 `es/index.js`，而那份产物只 re-export 了 `Tabs`
 * （`esm/index.js` 里倒是有 TabPanel，但 Vite 走 `module` 字段，用不到它）。
 * 写成命名导入会在 build 阶段报 "TabPanel is not exported"，dev 下却可能不报。
 */
const { TabPanel } = Tabs;

type Language = "en" | "cn";
type Tab = "batch" | "unbind" | "nke-floor-learning";
type ApprovalTab = Exclude<Tab, "nke-floor-learning">;

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
    title: "规则配置", batch: "设备批量操作设置", unbind: "单设备解绑操作审批设置", nkeFloorLearning: "NKE楼层学习算法设置", approvalGroupRole: "审批组角色", approvalRole: "审批角色",
    batchRoleHint: "批量设备操作将提交至所选角色审批。", unbindRoleHint: "设备解绑超过设置上限时，将提交至所选角色审批。",
    dispatch: "单次调度数量", dispatchHint: "批量任务中单次执行的子任务数量，范围 100–1000，步长 100。",
    validationStandard: "单次调度验证完成标准", validationStandardHint: "确认该批次调度的子任务是否完成",
    elevatorStateCriterion: "电梯状态前后一致或电梯在线", motionDataCriterion: "电梯产生运动数据",
    validationTime: "单次调度验证时间", validationTimeHint: "该批次调度的子任务是否完成的时间周期，范围10-2880，步长10分钟。",
    completion: "单次调度完成率指标", completionHint: "单次调度验证结果视为通过的完成率标准，范围 0–100%。",
    dailyLimit: "单日解绑操作触发审批上限", dailyHint: "平台内用户在 1 个自然日内解绑设备数量超过该值后，当日后续解绑操作均需要审批。",
    weeklyLimit: "7日内解绑操作触发审批上限", weeklyHint: "平台内用户在 7 个自然日内解绑设备数量超过该值后，该周期内后续解绑操作均需要审批。",
    algorithmInterval: "触发算法时间间隔条件", algorithmIntervalHint: "电梯安装注册完成后的第 5 天 0 点执行楼层学习算法获取结果。范围 1–100，步长 1 天。",
    algorithmMotionCount: "触发算法运动次数条件", algorithmMotionCountHint: "电梯的运动次数达到 2000 次后执行楼层学习算法获取结果。范围 10–10000，步长 10 次。",
    save: "保存配置", saved: "规则配置已保存", systemAdmin: "系统管理员", l2: "L2", deviceUnit: "台", minuteUnit: "分钟", dayUnit: "天", timesUnit: "次", percent: "%", help: "查看说明",
  },
  en: {
    title: "Rule configuration", batch: "Batch device operation settings", unbind: "Single-device unbind approval settings", nkeFloorLearning: "NKE floor learning algorithm settings", approvalGroupRole: "Approval group role", approvalRole: "Approval role",
    batchRoleHint: "Batch device operations are submitted to the selected role for approval.", unbindRoleHint: "Unbind actions exceeding the threshold are submitted to the selected role for approval.",
    dispatch: "Devices per dispatch", dispatchHint: "Number of devices in each batch sub-task. Range 100–1000, step 100.",
    validationStandard: "Dispatch validation completion criteria", validationStandardHint: "Determine whether the subtasks in this dispatch are complete.",
    elevatorStateCriterion: "Elevator status remains consistent or the elevator is online", motionDataCriterion: "Elevator produces motion data",
    validationTime: "Dispatch validation time", validationTimeHint: "Time window for determining whether the subtasks in this dispatch are complete. Range 10–2880 minutes, step 10 minutes.",
    completion: "Dispatch completion-rate threshold", completionHint: "Completion-rate threshold for a validated dispatch. Range 0–100%.",
    dailyLimit: "Daily unbind approval threshold", dailyHint: "When a user exceeds this number of device unbinds in one calendar day, later unbind actions that day require approval.",
    weeklyLimit: "7-day unbind approval threshold", weeklyHint: "When a user exceeds this number of device unbinds in seven calendar days, subsequent unbind actions in that period require approval.",
    algorithmInterval: "Algorithm trigger time interval", algorithmIntervalHint: "Run the floor learning algorithm at 00:00 on the fifth day after elevator installation registration. Range 1–100, step 1 day.",
    algorithmMotionCount: "Algorithm trigger motion count", algorithmMotionCountHint: "Run the floor learning algorithm after the elevator reaches 2,000 movements. Range 10–10,000, step 10 movements.",
    save: "Save configuration", saved: "Rule configuration saved", systemAdmin: "System administrator", l2: "L2", deviceUnit: "devices", minuteUnit: "minutes", dayUnit: "days", timesUnit: "times", percent: "%", help: "View explanation",
  },
};

function HelpTooltip({ text, label }: { text: string; label: string }) {
  return (
    <span className="group relative inline-flex shrink-0">
      <button type="button" aria-label={label} className="flex size-4 items-center justify-center rounded-full text-icon-inactive outline-none hover:text-icon-primary focus-visible:ring-2 focus-visible:ring-brand-focus">
        <HelpCircleIcon className="size-4" />
      </button>
      <span role="tooltip" className="pointer-events-none absolute bottom-[calc(100%+7px)] left-1/2 z-30 hidden w-max -translate-x-1/2 whitespace-nowrap rounded-[6px] bg-white px-2 py-1 font-['PingFang_SC:Regular',sans-serif] text-[14px] font-normal leading-[22px] text-[#141414] shadow-[0_4px_5px_rgba(0,0,0,0.1)] group-hover:block group-focus-within:block">
        {text}
        <span aria-hidden="true" className="absolute left-1/2 top-full -translate-x-1/2 border-x-[5px] border-t-[6px] border-x-transparent border-t-white" />
      </span>
    </span>
  );
}

function FieldLabel({ label, hint, helpLabel }: { label: string; hint: string; helpLabel: string }) {
  return <div className="flex items-center gap-0.5 pb-2 font-['PingFang_SC:Regular',sans-serif] text-[14px] font-normal leading-[22px] text-[#141414]"><span>{label}</span><HelpTooltip text={hint} label={helpLabel} /><span className="text-[#f51414]">*</span></div>;
}

function NumericField({ label, hint, value, onChange, min, max, step, unit, showControls = false }: NumberFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const setValue = (next: number) => onChange(Math.max(min, Math.min(max, next)));
  return (
    <label className="block pb-6 font-normal">
      <FieldLabel label={label} hint={hint} helpLabel={`${label}说明`} />
      <span className="flex h-8 w-full isolate">
        <span className="relative min-w-0 flex-1">
          <input type="number" required min={min} max={max} step={step} value={value} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} onChange={(event) => setValue(Number(event.target.value) || min)} className={`z-[2] h-8 w-full rounded-l-[4px] border border-[#c8cad0] bg-white px-2 font-['PingFang_SC:Regular',sans-serif] text-[14px] font-normal leading-[22px] text-[#141414] outline-none focus:border-[#1450f5] focus:shadow-[0_0_0_2px_#d0dcfd] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none ${showControls && isFocused ? "pr-10" : ""}`} />
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

type ValidationCriteriaFieldProps = {
  label: string;
  hint: string;
  helpLabel: string;
  options: ReadonlyArray<{ value: BatchValidationCriterion; label: string }>;
  values: BatchValidationCriterion[];
  onChange: (values: BatchValidationCriterion[]) => void;
};

function ValidationCriteriaField({ label, hint, helpLabel, options, values, onChange }: ValidationCriteriaFieldProps) {
  const toggle = (value: BatchValidationCriterion, checked: boolean) => onChange(checked ? [...values, value] : values.filter((item) => item !== value));
  return (
    <fieldset className="pb-6">
      <legend className="sr-only">{label}</legend>
      <FieldLabel label={label} hint={hint} helpLabel={helpLabel} />
      <div className="flex flex-wrap items-start gap-x-4 gap-y-2">
        {options.map((option) => {
          const checked = values.includes(option.value);
          return <label key={option.value} className="flex cursor-pointer items-start gap-2 font-['PingFang_SC:Regular',sans-serif] text-[14px] font-normal leading-[22px] text-[#141414]"><input type="checkbox" checked={checked} onChange={(event) => toggle(option.value, event.target.checked)} className="peer sr-only" /><span aria-hidden="true" className={`mt-[3px] flex size-4 shrink-0 items-center justify-center rounded-[4px] border transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[#d0dcfd] ${checked ? "border-[#1450f5] bg-[#1450f5] text-white" : "border-[#c8cad0] bg-white"}`}>{checked && <Check className="size-3" strokeWidth={3} />}</span><span>{option.label}</span></label>;
        })}
      </div>
    </fieldset>
  );
}

type RuleConfigurationContentProps = {
  language: Language;
  batchRule: BatchDispatchRule;
  unbindRule: UnbindApprovalRule;
  nkeRule: NkeFloorLearningRule;
  onSaveBatchRule: (rule: BatchDispatchRule) => void;
  onSaveUnbindRule: (rule: UnbindApprovalRule) => void;
  onSaveNkeRule: (rule: NkeFloorLearningRule) => void;
};

export default function RuleConfigurationContent({
  language,
  batchRule,
  unbindRule,
  nkeRule,
  onSaveBatchRule,
  onSaveUnbindRule,
  onSaveNkeRule,
}: RuleConfigurationContentProps) {
  const t = copy[language];
  const [activeTab, setActiveTab] = useState<Tab>("batch");
  const [batchRole, setBatchRole] = useState("system");
  const [unbindRole, setUnbindRole] = useState<UnbindApprovalRule["approvalRole"]>(unbindRule.approvalRole);
  const [dispatch, setDispatch] = useState(batchRule.dispatch);
  const [validationCriteria, setValidationCriteria] = useState<BatchValidationCriterion[]>(batchRule.validationCriteria);
  const [validationTime, setValidationTime] = useState(batchRule.validationTime);
  const [completion, setCompletion] = useState(batchRule.completion);
  const [dailyLimit, setDailyLimit] = useState(unbindRule.dailyLimit);
  const [weeklyLimit, setWeeklyLimit] = useState(unbindRule.weeklyLimit);
  const [algorithmInterval, setAlgorithmInterval] = useState(nkeRule.interval);
  const [algorithmMotionCount, setAlgorithmMotionCount] = useState(nkeRule.motionCount);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setDispatch(batchRule.dispatch);
    setValidationCriteria(batchRule.validationCriteria);
    setValidationTime(batchRule.validationTime);
    setCompletion(batchRule.completion);
  }, [batchRule]);

  useEffect(() => {
    setUnbindRole(unbindRule.approvalRole);
    setDailyLimit(unbindRule.dailyLimit);
    setWeeklyLimit(unbindRule.weeklyLimit);
  }, [unbindRule]);

  useEffect(() => {
    setAlgorithmInterval(nkeRule.interval);
    setAlgorithmMotionCount(nkeRule.motionCount);
  }, [nkeRule]);

  useEffect(() => {
    if (!saved) return;
    const timeoutId = window.setTimeout(() => setSaved(false), 2800);
    return () => window.clearTimeout(timeoutId);
  }, [saved]);

  /**
   * 角色选择器的 label / hint / 选项顺序都随审批类 tab 变化。
   *
   * 显式接收 tab 而不是读 activeTab：TabPanel 的 destroyOnHide 默认为 true，只有激活的
   * 面板会挂载，读 activeTab 恰好也对。但一旦有人传了 destroyOnHide={false}，未激活的
   * 面板就会渲染出另一个 tab 的文案 —— 参数化可以从根上避免这个隐式依赖。
   */
  const roleConfig = (tab: ApprovalTab) => tab === "batch"
    ? { value: batchRole, onChange: setBatchRole, label: t.approvalGroupRole, hint: t.batchRoleHint, options: [{ value: "system", label: t.systemAdmin }, { value: "l2", label: t.l2 }] }
    : { value: unbindRole, onChange: (value: string) => setUnbindRole(value as UnbindApprovalRule["approvalRole"]), label: t.approvalRole, hint: t.unbindRoleHint, options: [{ value: "l2", label: t.l2 }, { value: "system", label: t.systemAdmin }] };

  /** 公共面板骨架：审批页可选的角色选择器 + 各自字段 + 保存按钮。 */
  const panelBody = (
    fields: ReactNode,
    options: { approvalTab?: ApprovalTab; onSave: () => void },
  ) => {
    const role = options.approvalTab ? roleConfig(options.approvalTab) : null;
    return <div className="mx-auto w-full max-w-[440px] pb-[26px] pt-6">
      {role && <label className="block pb-6 font-normal">
        <FieldLabel label={role.label} hint={role.hint} helpLabel={`${role.label}说明`} />
        <span className="relative block h-8"><select value={role.value} onChange={(event) => role.onChange(event.target.value)} className="h-8 w-full appearance-none rounded-[4px] border border-[#c8cad0] bg-white px-2 pr-9 font-['PingFang_SC:Regular',sans-serif] text-[14px] font-normal leading-[22px] text-[#141414] outline-none focus:border-[#1450f5] focus:ring-2 focus:ring-[#d0dcfd]"><option value="" disabled>{role.label}</option>{role.options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select><ChevronDown aria-hidden="true" className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-[#8f9195]" /></span>
      </label>}
      {fields}
      <div className="flex h-14 items-start justify-center pt-6"><button type="button" onClick={() => { options.onSave(); setSaved(true); }} className="h-8 rounded-[4px] bg-[#1450f5] px-4 font-['PingFang_SC:Regular',sans-serif] text-[14px] font-normal leading-[22px] text-white transition-colors hover:bg-[#0e43d0]">{t.save}</button></div>
    </div>;
  };

  return <section className="overflow-visible rounded-[8px] border border-[#dfe1e8] bg-white font-['PingFang_SC:Regular',sans-serif] font-normal" aria-label={t.title}>
    <header className="flex h-[68px] items-center px-5 pb-4 pt-6"><h1 className="font-['PingFang_SC:Semibold',sans-serif] text-[20px] font-semibold leading-7 text-[#141414]">{t.title}</h1></header>
    <div className="bg-container px-5 py-[2px]">
      {/*
        theme / size / placement 这三项就是设计稿的 normal / medium / top 三档，都是
        TDesign 默认值，显式写出来是为了让「这里锁的是哪一档」在代码里可读。

        项高 48、内层块 32、内边距 8、未选中 #676a72、选中 #1450f5、下划线 3px、
        底部 1px #dfe1e8 分割线 —— 全部由组件自身 + tdesign-bridge.css 的 token 提供，
        调用处不覆盖任何颜色或尺寸。

        className 只做一件事：.t-tabs 与 .t-tabs__content 默认 overflow: hidden，会裁掉
        HelpTooltip 的气泡（气泡向上溢出面板约 5px，且 whitespace-nowrap 的长 hint 会
        横向溢出数百像素）。见 src/styles/tdesign-patches.css。
      */}
      <Tabs<Tab> value={activeTab} onChange={setActiveTab} theme="normal" size="medium" placement="top" className="tdesign-tabs-overflow-visible">
        <TabPanel value="batch" label={t.batch}>
          {panelBody(<>
            <NumericField label={t.dispatch} hint={t.dispatchHint} value={dispatch} onChange={setDispatch} min={100} max={1000} step={100} unit={t.deviceUnit} showControls />
            <ValidationCriteriaField label={t.validationStandard} hint={t.validationStandardHint} helpLabel={`${t.validationStandard} ${t.help}`} values={validationCriteria} onChange={setValidationCriteria} options={[{ value: "state", label: t.elevatorStateCriterion }, { value: "motion", label: t.motionDataCriterion }]} />
            <NumericField label={t.validationTime} hint={t.validationTimeHint} value={validationTime} onChange={setValidationTime} min={10} max={2880} step={10} unit={t.minuteUnit} showControls />
            <NumericField label={t.completion} hint={t.completionHint} value={completion} onChange={setCompletion} min={0} max={100} step={1} unit={t.percent} />
          </>, {
            approvalTab: "batch",
            onSave: () => onSaveBatchRule({ dispatch, validationCriteria, validationTime, completion }),
          })}
        </TabPanel>
        <TabPanel value="unbind" label={t.unbind}>
          {panelBody(<>
            <NumericField label={t.dailyLimit} hint={t.dailyHint} value={dailyLimit} onChange={setDailyLimit} min={1} max={100} step={1} unit={t.deviceUnit} showControls />
            <NumericField label={t.weeklyLimit} hint={t.weeklyHint} value={weeklyLimit} onChange={setWeeklyLimit} min={1} max={100} step={1} unit={t.deviceUnit} showControls />
          </>, {
            approvalTab: "unbind",
            onSave: () => onSaveUnbindRule({ approvalRole: unbindRole, dailyLimit, weeklyLimit }),
          })}
        </TabPanel>
        <TabPanel value="nke-floor-learning" label={t.nkeFloorLearning}>
          {panelBody(<>
            <NumericField label={t.algorithmInterval} hint={t.algorithmIntervalHint} value={algorithmInterval} onChange={setAlgorithmInterval} min={1} max={100} step={1} unit={t.dayUnit} showControls />
            <NumericField label={t.algorithmMotionCount} hint={t.algorithmMotionCountHint} value={algorithmMotionCount} onChange={setAlgorithmMotionCount} min={10} max={10000} step={10} unit={t.timesUnit} showControls />
          </>, {
            onSave: () => onSaveNkeRule({ interval: algorithmInterval, motionCount: algorithmMotionCount }),
          })}
        </TabPanel>
      </Tabs>
    </div>
    {saved && <div role="status" className="fixed left-1/2 top-[68px] z-[140] flex -translate-x-1/2 items-center gap-6 rounded-[6px] border-[0.5px] border-[#c8cad0] bg-white px-4 py-[13px] text-[14px] leading-[22px] text-[#141414] shadow-[0_8px_10px_rgba(0,0,0,0.1)]"><span className="flex items-center gap-2"><CheckCircle2 className="size-5 text-[#1ed273]" aria-hidden="true" />{t.saved}</span></div>}
  </section>;
}
