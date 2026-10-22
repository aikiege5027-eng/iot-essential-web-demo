import { useState } from "react";
import { MessagePlugin, Select } from "tdesign-react";
import emptyIllustration from "../../../imports/MainContent/a61db6f0d80700688e3c9c49f1c3d1437e8f0bd9.png";
import {
  CONTROLLER_OPTIONS,
  type DeviceFilterKey,
  type DeviceFilters,
  type OverviewDevice,
  type OverviewProject,
} from "../../data/deviceOverview";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { IoTListPageTemplate, type IoTTableColumn } from "../templates/iot-list-page";
import { deviceCopy, type DeviceCopy, type Language } from "./copy";
import { DeviceStatus, deviceKindLabel, LabelledControl, yesNo } from "./shared";

/**
 * 设备筛选（Figma IOT Delivery 8463:34559「设备筛选增加设备导出按钮」）。
 *
 * 由设备总览的「设备筛选」按钮进入，结果限定在总览已应用的数据范围内；
 * 返回总览走顶栏的页面导航控件（返回 / 前进 / 刷新），页面内不放面包屑。
 * 骨架用 IoT 列表页模板：标题行右侧「导出设备数据 / 重置 / 查询」，
 * 12 个下拉筛选放在 beforeTable 插槽（设计稿只有占位符、无字段标签，所以不用模板的带标签筛选栅格），
 * 查询前展示「暂无设备，请在上方搜索」空态。
 */

export type DeviceResultRow = OverviewDevice & { project?: OverviewProject };

const PAGE_SIZE = 10;

export function filterOptions(t: DeviceCopy): Record<DeviceFilterKey, { label: string; value: string }[]> {
  const o = t.options;
  return {
    kind: [
      { label: o.elevator, value: "elevator" },
      { label: o.escalator, value: "escalator" },
    ],
    controller: CONTROLLER_OPTIONS.map((value) => ({ label: value, value })),
    claim: [
      { label: o.claimed, value: "yes" },
      { label: o.unclaimed, value: "no" },
    ],
    schedule: [
      { label: o.scheduled, value: "yes" },
      { label: o.unscheduled, value: "no" },
    ],
    steward: [
      { label: o.steward, value: "yes" },
      { label: o.nonSteward, value: "no" },
    ],
    status: [
      { label: o.online, value: "online" },
      { label: o.disconnected, value: "disconnected" },
      { label: o.offline, value: "offline" },
      { label: o.offline15, value: "offline15" },
    ],
    dispatch: [
      { label: o.dispatch, value: "yes" },
      { label: o.noDispatch, value: "no" },
    ],
    ownership: [
      { label: o.companyOwned, value: "company" },
      { label: o.customerOwned, value: "customer" },
    ],
    contract: [
      { label: o.contractValid, value: "yes" },
      { label: o.contractInvalid, value: "no" },
    ],
    contractType: [
      { label: "LIS", value: "LIS" },
      { label: "LIFS", value: "LIFS" },
    ],
    expiring: [
      { label: o.allContracts, value: "all" },
      { label: o.within30, value: "within30" },
    ],
    agreement: [
      { label: o.withAgreement, value: "yes" },
      { label: o.withoutAgreement, value: "no" },
    ],
  };
}

/** 设计稿顺序：4 列 × 3 行。 */
export const FILTER_ORDER: DeviceFilterKey[] = [
  "kind",
  "controller",
  "claim",
  "schedule",
  "steward",
  "status",
  "dispatch",
  "ownership",
  "contract",
  "contractType",
  "expiring",
  "agreement",
];

/** 导出 CSV：带 BOM，Excel 直接打开中文不乱码。 */
function exportCsv(rows: DeviceResultRow[], t: DeviceCopy) {
  const header = [t.columns.id, t.columns.name, t.columns.project, t.columns.address, t.columns.kind, t.columns.controller, t.columns.steward, t.columns.status, t.columns.dispatch, t.columns.contract, t.columns.agreement];
  const body = rows.map((row) => [
    row.id,
    row.name,
    row.project?.name ?? "",
    row.project?.address ?? "",
    deviceKindLabel(row, t),
    row.controller,
    yesNo(row.steward, t),
    t.options[row.status],
    yesNo(row.isnDispatch, t),
    row.contractValid ? t.valid : t.invalid,
    yesNo(row.agreement, t),
  ]);
  const escape = (value: string) => (/[",\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value);
  const csv = [header, ...body].map((line) => line.map(escape).join(",")).join("\n");
  const blob = new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const now = new Date();
  const stamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  const link = document.createElement("a");
  link.href = url;
  link.download = `${t.title}_${stamp}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

export function DeviceFilterView({
  language,
  filters,
  onFiltersChange,
  results,
  hasQueried,
  loading = false,
  onQuery,
  onReset,
}: {
  language: Language;
  filters: DeviceFilters;
  onFiltersChange: (filters: DeviceFilters) => void;
  results: DeviceResultRow[];
  /** 是否已点过「查询」：决定空态文案是「请在上方搜索」还是「暂无符合条件的设备」 */
  hasQueried: boolean;
  /** 顶栏「刷新」时的短暂加载态，保留当前结果并覆盖表格 */
  loading?: boolean;
  onQuery: () => void;
  onReset: () => void;
}) {
  const t = deviceCopy[language];
  const options = filterOptions(t);
  const [page, setPage] = useState(1);
  const pageRows = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const columns: IoTTableColumn<DeviceResultRow>[] = [
    { id: "id", title: t.columns.id, width: 112, render: (row) => <span className="tabular-nums">{row.id}</span> },
    { id: "name", title: t.columns.name, width: 168, render: (row) => row.name },
    { id: "project", title: t.columns.project, width: 156, render: (row) => row.project?.name ?? "-" },
    { id: "address", title: t.columns.address, width: 196, render: (row) => row.project?.address ?? "-" },
    { id: "kind", title: t.columns.kind, width: 96, render: (row) => deviceKindLabel(row, t) },
    { id: "controller", title: t.columns.controller, width: 112, render: (row) => row.controller },
    { id: "steward", title: t.columns.steward, width: 112, render: (row) => yesNo(row.steward, t) },
    { id: "status", title: t.columns.status, width: 112, ellipsis: false, render: (row) => <DeviceStatus device={row} t={t} /> },
    { id: "dispatch", title: t.columns.dispatch, width: 112, render: (row) => yesNo(row.isnDispatch, t) },
    { id: "contract", title: t.columns.contract, width: 96, render: (row) => (row.contractValid ? t.valid : t.invalid) },
    { id: "agreement", title: t.columns.agreement, width: 112, render: (row) => yesNo(row.agreement, t) },
  ];

  const emptyState = (
    <div className="flex flex-col items-center justify-center py-16">
      <ImageWithFallback src={emptyIllustration} alt="" className="mb-[-8px] size-[200px] object-cover" />
      <div className="flex flex-col items-center gap-2 whitespace-nowrap">
        <p className="text-h7 font-semibold text-primary-text">{hasQueried ? t.noResultTitle : t.emptyTitle}</p>
        <p className="text-foot12 text-secondary-text">{hasQueried ? t.noResultHint : t.emptyHint}</p>
      </div>
    </div>
  );

  const filterGrid = (
    <>
      <div className="grid grid-cols-1 gap-x-5 gap-y-5 px-5 min-[768px]:grid-cols-2 min-[1180px]:grid-cols-4">
        {FILTER_ORDER.map((key) => (
          <LabelledControl key={key} label={t.filters[key]} className="min-w-0">
            {/* 多选：选中项折叠成「首项 +N」，保持 32px 单行高度，与同行其他下拉对齐 */}
            <Select
              size="medium"
              multiple
              minCollapsedNum={1}
              clearable
              value={filters[key]}
              placeholder={t.filters[key]}
              options={options[key]}
              onChange={(next) => onFiltersChange({ ...filters, [key]: (Array.isArray(next) ? next : []).map(String) })}
            />
          </LabelledControl>
        ))}
      </div>
      <h2 className="px-5 pb-4 pt-7 text-h5 font-semibold text-primary-text">{t.recent}</h2>
    </>
  );

  return (
    <div className="flex min-h-full w-full min-w-0 flex-col">
      <IoTListPageTemplate<DeviceResultRow>
        title={t.title}
        loading={loading}
        loadingMode="overlay"
        filterMode="none"
        actions={[
          {
            id: "export",
            label: t.export,
            onClick: () => {
              if (results.length === 0) {
                MessagePlugin.warning(t.exportEmpty, 3000);
                return;
              }
              exportCsv(results, t);
              MessagePlugin.success(t.exported(results.length), 3000);
            },
          },
          {
            id: "reset",
            label: t.reset,
            onClick: () => {
              setPage(1);
              onReset();
            },
          },
          {
            id: "query",
            label: t.query,
            theme: "primary",
            onClick: () => {
              setPage(1);
              onQuery();
            },
          },
        ]}
        beforeTable={filterGrid}
        columns={columns}
        rows={pageRows}
        getRowKey={(row) => row.id}
        hideTableWhenEmpty
        emptyContent={emptyState}
        tableCaption={t.caption}
        minTableWidth={1384}
        compactCells
        pagination={
          results.length > 0
            ? {
                current: page,
                pageSize: PAGE_SIZE,
                total: results.length,
                totalContent: t.total(results.length),
                showJumper: true,
                onChange: (current) => setPage(current),
              }
            : undefined
        }
      />
    </div>
  );
}
