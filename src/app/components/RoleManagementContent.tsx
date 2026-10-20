import { useState } from "react";
import { Dialog, Link, MessagePlugin } from "tdesign-react";
import type { AppEdition } from "../data/accounts";
import { getInitialManagedRoles, type ManagedRole } from "../data/roleManagement";
import { IoTListPageTemplate, type IoTTableColumn } from "./templates/iot-list-page";

type Language = "en" | "cn";

/**
 * 角色管理（通力 / 仟帆共用）。
 *
 * 页面骨架使用 IoT 列表页模板的「无筛选 + 标题行操作按钮」形态
 * （Figma IOT Delivery 9321:100322）：标题左、主按钮「添加角色」右，下面直接是表格和分页。
 *
 * 「添加角色」「编辑」尚无设计稿，先给出开发中提示；「删除」有二次确认，只改本地状态。
 * 内置角色（设计稿中前三行）只有「编辑」。
 */

const PAGE_SIZE = 10;
const CANCEL_BTN = { content: "取消", theme: "default", variant: "base" } as const;

const copy = {
  cn: {
    title: "角色管理",
    add: "添加角色",
    columns: { index: "序号", name: "角色名称", userCount: "关联用户数", createdAt: "创建时间", actions: "操作" },
    edit: "编辑",
    remove: "删除",
    total: (count: number) => `共 ${count} 条数据`,
    caption: "角色列表",
    empty: "暂无角色",
    addPending: "添加角色功能开发中",
    editPending: "编辑角色功能开发中",
    confirmTitle: "删除角色",
    confirmBody: (name: string, userCount: number) =>
      userCount > 0
        ? `确认删除角色「${name}」吗？该角色已关联 ${userCount} 个用户，删除后这些用户将失去该角色。`
        : `确认删除角色「${name}」吗？删除后无法恢复。`,
    confirmOk: "确认删除",
    removed: (name: string) => `已删除角色 ${name}`,
  },
  en: {
    title: "Role Management",
    add: "Add Role",
    columns: { index: "No.", name: "Role Name", userCount: "Users", createdAt: "Created At", actions: "Actions" },
    edit: "Edit",
    remove: "Delete",
    total: (count: number) => `${count} roles`,
    caption: "Role list",
    empty: "No roles",
    addPending: "Adding roles is under development",
    editPending: "Editing roles is under development",
    confirmTitle: "Delete role",
    confirmBody: (name: string, userCount: number) =>
      userCount > 0
        ? `Delete role "${name}"? ${userCount} user(s) are linked to it and will lose this role.`
        : `Delete role "${name}"? This cannot be undone.`,
    confirmOk: "Delete",
    removed: (name: string) => `Role ${name} deleted`,
  },
};

type RoleManagementContentProps = {
  language: Language;
  edition: AppEdition;
};

export default function RoleManagementContent({ language, edition }: RoleManagementContentProps) {
  const t = copy[language];
  // 两个平台各有一份角色；父级用 key 按 edition 重挂载，所以只需初始化一次。
  const [roles, setRoles] = useState<ManagedRole[]>(() => getInitialManagedRoles(edition));
  const [page, setPage] = useState(1);
  const [pendingDelete, setPendingDelete] = useState<ManagedRole | null>(null);

  const pagedRoles = roles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const confirmDelete = () => {
    if (!pendingDelete) return;
    const target = pendingDelete;
    const remaining = roles.filter((role) => role.id !== target.id);
    setRoles(remaining);
    // 删到当前页没有数据时回退到最后一页
    setPage((current) => Math.min(current, Math.max(1, Math.ceil(remaining.length / PAGE_SIZE))));
    setPendingDelete(null);
    MessagePlugin.success(t.removed(target.name), 3000);
  };

  const columns: IoTTableColumn<ManagedRole>[] = [
    {
      id: "index",
      title: t.columns.index,
      width: 80,
      render: (_role, index) => <span className="tabular-nums text-primary-text">{(page - 1) * PAGE_SIZE + index + 1}</span>,
    },
    {
      id: "name",
      title: t.columns.name,
      render: (role) => <span className="block truncate text-primary-text" title={role.name}>{role.name}</span>,
    },
    {
      id: "userCount",
      title: t.columns.userCount,
      width: 140,
      render: (role) => <span className="tabular-nums text-primary-text">{role.userCount}</span>,
    },
    {
      id: "createdAt",
      title: t.columns.createdAt,
      width: 200,
      render: (role) => <span className="tabular-nums text-primary-text">{role.createdAt}</span>,
    },
    {
      id: "actions",
      title: t.columns.actions,
      width: 120,
      ellipsis: false,
      render: (role) => (
        <div className="flex items-center gap-2 whitespace-nowrap">
          <Link
            theme="primary"
            hover="underline"
            href="#"
            aria-label={`${t.edit} ${role.name}`}
            onClick={(event) => {
              event.preventDefault();
              MessagePlugin.info(t.editPending, 3000);
            }}
          >
            {t.edit}
          </Link>
          {!role.builtin && (
            <Link
              theme="primary"
              hover="underline"
              href="#"
              aria-label={`${t.remove} ${role.name}`}
              onClick={(event) => {
                event.preventDefault();
                setPendingDelete(role);
              }}
            >
              {t.remove}
            </Link>
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      <IoTListPageTemplate<ManagedRole>
        title={t.title}
        filterMode="none"
        actions={[{ id: "add", label: t.add, theme: "primary", onClick: () => MessagePlugin.info(t.addPending, 3000) }]}
        columns={columns}
        rows={pagedRoles}
        getRowKey={(role) => role.id}
        emptyText={t.empty}
        tableCaption={t.caption}
        minTableWidth={900}
        pagination={{
          current: page,
          pageSize: PAGE_SIZE,
          total: roles.length,
          totalContent: t.total(roles.length),
          onChange: (current) => setPage(current),
        }}
      />

      <Dialog
        visible={pendingDelete !== null}
        theme="danger"
        header={t.confirmTitle}
        body={pendingDelete ? t.confirmBody(pendingDelete.name, pendingDelete.userCount) : null}
        placement="center"
        cancelBtn={{ ...CANCEL_BTN, content: language === "cn" ? "取消" : "Cancel" }}
        confirmBtn={{ content: t.confirmOk, theme: "danger" }}
        onConfirm={confirmDelete}
        onClose={() => setPendingDelete(null)}
      />
    </>
  );
}
