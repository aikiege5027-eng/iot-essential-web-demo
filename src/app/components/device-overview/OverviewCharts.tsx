import { CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip as ChartTooltip, XAxis, YAxis } from "recharts";
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

/** 折线图例：一段线 + 空心圆点（设计稿 9×9 图例）。 */
export function LineMarker({ color }: { color: string }) {
  return (
    <svg aria-hidden="true" focusable="false" width="14" height="9" viewBox="0 0 14 9" className="shrink-0">
      <line x1="0" y1="4.5" x2="14" y2="4.5" stroke={color} strokeWidth="1.5" />
      <circle cx="7" cy="4.5" r="3" fill="var(--bg-color-container)" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

/** 6px 图例圆点。颜色用工具类传入（bg-brand-base 等）。 */
export function LegendDot({ className }: { className: string }) {
  return <span aria-hidden="true" className={cn("size-1.5 shrink-0 rounded-full", className)} />;
}

// ---------------------------------------------------------------------------
// 趋势折线
// ---------------------------------------------------------------------------

export type TrendPoint = { date: Date; registration: number; online: number };

type TrendSeries = { key: "registration" | "online"; label: string; color: string };

function TrendTooltip({
  active,
  payload,
  series,
}: {
  active?: boolean;
  payload?: { payload: TrendPoint & { fullLabel: string } }[];
  series: TrendSeries[];
}) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;
  return (
    <div className="min-w-[160px] rounded-lg bg-container p-3 shadow-popover">
      <p className="text-foot12 text-secondary-text tabular-nums">{point.fullLabel}</p>
      <ul className="mt-2 flex flex-col gap-2">
        {series.map((item) => (
          <li key={item.key} className="flex items-center justify-between gap-6 text-foot12">
            <span className="inline-flex items-center gap-1 text-secondary-text">
              <span aria-hidden="true" className="size-1.5 rounded-full" style={{ backgroundColor: item.color }} />
              {item.label}
            </span>
            <span className="font-medium text-primary-text tabular-nums">{formatPercent(point[item.key])}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TrendChart({
  points,
  registrationLabel,
  onlineLabel,
  caption,
  language,
}: {
  points: TrendPoint[];
  registrationLabel: string;
  onlineLabel: string;
  caption: string;
  language: "en" | "cn";
}) {
  const series: TrendSeries[] = [
    { key: "registration", label: registrationLabel, color: "var(--brand-2nd-green)" },
    { key: "online", label: onlineLabel, color: "var(--brand-color)" },
  ];
  const pad = (value: number) => String(value).padStart(2, "0");
  const data = points.map((point) => ({
    ...point,
    label: `${point.date.getMonth() + 1}.${pad(point.date.getDate())}`,
    fullLabel: `${point.date.getFullYear()}.${pad(point.date.getMonth() + 1)}.${pad(point.date.getDate())}`,
  }));
  const axisTick = { fill: "var(--text-color-secondary)", fontSize: 12 };

  return (
    <figure className="flex min-h-[360px] flex-1 flex-col gap-2">
      <ul className="flex items-center gap-3" aria-hidden="true">
        {series.map((item) => (
          <li key={item.key} className="inline-flex items-center gap-1 text-foot12 text-primary-text">
            <LineMarker color={item.color} />
            {item.label}
          </li>
        ))}
      </ul>
      <div className="min-h-0 flex-1" aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 12, right: 16, bottom: 0, left: 0 }}>
            <CartesianGrid vertical={false} stroke="var(--component-stroke)" strokeDasharray="4 4" />
            <XAxis
              dataKey="label"
              tick={axisTick}
              tickLine={false}
              axisLine={{ stroke: "var(--component-border)" }}
              tickMargin={8}
              padding={{ left: 24, right: 24 }}
            />
            <YAxis
              domain={[0, 1]}
              ticks={[0, 0.2, 0.4, 0.6, 0.8, 1]}
              tickFormatter={(value: number) => (value === 0 ? "0" : `${Math.round(value * 100)}%`)}
              tick={axisTick}
              tickLine={false}
              axisLine={false}
              width={44}
            />
            <ChartTooltip
              cursor={{ stroke: "var(--brand-color)", strokeDasharray: "3 3" }}
              content={<TrendTooltip series={series} />}
              isAnimationActive={false}
            />
            {series.map((item) => (
              <Line
                key={item.key}
                type="linear"
                dataKey={item.key}
                stroke={item.color}
                strokeWidth={2}
                dot={{ r: 3, fill: "var(--bg-color-container)", stroke: item.color, strokeWidth: 1.5 }}
                activeDot={{ r: 4, fill: "var(--bg-color-container)", stroke: item.color, strokeWidth: 2 }}
                isAnimationActive={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* 读屏用的数据表：折线本身对读屏隐藏 */}
      <table className="sr-only">
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">{language === "cn" ? "日期" : "Date"}</th>
            <th scope="col">{registrationLabel}</th>
            <th scope="col">{onlineLabel}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((point) => (
            <tr key={point.fullLabel}>
              <th scope="row">{point.fullLabel}</th>
              <td>{formatPercent(point.registration)}</td>
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
