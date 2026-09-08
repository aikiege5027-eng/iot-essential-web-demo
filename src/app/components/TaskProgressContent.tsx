import { Check, ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button, Dropdown, Tooltip } from "tdesign-react";
import SelectEmptyReference from "../../imports/Select选择器";
import type { BatchDispatchRule, BatchValidationCriterion } from "../data/ruleConfiguration";
import { HelpCircleIcon } from "./icons/help-circle";
import { MoreVerticalIcon } from "./icons/more-vertical";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type Language = "en" | "cn";
type SubtaskStatusKey = "queued" | "running" | "executionFailed" | "validationFailed" | "validationSucceeded" | "paused";

type SubtaskRow = {
  id: string;
  deviceId: string;
  serialNumber: string;
  taskType: string;
  startedAt: string;
  endedAt: string;
  status: SubtaskStatusKey;
  failureReason?: BatchValidationCriterion;
};

const subtaskStatusDefinitions = [
  { key: "queued", zh: "队列中", en: "Queued", colorClass: "text-placeholder" },
  { key: "running", zh: "进行中", en: "In progress", colorClass: "text-brand" },
  { key: "executionFailed", zh: "执行失败", en: "Execution failed", colorClass: "text-error" },
  { key: "validationFailed", zh: "验证失败", en: "Validation failed", colorClass: "text-error" },
  { key: "validationSucceeded", zh: "验证成功", en: "Validation succeeded", colorClass: "text-success" },
  { key: "paused", zh: "暂停", en: "Paused", colorClass: "text-warning" },
] as const satisfies ReadonlyArray<{ key: SubtaskStatusKey; zh: string; en: string; colorClass: string }>;

const initialRows: SubtaskRow[] = [
  { id: "subtask-001", deviceId: "30264626", serialNumber: "KM52152006G02.100ALZ244799995", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "-", status: "running" },
  { id: "subtask-002", deviceId: "30264627", serialNumber: "KM52152006G02.100ALZ244800126", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "-", status: "queued" },
  { id: "subtask-003", deviceId: "30264628", serialNumber: "KM52152006G02.100ALZ244800371", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "-", status: "paused" },
  { id: "subtask-004", deviceId: "30264629", serialNumber: "KM52152006G02.100ALZ244800518", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "2026/08/25 10:35:02", status: "validationSucceeded" },
  { id: "subtask-005", deviceId: "30264630", serialNumber: "KM52152006G02.100ALZ244800764", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "2026/08/25 10:35:12", status: "validationFailed", failureReason: "state" },
  { id: "subtask-006", deviceId: "30264631", serialNumber: "KM52152006G02.100ALZ244801039", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "2026/08/25 10:34:45", status: "executionFailed" },
  { id: "subtask-007", deviceId: "30264632", serialNumber: "KM52152006G02.100ALZ244801285", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "-", status: "running" },
  { id: "subtask-008", deviceId: "30264633", serialNumber: "KM52152006G02.100ALZ244801442", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "2026/08/25 10:36:03", status: "validationSucceeded" },
  { id: "subtask-009", deviceId: "30264634", serialNumber: "KM52152006G02.100ALZ244801698", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "-", status: "queued" },
  { id: "subtask-010", deviceId: "30264635", serialNumber: "KM52152006G02.100ALZ244801924", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "2026/08/25 10:35:25", status: "validationSucceeded" },
  { id: "subtask-011", deviceId: "30264636", serialNumber: "KM52152006G02.100ALZ244802176", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "-", status: "paused" },
  { id: "subtask-012", deviceId: "30264637", serialNumber: "KM52152006G02.100ALZ244802403", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "2026/08/25 10:36:18", status: "validationFailed", failureReason: "motion" },
];

function MultiStatusSelect({ values, onChange, label, placeholder, options, language }: { values: SubtaskStatusKey[]; onChange: (values: SubtaskStatusKey[]) => void; label: string; placeholder: string; options: ReadonlyArray<{ key: SubtaskStatusKey; zh: string; en: string }>; language: Language }) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeWhenClickingAway = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", closeWhenClickingAway);
    return () => document.removeEventListener("mousedown", closeWhenClickingAway);
  }, []);

  const toggle = (key: SubtaskStatusKey) => onChange(values.includes(key) ? values.filter((value) => value !== key) : [...values, key]);
  const selected = options.filter((option) => values.includes(option.key));
  const allSelected = values.length === options.length;
  const toggleAll = () => onChange(allSelected ? [] : options.map((option) => option.key));

  return (
    <div ref={rootRef} className="relative z-20 flex w-full max-w-[400px] flex-1 flex-col pb-6">
      <span className="pb-2 font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px] text-[#141414]">{label}</span>
      <div className="relative h-8">
        <div className="pointer-events-none absolute inset-0 [&_p]:text-transparent [&_svg]:opacity-0"><SelectEmptyReference /></div>
        <button type="button" aria-haspopup="listbox" aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)} className={`absolute inset-0 z-10 flex h-8 w-full items-center gap-2 rounded-[4px] bg-transparent py-1 pl-1 pr-2 text-left font-normal outline-none ${isOpen ? "border border-[#1450f5] shadow-[0_0_0_2px_#d0dcfd]" : "border border-transparent"}`}>
          <span className="flex min-w-0 flex-1 items-center gap-1 overflow-hidden">
            {selected.length ? selected.map((status) => <span key={status.key} className="inline-flex h-6 shrink-0 items-center gap-1 rounded-[3px] bg-[#dfe1e8] px-2 text-[12px] font-normal leading-5 text-[#141414]"><span className="truncate">{language === "cn" ? status.zh : status.en}</span><span role="button" tabIndex={-1} onClick={(event) => { event.stopPropagation(); toggle(status.key); }} className="flex size-3.5 shrink-0 items-center justify-center text-[#8f9195] hover:text-[#141414]"><X className="size-3" strokeWidth={2} /></span></span>) : <span className="truncate px-1 text-[14px] leading-[22px] text-[#8f9195]">{placeholder}</span>}
          </span>
          <ChevronDown className={`size-4 shrink-0 transition-transform ${isOpen ? "rotate-180 text-[#1450f5]" : "text-[#8f9195]"}`} strokeWidth={1.8} />
        </button>
        {isOpen && <div role="listbox" aria-label={label} className="absolute left-0 top-[calc(100%+2px)] z-50 w-full rounded-[6px] border-[0.5px] border-[#c8cad0] bg-white p-[6px] shadow-[0_4px_5px_rgba(0,0,0,0.1)]">
          <button type="button" role="option" aria-selected={allSelected} onClick={toggleAll} className="flex h-[28px] w-full items-center gap-2 rounded-[4px] px-2 py-[3px] text-left font-normal hover:bg-[#f5f7fa] focus:bg-[#f5f7fa] focus:outline-none"><span className={`flex size-4 shrink-0 items-center justify-center rounded-[4px] border ${allSelected ? "border-[#1450f5] bg-[#1450f5] text-white" : "border-[#c8cad0] bg-white"}`}>{allSelected && <Check className="size-3" strokeWidth={3} />}</span><span className="truncate text-[14px] font-normal leading-[22px] text-[#141414]">{language === "cn" ? "全选" : "Select all"}</span></button>
          {options.map((status) => {
            const checked = values.includes(status.key);
            return <button key={status.key} type="button" role="option" aria-selected={checked} onClick={() => toggle(status.key)} className="flex h-[28px] w-full items-center gap-2 rounded-[4px] px-2 py-[3px] text-left font-normal hover:bg-[#f5f7fa] focus:bg-[#f5f7fa] focus:outline-none"><span className={`flex size-4 shrink-0 items-center justify-center rounded-[4px] border ${checked ? "border-[#1450f5] bg-[#1450f5] text-white" : "border-[#c8cad0] bg-white"}`}>{checked && <Check className="size-3" strokeWidth={3} />}</span><span className="truncate text-[14px] font-normal leading-[22px] text-[#141414]">{language === "cn" ? status.zh : status.en}</span></button>;
          })}
        </div>}
      </div>
    </div>
  );
}

function SubtaskStatus({ status, language }: { status: SubtaskStatusKey; language: Language }) {
  const config = subtaskStatusDefinitions.find((item) => item.key === status)!;
  return <span className={`inline-flex items-center gap-1 ${config.colorClass}`}><i aria-hidden="true" className="size-1.5 rounded-full bg-current" />{language === "cn" ? config.zh : config.en}</span>;
}

const failureReasonLabels: Record<BatchValidationCriterion, { cn: string; en: string }> = {
  state: { cn: "电梯在线状态异常", en: "Abnormal elevator online status" },
  motion: { cn: "电梯未产生运动数据", en: "No elevator motion data generated" },
};

function SubtaskStatusCell({ row, language }: { row: SubtaskRow; language: Language }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  if (row.status !== "validationFailed" || !row.failureReason) {
    return <SubtaskStatus status={row.status} language={language} />;
  }

  const reason = failureReasonLabels[row.failureReason][language];
  const statusLabel = language === "cn" ? "验证失败" : "Validation failed";
  return (
    <Tooltip
      content={reason}
      placement="top"
      showArrow
      theme="light"
      trigger="hover"
      delay={[100, 100]}
      visible={tooltipVisible}
      onVisibleChange={setTooltipVisible}
    >
      <span
        tabIndex={0}
        aria-label={`${statusLabel}：${reason}`}
        onFocus={() => setTooltipVisible(true)}
        onBlur={() => setTooltipVisible(false)}
        className="inline-flex rounded-xs outline-none focus-visible:ring-2 focus-visible:ring-brand-focus"
      >
        <SubtaskStatus status={row.status} language={language} />
      </span>
    </Tooltip>
  );
}

function ValidationFailureSummaryTooltip({ language, summary }: { language: Language; summary: Record<BatchValidationCriterion, number> }) {
  const [visible, setVisible] = useState(false);
  const total = summary.state + summary.motion;
  const details = (["state", "motion"] as const).map((reason) => ({
    reason,
    label: failureReasonLabels[reason][language],
    percentage: total === 0 ? 0 : (summary[reason] / total) * 100,
  }));
  const title = language === "cn" ? "验证失败原因" : "Validation failure reasons";
  const accessibleSummary = details.map((detail) => `${detail.label} ${detail.percentage.toFixed(1)}%`).join("; ");

  return (
    <Tooltip
      content={(
        <div className="w-[172px]">
          <p className="text-foot12 font-medium text-primary-text">{title}</p>
          <dl className="mt-1.5 flex flex-col gap-1.5">
            {details.map((detail) => (
              <div key={detail.reason} className="flex items-center justify-between gap-3">
                <dt className="text-foot12 text-secondary-text">{detail.label}</dt>
                <dd className="shrink-0 tabular-nums text-foot12 text-primary-text">{detail.percentage.toFixed(1)}%</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
      placement="top"
      showArrow
      theme="light"
      trigger="hover"
      delay={[100, 100]}
      visible={visible}
      onVisibleChange={setVisible}
    >
      <button
        type="button"
        aria-label={`${title}：${accessibleSummary}`}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        className="inline-flex size-5 shrink-0 items-center justify-center rounded-sm text-icon-inactive outline-none hover:bg-component hover:text-icon-primary focus-visible:ring-2 focus-visible:ring-brand-focus"
      >
        <HelpCircleIcon className="size-4" />
      </button>
    </Tooltip>
  );
}

type SubtaskActionId = "delete" | "restart" | "revalidate" | "resume";

type SubtaskAction = {
  id: SubtaskActionId;
  cn: string;
  en: string;
};

const subtaskActions: Record<SubtaskStatusKey, ReadonlyArray<SubtaskAction>> = {
  queued: [{ id: "delete", cn: "删除", en: "Delete" }],
  running: [],
  executionFailed: [{ id: "restart", cn: "重新开始", en: "Restart" }, { id: "delete", cn: "删除", en: "Delete" }],
  validationFailed: [{ id: "revalidate", cn: "重新验证", en: "Revalidate" }, { id: "delete", cn: "删除", en: "Delete" }],
  validationSucceeded: [],
  paused: [{ id: "resume", cn: "继续", en: "Resume" }, { id: "delete", cn: "删除", en: "Delete" }],
};

type SubtaskActionHandler = (rowId: string, actionId: SubtaskActionId) => void;

function SubtaskActions({ rowId, status, language, onAction }: { rowId: string; status: SubtaskStatusKey; language: Language; onAction: SubtaskActionHandler }) {
  const actions = subtaskActions[status];
  if (actions.length === 0) return null;

  const moreLabel = language === "cn" ? "更多操作" : "More actions";
  return (
    <div className="flex w-full justify-start">
      <Dropdown
        trigger="click"
        placement="bottom-right"
        minColumnWidth={112}
        options={actions.map((action) => ({
          content: language === "cn" ? action.cn : action.en,
          value: action.id,
        }))}
        onClick={(option) => {
          const action = actions.find((item) => item.id === option.value);
          if (action) onAction(rowId, action.id);
        }}
      >
        <button
          type="button"
          aria-label={moreLabel}
          aria-haspopup="menu"
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-disabled hover:bg-component focus-visible:bg-component focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
        >
          <MoreVerticalIcon />
        </button>
      </Dropdown>
    </div>
  );
}

type TaskProgressContentProps = {
  language: Language;
  batchRule: BatchDispatchRule;
};

export default function TaskProgressContent({ language, batchRule }: TaskProgressContentProps) {
  const [rows, setRows] = useState<SubtaskRow[]>(() => initialRows);
  const [page, setPage] = useState(1);
  const [deviceIdFilter, setDeviceIdFilter] = useState("");
  const [statusFilters, setStatusFilters] = useState<SubtaskStatusKey[]>([]);
  const isChinese = language === "cn";
  const criterionLabels: Record<BatchValidationCriterion, string> = isChinese
    ? { state: "电梯状态前后一致或电梯在线", motion: "电梯产生运动数据" }
    : { state: "Elevator status remains consistent or is online", motion: "Elevator produces motion data" };
  const validationCriteria = batchRule.validationCriteria.length > 0
    ? batchRule.validationCriteria.map((criterion) => criterionLabels[criterion]).join(isChinese ? "；" : "; ")
    : isChinese ? "未配置" : "Not configured";
  const dispatchRuleItems = isChinese
    ? [
        { label: "单次调度数量", value: `${batchRule.dispatch} 台` },
        { label: "单次调度验证完成标准", value: validationCriteria },
        { label: "单次调度验证时间", value: `${batchRule.validationTime} 分钟` },
        { label: "单次调度完成率指标", value: `${batchRule.completion}%` },
      ]
    : [
        { label: "Devices per dispatch", value: `${batchRule.dispatch} devices` },
        { label: "Dispatch validation completion criteria", value: validationCriteria },
        { label: "Dispatch validation time", value: `${batchRule.validationTime} minutes` },
        { label: "Dispatch completion-rate threshold", value: `${batchRule.completion}%` },
      ];

  const validationFailureSummary = useMemo<Record<BatchValidationCriterion, number>>(() => rows.reduce((summary, row) => {
    if (row.status === "validationFailed" && row.failureReason) summary[row.failureReason] += 1;
    return summary;
  }, { state: 0, motion: 0 }), [rows]);
  const subtaskStatuses = useMemo(() => subtaskStatusDefinitions.map((status) => ({
    ...status,
    count: rows.filter((row) => row.status === status.key).length,
  })), [rows]);
  const subtaskTotal = rows.length;

  const filteredRows = useMemo(() => rows.filter((row) => {
    const matchesDevice = row.deviceId.toLowerCase().includes(deviceIdFilter.trim().toLowerCase());
    const matchesStatus = statusFilters.length === 0 || statusFilters.includes(row.status);
    return matchesDevice && matchesStatus;
  }), [deviceIdFilter, rows, statusFilters]);

  const handleSubtaskAction: SubtaskActionHandler = (rowId, actionId) => {
    if (actionId === "delete") {
      setRows((current) => current.filter((row) => row.id !== rowId));
      return;
    }

    setRows((current) => current.map((row) => {
      if (row.id !== rowId) return row;
      if (actionId === "revalidate") {
        const now = new Date();
        const endedAt = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}/${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
        return { ...row, status: "validationSucceeded", failureReason: undefined, endedAt };
      }
      return { ...row, status: "running", failureReason: undefined, endedAt: "-" };
    }));
  };

  const resetFilters = () => {
    setDeviceIdFilter("");
    setStatusFilters([]);
    setPage(1);
  };

  return (
    <section className="mx-[16px] mt-6 md:mx-[24px]" aria-label={isChinese ? "任务进度视图" : "Task progress view"}>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h1 className="text-h5 font-semibold text-primary-text">{isChinese ? "任务进度视图" : "Task progress view"}</h1>
        <Popover>
          <PopoverTrigger asChild>
            <Button size="medium" theme="default" variant="outline">
              {isChinese ? "查看调度规则" : "View dispatch rules"}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            sideOffset={8}
            aria-label={isChinese ? "批量任务调度规则" : "Batch task dispatch rules"}
            className="w-[480px] max-w-[calc(100vw-32px)] border-stroke bg-container p-0 shadow-popover"
          >
            <header className="border-b border-stroke px-4 py-3">
              <h2 className="text-h7 font-semibold text-primary-text">
                {isChinese ? "批量任务调度规则" : "Batch task dispatch rules"}
              </h2>
              <p className="mt-1 text-foot12 text-secondary-text">
                {isChinese
                  ? "以下为当前规则配置，适用于新创建任务，不代表所选历史任务执行时的调度依据。"
                  : "This is the current rule configuration for newly created tasks; it is not the dispatch basis used by the selected historical task."}
              </p>
            </header>
            <dl className="flex flex-col gap-2 p-4">
              {dispatchRuleItems.map((item) => (
                <div key={item.label} className="flex min-h-[42px] items-start justify-between gap-4 rounded-md bg-secondarycontainer px-3 py-2">
                  <dt className="w-[176px] shrink-0 text-body font-medium text-primary-text">{item.label}</dt>
                  <dd className="min-w-0 flex-1 text-right text-body text-secondary-text">{item.value}</dd>
                </div>
              ))}
            </dl>
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-col gap-3">
        <section className="overflow-hidden rounded-[8px] border border-[#dfe1e8] bg-white">
          <header className="flex h-10 items-center border-b border-[#dfe1e8] bg-[#fafbfc] px-3"><span className="mr-2 h-[14px] w-1 rounded-[1px] bg-[#4373f7]" /><span className="text-[14px] font-medium leading-[22px] text-[#141414]">{isChinese ? "子任务状态" : "Subtask status"}</span></header>
          <div className="grid auto-rows-fr grid-cols-1 gap-2 p-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {subtaskStatuses.map((status) => {
              const percentage = subtaskTotal === 0 ? 0 : (status.count / subtaskTotal) * 100;
              return (
                <article key={status.key} className="group flex h-full min-w-0 flex-col overflow-hidden rounded-md border border-transparent bg-secondarycontainer px-3 py-2.5 transition-colors hover:border-stroke hover:bg-container-hover">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <div className={`flex min-w-0 items-center gap-1.5 ${status.colorClass}`}>
                      <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-current" />
                      <span className="truncate text-foot12 text-secondary-text">{isChinese ? status.zh : status.en}</span>
                    </div>
                    {status.key === "validationFailed" && <ValidationFailureSummaryTooltip language={language} summary={validationFailureSummary} />}
                  </div>
                  <div className="flex items-end justify-between gap-2">
                    <strong className="text-h4 font-semibold text-primary-text">{status.count}</strong>
                    <span className="pb-0.5 text-foot12 text-secondary-text">{percentage.toFixed(1)}%</span>
                  </div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-container">
                    <div className={`h-full rounded-full bg-current ${status.colorClass}`} style={{ width: `${percentage}%` }} />
                  </div>

                </article>
              );
            })}
          </div>
        </section>

        <section className="overflow-hidden rounded-[8px] border border-[#dfe1e8] bg-white">
          <header className="flex h-10 items-center border-b border-[#dfe1e8] bg-[#fafbfc] px-3"><span className="mr-2 h-[14px] w-1 rounded-[1px] bg-[#4373f7]" /><span className="text-[14px] font-medium leading-[22px] text-[#141414]">{isChinese ? "子任务列表" : "Subtask list"}</span></header>
          <div className="p-3">
            <div className="flex flex-wrap items-start gap-x-5 gap-y-2">
              <label className="flex w-full max-w-[400px] flex-1 flex-col pb-6"><span className="pb-2 font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px] text-[#141414]">{isChinese ? "设备编号" : "Device ID"}</span><input value={deviceIdFilter} onChange={(event) => { setDeviceIdFilter(event.target.value); setPage(1); }} placeholder={isChinese ? "请输入设备编号" : "Enter device ID"} className="h-8 w-full rounded-[4px] border border-[#c8cad0] px-2 text-[14px] leading-[22px] text-[#141414] outline-none placeholder:text-[#8f9195] focus:border-[#1450f5]" /></label>
              <MultiStatusSelect values={statusFilters} onChange={(values) => { setStatusFilters(values); setPage(1); }} label={isChinese ? "子任务状态" : "Subtask status"} placeholder={isChinese ? "请选择内容" : "Select status"} options={subtaskStatuses} language={language} />
              <div className="ml-auto flex gap-2 pt-[30px]"><button type="button" onClick={resetFilters} className="h-8 rounded-[4px] bg-[#f2f4f7] px-4 text-[14px] leading-[22px] text-[#141414] hover:bg-[#e8ebef]">{isChinese ? "重置" : "Reset"}</button><button type="button" onClick={() => setPage(1)} className="h-8 rounded-[4px] bg-[#1450f5] px-4 text-[14px] leading-[22px] text-white hover:bg-[#0e43d0]">{isChinese ? "查询" : "Search"}</button></div>
            </div>
            <div className="overflow-x-auto rounded-[6px] border border-[#dfe1e8]"><table className="w-full min-w-[940px] border-collapse text-left"><thead className="bg-[#f5f7fa] text-[#8f9195]"><tr className="h-[38px]"><th className="px-4 text-[14px] font-normal leading-[22px]">{isChinese ? "开始时间" : "Start time"}</th><th className="px-4 text-[14px] font-normal leading-[22px]">{isChinese ? "结束时间" : "End time"}</th><th className="px-4 text-[14px] font-normal leading-[22px]">{isChinese ? "设备类型" : "Device type"}</th><th className="px-4 text-[14px] font-normal leading-[22px]">{isChinese ? "序列号" : "Serial number"}</th><th className="px-4 text-[14px] font-normal leading-[22px]">{isChinese ? "设备编号" : "Device ID"}</th><th className="px-4 text-[14px] font-normal leading-[22px]">{isChinese ? "状态" : "Status"}</th><th className="sticky right-0 z-10 w-16 min-w-16 bg-[#f5f7fa] px-4 text-left text-[14px] font-normal leading-[22px]">{isChinese ? "操作" : "Action"}</th></tr></thead><tbody>{filteredRows.length ? filteredRows.map((row) => <tr key={row.id} className="h-[46px] border-t border-[#dfe1e8]"><td className="px-4 text-[14px] leading-[22px] text-[#141414]">{row.startedAt}</td><td className="px-4 text-[14px] leading-[22px] text-[#141414]">{row.endedAt}</td><td className="px-4 text-[14px] leading-[22px] text-[#141414]">KONE Connection 320</td><td className="px-4 text-[14px] leading-[22px] text-[#141414]">{row.serialNumber}</td><td className="px-4 text-[14px] leading-[22px] text-[#141414]">{row.deviceId}</td><td className="px-4 text-[14px] leading-[22px]"><SubtaskStatusCell row={row} language={language} /></td><td className="sticky right-0 w-16 min-w-16 bg-white px-4 text-left text-[14px] leading-[22px]"><SubtaskActions rowId={row.id} status={row.status} language={language} onAction={handleSubtaskAction} /></td></tr>) : <tr><td colSpan={7} className="h-28 text-center text-[14px] text-[#8f9195]">{isChinese ? "暂无匹配的子任务" : "No matching subtasks"}</td></tr>}</tbody></table></div>
          </div>
          <footer className="flex h-16 items-center justify-between px-6 text-[14px] leading-[22px] text-[#676a72]"><span>{isChinese ? `共 ${filteredRows.length} 项数据` : `${filteredRows.length} records`}</span><div className="flex items-center gap-2"><button type="button" aria-label="Previous page" onClick={() => setPage(Math.max(1, page - 1))} className="flex size-8 items-center justify-center rounded-[4px] text-[#abadb2] hover:bg-[#f5f7fa]"><ChevronLeft className="size-4" /></button><button type="button" className="flex size-8 items-center justify-center rounded-[4px] bg-[#1450f5] text-[14px] text-white">{page}</button><button type="button" aria-label="Next page" onClick={() => setPage(page + 1)} className="flex size-8 items-center justify-center rounded-[4px] text-[#141414] hover:bg-[#f5f7fa]"><ChevronRight className="size-4" /></button></div></footer>
        </section>
      </div>
      <footer className="py-4 text-center text-[12px] leading-5 text-[#959595]">Copyright @ 2019-2022 KONE. All Rights Reserved</footer>
    </section>
  );
}
