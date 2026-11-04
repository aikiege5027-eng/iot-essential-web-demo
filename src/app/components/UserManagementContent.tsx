import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Dialog, Dropdown, Input, Link, MessagePlugin, Select } from "tdesign-react";
import type { AppEdition } from "../data/accounts";
import { getInitialManagedRoles } from "../data/roleManagement";
import {
  getInitialManagedUsers,
  PROTECTED_ROLES,
  USER_ROLES,
  type ManagedUser,
  type ManagedUserStatus,
} from "../data/userManagement";
import type { PendingInvite } from "../data/accounts";
import CreateUserDialog, { type UniqueField } from "./CreateUserDialog";
import { StatusLabel } from "./StatusLabel";
import { IoTListPageTemplate, type IoTFilterField, type IoTTableColumn } from "./templates/iot-list-page";

type Language = "en" | "cn";

/**
 * 用户管理（通力 / 仟帆共用）。
 *
 * 页面骨架使用 IoT 列表页模板的「两个筛选项 + 一个操作按钮」形态
 * （Figma IOT Delivery 9289:27194）：标题单独一行，筛选字段和「查询」按钮同一行，
 * 按钮靠右、与输入框底部对齐。
 *
 * 关键词 / 角色只在点击「查询」（或在关键词框按回车）时生效，与批量操作页一致。
 * 「禁用 / 启用」只改本地状态，没有接后端；「重置密码」（仅仟帆）二次确认后只弹成功提示；「编辑」尚无设计稿，先给出开发中提示。
 */

const PAGE_SIZE = 10;
const ALL_ROLES = "all";

const copy = {
  cn: {
    title: "用户管理",
    keywordLabel: "工号/姓名/邮箱",
    keywordPlaceholder: "请输入工号、姓名、邮箱",
    roleLabel: "角色",
    rolePlaceholder: "全部角色",
    query: "查询",
    createUser: "创建用户",
    createdOk: (email: string) => `创建成功，账号创建完成的邮件已发送至 ${email}`,
    accountExists: "当前账号已存在，请联系平台处理",
    columns: { index: "序号", employeeId: "工号", name: "姓名", email: "邮箱", phone: "手机号", role: "角色", createdAt: "创建时间", tenant: "所属租户", status: "状态", actions: "操作" },
    normal: "正常",
    disabled: "已禁用",
    frozen: "冻结",
    edit: "编辑",
    more: "更多",
    disable: "禁用",
    enable: "启用",
    deregister: "注销",
    resetPassword: "重置密码",
    passwordReset: (email: string) => `已向 ${email} 发送重置密码的邮件`,
    resetTitle: "重置密码",
    resetBody: () => "该用户会收到重置密码的邮件，用户可通过邮件内链接修改登录密码。",
    resetOk: "确认",
    mfaUnbind: "MFA解绑",
    mfaUnbindTitle: "MFA解绑",
    mfaUnbindBody: () => "解除绑定后，会向用户发送新的MFA绑定邮件，邮件内包含个人专属二维码。",
    mfaUnbindOk: "确认",
    mfaUnbound: (name: string, email: string) => `已解除 ${name} 的 MFA 绑定，新的绑定邮件已发送至 ${email}`,
    disableTitle: "禁用用户",
    disableBody: () => "禁用后该用户将无法再次访问当前系统，是否确认操作？",
    disableOk: "确认",
    deregisterTitle: "注销用户",
    deregisterBody: () => "注销后该用户的所有数据都将清空，且无法恢复，请慎重操作。",
    deregisterOk: "确认",
    savedOk: "保存成功",
    cancel: "取消",
    deregistered: (name: string) => `已注销 ${name}`,
    total: (count: number) => `共 ${count} 条数据`,
    caption: "用户列表",
    empty: "暂无符合条件的用户",
    editPending: "编辑用户功能开发中",
    disabledDone: (name: string) => `已禁用 ${name}`,
    enabledDone: (name: string) => `已启用 ${name}`,
  },
  en: {
    title: "User Management",
    keywordLabel: "Employee ID / Name / Email",
    keywordPlaceholder: "Enter employee ID, name or email",
    roleLabel: "Role",
    rolePlaceholder: "All roles",
    query: "Search",
    createUser: "Create User",
    createdOk: (email: string) => `User created. An account-created email was sent to ${email}`,
    accountExists: "This account already exists. Please contact the platform.",
    columns: { index: "No.", employeeId: "Employee ID", name: "Name", email: "Email", phone: "Phone", role: "Role", createdAt: "Created At", tenant: "Tenant", status: "Status", actions: "Actions" },
    normal: "Active",
    disabled: "Disabled",
    frozen: "Frozen",
    edit: "Edit",
    more: "More",
    disable: "Disable",
    enable: "Enable",
    deregister: "Deregister",
    resetPassword: "Reset Password",
    passwordReset: (email: string) => `A password reset email was sent to ${email}`,
    resetTitle: "Reset password",
    resetBody: () => "The user will receive a password reset email and can change the login password through the link in it.",
    resetOk: "Confirm",
    mfaUnbind: "Unbind MFA",
    mfaUnbindTitle: "Unbind MFA",
    mfaUnbindBody: () => "After unbinding, a new MFA binding email with a personal QR code will be sent to the user.",
    mfaUnbindOk: "Confirm",
    mfaUnbound: (name: string, email: string) => `MFA unbound for ${name}. A new binding email was sent to ${email}`,
    disableTitle: "Disable user",
    disableBody: () => "After being disabled, the user can no longer access this system. Continue?",
    disableOk: "Confirm",
    deregisterTitle: "Deregister user",
    deregisterBody: () => "After deregistration, all data of this user will be cleared and cannot be recovered. Proceed with caution.",
    deregisterOk: "Confirm",
    savedOk: "Saved",
    cancel: "Cancel",
    deregistered: (name: string) => `${name} deregistered`,
    total: (count: number) => `${count} users`,
    caption: "User list",
    empty: "No matching users",
    editPending: "Editing users is under development",
    disabledDone: (name: string) => `${name} disabled`,
    enabledDone: (name: string) => `${name} enabled`,
  },
};

type UserManagementContentProps = {
  language: Language;
  edition: AppEdition;
  /** 当前登录账号的邮箱：自己那一行不开放操作 */
  currentEmail: string;
  /**
   * 当前账号所属租户（仅仟帆租户管理员）。有值时为租户视角：只看到本租户员工、不显示「所属租户」列，
   * 创建用户只能选运营人员 / 前线维保员工，新用户归属本租户。为空时是仟帆管理员视角：看到全部租户员工，
   * 可禁用 / 注销，但创建用户只能是仟帆自己的系统管理员。
   */
  currentTenant?: string;
  /**
   * 账号的冻结 / 注销状态由 App 持有（仅仟帆），这样切换页面、重新进入后不会丢，登录页也能据此拦截：
   * 冻结的账号无法登录（提示"该用户账号已冻结，请联系系统管理员处理"），注销的账号从名单里消失、也无法登录。
   */
  accountControl?: AccountControl;
};

export type AccountControl = {
  frozenEmails: string[];
  deregisteredEmails: string[];
  onFrozenChange: (email: string, frozen: boolean) => void;
  onDeregister: (email: string) => void;
  /** MFA 绑定状态的覆盖：首次登录后为 true，解绑后为 false；没有记录的按名单自带的 mfaBound 算 */
  mfaOverrides: Record<string, boolean>;
  onMfaUnbind: (email: string) => void;
  /** 创建用户成功：系统向其邮箱发送"账号创建完成"的邮件（邮件里的链接 = 登录页的「首次登录设置链接」） */
  onUserCreated: (invite: PendingInvite, user: ManagedUser) => void;
  /** 本次演示中创建过的用户（App 持有，退出再登录、切换页面后还在名单里；刷新页面后消失） */
  createdUsers: ManagedUser[];
};

export default function UserManagementContent({ language, edition, currentEmail, currentTenant, accountControl }: UserManagementContentProps) {
  const t = copy[language];
  // 两个平台各有一份名单；用 key 在父级按 edition 重挂载，所以这里初始化一次即可。
  // 已注销的账号不再出现；已冻结的账号显示为「冻结」。
  const [users, setUsers] = useState<ManagedUser[]>(() =>
    [...(accountControl?.createdUsers ?? []), ...getInitialManagedUsers(edition)]
      .filter((user) => !accountControl?.deregisteredEmails.includes(user.email))
      .map((user) => (accountControl?.frozenEmails.includes(user.email) ? { ...user, status: "disabled" as const } : user)),
  );
  const [editingUser, setEditingUser] = useState<ManagedUser | null>(null);
  const [pendingMfaUnbind, setPendingMfaUnbind] = useState<ManagedUser | null>(null);
  const isMfaBound = (user: ManagedUser) => accountControl?.mfaOverrides[user.email] ?? user.mfaBound ?? false;
  const [keyword, setKeyword] = useState("");
  const [role, setRole] = useState("");
  const [appliedKeyword, setAppliedKeyword] = useState("");
  const [appliedRole, setAppliedRole] = useState("");
  const [page, setPage] = useState(1);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [pendingDeregister, setPendingDeregister] = useState<ManagedUser | null>(null);
  const [pendingDisable, setPendingDisable] = useState<ManagedUser | null>(null);
  const [pendingReset, setPendingReset] = useState<ManagedUser | null>(null);

  const submitQuery = () => {
    setAppliedKeyword(keyword.trim().toLowerCase());
    setAppliedRole(role);
    setPage(1);
  };

  // 租户视角只看本租户的人；整份名单仍保留在 users 里，账号判重按全平台进行。
  // 当前登录的管理员自己那一行固定在最前（新建用户排在它后面），其余按创建时间倒序。
  const filteredUsers = useMemo(() => {
    const matched = users.filter((user) => {
      if (currentTenant && user.tenant !== currentTenant) return false;
      if (appliedRole && user.role !== appliedRole) return false;
      if (!appliedKeyword) return true;
      return [user.employeeId, user.name, user.email].some((value) => value.toLowerCase().includes(appliedKeyword));
    });
    const self = matched.filter((user) => user.email === currentEmail);
    return [...self, ...matched.filter((user) => user.email !== currentEmail)];
  }, [users, appliedKeyword, appliedRole, currentTenant, currentEmail],
  );

  const pagedUsers = filteredUsers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  /** 唯一性：账号（邮箱）、工号不区分大小写，手机号按数字比较；弹窗据此在字段下方显示「已存在」。 */
  const isTaken = (field: UniqueField, value: string, exceptId?: string) => {
    const normalized = value.toLowerCase();
    return users.some((user) => {
      if (user.id === exceptId) return false; // 编辑时不和自己比
      if (field === "account") return user.email.toLowerCase() === normalized;
      if (field === "employeeId") return user.employeeId.toLowerCase() === normalized;
      return user.phone === value;
    });
  };

  /** 编辑用户：工号、姓名、手机号、角色可改，邮箱不可改；重复校验已在弹窗里做过，这里兜底。 */
  const saveEdit = ({ name, employeeId, phone, role }: { account: string; name: string; employeeId: string; phone: string; role: string }) => {
    if (!editingUser) return false;
    if ((employeeId && isTaken("employeeId", employeeId, editingUser.id)) || (phone && isTaken("phone", phone, editingUser.id))) {
      MessagePlugin.warning(t.accountExists, 3000);
      return false;
    }
    setUsers((current) => current.map((user) => (user.id === editingUser.id ? { ...user, name, employeeId, phone: phone || undefined, role } : user)));
    MessagePlugin.success(t.savedOk, 3000);
    return true;
  };

  /** 创建用户：重复校验已在弹窗里做过，这里再兜一次底（理论上不会走到），重复则提示并保持弹窗打开。 */
  const createUser = ({ account, name, employeeId, phone, role }: { account: string; name: string; employeeId: string; phone: string; role: string }) => {
    if (isTaken("account", account) || (employeeId && isTaken("employeeId", employeeId)) || (phone && isTaken("phone", phone))) {
      MessagePlugin.warning(t.accountExists, 3000);
      return false;
    }
    const now = new Date();
    const pad = (value: number) => String(value).padStart(2, "0");
    const createdAt = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    const created: ManagedUser = {
      id: `${edition}-created-${Date.now()}`,
      // 工号是选填项：没填就留空，列表里显示「-」
      employeeId,
      name,
      email: account,
      phone: phone || undefined,
      role,
      createdAt,
      status: "normal",
      // 租户管理员创建的人归属本租户；仟帆管理员创建的是仟帆自己的系统管理员，没有租户
      tenant: currentTenant,
    };
    setUsers((current) => [created, ...current]);
    // 清掉已应用的筛选并回到第一页，保证新用户马上能在列表顶部看到
    setKeyword("");
    setRole("");
    setAppliedKeyword("");
    setAppliedRole("");
    setPage(1);
    MessagePlugin.success(t.createdOk(account), 3000);
    // 通知 App 记下这个待首次登录的用户（登录页的「首次登录设置链接」据此进入"首次登录密码设置"）
    accountControl?.onUserCreated({ email: account, name, employeeId, phone, role, tenant: currentTenant }, created);
    return true;
  };

  /** 禁用需要二次确认（仟帆）；启用不需要。 */
  const confirmDisable = () => {
    if (!pendingDisable) return;
    setStatus(pendingDisable, "disabled");
    setPendingDisable(null);
  };

  /** 重置密码需要二次确认（仟帆）；演示环境不改本地数据，只提示重置成功。 */
  const confirmReset = () => {
    if (!pendingReset) return;
    MessagePlugin.success(t.passwordReset(pendingReset.email), 3000);
    setPendingReset(null);
  };

  /** 注销：账号被注销后从名单中移除（仅仟帆开放）。 */
  const confirmDeregister = () => {
    if (!pendingDeregister) return;
    const target = pendingDeregister;
    const remainingCount = filteredUsers.length - 1;
    setUsers((current) => current.filter((user) => user.id !== target.id));
    accountControl?.onDeregister(target.email);
    // 删到当前页没有数据时回退到最后一页
    setPage((current) => Math.min(current, Math.max(1, Math.ceil(remainingCount / PAGE_SIZE))));
    setPendingDeregister(null);
    MessagePlugin.success(t.deregistered(target.name), 3000);
  };

  /** MFA 解绑：二次确认后解除绑定，并向用户发送新的绑定邮件（演示：只提示） */
  const confirmMfaUnbind = () => {
    if (!pendingMfaUnbind) return;
    const target = pendingMfaUnbind;
    accountControl?.onMfaUnbind(target.email);
    setPendingMfaUnbind(null);
    MessagePlugin.success(t.mfaUnbound(target.name, target.email), 3000);
  };

  const setStatus = (user: ManagedUser, status: ManagedUserStatus) => {
    setUsers((current) => current.map((item) => (item.id === user.id ? { ...item, status } : item)));
    accountControl?.onFrozenChange(user.email, status === "disabled");
    MessagePlugin.success(status === "disabled" ? t.disabledDone(user.name) : t.enabledDone(user.name), 3000);
  };

  // 创建用户的角色下拉来自角色管理页的角色列表
  const roleNames = useMemo(() => getInitialManagedRoles(edition).map((item) => item.name), [edition]);
  const roleOptions = [{ label: t.rolePlaceholder, value: ALL_ROLES }, ...USER_ROLES[edition].map((item) => ({ label: item, value: item }))];

  const filters: IoTFilterField[] = [
    {
      id: "keyword",
      label: t.keywordLabel,
      value: keyword,
      placeholder: t.keywordPlaceholder,
      onChange: setKeyword,
      // 关键词框里按回车等同点击「查询」
      render: ({ id, value, onChange }) => (
        <Input id={id} size="medium" value={value} placeholder={t.keywordPlaceholder} onChange={(next) => onChange(String(next))} onEnter={submitQuery} />
      ),
    },
    {
      id: "role",
      label: t.roleLabel,
      value: role,
      onChange: setRole,
      render: ({ id, value, onChange }) => (
        <Select
          id={id}
          size="medium"
          value={value}
          placeholder={t.rolePlaceholder}
          options={roleOptions}
          // 选「全部角色」等同于不筛选，回到占位符样式
          onChange={(next) => onChange(String(next) === ALL_ROLES ? "" : String(next))}
        />
      ),
    },
  ];

  // 仟帆这张表开启紧凑单元格（内边距 16px），每一列都给明确宽度——宽屏下 TDesign 会按比例放大所有列，列间距才均匀；
  // 只让某一列（如邮箱）吃掉剩余空间，会让它和相邻列之间出现一大片空白。
  const hasTenant = edition === "qianfan";

  // 仟帆的字段（需求，按顺序）：工号、姓名、邮箱、手机号、角色、创建时间、状态、操作，没有「序号」和「所属租户」。
  // 宽度按"文字宽度 + 32 内边距"算：工号、手机号、角色、创建时间都完整显示，姓名和邮箱放不下时省略（鼠标悬停看全文）。
  // 首尾列的边距由 useEdgeFitColumns 另加 32，合计不超过 1116 的表格宽度。
  const columns: IoTTableColumn<ManagedUser>[] = [
    ...(hasTenant
      ? []
      : [{
          id: "index",
          title: t.columns.index,
          width: 76,
          render: (_user: ManagedUser, index: number) => <span className="tabular-nums text-primary-text">{(page - 1) * PAGE_SIZE + index + 1}</span>,
        }]),
    { id: "employeeId", title: t.columns.employeeId, width: hasTenant ? 104 : 116, render: (user) => <span className="block truncate text-primary-text" title={user.employeeId}>{user.employeeId || "-"}</span> },
    { id: "name", title: t.columns.name, width: hasTenant ? 128 : 176, render: (user) => <span className="block truncate text-primary-text" title={user.name}>{user.name}</span> },
    { id: "email", title: t.columns.email, width: hasTenant ? 224 : 206, render: (user) => <span className="block truncate text-primary-text" title={user.email || user.phone}>{user.email || "-"}</span> },
    ...(hasTenant
      ? [{ id: "phone", title: t.columns.phone, width: 124, render: (user: ManagedUser) => <span className="block truncate tabular-nums text-primary-text" title={user.phone}>{user.phone || "-"}</span> }]
      : []),
    { id: "role", title: t.columns.role, width: hasTenant ? 120 : 132, render: (user) => <span className="text-primary-text">{user.role}</span> },
    { id: "createdAt", title: t.columns.createdAt, width: hasTenant ? 176 : 196, render: (user) => <span className="tabular-nums text-primary-text">{user.createdAt}</span> },
    {
      id: "status",
      title: t.columns.status,
      width: hasTenant ? 84 : 100,
      // 与审批中心的状态列一致：圆点 + 文字，正常为绿色，已禁用为中性灰
      render: (user) => (
        <StatusLabel tone={user.status === "normal" ? "success" : "neutral"}>
          {user.status === "normal" ? t.normal : edition === "qianfan" ? t.frozen : t.disabled}
        </StatusLabel>
      ),
    },
    {
      id: "actions",
      title: t.columns.actions,
      width: 108,
      ellipsis: false,
      render: (user) => {
        // 当前登录者自己那一行不开放任何操作（仟帆：陈思远 / 租户管理员），操作列置空
        if (hasTenant && user.email === currentEmail) return null;

        const editLink = (
          <Link
            theme="primary"
            hover="underline"
            href="#"
            aria-label={`${t.edit} ${user.name}`}
            onClick={(event) => {
              event.preventDefault();
              // 仟帆：打开「编辑用户」弹窗；通力的编辑尚无设计稿，先给出开发中提示
              if (edition === "qianfan") setEditingUser(user);
              else MessagePlugin.info(t.editPending, 3000);
            }}
          >
            {t.edit}
          </Link>
        );
        const canManage = !PROTECTED_ROLES.has(user.role);
        const toggleLabel = user.status === "normal" ? t.disable : t.enable;

        // 仟帆：编辑 + 「更多 ▾」（禁用 / 启用、重置密码、注销收进下拉）。
        // 当前登录者自己那一行在上面已置空，其余每一行都能重置密码；
        // 其他系统管理员不可禁用 / 注销，下拉里只有「重置密码」。
        if (hasTenant) {
          return (
            <div className="flex items-center gap-2 whitespace-nowrap">
              {editLink}
              <Dropdown
                  trigger="click"
                  placement="bottom-right"
                  // 菜单宽度与任务中心「更多」菜单一致（112）
                  minColumnWidth={112}
                  options={[
                    ...(canManage ? [{ content: toggleLabel, value: "toggle" }] : []),
                    { content: t.resetPassword, value: "reset-password" },
                    // 仟帆的每一个可操作账号都提供「MFA解绑」：即使尚未绑定，也会触发重新绑定流程并发送新的 MFA 绑定邮件。
                    { content: t.mfaUnbind, value: "mfa-unbind" },
                    ...(canManage ? [{ content: t.deregister, value: "deregister" }] : []),
                  ]}
                  onClick={(option) => {
                    if (option.value === "toggle") {
                      // 禁用先二次确认；启用直接生效
                      if (user.status === "normal") setPendingDisable(user);
                      else setStatus(user, "normal");
                    }
                    // 重置密码先二次确认
                    if (option.value === "reset-password") setPendingReset(user);
                    if (option.value === "mfa-unbind") setPendingMfaUnbind(user);
                    if (option.value === "deregister") setPendingDeregister(user);
                  }}
                >
                  <button
                    type="button"
                    aria-label={`${t.more} ${user.name}`}
                    aria-haspopup="menu"
                    className="inline-flex items-center gap-0.5 rounded-xs border-0 bg-transparent p-0 text-body font-normal text-link hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
                  >
                    {t.more}
                    <ChevronDown aria-hidden="true" className="size-3.5" />
                  </button>
                </Dropdown>
            </div>
          );
        }

        // 通力：保持「编辑 / 禁用」两个文字链接
        return (
          <div className="flex items-center gap-2 whitespace-nowrap">
            {editLink}
            {canManage && (
              <Link
                theme="primary"
                hover="underline"
                href="#"
                aria-label={`${toggleLabel} ${user.name}`}
                onClick={(event) => {
                  event.preventDefault();
                  setStatus(user, user.status === "normal" ? "disabled" : "normal");
                }}
              >
                {toggleLabel}
              </Link>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <>
    <IoTListPageTemplate<ManagedUser>
      title={t.title}
      filterMode="normal"
      actionsPlacement="filter"
      filters={filters}
      // 次要按钮在左、主按钮在右（模板：两个筛选项 + 次要按钮 + 主要按钮）；创建用户只在仟帆开放
      actions={[
        ...(edition === "qianfan" ? [{ id: "create", label: t.createUser, theme: "default" as const, onClick: () => setIsCreateOpen(true) }] : []),
        { id: "query", label: t.query, theme: "primary" as const, onClick: submitQuery },
      ]}
      columns={columns}
      rows={pagedUsers}
      getRowKey={(user) => user.id}
      emptyText={t.empty}
      tableCaption={t.caption}
      minTableWidth={hasTenant ? 1100 : 1116}
      compactCells={hasTenant}
      pagination={{
        current: page,
        pageSize: PAGE_SIZE,
        total: filteredUsers.length,
        totalContent: t.total(filteredUsers.length),
        onChange: (current) => setPage(current),
      }}
    />
    {edition === "qianfan" && (
      <>
        {/* 仟帆管理员只能为仟帆本公司创建「系统管理员」，不能替租户加人；租户管理员只能创建运营人员 / 前线维保员工 */}
        <CreateUserDialog
          visible={isCreateOpen}
          language={language}
          creatorScope={currentTenant ? "tenant" : "platform"}
          roles={roleNames}
          isTaken={isTaken}
          onClose={() => setIsCreateOpen(false)}
          onSubmit={createUser}
        />
        {/* 编辑用户：邮箱只读，工号 / 姓名 / 手机号 / 角色可改 */}
        <CreateUserDialog
          mode="edit"
          visible={editingUser !== null}
          language={language}
          creatorScope={currentTenant ? "tenant" : "platform"}
          roles={roleNames}
          initialValues={
            editingUser
              ? { account: editingUser.email, name: editingUser.name, employeeId: editingUser.employeeId, phone: editingUser.phone ?? "", role: editingUser.role }
              : undefined
          }
          isTaken={(field, value) => isTaken(field, value, editingUser?.id)}
          onClose={() => setEditingUser(null)}
          onSubmit={saveEdit}
        />
        <Dialog
          visible={pendingDisable !== null}
          // 警示风格与注销确认一致（Figma Dialog theme=warning）
          theme="warning"
          header={t.disableTitle}
          body={pendingDisable ? t.disableBody() : null}
          placement="center"
          cancelBtn={{ content: t.cancel, theme: "default", variant: "base" }}
          confirmBtn={t.disableOk}
          onConfirm={confirmDisable}
          onClose={() => setPendingDisable(null)}
        />
        <Dialog
          visible={pendingReset !== null}
          // 与禁用确认同一形式（Figma Dialog theme=warning）
          theme="warning"
          header={t.resetTitle}
          body={pendingReset ? t.resetBody() : null}
          placement="center"
          cancelBtn={{ content: t.cancel, theme: "default", variant: "base" }}
          confirmBtn={t.resetOk}
          onConfirm={confirmReset}
          onClose={() => setPendingReset(null)}
        />
        <Dialog
          visible={pendingMfaUnbind !== null}
          // 与重置密码确认同一形式（Figma Dialog theme=warning）
          theme="warning"
          header={t.mfaUnbindTitle}
          body={pendingMfaUnbind ? t.mfaUnbindBody() : null}
          placement="center"
          cancelBtn={{ content: t.cancel, theme: "default", variant: "base" }}
          confirmBtn={t.mfaUnbindOk}
          onConfirm={confirmMfaUnbind}
          onClose={() => setPendingMfaUnbind(null)}
        />
        <Dialog
          visible={pendingDeregister !== null}
          // 错误风格：Figma Dialog theme=error（红色感叹号图标；确认按钮仍是品牌蓝主按钮，设计稿里不是红色）。
          // Figma 的 error 在 TDesign 里叫 danger。
          theme="danger"
          header={t.deregisterTitle}
          body={pendingDeregister ? t.deregisterBody() : null}
          placement="center"
          cancelBtn={{ content: t.cancel, theme: "default", variant: "base" }}
          confirmBtn={t.deregisterOk}
          onConfirm={confirmDeregister}
          onClose={() => setPendingDeregister(null)}
        />
      </>
    )}
    </>
  );
}
