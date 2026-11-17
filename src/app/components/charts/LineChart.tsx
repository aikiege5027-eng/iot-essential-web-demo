import type { ReactNode } from "react";
import { useId } from "react";
import { Area, AreaChart, CartesianGrid, ReferenceArea, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { cn } from "../ui/utils";
import { ChartFrame, type ChartFrameProps } from "./ChartFrame";
import { ChartLegend } from "./ChartLegend";
import { ChartTooltipCard } from "./ChartTooltipCard";
import { buildTicks, chartColor } from "./chart-theme";

/**
 * 折线图（Figma China Data Visualization · 折线图 LineChart，202:2）。
 *
 * 设计稿的 12 个形态由 5 个正交开关组合出来，而不是 12 个独立组件：
 *
 *   形态                     smooth  step  area  stacked  highlight  layout
 *   基础折线图               -       -     -     -        -          default
 *   基础平滑折线图           ✓
 *   基础面积折线图                         ✓
 *   基础平滑面积折线图       ✓             ✓
 *   堆叠折线图 / 平滑                            ✓
 *   堆叠面积折线图 / 平滑    (✓)           ✓     ✓
 *   区域高亮折线图           ✓                            ✓
 *   X 轴对称折线图           ✓                                      mirror
 *   上下 X 轴折线图          ✓             ✓                        bipolar
 *   阶梯折线图                       ✓
 *
 * 规格：线宽 1.5，数据点 r=2.92 空心圆（描边 1.5、填充取背景色）；网格线 Axes/gridline 1px 点划，
 * 坐标轴线 Axes/axisline；轴文字 12px / 字距 0.6 / Text/axis label；纵轴标签列宽 29（右对齐，距绘图区 8）；
 * 横轴首尾各留 20 的内缩；悬停时出现 Axes/tooltip axis 色的竖向虚线与 ChartTooltipCard。
 * 堆叠时第一个系列在最上层（与设计稿的图例 / 提示顺序一致）。
 */

export interface LineSeries {
  key: string;
  name: string;
  /** 不传则按序号取 categorical color-1…5 */
  color?: string;
}

export interface LineChartProps extends Pick<ChartFrameProps, "title" | "theme" | "height" | "className" | "surface" | "legendAlign"> {
  data: Record<string, string | number>[];
  series: LineSeries[];
  /** 横轴字段，默认 "name" */
  xKey?: string;
  subtitle?: ReactNode;
  smooth?: boolean;
  step?: boolean;
  area?: boolean;
  stacked?: boolean;
  /** 高亮横轴上 [from, to] 两个类目之间的区域（取 color-1 的 20% 填充 + 两条竖向虚线） */
  highlight?: { from: string; to: string };
  /**
   * default：单一绘图区；
   * mirror：上下两个绘图区（X 轴对称）——第一个系列在下半区向下生长，第二个在上半区向上，与设计稿图例顺序一致；
   * bipolar：左轴向上、右轴向下，两个系列分别挂在两侧（上下 X 轴）。
   */
  layout?: "default" | "mirror" | "bipolar";
  /** 是否画数据点；mirror / bipolar 默认不画 */
  dots?: boolean;
  /** 悬浮提示里的数值格式；默认千分位 */
  formatValue?: (value: number) => string;
  /** 指定纵轴刻度（如 [0.2, 0.4, 0.6, 0.8, 1]）；不传则按数据自动取整成 5 等分。绘图区范围为 0 到最大刻度 */
  yTicks?: number[];
  /** 纵轴刻度文字格式（如百分比）；不传则显示原值 */
  formatTick?: (value: number) => string;
  /** 横轴标签间隔：0 全部显示（默认），n 表示每隔 n 个显示一个（数据点很多时避免挤在一起） */
  xInterval?: number;
  /** 折线下方铺自上而下渐隐的色块（同色 10% → 0），代替 `area` 的平铺半透明填充 */
  gradient?: boolean;
  /** 去掉图表区上方默认的 12px 间距（图表上方已有单位 / 图例行时用，两者靠得更近） */
  compactTop?: boolean;
  /** 是否显示图例；不传时多序列自动显示。单序列业务图表可传 true，图例在头部 */
  legend?: boolean;
  /** 水平参考线（如 50% 警示线）：与网格线同密度的虚线 + 与纵轴刻度右对齐的 Medium 标注文字；颜色默认取错误色 */
  referenceLines?: { value: number; label?: string; color?: string }[];
  /** 折线贴满绘图区左右两端（默认横轴首尾各内缩 20）；首尾刻度文字随之左 / 右对齐，避免贴边被裁切 */
  flushEdges?: boolean;
}

const AXIS_TICK = { fill: "var(--viz-axis-label)", fontSize: 12, letterSpacing: "0.6px" };
const AXIS_LINE = { stroke: "var(--viz-axisline)" };
const X_PADDING = { left: 20, right: 20 };
const DEFAULT_FORMAT = (value: number) => value.toLocaleString("en-US");

interface PlotProps {
  data: Record<string, string | number>[];
  xKey: string;
  series: (LineSeries & { color: string })[];
  /** 提示里展示的全部系列（堆叠 / 对称时与绘制的系列不同） */
  tooltipSeries: (LineSeries & { color: string })[];
  curve: "linear" | "monotone" | "step";
  area: boolean;
  areaOpacity: number;
  stacked: boolean;
  dots: boolean;
  highlight?: { from: string; to: string };
  ticks: number[];
  formatValue: (value: number) => string;
  formatTick?: (value: number) => string;
  xInterval: number;
  flushEdges: boolean;
  gradient: boolean;
  referenceLines?: { value: number; label?: string; color?: string }[];
  /** mirror 的下半区：纵轴反向、横轴在上 */
  inverted?: boolean;
  /** bipolar：这些系列挂右轴（向下生长） */
  rightAxisKeys?: string[];
}

function LineTooltipContent({
  active,
  payload,
  label,
  tooltipSeries,
  formatValue,
}: {
  active?: boolean;
  payload?: { payload: Record<string, string | number> }[];
  label?: string | number;
  tooltipSeries: PlotProps["tooltipSeries"];
  formatValue: PlotProps["formatValue"];
}) {
  if (!active || !payload?.length) return null;
  const row = payload[0].payload;
  return (
    <ChartTooltipCard
      title={label}
      rows={tooltipSeries.map((item) => ({ key: item.key, color: item.color, name: item.name, value: formatValue(Number(row[item.key])) }))}
    />
  );
}

function Plot({ data, xKey, series, tooltipSeries, curve, area, areaOpacity, stacked, dots, highlight, ticks, formatValue, formatTick, xInterval, flushEdges, gradient, referenceLines, inverted, rightAxisKeys }: PlotProps) {
  const max = ticks[ticks.length - 1];
  const gradientPrefix = useId().replace(/:/g, "");
  // 设计稿的纵轴标签列宽 29 只够 2 位数；3 位及以上的刻度（150、600、1,200）每多一位加 7，避免首字符被裁
  const longest = Math.max(...ticks.map((tick) => (formatTick ? formatTick(tick) : String(Math.round(tick))).length));
  const yAxisWidth = formatTick ? 46 : Math.max(29, 29 + (longest - 2) * 7);
  const bipolar = Boolean(rightAxisKeys?.length);
  // fillOpacity 必须显式写 1：recharts 的 Area 会把自身默认的 fillOpacity（0.6）传给圆点，白点会变半透明、透出线条
  const dotStyle = (color: string) => ({ r: 2.92, fill: "var(--viz-background)", fillOpacity: 1, stroke: color, strokeWidth: 1.5 });

  // 贴边时首尾刻度分别向右 / 向左对齐，且右侧留 4px，防止末端圆点被裁掉半个
  const renderEdgeTick = ({ x, y, payload }: { x: number; y: number; payload: { value: string; index?: number } }) => {
    // 抽稀（interval > 0）后 recharts 传入的 index 是可见刻度序号，需用 payload.index 取数据序号
    const index = payload.index ?? 0;
    return (
    <text
      x={x}
      y={y}
      dy={inverted ? "-0.2em" : "0.71em"}
      textAnchor={index === 0 ? "start" : index === data.length - 1 ? "end" : "middle"}
      fill={AXIS_TICK.fill}
      fontSize={AXIS_TICK.fontSize}
      letterSpacing={AXIS_TICK.letterSpacing}
    >
      {payload.value}
    </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 8, right: flushEdges ? 4 : 0, bottom: inverted ? 8 : 0, left: 0 }}>
        {gradient && (
          <defs>
            {series.map((item) => (
              <linearGradient key={item.key} id={`${gradientPrefix}-${item.key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={item.color} stopOpacity={0.1} />
                <stop offset="100%" stopColor={item.color} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
        )}
        <CartesianGrid vertical={false} stroke="var(--viz-gridline)" strokeDasharray="1 1" />
        <XAxis
          dataKey={xKey}
          orientation={inverted ? "top" : "bottom"}
          tickLine={false}
          tickSize={0}
          axisLine={AXIS_LINE}
          tick={flushEdges ? renderEdgeTick : AXIS_TICK}
          tickMargin={inverted ? 6 : 8}
          padding={flushEdges ? { left: 0, right: 0 } : X_PADDING}
          interval={xInterval}
          height={26}
        />
        <YAxis yAxisId="left" width={yAxisWidth} tickMargin={8} tickLine={false} tickSize={0} axisLine={false} tick={AXIS_TICK} tickFormatter={formatTick} domain={[0, max]} ticks={ticks} interval={0} reversed={inverted} />
        {bipolar && (
          <YAxis
            yAxisId="right"
            orientation="right"
            reversed
            width={34}
            tickMargin={8}
            tickLine={false}
            tickSize={0}
            axisLine={false}
            tick={{ ...AXIS_TICK, textAnchor: "start" }}
            domain={[0, max]}
            ticks={ticks}
          />
        )}
        <Tooltip
          isAnimationActive={false}
          cursor={{ stroke: "var(--viz-tooltip-axis)", strokeDasharray: "3 3" }}
          content={<LineTooltipContent tooltipSeries={tooltipSeries} formatValue={formatValue} />}
          offset={12}
          wrapperStyle={{ outline: "none", zIndex: 10 }}
        />
        {highlight && (
          <>
            <ReferenceArea yAxisId="left" x1={highlight.from} x2={highlight.to} fill="var(--categorical-color-1)" fillOpacity={0.2} stroke="none" ifOverflow="visible" />
            <ReferenceLine yAxisId="left" x={highlight.from} stroke="var(--viz-tooltip-axis)" strokeDasharray="3 3" ifOverflow="visible" />
            <ReferenceLine yAxisId="left" x={highlight.to} stroke="var(--viz-tooltip-axis)" strokeDasharray="3 3" ifOverflow="visible" />
          </>
        )}
        {referenceLines?.map((line) => {
          const color = line.color ?? "var(--error-color)";
          return (
            <ReferenceLine
              key={line.value}
              yAxisId="left"
              y={line.value}
              stroke={color}
              // 虚线密度与网格线一致（1 1）
              strokeDasharray="1 1"
              ifOverflow="visible"
              label={
                line.label
                  ? ({ viewBox }: { viewBox?: { x?: number; y?: number } }) => (
                      // 与纵轴刻度文字同一右对齐线（绘图区左缘 - tickMargin 8），12px / 字距 0.6，字重加一档（Medium）
                      <text x={(viewBox?.x ?? 0) - 8} y={viewBox?.y ?? 0} dy="0.32em" textAnchor="end" fill={color} fontSize={12} fontWeight={500} letterSpacing="0.6px">
                        {line.label}
                      </text>
                    )
                  : undefined
              }
            />
          );
        })}
        {series.map((item) => (
          <Area
            key={item.key}
            yAxisId={rightAxisKeys?.includes(item.key) ? "right" : "left"}
            type={curve}
            dataKey={item.key}
            name={item.name}
            stackId={stacked ? "stack" : undefined}
            stroke={item.color}
            strokeWidth={1.5}
            fill={gradient ? `url(#${gradientPrefix}-${item.key})` : item.color}
            fillOpacity={gradient ? 1 : area ? areaOpacity : 0}
            dot={dots ? dotStyle(item.color) : false}
            activeDot={{ ...dotStyle(item.color), r: 3.5, strokeWidth: 2 }}
            isAnimationActive={false}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function LineChart({
  data,
  series,
  xKey = "name",
  title,
  subtitle,
  theme,
  height,
  className,
  surface,
  legendAlign,
  smooth = false,
  step = false,
  area = false,
  stacked = false,
  highlight,
  layout = "default",
  dots,
  formatValue = DEFAULT_FORMAT,
  yTicks,
  formatTick,
  xInterval = 0,
  flushEdges = false,
  gradient = false,
  compactTop = false,
  legend,
  referenceLines,
}: LineChartProps) {
  const resolved = series.map((item, index) => ({ ...item, color: item.color ?? chartColor(index) }));
  const curve = step ? "step" : smooth ? "monotone" : "linear";
  const showDots = dots ?? layout === "default";
  const isStacked = stacked && layout === "default";

  const rowMax = (row: Record<string, string | number>, keys: string[]) =>
    isStacked ? keys.reduce((sum, key) => sum + Number(row[key] ?? 0), 0) : Math.max(...keys.map((key) => Number(row[key] ?? 0)));
  const maxValue = Math.max(...data.map((row) => rowMax(row, resolved.map((item) => item.key))), 0);
  const ticks = yTicks ?? buildTicks(maxValue, layout === "mirror" ? 4 : 5);

  // 堆叠：Recharts 按渲染顺序自下而上叠加，反转后第一个系列落在最上层
  const drawn = isStacked ? [...resolved].reverse() : resolved;

  const common = { data, xKey, curve, stacked: isStacked, dots: showDots, highlight, ticks, formatValue, formatTick, xInterval, flushEdges, gradient, referenceLines } as const;
  const showLegend = legend ?? resolved.length > 1;

  const plot =
    layout === "mirror" ? (
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="min-h-0 flex-1">
          <Plot {...common} series={[resolved[1]]} tooltipSeries={[resolved[1]]} area={false} areaOpacity={0} />
        </div>
        <div className="min-h-0 flex-1">
          <Plot {...common} series={[resolved[0]]} tooltipSeries={[resolved[0]]} area={false} areaOpacity={0} inverted />
        </div>
      </div>
    ) : layout === "bipolar" ? (
      <div className="min-h-0 flex-1">
        <Plot {...common} series={resolved} tooltipSeries={resolved} area areaOpacity={0.9} rightAxisKeys={[resolved[1]?.key]} />
      </div>
    ) : (
      <div className="min-h-0 flex-1">
        <Plot {...common} series={drawn} tooltipSeries={resolved} area={area} areaOpacity={0.2} />
      </div>
    );

  return (
    <ChartFrame
      title={title}
      theme={theme}
      height={height}
      className={className}
      surface={surface}
      legendAlign={legendAlign}
      legend={showLegend ? <ChartLegend marker="line" items={resolved.map((item) => ({ key: item.key, name: item.name, color: item.color }))} /> : undefined}
      ariaLabel={typeof title === "string" ? title : undefined}
    >
      <div className={cn("flex min-h-0 flex-1 flex-col gap-0", !compactTop && "pt-3")}>
        {subtitle != null && (
          <p className="m-0 shrink-0 text-foot12" style={{ color: "var(--viz-subtitle)" }}>
            {subtitle}
          </p>
        )}
        <div className="flex min-h-0 flex-1 flex-col" aria-hidden="true">
          {plot}
        </div>
        {/* 读屏用的数据表：图本身对读屏隐藏 */}
        <table className="sr-only">
          {typeof title === "string" && <caption>{title}</caption>}
          <thead>
            <tr>
              <th scope="col" />
              {resolved.map((item) => (
                <th key={item.key} scope="col">
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={String(row[xKey])}>
                <th scope="row">{row[xKey]}</th>
                {resolved.map((item) => (
                  <td key={item.key}>{formatValue(Number(row[item.key]))}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ChartFrame>
  );
}
