import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { Button, DateRangePicker, MessagePlugin, Pagination, Radio, Table } from "tdesign-react";
import type { PrimaryTableCol } from "tdesign-react";
import { ChevronUpIcon } from "../icons/chevron-up";
// 不用 cn()：tailwind-merge 会把 text-foot12 / text-body 当颜色类与 text-brand 等冲突后丢掉
import cn from "clsx";
import { EVENT_TYPES, getDeviceEvents, TIME, TIMELINE_ROWS, topThree, type DeviceEvent, type DeviceEventType, type TimelineRowType } from "../../data/deviceEvents";
import type { QueryDevice } from "../../data/deviceQuery";
import {
  AlarmIcon,
  CheckRectangleIcon,
  ChevronRightIcon,
  InfoFilledIcon,
  ListViewIcon,
  OverdueIcon,
  TimelineViewIcon,
  UserGroupIcon,
  UserMaintenanceIcon,
} from "../icons/device-detail-icons";
import { StatusLabel } from "../StatusLabel";
import { IoTDetailDrawer, IoTFieldList } from "../templates/iot-list-page";
import { detailCopy, formatDateTime, type DetailCopy, type Language } from "./copy";
import { DetailSection } from "./DetailSection";
import { TABLE_EDGE_END, TABLE_EDGE_START } from "../templates/iot-list-page/useEdgeFitColumns";
import { EventTimeline, type TimelineSelection } from "./EventTimeline";

/**
 * 设备事件页签。
 *
 * 默认视角（Figma 7447:28496）：日期时间区间 + 近24小时 / 近7天 / 近30天；事件统计（四类 Top3，可收起）；
 * 所有事件：7 类事件筛选标签（带数量）+ 事件表，行首图标进入时间戳，行尾箭头打开事件详情。
 *
 * 时间戳视角：以所点事件为中心，查看前后 30 分钟（共一小时）的事件。
 *   · 视图切换顺序为「时间线 | 列表」，进入时间戳默认显示时间线（Figma 9375:185341）
 *   · 时间线视图：见 EventTimeline；行可拖动排序、可按事件类型筛选显示（9375:186115）
 *   · 列表视图（7447:28827）：所选事件行高亮置顶，其余按时间先后排列
 * 进入时间戳后日期区间与快捷范围置灰，事件统计保持当前展开状态；「退出时间戳」回到默认视角。
 */

type Range = "24h" | "7d" | "30d";
const RANGE_MS: Record<Range, number> = { "24h": 24 * TIME.HOUR, "7d": 7 * 24 * TIME.HOUR, "30d": 30 * 24 * TIME.HOUR };
const HALF_HOUR = 30 * TIME.MINUTE;
const PAGE_SIZE = 10;

const parseTime = (value: string) => new Date(value.replace(" ", "T")).getTime();

// ---------------------------------------------------------------------------
// 事件统计 Top3
// ---------------------------------------------------------------------------

// Top3 名次色：1 / 2 / 3（Figma color/red-brand/400 #ff7949、color/orange/400 #ffb145、color/orange/200 #ffd18d）
const RANK_BAR = ["bg-[var(--timeline-fault)]", "bg-[var(--timeline-alarm)]", "bg-[var(--warning-color-disabled)]"];

/**
 * 事件统计卡（Figma 7447:30198）：color/grey/50 底、描边、6px 圆角，px 16 / py 12；
 * 标题行（20px 图标 + Body 14 Medium，右侧 Foot 12 次要色「Top 3」）与列表间距 13；
 * 每项：16px 名次圆 + Foot 12 名称（间距 7），右侧 Body 14 Medium 次数 + Foot 12 次要色「次」；下方 4px 进度条（底 color/grey/250）。
 */
function Top3Card({ icon, title, items, t }: { icon: ReactNode; title: string; items: [string, number][]; t: DetailCopy }) {
  const max = Math.max(1, ...items.map(([, count]) => count));
  return (
    <section className="flex flex-col gap-[13px] rounded-md border border-stroke bg-section-header px-4 py-3">
      <header className="flex items-end justify-between">
        <h4 className="m-0 flex items-center gap-1 text-body font-medium text-primary-text">
          <span className="text-icon-primary [&>svg]:size-5">{icon}</span>
          {title}
        </h4>
        <span className="text-foot12 text-secondary-text">{t.top3}</span>
      </header>
      {items.length === 0 ? (
        <p className="py-6 text-center text-foot12 text-secondary-text">{t.empty}</p>
      ) : (
        <ol className="m-0 flex list-none flex-col gap-3 p-0 pl-1">
          {items.map(([label, count], index) => (
            <li key={label} className="flex flex-col gap-1">
              <div className="flex items-center justify-between gap-3">
                <span className="flex min-w-0 items-center gap-[7px] text-foot12 text-primary-text">
                  <span aria-hidden="true" className={cn("flex size-4 shrink-0 items-center justify-center rounded-full text-foot12 font-medium text-white-text", RANK_BAR[index])}>
                    {index + 1}
                  </span>
                  <span className="truncate">{label}</span>
                </span>
                <span className="flex shrink-0 items-end">
                  <span className="text-body font-medium text-primary-text tabular-nums">{count}</span>
                  <span className="text-foot12 text-secondary-text">{t.times}</span>
                </span>
              </div>
              <div aria-hidden="true" className="h-1 rounded-full bg-metric-tile-neutral">
                <div className={cn("h-full rounded-full", RANK_BAR[index])} style={{ width: `${(count / max) * 100}%` }} />
              </div>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

// ---------------------------------------------------------------------------

function exportCsv(events: DeviceEvent[], device: QueryDevice, t: DetailCopy) {
  const header = [t.columns.type, t.columns.code, t.columns.description, t.columns.time, t.columns.status];
  const rows = events.map((event) => [
    t.types[event.type],
    event.code ?? "-",
    event.description ?? "-",
    formatDateTime(event.time),
    event.status === "unrecovered" ? t.unrecovered : event.status === "recovered" ? t.recovered : "-",
  ]);
  const escape = (value: string) => (/[",\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value);
  const csv = [header, ...rows].map((line) => line.map(escape).join(",")).join("\n");
  const url = URL.createObjectURL(new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `${device.id}_${t.events}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

export function DeviceEventsTab({ device, language }: { device: QueryDevice; language: Language }) {
  const t = detailCopy[language];
  // 「现在」在挂载时取一次；顶栏刷新会重挂载本页签
  const [now] = useState(() => Math.floor(Date.now() / 1000) * 1000);
  const [range, setRange] = useState<Range | null>("24h");
  const [customRange, setCustomRange] = useState<string[]>([]);
  const [statsOpen, setStatsOpen] = useState(true);
  const [disabledTypes, setDisabledTypes] = useState<Set<DeviceEventType>>(new Set());
  const [page, setPage] = useState(1);
  const [detail, setDetail] = useState<DeviceEvent | null>(null);

  // 时间戳
  const [anchor, setAnchor] = useState<DeviceEvent | null>(null);
  const [view, setView] = useState<"list" | "timeline">("timeline");
  // 时间线行顺序（可拖动调整）与隐藏的行（「事件类型」筛选），切换视图时保留
  const [rowOrder, setRowOrder] = useState<TimelineRowType[]>(TIMELINE_ROWS);
  const [hiddenRows, setHiddenRows] = useState<Set<TimelineRowType>>(new Set());
  const [windowStart, setWindowStart] = useState(0);
  const [selection, setSelection] = useState<TimelineSelection>(null);
  const [anchorMode, setAnchorMode] = useState<"start" | "end">("start");
  const [pickedTime, setPickedTime] = useState("");

  const scope = useMemo(() => {
    if (customRange.length === 2) return { start: parseTime(customRange[0]), end: parseTime(customRange[1]) + 1000 };
    return { start: now - RANGE_MS[range ?? "24h"], end: now + 1000 };
  }, [customRange, now, range]);

  const scopeEvents = useMemo(() => getDeviceEvents(device.id, scope.start, scope.end), [device.id, scope]);
  const windowRange = { start: windowStart, end: windowStart + TIME.HOUR };
  const windowEvents = useMemo(
    () => (anchor ? getDeviceEvents(device.id, windowStart, windowStart + TIME.HOUR).sort((a, b) => a.time - b.time) : []),
    [anchor, device.id, windowStart],
  );

  const baseEvents = anchor ? windowEvents : scopeEvents;
  const counts = useMemo(() => {
    const map = new Map<DeviceEventType, number>(EVENT_TYPES.map((type) => [type, 0]));
    for (const event of baseEvents) map.set(event.type, (map.get(event.type) ?? 0) + 1);
    return map;
  }, [baseEvents]);
  const visibleEvents = baseEvents.filter((event) => !disabledTypes.has(event.type));

  // 时间戳列表：所选事件置顶高亮，其余按时间先后
  const listRows = anchor
    ? [...visibleEvents.filter((event) => event.id === anchor.id), ...visibleEvents.filter((event) => event.id !== anchor.id)]
    : visibleEvents.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const enterTimestamp = (event: DeviceEvent) => {
    setAnchor(event);
    setView("timeline");
    setWindowStart(event.time - HALF_HOUR);
    setSelection({ id: event.id, time: event.time });
    setPickedTime("");
  };
  const exitTimestamp = () => {
    setAnchor(null);
    setSelection(null);
  };

  const toggleType = (type: DeviceEventType) => {
    setDisabledTypes((current) => {
      const next = new Set(current);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
    setPage(1);
  };

  const statusCell = (event: DeviceEvent) =>
    event.status === "unrecovered" ? (
      // 块级 flex：避免 inline-flex 在单元格行框里多出基线空隙把行撑高
      <StatusLabel tone="error" className="flex w-fit">{t.unrecovered}</StatusLabel>
    ) : event.status === "recovered" ? (
      <StatusLabel tone="success" className="flex w-fit">{t.recovered}</StatusLabel>
    ) : (
      "-"
    );

  const columns: PrimaryTableCol<DeviceEvent>[] = [
    {
      colKey: "timestamp",
      title: <span className="sr-only">{language === "cn" ? "时间戳" : "Timestamp"}</span>,
      // 外侧内边距 (边距 - 8) + 32px 按钮 + 8，图标距左边缘 = 表格左边距
      width: TABLE_EDGE_START + 32,
      className: "device-events-table__icon device-events-table__icon-start",
      cell: ({ row }) => {
        const active = anchor?.id === row.id;
        if (anchor && !active) return null;
        return (
          <button
            type="button"
            aria-label={t.timestampOpen(t.types[row.type], formatDateTime(row.time))}
            aria-pressed={active}
            disabled={active}
            onClick={() => enterTimestamp(row)}
            className={cn(
              // 设计稿：TDesign 文字圆形按钮（32px）+ 图标库 overdue，默认 #8f9195，hover 浅灰底
              "flex size-8 items-center justify-center rounded-full border-0 bg-transparent transition-colors hover:bg-container-active focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base",
              active ? "text-brand" : "text-icon-inactive",
            )}
          >
            <OverdueIcon className="size-4" />
          </button>
        );
      },
    },
    // 设计稿（7447:30251）：事件类型 / 事件代码 / 描述 / 发生时间四列等宽（各 227），状态 125，首尾图标列各 48
    { colKey: "type", title: t.columns.type, cell: ({ row }) => t.types[row.type] },
    { colKey: "code", title: t.columns.code, ellipsis: true, cell: ({ row }) => <span className="tabular-nums">{row.code ?? "-"}</span> },
    { colKey: "description", title: t.columns.description, ellipsis: true, cell: ({ row }) => row.description ?? "-" },
    { colKey: "time", title: t.columns.time, cell: ({ row }) => <span className="tabular-nums">{formatDateTime(row.time)}</span> },
    { colKey: "status", title: t.columns.status, width: 125, cell: ({ row }) => statusCell(row) },
    {
      colKey: "detail",
      title: <span className="sr-only">{t.eventDetail}</span>,
      // 箭头列视为最右列：8 + 32px 按钮 + 右边距
      width: TABLE_EDGE_END + 40,
      className: "device-events-table__icon device-events-table__icon-end",
      cell: ({ row }) =>
        row.type === "mode" ? null : (
          <button
            type="button"
            aria-label={t.detailOpen(t.types[row.type])}
            onClick={() => setDetail(row)}
            className="flex size-8 items-center justify-center rounded-sm border-0 bg-transparent text-icon-inactive hover:bg-container-hover hover:text-icon-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
          >
            <ChevronRightIcon className="size-4" />
          </button>
        ),
    },
  ];

  const anchorWindowStart = anchor ? anchor.time - HALF_HOUR : 0;

  return (
    <>
      <DetailSection
        title={t.events}
        titleId="device-events-title"
        extra={
          <>
            <div className="w-[320px]">
              <DateRangePicker
                size="small"
                enableTimePicker
                clearable
                disabled={Boolean(anchor)}
                value={customRange}
                placeholder={[t.startDateTime, t.endDateTime]}
                onChange={(value) => {
                  const next = (value as string[]).filter(Boolean);
                  setCustomRange(next);
                  setRange(next.length === 2 ? null : "24h");
                  setPage(1);
                }}
              />
            </div>
            <Radio.Group
              theme="button"
              variant="default-filled"
              size="small"
              disabled={Boolean(anchor)}
              value={range ?? undefined}
              onChange={(next) => {
                setRange(next as Range);
                setCustomRange([]);
                setPage(1);
              }}
              options={(Object.keys(t.eventRanges) as Range[]).map((key) => ({ label: t.eventRanges[key], value: key }))}
            />
          </>
        }
      >
        <div className="flex flex-col gap-4 px-4 pb-4 pt-3">
          {/* 事件统计 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="m-0 text-body font-medium text-primary-text">{t.eventStats}</h3>
              {/* 收起 / 展开（Figma 7447:30194）：Foot 12 Regular、次要文字色 + 16px chevron，间距 2，无 hover 效果。
                  base 层给所有 button 设了 font-medium，这里需显式写 font-normal */}
              <button
                type="button"
                aria-expanded={statsOpen}
                aria-controls="device-events-stats"
                onClick={() => setStatsOpen((open) => !open)}
                className="inline-flex items-center gap-0.5 rounded-xs border-0 bg-transparent p-0 text-foot12 font-normal text-secondary-text focus-visible:outline-2 focus-visible:outline-brand-base"
              >
                {statsOpen ? t.collapse : t.expand}
                <ChevronUpIcon className={cn("size-4 transition-transform", !statsOpen && "rotate-180")} />
              </button>
            </div>
            <div id="device-events-stats" hidden={!statsOpen} className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
              {statsOpen && (
                <>
                  <Top3Card t={t} icon={<AlarmIcon />} title={t.types.fault} items={topThree(scopeEvents, "fault", "code")} />
                  <Top3Card t={t} icon={<CheckRectangleIcon />} title={t.types.mode} items={topThree(scopeEvents, "mode", "description")} />
                  <Top3Card t={t} icon={<UserGroupIcon />} title={t.types.customer} items={topThree(scopeEvents, "customer", "code")} />
                  <Top3Card t={t} icon={<UserMaintenanceIcon />} title={t.types.service} items={topThree(scopeEvents, "service", "code")} />
                </>
              )}
            </div>
          </div>

          {/* 所有事件 */}
          <div className="flex flex-col gap-3">
            <h3 className="m-0 text-body font-medium text-primary-text">{t.allEvents}</h3>
            <div role="group" aria-label={t.allEvents} className="flex flex-wrap gap-2">
              {EVENT_TYPES.map((type) => {
                const count = counts.get(type) ?? 0;
                const on = !disabledTypes.has(type);
                const empty = count === 0;
                return (
                  <button
                    key={type}
                    type="button"
                    aria-pressed={on}
                    disabled={empty}
                    onClick={() => toggleType(type)}
                    className={cn(
                      "h-6 rounded-xs border px-2 text-foot12 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-base",
                      empty
                        ? "cursor-not-allowed border-stroke bg-container text-disabled"
                        : on
                          ? "border-brand-base bg-brand-light text-brand"
                          : "border-component-border bg-container text-secondary-text hover:border-brand-hover",
                    )}
                  >
                    {t.types[type]} <span className="tabular-nums">{String(count).padStart(2, "0")}</span>
                  </button>
                );
              })}
            </div>

            {anchor && (
              <>
                <div role="status" className="flex flex-wrap items-center justify-between gap-3 rounded-md bg-brand-light py-2 pl-3 pr-5">
                  <p className="flex items-center gap-2 text-body text-primary-text">
                    <InfoFilledIcon className="size-5 shrink-0 text-brand" />
                    <span>
                      {t.timestampNotice[0]}
                      <strong className="font-medium">{t.timestampNotice[1]}</strong>
                      {t.timestampNotice[2]}
                    </span>
                  </p>
                  <Button variant="text" theme="primary" size="medium" style={{ paddingInline: 0 }} onClick={exitTimestamp}>
                    {t.exitTimestamp}
                  </Button>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <Radio.Group
              theme="button"
                    variant="default-filled"
                    size="small"
                    value={view}
                    onChange={(next) => setView(next as "list" | "timeline")}
                    options={[
                      {
                        value: "timeline",
                        label: (
                          <span className="inline-flex items-center gap-1">
                            <TimelineViewIcon className="size-4" />
                            {t.timelineView}
                          </span>
                        ),
                      },
                      {
                        value: "list",
                        label: (
                          <span className="inline-flex items-center gap-1">
                            <ListViewIcon className="size-4" />
                            {t.listView}
                          </span>
                        ),
                      },
                    ]}
                  />
                  <Button
                    theme="primary"
                    size="small"
                    onClick={() => {
                      exportCsv(visibleEvents, device, t);
                      MessagePlugin.success(t.exported(visibleEvents.length), 3000);
                    }}
                  >
                    {t.exportData}
                  </Button>
                </div>
              </>
            )}

            {anchor && view === "timeline" ? (
              <EventTimeline
                deviceId={device.id}
                language={language}
                window={windowRange}
                events={visibleEvents}
                rowOrder={rowOrder}
                onRowOrderChange={setRowOrder}
                hiddenRows={hiddenRows}
                onHiddenRowsChange={setHiddenRows}
                selection={selection}
                onSelect={setSelection}
                onShift={(hours) => setWindowStart((start) => start + hours * TIME.HOUR)}
                anchorMode={anchorMode}
                onAnchorModeChange={setAnchorMode}
                pickedTime={pickedTime}
                onPickTime={(value) => {
                  setPickedTime(value);
                  const time = parseTime(value);
                  setWindowStart(anchorMode === "start" ? time : time - TIME.HOUR);
                }}
                canLocate={windowStart !== anchorWindowStart}
                onLocate={() => {
                  setWindowStart(anchorWindowStart);
                  setPickedTime("");
                  setSelection({ id: anchor.id, time: anchor.time });
                }}
              />
            ) : (
              <>
                <div className="overflow-x-auto rounded-md border border-stroke">
                  <Table<DeviceEvent>
                    className="iot-list-page-table device-events-table"
                    style={{ minWidth: 960 }}
                    columns={columns}
                    data={listRows}
                    rowKey="id"
                    size="medium"
                    tableLayout="fixed"
                    hover
                    disableDataPage
                    rowClassName={({ row }) => (anchor?.id === row.id ? "device-events-table__anchor" : "")}
                    empty={t.empty}
                  />
                </div>
                {!anchor && visibleEvents.length > PAGE_SIZE && (
                  <div className="flex min-h-16 flex-wrap items-center justify-between gap-4 px-6">
                    <p className="text-body text-secondary-text">{t.total(visibleEvents.length)}</p>
                    <div className="iot-list-page-pagination-controls flex shrink-0 items-center whitespace-nowrap">
                      <Pagination
                        current={page}
                        pageSize={PAGE_SIZE}
                        total={visibleEvents.length}
                        size="medium"
                        showPageSize={false}
                        showJumper
                        totalContent={false}
                        onChange={(info) => setPage(info.current)}
                      />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </DetailSection>

      <IoTDetailDrawer open={detail !== null} onOpenChange={(open) => !open && setDetail(null)} title={detail ? t.types[detail.type] : t.eventDetail} description={t.eventDetail}>
        {detail && (
          <IoTFieldList
            items={[
              { label: t.columns.type, value: t.types[detail.type] },
              { label: t.columns.code, value: detail.code ?? "-" },
              { label: t.columns.description, value: detail.description ?? "-" },
              { label: t.columns.time, value: formatDateTime(detail.time) },
              {
                label: t.columns.status,
                value: detail.status === "unrecovered" ? t.unrecovered : detail.status === "recovered" ? t.recovered : "-",
                status: detail.status === "unrecovered" ? "error" : detail.status === "recovered" ? "success" : undefined,
              },
              { label: "#", value: device.id },
            ]}
          />
        )}
      </IoTDetailDrawer>
    </>
  );
}
