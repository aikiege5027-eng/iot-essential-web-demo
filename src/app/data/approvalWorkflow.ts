export type ApprovalOutcome = "pending" | "approved" | "rejected";

export type UpgradeDetail = {
  deviceType: string;
  hardwareType: string;
  packageName: string;
  quantity: string;
};

export type UpgradeApproval = {
  id: string;
  content: string;
  initiatorEmail: string;
  initiatorName: string;
  initiatedAt: string;
  scheduledAt: string;
  currentNode: string;
  approverEmail: string;
  approverName: string;
  approverRole?: string;
  completedAt?: string;
  status: ApprovalOutcome;
  packages: Record<string, string>;
  upgradeDetails?: UpgradeDetail[];
  submissionRemark?: string;
  reviewRemark?: string;
};

export type AppNotification = {
  id: string;
  recipientEmail: string;
  message: string;
  kind: "approval" | "approved" | "rejected";
  unread: boolean;
  title?: string;
  detail?: string;
  timeLabel?: string;
  actionLabel?: string;
  actionTarget?: "approval" | "task";
  remark?: string;
};

export type ApprovalTaskContext = {
  operation: string;
  displayName: string;
  isDeviceUnbind: boolean;
  routesToTaskCenter: boolean;
  reviewerLabel: string;
};

/** Returns the user-facing task vocabulary used across approval notifications and toasts. */
export function getApprovalTaskContext(approval: Pick<UpgradeApproval, "content" | "approverRole">): ApprovalTaskContext {
  const reviewerLabel = approval.approverRole === "L2人员" ? "L2" : "系统管理员";

  if (approval.content.includes("设备解绑")) {
    return { operation: "设备解绑", displayName: "设备解绑申请", isDeviceUnbind: true, routesToTaskCenter: false, reviewerLabel };
  }
  if (approval.content.includes("批量配置更新")) {
    return { operation: "批量配置更新", displayName: "批量配置更新任务", isDeviceUnbind: false, routesToTaskCenter: true, reviewerLabel };
  }
  if (approval.content.includes("批量设备重启")) {
    return { operation: "批量设备重启", displayName: "批量设备重启任务", isDeviceUnbind: false, routesToTaskCenter: true, reviewerLabel };
  }
  return { operation: "批量系统升级", displayName: "批量系统升级任务", isDeviceUnbind: false, routesToTaskCenter: true, reviewerLabel };
}

export function getApprovalDeviceCount(approval: Pick<UpgradeApproval, "packages" | "upgradeDetails">): number {
  return approval.upgradeDetails?.reduce((total, detail) => total + Number(detail.quantity.replace(/,/g, "")), 0) ?? Object.keys(approval.packages).length;
}
