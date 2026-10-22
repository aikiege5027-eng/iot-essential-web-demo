import { useMemo, useState } from "react";
import { DateRangePicker, Radio, Select } from "tdesign-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip as ChartTooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { QueryDevice } from "../../data/deviceQuery";
import { detailCopy, type Language } from "./copy";
import { DetailSection } from "./DetailSection";

/**
 * 统计数据页签（Figma IOT Delivery 6178:20424）。
 *
 *   · 统计总览：近7天 / 近30天 / 近90天（TDesign RadioGroup default-filled），10 个指标，上排运行类蓝点、下排故障类红点
 *   · 数据分析：90天 / 30天 / 24小时 / 60分钟 + 开始 / 结束日期；分时段折线（可切换指标）与楼层统计横向分组柱状图
 * 数据按设备编号 + 时间粒度用固定种子生成，同一台设备每次一致。
 */

type OverviewRange = "7d" | "30d" | "90d";
type AnalysisRange = "90d" | "30d" | "24h" | "60m";
type Metric = "total" | "up" | "down" | "door";

function createRandom(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const seedOf = (text: string) => [...text].reduce((value, char) => Math.imul(value ^ char.charCodeAt(0), 16777619), 2166136261) >>> 0;
const fmt = (value: number) => value.toLocaleString("en-US");
const pad = (value: number) => String(value).padStart(2, "0");

const RANGE_DAYS: Record<OverviewRange, number> = { "7d": 7, "30d": 30, "90d": 90 };

function useOverview(device: QueryDevice, range: OverviewRange) {
  return useMemo(() => {
    const random = createRandom(seedOf(`${device.id}:overview:${range}`));
    const days = RANGE_DAYS[range];
    const runsPerDay = 600 + Math.floor(random() * 900);
    const floors = Math.max(...device.modules.map(() => 12), 12);
    const peakStart = 7 + Math.floor(random() * 11);
    return {
      runs: runsPerDay * days,
      avgHours: (4 + random() * 6).toFixed(1),
      distance: Math.round(runsPerDay * days * (0.02 + random() * 0.03)),
      peak: `${pad(peakStart)}:00 ~ ${pad(peakStart + 1)}:00`,
      topFloor: `${1 + Math.floor(random() * floors)}F`,
      faults: Math.round(days * (2 + random() * 20)),
      doorFaults: Math.round(days * random() * 1.5),
      longestDoor: 1 + Math.floor(random() * 9),
      avgDoor: 1 + Math.floor(random() * 5),
      doorFloor: `${1 + Math.floor(random() * floors)}F`,
    };
  }, [device, range]);
}

function KpiCard({ value, unit, label, tone }: { value: string; unit?: string; label: string; tone: "brand" | "error" }) {
  return (
    <div className="flex min-w-0 flex-col gap-0.5 rounded-md bg-secondarycontainer px-4 py-3">
      <p className="flex items-baseline gap-1.5 text-primary-text">
        <span aria-hidden="true" className={`size-1.5 shrink-0 self-center rounded-full ${tone === "brand" ? "bg-brand-base" : "bg-surface-alert"}`} />
        <span className="text-h7 font-medium tabular-nums">{value}</span>
        {unit && <span className="text-foot12">{unit}</span>}
      </p>
      <p className="truncate pl-3 text-foot12 text-secondary-text">{label}</p>
    </div>
  );
}

/** 横轴标签：90/30 天按日，24 小时按小时，60 分钟按分钟。 */
function periodLabels(range: AnalysisRange, end: Date) {
  const labels: string[] = [];
  if (range === "24h") {
    for (let index = 23; index >= 0; index--) labels.push(`${pad(new Date(end.getTime() - index * 3600_000).getHours())}:00`);
  } else if (range === "60m") {
    for (let index = 59; index >= 0; index -= 2) {
      const time = new Date(end.getTime() - index * 60_000);
      labels.push(`${pad(time.getHours())}:${pad(time.getMinutes())}`);
    }
  } else {
    const days = range === "90d" ? 90 : 30;
    for (let index = days - 1; index >= 0; index--) {
      const date = new Date(end.getTime() - index * 86_400_000);
      labels.push(`${date.getMonth() + 1}.${date.getDate()}`);
    }
  }
  return labels;
}

const axisTick = { fill: "var(--text-color-secondary)", fontSize: 12 };

function PeriodTooltip({ active, payload, label, metricLabel }: { active?: boolean; payload?: { value: number; payload: { full: string } }[]; label?: string; metricLabel: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="min-w-[120px] rounded-lg bg-container p-3 shadow-popover">
      <p className="text-foot12 text-secondary-text">{metricLabel}</p>
      <p className="mt-2 flex justify-between gap-6 text-foot12">
        <span className="text-secondary-text tabular-nums">{payload[0].payload.full ?? label}</span>
        <span className="font-medium text-primary-text tabular-nums">{fmt(payload[0].value)}</span>
      </p>
    </div>
  );
}

export function DeviceStatisticsTab({ device, language }: { device: QueryDevice; language: Language }) {
  const t = detailCopy[language];
  const [overviewRange, setOverviewRange] = useState<OverviewRange>("30d");
  const [analysisRange, setAnalysisRange] = useState<AnalysisRange>("30d");
  const [dateRange, setDateRange] = useState<string[]>([]);
  const [metric, setMetric] = useState<Metric>("total");
  const overview = useOverview(device, overviewRange);

  const period = useMemo(() => {
    const end = dateRange[1] ? new Date(`${dateRange[1]}T23:59:59`) : new Date();
    let labels = periodLabels(analysisRange, end);
    // 自定义日期区间时按天展示该区间（最多 90 天）
    if (dateRange[0] && dateRange[1]) {
      const start = new Date(`${dateRange[0]}T00:00:00`).getTime();
      const days = Math.min(90, Math.max(1, Math.round((end.getTime() - start) / 86_400_000)));
      labels = Array.from({ length: days }, (_, index) => {
        const date = new Date(start + index * 86_400_000);
        return `${date.getMonth() + 1}.${date.getDate()}`;
      });
    }
    const scale = analysisRange === "60m" ? 0.1 : analysisRange === "24h" ? 0.6 : 1;
    const random = createRandom(seedOf(`${device.id}:period:${analysisRange}:${dateRange.join("-")}:${metric}`));
    const base = (metric === "door" ? 520 : metric === "total" ? 320 : 170) * scale;
    let value = base;
    return labels.map((label) => {
      value = Math.max(base * 0.4, Math.min(base * 1.8, value + (random() - 0.48) * base * 0.35));
      return { label, full: label, value: Math.round(value) };
    });
  }, [analysisRange, dateRange, device.id, metric]);

  const floors = useMemo(() => {
    const random = createRandom(seedOf(`${device.id}:floors:${analysisRange}:${dateRange.join("-")}`));
    const scale = analysisRange === "60m" ? 0.05 : analysisRange === "24h" ? 0.3 : analysisRange === "90d" ? 2.4 : 1;
    return Array.from({ length: 12 }, (_, index) => {
      const up = index === 11 ? 0 : Math.round((40 + random() * 160) * scale);
      const down = index === 0 ? 0 : Math.round((20 + random() * 180) * scale);
      return { floor: `${index + 1}F`, up, down, total: up + down };
    }).reverse();
  }, [analysisRange, dateRange, device.id]);

  const metricOptions = (Object.keys(t.metrics) as Metric[]).map((key) => ({ label: t.metrics[key], value: key }));

  return (
    <div className="flex flex-col gap-4">
      <DetailSection
        title={t.overview}
        titleId="device-stats-overview"
        extra={
          <Radio.Group
              theme="button"
            variant="default-filled"
            size="small"
            value={overviewRange}
            onChange={(next) => setOverviewRange(next as OverviewRange)}
            options={(Object.keys(t.overviewRanges) as OverviewRange[]).map((key) => ({ label: t.overviewRanges[key], value: key }))}
          />
        }
      >
        <div className="grid grid-cols-2 gap-3 p-3 md:grid-cols-3 xl:grid-cols-5">
          <KpiCard tone="brand" value={fmt(overview.runs)} unit={t.units.times} label={t.kpi.runs} />
          <KpiCard tone="brand" value={overview.avgHours} unit={t.units.hoursPerDay} label={t.kpi.avgHours} />
          <KpiCard tone="brand" value={fmt(overview.distance)} unit={t.units.km} label={t.kpi.distance} />
          <KpiCard tone="brand" value={overview.peak} label={t.kpi.peak} />
          <KpiCard tone="brand" value={overview.topFloor} label={t.kpi.topFloor} />
          <KpiCard tone="error" value={fmt(overview.faults)} unit={t.units.times} label={t.kpi.faults} />
          <KpiCard tone="error" value={fmt(overview.doorFaults)} unit={t.units.times} label={t.kpi.doorFaults} />
          <KpiCard tone="error" value={String(overview.longestDoor)} unit={t.units.minutes} label={t.kpi.longestDoor} />
          <KpiCard tone="error" value={String(overview.avgDoor)} unit={t.units.minutes} label={t.kpi.avgDoor} />
          <KpiCard tone="error" value={overview.doorFloor} label={t.kpi.doorFloor} />
        </div>
      </DetailSection>

      <DetailSection
        title={t.analysis}
        titleId="device-stats-analysis"
        extra={
          <>
            <Radio.Group
              theme="button"
              variant="outline"
              size="small"
              value={dateRange.length ? undefined : analysisRange}
              onChange={(next) => {
                setAnalysisRange(next as AnalysisRange);
                setDateRange([]);
              }}
              options={(Object.keys(t.analysisRanges) as AnalysisRange[]).map((key) => ({ label: t.analysisRanges[key], value: key }))}
            />
            <div className="w-[320px]">
              <DateRangePicker
                size="small"
                clearable
                value={dateRange}
                placeholder={[t.startDate, t.endDate]}
                onChange={(value) => setDateRange((value as string[]).filter(Boolean))}
              />
            </div>
          </>
        }
      >
        <div className="flex flex-col gap-6 p-4">
          <figure className="m-0 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-4">
              <h3 className="m-0 text-body font-medium text-primary-text">{t.periodStats}</h3>
              <div className="w-[220px]">
                <Select size="small" value={metric} options={metricOptions} onChange={(next) => setMetric(next as Metric)} />
              </div>
            </div>
            <div className="h-[260px]" aria-hidden="true">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={period} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
                  <CartesianGrid vertical={false} stroke="var(--component-stroke)" strokeDasharray="4 4" />
                  <XAxis dataKey="label" tick={axisTick} tickLine={false} axisLine={{ stroke: "var(--component-border)" }} interval="preserveStartEnd" minTickGap={8} />
                  <YAxis tick={axisTick} tickLine={false} axisLine={false} width={44} />
                  <ChartTooltip
                    cursor={{ stroke: "var(--brand-color)", strokeDasharray: "3 3" }}
                    content={<PeriodTooltip metricLabel={t.metrics[metric]} />}
                    isAnimationActive={false}
                  />
                  <Line
                    type="linear"
                    dataKey="value"
                    stroke="var(--brand-color-hover)"
                    strokeWidth={2}
                    dot={{ r: 3, fill: "var(--bg-color-container)", stroke: "var(--brand-color-hover)", strokeWidth: 1.5 }}
                    activeDot={{ r: 4 }}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <table className="sr-only">
              <caption>{t.chartCaption(`${t.periodStats} · ${t.metrics[metric]}`)}</caption>
              <tbody>
                {period.map((point) => (
                  <tr key={point.label}>
                    <th scope="row">{point.label}</th>
                    <td>{point.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </figure>

          <figure className="m-0 flex flex-col gap-2">
            <h3 className="m-0 text-body font-medium text-primary-text">{t.floorStats}</h3>
            <p className="text-foot12 text-secondary-text">{t.unitTimes}</p>
            <div className="h-[560px]" aria-hidden="true">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={floors} layout="vertical" margin={{ top: 0, right: 16, bottom: 0, left: 0 }} barGap={2} barCategoryGap="22%">
                  <CartesianGrid horizontal={false} stroke="var(--component-stroke)" strokeDasharray="4 4" />
                  <XAxis type="number" tick={axisTick} tickLine={false} axisLine={{ stroke: "var(--component-border)" }} />
                  <YAxis type="category" dataKey="floor" tick={axisTick} tickLine={false} axisLine={{ stroke: "var(--component-border)" }} width={40} />
                  {/* 图例按设计稿（6178:20804）：12×8 圆角 2 色块 + Foot 12 主文字色，色块与文字间距 4，图例项间距 17。
                      Recharts 默认把图例文字染成系列色，这里改用自定义内容。 */}
                  <Legend
                    verticalAlign="top"
                    align="right"
                    wrapperStyle={{ paddingBottom: 8 }}
                    content={({ payload }) => (
                      <ul className="m-0 flex list-none justify-end gap-[17px] p-0">
                        {payload?.map((entry) => (
                          <li key={String(entry.value)} className="flex items-center gap-1 text-foot12 text-primary-text">
                            <span aria-hidden="true" className="h-2 w-3 rounded-[2px]" style={{ backgroundColor: entry.color }} />
                            {entry.value}
                          </li>
                        ))}
                      </ul>
                    )}
                  />
                  <ChartTooltip
                    cursor={{ fill: "var(--bg-color-container-hover)" }}
                    contentStyle={{ borderRadius: 8, border: "none", boxShadow: "var(--elevation-popover)", fontSize: 12 }}
                    isAnimationActive={false}
                  />
                  <Bar dataKey="up" name={t.floorSeries.up} fill="var(--chart-floor-up)" barSize={5} isAnimationActive={false} />
                  <Bar dataKey="down" name={t.floorSeries.down} fill="var(--chart-floor-down)" barSize={5} isAnimationActive={false} />
                  <Bar dataKey="total" name={t.floorSeries.total} fill="var(--chart-floor-total)" barSize={5} isAnimationActive={false} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <table className="sr-only">
              <caption>{t.chartCaption(t.floorStats)}</caption>
              <thead>
                <tr>
                  <th scope="col">Floor</th>
                  <th scope="col">{t.floorSeries.up}</th>
                  <th scope="col">{t.floorSeries.down}</th>
                  <th scope="col">{t.floorSeries.total}</th>
                </tr>
              </thead>
              <tbody>
                {floors.map((row) => (
                  <tr key={row.floor}>
                    <th scope="row">{row.floor}</th>
                    <td>{row.up}</td>
                    <td>{row.down}</td>
                    <td>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </figure>
        </div>
      </DetailSection>
    </div>
  );
}
