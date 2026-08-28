import { useEffect, useState } from "react";
import sidePanelSvgPaths from "../../imports/PageTypeOverlayContentSidePanel-1/svg-o1xlcz3uwi";
import rejectDialogSvgPaths from "../../imports/PageTypeOverlayContentDialogContent/svg-51182gu1a5";
import tableSvgPaths from "../../imports/Frame3426/svg-vnnbtkf6mg";
import toastSvgPaths from "../../imports/ToastMessage/svg-5yubahwo3j";
import emptyApprovalIllustration from "../../imports/MainContent/a61db6f0d80700688e3c9c49f1c3d1437e8f0bd9.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { AppAccount } from "../data/accounts";
import { getApprovalTaskContext, type UpgradeApproval } from "../data/approvalWorkflow";

type Language = "en" | "cn";
type Tab = "initiated" | "pending" | "processed";

const copy = {
  cn: { title: "审批中心", initiated: "我发起的", pending: "待处理的", processed: "已处理的", content: "审批内容", initiator: "发起人", initiatedAt: "发起时间", currentNode: "当前节点", status: "状态", action: "操作", submitter: "提交人", approve: "批准", agree: "同意", reject: "驳回", reapply: "重新申请", reapplyDialogTitle: "重新申请", confirmReapply: "确认申请", approvedToast: "批量升级任务已进入任务中心。", rejectedToast: "批量升级任务已驳回。", inProgress: "进行中", completed: "已完成", approvalPassed: "审批通过", rejected: "已驳回", pendingStatus: "待审批", approver: "审批人", completedAt: "完成时间", approvalAt: "审批时间", withdraw: "撤回审批", viewReason: "查看原因", total: "共", records: "项数据", page: "第 1 页，共 1 页", taskDetails: "审批详情", close: "关闭", executionTime: "执行时间", approvalProgress: "审批进度", submitted: "已发起", awaitingApproval: "待审批", approved: "已批准", rejectedByApprover: "已驳回", upgradeContents: "审批内容", deviceType: "设备类型", hardwareType: "硬件类型", upgradePackage: "升级安装包", upgradeQuantity: "升级数量", noDetails: "暂无升级明细", remark: "备注", remarkOptional: "备注（选填）", remarkPlaceholder: "请输入审批备注", rejectDialogTitle: "驳回申请", cancel: "取消", confirmReject: "确认驳回", emptyTitle: "暂无数据", emptyInitiated: "当前没有发起审批的内容", emptyPending: "当前没有待处理的内容", emptyProcessed: "当前没有已处理的审批内容" },
  en: { title: "Approval Center", initiated: "Initiated by me", pending: "To process", processed: "Processed", content: "Approval content", initiator: "Initiator", initiatedAt: "Initiated at", currentNode: "Current node", status: "Status", action: "Action", submitter: "Submitter", approve: "Approve", agree: "Approve", reject: "Reject", reapply: "Reapply", reapplyDialogTitle: "Reapply", confirmReapply: "Confirm reapplication", approvedToast: "The batch upgrade task has entered the task center.", rejectedToast: "The batch upgrade task was rejected.", inProgress: "In progress", completed: "Completed", approvalPassed: "Approved", rejected: "Rejected", pendingStatus: "Pending", approver: "Approver", completedAt: "Completed at", approvalAt: "Approved at", withdraw: "Withdraw", viewReason: "View reason", total: "Total ", records: " records", page: "Page 1 of 1", taskDetails: "Approval details", close: "Close", executionTime: "Execution time", approvalProgress: "Approval progress", submitted: "Submitted", awaitingApproval: "Awaiting approval", approved: "Approved", rejectedByApprover: "Rejected", upgradeContents: "Approval content", deviceType: "Device type", hardwareType: "Hardware type", upgradePackage: "Upgrade package", upgradeQuantity: "Upgrade quantity", noDetails: "No upgrade details available", remark: "Remark", remarkOptional: "Remark (optional)", remarkPlaceholder: "Enter an approval remark", rejectDialogTitle: "Reject request", cancel: "Cancel", confirmReject: "Confirm rejection", emptyTitle: "No data", emptyInitiated: "There is no initiated approval content", emptyPending: "There is no approval waiting for you", emptyProcessed: "There is no processed approval content" },
};

function StatusPill({ status, language, pendingAsInProgress = false }: { status: UpgradeApproval["status"]; language: Language; pendingAsInProgress?: boolean }) {
  const t = copy[language];
  const data = status === "pending" ? pendingAsInProgress ? { label: t.inProgress, className: "bg-[#e8f0ff] text-[#1450f5]" } : { label: t.pendingStatus, className: "bg-[#fff7e8] text-[#b86000]" } : status === "approved" ? { label: t.completed, className: "bg-[#e8fbf1] text-[#14985a]" } : { label: t.rejected, className: "bg-[#fff0f0] text-[#d92d20]" };
  return <span className={`inline-flex rounded-[3px] px-2 py-0.5 text-[12px] leading-5 ${data.className}`}>{data.label}</span>;
}

function TableStatus({ status, language }: { status: UpgradeApproval["status"]; language: Language }) {
  const t = copy[language];
  const state = status === "approved"
    ? { label: t.approvalPassed, dot: "bg-[#1ed273]", text: "text-[#1ed273]" }
    : status === "rejected"
      ? { label: t.rejected, dot: "bg-[#f51414]", text: "text-[#f51414]" }
      : { label: t.pendingStatus, dot: "bg-[#f98600]", text: "text-[#f98600]" };

  return (
    <span className={`inline-flex items-center gap-1 text-[14px] leading-[22px] ${state.text}`}>
      <span aria-hidden="true" className={`size-[6px] rounded-full ${state.dot}`} />
      {state.label}
    </span>
  );
}

function ApprovalProgress({ approval, language }: { approval: UpgradeApproval; language: Language }) {
  const t = copy[language];
  const reviewState = approval.status === "pending"
    ? { label: t.awaitingApproval, color: "#1450f5", titleClass: "font-semibold text-[#1450f5]", statusClass: "text-[#8f9195]", filled: true, showMeta: false }
    : approval.status === "approved"
      ? { label: t.approved, color: "#1450f5", titleClass: "text-[#141414]", statusClass: "text-[#1450f5]", filled: false, showMeta: true }
      : { label: t.rejectedByApprover, color: "#f51414", titleClass: "font-semibold text-[#f51414]", statusClass: "text-[#f51414]", filled: false, showMeta: true };

  const steps = [
    {
      id: "initiated",
      name: approval.initiatorEmail,
      label: t.submitted,
      color: "#1450f5",
      titleClass: "text-[#141414]",
      statusClass: "text-[#1450f5]",
      filled: false,
      time: approval.initiatedAt,
      remark: approval.submissionRemark,
    },
    {
      id: "reviewed",
      name: approval.approverRole === "L2人员" ? "L2" : "Administrator",
      label: reviewState.label,
      color: reviewState.color,
      titleClass: reviewState.titleClass,
      statusClass: reviewState.statusClass,
      filled: reviewState.filled,
      time: reviewState.showMeta ? approval.initiatedAt : undefined,
      remark: reviewState.showMeta ? approval.reviewRemark : undefined,
    },
  ];

  return (
    <section className="mt-4" aria-label={t.approvalProgress}>
      <div className="flex h-5 items-center gap-2 text-[12px] leading-5 text-[#8f9195]">
        <span className="h-px flex-1 bg-[#dfe1e8]" />
        <span>{t.approvalProgress}</span>
        <span className="h-px flex-1 bg-[#dfe1e8]" />
      </div>
      <div className="mt-3 flex flex-col gap-4">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <div key={step.id} className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 flex-1 items-stretch gap-4">
                <div className="flex w-2 shrink-0 flex-col items-center pt-2">
                  <span
                    aria-hidden="true"
                    className={`size-2 shrink-0 rounded-full border-2 ${step.filled ? "" : "bg-white"}`}
                    style={{ borderColor: step.color, backgroundColor: step.filled ? step.color : undefined }}
                  />
                  {!isLast && <span className="mt-2 w-[2px] flex-1 bg-[#1450f5]" />}
                </div>
                <div className="min-w-0 pb-1">
                  <p className={`truncate text-[16px] leading-6 ${step.titleClass}`}>{step.name}</p>
                  {step.time && <p className="mt-1 text-[14px] leading-[22px] text-[#676a72]">{step.time}</p>}
                  {step.remark && <p className="mt-1 break-words text-[14px] leading-[22px] text-[#676a72]">{t.remark}：{step.remark}</p>}
                </div>
              </div>
              <span className={`shrink-0 pt-[2px] text-[14px] leading-[22px] ${step.statusClass}`}>{step.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function RemarkDialog({ language, title, confirmLabel, onClose, onConfirm }: { language: Language; title: string; confirmLabel: string; onClose: () => void; onConfirm: (remark?: string) => void }) {
  const t = copy[language];
  const [remark, setRemark] = useState("");
  return <div className="fixed inset-0 z-[150] flex items-center justify-center bg-[#141414]/60 p-4" role="dialog" aria-modal="true" aria-labelledby="reject-dialog-title">
    <div className="flex h-[360px] w-full max-w-[640px] flex-col overflow-hidden rounded-[8px] bg-white shadow-2xl">
      <header className="relative flex h-[72px] shrink-0 items-center justify-center border-b border-[#e7e7e7] px-8"><h3 id="reject-dialog-title" className="text-[16px] font-semibold leading-6 text-[#141414]">{title}</h3><button type="button" aria-label={t.close} onClick={onClose} className="absolute right-8 flex size-6 items-center justify-center rounded-[3px] hover:bg-[#f5f7fa]"><span className="relative size-4" aria-hidden="true"><span className="absolute inset-[25.03%]"><svg className="block size-full" fill="none" height="7.99033" preserveAspectRatio="none" viewBox="0 0 7.99031 7.99033" width="7.99031"><path d={rejectDialogSvgPaths.p1e5ad00} fill="#727272" /></svg></span></span></button></header>
      <div className="flex-1 px-8 py-6"><label className="block text-[14px] font-medium leading-[22px] text-[#141414]">{t.remarkOptional}<textarea autoFocus value={remark} onChange={(event) => setRemark(event.target.value)} placeholder={t.remarkPlaceholder} className="mt-2 block h-[144px] w-full resize-none rounded-[6px] bg-[#f5f7fa] px-3 py-2 text-[14px] font-normal leading-[22px] text-[#141414] outline-none placeholder:text-[#8f9195] focus:ring-1 focus:ring-[#1450f5]" /></label></div>
      <footer className="flex h-20 shrink-0 items-center justify-end gap-2 border-t border-[#e7e7e7] px-8"><button type="button" onClick={onClose} className="h-8 rounded-[4px] bg-[#f1f1f1] px-4 text-[14px] text-[#141414] hover:bg-[#e8e8e8]">{t.cancel}</button><button type="button" onClick={() => onConfirm(remark.trim() || undefined)} className="h-8 rounded-[4px] bg-[#1450f5] px-4 text-[14px] text-white hover:bg-[#0e43d0]">{confirmLabel}</button></footer>
    </div>
  </div>;
}

function TaskDetailsDrawer({ approval, language, currentUser, pendingAsInProgress, onClose, onReview }: { approval: UpgradeApproval; language: Language; currentUser: AppAccount; pendingAsInProgress: boolean; onClose: () => void; onReview: (result: "approved" | "rejected", reviewRemark?: string) => void }) {
  const t = copy[language];
  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false);
  const detailRows = approval.upgradeDetails?.length ? approval.upgradeDetails : Object.entries(approval.packages).map(([hardwareType, packageName]) => ({ deviceType: "LCE", hardwareType, packageName: packageName.replace(`${hardwareType} · `, ""), quantity: "001" }));
  const isConfigurationUpdate = approval.content.includes("批量配置更新");
  const isDeviceUnbind = approval.content.includes("设备解绑");
  const isDeviceReboot = approval.content.includes("批量设备重启");
  const fields = [[t.content, approval.content], [t.initiator, approval.initiatorName], [t.initiatedAt, approval.initiatedAt], [t.executionTime, approval.scheduledAt.replace("T", " ")]];
  const canReview = approval.status === "pending" && approval.approverEmail === currentUser.email;
  return <div className="fixed inset-0 z-[130] flex bg-[#141414]/60" role="dialog" aria-modal="true" aria-labelledby="task-details-title">
    <button type="button" aria-label={t.close} onClick={onClose} className="min-w-0 flex-1 cursor-default" />
    <aside className="flex h-full w-full max-w-[720px] flex-col bg-white shadow-[-8px_0_24px_rgba(0,0,0,0.12)]">
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-[#c8cad0] px-4"><h2 id="task-details-title" className="text-[16px] font-semibold leading-6 text-[#141414]">{t.taskDetails}</h2><button type="button" aria-label={t.close} onClick={onClose} className="relative flex size-6 items-center justify-center rounded-[3px] hover:bg-[#f5f7fa]"><span className="relative size-4" aria-hidden="true"><span className="absolute inset-[25.03%]"><svg className="block size-full" fill="none" height="7.99033" preserveAspectRatio="none" viewBox="0 0 7.99031 7.99033" width="7.99031"><path d={sidePanelSvgPaths.p1e5ad00} fill="#676A72" /></svg></span></span></button></header>
      <div className="flex-1 overflow-y-auto px-4 py-5"><div className="flex flex-col gap-2">{fields.map(([label, value]) => <div key={label} className="flex min-h-[34px] items-center justify-between gap-4 rounded-[6px] bg-[#f5f7fa] px-3 py-[6px] text-[14px] leading-[22px]"><span className="w-20 shrink-0 truncate font-medium text-[#141414]">{label}</span><span className="min-w-0 flex-1 truncate text-right text-[#676a72]" title={value}>{value}</span></div>)}<div className="flex min-h-[34px] items-center justify-between gap-4 rounded-[6px] bg-[#f5f7fa] px-3 py-[6px] text-[14px] leading-[22px]"><span className="w-20 shrink-0 font-medium text-[#141414]">{t.status}</span><span className="flex min-w-0 flex-1 justify-end"><TableStatus status={approval.status} language={language} /></span></div></div><ApprovalProgress approval={approval} language={language} /><section className="mt-4" aria-label={t.upgradeContents}>
        <div className="flex h-5 items-center gap-2 text-[12px] leading-5 text-[#8f9195]">
          <span className="h-px flex-1 bg-[#dfe1e8]" />
          <span>{t.upgradeContents}</span>
          <span className="h-px flex-1 bg-[#dfe1e8]" />
        </div>
        {detailRows.length > 0 ? isConfigurationUpdate ? <div className="mt-3 overflow-hidden rounded-[6px] border border-[#dfe1e8]"><table className="w-full table-fixed border-collapse text-left text-[12px] leading-5"><colgroup><col className="w-[77px]" /><col /><col /><col /><col className="w-[68px]" /><col className="w-[68px]" /><col className="w-[68px]" /></colgroup><thead className="bg-[#f5f7fa] text-[#8f9195]"><tr><th className="truncate border-b border-[#dfe1e8] p-2 font-normal">{t.deviceType}</th><th className="truncate border-b border-[#dfe1e8] p-2 font-normal">{t.hardwareType}</th><th className="truncate border-b border-[#dfe1e8] p-2 font-normal">Profile名称</th><th className="truncate border-b border-[#dfe1e8] p-2 font-normal">更改字段</th><th className="truncate border-b border-[#dfe1e8] p-2 font-normal">原数值</th><th className="truncate border-b border-[#dfe1e8] p-2 font-normal">更改数值</th><th className="truncate border-b border-[#dfe1e8] p-2 font-normal">更改数量</th></tr></thead><tbody>{detailRows.map((row, index) => <tr key={`${row.hardwareType}-${row.packageName}-${index}`} className="last:[&>td]:border-b-0"><td className="truncate border-b border-[#e7e7e7] p-2 text-[#141414]" title={row.deviceType}>{row.deviceType}</td><td className="truncate border-b border-[#e7e7e7] p-2 text-[#141414]" title={row.hardwareType}>{row.hardwareType}</td><td className="truncate border-b border-[#e7e7e7] p-2 text-[#141414]" title="v2/dtu-lce-5-0-config.json">v2/dtu-lce-5-0-config.json</td><td className="truncate border-b border-[#e7e7e7] p-2 text-[#141414]" title="FloorMarkings">FloorMarkings</td><td className="truncate border-b border-[#e7e7e7] p-2 text-[#141414]">F1</td><td className="truncate border-b border-[#e7e7e7] p-2 text-[#141414]">F2</td><td className="truncate border-b border-[#e7e7e7] p-2 text-[#141414]" title={row.quantity}>{row.quantity}</td></tr>)}</tbody></table></div> : isDeviceUnbind ? <div className="mt-3 overflow-hidden rounded-[6px] border border-[#dfe1e8]"><table className="w-full table-fixed border-collapse text-left text-[12px] leading-5"><colgroup><col className="w-[95px]" /><col /><col className="w-[120px]" /></colgroup><thead className="bg-[#f5f7fa] text-[#8f9195]"><tr><th className="truncate border-b border-[#dfe1e8] p-2 font-normal">{t.deviceType}</th><th className="truncate border-b border-[#dfe1e8] p-2 font-normal">{t.hardwareType}</th><th className="truncate border-b border-[#dfe1e8] p-2 font-normal">{t.action}</th></tr></thead><tbody>{detailRows.map((row, index) => <tr key={`${row.hardwareType}-${row.packageName}-${index}`} className="last:[&>td]:border-b-0"><td className="truncate border-b border-[#e7e7e7] p-2 text-[#141414]" title={row.deviceType}>{row.deviceType}</td><td className="truncate border-b border-[#e7e7e7] p-2 text-[#141414]" title={row.hardwareType}>{row.hardwareType}</td><td className="truncate border-b border-[#e7e7e7] p-2 text-[#141414]">设备解绑</td></tr>)}</tbody></table></div> : isDeviceReboot ? <div className="mt-3 overflow-hidden rounded-[6px] border border-[#dfe1e8]"><table className="w-full table-fixed border-collapse text-left text-[12px] leading-5"><colgroup><col className="w-[95px]" /><col /><col className="w-[120px]" /></colgroup><thead className="bg-[#f5f7fa] text-[#8f9195]"><tr><th className="truncate border-b border-[#dfe1e8] p-2 font-normal">{t.deviceType}</th><th className="truncate border-b border-[#dfe1e8] p-2 font-normal">{t.hardwareType}</th><th className="truncate border-b border-[#dfe1e8] p-2 font-normal">重启数量</th></tr></thead><tbody>{detailRows.map((row, index) => <tr key={`${row.hardwareType}-${row.packageName}-${index}`} className="last:[&>td]:border-b-0"><td className="truncate border-b border-[#e7e7e7] p-2 text-[#141414]" title={row.deviceType}>{row.deviceType}</td><td className="truncate border-b border-[#e7e7e7] p-2 text-[#141414]" title={row.hardwareType}>{row.hardwareType}</td><td className="truncate border-b border-[#e7e7e7] p-2 text-[#141414]" title={row.quantity}>{row.quantity}</td></tr>)}</tbody></table></div> : <div className="mt-3 overflow-hidden rounded-[6px] border border-[#dfe1e8]"><table className="w-full table-fixed border-collapse text-left text-[12px] leading-5"><colgroup><col className="w-[95px]" /><col className="w-[160px]" /><col /><col className="w-[109px]" /></colgroup><thead className="bg-[#f5f7fa] text-[#8f9195]"><tr><th className="truncate border-b border-[#dfe1e8] p-2 font-normal">{t.deviceType}</th><th className="truncate border-b border-[#dfe1e8] p-2 font-normal">{t.hardwareType}</th><th className="truncate border-b border-[#dfe1e8] p-2 font-normal">{t.upgradePackage}</th><th className="truncate border-b border-[#dfe1e8] p-2 font-normal">{t.upgradeQuantity}</th></tr></thead><tbody>{detailRows.map((row, index) => <tr key={`${row.hardwareType}-${row.packageName}-${index}`} className="last:[&>td]:border-b-0"><td className="truncate border-b border-[#e7e7e7] p-2 text-[#141414]" title={row.deviceType}>{row.deviceType}</td><td className="truncate border-b border-[#e7e7e7] p-2 text-[#141414]" title={row.hardwareType}>{row.hardwareType}</td><td className="truncate border-b border-[#e7e7e7] p-2 text-[#141414]" title={row.packageName}>{row.packageName}</td><td className="truncate border-b border-[#e7e7e7] p-2 text-[#141414]" title={row.quantity}>{row.quantity}</td></tr>)}</tbody></table></div> : <p className="mt-3 rounded-[6px] bg-[#f5f7fa] px-3 py-2 text-[14px] leading-[22px] text-[#676a72]">{t.noDetails}</p>}</section></div>
      {canReview && <footer className="flex h-14 shrink-0 items-center justify-start gap-2 border-t border-[#c8cad0] px-4"><button type="button" onClick={() => onReview("approved")} className="h-8 rounded-[4px] bg-[#1450f5] px-4 text-[14px] leading-[22px] text-white hover:bg-[#0e43d0]">{t.approve}</button><button type="button" onClick={() => setIsRejectDialogOpen(true)} className="h-8 rounded-[4px] bg-[#f2f4f7] px-4 text-[14px] leading-[22px] text-[#141414] hover:bg-[#e8ebef]">{t.reject}</button></footer>}
      {isRejectDialogOpen && <RemarkDialog language={language} title={t.rejectDialogTitle} confirmLabel={t.confirmReject} onClose={() => setIsRejectDialogOpen(false)} onConfirm={(remark) => onReview("rejected", remark)} />}
    </aside>
  </div>;
}

export default function ApprovalCenterContent({ language, currentUser, approvals, defaultTab = "initiated", onReview, onReapply }: { language: Language; currentUser: AppAccount; approvals: UpgradeApproval[]; defaultTab?: Tab; onReview: (id: string, result: "approved" | "rejected", reviewRemark?: string) => void; onReapply: (id: string, submissionRemark?: string) => void }) {
  const t = copy[language];
  const [activeTab, setActiveTab] = useState<Tab>(defaultTab);
  const [detailApproval, setDetailApproval] = useState<UpgradeApproval | null>(null);
  const [reviewToast, setReviewToast] = useState<{ result: "approved" | "rejected"; message: string } | null>(null);
  const [withdrawnIds, setWithdrawnIds] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    setActiveTab(["mingyuan.zhang@kone.com", "liu.yang@kone.com"].includes(currentUser.email) && defaultTab === "initiated" ? "pending" : defaultTab);
  }, [currentUser.email, defaultTab]);
  useEffect(() => {
    if (!reviewToast) return;
    const timeoutId = window.setTimeout(() => setReviewToast(null), 5000);
    return () => window.clearTimeout(timeoutId);
  }, [reviewToast]);

  const rows = (activeTab === "initiated"
    ? approvals.filter((approval) => approval.initiatorEmail === currentUser.email)
    : activeTab === "pending"
      ? approvals.filter((approval) => approval.approverEmail === currentUser.email && approval.status === "pending")
      : approvals.filter((approval) => approval.approverEmail === currentUser.email && approval.status !== "pending")
  ).filter((approval) => !withdrawnIds.has(approval.id));

  const handleReview = (id: string, result: "approved" | "rejected", reviewRemark?: string) => {
    const approval = approvals.find((candidate) => candidate.id === id);
    const task = approval ? getApprovalTaskContext(approval) : null;
    onReview(id, result, reviewRemark);
    setReviewToast({
      result,
      message: result === "approved"
        ? task?.isDeviceUnbind ? "已批准该设备解绑" : task?.routesToTaskCenter ? `${task.displayName}已获批准，已进入任务中心。` : `${task?.displayName ?? "审批申请"}已获${task?.reviewerLabel ?? "审批人"}批准。`
        : `${task?.displayName ?? "审批申请"}已驳回。`,
    });
  };
  const handleReapply = (id: string, submissionRemark?: string) => {
    onReapply(id, submissionRemark);
    setDetailApproval(null);
  };

  return (
    <section className="overflow-hidden rounded-[8px] border border-[#dfe1e8] bg-white font-['PingFang_SC:Regular',sans-serif]" aria-label={t.title}>
      <header className="flex h-[68px] items-center px-5 pb-4 pt-6">
        <h1 className="font-['PingFang_SC:Semibold',sans-serif] text-[20px] font-semibold leading-7 text-[#141414]">{t.title}</h1>
      </header>

      <div className="rounded-b-[6px] bg-white px-5 py-[2px]">
        <nav className="border-b border-[#dfe1e8]" aria-label={t.title}>
          <div className="flex items-start">
            {(["initiated", "pending", "processed"] as const).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`relative p-2 font-['PingFang_SC:Regular',sans-serif] transition-colors ${isActive ? "border-b-[3px] border-[#1450f5]" : "border-b-[3px] border-transparent hover:bg-[#fafbfc]"}`}
                >
                  <span className={`flex items-center rounded-[3px] bg-white px-2 py-[5px] text-[14px] leading-[22px] ${isActive ? "font-medium text-[#1450f5]" : "text-[#676a72]"}`}>
                    {tab === "initiated" ? t.initiated : tab === "pending" ? t.pending : t.processed}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        {rows.length === 0 ? (
          <div className="mt-6 flex h-[492px] w-full flex-col items-center justify-center">
            <ImageWithFallback src={emptyApprovalIllustration} alt={t.emptyTitle} className="mb-[-8px] size-[200px] object-cover" />
            <div className="flex flex-col items-center gap-2 whitespace-nowrap">
              <p className="font-['PingFang_SC:Semibold',sans-serif] text-[16px] font-semibold leading-6 text-[#141414]">{t.emptyTitle}</p>
              <p className="text-[12px] leading-5 text-[#676a72]">{activeTab === "initiated" ? t.emptyInitiated : activeTab === "pending" ? t.emptyPending : t.emptyProcessed}</p>
            </div>
          </div>
        ) : (
          <>
        <div className="mt-6 overflow-x-auto rounded-[6px] border border-[#dfe1e8]">
          <table className="w-full min-w-[940px] table-fixed border-collapse text-left text-[14px] leading-[22px]">
            <colgroup>
              <col />
              {activeTab === "pending" && <col className="w-[220px]" />}
              <col className="w-[168px]" />
              {activeTab !== "pending" && <col className="w-[145px]" />}
              {(activeTab === "initiated" || activeTab === "processed") && <col className="w-[168px]" />}
              {activeTab !== "pending" && <col className="w-[120px]" />}
              <col className="w-[145px]" />
              <col className="w-[48px]" />
            </colgroup>
            <thead className="bg-[#f5f7fa] text-[#8f9195]">
              <tr className="h-[46px] border-b border-[#dfe1e8]">
                <th scope="col" className="px-6 py-3 font-normal">{t.content}</th>
                {activeTab === "pending" && <th scope="col" className="px-6 py-3 font-normal">{t.submitter}</th>}
                <th scope="col" className="px-6 py-3 font-normal">{t.initiatedAt}</th>
                {activeTab !== "pending" && <th scope="col" className="px-6 py-3 font-normal">{activeTab === "initiated" || activeTab === "processed" ? t.approver : t.currentNode}</th>}
                {activeTab === "initiated" && <th scope="col" className="px-6 py-3 font-normal">{t.completedAt}</th>}
                {activeTab === "processed" && <th scope="col" className="px-6 py-3 font-normal">{t.approvalAt}</th>}
                {activeTab !== "pending" && <th scope="col" className="px-6 py-3 font-normal">{t.status}</th>}
                <th scope="col" className="px-7 py-3 font-normal">{t.action}</th>
                <th scope="col" className="px-4 py-3"><span className="sr-only">{t.taskDetails}</span></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.id}
                  tabIndex={0}
                  onClick={() => setDetailApproval(row)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") setDetailApproval(row);
                  }}
                  className="h-[54px] cursor-pointer border-b border-[#e7e7e7] bg-white last:border-b-0 hover:bg-[#fafbfc] focus-visible:bg-[#f3f6fe] focus-visible:outline-none"
                >
                  <td className="truncate px-6 py-4 text-[#141414]">{row.content}</td>
                  {activeTab === "pending" && <td className="truncate px-6 py-4 text-[#141414]">{row.initiatorEmail}</td>}
                  <td className="whitespace-nowrap px-6 py-4 text-[#141414]">{row.initiatedAt}</td>
                  {activeTab !== "pending" && <td className="truncate px-6 py-4 text-[#141414]">{activeTab === "initiated" ? (row.approverRole ?? row.approverName) : activeTab === "processed" ? row.approverEmail : row.currentNode}</td>}
                  {activeTab === "initiated" && <td className="whitespace-nowrap px-6 py-4 text-[#141414]">{row.completedAt ?? "-"}</td>}
                  {activeTab === "processed" && <td className="whitespace-nowrap px-6 py-4 text-[#141414]">{row.completedAt ?? "-"}</td>}
                  {activeTab !== "pending" && <td className="px-6 py-4"><TableStatus status={row.status} language={language} /></td>}
                  <td className="px-6 py-4">
                    {activeTab === "initiated" && row.status === "pending" ? (
                      <button type="button" onClick={(event) => { event.stopPropagation(); setWithdrawnIds((current) => new Set(current).add(row.id)); }} className="rounded-[3px] whitespace-nowrap text-[#1450f5] hover:underline">{t.withdraw}</button>
                    ) : activeTab === "pending" && row.status === "pending" ? (
                      <div className="flex items-center gap-6 whitespace-nowrap">
                        <button type="button" onClick={(event) => { event.stopPropagation(); handleReview(row.id, "approved"); }} className="rounded-[3px] text-[#1450f5] hover:underline">{t.agree}</button>
                        <button type="button" onClick={(event) => { event.stopPropagation(); setDetailApproval(row); }} className="rounded-[3px] text-[#1450f5] hover:underline">{t.reject}</button>
                      </div>
                    ) : row.status === "rejected" ? (
                      <button type="button" onClick={(event) => { event.stopPropagation(); setDetailApproval(row); }} className="rounded-[3px] whitespace-nowrap text-[#1450f5] hover:underline">{t.viewReason}</button>
                    ) : <span className="text-[#8f9195]">—</span>}
                  </td>
                  <td className="px-4 py-[11px]">
                    <button type="button" aria-label={t.taskDetails} onClick={(event) => { event.stopPropagation(); setDetailApproval(row); }} className="flex size-8 items-center justify-center rounded-full hover:bg-[#f5f7fa]">
                      <span className="relative size-4 overflow-hidden" aria-hidden="true">
                        <span className="absolute inset-[19.27%_33.98%_18.23%_31.25%]">
                          <svg className="block size-full rotate-180" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 5.56346 10" width="5.56346">
                            <path clipRule="evenodd" d={tableSvgPaths.p2f116d80} fill="#8F9195" fillRule="evenodd" />
                          </svg>
                        </span>
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="flex h-16 items-center justify-between px-6 text-[14px] leading-[22px] text-[#676a72]">
          <span>{t.total} {rows.length} {t.records}</span>
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Previous page" disabled className="flex size-8 items-center justify-center rounded-[4px] text-[#abadb2] disabled:cursor-not-allowed">‹</button>
            <span className="flex size-8 items-center justify-center rounded-[4px] bg-[#1450f5] text-white">1</span>
            <span>{t.page}</span>
          </div>
        </footer>
          </>
        )}
      </div>

      {reviewToast && (
        <div role="status" className="fixed left-1/2 top-[68px] z-[140] flex -translate-x-1/2 items-center gap-6 rounded-[6px] border-[0.5px] border-[#c8cad0] bg-white px-4 py-[13px] text-[14px] leading-[22px] text-[#141414] shadow-[0_8px_10px_rgba(0,0,0,0.1)]">
          <div className="flex items-center gap-2">
            <span className="relative size-5 shrink-0" aria-hidden="true"><svg className="absolute inset-[6.25%] size-[87.5%]" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5"><path d={toastSvgPaths.p2cd67100} fill={reviewToast.result === "approved" ? "#1ED273" : "#F51414"} /></svg></span>
            <span className="whitespace-nowrap">{reviewToast.message}</span>
          </div>
          <button type="button" aria-label={t.close} onClick={() => setReviewToast(null)} className="relative flex size-4 shrink-0 items-center justify-center rounded-[3px] hover:bg-[#f5f7fa]"><span className="absolute inset-[25.03%]"><svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99031 7.99033"><path d={toastSvgPaths.p1e5ad00} fill="#676A72" /></svg></span></button>
        </div>
      )}
      {detailApproval && (
        <TaskDetailsDrawer
          approval={detailApproval}
          language={language}
          currentUser={currentUser}
          pendingAsInProgress={activeTab === "initiated"}
          onClose={() => setDetailApproval(null)}
          onReview={(result, reviewRemark) => { handleReview(detailApproval.id, result, reviewRemark); setDetailApproval(null); }}
        />
      )}
    </section>
  );
}
