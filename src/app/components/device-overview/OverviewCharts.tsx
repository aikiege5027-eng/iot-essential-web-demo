import { Cell, Pie, PieChart, Tooltip as ChartTooltip } from "recharts";
import { ChartLegend, LineChart as VizLineChart } from "../charts";
import { cn } from "../ui/utils";
import { formatCount, formatPercent } from "./shared";

/**
 * 设备总览的两类图表（recharts，项目已有依赖）：
 *   · TrendChart：设备注册率 / 真实在线率近 7 天折线（Figma 7105:17105）
 *   · Ring：维保合同卡片右侧的环形图，单环或双环（Figma 7105:17217 等）
 *
 * 颜色一律传 CSS 变量，跟随 theme.css 的 token；图表只是数值的可视化，
 * 同样的数值在卡片文字里都有，环图和折线都对读屏提供摘要。
 */

// ---------------------------------------------------------------------------
// 图例标记
// ---------------------------------------------------------------------------

/** 6px 图例圆点。颜色用工具类传入（bg-brand-base 等）。 */
export function LegendDot({ className }: { className: string }) {
  return <span aria-hidden="true" className={cn("size-1.5 shrink-0 rounded-full", className)} />;
}

// ---------------------------------------------------------------------------
// 趋势折线
// ---------------------------------------------------------------------------

export type TrendPoint = { date: Date; registration: number; online: number };

type TrendSeries = { key: "registration" | "online"; label: string; color: string };

/**
 * 趋势折线：组件库 LineChart（Figma China Data Visualization 202:2）——贴满两端、空心白点、点划网格线、
 * 悬浮提示卡片；`area` 打开折线下方的渐隐色块（同色 10% → 0）。
 */
export function TrendChart({
  points,
  registrationLabel,
  onlineLabel,
  caption,
  language,
  showLegend = true,
  area = false,
}: {
  points: TrendPoint[];
  /** true：折线下方铺一层自上而下渐隐的色块（同色 10% → 0） */
  area?: boolean;
  /** false：图例由外层卡片头部承载（与标题同一行靠右），图内不再画 */
  showLegend?: boolean;
  registrationLabel?: string;
  onlineLabel: string;
  caption: string;
  language: "en" | "cn";
}) {
  // 未传 registrationLabel 时（仟帆）不显示设备注册率折线
  const series: TrendSeries[] = [
    ...(registrationLabel ? [{ key: "registration" as const, label: registrationLabel, color: "var(--brand-2nd-green)" }] : []),
    { key: "online", label: onlineLabel, color: "var(--brand-color)" },
  ];
  const pad = (value: number) => String(value).padStart(2, "0");
  const data = points.map((point) => ({
    label: `${point.date.getMonth() + 1}.${pad(point.date.getDate())}`,
    registration: point.registration,
    online: point.online,
  }));
  const fullLabel = (point: TrendPoint) => `${point.date.getFullYear()}.${pad(point.date.getMonth() + 1)}.${pad(point.date.getDate())}`;
  return (
    <figure className="flex min-h-[360px] flex-1 flex-col gap-0">
      {/* 与设备详情「数据分析」同一版式：左侧单位、右侧图例，水平对齐、两侧分布。图例沿用组件库的折线图例（线 + 空心圆点）；
          图表变量只在 .km-chart 范围内有定义，所以单位与图例外面都套一层 */}
      <div className="mb-1.5 flex min-h-6 items-center justify-between gap-4">
        <span className="km-chart text-foot12" style={{ color: "var(--viz-subtitle)" }}>
          {language === "cn" ? "单位（%）" : "Unit (%)"}
        </span>
        {showLegend && (
          <div className="km-chart" aria-hidden="true">
            <ChartLegend marker="line" items={series.map((item) => ({ key: item.key, name: item.label, color: item.color }))} />
          </div>
        )}
      </div>
      <div className="min-h-0 flex-1">
        <VizLineChart
          surface="page"
          className="!border-0 !p-0"
          height="100%"
          data={data}
          xKey="label"
          series={series.map((item) => ({ key: item.key, name: item.label, color: item.color }))}
          legend={false}
          compactTop
          gradient={area}
          area={false}
          yTicks={[0, 0.2, 0.4, 0.6, 0.8, 1]}
          formatTick={(value) => (value === 0 ? "0" : `${Math.round(value * 100)}%`)}
          formatValue={formatPercent}
          // 15 个点时每隔一个显示一个日期（首尾都显示），避免相邻日期互相压住
          xInterval={data.length > 10 ? 1 : 0}
          flushEdges
        />
      </div>
      {/* 读屏用的数据表：折线本身对读屏隐藏 */}
      <table className="sr-only">
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">{language === "cn" ? "日期" : "Date"}</th>
            {registrationLabel && <th scope="col">{registrationLabel}</th>}
            <th scope="col">{onlineLabel}</th>
          </tr>
        </thead>
        <tbody>
          {points.map((point) => (
            <tr key={fullLabel(point)}>
              <th scope="row">{fullLabel(point)}</th>
              {registrationLabel && <td>{formatPercent(point.registration)}</td>}
              <td>{formatPercent(point.online)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

// ---------------------------------------------------------------------------
// 环形图
// ---------------------------------------------------------------------------

export type RingSegment = { name: string; value: number; color: string };
export type RingLayer = { segments: RingSegment[]; innerRadius: number; outerRadius: number };

/** 跟随鼠标的小提示（Figma Tooltip mouse 形态：12/20、px-4、圆角 4、白底）。 */
function RingTooltip({ active, payload }: { active?: boolean; payload?: { name: string; value: number }[] }) {
  if (!active || !payload?.length || !payload[0].name) return null;
  return (
    <div className="whitespace-nowrap rounded-sm bg-container px-1 text-foot12 text-primary-text shadow-popover">
      {payload[0].name} <span className="font-medium tabular-nums">{formatCount(payload[0].value)}</span>
    </div>
  );
}

export function Ring({ size, layers, label }: { size: number; layers: RingLayer[]; label: string }) {
  return (
    <div role="img" aria-label={label} className="shrink-0" style={{ width: size, height: size }}>
      <PieChart width={size} height={size} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        {layers.map((layer, layerIndex) => {
          const visible = layer.segments.filter((segment) => segment.value > 0);
          // 全为 0 时画一圈灰色底环，避免环图消失
          const data = visible.length > 0 ? visible : [{ name: "", value: 1, color: "var(--bg-color-component)" }];
          return (
            <Pie
              key={layerIndex}
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={layer.innerRadius}
              outerRadius={layer.outerRadius}
              startAngle={90}
              endAngle={-270}
              paddingAngle={data.length > 1 ? 3 : 0}
              stroke="none"
              isAnimationActive={false}
            >
              {data.map((segment) => (
                <Cell key={segment.name || "empty"} fill={segment.color} />
              ))}
            </Pie>
          );
        })}
        <ChartTooltip
          content={<RingTooltip />}
          allowEscapeViewBox={{ x: true, y: true }}
          wrapperStyle={{ zIndex: 20, pointerEvents: "none" }}
          offset={12}
          isAnimationActive={false}
        />
      </PieChart>
    </div>
  );
}
