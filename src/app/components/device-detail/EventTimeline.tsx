import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import { Button, Checkbox, DatePicker, Popup, Select, Tooltip } from "tdesign-react";
// 不用 cn()：tailwind-merge 会把 text-foot12 当颜色类与 text-white-text 等冲突后丢掉
import cn from "clsx";
import {
  getTimelineRecords,
  TIMELINE_ROWS,
  type DeviceEvent,
  type DeviceEventType,
  type MotionSegment,
  type TimelineRowType,
} from "../../data/deviceEvents";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, DragHandleIcon, OverdueIcon } from "../icons/device-detail-icons";
import { detailCopy, formatClock, formatDateTime, rowLabel, type Language } from "./copy";

/**
 * 设备事件 · 时间戳下的时间线视图（Figma IOT Delivery 9375:185341「时间线增加拖动 / 事件筛选」，
 * 色块交互 7217:8993，开始 / 结束时间筛选 7173:17431）。
 *
 *   · 左侧行头 136 宽：顶部「事件类型 (n) ▾」下拉（9375:186115，多选 + 全选，未选中的类型整行隐藏）与事件总数；
 *     每行 36 高、#f5f7fa 底，六点手柄可拖动排序（键盘：聚焦手柄后用上下方向键），右侧 8px 图例圆点
 *   · 右侧顶部 52 高工具栏：时间区间（Body 14 Medium）+ 开始 / 结束时间组合输入框、上个小时、下个小时、回到所选事件
 *   · 时间刻度每 5 秒一格（82px），刻度文字 Foot 12 Medium 次要色左对齐；网格为虚线
 *   · 色块 26 高、4px 圆角：业务事件实色 + 白字 Medium；运行为浅蓝底品牌色文字（含载重）；呼梯浅绿底；
 *     静止为浅灰底，两侧各两条细竖线表示开关门
 *   · 底部横向滚动条：#fafbfc 底，#c8cad0 8px 圆角滑块
 * 业务事件色块可 Tab 聚焦；运动、呼叫色块数量多，只支持鼠标，完整信息同样可在列表视图读到。
 */

const TICK_SECONDS = 5;
const TICK_WIDTH = 82;
const PX_PER_SECOND = TICK_WIDTH / TICK_SECONDS;
const ROW_HEIGHT = 36;
const BLOCK_WIDTH = 70;
const HEADER_WIDTH = 136;

export type TimelineSelection = { id: string; time: number } | null;

const ROW_DOT: Record<Exclude<TimelineRowType, "motion">, string> = {
  call: "var(--success-color)",
  fault: "var(--timeline-fault)",
  alarm: "var(--timeline-alarm)",
  mode: "var(--timeline-mode)",
  customer: "var(--timeline-customer)",
  service: "var(--timeline-service)",
  repair: "var(--timeline-repair)",
  maintenance: "var(--timeline-maintenance)",
};

const EVENT_BLOCK_BG: Record<DeviceEventType, string> = {
  fault: "var(--timeline-fault)",
  alarm: "var(--timeline-alarm)",
  mode: "var(--timeline-mode)",
  customer: "var(--timeline-customer)",
  service: "var(--timeline-service)",
  repair: "var(--timeline-repair)",
  maintenance: "var(--timeline-maintenance)",
};

function eventBlockText(event: DeviceEvent, t: (typeof detailCopy)["cn"]) {
  if (event.type === "alarm") return t.types.alarm.replace("消息", "");
  if (event.type === "mode") return event.description?.split("→")[1] ?? t.types.mode;
  return event.code ?? t.types[event.type];
}

/** 演示数据没有载重，按片段 id 稳定生成 10%–90% */
function loadOf(id: string) {
  let hash = 0;
  for (const char of id) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return ((hash % 9) + 1) * 10;
}

function motionText(segment: MotionSegment, t: (typeof detailCopy)["cn"]) {
  if (segment.state === "static") return segment.from;
  const direction = (segment.toLevel ?? 0) > segment.fromLevel ? t.up : t.down;
  return `${direction}(${segment.from} [${segment.fromLevel + 1}]->${segment.to} [${(segment.toLevel ?? 0) + 1}]) ${t.load(loadOf(segment.id))}`;
}

/** 行头右侧图例：运动记录为「静止（空心浅灰）+ 运行（浅蓝）」两个圆点，其余为该类事件色 */
function RowLegend({ row, t }: { row: TimelineRowType; t: (typeof detailCopy)["cn"] }) {
  if (row !== "motion") {
    return <span aria-hidden="true" className="size-2 shrink-0 rounded-full" style={{ backgroundColor: ROW_DOT[row] }} />;
  }
  return (
    <Tooltip
      theme="light"
      placement="top-left"
      content={
        <span className="flex flex-col gap-1 text-foot12">
          <span className="flex items-center gap-1.5">
            <span aria-hidden="true" className="size-2 rounded-full border border-stroke bg-component" />
            {t.motionLegend.static}
          </span>
          <span className="flex items-center gap-1.5">
            <span aria-hidden="true" className="size-2 rounded-full bg-metric-tile-brand" />
            {t.motionLegend.running}
          </span>
        </span>
      }
    >
      <span
        tabIndex={0}
        role="img"
        aria-label={`${t.motionLegend.static}、${t.motionLegend.running}`}
        className="flex items-center gap-1 rounded-xs outline-none focus-visible:ring-2 focus-visible:ring-brand-focus"
      >
        <span aria-hidden="true" className="size-2 rounded-full border border-stroke bg-component" />
        <span aria-hidden="true" className="size-2 rounded-full bg-metric-tile-brand" />
      </span>
    </Tooltip>
  );
}

/** 「事件类型」筛选面板（9375:186115）：全选 + 9 类，选中项品牌浅底 + 品牌色文字 */
function RowFilter({
  t,
  hiddenRows,
  onChange,
}: {
  t: (typeof detailCopy)["cn"];
  hiddenRows: Set<TimelineRowType>;
  onChange: (next: Set<TimelineRowType>) => void;
}) {
  const shown = TIMELINE_ROWS.length - hiddenRows.size;
  const toggle = (row: TimelineRowType, checked: boolean) => {
    const next = new Set(hiddenRows);
    if (checked) next.delete(row);
    else next.add(row);
    onChange(next);
  };
  return (
    <div role="group" aria-label={t.filterRows} className="timeline-row-filter flex w-40 flex-col gap-0.5 p-1.5">
      <Checkbox
        className="timeline-row-filter__item"
        checked={hiddenRows.size === 0}
        indeterminate={shown > 0 && hiddenRows.size > 0}
        onChange={(checked) => onChange(checked ? new Set() : new Set(TIMELINE_ROWS))}
      >
        {t.selectAll}
      </Checkbox>
      {TIMELINE_ROWS.map((row) => {
        const on = !hiddenRows.has(row);
        return (
          <Checkbox key={row} className={cn("timeline-row-filter__item", on && "is-selected")} checked={on} onChange={(checked) => toggle(row, Boolean(checked))}>
            {rowLabel(t, row)}
          </Checkbox>
        );
      })}
    </div>
  );
}

export function EventTimeline({
  deviceId,
  language,
  window: range,
  events,
  rowOrder,
  onRowOrderChange,
  hiddenRows,
  onHiddenRowsChange,
  selection,
  onSelect,
  onShift,
  onPickTime,
  anchorMode,
  onAnchorModeChange,
  pickedTime,
  canLocate,
  onLocate,
}: {
  deviceId: string;
  language: Language;
  window: { start: number; end: number };
  /** 窗口内、已按事件筛选标签过滤后的业务事件 */
  events: DeviceEvent[];
  /** 行的显示顺序（拖动排序后的结果，含被隐藏的行） */
  rowOrder: TimelineRowType[];
  onRowOrderChange: (order: TimelineRowType[]) => void;
  /** 「事件类型」筛选中未选中的行，整行隐藏 */
  hiddenRows: Set<TimelineRowType>;
  onHiddenRowsChange: (next: Set<TimelineRowType>) => void;
  selection: TimelineSelection;
  onSelect: (selection: TimelineSelection) => void;
  onShift: (hours: number) => void;
  onPickTime: (value: string) => void;
  anchorMode: "start" | "end";
  onAnchorModeChange: (mode: "start" | "end") => void;
  pickedTime: string;
  canLocate: boolean;
  onLocate: () => void;
}) {
  const t = detailCopy[language];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<TimelineRowType | null>(null);
  const [dropTarget, setDropTarget] = useState<TimelineRowType | null>(null);
  const width = ((range.end - range.start) / 1000) * PX_PER_SECOND;
  const x = (time: number) => ((time - range.start) / 1000) * PX_PER_SECOND;

  const { segments, calls } = useMemo(() => getTimelineRecords(deviceId, range.start, range.end), [deviceId, range.start, range.end]);
  const rows = rowOrder.filter((row) => !hiddenRows.has(row));
  const eventsByType = useMemo(() => {
    const map = new Map<DeviceEventType, DeviceEvent[]>();
    for (const event of events) map.set(event.type, [...(map.get(event.type) ?? []), event]);
    return map;
  }, [events]);
  const rowCount = (row: TimelineRowType) => (row === "motion" ? null : row === "call" ? calls.length : (eventsByType.get(row)?.length ?? 0));
  // 事件总数只统计当前显示的行
  const total = rows.reduce((sum, row) => sum + (rowCount(row) ?? 0), 0);

  // 选中色块居中：进入、切换窗口、点选别的色块时都滚过去
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !selection) return;
    const frame = requestAnimationFrame(() => {
      container.scrollTo({ left: Math.max(0, x(selection.time) - container.clientWidth / 2), behavior: "smooth" });
    });
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range.start, selection?.id]);

  const ticks = useMemo(() => {
    const list: number[] = [];
    const first = Math.ceil(range.start / (TICK_SECONDS * 1000)) * TICK_SECONDS * 1000;
    for (let time = first; time <= range.end; time += TICK_SECONDS * 1000) list.push(time);
    return list;
  }, [range.start, range.end]);

  const moveRow = (row: TimelineRowType, target: TimelineRowType) => {
    if (row === target) return;
    const next = rowOrder.filter((item) => item !== row);
    next.splice(next.indexOf(target), 0, row);
    onRowOrderChange(next);
  };

  // 键盘排序：在可见行之间上下移动
  const onHandleKey = (event: KeyboardEvent<HTMLButtonElement>, row: TimelineRowType) => {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    event.preventDefault();
    const index = rows.indexOf(row);
    const neighbor = rows[event.key === "ArrowUp" ? index - 1 : index + 1];
    if (!neighbor) return;
    const next = rowOrder.filter((item) => item !== row);
    const at = next.indexOf(neighbor);
    next.splice(event.key === "ArrowUp" ? at : at + 1, 0, row);
    onRowOrderChange(next);
    requestAnimationFrame(() => document.getElementById(`timeline-handle-${row}`)?.focus());
  };

  const block = (
    id: string,
    time: number,
    left: number,
    blockWidth: number,
    label: string,
    title: string,
    style: CSSProperties,
    className: string,
    focusable: boolean,
  ) => {
    const hit = selection?.id === id;
    return (
      <button
        key={id}
        type="button"
        tabIndex={focusable ? 0 : -1}
        title={title}
        aria-label={title}
        aria-pressed={hit}
        onClick={() => onSelect({ id, time })}
        className={cn("event-block absolute top-[5px] flex h-[26px] items-center overflow-hidden rounded-sm border-0 text-left text-foot12", className, hit && "is-hit")}
        style={{ left, width: Math.max(4, blockWidth), ...style }}
      >
        <span className="truncate">{label}</span>
      </button>
    );
  };

  const rowContent = (row: TimelineRowType) => {
    if (row === "motion") {
      return segments.map((segment) => {
        const label = motionText(segment, t);
        const left = Math.max(0, x(segment.start));
        const right = Math.min(width, x(segment.end));
        return block(
          segment.id,
          segment.start,
          left + 1,
          right - left - 2,
          label,
          `${segment.state === "static" ? t.motionLegend.static : t.motionLegend.running} ${label} ${formatClock(segment.start)}–${formatClock(segment.end)}`,
          {},
          segment.state === "static"
            ? "event-block--static justify-center px-2 font-normal text-secondary-text"
            : "event-block--running px-2 font-normal text-brand",
          false,
        );
      });
    }
    if (row === "call") {
      return calls.map((call) => {
        const detail = call.kind === "hall" ? t.hallCall : t.carCall(call.floor);
        return block(call.id, call.time, x(call.time), BLOCK_WIDTH, t.hallCall, `${t.rows.call} ${detail} ${formatClock(call.time)}`, {}, "event-block--call px-1 font-normal", false);
      });
    }
    return (eventsByType.get(row) ?? []).map((event) => {
      const label = eventBlockText(event, t);
      return block(
        event.id,
        event.time,
        x(event.time),
        BLOCK_WIDTH,
        label,
        `${t.types[event.type]} ${event.code ?? ""} ${event.description ?? ""} ${formatDateTime(event.time)}`.replace(/\s+/g, " "),
        { backgroundColor: EVENT_BLOCK_BG[event.type] },
        "px-1 font-medium text-white-text",
        true,
      );
    });
  };

  return (
    <figure className="m-0 flex overflow-hidden rounded-md border border-stroke" aria-label={t.timelineCaption}>
      {/* 左侧：事件类型筛选 + 行头 */}
      <div className="shrink-0 border-r border-stroke" style={{ width: HEADER_WIDTH }}>
        <div className="flex h-[76px] flex-col gap-2 px-4 pt-3">
          <Popup trigger="click" placement="bottom-left" showArrow={false} overlayInnerClassName="timeline-row-filter-popup" content={<RowFilter t={t} hiddenRows={hiddenRows} onChange={onHiddenRowsChange} />}>
            <button
              type="button"
              aria-haspopup="true"
              aria-label={`${t.eventTypes}${t.rowCount(rows.length)}，${t.filterRows}`}
              className="flex items-center gap-1 self-start rounded-xs border-0 bg-transparent p-0 text-body font-semibold text-primary-text focus-visible:outline-2 focus-visible:outline-brand-base"
            >
              {t.eventTypes} ({rows.length})
              <ChevronDownIcon className="size-4" />
            </button>
          </Popup>
          <span className="text-body font-medium text-secondary-text tabular-nums">({total})</span>
        </div>
        {rows.map((row) => {
          const count = rowCount(row);
          const name = rowLabel(t, row);
          return (
            <div
              key={row}
              draggable
              onDragStart={(event) => {
                setDragging(row);
                event.dataTransfer.effectAllowed = "move";
                event.dataTransfer.setData("text/plain", row);
              }}
              onDragOver={(event) => {
                if (!dragging) return;
                event.preventDefault();
                setDropTarget(row);
              }}
              onDragLeave={() => setDropTarget((current) => (current === row ? null : current))}
              onDrop={(event) => {
                event.preventDefault();
                if (dragging) moveRow(dragging, row);
                setDragging(null);
                setDropTarget(null);
              }}
              onDragEnd={() => {
                setDragging(null);
                setDropTarget(null);
              }}
              className={cn(
                "flex items-center justify-between gap-1 border-t border-stroke bg-container-hover pl-2 pr-2.5",
                dragging === row && "opacity-50",
                dropTarget === row && dragging !== row && "shadow-[inset_0_2px_0_var(--brand-color)]",
              )}
              style={{ height: ROW_HEIGHT }}
            >
              <span className="flex min-w-0 items-center gap-1.5">
                <button
                  id={`timeline-handle-${row}`}
                  type="button"
                  aria-label={t.dragRow(name)}
                  onKeyDown={(event) => onHandleKey(event, row)}
                  className="flex shrink-0 cursor-grab items-center rounded-xs border-0 bg-transparent p-0 text-placeholder focus-visible:outline-2 focus-visible:outline-brand-base active:cursor-grabbing"
                >
                  <DragHandleIcon className="size-3" />
                </button>
                <span className="truncate text-foot12 font-medium text-primary-text">
                  {name}
                  {count !== null && <span className="tabular-nums">{t.rowCount(count)}</span>}
                </span>
              </span>
              <RowLegend row={row} t={t} />
            </div>
          );
        })}
      </div>

      {/* 右侧：工具栏 + 时间轴 + 色块 */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-[52px] items-center justify-between gap-3 px-2 pb-[18px] pt-3">
          <p className="m-0 whitespace-nowrap text-body font-medium text-primary-text tabular-nums">
            {formatDateTime(range.start)} ～ {formatDateTime(range.end)}
          </p>
          <div className="flex items-center gap-2">
            <div className="timeline-time-picker flex items-center">
              <div className="w-[92px]">
                <Select
                  size="small"
                  value={anchorMode}
                  options={[
                    { label: t.anchorStart, value: "start" },
                    { label: t.anchorEnd, value: "end" },
                  ]}
                  onChange={(next) => onAnchorModeChange(next as "start" | "end")}
                />
              </div>
              <div className="w-[140px]">
                <DatePicker
                  size="small"
                  enableTimePicker
                  format="YYYY-MM-DD HH:mm:ss"
                  value={pickedTime}
                  placeholder={t.pickTime}
                  onChange={(value) => value && onPickTime(String(value))}
                />
              </div>
            </div>
            <Button className="timeline-shift-button" size="small" variant="outline" theme="default" icon={<ChevronLeftIcon className="size-4" />} onClick={() => onShift(-1)}>
              {t.previousHour}
            </Button>
            <Button className="timeline-shift-button" size="small" variant="outline" theme="default" suffix={<ChevronRightIcon className="size-4" />} onClick={() => onShift(1)}>
              {t.nextHour}
            </Button>
            <Tooltip content={t.backToAnchor} placement="top" theme="light" showArrow>
              <Button
                size="small"
                variant="outline"
                theme="default"
                shape="square"
                disabled={!canLocate}
                aria-label={t.backToAnchor}
                icon={<OverdueIcon className="size-4" />}
                onClick={onLocate}
              />
            </Tooltip>
          </div>
        </div>

        <div ref={scrollRef} className="timeline-scroll min-w-0 overflow-x-auto">
          <div className="relative" style={{ width }}>
            {/* 刻度：每 5 秒一格，文字左对齐 */}
            <div className="relative h-6 border-b border-stroke">
              {ticks.map((time) => (
                <span key={time} className="absolute top-0 whitespace-nowrap pl-0.5 text-foot12 font-medium text-secondary-text tabular-nums" style={{ left: x(time) }}>
                  {formatClock(time)}
                </span>
              ))}
            </div>
            <div className="relative">
              {/* 竖向虚线网格 */}
              {ticks.map((time) => (
                <span key={time} aria-hidden="true" className="pointer-events-none absolute inset-y-0 border-l border-dashed border-stroke" style={{ left: x(time) }} />
              ))}
              {rows.map((row) => (
                <div key={row} className="relative border-b border-dashed border-stroke" style={{ height: ROW_HEIGHT }}>
                  {rowContent(row)}
                </div>
              ))}
              {selection && selection.time >= range.start && selection.time <= range.end && (
                <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 border-l border-dashed border-error" style={{ left: x(selection.time) }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
