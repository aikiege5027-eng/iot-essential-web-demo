import { useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Input, Pagination, Table } from "tdesign-react";
import type { PrimaryTableCol } from "tdesign-react";
import {
  buildTrend,
  computeOverviewStats,
  type DataScope,
  type OverviewDataset,
  type OverviewDevice,
  type OverviewProject,
} from "../../data/deviceOverview";
import { ChevronDownCircleIcon } from "../icons/chevron-down-circle";
import { EDGE_END_CLASS, EDGE_START_CLASS, useEdgeFitColumns } from "../templates/iot-list-page/useEdgeFitColumns";
import { EmbeddedSearchIcon } from "../icons/iot-list-page-icons";
import { cn } from "../ui/utils";
import { deviceCopy, overviewCopy, type Language } from "./copy";
import { DataScopeBar } from "./DataScopeBar";
import { LegendDot, Ring, TrendChart } from "./OverviewCharts";
import { DeviceStatus, deviceKindLabel, formatCount, formatPercent, InfoTip, LabelledControl, yesNo } from "./shared";

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

function KpiCards({ items }: { items: { label: string; value: number }[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
      {items.map((item) => (
        <li key={item.label} className={cn(CARD, "flex min-h-[89px] flex-col justify-center gap-1 px-[18px] py-3")}>
          <span className="text-h5 font-medium text-primary-text tabular-nums">{formatCount(item.value)}</span>
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
      <div className="flex items-end gap-2">
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
    <p className="flex items-end gap-2">
      <span className="text-h7 font-medium text-primary-text tabular-nums">{formatCount(value)}</span>
      <span className="text-foot12 text-secondary-text">{label}</span>
    </p>
  );
}

function GroupTitle({ value, label, tip }: { value: number; label: string; tip?: ReactNode }) {
  return (
    <h3 className="flex items-end gap-2 text-body font-normal">
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
// 项目列表
// ---------------------------------------------------------------------------

type ProjectRow = OverviewProject & { devices: OverviewDevice[]; elevators: number; escalators: number; stewards: number };

/** 展开行里的设备清单（Figma 4497:14405）：12/20 小号行，左侧留出展开列宽度的灰色缩进。 */
function ProjectDevices({ project, language }: { project: ProjectRow; language: Language }) {
  const t = deviceCopy[language];
  const headers = [t.columns.id, t.columns.name, t.columns.kind, t.columns.controller, t.columns.steward, t.columns.onlineStatus, t.columns.dispatch, t.columns.contract, t.columns.agreement];
  return (
    <div className="flex bg-secondarycontainer">
      {/* 与项目表展开列同宽（46 - 16 + 边距） */}
      <div aria-hidden="true" className="w-[calc(30px+var(--iot-table-edge-start))] shrink-0" />
      <div className="max-h-[396px] min-w-0 flex-1 overflow-y-auto bg-container">
        <table className="w-full table-fixed border-collapse text-left text-foot12">
          <caption className="sr-only">{overviewCopy[language].devicesOf(project.name)}</caption>
          <thead className="sticky top-0 z-[1] bg-secondarycontainer text-secondary-text">
            <tr>
              {headers.map((header, index) => (
                // 首列左 / 末列右边距 = 表格统一边距；末列宽度 = 表头文字 60 + 左 8 + 右边距，内容右侧不留多余空白
                <th
                  key={header}
                  scope="col"
                  className={cn("h-9 px-2 font-normal", index === 0 && "pl-[var(--iot-table-edge-start)]", index === 1 && "w-[22%]", index === headers.length - 1 && "w-[calc(68px+var(--iot-table-edge-end))] pr-[var(--iot-table-edge-end)]")}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-primary-text">
            {project.devices.map((device) => (
              <tr key={device.id} className="h-9 border-t border-stroke">
                <td className="pl-[var(--iot-table-edge-start)] pr-2 tabular-nums">{device.id}</td>
                <td className="truncate px-2" title={device.name}>
                  {device.name}
                </td>
                <td className="px-2">{deviceKindLabel(device, t)}</td>
                <td className="px-2">{device.controller}</td>
                <td className="px-2">{yesNo(device.steward, t)}</td>
                <td className="px-2">
                  <DeviceStatus device={device} t={t} />
                </td>
                <td className="px-2">{yesNo(device.isnDispatch, t)}</td>
                <td className="px-2">{device.contractValid ? t.valid : t.invalid}</td>
                <td className="pl-2 pr-[var(--iot-table-edge-end)]">{yesNo(device.agreement, t)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProjectList({ projects, devices, language }: { projects: OverviewProject[]; devices: OverviewDevice[]; language: Language }) {
  const t = overviewCopy[language];
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
        };
      });
  }, [projects, devices]);

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
      // 46 按 16px 边距设计；带 EDGE_START_CLASS 后随统一边距自动加宽
      width: 46,
      className: `device-overview-project-table__expand ${EDGE_START_CLASS}`,
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
    { colKey: "devices", title: t.projectColumns.devices, width: 120, cell: ({ row }) => count(row.devices.length) },
    { colKey: "elevators", title: t.projectColumns.elevators, width: 120, cell: ({ row }) => count(row.elevators) },
    { colKey: "escalators", title: t.projectColumns.escalators, width: 120, cell: ({ row }) => count(row.escalators) },
    // 末列收窄到内容宽度，右侧留白与首列边距一致（见 useEdgeFitColumns）
    { colKey: "stewards", title: t.projectColumns.stewards, width: 130, className: EDGE_END_CLASS, cell: ({ row }) => count(row.stewards) },
  ];
  const tableWrapperRef = useRef<HTMLDivElement>(null);
  const fittedColumns = useEdgeFitColumns(columns, tableWrapperRef, 1000);

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
          expandedRow={({ row }) => <ProjectDevices project={row} language={language} />}
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
  dataset,
  scope,
  scoped,
  scopeKey,
  onScopeChange,
  onQuery,
  onOpenFilter,
}: {
  language: Language;
  dataset: OverviewDataset;
  scope: DataScope;
  scoped: { projects: OverviewProject[]; devices: OverviewDevice[] };
  /** 已应用数据范围的稳定标识 */
  scopeKey: string;
  onScopeChange: (scope: DataScope) => void;
  onQuery: () => void;
  onOpenFilter: () => void;
}) {
  const t = overviewCopy[language];
  const stats = useMemo(() => computeOverviewStats(scoped.projects, scoped.devices), [scoped]);
  const trend = useMemo(() => buildTrend(stats.registrationRate, stats.onlineRate), [stats.registrationRate, stats.onlineRate]);

  return (
    <div className="flex min-h-full w-full min-w-0 flex-col gap-3 px-6 pb-6 pt-[22px]">
      <h1 className="mb-3 text-h4 font-semibold text-primary-text">{t.title}</h1>

      <DataScopeBar language={language} org={dataset.org} scope={scope} onChange={onScopeChange} onQuery={onQuery} onOpenFilter={onOpenFilter} />

      <KpiCards
        items={[
          { label: t.kpi.projects, value: stats.kpi.projects },
          { label: t.kpi.devices, value: stats.kpi.devices },
          { label: t.kpi.elevators, value: stats.kpi.elevators },
          { label: t.kpi.escalators, value: stats.kpi.escalators },
          { label: t.kpi.stewards, value: stats.kpi.stewards },
        ]}
      />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(340px,1fr)]">
        <section aria-labelledby="device-overview-trend" className={cn(CARD, "flex min-h-[556px] flex-col gap-5 p-4")}>
          <h2 id="device-overview-trend" className="text-h7 font-medium text-primary-text">
            {t.trendTitle}
          </h2>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="flex items-end gap-3">
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
          <hr className="border-0 border-t border-dashed border-stroke" />
          <TrendChart points={trend} registrationLabel={t.registrationRate} onlineLabel={t.onlineRate} caption={t.trendCaption} language={language} />
        </section>

        <ContractCard stats={stats.contract} language={language} />
      </div>

      {/* 数据范围变化时重挂载，搜索词、页码与展开行一并回到初始状态 */}
      <ProjectList key={scopeKey} projects={scoped.projects} devices={scoped.devices} language={language} />
    </div>
  );
}
