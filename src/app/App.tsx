import { useState } from "react";
import LoginPage from "./components/LoginPage";
import { ACCOUNTS, getAccountEdition, getEditionByEmail, QIANFAN_ADMIN_EMAIL, registerInvitedAccount, type AppAccount, type AppEdition, type PendingInvite } from "./data/accounts";
import { getApprovalDeviceCount, getApprovalTaskContext, type AppNotification, type UpgradeApproval, type UpgradeDetail } from "./data/approvalWorkflow";
import Events from "./components/EventsApp";
import type { ManagedUser } from "./data/userManagement";
import IoTMobileApp from "./components/IoTMobileApp";

type CoreTab = "liveData" | "masterData" | "events";
/** 演示用的 MFA 动态验证码：固定 6 个 0（真实环境由用户手机上的验证 App 生成） */
const MFA_DEMO_CODE = "000000";
type Lang = "en" | "cn";


type DemoApprovalSeed = UpgradeApproval;

const DEMO_APPROVALS: DemoApprovalSeed[] = [
  { id: "demo-zhao-reboot-pending", content: "批量设备重启 120台", initiatorEmail: "zhao.min@kone.com", initiatorName: "赵敏", initiatedAt: "2026-08-19 09:20:00", scheduledAt: "2026-08-20 02:00:00", currentNode: "系统管理员审批", approverEmail: "mingyuan.zhang@kone.com", approverName: "张明远", approverRole: "系统管理员", status: "pending", packages: { reboot: "设备重启" }, submissionRemark: "请在凌晨低峰时段执行。" },
  { id: "demo-zhao-upgrade-320-pending", content: "KONE Connection 320 & KCE-320 & 批量系统升级 & ES-NKE-ALL-99.0.2.2 & 升级数量1000台", initiatorEmail: "zhao.min@kone.com", initiatorName: "赵敏", initiatedAt: "2026-08-18 10:16:00", scheduledAt: "2026-08-20 02:00:00", currentNode: "系统管理员审批", approverEmail: "mingyuan.zhang@kone.com", approverName: "张明远", approverRole: "系统管理员", status: "pending", packages: { "KONE Connection 320": "ES-NKE-ALL-99.0.2.2" }, upgradeDetails: [{ deviceType: "KONE Connection 320", hardwareType: "KCE-320", packageName: "ES-NKE-ALL-99.0.2.2", quantity: "1,000" }], submissionRemark: "已完成设备连接状态核验。" },
  { id: "demo-zhao-config-330-pending", content: "KONE Connection 330 & KCE-330 & 批量配置更新 & 更新数量300台", initiatorEmail: "zhao.min@kone.com", initiatorName: "赵敏", initiatedAt: "2026-08-17 15:40:00", scheduledAt: "2026-08-21 02:00:00", currentNode: "系统管理员审批", approverEmail: "mingyuan.zhang@kone.com", approverName: "张明远", approverRole: "系统管理员", status: "pending", packages: { "KONE Connection 330": "配置更新" }, submissionRemark: "配置项已由区域运维复核。" },
  { id: "demo-zhao-upgrade-310-approved", content: "KONE Connection 310 & KCE-310 & 批量系统升级 & ES-NKE-ALL-98.8.0.1 & 升级数量2000台", initiatorEmail: "zhao.min@kone.com", initiatorName: "赵敏", initiatedAt: "2026-08-16 14:30:00", completedAt: "2026-08-16 15:08:00", scheduledAt: "2026-08-18 02:00:00", currentNode: "已完成", approverEmail: "mingyuan.zhang@kone.com", approverName: "张明远", approverRole: "系统管理员", status: "approved", packages: { "KONE Connection 310": "ES-NKE-ALL-98.8.0.1" }, upgradeDetails: [{ deviceType: "KONE Connection 310", hardwareType: "KCE-310", packageName: "ES-NKE-ALL-98.8.0.1", quantity: "2,000" }], reviewRemark: "升级计划已确认。" },
  { id: "demo-li-unbind-over-limit-rejected", content: "设备编号 KONE-CN-320-000128 & 设备解绑", initiatorEmail: "jianguo.li@kone.com", initiatorName: "李建国", initiatedAt: "2026-08-14 09:45:00", completedAt: "2026-08-14 10:02:00", scheduledAt: "-", currentNode: "已驳回", approverEmail: "liu.yang@kone.com", approverName: "刘洋", approverRole: "L2人员", status: "rejected", packages: { "KONE-CN-320-000128": "设备解绑" }, reviewRemark: "请补充现场设备确认信息后重新申请。" },
  { id: "demo-zhao-upgrade-330-rejected", content: "KONE Connection 330 & KCE-330 & 批量系统升级 & ES-NKE-ALL-100.0.0 & 升级数量500台", initiatorEmail: "zhao.min@kone.com", initiatorName: "赵敏", initiatedAt: "2026-08-13 13:22:00", completedAt: "2026-08-13 14:05:00", scheduledAt: "2026-08-16 02:00:00", currentNode: "已驳回", approverEmail: "mingyuan.zhang@kone.com", approverName: "张明远", approverRole: "系统管理员", status: "rejected", packages: { "KONE Connection 330": "ES-NKE-ALL-100.0.0" }, reviewRemark: "当前版本不满足灰度升级前置条件。" },
  { id: "demo-zhao-pending", content: "KONE Connection 310 & KCE-310 & 批量系统升级 & ES-NKE-ALL-98.8.0.1 & 升级数量200台", initiatorEmail: "zhao.min@kone.com", initiatorName: "赵敏", initiatedAt: "2026-08-18 16:20:00", scheduledAt: "2026-08-21 02:00:00", currentNode: "系统管理员审批", approverEmail: "mingyuan.zhang@kone.com", approverName: "张明远", approverRole: "系统管理员", status: "pending", packages: { "KONE Connection 310": "ES-NKE-ALL-98.8.0.1" }, submissionRemark: "已完成现场设备核验。" },
  { id: "demo-zhao-config-pending", content: "KONE Connection 320 & KCE-320 & 批量配置更新 & 更新数量80台", initiatorEmail: "zhao.min@kone.com", initiatorName: "赵敏", initiatedAt: "2026-08-18 14:36:00", scheduledAt: "2026-08-21 02:00:00", currentNode: "系统管理员审批", approverEmail: "mingyuan.zhang@kone.com", approverName: "张明远", approverRole: "系统管理员", status: "pending", packages: { "KONE Connection 320": "配置更新" }, submissionRemark: "已由现场负责人确认配置范围。" },
  { id: "demo-li-unbind-pending", content: "设备编号 KONE-CN-330-000756 & 设备解绑", initiatorEmail: "jianguo.li@kone.com", initiatorName: "李建国", initiatedAt: "2026-08-18 09:08:00", scheduledAt: "-", currentNode: "L2人员审批", approverEmail: "liu.yang@kone.com", approverName: "刘洋", approverRole: "L2人员", status: "pending", packages: { "KONE-CN-330-000756": "设备解绑" }, submissionRemark: "设备已完成现场停用确认。" },
  { id: "demo-li-rejected", content: "设备编号 KONE-CN-310-000068 & 设备解绑", initiatorEmail: "jianguo.li@kone.com", initiatorName: "李建国", initiatedAt: "2026-08-12 13:42:00", completedAt: "2026-08-12 14:03:00", scheduledAt: "-", currentNode: "已驳回", approverEmail: "liu.yang@kone.com", approverName: "刘洋", approverRole: "L2人员", status: "rejected", packages: { "KONE-CN-310-000068": "设备解绑" }, reviewRemark: "当前设备存在未关闭告警。" },
];

// Mobile uses "archive" for 设备档案; desktop uses "masterData"
function toMobileTab(tab: CoreTab): "liveData" | "archive" | "events" {
  return tab === "masterData" ? "archive" : tab;
}
function fromMobileTab(tab: "liveData" | "archive" | "events"): CoreTab {
  return tab === "archive" ? "masterData" : tab;
}

export default function App() {
  const [coreTab, setCoreTab] = useState<CoreTab>("liveData");
  const [language, setLanguage] = useState<Lang>("cn");
  // 默认落地页是登录页：启动时没有登录用户，需要在登录页选择平台和用户后进入。
  const [currentUser, setCurrentUser] = useState<AppAccount | null>(null);
  const [approvals, setApprovals] = useState<UpgradeApproval[]>(DEMO_APPROVALS);
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  // 用户管理里被冻结 / 注销的账号：冻结后无法登录（登录页提示已冻结），注销后账号不存在（演示：只存在内存里，刷新后恢复）
  const [frozenEmails, setFrozenEmails] = useState<string[]>([]);
  const [deregisteredEmails, setDeregisteredEmails] = useState<string[]>([]);
  // 管理员刚创建、还没设置过密码的用户（收到了"账号创建完成"的邮件，链接 = 登录页左下角的「首次登录设置链接」）
  const [invites, setInvites] = useState<PendingInvite[]>([]);
  // 演示中创建过的用户：放在 App 里，管理员退出再登录后名单里还能看到（刷新页面后消失）
  const [createdUsers, setCreatedUsers] = useState<ManagedUser[]>([]);
  // 邮箱 → 是否已绑定 MFA：首次登录后视为已绑定（用户用手机扫码绑定的过程不模拟），管理员「MFA解绑」后为 false；
  // 已绑定的账号登录时，输完账号密码还要输动态验证码。没有记录的账号（如默认演示账号）不需要。
  const [mfaOverrides, setMfaOverrides] = useState<Record<string, boolean>>({});
  const [taskBadgeCount, setTaskBadgeCount] = useState(2);
  const edition: AppEdition = getAccountEdition(currentUser ?? undefined);
  // 审批与通知按平台版本隔离：仟帆版本看不到 IoT Essential 的审批单，反之亦然。
  const editionApprovals = approvals.filter((approval) => getEditionByEmail(approval.initiatorEmail) === edition);
  // 登录页「忘记密码」修改后的密码（演示：只存在内存里，刷新页面后恢复为账号的默认密码）
  const [passwordOverrides, setPasswordOverrides] = useState<Record<string, string>>({});
  const getPassword = (email: string) => passwordOverrides[email] ?? ACCOUNTS.find((account) => account.email === email)?.password ?? "";
  const handleLogin = (email: string, password: string, loginEdition: AppEdition, mfaCode?: string): "ok" | "invalid" | "frozen" | "mfa" | "mfa-invalid" => {
    // 账号必须属于登录页上选择的平台，否则按账号或密码错误处理；已注销的账号等同于不存在。
    const account = ACCOUNTS.find((candidate) => candidate.email === email && getPassword(candidate.email) === password && getAccountEdition(candidate) === loginEdition);
    if (!account || deregisteredEmails.includes(account.email)) return "invalid";
    // 被管理员冻结的账号无法登录
    if (frozenEmails.includes(account.email)) return "frozen";
    // 已绑定 MFA：账号密码通过后还要动态验证码（没带验证码时先要求输入，带了就校验）
    if (mfaOverrides[account.email]) {
      if (mfaCode === undefined) return "mfa";
      if (mfaCode !== MFA_DEMO_CODE) return "mfa-invalid";
    }
    // 登录态里带上当前有效密码，账号菜单「修改密码」校验原密码时用的就是它
    setCurrentUser({ ...account, password });
    return "ok";
  };
  /**
   * 首次登录：用户点邮件里的链接，设置好登录密码后直接登录系统。
   * 把被邀请的用户登记成可登录的账号，并视为已绑定 MFA（之后每次登录都要动态验证码）。
   */
  const activateInvite = (invite: PendingInvite, password: string): "ok" | "frozen" => {
    if (frozenEmails.includes(invite.email)) return "frozen";
    const account = registerInvitedAccount(invite, password);
    setInvites((current) => current.filter((item) => item.email !== invite.email));
    setMfaOverrides((current) => ({ ...current, [invite.email]: true }));
    setCurrentUser({ ...account, password });
    return "ok";
  };

  const formatNow = () => new Intl.DateTimeFormat("sv-SE", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date()).replace(" ", " ");
  const formatNotificationTime = () => {
    const now = new Date();
    return `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
  };
  const submitUpgradeForApproval = ({ initiator, scheduledAt, packages, upgradeDetails, submissionRemark }: { initiator: AppAccount; scheduledAt: string; packages: Record<string, string>; upgradeDetails?: UpgradeDetail[]; submissionRemark?: string }) => {
    // 仟帆版本目前只有一位管理员，审批人就是该管理员；IoT Essential 仍由系统管理员审批。
    const approver = ACCOUNTS.find((account) => account.email === (getAccountEdition(initiator) === "qianfan" ? QIANFAN_ADMIN_EMAIL : "mingyuan.zhang@kone.com"))!;
    const totalDevices = Object.keys(packages).length;
    const deviceCount = upgradeDetails?.reduce((total, detail) => total + Number(detail.quantity), 0) ?? totalDevices;
    const approval: UpgradeApproval = { id: `upgrade-${Date.now()}`, content: `批量系统升级：${totalDevices} 个硬件类型`, initiatorEmail: initiator.email, initiatorName: initiator.name, initiatedAt: formatNow(), scheduledAt, currentNode: "系统管理员审批", approverEmail: approver.email, approverName: approver.name, approverRole: "系统管理员", status: "pending", packages, upgradeDetails, submissionRemark };
    const task = getApprovalTaskContext(approval);
    setApprovals((current) => [approval, ...current]);
    setNotifications((current) => [{ id: `notification-${Date.now()}`, recipientEmail: approver.email, message: `当前您有一条${task.displayName}待审批`, title: "审批请求", detail: `${initiator.email}发起${deviceCount} 台设备${task.operation}。`, timeLabel: formatNotificationTime(), actionLabel: "查看审批", actionTarget: "approval", remark: submissionRemark?.trim() || undefined, kind: "approval", unread: true }, ...current]);
  };
  const reapplyUpgradeApproval = (id: string, submissionRemark?: string) => {
    const rejectedApproval = approvals.find((approval) => approval.id === id && approval.status === "rejected");
    if (!rejectedApproval) return;
    const resubmission: UpgradeApproval = { ...rejectedApproval, id: `upgrade-${Date.now()}`, initiatedAt: formatNow(), currentNode: rejectedApproval.approverRole === "L2人员" ? "L2审批" : "系统管理员审批", status: "pending", submissionRemark: submissionRemark?.trim() || undefined, reviewRemark: undefined };
    const task = getApprovalTaskContext(resubmission);
    const deviceCount = getApprovalDeviceCount(resubmission);
    const detail = task.isDeviceUnbind
      ? `${resubmission.initiatorEmail}重新发起设备解绑申请。`
      : `${resubmission.initiatorEmail}重新发起${deviceCount} 台设备${task.operation}。`;
    setApprovals((current) => [resubmission, ...current]);
    setNotifications((current) => [{ id: `notification-${Date.now()}`, recipientEmail: resubmission.approverEmail, message: `当前您有一条重新提交的${task.displayName}待审批`, title: "审批请求", detail, timeLabel: formatNotificationTime(), actionLabel: "查看审批", actionTarget: "approval", remark: submissionRemark?.trim() || undefined, kind: "approval", unread: true }, ...current]);
  };
  const reviewUpgradeApproval = (id: string, result: "approved" | "rejected", reviewRemark?: string) => {
    const reviewed = approvals.find((approval) => approval.id === id);
    const completedAt = result === "approved" ? formatNow() : undefined;
    setApprovals((current) => current.map((approval) => approval.id === id ? { ...approval, status: result, currentNode: result === "approved" ? "已完成" : "已驳回", completedAt, reviewRemark: reviewRemark?.trim() || undefined } : approval));
    if (reviewed) {
      const approved = result === "approved";
      const task = getApprovalTaskContext(reviewed);
      if (approved && !task.isDeviceUnbind) setTaskBadgeCount((current) => current + 1);
      const deviceCount = getApprovalDeviceCount(reviewed);
      const detail = task.isDeviceUnbind
        ? approved
          ? `您发起的解绑请求已被批准，该设备已解绑。`
          : `您发起的设备解绑申请，已被${task.reviewerLabel}驳回。`
        : approved
          ? `您发起的${deviceCount} 台设备${task.operation}，已被${task.reviewerLabel}批准。您可进入任务中心查看执行状态。`
          : `您发起的${deviceCount} 台设备${task.operation}，已被${task.reviewerLabel}驳回。`;
      setNotifications((current) => [{ id: `notification-${Date.now()}`, recipientEmail: reviewed.initiatorEmail, message: approved ? `${task.displayName}已通过审批。` : `${task.displayName}已被驳回。`, title: approved ? `${task.displayName}已被批准` : `${task.displayName}被驳回`, detail, timeLabel: formatNotificationTime(), actionLabel: approved && task.routesToTaskCenter ? "前往任务中心" : "查看审批", actionTarget: approved && task.routesToTaskCenter ? "task" : "approval", remark: reviewRemark?.trim() || undefined, kind: approved ? "approved" : "rejected", unread: true }, ...current]);
    }
  };
  const markNotificationsRead = (email: string) => setNotifications((current) => current.map((notification) => notification.recipientEmail === email ? { ...notification, unread: false } : notification));

  if (!currentUser) {
    return (
      <LoginPage
        language={language}
        onLanguageChange={setLanguage}
        onLogin={handleLogin}
        invites={invites}
        onFirstLogin={activateInvite}
        getPassword={getPassword}
        onPasswordReset={(email, newPassword) => setPasswordOverrides((current) => ({ ...current, [email]: newPassword }))}
      />
    );
  }

  return (
    <>
      {/* Desktop layout (≥ 768px) */}
      <div className="hidden md:block">
        <Events
          activeTabOverride={coreTab}
          onCoreTabChange={(tab) => setCoreTab(tab)}
          languageOverride={language}
          onLanguageChange={(lang) => setLanguage(lang)}
          currentUser={currentUser}
          onLogout={() => setCurrentUser(null)}
          onSwitchAccount={(account) => setCurrentUser(account)}
          approvals={editionApprovals}
          taskBadgeCount={taskBadgeCount}
          notifications={notifications.filter((notification) => notification.recipientEmail === currentUser.email)}
          onSubmitUpgradeApproval={submitUpgradeForApproval}
          onReviewUpgradeApproval={reviewUpgradeApproval}
          onReapplyUpgradeApproval={reapplyUpgradeApproval}
          onMarkNotificationsRead={() => markNotificationsRead(currentUser.email)}
          accountControl={{
            frozenEmails,
            deregisteredEmails,
            onFrozenChange: (email, frozen) => setFrozenEmails((current) => (frozen ? [...new Set([...current, email])] : current.filter((item) => item !== email))),
            onDeregister: (email) => {
              setDeregisteredEmails((current) => [...new Set([...current, email])]);
              setInvites((current) => current.filter((item) => item.email !== email));
              setCreatedUsers((current) => current.filter((item) => item.email !== email));
            },
            mfaOverrides,
            onMfaUnbind: (email) => setMfaOverrides((current) => ({ ...current, [email]: false })),
            onUserCreated: (invite, user) => {
              setInvites((current) => [...current.filter((item) => item.email !== invite.email), invite]);
              setCreatedUsers((current) => [user, ...current]);
            },
            createdUsers,
          }}
        />
      </div>
      {/* Mobile layout (< 768px) */}
      <div className="md:hidden">
          <IoTMobileApp
            activeTabOverride={toMobileTab(coreTab)}
            onCoreTabChange={(tab) => setCoreTab(fromMobileTab(tab))}
            languageOverride={language}
            onLanguageChange={(lang) => setLanguage(lang)}
            edition={edition}
            email={currentUser.email}
          />
      </div>
    </>
  );
}
