import { useRef, useState } from "react";
import { Dialog, Link, MessagePlugin } from "tdesign-react";
import { IOT_COMPANIES } from "../data/deviceOverview";
import { formatMaskedAt, getInitialFaultMasks, getMaskedFaultCodes, type FaultMaskRecord } from "../data/faultMasking";
import FaultMaskDialog, { type FaultMaskFormValues } from "./FaultMaskDialog";
import { IoTListPageTemplate, type IoTTableColumn } from "./templates/iot-list-page";

type Language = "en" | "cn";

/**
 * 故障屏蔽管理（仅通力，系统设置分组下）。
 *
 * 页面骨架使用 IoT 列表页模板的「无筛选 + 标题行操作按钮」形态（和角色管理同一套）：
 * 标题左、主按钮「新增屏蔽」右，下面是表格和分页。
 * 列：已屏蔽故障代码、生效范围、Domain、FaultCode、屏蔽时间、操作（编辑 / 删除）。
 * 「新增屏蔽」与「编辑」共用 {@link FaultMaskDialog}；「删除」有二次确认。数据只存在本页内存里，刷新后恢复演示数据。
 * 编辑保存后屏蔽时间更新为保存的时间；新增的记录排在最前面。
 */

const PAGE_SIZE = 10;

const copy = {
  cn: {
    title: "故障屏蔽管理",
    add: "新增屏蔽",
    columns: { masked: "已屏蔽故障代码", scope: "生效范围", domain: "Domain", faultCode: "FaultCode", maskedAt: "屏蔽时间", actions: "操作" },
    edit: "编辑",
    remove: "删除",
    total: (count: number) => `共 ${count} 条数据`,
    caption: "故障屏蔽列表",
    empty: "暂无已屏蔽的故障",
    confirmTitle: "删除屏蔽",
    confirmBody: (codes: string) => `确认删除对故障代码 ${codes} 的屏蔽吗？删除后这些故障将不再被屏蔽。`,
    confirmOk: "确认删除",
    cancel: "取消",
    added: "已新增屏蔽",
    saved: "已保存屏蔽",
    removed: "已删除屏蔽",
  },
  en: {
    title: "Fault Mask Management",
    add: "Add Mask",
    columns: { masked: "Masked Fault Codes", scope: "Effective Scope", domain: "Domain", faultCode: "FaultCode", maskedAt: "Masked At", actions: "Actions" },
    edit: "Edit",
    remove: "Delete",
    total: (count: number) => `${count} masks`,
    caption: "Fault mask list",
    empty: "No masked faults",
    confirmTitle: "Delete mask",
    confirmBody: (codes: string) => `Delete the mask on fault code(s) ${codes}? These faults will no longer be masked.`,
    confirmOk: "Delete",
    cancel: "Cancel",
    added: "Mask added",
    saved: "Mask saved",
    removed: "Mask deleted",
  },
};

const joinCodes = (codes: string[]) => codes.join("、");

export default function FaultMaskingContent({ language }: { language: Language }) {
  const t = copy[language];
  const [records, setRecords] = useState<FaultMaskRecord[]>(getInitialFaultMasks);
  const [page, setPage] = useState(1);
  const [dialogMode, setDialogMode] = useState<"create" | "edit" | null>(null);
  const [editing, setEditing] = useState<FaultMaskRecord | null>(null);
  const [pendingDelete, setPendingDelete] = useState<FaultMaskRecord | null>(null);
  const nextId = useRef(100);

  const pagedRecords = records.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const openCreate = () => {
    setEditing(null);
    setDialogMode("create");
  };
  const openEdit = (record: FaultMaskRecord) => {
    setEditing(record);
    setDialogMode("edit");
  };
  const closeDialog = () => setDialogMode(null);

  const submit = (values: FaultMaskFormValues): boolean => {
    const maskedAt = formatMaskedAt();
    if (dialogMode === "edit" && editing) {
      const targetId = editing.id;
      setRecords((current) => current.map((record) => (record.id === targetId ? { ...record, ...values, maskedAt } : record)));
      MessagePlugin.success(t.saved, 3000);
    } else {
      nextId.current += 1;
      const record: FaultMaskRecord = { id: `fm-${nextId.current}`, ...values, maskedAt };
      setRecords((current) => [record, ...current]);
      setPage(1);
      MessagePlugin.success(t.added, 3000);
    }
    return true;
  };

  const confirmDelete = () => {
    if (!pendingDelete) return;
    const targetId = pendingDelete.id;
    const remaining = records.filter((record) => record.id !== targetId);
    setRecords(remaining);
    // 删到当前页没有数据时回退到最后一页
    setPage((current) => Math.min(current, Math.max(1, Math.ceil(remaining.length / PAGE_SIZE))));
    setPendingDelete(null);
    MessagePlugin.success(t.removed, 3000);
  };

  const columns: IoTTableColumn<FaultMaskRecord>[] = [
    {
      id: "masked",
      title: t.columns.masked,
      width: 280,
      render: (record) => {
        const text = joinCodes(getMaskedFaultCodes(record));
        return <span className="block truncate tabular-nums text-primary-text" title={text}>{text}</span>;
      },
    },
    {
      id: "scope",
      title: t.columns.scope,
      width: 150,
      render: (record) => {
        const text = joinCodes(record.scope);
        return <span className="block truncate text-primary-text" title={text}>{text}</span>;
      },
    },
    {
      id: "domain",
      title: t.columns.domain,
      width: 100,
      render: (record) => <span className="tabular-nums text-primary-text">{record.domain}</span>,
    },
    {
      id: "faultCode",
      title: t.columns.faultCode,
      width: 200,
      render: (record) => {
        const text = joinCodes(record.faultCodes);
        return <span className="block truncate tabular-nums text-primary-text" title={text}>{text}</span>;
      },
    },
    {
      id: "maskedAt",
      title: t.columns.maskedAt,
      width: 170,
      render: (record) => <span className="tabular-nums text-primary-text">{record.maskedAt}</span>,
    },
    {
      id: "actions",
      title: t.columns.actions,
      width: 120,
      ellipsis: false,
      render: (record) => {
        const label = joinCodes(getMaskedFaultCodes(record));
        return (
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Link
              theme="primary"
              hover="underline"
              href="#"
              aria-label={`${t.edit} ${label}`}
              onClick={(event) => {
                event.preventDefault();
                openEdit(record);
              }}
            >
              {t.edit}
            </Link>
            <Link
              theme="primary"
              hover="underline"
              href="#"
              aria-label={`${t.remove} ${label}`}
              onClick={(event) => {
                event.preventDefault();
                setPendingDelete(record);
              }}
            >
              {t.remove}
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <IoTListPageTemplate<FaultMaskRecord>
        title={t.title}
        filterMode="none"
        actions={[{ id: "add", label: t.add, theme: "primary", onClick: openCreate }]}
        columns={columns}
        rows={pagedRecords}
        getRowKey={(record) => record.id}
        emptyText={t.empty}
        tableCaption={t.caption}
        minTableWidth={1040}
        pagination={{
          current: page,
          pageSize: PAGE_SIZE,
          total: records.length,
          totalContent: t.total(records.length),
          onChange: (current) => setPage(current),
        }}
      />

      <FaultMaskDialog
        visible={dialogMode !== null}
        language={language}
        mode={dialogMode === "edit" ? "edit" : "create"}
        initialValues={dialogMode === "edit" && editing ? { scope: editing.scope, domain: editing.domain, faultCodes: editing.faultCodes } : undefined}
        companies={IOT_COMPANIES}
        onClose={closeDialog}
        onSubmit={submit}
      />

      <Dialog
        visible={pendingDelete !== null}
        theme="danger"
        header={t.confirmTitle}
        body={pendingDelete ? t.confirmBody(joinCodes(getMaskedFaultCodes(pendingDelete))) : null}
        placement="center"
        cancelBtn={{ content: t.cancel, theme: "default", variant: "base" }}
        confirmBtn={{ content: t.confirmOk, theme: "danger" }}
        onConfirm={confirmDelete}
        onClose={() => setPendingDelete(null)}
      />
    </>
  );
}
