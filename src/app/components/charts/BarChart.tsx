import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { Bar, BarChart as RBarChart, CartesianGrid, Customized, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartFrame, type ChartFrameProps } from "./ChartFrame";
import { ChartLegend } from "./ChartLegend";
import { ChartTooltipCard } from "./ChartTooltipCard";
import { buildTicks, chartColor, niceStep, useElementSize } from "./chart-theme";

/**
 * 条形图（Figma China Data Visualization · 条形图 BarChart，214:8610）。
 *
 * 设计稿的 6 个形态由开关组合出来：
 *
 *   形态                  background  序列数   stacked  diverging  polar
 *   基础条形图            -           1
 *   带背景基础条形图      ✓           1
 *   多值条形图                        ≥2
 *   堆叠条形图                        ≥2       ✓
 *   正负轴条形图                      2                 ✓
 *   极坐标条形图                                                  ✓（每条数据一圈）
 *
 * 规格：条形水平生长（类目在纵轴、数值在横轴）；设计稿柱高 20，业务页面可用 `barSize` / `barGap` / `barCategoryGap` 微调；
 * 纵轴类目文字 12px / 字距 0.6 / Axes/axisline，右对齐；纵向网格线 Axes/gridline 1px 点划；坐标轴线 Axes/axisline；
 * 底部横轴刻度 12px。带背景形态的底槽取 `--viz-bar-track`。图例在头部右侧（多序列时）。
 */

export interface BarSeries {
  key: string;
  name: string;
  /** 不传则按序号取 categorical color-1…5 */
  color?: string;
}

export interface BarChartProps extends Pick<ChartFrameProps, "title" | "theme" | "height" | "className" | "surface" | "legendAlign"> {
  /** 每行一个类目；polar 时每行一圈，数值取第一个系列 */
  data: Record<string, string | number>[];
  series: BarSeries[];
  /** 类目字段，默认 "name" */
  categoryKey?: string;
  subtitle?: ReactNode;
  /** 单序列时给每根柱子铺一条满量程的底槽 */
  background?: boolean;
  stacked?: boolean;
  /** 正负轴：类目文字贴在零线上、位于柱子的另一侧 */
  diverging?: boolean;
  /** 极坐标：每条数据是一圈弧，起点 12 点钟、顺时针 */
  polar?: boolean;
  /** 柱高，设计稿 20 */
  barSize?: number;
  /** 同一类目内多根柱子的间距（px） */
  barGap?: number;
  /** 类目之间的间距（px 或百分比） */
  barCategoryGap?: number | string;
  /** 纵轴类目文字列宽，默认 38 */
  categoryWidth?: number;
  /** 图例尺寸：sm 10px（设计稿默认）/ md 12px */
  legendSize?: "sm" | "md";
  /** 悬浮提示与读屏表格里的数值格式；默认千分位 */
  formatValue?: (value: number) => string;
}

const AXIS_TICK = { fill: "var(--viz-axis-label)", fontSize: 12, letterSpacing: "0.6px" };
const AXIS_LINE = { stroke: "var(--viz-axisline)" };
const DEFAULT_FORMAT = (value: number) => value.toLocaleString("en-US");

/** 数值轴刻度：覆盖数据的最小 / 最大值（含负值），步长取整。 */
function valueTicks(min: number, max: number) {
  if (min >= 0) return buildTicks(max, 8);
  const step = niceStep(Math.max(-min, max) / 4);
  const low = Math.floor(min / step) * step;
  const high = Math.ceil(max / step) * step;
  return Array.from({ length: Math.round((high - low) / step) + 1 }, (_, index) => low + step * index);
}

// ---------------------------------------------------------------------------
// 极坐标条形图
// ---------------------------------------------------------------------------

const TAU = Math.PI * 2;
const polar = (cx: number, cy: number, radius: number, angle: number): [number, number] => [cx + radius * Math.sin(angle), cy - radius * Math.cos(angle)];

function arcPath(cx: number, cy: number, inner: number, outer: number, end: number) {
  const sweep = Math.min(end, TAU - 0.0001);
  const large = sweep > Math.PI ? 1 : 0;
  const [x0, y0] = polar(cx, cy, outer, 0);
  const [x1, y1] = polar(cx, cy, outer, sweep);
  const [x2, y2] = polar(cx, cy, inner, sweep);
  const [x3, y3] = polar(cx, cy, inner, 0);
  return `M${x0},${y0} A${outer},${outer} 0 ${large} 1 ${x1},${y1} L${x2},${y2} A${inner},${inner} 0 ${large} 0 ${x3},${y3} Z`;
}

function PolarPlot({
  data,
  categoryKey,
  valueKey,
  colors,
  formatValue,
}: {
  data: Record<string, string | number>[];
  categoryKey: string;
  valueKey: string;
  colors: string[];
  formatValue: (value: number) => string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useElementSize(ref);
  const [hover, setHover] = useState<{ index: number; x: number; y: number } | null>(null);

  const cx = width / 2;
  const cy = height / 2;
  const outerRadius = Math.max(0, Math.min(width, height) / 2 - 22);
  const holeRadius = outerRadius * 0.18;
  const values = data.map((row) => Number(row[valueKey] ?? 0));
  // 刻度按 12 等分整圈：与设计稿一致（0 在 12 点钟，顺时针递增）
  const maxValue = Math.max(...values, 0);
  const step = niceStep(maxValue / 10);
  const total = Math.max(step * 12, maxValue);
  const ringStep = data.length > 0 ? (outerRadius - holeRadius) / data.length : 0;
  const thickness = ringStep * 0.74;

  const track = (index: number) => (event: MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) setHover({ index, x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  return (
    <div ref={ref} className="relative min-h-0 flex-1" onMouseLeave={() => setHover(null)}>
      {width > 0 && (
        <svg aria-hidden="true" className="absolute inset-0 size-full overflow-visible">
          {Array.from({ length: 12 }, (_, index) => {
            const angle = (index / 12) * TAU;
            const [x1, y1] = polar(cx, cy, holeRadius, angle);
            const [x2, y2] = polar(cx, cy, outerRadius, angle);
            const [lx, ly] = polar(cx, cy, outerRadius + 12, angle);
            return (
              <g key={index}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--viz-gridline)" strokeDasharray="1 1" />
                <text x={lx} y={ly} dy="0.32em" textAnchor="middle" fill="var(--viz-axis-label)" fontSize={10}>
                  {Math.round((total / 12) * index)}
                </text>
              </g>
            );
          })}
          {data.map((row, index) => {
            const inner = holeRadius + ringStep * (data.length - 1 - index) + (ringStep - thickness) / 2;
            const outer = inner + thickness;
            const mid = (inner + outer) / 2;
            const angle = (values[index] / total) * TAU;
            return (
              <g key={index} style={{ opacity: hover && hover.index !== index ? 0.55 : 1, transition: "opacity 120ms" }}>
                <circle cx={cx} cy={cy} r={mid} fill="none" stroke="var(--viz-gridline)" strokeDasharray="1 1" />
                <path d={arcPath(cx, cy, inner, outer, angle)} fill={colors[index % colors.length]} onMouseEnter={track(index)} onMouseMove={track(index)} />
                <text x={cx - 4} y={cy - mid} dy="0.32em" textAnchor="end" fill="var(--viz-axis-label)" fontSize={10}>
                  {String(row[categoryKey])}
                </text>
              </g>
            );
          })}
        </svg>
      )}
      {hover && data[hover.index] && (
        <div className="pointer-events-none absolute z-10 w-max" style={{ left: hover.x + 12, top: hover.y + 12 }}>
          <ChartTooltipCard rows={[{ key: String(hover.index), color: colors[hover.index % colors.length], name: String(data[hover.index][categoryKey]), value: formatValue(values[hover.index]) }]} />
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// 条形图
// ---------------------------------------------------------------------------

function BarTooltipContent({
  active,
  payload,
  label,
  series,
  formatValue,
}: {
  active?: boolean;
  payload?: { dataKey?: string | number; value?: number | string }[];
  label?: string | number;
  series: (BarSeries & { color: string })[];
  formatValue: (value: number) => string;
}) {
  if (!active || !payload?.length) return null;
  const rows = series
    .map((item) => ({ item, entry: payload.find((p) => p.dataKey === item.key) }))
    .filter(({ entry }) => entry && entry.value !== undefined && entry.value !== null)
    .map(({ item, entry }) => ({ key: item.key, color: item.color, name: item.name, value: formatValue(Number(entry?.value)) }));
  return <ChartTooltipCard title={label} rows={rows} />;
}

type ZeroLabelsProps = {
  xAxisMap?: Record<string, { scale: (value: number) => number }>;
  yAxisMap?: Record<string, { scale: ((value: string) => number) & { bandwidth: () => number } }>;
};

export function BarChart({
  data,
  series,
  categoryKey = "name",
  title,
  subtitle,
  theme,
  height,
  className,
  surface,
  legendAlign,
  background = false,
  stacked = false,
  diverging = false,
  polar: isPolar = false,
  barSize = 20,
  barGap = 4,
  barCategoryGap = "30%",
  categoryWidth = 38,
  legendSize,
  formatValue = DEFAULT_FORMAT,
}: BarChartProps) {
  const resolved = series.map((item, index) => ({ ...item, color: item.color ?? chartColor(index) }));
  const polarColors = data.map((_, index) => chartColor(index));

  const rowValues = (row: Record<string, string | number>) => resolved.map((item) => Number(row[item.key] ?? 0));
  const maxValue = Math.max(...data.map((row) => (stacked ? rowValues(row).reduce((sum, value) => sum + Math.max(value, 0), 0) : Math.max(...rowValues(row)))), 0);
  const minValue = Math.min(...data.map((row) => Math.min(...rowValues(row))), 0);
  const ticks = valueTicks(minValue, maxValue);
  const domain: [number, number] = [ticks[0], ticks[ticks.length - 1]];

  /** 正负轴：类目文字贴在零线上，位于柱子的另一侧（含负值的行 → 零线右侧；否则 → 零线左侧）。 */
  const ZeroLabels = ({ xAxisMap, yAxisMap }: ZeroLabelsProps) => {
    const xScale = xAxisMap && Object.values(xAxisMap)[0]?.scale;
    const yScale = yAxisMap && Object.values(yAxisMap)[0]?.scale;
    if (!xScale || !yScale) return null;
    const zero = xScale(0);
    return (
      <g>
        {data.map((row, index) => {
          const name = String(row[categoryKey]);
          const negative = rowValues(row).some((value) => value < 0);
          const y = (yScale(name) ?? 0) + yScale.bandwidth() / 2;
          return (
            <text key={index} x={negative ? zero + 6 : zero - 6} y={y} dy="0.32em" textAnchor={negative ? "start" : "end"} fill="var(--viz-axis-label)" fontSize={12} letterSpacing="0.6px">
              {name}
            </text>
          );
        })}
      </g>
    );
  };

  const showLegend = isPolar || resolved.length > 1;
  const legendItems = isPolar
    ? data.map((row, index) => ({ key: String(index), name: String(row[categoryKey]), color: polarColors[index] }))
    : resolved.map((item) => ({ key: item.key, name: item.name, color: item.color }));
  // 没有主标题时，副标题（如「单位（次）」）与图例同一行：副标题靠左、图例靠右，水平对齐
  const subtitleInHeader = title == null && subtitle != null && showLegend;
  const legendNode = showLegend ? (
    subtitleInHeader ? (
      <div className="flex w-full items-center justify-between gap-3">
        <p className="m-0 text-foot12" style={{ color: "var(--viz-subtitle)" }}>
          {subtitle}
        </p>
        <ChartLegend size={legendSize} items={legendItems} />
      </div>
    ) : (
      <ChartLegend size={legendSize} items={legendItems} className={title == null ? "flex-1 justify-end" : undefined} />
    )
  ) : undefined;

  return (
    <ChartFrame
      title={title}
      theme={theme}
      height={height}
      className={className}
      surface={surface}
      legendAlign={legendAlign ?? "end"}
      legend={legendNode}
      ariaLabel={typeof title === "string" ? title : undefined}
    >
      <div className="flex min-h-0 flex-1 flex-col gap-0 pt-3">
        {subtitle != null && !subtitleInHeader && (
          <p className="m-0 shrink-0 text-foot12" style={{ color: "var(--viz-subtitle)" }}>
            {subtitle}
          </p>
        )}
        <div className="flex min-h-0 flex-1 flex-col" aria-hidden="true">
          {isPolar ? (
            <PolarPlot data={data} categoryKey={categoryKey} valueKey={resolved[0]?.key ?? "value"} colors={polarColors} formatValue={formatValue} />
          ) : (
            <div className="min-h-0 flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <RBarChart data={data} layout="vertical" margin={{ top: 4, right: 12, bottom: 0, left: diverging ? 16 : 0 }} barGap={barGap} barCategoryGap={barCategoryGap}>
                  <CartesianGrid horizontal={false} stroke="var(--viz-gridline)" strokeDasharray="1 1" />
                  <XAxis type="number" domain={domain} ticks={ticks} tickFormatter={(value: number) => value.toLocaleString("en-US")} tickLine={false} tickSize={0} tickMargin={8} axisLine={AXIS_LINE} tick={AXIS_TICK} interval={0} />
                  {diverging ? (
                    <>
                      <YAxis type="category" dataKey={categoryKey} hide />
                      <ReferenceLine x={0} stroke="var(--viz-axisline)" ifOverflow="visible" />
                      <Customized component={ZeroLabels} />
                    </>
                  ) : (
                    <YAxis type="category" dataKey={categoryKey} width={categoryWidth} tickLine={false} tickSize={0} tickMargin={8} axisLine={AXIS_LINE} tick={AXIS_TICK} interval={0} />
                  )}
                  <Tooltip isAnimationActive={false} cursor={false} content={<BarTooltipContent series={resolved} formatValue={formatValue} />} offset={12} wrapperStyle={{ outline: "none", zIndex: 10 }} />
                  {resolved.map((item) => (
                    <Bar
                      key={item.key}
                      dataKey={item.key}
                      name={item.name}
                      fill={item.color}
                      barSize={barSize}
                      stackId={stacked || diverging ? "stack" : undefined}
                      background={background && resolved.length === 1 ? { fill: "var(--viz-bar-track)" } : undefined}
                      isAnimationActive={false}
                    />
                  ))}
                </RBarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
        {/* 读屏用的数据表：图本身对读屏隐藏 */}
        <table className="sr-only">
          {typeof title === "string" && <caption>{title}</caption>}
          <thead>
            <tr>
              <th scope="col" />
              {(isPolar ? resolved.slice(0, 1) : resolved).map((item) => (
                <th key={item.key} scope="col">
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <th scope="row">{String(row[categoryKey])}</th>
                {(isPolar ? resolved.slice(0, 1) : resolved).map((item) => (
                  <td key={item.key}>{row[item.key] === undefined ? "" : formatValue(Number(row[item.key]))}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ChartFrame>
  );
}
