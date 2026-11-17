import { useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "../ui/utils";
import { ChartFrame, type ChartFrameProps } from "./ChartFrame";
import { ChartLegend, LegendSquare } from "./ChartLegend";
import { ChartTooltipCard } from "./ChartTooltipCard";
import { chartColor, formatPercent, INNER_SERIES_COLORS, useElementSize } from "./chart-theme";

/**
 * 饼图（Figma China Data Visualization · 饼图 PieChart，224:5919）。
 *
 * 四种形态共用一套几何，用 SVG 直接绘制（Recharts 画不出引导线 / 玫瑰半径 / 嵌套内圈）：
 *   · pie     基础饼图：半径 80
 *   · ring    环形饼图：外径 80 / 内径 64
 *   · rose    南丁格尔玫瑰图：角度按占比，半径随数值 40 → 90 线性变化，中心留 r=14 的孔
 *   · nested  嵌套环形图：外环同 ring，内圈是半径 52 的饼图，内圈标签用 Text/mark text 写在色块里
 *
 * 通用规则：扇区间 1px 描边（取背景色），从 12 点钟顺时针；外圈标签是「色块 + 名称: 占比」，
 * 由一条 45° 斜线 + 水平线与扇区相连（Axes/axisline）。悬浮扇区显示提示卡，其余扇区淡出。
 */

export type PieChartVariant = "pie" | "ring" | "rose" | "nested";

export interface PieDatum {
  name: string;
  value: number;
  /** 不传则按序号取 categorical color-1…5 */
  color?: string;
}

export interface PieChartProps extends Pick<ChartFrameProps, "title" | "theme" | "height" | "className" | "surface" | "legendAlign"> {
  variant?: PieChartVariant;
  data: PieDatum[];
  /** nested 的内圈数据，颜色默认取 color-6…8 */
  innerData?: PieDatum[];
  /** 悬浮提示里的数值格式；默认千分位 */
  formatValue?: (value: number) => string;
  /**
   * 环心内容（仅 ring，孔径 128）：放总数、核心指标等。文字请用 `--viz-title` / `--viz-subtitle`，
   * 才能跟随图表的亮 / 暗主题；容器本身不拦截鼠标。
   */
  center?: ReactNode;
  /**
   * 外圈标签字号：sm（默认）10px / 字距 0.5，对应设计稿；md 14px（Body），
   * 业务页面里需要和正文同号、并带上数值时用；此时头部图例同步升到 12px（与折线图图例一致），标签之间的最小垂直间距随之加大。
   */
  labelSize?: "sm" | "md";
  /** 自定义标签内容（色块之后的部分）；默认「名称: 占比」。标签是一行排布，内容过长会超出绘图区。 */
  renderLabel?: (slice: { name: string; value: number; percent: number; color: string }) => ReactNode;
  /**
   * 说明文字的位置：leader（默认）沿圆环外侧用引导线标注，头部带图例；
   * side 圆环靠左、说明列在右侧竖排（每项一排：色块 + renderLabel 内容），不画引导线、也不显示头部图例。仅单环图使用。
   */
  labelPlacement?: "leader" | "side";
}

const TAU = Math.PI * 2;
const PIE_RADIUS = 80;
const RING_INNER_RADIUS = 64;
const PIE_RADIUS_COMPACT = 60;
const RING_INNER_RADIUS_COMPACT = 47;
const PIE_RADIUS_SIDE = 60;
const RING_INNER_RADIUS_SIDE = 50;
const ROSE_MIN_RADIUS = 40;
const ROSE_MAX_RADIUS = 90;
const ROSE_HOLE_RADIUS = 14;
const NESTED_INNER_RADIUS = 52;
/** 引导线：45° 斜段长度与水平段长度 */
const LEADER_DIAGONAL = 13;
const LEADER_HORIZONTAL = 18;
/** md 号标签文字更长，引导线缩短（斜段 8 / 水平段 8），让带数值的一行标签仍落在卡片内 */
const LEADER_DIAGONAL_COMPACT = 8;
const LEADER_HORIZONTAL_COMPACT = 8;
/** 同侧相邻标签的最小垂直间距 */
const LABEL_GAP = 16;
/** md 号（14px，行高 22）标签之间所需的垂直间距 */
const LABEL_GAP_MD = 28;

/** 角度以 12 点钟为 0、顺时针为正。 */
const polar = (cx: number, cy: number, radius: number, angle: number): [number, number] => [
  cx + radius * Math.sin(angle),
  cy - radius * Math.cos(angle),
];

function sectorPath(cx: number, cy: number, innerRadius: number, outerRadius: number, start: number, end: number) {
  // 整圆的路径起止点重合会画不出来，留一个极小的缺口
  const sweep = Math.min(end - start, TAU - 0.0001);
  const stop = start + sweep;
  const large = sweep > Math.PI ? 1 : 0;
  const [x0, y0] = polar(cx, cy, outerRadius, start);
  const [x1, y1] = polar(cx, cy, outerRadius, stop);
  if (innerRadius <= 0) {
    return `M${cx},${cy} L${x0},${y0} A${outerRadius},${outerRadius} 0 ${large} 1 ${x1},${y1} Z`;
  }
  const [x2, y2] = polar(cx, cy, innerRadius, stop);
  const [x3, y3] = polar(cx, cy, innerRadius, start);
  return `M${x0},${y0} A${outerRadius},${outerRadius} 0 ${large} 1 ${x1},${y1} L${x2},${y2} A${innerRadius},${innerRadius} 0 ${large} 0 ${x3},${y3} Z`;
}

interface Slice extends PieDatum {
  color: string;
  percent: number;
  start: number;
  end: number;
  mid: number;
  innerRadius: number;
  outerRadius: number;
}

function buildSlices(data: PieDatum[], options: { innerRadius: number; outerRadius: number | ((datum: PieDatum, max: number) => number); palette: (index: number) => string }): Slice[] {
  const total = data.reduce((sum, datum) => sum + Math.max(datum.value, 0), 0);
  const max = Math.max(...data.map((datum) => datum.value), 0);
  let cursor = 0;
  return data.map((datum, index) => {
    const percent = total === 0 ? 0 : Math.max(datum.value, 0) / total;
    const start = cursor;
    cursor += percent * TAU;
    return {
      ...datum,
      color: datum.color ?? options.palette(index),
      percent,
      start,
      end: cursor,
      mid: (start + cursor) / 2,
      innerRadius: options.innerRadius,
      outerRadius: typeof options.outerRadius === "function" ? options.outerRadius(datum, max) : options.outerRadius,
    };
  });
}

/**
 * 外圈标签的引导线与标签锚点。
 *
 * 每条引导线是「45° 斜段 + 水平段」，标签接在水平段末端。占比很小的相邻扇区（如 10% 与 5%）
 * 的斜段终点会落在同一高度，标签会叠在一起，所以同侧标签按垂直方向做防碰撞：
 * 上半区从靠近中线的一条开始向上让开，下半区向下让开，最小间距 16；斜段随之变长，保持 45°。
 */
function computeLeaders(cx: number, cy: number, slices: Slice[], labelGap: number, compact: boolean) {
  const diagonalLength = compact ? LEADER_DIAGONAL_COMPACT : LEADER_DIAGONAL;
  const horizontalLength = compact ? LEADER_HORIZONTAL_COMPACT : LEADER_HORIZONTAL;
  const raw = slices.map((slice) => {
    const [px, py] = polar(cx, cy, slice.outerRadius + 1, slice.mid);
    const direction = px >= cx ? 1 : -1;
    const vertical = Math.abs(py - cy) < 4 ? 0 : py < cy ? -1 : 1;
    return { px, py, direction, vertical, elbowY: py + vertical * diagonalLength };
  });

  for (const side of [1, -1]) {
    const items = raw.filter((item) => item.direction === side);
    const upper = items.filter((item) => item.elbowY < cy).sort((a, b) => b.elbowY - a.elbowY);
    const lower = items.filter((item) => item.elbowY >= cy).sort((a, b) => a.elbowY - b.elbowY);
    for (let k = 1; k < upper.length; k++) upper[k].elbowY = Math.min(upper[k].elbowY, upper[k - 1].elbowY - labelGap);
    for (let k = 1; k < lower.length; k++) lower[k].elbowY = Math.max(lower[k].elbowY, lower[k - 1].elbowY + labelGap);
  }

  return raw.map((item) => {
    const diagonal = item.vertical === 0 ? diagonalLength : Math.max(Math.abs(item.elbowY - item.py), 6);
    const elbowX = item.px + item.direction * diagonal;
    const endX = elbowX + item.direction * horizontalLength;
    return {
      points: `${item.px},${item.py} ${elbowX},${item.elbowY} ${endX},${item.elbowY}`,
      anchorX: endX + item.direction * 4,
      anchorY: item.elbowY,
      direction: item.direction,
    };
  });
}

export function PieChart({ variant = "pie", data, innerData, title, theme, height, className, surface, legendAlign, center, labelSize = "sm", renderLabel, labelPlacement = "leader", formatValue = (value) => value.toLocaleString("en-US") }: PieChartProps) {
  const plotRef = useRef<HTMLDivElement>(null);
  const { width, height: plotHeight } = useElementSize(plotRef);
  const [hover, setHover] = useState<{ group: "outer" | "inner"; index: number; x: number; y: number } | null>(null);

  const isRing = variant === "ring" || variant === "nested";
  // md 号一行标签很长：单环图收小圆环，把横向空间让给两侧标签，窄卡片里标签才不会溢出
  const side = labelPlacement === "side";
  const compactRing = variant === "ring" && labelSize === "md" && !side;
  // 说明列在右侧时不再占用圆环两侧，圆环可略大；但矮卡片里仍要与标题行留出间距
  const sideRing = variant === "ring" && side;
  const outerSlices = buildSlices(data, {
    innerRadius: variant === "rose" ? ROSE_HOLE_RADIUS : sideRing ? RING_INNER_RADIUS_SIDE : compactRing ? RING_INNER_RADIUS_COMPACT : isRing ? RING_INNER_RADIUS : 0,
    outerRadius:
      variant === "rose"
        ? (datum, max) => ROSE_MIN_RADIUS + (ROSE_MAX_RADIUS - ROSE_MIN_RADIUS) * (max === 0 ? 0 : datum.value / max)
        : sideRing
          ? PIE_RADIUS_SIDE
          : compactRing
            ? PIE_RADIUS_COMPACT
            : PIE_RADIUS,
    palette: chartColor,
  });
  const innerSlices = variant === "nested" && innerData ? buildSlices(innerData, { innerRadius: 0, outerRadius: NESTED_INNER_RADIUS, palette: (index) => INNER_SERIES_COLORS[index % INNER_SERIES_COLORS.length] }) : [];

  const cx = width / 2;
  const cy = plotHeight / 2 - 1;
  const isNested = variant === "nested" && innerSlices.length > 0;
  const leaders = computeLeaders(cx, cy, outerSlices, labelSize === "md" ? LABEL_GAP_MD : LABEL_GAP, labelSize === "md");

  const track = (group: "outer" | "inner", index: number) => (event: MouseEvent) => {
    const rect = plotRef.current?.getBoundingClientRect();
    if (!rect) return;
    setHover({ group, index, x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  const hovered = hover ? (hover.group === "outer" ? outerSlices : innerSlices)[hover.index] : null;
  const dim = (group: "outer" | "inner", index: number) => (hover && !(hover.group === group && hover.index === index) ? 0.55 : 1);

  const legendItems = (slices: Slice[], prefix: string) => slices.map((slice, index) => ({ key: `${prefix}${index}`, name: slice.name, color: slice.color }));
  const legend = isNested ? (
    <div className="flex flex-1 flex-col items-center gap-2">
      <ChartLegend items={legendItems(outerSlices, "o")} />
      <ChartLegend items={legendItems(innerSlices, "i")} />
    </div>
  ) : side ? undefined : (
    <ChartLegend size={labelSize} className={legendAlign === "end" ? "justify-end" : "flex-1"} items={legendItems(outerSlices, "o")} />
  );

  const summary = [...outerSlices, ...innerSlices].map((slice) => `${slice.name} ${formatPercent(slice.percent)}`).join("，");

  const plot = (
    <div
      ref={plotRef}
      className={cn("relative min-h-0 min-w-0", side ? "w-[120px] flex-none" : "flex-1")}
      onMouseLeave={() => setHover(null)}
      role="img"
      aria-label={summary}
    >
      {width > 0 && (
        <>
          <svg aria-hidden="true" className="absolute inset-0 size-full overflow-visible">
            {outerSlices.map((slice, index) => {
              const leader = leaders[index];
              return (
                <g key={index} style={{ opacity: dim("outer", index), transition: "opacity 120ms" }}>
                  <path
                    d={sectorPath(cx, cy, slice.innerRadius, slice.outerRadius, slice.start, slice.end)}
                    fill={slice.color}
                    stroke="var(--viz-background)"
                    strokeWidth="1"
                    onMouseEnter={track("outer", index)}
                    onMouseMove={track("outer", index)}
                  />
                  {!side && <polyline points={leader.points} fill="none" stroke="var(--viz-axisline)" strokeWidth="1" />}
                </g>
              );
            })}
            {isNested &&
              innerSlices.map((slice, index) => (
                <path
                  key={index}
                  d={sectorPath(cx, cy, 0, slice.outerRadius, slice.start, slice.end)}
                  fill={slice.color}
                  stroke="var(--viz-background)"
                  strokeWidth="1"
                  style={{ opacity: dim("inner", index), transition: "opacity 120ms" }}
                  onMouseEnter={track("inner", index)}
                  onMouseMove={track("inner", index)}
                />
              ))}
          </svg>

          {!side && outerSlices.map((slice, index) => {
            const leader = leaders[index];
            return (
              <span
                key={index}
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute inline-flex items-center gap-1 whitespace-nowrap",
                  labelSize === "md" ? "text-body" : "text-foot10 leading-[normal]",
                )}
                style={{
                  left: leader.anchorX,
                  top: leader.anchorY,
                  transform: `translate(${leader.direction === 1 ? "0" : "-100%"}, -50%)`,
                  color: "var(--viz-title)",
                  letterSpacing: labelSize === "md" ? undefined : "0.5px",
                  opacity: dim("outer", index),
                }}
              >
                <LegendSquare color={slice.color} />
                {renderLabel ? renderLabel(slice) : `${slice.name}: ${formatPercent(slice.percent)}`}
              </span>
            );
          })}

          {isNested &&
            innerSlices.map((slice, index) => {
              const [x, y] = polar(cx, cy, NESTED_INNER_RADIUS * 0.6, slice.mid);
              return (
                <span
                  key={index}
                  aria-hidden="true"
                  className="pointer-events-none absolute whitespace-nowrap text-foot10 leading-[normal]"
                  style={{ left: x, top: y, transform: "translate(-50%, -50%)", color: "var(--viz-mark-text)", letterSpacing: "0.5px", opacity: dim("inner", index) }}
                >
                  {slice.name}
                </span>
              );
            })}

          {center != null && variant === "ring" && (
            <div
              className="pointer-events-none absolute flex w-max max-w-[112px] flex-col items-center text-center"
              style={{ left: cx, top: cy, transform: "translate(-50%, -50%)" }}
            >
              {center}
            </div>
          )}

          {hover && hovered && (
            <div className="pointer-events-none absolute z-10 w-max" style={{ left: hover.x + 12, top: hover.y + 12 }}>
              <ChartTooltipCard
                rows={[
                  {
                    key: hovered.name,
                    color: hovered.color,
                    name: hovered.name,
                    // 一行排布：色块 + 名称 | 数值 + 占比（无括号）
                    value: (
                      <span className="inline-flex items-baseline gap-2">
                        <span>{formatValue(hovered.value)}</span>
                        <span>{formatPercent(hovered.percent)}</span>
                      </span>
                    ),
                  },
                ]}
              />
            </div>
          )}
        </>
      )}
    </div>
  );

  return (
    <ChartFrame title={title} legend={legend} theme={theme} height={height} className={className} surface={surface} legendAlign={legendAlign} padding={isNested ? "nested" : "default"} ariaLabel={typeof title === "string" ? title : undefined}>
      {side ? (
        // 圆环区宽度 = 圆环直径 120；圆环与说明列之间固定 58px，整组在卡片内水平居中（两侧留白相等）
        <div className="flex min-h-0 flex-1 justify-center gap-[58px] pt-3">
          {plot}
          <ul aria-hidden="true" className="flex min-w-[148px] shrink-0 flex-col justify-center gap-6 self-center">
            {outerSlices.map((slice, index) => (
              <li
                key={index}
                className="inline-flex items-center gap-2 whitespace-nowrap text-body"
                style={{ color: "var(--viz-title)", opacity: dim("outer", index), transition: "opacity 120ms" }}
              >
                <LegendSquare color={slice.color} />
                {renderLabel ? renderLabel(slice) : `${slice.name}: ${formatPercent(slice.percent)}`}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        plot
      )}
    </ChartFrame>
  );
}
