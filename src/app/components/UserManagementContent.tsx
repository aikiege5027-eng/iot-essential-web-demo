import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Dialog, Dropdown, Input, Link, MessagePlugin, Select } from "tdesign-react";
import { QIANFAN_ADMIN_EMAIL, type AppEdition } from "../data/accounts";
import {
  getInitialManagedUsers,
  PROTECTED_ROLES,
  USER_ROLES,
  type ManagedUser,
  type ManagedUserStatus,
} from "../data/userManagement";
import CreateUserDialog from "./CreateUserDialog";
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
 * 「禁用 / 启用」只改本地状态，没有接后端；「编辑」尚无设计稿，先给出开发中提示。
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
    createdOk: "创建成功",
    accountExists: "当前账号已存在，请联系平台处理",
    columns: { index: "序号", employeeId: "工号", name: "姓名", email: "邮箱", role: "角色", createdAt: "创建时间", tenant: "所属租户", status: "状态", actions: "操作" },
    normal: "正常",
    disabled: "已禁用",
    edit: "编辑",
    more: "更多",
    disable: "禁用",
    enable: "启用",
    deregister: "注销",
    disableTitle: "禁用用户",
    disableBody: (name: string) => `确认禁用「${name}」吗？禁用后该账号将无法登录，可随时重新启用。`,
    disableOk: "确认禁用",
    deregisterTitle: "注销用户",
    deregisterBody: (name: string) => `确认注销「${name}」吗？注销后该账号将无法登录，且无法恢复。`,
    deregisterOk: "确认注销",
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
    createdOk: "User created",
    accountExists: "This account already exists. Please contact the platform.",
    columns: { index: "No.", employeeId: "Employee ID", name: "Name", email: "Email", role: "Role", createdAt: "Created At", tenant: "Tenant", status: "Status", actions: "Actions" },
    normal: "Active",
    disabled: "Disabled",
    edit: "Edit",
    more: "More",
    disable: "Disable",
    enable: "Enable",
    deregister: "Deregister",
    disableTitle: "Disable user",
    disableBody: (name: string) => `Disable "${name}"? The account can no longer sign in until it is enabled again.`,
    disableOk: "Disable",
    deregisterTitle: "Deregister user",
    deregisterBody: (name: string) => `Deregister "${name}"? The account can no longer sign in and this cannot be undone.`,
    deregisterOk: "Deregister",
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
};

export default function UserManagementContent({ language, edition }: UserManagementContentProps) {
  const t = copy[language];
  // 两个平台各有一份名单；用 key 在父级按 edition 重挂载，所以这里初始化一次即可。
  const [users, setUsers] = useState<ManagedUser[]>(() => getInitialManagedUsers(edition));
  const [keyword, setKeyword] = useState("");
  const [role, setRole] = useState("");
  const [appliedKeyword, setAppliedKeyword] = useState("");
  const [appliedRole, setAppliedRole] = useState("");
  const [page, setPage] = useState(1);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [pendingDeregister, setPendingDeregister] = useState<ManagedUser | null>(null);
  const [pendingDisable, setPendingDisable] = useState<ManagedUser | null>(null);

  const submitQuery = () => {
    setAppliedKeyword(keyword.trim().toLowerCase());
    setAppliedRole(role);
    setPage(1);
  };

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        if (appliedRole && user.role !== appliedRole) return false;
        if (!appliedKeyword) return true;
        return [user.employeeId, user.name, user.email].some((value) => value.toLowerCase().includes(appliedKeyword));
      }),
    [users, appliedKeyword, appliedRole],
  );

  const pagedUsers = filteredUsers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  /** 创建用户：按账号判重（邮箱不区分大小写；手机号账号按手机号），重复则提示并保持弹窗打开。 */
  const createUser = ({ account, name, role }: { account: string; name: string; role: string }) => {
    const isEmail = account.includes("@");
    const normalized = account.toLowerCase();
    const exists = users.some((user) => (isEmail ? user.email.toLowerCase() === normalized : user.phone === account));
    if (exists) {
      MessagePlugin.warning(t.accountExists, 3000);
      return false;
    }
    const nextEmployeeId = String(Math.max(...users.map((user) => Number(user.employeeId) || 0)) + 9);
    const now = new Date();
    const pad = (value: number) => String(value).padStart(2, "0");
    const createdAt = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    const created: ManagedUser = {
      id: `${edition}-created-${Date.now()}`,
      employeeId: nextEmployeeId,
      name,
      email: isEmail ? account : "",
      phone: isEmail ? undefined : account,
      role,
      createdAt,
      status: "normal",
    };
    setUsers((current) => [created, ...current]);
    // 清掉已应用的筛选并回到第一页，保证新用户马上能在列表顶部看到
    setKeyword("");
    setRole("");
    setAppliedKeyword("");
    setAppliedRole("");
    setPage(1);
    MessagePlugin.success(t.createdOk, 3000);
    return true;
  };

  /** 禁用需要二次确认（仟帆）；启用不需要。 */
  const confirmDisable = () => {
    if (!pendingDisable) return;
    setStatus(pendingDisable, "disabled");
    setPendingDisable(null);
  };

  /** 注销：账号被注销后从名单中移除（仅仟帆开放）。 */
  const confirmDeregister = () => {
    if (!pendingDeregister) return;
    const target = pendingDeregister;
    const remainingCount = filteredUsers.length - 1;
    setUsers((current) => current.filter((user) => user.id !== target.id));
    // 删到当前页没有数据时回退到最后一页
    setPage((current) => Math.min(current, Math.max(1, Math.ceil(remainingCount / PAGE_SIZE))));
    setPendingDeregister(null);
    MessagePlugin.success(t.deregistered(target.name), 3000);
  };

  const setStatus = (user: ManagedUser, status: ManagedUserStatus) => {
    setUsers((current) => current.map((item) => (item.id === user.id ? { ...item, status } : item)));
    MessagePlugin.success(status === "disabled" ? t.disabledDone(user.name) : t.enabledDone(user.name), 3000);
  };

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

  // 仟帆多一列「所属租户」，共 9 列，1440 视口按 24px 内边距放不下，
  // 所以仟帆这张表开启紧凑单元格（内边距 16px），每一列都给明确宽度——宽屏下 TDesign 会按比例放大所有列，列间距才均匀；
  // 只让某一列（如邮箱）吃掉剩余空间，会让它和相邻列之间出现一大片空白。
  const hasTenant = edition === "qianfan";

  const columns: IoTTableColumn<ManagedUser>[] = [
    {
      id: "index",
      title: t.columns.index,
      width: hasTenant ? 68 : 76,
      render: (_user, index) => <span className="tabular-nums text-primary-text">{(page - 1) * PAGE_SIZE + index + 1}</span>,
    },
    { id: "employeeId", title: t.columns.employeeId, width: hasTenant ? 100 : 116, render: (user) => <span className="block truncate text-primary-text" title={user.employeeId}>{user.employeeId}</span> },
    { id: "name", title: t.columns.name, width: hasTenant ? 132 : 176, render: (user) => <span className="block truncate text-primary-text" title={user.name}>{user.name}</span> },
    { id: "email", title: t.columns.email, width: hasTenant ? 202 : 206, render: (user) => <span className="block truncate text-primary-text" title={user.email || user.phone}>{user.email || "-"}</span> },
    { id: "role", title: t.columns.role, width: hasTenant ? 120 : 132, render: (user) => <span className="text-primary-text">{user.role}</span> },
    { id: "createdAt", title: t.columns.createdAt, width: hasTenant ? 180 : 196, render: (user) => <span className="tabular-nums text-primary-text">{user.createdAt}</span> },
    ...(hasTenant
      ? [{ id: "tenant", title: t.columns.tenant, width: 124, render: (user: ManagedUser) => <span className="block truncate text-primary-text" title={user.tenant}>{user.tenant ?? "-"}</span> }]
      : []),
    {
      id: "status",
      title: t.columns.status,
      width: hasTenant ? 92 : 100,
      // 与审批中心的状态列一致：圆点 + 文字，正常为绿色，已禁用为中性灰
      render: (user) => (
        <StatusLabel tone={user.status === "normal" ? "success" : "neutral"}>
          {user.status === "normal" ? t.normal : t.disabled}
        </StatusLabel>
      ),
    },
    {
      id: "actions",
      title: t.columns.actions,
      width: 112,
      ellipsis: false,
      render: (user) => {
        // 仟帆的初始管理员（陈思远）暂时不开放任何操作，操作列置空
        if (hasTenant && user.email === QIANFAN_ADMIN_EMAIL) return null;

        const editLink = (
          <Link
            theme="primary"
            hover="underline"
            href="#"
            aria-label={`${t.edit} ${user.name}`}
            onClick={(event) => {
              event.preventDefault();
              MessagePlugin.info(t.editPending, 3000);
            }}
          >
            {t.edit}
          </Link>
        );
        const canManage = !PROTECTED_ROLES.has(user.role);
        const toggleLabel = user.status === "normal" ? t.disable : t.enable;

        // 仟帆：编辑 + 「更多 ▾」（禁用 / 启用、注销收进下拉）
        if (hasTenant) {
          return (
            <div className="flex items-center gap-2 whitespace-nowrap">
              {editLink}
              {canManage && (
                <Dropdown
                  trigger="click"
                  placement="bottom-right"
                  // 菜单宽度与任务中心「更多」菜单一致（112）
                  minColumnWidth={112}
                  options={[
                    { content: toggleLabel, value: "toggle" },
                    { content: t.deregister, value: "deregister" },
                  ]}
                  onClick={(option) => {
                    if (option.value === "toggle") {
                      // 禁用先二次确认；启用直接生效
                      if (user.status === "normal") setPendingDisable(user);
                      else setStatus(user, "normal");
                    }
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
              )}
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
        <CreateUserDialog visible={isCreateOpen} language={language} onClose={() => setIsCreateOpen(false)} onCreate={createUser} />
        <Dialog
          visible={pendingDisable !== null}
          // 警示风格与注销确认一致（Figma Dialog theme=warning）
          theme="warning"
          header={t.disableTitle}
          body={pendingDisable ? t.disableBody(pendingDisable.name) : null}
          placement="center"
          cancelBtn={{ content: t.cancel, theme: "default", variant: "base" }}
          confirmBtn={t.disableOk}
          onConfirm={confirmDisable}
          onClose={() => setPendingDisable(null)}
        />
        <Dialog
          visible={pendingDeregister !== null}
          // 错误风格：Figma Dialog theme=error（红色感叹号图标；确认按钮仍是品牌蓝主按钮，设计稿里不是红色）。
          // Figma 的 error 在 TDesign 里叫 danger。
          theme="danger"
          header={t.deregisterTitle}
          body={pendingDeregister ? t.deregisterBody(pendingDeregister.name) : null}
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
