import { useMemo, useState } from "react";
import taskSvgPaths from "../../imports/IoT-20/svg-kodl3bnq28";
import ProgressTooltip from "../../imports/Tooltip文字提示";
import taskTypeSvgPaths from "../../imports/类型标签/svg-sje9m5ctx7";
import { getApprovalDeviceCount, getApprovalTaskContext, type UpgradeApproval } from "../data/approvalWorkflow";

type Language = "en" | "cn";
type TaskStatus = "queued" | "running" | "paused" | "success" | "failed";
type SubtaskStatus = "queued" | "running" | "executionFailed" | "verificationFailed" | "verificationSucceeded" | "paused";
type Task = { id: string; type: string; startedAt: string; enteredAt: string; endedAt: string; name: string; quantity: number; status: TaskStatus; summary?: Record<SubtaskStatus, number> };

const seededTasks: Task[] = [
  // 批量系统升级：覆盖进行中、暂停、失败、成功四种状态。
  { id: "task-batch-upgrade-running", type: "系统升级", startedAt: "2026/08/25 10:32:00", enteredAt: "2026/08/25 10:32:00", endedAt: "-", name: "KONE Connection 320 批量系统升级", quantity: 36, status: "running", summary: { queued: 8, running: 10, executionFailed: 2, verificationFailed: 1, verificationSucceeded: 15, paused: 0 } },
  { id: "task-batch-upgrade-failed", type: "系统升级", startedAt: "2026/08/24 18:20:00", enteredAt: "2026/08/24 18:20:00", endedAt: "2026/08/24 18:51:09", name: "KONE Connection 330 批量系统升级", quantity: 30, status: "failed", summary: { queued: 0, running: 0, executionFailed: 3, verificationFailed: 2, verificationSucceeded: 25, paused: 0 } },
  { id: "task-batch-upgrade-success", type: "系统升级", startedAt: "2026/08/24 15:16:00", enteredAt: "2026/08/24 15:16:00", endedAt: "2026/08/24 15:42:33", name: "KONE Connection 320 批量系统升级", quantity: 18, status: "success", summary: { queued: 0, running: 0, executionFailed: 0, verificationFailed: 0, verificationSucceeded: 18, paused: 0 } },
  // 批量更新配置：覆盖进行中、暂停、失败、成功四种状态。
  { id: "task-batch-config-paused", type: "更新配置", startedAt: "2026/08/25 08:46:00", enteredAt: "2026/08/25 08:46:00", endedAt: "-", name: "KONE Connection 320 批量配置更新", quantity: 16, status: "paused", summary: { queued: 0, running: 0, executionFailed: 0, verificationFailed: 0, verificationSucceeded: 8, paused: 8 } },
  { id: "task-batch-config-success", type: "更新配置", startedAt: "2026/08/24 13:35:00", enteredAt: "2026/08/24 13:35:00", endedAt: "2026/08/24 13:52:20", name: "KONE Connection 330 批量配置更新", quantity: 25, status: "success", summary: { queued: 0, running: 0, executionFailed: 0, verificationFailed: 0, verificationSucceeded: 25, paused: 0 } },
  // 批量设备重启：覆盖进行中、暂停、失败、成功四种状态。
  { id: "task-batch-reboot-paused", type: "设备重启", startedAt: "2026/08/24 16:45:00", enteredAt: "2026/08/24 16:45:00", endedAt: "-", name: "KONE Connection 330 批量设备重启", quantity: 14, status: "paused", summary: { queued: 0, running: 0, executionFailed: 0, verificationFailed: 0, verificationSucceeded: 5, paused: 9 } },
  { id: "task-batch-reboot-failed", type: "设备重启", startedAt: "2026/08/24 14:20:00", enteredAt: "2026/08/24 14:20:00", endedAt: "2026/08/24 14:38:17", name: "KONE Connection 320 批量设备重启", quantity: 22, status: "failed", summary: { queued: 0, running: 0, executionFailed: 2, verificationFailed: 1, verificationSucceeded: 19, paused: 0 } },
  { id: "task-batch-reboot-success", type: "设备重启", startedAt: "2026/08/24 11:10:00", enteredAt: "2026/08/24 11:10:00", endedAt: "2026/08/24 11:22:48", name: "KONE Connection 320 批量设备重启", quantity: 10, status: "success", summary: { queued: 0, running: 0, executionFailed: 0, verificationFailed: 0, verificationSucceeded: 10, paused: 0 } },
  // 六种非批量任务均为单台任务，任务数量固定为 1。
  { id: "task-single-upgrade", type: "系统升级", startedAt: "2026/08/23 16:20:00", enteredAt: "2026/08/23 16:20:00", endedAt: "2026/08/23 16:31:42", name: "设备 30264626 NEXUS 系统升级", quantity: 1, status: "success" },
  { id: "task-single-config", type: "更新配置", startedAt: "2026/08/23 14:05:00", enteredAt: "2026/08/23 14:05:00", endedAt: "2026/08/23 14:08:11", name: "设备 30264627 NEXUS 配置更新", quantity: 1, status: "failed" },
  { id: "task-single-reboot", type: "设备重启", startedAt: "2026/08/23 10:25:00", enteredAt: "2026/08/23 10:25:00", endedAt: "-", name: "设备 30264628 NEXUS 重启", quantity: 1, status: "running" },
  { id: "task-single-upload", type: "日志上传", startedAt: "2026/08/22 16:08:00", enteredAt: "2026/08/22 16:08:00", endedAt: "-", name: "设备 30264629 NEXUS 日志上传", quantity: 1, status: "queued" },
  { id: "task-single-register", type: "设备注册", startedAt: "2026/08/22 11:30:00", enteredAt: "2026/08/22 11:30:00", endedAt: "2026/08/22 11:32:09", name: "设备 KONE-CN-320-001008 注册", quantity: 1, status: "success" },
  { id: "task-single-unbind", type: "设备解绑", startedAt: "2026/08/22 09:16:00", enteredAt: "2026/08/22 09:16:00", endedAt: "2026/08/22 09:17:02", name: "设备 KONE-CN-320-001009 解绑", quantity: 1, status: "success" },
];

const copy = {
  cn: { title: "任务列表", type: "任务类型", started: "开始时间", ended: "结束时间", name: "任务名称", quantity: "任务数量", status: "任务状态", action: "操作", taskProgress: "查看任务进度", queued: "队列中", running: "进行中", paused: "任务暂停", subtaskPaused: "暂停", success: "任务成功", failed: "任务失败", executionFailed: "执行失败", verificationFailed: "验证失败", verificationSucceeded: "验证成功", total: "共", records: "项数据" },
  en: { title: "Task List", type: "Task type", started: "Start time", ended: "End time", name: "Task name", quantity: "Task quantity", status: "Task status", action: "Action", taskProgress: "View task progress", queued: "Queued", running: "In progress", paused: "Paused", subtaskPaused: "Paused", success: "Successful", failed: "Failed", executionFailed: "Execution failed", verificationFailed: "Validation failed", verificationSucceeded: "Validation succeeded", total: "Total ", records: " records" },
};

function TaskTypeTag({ type }: { type: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-[3px] border border-[#333740] bg-[#f5f7fa] px-2 py-[5px] text-[14px] leading-[22px] text-[#333740]">
      <svg aria-hidden="true" className="size-4 shrink-0" fill="none" viewBox="0 0 13 10.5">
        <path d={taskTypeSvgPaths.p10a0fe40} fill="currentColor" />
      </svg>
      <span className="whitespace-nowrap">{type}</span>
    </span>
  );
}

function StatusLabel({ status, language }: { status: TaskStatus; language: Language }) {
  const t = copy[language];
  const config: Record<TaskStatus, { label: string; className: string }> = { queued: { label: t.queued, className: "text-[#a1a4aa]" }, running: { label: t.running, className: "text-[#1450f5]" }, paused: { label: t.paused, className: "text-[#f98600]" }, success: { label: t.success, className: "text-[#1ed273]" }, failed: { label: t.failed, className: "text-[#f51414]" } };
  return <span className={`inline-flex items-center gap-1 ${config[status].className}`}><i className="size-1.5 rounded-full bg-current" />{config[status].label}</span>;
}

function SubtaskStatusLabel({ status, language }: { status: SubtaskStatus; language: Language }) {
  const t = copy[language];
  // Keep hover-card categories aligned with the task progress status statistics.
  const config: Record<SubtaskStatus, { label: string; className: string }> = {
    queued: { label: t.queued, className: "text-[#a1a4aa]" },
    running: { label: t.running, className: "text-[#1450f5]" },
    executionFailed: { label: t.executionFailed, className: "text-[#f51414]" },
    verificationFailed: { label: t.verificationFailed, className: "text-[#f51414]" },
    verificationSucceeded: { label: t.verificationSucceeded, className: "text-[#1ed273]" },
    paused: { label: t.subtaskPaused, className: "text-[#f98600]" },
  };
  return <span className={`inline-flex items-center gap-1 ${config[status].className}`}><i className="size-1.5 rounded-full bg-current" />{config[status].label}</span>;
}

function TaskProgressButton({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <div className="group relative inline-flex size-8 shrink-0 items-center justify-center">
      <button type="button" aria-label={label} onClick={onClick} className="relative size-full rounded-full hover:bg-[#f5f7fa] focus-visible:bg-[#f5f7fa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1450f5]">
        <span className="absolute left-1/2 top-1/2 size-[18px] -translate-x-1/2 -translate-y-1/2 overflow-clip" aria-hidden="true">
          <span className="absolute inset-[12.5%_14.33%_12.5%_12.5%]"><svg className="block size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705"><path clipRule="evenodd" d={taskSvgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" /></svg></span>
        </span>
      </button>
      <div role="tooltip" className="pointer-events-none invisible absolute bottom-[calc(100%+2px)] left-1/2 z-40 w-[112px] -translate-x-1/2 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ProgressTooltip />
      </div>
    </div>
  );
}

function MoreIconButton({ label }: { label: string }) {
  return (
    <button type="button" aria-label={label} className="relative size-8 shrink-0 rounded-full hover:bg-[#f5f7fa] focus-visible:bg-[#f5f7fa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1450f5]">
      <span className="absolute left-1/2 top-1/2 size-[18px] -translate-x-1/2 -translate-y-1/2 overflow-clip" aria-hidden="true"><span className="absolute inset-[14.29%_42.86%]"><svg className="block size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143"><path d={taskSvgPaths.p29f58d00} fill="#abadb2" /></svg></span></span>
    </button>
  );
}

function MoreActionsMenu({ task, language, onResume, onRestart, onDelete }: { task: Task; language: Language; onResume: () => void; onRestart: () => void; onDelete: () => void }) {
  const labels = language === "cn" ? { more: "更多操作", resume: "继续", restart: "重新开始", delete: "删除" } : { more: "More actions", resume: "Resume", restart: "Restart", delete: "Delete" };
  const actions = task.status === "paused"
    ? [{ label: labels.resume, onClick: onResume }]
    : task.status === "failed"
      ? [{ label: labels.restart, onClick: onRestart }, { label: labels.delete, onClick: onDelete }]
      : task.status === "success"
        ? [{ label: labels.delete, onClick: onDelete }]
        : [];

  if (actions.length === 0) return null;

  return (
    <div className="group relative inline-flex size-8 shrink-0 items-center justify-center">
      <button type="button" aria-label={labels.more} aria-haspopup="menu" className="relative size-full rounded-full hover:bg-[#f5f7fa] focus-visible:bg-[#f5f7fa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1450f5]">
        <span className="absolute left-1/2 top-1/2 size-[18px] -translate-x-1/2 -translate-y-1/2 overflow-clip" aria-hidden="true"><span className="absolute inset-[14.29%_42.86%]"><svg className="block size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143"><path d={taskSvgPaths.p29f58d00} fill="#abadb2" /></svg></span></span>
      </button>
      <div role="menu" aria-label={labels.more} className="invisible absolute right-0 top-full z-40 w-[112px] rounded-[6px] border-[0.5px] border-[#c8cad0] bg-white p-[6px] opacity-0 shadow-[0_4px_5px_rgba(0,0,0,0.1)] transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        {actions.map((action) => <button key={action.label} type="button" role="menuitem" onClick={action.onClick} className="flex h-[28px] w-full items-center rounded-[4px] px-2 py-[3px] text-left text-[14px] font-normal leading-[22px] text-[#141414] hover:bg-[#f1f1f1] active:bg-[#dfe1e8] focus:bg-[#dfe1e8] focus:outline-none">{action.label}</button>)}
      </div>
    </div>
  );
}

export default function TaskListContent({ language, approvals, onOpenTaskProgress }: { language: Language; approvals: UpgradeApproval[]; onOpenTaskProgress?: () => void }) {
  const t = copy[language];
  const [currentPage, setCurrentPage] = useState(1);
  const [taskStatusOverrides, setTaskStatusOverrides] = useState<Record<string, TaskStatus>>({});
  const [deletedTaskIds, setDeletedTaskIds] = useState<string[]>([]);
  const pageSize = 12;
  const baseTasks = useMemo(() => {
    const approved = approvals.filter((approval) => approval.status === "approved" && !getApprovalTaskContext(approval).isDeviceUnbind).map<Task>((approval) => {
      const task = getApprovalTaskContext(approval);
      const quantity = getApprovalDeviceCount(approval);
      const type = task.isDeviceUnbind ? language === "cn" ? "设备解绑" : "Device unbind" : task.operation === "批量配置更新" ? language === "cn" ? "更新配置" : "Configuration update" : task.operation === "批量设备重启" ? language === "cn" ? "设备重启" : "Device restart" : language === "cn" ? "系统升级" : "System upgrade";
      const enteredAt = (approval.completedAt ?? approval.initiatedAt).replace("T", " ");
      return { id: approval.id, type, startedAt: enteredAt, enteredAt, endedAt: "-", name: approval.content, quantity, status: quantity > 1 ? "running" : "queued", summary: quantity > 1 ? { queued: quantity, running: 0, executionFailed: 0, verificationFailed: 0, verificationSucceeded: 0, paused: 0 } : undefined };
    });
    const toTimestamp = (value: string) => new Date(value.replaceAll("/", "-").replace(" ", "T")).getTime();
    return [...approved, ...seededTasks].sort((left, right) => {
      const leftPriority = left.status === "queued" && left.quantity > 1 ? 0 : 1;
      const rightPriority = right.status === "queued" && right.quantity > 1 ? 0 : 1;
      return leftPriority - rightPriority || toTimestamp(right.enteredAt) - toTimestamp(left.enteredAt);
    });
  }, [approvals, language]);
  const tasks = baseTasks
    .filter((task) => !deletedTaskIds.includes(task.id))
    .map((task) => ({ ...task, status: taskStatusOverrides[task.id] ?? task.status }));
  const setTaskRunning = (taskId: string) => setTaskStatusOverrides((current) => ({ ...current, [taskId]: "running" }));
  const deleteTask = (taskId: string) => setDeletedTaskIds((current) => [...current, taskId]);
  const totalPages = Math.max(1, Math.ceil(tasks.length / pageSize));
  const activePage = Math.min(currentPage, totalPages);
  const visibleTasks = tasks.slice((activePage - 1) * pageSize, activePage * pageSize);

  return <section className="overflow-visible rounded-[8px] border border-[#dfe1e8] bg-white font-['PingFang_SC:Regular',sans-serif]" aria-label={t.title}>
    <header className="px-5 pb-3 pt-6"><h1 className="text-[20px] font-semibold leading-7 text-[#141414]">{t.title}</h1></header>
    <div className="px-5 pb-5 pt-1"><div className="overflow-visible rounded-[6px] border border-[#dfe1e8]"><table className="w-full min-w-[880px] border-collapse text-left text-[14px]"><thead className="bg-[#f5f7fa] text-[#8f9195]"><tr className="h-[40px] border-b border-[#dfe1e8]"><th className="w-[112px] px-4 font-normal">{t.type}</th><th className="w-[176px] px-4 font-normal">{t.started}</th><th className="w-[176px] px-4 font-normal">{t.ended}</th><th className="px-4 font-normal">{t.name}</th><th className="w-[100px] px-4 font-normal">{t.quantity}</th><th className="w-[116px] px-4 font-normal">{t.status}</th><th className="w-[84px] px-4 font-normal">{t.action}</th></tr></thead><tbody>{visibleTasks.map((task) => <tr key={task.id} className="h-[52px] border-b border-[#e7e7e7] last:border-b-0 hover:bg-[#fafbfc]"><td className="px-4"><TaskTypeTag type={task.type} /></td><td className="px-4 text-[#141414]">{task.startedAt}</td><td className="px-4 text-[#141414]">{task.endedAt}</td><td className="max-w-[240px] truncate px-4 text-[#141414]" title={task.name}>{task.name}</td><td className="px-4 text-[#141414]">{task.quantity}</td><td className="px-4">{task.quantity > 1 ? <div className="group relative inline-flex"><StatusLabel status={task.status} language={language} /><div className="pointer-events-none absolute top-[calc(100%+8px)] left-0 z-[60] hidden w-[152px] rounded-[6px] bg-white p-3 shadow-[0_4px_10px_rgba(0,0,0,0.12)] group-hover:block">{(["queued", "running", "executionFailed", "verificationFailed", "verificationSucceeded", "paused"] as SubtaskStatus[]).map((status) => <div key={status} className="flex items-center justify-between py-1 text-[12px]"><SubtaskStatusLabel status={status} language={language} /><span className="text-[#141414]">{task.summary?.[status] ?? 0}</span></div>)}</div></div> : <StatusLabel status={task.status} language={language} />}</td><td className="px-4"><div className="flex items-center"><TaskProgressButton label={t.taskProgress} onClick={task.quantity > 1 ? onOpenTaskProgress : undefined} />{task.quantity > 1 ? <MoreActionsMenu task={task} language={language} onResume={() => setTaskRunning(task.id)} onRestart={() => setTaskRunning(task.id)} onDelete={() => deleteTask(task.id)} /> : <MoreIconButton label={language === "cn" ? "更多操作" : "More actions"} />}</div></td></tr>)}</tbody></table></div><footer className="flex h-16 items-center justify-between px-4 text-[14px] text-[#676a72]"><span>{t.total}{tasks.length}{t.records}</span><div className="flex items-center gap-2">{Array.from({ length: totalPages }, (_, index) => { const page = index + 1; const active = page === activePage; return <button key={page} type="button" onClick={() => setCurrentPage(page)} aria-current={active ? "page" : undefined} className={`flex size-8 items-center justify-center rounded-[4px] ${active ? "bg-[#1450f5] text-white" : "border border-[#c8cad0] text-[#141414] hover:bg-[#f5f7fa]"}`}>{page}</button>; })}</div></footer></div>
  </section>;
}
