import { useLayoutEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { AppEdition } from "../../data/accounts";
import { Input, Pagination, Table } from "tdesign-react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import type { PrimaryTableCol } from "tdesign-react";
import {
  buildTrend,
  buildTenantLookup,
  computeOverviewStats,
  countTenantsWithProjects,
  type DataScope,
  type OverviewDataset,
  type OrgNode,
  type OverviewDevice,
  type OverviewProject,
} from "../../data/deviceOverview";
import { ChevronDownCircleIcon } from "../icons/chevron-down-circle";
import { EDGE_END_CLASS, EDGE_START_CLASS, NO_SCALE_CLASS, useEdgeFitColumns } from "../templates/iot-list-page/useEdgeFitColumns";
import { EmbeddedSearchIcon } from "../icons/iot-list-page-icons";
import { cn } from "../ui/utils";
import { deviceCopy, overviewCopy, type Language } from "./copy";
import { DataScopeBar } from "./DataScopeBar";
import { LegendDot, Ring, TrendChart } from "./OverviewCharts";
import { ChartFrame, PieChart } from "../charts";
import { deviceKindLabel, formatCount, formatPercent, InfoTip, LabelledControl, yesNo } from "./shared";

/**
 * 设备总览主视图（Figma IOT Delivery 7105:16867「设备总览增加项目搜索」）。
 *
 * 自上而下：数据范围 → 5 张数量卡 → 设备统计与趋势 + 维保合同 → 项目列表。
 * 所有数字都由当前数据范围内的设备实时统计。
 */

const CARD = "rounded-lg border border-stroke bg-container";

// ---------------------------------------------------------------------------
// 数量卡
// ---------------------------------------------------------------------------

/** value 为数字时按千分位显示；传字符串则原样显示（如百分比）。 */
function KpiCards({ items, className }: { items: { label: string; value: number | string }[]; className?: string }) {
  return (
    <ul className={cn("grid", className ?? "grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5")}>
      {items.map((item) => (
        <li key={item.label} className={cn(CARD, "flex min-h-[89px] flex-col justify-center gap-1 px-[18px] py-3")}>
          <span className="text-h5 font-medium text-primary-text tabular-nums">{typeof item.value === "number" ? formatCount(item.value) : item.value}</span>
          <span className="text-foot12 text-secondary-text">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
// ---------------------------------------------------------------------------
// 设备统计与趋势
// ---------------------------------------------------------------------------

function RateMeter({ value, label, tip, barClass, tipLabel }: { value: number; label: string; tip: string; barClass: string; tipLabel: string }) {
  return (
    <div className="flex w-[145px] flex-col gap-1">
      <div className="flex items-baseline gap-2">
        <span className="text-h7 font-medium text-primary-text tabular-nums">{formatPercent(value)}</span>
        <span className="inline-flex items-center gap-1 text-foot12 text-secondary-text">
          {label}
          <InfoTip label={tipLabel} content={tip} />
        </span>
      </div>
      <div aria-hidden="true" className="h-1.5 w-full overflow-hidden rounded-full bg-secondarycontainer">
        <div className={cn("h-full rounded-full", barClass)} style={{ width: `${Math.round(value * 100)}%` }} />
      </div>
    </div>
  );
}


// ---------------------------------------------------------------------------
// 维保合同
// ---------------------------------------------------------------------------

type LegendItem = { label: ReactNode; value: number; dotClass: string; key: string };

function LegendGrid({ items, columns = 2 }: { items: LegendItem[]; columns?: 1 | 2 }) {
  return (
    <dl className={cn("grid gap-x-3.5 gap-y-1.5", columns === 2 ? "grid-cols-[auto_auto]" : "grid-cols-1")}>
      {items.map((item) => (
        <div key={item.key} className="flex items-center gap-[5px] text-foot12">
          <LegendDot className={item.dotClass} />
          <dt className="min-w-10 text-secondary-text">{item.label}</dt>
          <dd className="min-w-[46px] text-primary-text tabular-nums">{formatCount(item.value)}</dd>
        </div>
      ))}
    </dl>
  );
}

function SubCard({ children, ring }: { children: ReactNode; ring: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg bg-secondarycontainer px-4 py-3">
      <div className="flex min-w-0 flex-col gap-2">{children}</div>
      {ring}
    </div>
  );
}

function SubCardTitle({ value, label }: { value: number; label: string }) {
  return (
    <p className="flex items-baseline gap-2">
      <span className="text-h7 font-medium text-primary-text tabular-nums">{formatCount(value)}</span>
      <span className="text-foot12 text-secondary-text">{label}</span>
    </p>
  );
}

function GroupTitle({ value, label, tip }: { value: number; label: string; tip?: ReactNode }) {
  return (
    <h3 className="flex items-baseline gap-2 text-body font-normal">
      <span className="text-h5 font-semibold text-primary-text tabular-nums">{formatCount(value)}</span>
      <span className="inline-flex items-center gap-0.5 text-primary-text">
        {label}
        {tip}
      </span>
    </h3>
  );
}

const COLORS = {
  registered: "var(--brand-2nd-green)",
  unregistered: "var(--bg-color-secondarycontainer-hover)",
  online: "var(--brand-color)",
  abnormal: "var(--brand-2nd-pink)",
  company: "var(--categorical-color-1)",
  customer: "var(--categorical-color-4)",
};

function ContractCard({ stats, language }: { stats: ReturnType<typeof computeOverviewStats>["contract"]; language: Language }) {
  const t = overviewCopy[language];

  const registrationCard = (data: typeof stats.withAgreement, label: string) => (
    <SubCard
      ring={
        <Ring
          size={68}
          label={`${label}：${t.registered} ${data.registered}，${t.unregistered} ${data.unregistered}，${t.online} ${data.online}，${t.abnormal} ${data.abnormal}`}
          layers={[
            {
              innerRadius: 29,
              outerRadius: 34,
              segments: [
                { name: t.registered, value: data.registered, color: COLORS.registered },
                { name: t.unregistered, value: data.unregistered, color: COLORS.unregistered },
              ],
            },
            {
              innerRadius: 21,
              outerRadius: 25,
              segments: [
                { name: t.online, value: data.online, color: COLORS.online },
                { name: t.abnormal, value: data.abnormal, color: COLORS.abnormal },
              ],
            },
          ]}
        />
      }
    >
      <SubCardTitle value={data.total} label={label} />
      <LegendGrid
        items={[
          { key: "registered", label: t.registered, value: data.registered, dotClass: "bg-brand-2nd-green" },
          { key: "unregistered", label: t.unregistered, value: data.unregistered, dotClass: "bg-secondarycontainer-hover" },
          { key: "online", label: t.online, value: data.online, dotClass: "bg-brand-base" },
          { key: "abnormal", label: t.abnormal, value: data.abnormal, dotClass: "bg-brand-2nd-pink" },
        ]}
      />
    </SubCard>
  );

  const invalid = stats.invalidScheduled;

  return (
    <section aria-labelledby="device-overview-contract" className={cn(CARD, "flex flex-col gap-5 p-4")}>
      <h2 id="device-overview-contract" className="text-h7 font-medium text-primary-text">
        {t.contractTitle}
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <GroupTitle value={stats.valid} label={t.contractValid} />
          <div className="flex flex-col gap-3">
            {registrationCard(stats.withAgreement, t.withAgreement)}
            {registrationCard(stats.withoutAgreement, t.withoutAgreement)}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <GroupTitle
            value={invalid.total}
            label={t.invalidScheduled}
            tip={<InfoTip label={t.tipLabel(t.invalidScheduled)} content={t.tips.invalidScheduled} />}
          />
          <SubCard
            ring={
              <Ring
                size={52}
                label={`${t.invalidScheduled}：${t.online} ${invalid.online}，${t.abnormal} ${invalid.abnormal}`}
                layers={[
                  {
                    innerRadius: 21,
                    outerRadius: 26,
                    segments: [
                      { name: t.online, value: invalid.online, color: COLORS.online },
                      { name: t.abnormal, value: invalid.abnormal, color: COLORS.abnormal },
                    ],
                  },
                ]}
              />
            }
          >
            <SubCardTitle value={invalid.registered} label={t.registered} />
            <LegendGrid
              items={[
                { key: "online", label: t.online, value: invalid.online, dotClass: "bg-brand-base" },
                { key: "abnormal", label: t.abnormal, value: invalid.abnormal, dotClass: "bg-brand-2nd-pink" },
              ]}
            />
          </SubCard>
        </div>

        <div className="flex flex-col gap-2">
          <GroupTitle
            value={stats.expiring.total}
            label={t.expiring}
            tip={<InfoTip label={t.tipLabel(t.expiring)} content={t.tips.expiring} />}
          />
          <SubCard
            ring={
              <Ring
                size={52}
                label={`${t.expiring}：${t.companyOwned} ${stats.expiring.company}，${t.customerOwned} ${stats.expiring.customer}`}
                layers={[
                  {
                    innerRadius: 21,
                    outerRadius: 26,
                    segments: [
                      { name: t.companyOwned, value: stats.expiring.company, color: COLORS.company },
                      { name: t.customerOwned, value: stats.expiring.customer, color: COLORS.customer },
                    ],
                  },
                ]}
              />
            }
          >
            <dl className="flex flex-col gap-2">
              {[
                { key: "company", label: t.companyOwned, tip: t.tips.companyOwned, value: stats.expiring.company, dotClass: "bg-categorical-1" },
                { key: "customer", label: t.customerOwned, tip: t.tips.customerOwned, value: stats.expiring.customer, dotClass: "bg-categorical-4" },
              ].map((item) => (
                <div key={item.key} className="flex items-center gap-[5px] text-foot12">
                  <LegendDot className={item.dotClass} />
                  <dt className="inline-flex min-w-[76px] items-center gap-1 text-secondary-text">
                    {item.label}
                    <InfoTip label={t.tipLabel(item.label)} content={item.tip} />
                  </dt>
                  <dd className="ml-4 text-primary-text tabular-nums">{formatCount(item.value)}</dd>
                </div>
              ))}
            </dl>
          </SubCard>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 仟帆 · 设备状态对比（替代维保合同卡片）
// ---------------------------------------------------------------------------

/** 环心：总数 + 说明，文字取图表主题色，亮 / 暗主题下都可读。 */
function RingCenter({ total, label }: { total: number; label: string }) {
  return (
    <>
      <span className="text-h5 font-semibold tabular-nums" style={{ color: "var(--viz-title)" }}>
        {formatCount(total)}
      </span>
      <span className="text-foot12" style={{ color: "var(--viz-subtitle)" }}>
        {label}
      </span>
    </>
  );
}

/** 外圈标签（色块之后）：类别 + 数字，一行排布；数字（台量与占比）加粗一档，Body 14。 */
function ringLabel(slice: { name: string; value: number; percent: number }) {
  return (
    <span className="inline-flex items-baseline gap-3">
      <span className="text-secondary-text">{slice.name}</span>
      <span className="inline-flex items-baseline gap-2 font-medium tabular-nums">
        <span>{formatCount(slice.value)}</span>
        <span>{formatPercent(slice.percent)}</span>
      </span>
    </span>
  );
}

/**
 * 仟帆：云管家设备「已注册 / 未注册」与「在线 / 离线」两张上下排布的环形图卡。
 * 用图表规范的 PieChart ring：卡片头同一行标题在左、图例靠右（12px，与趋势卡图例同号）；
 * 外圈标签带引导线，14 号字，一行排布：色块、类别、数字（台量与占比，加粗一档）。颜色沿用业务语义色：已注册绿、未注册灰、在线 KONE 蓝、离线粉。
 * 两张卡均分右列高度，与左侧「设备在线趋势」卡底部对齐。
 */
function DeviceStatusCards({ devices, language }: { devices: OverviewDevice[]; language: Language }) {
  const t = overviewCopy[language];
  const stewards = devices.filter((device) => device.steward);
  const registered = stewards.filter((device) => device.status !== "unregistered").length;
  const online = stewards.filter((device) => device.status === "online").length;

  return (
    <div className="flex flex-1 flex-col gap-4">
      <PieChart
        variant="ring"
        surface="page"
        labelPlacement="side"
        labelSize="md"
        renderLabel={ringLabel}
        title={t.registrationCompareTitle}
        height="auto"
        className="min-h-[220px] flex-1"
        center={<RingCenter total={stewards.length} label={t.ringTotalLabel} />}
        data={[
          { name: t.registered, value: registered, color: COLORS.registered },
          { name: t.unregistered, value: stewards.length - registered, color: COLORS.unregistered },
        ]}
      />
      <PieChart
        variant="ring"
        surface="page"
        labelPlacement="side"
        labelSize="md"
        renderLabel={ringLabel}
        title={t.onlineCompareTitle}
        height="auto"
        className="min-h-[220px] flex-1"
        center={<RingCenter total={registered} label={t.ringRegisteredLabel} />}
        data={[
          { name: t.online, value: online, color: COLORS.online },
          { name: t.abnormal, value: registered - online, color: COLORS.abnormal },
        ]}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// 项目列表
// ---------------------------------------------------------------------------

type ProjectRow = OverviewProject & { devices: OverviewDevice[]; elevators: number; escalators: number; stewards: number; tenant: string };

/** 子表格末列宽度：取主表格末列的实测宽度；未测到时按「文字 + 左右边距」估算。 */
const LAST_COL_WIDTH = "var(--project-table-last-col, calc(84px + var(--iot-table-edge-end)))";

/** 子表格里的云管家状态：6px 圆点 + 12/20 文字，间距 4；在线绿 / 断连橙 / 离线红 / 未注册灰（Figma 4497:14809）。 */
const SUB_STATUS_CLASS: Record<OverviewDevice["status"], string> = {
  online: "text-success",
  disconnected: "text-warning",
  offline: "text-error",
  unregistered: "text-disabled",
};

/**
 * 展开行里的设备清单（Figma 子表格 4497:14809，外层表格取最新页面 7105:17280）：
 * 12/20 小号表格，表头灰底 + 占位色文字，单元格内边距 8、行高 36、行间 1px 分割线；
 * 左侧留出展开列宽度的灰色缩进。尺寸与分割线写在 tdesign-patches.css 的 .device-overview-subtable，
 * 因为 TDesign 的 `.t-table td` 样式优先于 Tailwind 工具类。
 */
function ProjectDevices({ project, language, isQianfan }: { project: ProjectRow; language: Language; isQianfan: boolean }) {
  const t = deviceCopy[language];
  const statusCell = (device: OverviewDevice) => (
    <span className={cn("inline-flex items-center gap-1", SUB_STATUS_CLASS[device.status])}>
      <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-current" />
      {t.options[device.status]}
    </span>
  );
  type SubColumn = { key: string; title: string; width?: number; cell: (device: OverviewDevice) => ReactNode; className?: string };
  const idColumn: SubColumn = { key: "id", title: t.columns.id, width: 160, className: "tabular-nums", cell: (device) => device.id };
  const kindColumn: SubColumn = { key: "kind", title: t.columns.kind, cell: (device) => deviceKindLabel(device, t) };
  const controllerColumn: SubColumn = { key: "controller", title: t.columns.controller, cell: (device) => device.controller };
  const statusColumn: SubColumn = { key: "status", title: t.columns.onlineStatus, cell: statusCell };
  // 仟帆：设备编号 / 云管家编号 / 设备类型 / 控制器类型 / 在线状态；通力：完整九列
  const columns: SubColumn[] = isQianfan
    ? [
        idColumn,
        { key: "stewardCode", title: t.columns.stewardCode, width: 240, className: "tabular-nums", cell: (device) => device.stewardCode ?? "-" },
        kindColumn,
        controllerColumn,
        statusColumn,
      ]
    : [
        idColumn,
        { key: "name", title: t.columns.name, width: 240, cell: (device) => device.name },
        kindColumn,
        controllerColumn,
        { key: "steward", title: t.columns.steward, cell: (device) => yesNo(device.steward, t) },
        statusColumn,
        { key: "dispatch", title: t.columns.dispatch, cell: (device) => yesNo(device.isnDispatch, t) },
        { key: "contract", title: t.columns.contract, cell: (device) => (device.contractValid ? t.valid : t.invalid) },
        { key: "agreement", title: t.columns.agreement, cell: (device) => yesNo(device.agreement, t) },
      ];
  return (
    <div className="flex bg-secondarycontainer">
      {/* 与项目表展开列同宽（实测值写在 --project-table-expand-col），子表格首列文字因此与「项目名称」左对齐 */}
      <div aria-hidden="true" className="w-[var(--project-table-expand-col,calc(24px+var(--iot-table-edge-start)))] shrink-0" />
      {/* 滚动条为悬浮层（不占列宽）：默认隐藏，鼠标移入子表格区域才出现；内容溢出时纵向 / 横向滚动查看 */}
      <ScrollAreaPrimitive.Root type="hover" scrollHideDelay={400} className="relative min-w-0 flex-1 overflow-hidden bg-container">
        <ScrollAreaPrimitive.Viewport className="max-h-[396px] w-full [&>div]:!block">
          <table className={cn("device-overview-subtable", isQianfan && "device-overview-subtable--even")} style={{ minWidth: isQianfan ? 640 : undefined }}>
            <caption className="sr-only">{overviewCopy[language].devicesOf(project.name)}</caption>
            {/* 仟帆：五列均分；通力：编号 / 名称类的长字段定宽，末列按右边距定宽（表头文字 60 + 左内边距 8 + 右边距），其余列均分剩余宽度 */}
            <colgroup>
              {columns.map((column, index) => (
                <col
                  key={column.key}
                  style={
                    isQianfan
                      ? // 前四列等宽；末列宽 = 主表格末列宽，两张表的末列文字左对齐
                        index === columns.length - 1
                        ? { width: LAST_COL_WIDTH }
                        : undefined
                      : index === columns.length - 1
                        ? { width: LAST_COL_WIDTH }
                        : column.width
                          ? { width: column.width }
                          : undefined
                  }
                />
              ))}
            </colgroup>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key} scope="col">
                    {column.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {project.devices.map((device) => (
                <tr key={device.id}>
                  {columns.map((column) => (
                    <td key={column.key} className={column.className}>
                      {column.cell(device)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollAreaPrimitive.Viewport>
        <SubTableScrollbar orientation="vertical" />
        <SubTableScrollbar orientation="horizontal" />
      </ScrollAreaPrimitive.Root>
    </div>
  );
}

/** 子表格的悬浮滚动条：细条、圆角，叠在内容之上，不挤占表格宽度。 */
function SubTableScrollbar({ orientation }: { orientation: "vertical" | "horizontal" }) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      orientation={orientation}
      // 纵向滚动条从表头下沿开始（表头 36px + 1px 分割线），只在表体范围内出现，不压在表头上；!important 用来盖过 Radix 写在行内的 top: 0
      className={cn("z-[2] flex touch-none select-none p-[2px]", orientation === "vertical" ? "w-2.5 !top-[37px]" : "h-2.5 flex-col")}
    >
      <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-[var(--component-border)]" />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

function ProjectList({
  projects,
  devices,
  language,
  org,
  isQianfan,
}: {
  projects: OverviewProject[];
  devices: OverviewDevice[];
  language: Language;
  org: OrgNode[];
  /** 仟帆：增加「所属租户」列，去掉直梯 / 扶梯数量，设备总数改称「总设备」 */
  isQianfan: boolean;
}) {
  const t = overviewCopy[language];
  const tenantOf = useMemo(() => buildTenantLookup(org), [org]);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);

  const rows = useMemo<ProjectRow[]>(() => {
    const byProject = new Map<string, OverviewDevice[]>();
    for (const device of devices) {
      const list = byProject.get(device.projectId);
      if (list) list.push(device);
      else byProject.set(device.projectId, [device]);
    }
    return projects
      .filter((project) => byProject.has(project.id))
      .map((project) => {
        const projectDevices = byProject.get(project.id) ?? [];
        return {
          ...project,
          devices: projectDevices,
          elevators: projectDevices.filter((device) => device.kind === "elevator").length,
          escalators: projectDevices.filter((device) => device.kind === "escalator").length,
          stewards: projectDevices.filter((device) => device.steward).length,
          tenant: tenantOf.get(project.workgroupId) ?? "",
        };
      });
  }, [projects, devices, tenantOf]);

  const query = keyword.trim().toLowerCase();
  const filtered = query ? rows.filter((row) => row.name.toLowerCase().includes(query) || row.code.includes(query)) : rows;
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, pageCount);
  const pageRows = filtered.slice((current - 1) * pageSize, current * pageSize);

  const toggle = (id: string) => setExpandedKeys((keys) => (keys.includes(id) ? keys.filter((key) => key !== id) : [...keys, id]));

  const count = (value: number) => <span className="tabular-nums">{formatCount(value)}</span>;
  const columns: PrimaryTableCol<ProjectRow>[] = [
    {
      colKey: "expand",
      title: <span className="sr-only">{language === "cn" ? "展开" : "Expand"}</span>,
      // 按 16px 边距设计的宽度 40；带 EDGE_START_CLASS 后随统一边距加宽 8，实际 48（左 20 + 按钮 24 + 右 4）。
      // NO_SCALE_CLASS：不参与宽屏下的按比例拉伸，保持 48，子表格的左侧缩进也随之变窄
      width: 40,
      className: `device-overview-project-table__expand ${EDGE_START_CLASS} ${NO_SCALE_CLASS}`,
      cell: ({ row }) => {
        const open = expandedKeys.includes(row.id);
        return (
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? t.collapseProject(row.name) : t.expandProject(row.name)}
            onClick={() => toggle(row.id)}
            className={cn(
              "flex size-6 items-center justify-center rounded-sm border-0 bg-transparent transition-colors hover:bg-container-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base",
              open ? "text-link" : "text-icon-inactive",
            )}
          >
            <ChevronDownCircleIcon className={cn("size-4 transition-transform", open && "rotate-180")} />
          </button>
        );
      },
    },
    { colKey: "name", title: t.projectColumns.name, width: 180, ellipsis: true, cell: ({ row }) => row.name },
    { colKey: "code", title: t.projectColumns.code, width: 160, ellipsis: true, cell: ({ row }) => <span className="tabular-nums">{row.code}</span> },
    { colKey: "address", title: t.projectColumns.address, width: 220, ellipsis: true, cell: ({ row }) => row.address },
    ...(isQianfan ? [{ colKey: "tenant", title: t.projectColumns.tenant, width: 140, ellipsis: true, cell: ({ row }: { row: ProjectRow }) => row.tenant }] : []),
    { colKey: "devices", title: isQianfan ? t.projectColumns.devicesQianfan : t.projectColumns.devices, width: 120, cell: ({ row }) => count(row.devices.length) },
    ...(isQianfan
      ? []
      : [
          { colKey: "elevators", title: t.projectColumns.elevators, width: 120, cell: ({ row }: { row: ProjectRow }) => count(row.elevators) },
          { colKey: "escalators", title: t.projectColumns.escalators, width: 120, cell: ({ row }: { row: ProjectRow }) => count(row.escalators) },
        ]),
    // 末列收窄到内容宽度，右侧留白与首列边距一致（见 useEdgeFitColumns）
    { colKey: "stewards", title: isQianfan ? t.projectColumns.stewardsQianfan : t.projectColumns.stewards, width: 130, className: EDGE_END_CLASS, cell: ({ row }) => count(row.stewards) },
  ];
  const tableWrapperRef = useRef<HTMLDivElement>(null);
  const fittedColumns = useEdgeFitColumns(columns, tableWrapperRef, 1000);

  // 子表格与主表格对齐：把主表格「展开列」和「末列」的实际宽度写成 CSS 变量，
  // 子表格的左侧缩进 = 展开列宽（首列文字与「项目名称」左对齐），末列宽 = 主表格末列宽（两张表末列文字左对齐）。
  useLayoutEffect(() => {
    const wrapper = tableWrapperRef.current;
    if (!wrapper) return;
    const sync = () => {
      const headers = wrapper.querySelectorAll<HTMLElement>(".t-table__header th");
      if (headers.length === 0) return;
      wrapper.style.setProperty("--project-table-expand-col", `${headers[0].getBoundingClientRect().width}px`);
      wrapper.style.setProperty("--project-table-last-col", `${headers[headers.length - 1].getBoundingClientRect().width}px`);
    };
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [fittedColumns]);

  return (
    <section aria-labelledby="device-overview-projects" className={cn(CARD, "flex flex-col gap-4 p-4")}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 id="device-overview-projects" className="text-h7 font-medium text-primary-text">
          {t.projectList}
        </h2>
        <LabelledControl label={t.projectSearch} className="w-full max-w-[340px]">
          <Input
            size="medium"
            value={keyword}
            clearable
            placeholder={t.projectSearch}
            prefixIcon={<EmbeddedSearchIcon className="t-icon size-4" />}
            onChange={(value) => {
              setKeyword(String(value));
              setPage(1);
            }}
          />
        </LabelledControl>
      </div>

      <div ref={tableWrapperRef} className="overflow-x-auto rounded-md border border-stroke">
        <Table<ProjectRow>
          className="iot-list-page-table device-overview-project-table"
          style={{ minWidth: 1000 }}
          columns={fittedColumns}
          data={pageRows}
          rowKey="id"
          size="medium"
          tableLayout="fixed"
          hover
          disableDataPage
          expandIcon={false}
          expandedRowKeys={expandedKeys}
          expandedRow={({ row }) => <ProjectDevices project={row} language={language} isQianfan={isQianfan} />}
          empty={t.projectEmpty}
        />
      </div>

      {filtered.length > 0 && (
        <div className="flex min-h-16 flex-wrap items-center justify-between gap-4 px-6">
          <p className="text-body text-secondary-text">{t.total(filtered.length)}</p>
          <div className="iot-list-page-pagination-controls flex shrink-0 items-center whitespace-nowrap">
            <Pagination
              current={current}
              pageSize={pageSize}
              total={filtered.length}
              size="medium"
              showPageSize
              pageSizeOptions={[10, 20, 50]}
              showJumper
              totalContent={false}
              onChange={(info) => {
                if (info.pageSize !== pageSize) {
                  setPageSize(info.pageSize);
                  setPage(1);
                } else {
                  setPage(info.current);
                }
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

// ---------------------------------------------------------------------------
// 页面
// ---------------------------------------------------------------------------

export function OverviewView({
  language,
  edition,
  dataset,
  scope,
  scoped,
  scopeKey,
  onScopeChange,
  onQuery,
  onReset,
  onOpenFilter,
}: {
  language: Language;
  edition: AppEdition;
  dataset: OverviewDataset;
  scope: DataScope;
  scoped: { projects: OverviewProject[]; devices: OverviewDevice[] };
  /** 已应用数据范围的稳定标识 */
  scopeKey: string;
  onScopeChange: (scope: DataScope) => void;
  onQuery: () => void;
  onReset: () => void;
  onOpenFilter: () => void;
}) {
  const t = overviewCopy[language];
  const stats = useMemo(() => computeOverviewStats(scoped.projects, scoped.devices), [scoped]);
  const isQianfan = edition === "qianfan";
  const tenantCount = useMemo(() => countTenantsWithProjects(dataset.org, scoped.projects), [dataset.org, scoped.projects]);
  const trend = useMemo(() => buildTrend(stats.registrationRate, stats.onlineRate), [stats.registrationRate, stats.onlineRate]);

  // 仟帆：5 张统计卡等宽一行，行间距、卡片间距与通力版一致
  const kpiCards = (
    <KpiCards
      items={isQianfan ? [
        // 租户数量 = 当前数据范围内有项目的租户数
        { label: t.kpiQianfan.tenants, value: tenantCount },
        { label: t.kpiQianfan.projects, value: stats.kpi.projects },
        { label: t.kpiQianfan.devices, value: stats.kpi.devices },
        { label: t.kpi.stewards, value: stats.kpi.stewards },
        { label: t.onlineRate, value: formatPercent(stats.onlineRate) },
      ] : [
        { label: t.kpi.projects, value: stats.kpi.projects },
        { label: t.kpi.devices, value: stats.kpi.devices },
        { label: t.kpi.elevators, value: stats.kpi.elevators },
        { label: t.kpi.escalators, value: stats.kpi.escalators },
        { label: t.kpi.stewards, value: stats.kpi.stewards },
      ]}
    />
  );

  return (
    <div className="flex min-h-full w-full min-w-0 flex-col gap-3 px-6 pb-6 pt-[22px]">
      <h1 className="mb-3 text-h4 font-semibold text-primary-text">{t.title}</h1>

      <DataScopeBar language={language} edition={edition} org={dataset.org} scope={scope} onChange={onScopeChange} onQuery={onQuery} onReset={onReset} onOpenFilter={onOpenFilter} />

      {kpiCards}

      {/* 两个版本右列同宽（428px），趋势卡占剩余宽度 */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_428px]">
        {isQianfan ? (
          // 仟帆：与右侧两张环形图同一套卡片头——标题在左，图例与标题同一行靠右
          <ChartFrame
            surface="page"
            legendAlign="end"
            height="auto"
            className="min-h-[456px]"
            title={t.trendTitleOnline}
            ariaLabel={t.trendTitleOnline}
          >
            <div className="flex min-h-0 flex-1 flex-col pt-4">
              <TrendChart points={trend} onlineLabel={t.onlineRate} caption={t.trendCaptionOnline} language={language} area />
            </div>
          </ChartFrame>
        ) : (        <section aria-labelledby="device-overview-trend" className={cn(CARD, "flex min-h-[556px] flex-col gap-5 p-4")}>
          <h2 id="device-overview-trend" className="text-h7 font-medium text-primary-text">
            {t.trendTitle}
          </h2>
          {/* 仟帆：云管家设备数、真实在线率已移到顶部统计卡，这里只留折线图 */}
          {!isQianfan && (
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="flex items-baseline gap-3">
                <span className="text-h4 font-semibold text-primary-text tabular-nums">{formatCount(stats.inWarranty)}</span>
                <span className="inline-flex items-center gap-1.5 text-body text-primary-text">
                  {t.inWarranty}
                  <InfoTip label={t.tipLabel(t.inWarranty)} content={t.tips.inWarranty} />
                </span>
              </p>
              <div className="flex items-center gap-6">
                <RateMeter value={stats.registrationRate} label={t.registrationRate} tip={t.tips.registrationRate} tipLabel={t.tipLabel(t.registrationRate)} barClass="bg-brand-2nd-green" />
                <RateMeter value={stats.onlineRate} label={t.onlineRate} tip={t.tips.onlineRate} tipLabel={t.tipLabel(t.onlineRate)} barClass="bg-brand-base" />
              </div>
            </div>
          )}
          <TrendChart
            points={trend}
            registrationLabel={isQianfan ? undefined : t.registrationRate}
            onlineLabel={t.onlineRate}
            caption={isQianfan ? t.trendCaptionOnline : t.trendCaption}
            language={language}
            area
          />
        </section>)}
        {isQianfan ? (
          <DeviceStatusCards devices={scoped.devices} language={language} />
        ) : (
          <ContractCard stats={stats.contract} language={language} />
        )}
      </div>

      {/* 数据范围变化时重挂载，搜索词、页码与展开行一并回到初始状态 */}
      <ProjectList key={scopeKey} projects={scoped.projects} devices={scoped.devices} language={language} org={dataset.org} isQianfan={isQianfan} />
    </div>
  );
}
