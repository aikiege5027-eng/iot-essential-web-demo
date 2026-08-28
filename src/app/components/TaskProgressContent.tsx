import { Check, ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import SelectEmptyReference from "../../imports/Select选择器";

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
};

const subtaskStatuses = [
  { key: "queued", zh: "队列中", en: "Queued", count: 12, color: "#a1a4aa" },
  { key: "running", zh: "进行中", en: "In progress", count: 8, color: "#1450f5" },
  { key: "executionFailed", zh: "执行失败", en: "Execution failed", count: 3, color: "#f51414" },
  { key: "validationFailed", zh: "验证失败", en: "Validation failed", count: 4, color: "#f51414" },
  { key: "validationSucceeded", zh: "验证成功", en: "Validation succeeded", count: 68, color: "#1ed273" },
  { key: "paused", zh: "暂停", en: "Paused", count: 6, color: "#f98600" },
] as const;

const rows: SubtaskRow[] = [
  { id: "subtask-001", deviceId: "30264626", serialNumber: "KM52152006G02.100ALZ244799995", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "-", status: "running" },
  { id: "subtask-002", deviceId: "30264627", serialNumber: "KM52152006G02.100ALZ244800126", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "-", status: "queued" },
  { id: "subtask-003", deviceId: "30264628", serialNumber: "KM52152006G02.100ALZ244800371", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "-", status: "paused" },
  { id: "subtask-004", deviceId: "30264629", serialNumber: "KM52152006G02.100ALZ244800518", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "2026/08/25 10:35:02", status: "validationSucceeded" },
  { id: "subtask-005", deviceId: "30264630", serialNumber: "KM52152006G02.100ALZ244800764", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "2026/08/25 10:35:12", status: "validationFailed" },
  { id: "subtask-006", deviceId: "30264631", serialNumber: "KM52152006G02.100ALZ244801039", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "2026/08/25 10:34:45", status: "executionFailed" },
  { id: "subtask-007", deviceId: "30264632", serialNumber: "KM52152006G02.100ALZ244801285", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "-", status: "running" },
  { id: "subtask-008", deviceId: "30264633", serialNumber: "KM52152006G02.100ALZ244801442", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "2026/08/25 10:36:03", status: "validationSucceeded" },
  { id: "subtask-009", deviceId: "30264634", serialNumber: "KM52152006G02.100ALZ244801698", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "-", status: "queued" },
  { id: "subtask-010", deviceId: "30264635", serialNumber: "KM52152006G02.100ALZ244801924", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "2026/08/25 10:35:25", status: "validationSucceeded" },
  { id: "subtask-011", deviceId: "30264636", serialNumber: "KM52152006G02.100ALZ244802176", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "-", status: "paused" },
  { id: "subtask-012", deviceId: "30264637", serialNumber: "KM52152006G02.100ALZ244802403", taskType: "系统升级", startedAt: "2026/08/25 10:32:00", endedAt: "2026/08/25 10:36:18", status: "validationSucceeded" },
];

const subtaskTotal = subtaskStatuses.reduce((total, status) => total + status.count, 0);

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
  const config = subtaskStatuses.find((item) => item.key === status)!;
  return <span className="inline-flex items-center gap-1" style={{ color: config.color }}><i className="size-1.5 rounded-full bg-current" />{language === "cn" ? config.zh : config.en}</span>;
}

const subtaskActions: Record<SubtaskStatusKey, ReadonlyArray<{ cn: string; en: string }>> = {
  queued: [{ cn: "删除", en: "Delete" }],
  running: [],
  executionFailed: [{ cn: "重新开始", en: "Restart" }, { cn: "删除", en: "Delete" }],
  validationFailed: [{ cn: "重新验证", en: "Revalidate" }, { cn: "删除", en: "Delete" }],
  validationSucceeded: [],
  paused: [{ cn: "继续", en: "Resume" }, { cn: "删除", en: "Delete" }],
};

function SubtaskActions({ status, language }: { status: SubtaskStatusKey; language: Language }) {
  const actions = subtaskActions[status];
  if (actions.length === 0) return <span className="text-[#8f9195]">—</span>;
  return <div className="flex items-center justify-start gap-4 whitespace-nowrap">{actions.map((action) => <span key={action.en} className="rounded-[3px] text-[#1450f5]">{language === "cn" ? action.cn : action.en}</span>)}</div>;
}

export default function TaskProgressContent({ language }: { language: Language }) {
  const [page, setPage] = useState(1);
  const [deviceIdFilter, setDeviceIdFilter] = useState("");
  const [statusFilters, setStatusFilters] = useState<SubtaskStatusKey[]>([]);
  const isChinese = language === "cn";

  const filteredRows = useMemo(() => rows.filter((row) => {
    const matchesDevice = row.deviceId.toLowerCase().includes(deviceIdFilter.trim().toLowerCase());
    const matchesStatus = statusFilters.length === 0 || statusFilters.includes(row.status);
    return matchesDevice && matchesStatus;
  }), [deviceIdFilter, statusFilters]);

  const resetFilters = () => {
    setDeviceIdFilter("");
    setStatusFilters([]);
    setPage(1);
  };

  return (
    <section className="mx-[16px] mt-6 md:mx-[24px]" aria-label={isChinese ? "任务进度视图" : "Task progress view"}>
      <h1 className="mb-4 font-['PingFang_SC:Semibold',sans-serif] text-[20px] font-semibold leading-7 text-[#141414]">{isChinese ? "任务进度视图" : "Task progress view"}</h1>

      <div className="flex flex-col gap-3">
        <section className="overflow-hidden rounded-[8px] border border-[#dfe1e8] bg-white">
          <header className="flex h-10 items-center border-b border-[#dfe1e8] bg-[#fafbfc] px-3"><span className="mr-2 h-[14px] w-1 rounded-[1px] bg-[#4373f7]" /><span className="text-[14px] font-medium leading-[22px] text-[#141414]">{isChinese ? "子任务状态" : "Subtask status"}</span></header>
          <div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {subtaskStatuses.map((status) => {
              const percentage = (status.count / subtaskTotal) * 100;
              return <article key={status.key} className="group min-w-0 overflow-hidden rounded-[6px] border border-transparent bg-[#f5f7fa] px-3 py-2.5 transition-colors hover:border-[#dfe1e8] hover:bg-[#f8f9fb]"><div className="mb-2 flex items-center gap-1.5"><span className="size-1.5 shrink-0 rounded-full" style={{ backgroundColor: status.color }} /><span className="truncate text-[13px] leading-5 text-[#676a72]">{isChinese ? status.zh : status.en}</span></div><div className="flex items-end justify-between gap-2"><strong className="font-['PingFang_SC:Semibold',sans-serif] text-[22px] font-semibold leading-6 text-[#141414]">{status.count}</strong><span className="pb-0.5 text-[12px] leading-4 text-[#8f9195]">{percentage.toFixed(1)}%</span></div><div className="mt-2 h-1 overflow-hidden rounded-full bg-white"><div className="h-full rounded-full" style={{ width: `${percentage}%`, backgroundColor: status.color }} /></div></article>;
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
            <div className="overflow-x-auto rounded-[6px] border border-[#dfe1e8]"><table className="w-full min-w-[940px] border-collapse text-left"><thead className="bg-[#f5f7fa] text-[#8f9195]"><tr className="h-[38px]"><th className="px-4 text-[14px] font-normal leading-[22px]">{isChinese ? "开始时间" : "Start time"}</th><th className="px-4 text-[14px] font-normal leading-[22px]">{isChinese ? "结束时间" : "End time"}</th><th className="px-4 text-[14px] font-normal leading-[22px]">{isChinese ? "设备类型" : "Device type"}</th><th className="px-4 text-[14px] font-normal leading-[22px]">{isChinese ? "序列号" : "Serial number"}</th><th className="px-4 text-[14px] font-normal leading-[22px]">{isChinese ? "设备编号" : "Device ID"}</th><th className="px-4 text-[14px] font-normal leading-[22px]">{isChinese ? "状态" : "Status"}</th><th className="sticky right-0 z-10 w-[176px] bg-[#f5f7fa] px-4 text-left text-[14px] font-normal leading-[22px]">{isChinese ? "操作" : "Action"}</th></tr></thead><tbody>{filteredRows.length ? filteredRows.map((row) => <tr key={row.id} className="h-[46px] border-t border-[#dfe1e8]"><td className="px-4 text-[14px] leading-[22px] text-[#141414]">{row.startedAt}</td><td className="px-4 text-[14px] leading-[22px] text-[#141414]">{row.endedAt}</td><td className="px-4 text-[14px] leading-[22px] text-[#141414]">KONE Connection 320</td><td className="px-4 text-[14px] leading-[22px] text-[#141414]">{row.serialNumber}</td><td className="px-4 text-[14px] leading-[22px] text-[#141414]">{row.deviceId}</td><td className="px-4 text-[14px] leading-[22px]"><SubtaskStatus status={row.status} language={language} /></td><td className="sticky right-0 bg-white px-4 text-left text-[14px] leading-[22px]"><SubtaskActions status={row.status} language={language} /></td></tr>) : <tr><td colSpan={7} className="h-28 text-center text-[14px] text-[#8f9195]">{isChinese ? "暂无匹配的子任务" : "No matching subtasks"}</td></tr>}</tbody></table></div>
          </div>
          <footer className="flex h-16 items-center justify-between px-6 text-[14px] leading-[22px] text-[#676a72]"><span>{isChinese ? `共 ${filteredRows.length} 项数据` : `${filteredRows.length} records`}</span><div className="flex items-center gap-2"><button type="button" aria-label="Previous page" onClick={() => setPage(Math.max(1, page - 1))} className="flex size-8 items-center justify-center rounded-[4px] text-[#abadb2] hover:bg-[#f5f7fa]"><ChevronLeft className="size-4" /></button><button type="button" className="flex size-8 items-center justify-center rounded-[4px] bg-[#1450f5] text-[14px] text-white">{page}</button><button type="button" aria-label="Next page" onClick={() => setPage(page + 1)} className="flex size-8 items-center justify-center rounded-[4px] text-[#141414] hover:bg-[#f5f7fa]"><ChevronRight className="size-4" /></button></div></footer>
        </section>
      </div>
      <footer className="py-4 text-center text-[12px] leading-5 text-[#959595]">Copyright @ 2019-2022 KONE. All Rights Reserved</footer>
    </section>
  );
}
