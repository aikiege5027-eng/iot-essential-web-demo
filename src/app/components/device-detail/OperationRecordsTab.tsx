import { useMemo, useState } from "react";
import { Button, DateRangePicker, Pagination, Select, Table } from "tdesign-react";
import type { PrimaryTableCol } from "tdesign-react";
import { CalendarIcon } from "../icons/calendar";
import { ChevronRightIcon } from "../icons/device-detail-icons";
import { EyeOpenIcon } from "../icons/login-icons";
import { StatusLabel, type StatusTone } from "../StatusLabel";
import { TABLE_EDGE_END } from "../templates/iot-list-page/useEdgeFitColumns";
import type { Language } from "./copy";
import { DetailSection } from "./DetailSection";
/**
 * 操作记录页签（通力 / 仟帆共用）。
 *
 * 结构与设备事件页签一致：DetailSection 卡片 → 筛选区（用户查询 / 操作类型 / 操作日期 + 重置、查询）→
 * 表格（TDesign Table，设备事件表规格：表头 38 / 行 46，6 个内容列等宽，末列为详情箭头）→ 分页（总数 + TDesign Pagination）。
 *
 * 数据是演示用的：101 条按固定规律生成，筛选和分页都真实生效。第一条是无权限查看的脱敏记录（******），
 * 第二条带「眼睛」图标，对应 Figma 里「可点击查看明文」的工号。
 */
const PAGE_SIZE = 10;
const TOTAL = 101;
type StatusKey = "queued" | "inProgress" | "success" | "failed";
type OpType = "systemUpgrade" | "logUpload" | "deviceRegistration" | "deviceUnbind" | "deviceRestart" | "configUpdate";
const COPY = {
  cn: {
    title: "操作记录",
    userQuery: "用户查询",
    userPlaceholder: "搜索用户工号/姓名/邮箱",
    opType: "操作类型",
    opDate: "操作日期",
    selectPlaceholder: "请选择内容",
    startDate: "开始日期",
    endDate: "结束日期",
    reset: "重置",
    query: "查询",
    columns: { opType: "操作类型", employeeId: "工号", name: "姓名", email: "邮箱", action: "行为", status: "状态" },
    detail: "查看操作详情",
    empty: "暂无数据",
    total: (count: number) => `共 ${count} 项数据`,
    showId: "工号可查看",
    types: { systemUpgrade: "系统升级", logUpload: "日志上传", deviceRegistration: "设备注册", deviceUnbind: "设备解绑", deviceRestart: "设备重启", configUpdate: "更新配置" } as Record<OpType, string>,
    actions: {
      systemUpgrade: "210X系统升级 / Nexus-D系统升级",
      logUpload: "210X日志上传",
      deviceRegistration: "设备注册",
      deviceUnbind: "设备解绑",
      deviceRestart: "210X重新启动",
      configUpdate: "210X更新配置 / Nexus-D更新配置",
    } as Record<OpType, string>,
    status: { queued: "队列中", inProgress: "进行中", success: "成功", failed: "失败" } as Record<StatusKey, string>,
  },
  en: {
    title: "Operation Records",
    userQuery: "User Query",
    userPlaceholder: "Search by employee ID/name/email",
    opType: "Operation Type",
    opDate: "Operation Date",
    selectPlaceholder: "Please Select",
    startDate: "Start Date",
    endDate: "End Date",
    reset: "Reset",
    query: "Query",
    columns: { opType: "Operation Type", employeeId: "Employee ID", name: "Name", email: "Email", action: "Action", status: "Status" },
    detail: "View operation details",
    empty: "No data",
    total: (count: number) => `Total ${count} items`,
    showId: "Employee ID viewable",
    types: { systemUpgrade: "System Upgrade", logUpload: "Log Upload", deviceRegistration: "Device Registration", deviceUnbind: "Device Unbind", deviceRestart: "Device Restart", configUpdate: "Config Update" } as Record<OpType, string>,
    actions: {
      systemUpgrade: "210X System Upgrade / Nexus-D System Upgrade",
      logUpload: "210X Log Upload",
      deviceRegistration: "Device Registration",
      deviceUnbind: "Device Unbind",
      deviceRestart: "210X Restart",
      configUpdate: "210X Config Update / Nexus-D Config Update",
    } as Record<OpType, string>,
    status: { queued: "Queued", inProgress: "In Progress", success: "Success", failed: "Failed" } as Record<StatusKey, string>,
  },
} as const;
const STATUS_TONE: Record<StatusKey, StatusTone> = { queued: "neutral", inProgress: "brand", success: "success", failed: "error" };
const USERS = [
  { employeeId: "64151234", name: { cn: "张三", en: "Zhang San" }, email: "san.zhang@kone.com" },
  { employeeId: "64151302", name: { cn: "李四", en: "Li Si" }, email: "si.li@kone.com" },
  { employeeId: "64151477", name: { cn: "王五", en: "Wang Wu" }, email: "wu.wang@kone.com" },
  { employeeId: "64151588", name: { cn: "赵六", en: "Zhao Liu" }, email: "liu.zhao@kone.com" },
];
/** 前 10 条沿用设计稿里的类型 / 状态顺序，之后循环。 */
const OP_PATTERN: OpType[] = ["systemUpgrade", "logUpload", "deviceRegistration", "deviceUnbind", "deviceRestart", "configUpdate", "configUpdate", "configUpdate", "configUpdate", "configUpdate"];
const STATUS_PATTERN: StatusKey[] = ["queued", "inProgress", "success", "failed", "success", "success", "success", "success", "success", "success"];
type OperationRecord = {
  id: number;
  opType: OpType;
  employeeId: string;
  name: { cn: string; en: string };
  email: string;
  status: StatusKey;
  /** 无权限查看：工号 / 姓名 / 邮箱显示为 * */
  masked: boolean;
  /** 工号旁的「眼睛」图标 */
  showEye: boolean;
  /** 操作日期（YYYY-MM-DD），表格里不显示，只参与筛选 */
  date: string;
};
const isoDate = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
function buildRecords(): OperationRecord[] {
  const today = new Date();
  return Array.from({ length: TOTAL }, (_, index) => {
    const user = index === 1 ? USERS[0] : USERS[index % USERS.length];
    const day = new Date(today.getFullYear(), today.getMonth(), today.getDate() - Math.floor(index / 2));
    return {
      id: index,
      opType: OP_PATTERN[index % OP_PATTERN.length],
      employeeId: user.employeeId,
      name: user.name,
      email: user.email,
      status: STATUS_PATTERN[index % STATUS_PATTERN.length],
      masked: index % 11 === 0,
      showEye: index % 9 === 1,
      date: isoDate(day),
    };
  });
}
const RECORDS = buildRecords();
type Filters = { user: string; opType: string; range: string[] };
const EMPTY_FILTERS: Filters = { user: "", opType: "", range: [] };
export function OperationRecordsTab({ language }: { language: Language }) {
  const t = COPY[language];
  const [draft, setDraft] = useState<Filters>(EMPTY_FILTERS);
  const [applied, setApplied] = useState<Filters>(EMPTY_FILTERS);
  const [page, setPage] = useState(1);
  const rows = useMemo(
    () =>
      RECORDS.filter((record) => {
        if (applied.user && record.email !== applied.user) return false;
        if (applied.opType && record.opType !== applied.opType) return false;
        if (applied.range[0] && record.date < applied.range[0]) return false;
        if (applied.range[1] && record.date > applied.range[1]) return false;
        return true;
      }),
    [applied],
  );
  const pageRows = rows.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const search = () => {
    setApplied(draft);
    setPage(1);
  };
  const reset = () => {
    setDraft(EMPTY_FILTERS);
    setApplied(EMPTY_FILTERS);
    setPage(1);
  };
  const userOptions = USERS.map((user) => ({ value: user.email, label: `${user.employeeId} ${user.name[language]} ${user.email}` }));
  const typeOptions = (Object.keys(t.types) as OpType[]).map((key) => ({ value: key, label: t.types[key] }));
  // 6 个内容列不设宽度：fixed 布局下等分剩余宽度（均匀分布）；末列是详情箭头
  const columns: PrimaryTableCol<OperationRecord>[] = [
    {
      colKey: "opType",
      title: t.columns.opType,
      // 首列是文字列：左内边距取表格左边距（见 tdesign-patches.css 的 device-records-table__edge-start）
      className: "device-records-table__edge-start",
      cell: ({ row }) => (
        <span className="inline-flex items-center rounded-xs border border-component-border bg-secondarycontainer px-1.5 text-foot12 text-primary-text">{t.types[row.opType]}</span>
      ),
    },
    {
      colKey: "employeeId",
      title: t.columns.employeeId,
      ellipsis: true,
      cell: ({ row }) =>
        row.masked ? (
          "******"
        ) : (
          <span className="inline-flex items-center gap-2 tabular-nums">
            {row.showEye && <EyeOpenIcon aria-label={t.showId} className="size-4 shrink-0 text-icon-inactive" />}
            {row.employeeId}
          </span>
        ),
    },
    { colKey: "name", title: t.columns.name, ellipsis: true, cell: ({ row }) => (row.masked ? "*****" : row.name[language]) },
    { colKey: "email", title: t.columns.email, ellipsis: true, cell: ({ row }) => (row.masked ? "******" : row.email) },
    { colKey: "action", title: t.columns.action, ellipsis: true, cell: ({ row }) => t.actions[row.opType] },
    {
      colKey: "status",
      title: t.columns.status,
      cell: ({ row }) => (
        // 块级 flex：避免 inline-flex 在单元格行框里多出基线空隙把行撑高
        <StatusLabel tone={STATUS_TONE[row.status]} className="flex w-fit">
          {t.status[row.status]}
        </StatusLabel>
      ),
    },
    {
      colKey: "detail",
      title: <span className="sr-only">{t.detail}</span>,
      // 箭头列视为最右列：8 + 32px 按钮 + 右边距
      width: TABLE_EDGE_END + 40,
      className: "device-events-table__icon device-events-table__icon-end",
      cell: () => (
        <button
          type="button"
          aria-label={t.detail}
          className="flex size-8 items-center justify-center rounded-sm border-0 bg-transparent text-icon-inactive hover:bg-container-hover hover:text-icon-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
        >
          <ChevronRightIcon className="size-4" />
        </button>
      ),
    },
  ];
  return (
    <DetailSection title={t.title} titleId="device-op-records-title">
      {/* 筛选：三个字段等宽 + 右侧按钮（重置在左、查询在右），按钮与输入框底部对齐 */}
      <div className="flex flex-wrap items-end gap-4 px-4 pb-4 pt-4">
        <div className="flex min-w-[200px] flex-1 flex-col gap-2">
          <label className="text-body font-normal text-primary-text" htmlFor="op-records-user">{t.userQuery}</label>
          <Select
            id="op-records-user"
            size="medium"
            filterable
            clearable
            placeholder={t.userPlaceholder}
            options={userOptions}
            value={draft.user}
            onChange={(value) => setDraft((current) => ({ ...current, user: String(value ?? "") }))}
          />
        </div>
        <div className="flex min-w-[200px] flex-1 flex-col gap-2">
          <label className="text-body font-normal text-primary-text" htmlFor="op-records-type">{t.opType}</label>
          <Select
            id="op-records-type"
            size="medium"
            clearable
            placeholder={t.selectPlaceholder}
            options={typeOptions}
            value={draft.opType}
            onChange={(value) => setDraft((current) => ({ ...current, opType: String(value ?? "") }))}
          />
        </div>
        <div className="flex min-w-[200px] flex-1 flex-col gap-2">
          <span className="text-body text-primary-text">{t.opDate}</span>
          <DateRangePicker
            size="medium"
            clearable
            value={draft.range}
            placeholder={[t.startDate, t.endDate]}
            format="YYYY/MM/DD"
            valueType="YYYY-MM-DD"
            suffixIcon={<CalendarIcon className="t-icon size-4" />}
            disableDate={{ after: isoDate(new Date()) }}
            onChange={(value) => setDraft((current) => ({ ...current, range: (value as string[]).filter(Boolean) }))}
          />
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Button theme="default" variant="base" onClick={reset}>{t.reset}</Button>
          <Button theme="primary" onClick={search}>{t.query}</Button>
        </div>
      </div>
      <div className="px-4">
        <div className="overflow-x-auto rounded-md border border-stroke">
          <Table<OperationRecord>
            className="iot-list-page-table device-events-table"
            style={{ minWidth: 960 }}
            columns={columns}
            data={pageRows}
            rowKey="id"
            size="medium"
            tableLayout="fixed"
            hover
            disableDataPage
            empty={t.empty}
          />
        </div>
      </div>
      <div className="flex min-h-16 flex-wrap items-center justify-between gap-4 px-6">
        <p className="m-0 text-body text-secondary-text">{t.total(rows.length)}</p>
        {rows.length > PAGE_SIZE && (
          <div className="iot-list-page-pagination-controls flex shrink-0 items-center whitespace-nowrap">
            <Pagination
              current={page}
              pageSize={PAGE_SIZE}
              total={rows.length}
              size="medium"
              showPageSize={false}
              showJumper
              totalContent={false}
              onChange={(info) => setPage(info.current)}
            />
          </div>
        )}
      </div>
    </DetailSection>
  );
}
