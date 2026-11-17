import { useMemo, useState } from "react";
import { DateRangePicker, Radio, Select } from "tdesign-react";
import type { AppEdition } from "../../data/accounts";
import type { QueryDevice } from "../../data/deviceQuery";
import { BarChart as VizBarChart, ChartLegend, chartColor, LineChart as VizLineChart } from "../charts";
import { CalendarIcon } from "../icons/calendar";
import { TagFilterButton } from "../TagFilterButton";
import { detailCopy, type Language } from "./copy";
import { DetailSection } from "./DetailSection";

/**
 * 统计数据页签（Figma IOT Delivery 6178:20424）。
 *
 *   · 统计总览：近7天 / 近30天 / 近90天（TDesign RadioGroup default-filled）；通力 10 个指标（上排运行类蓝点、下排故障类红点），仟帆 5 个指标一排
 *   · 数据分析（通力 / 仟帆一致）：一张卡片三张图（日在线率趋势 / 分时段统计 / 楼层统计），用标签切换，共用统计维度——
 *     累计 / 90天 / 30天 / 24小时 标签 + 自选日期区间；图表取自组件库的 LineChart / BarChart
 * 数据按设备编号 + 时间粒度用固定种子生成，同一台设备每次一致。
 */

type OverviewRange = "7d" | "30d" | "90d";
type AnalysisRange = "90d" | "30d" | "24h" | "all";
type Metric = "total" | "up" | "down" | "door";
type AnalysisTab = "online" | "period" | "floor";

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
    const avgHoursPerDay = 4 + random() * 6;
    return {
      runs: runsPerDay * days,
      avgHours: avgHoursPerDay.toFixed(1),
      // 运行总时长 = 日均运行时长 × 天数（仟帆统计总览展示）
      totalHours: Math.round(avgHoursPerDay * days),
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

const isoDate = (date: Date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

/** 日期区间面板页脚的快捷选项：近 7 / 30 / 90 天（含今天）。 */
const QIANFAN_DATE_PRESETS = (labels: Record<"7d" | "30d" | "90d", string>) =>
  Object.fromEntries(
    (["7d", "30d", "90d"] as const).map((key) => [
      labels[key],
      () => {
        const end = new Date();
        const start = new Date(end.getTime() - (RANGE_DAYS[key] - 1) * 86_400_000);
        return [isoDate(start), isoDate(end)];
      },
    ]),
  );

/** 单序列折线图例（组件库规范：线 + 空心圆点）；颜色与图表默认的第 1 个系列色一致。外层 km-chart 让图例变量生效。 */
function SeriesLegend({ name }: { name: string }) {
  return (
    <div className="km-chart" aria-hidden="true">
      <ChartLegend marker="line" items={[{ key: "series", name, color: chartColor(0) }]} />
    </div>
  );
}

/**
 * 图表单位（如「单位（次）」）：Foot 12、图表副标题色，与楼层统计头部的单位同一样式。
 * `--viz-subtitle` 只在 `.km-chart` 范围内有定义，而这个标签在图表卡片外面，所以自己带上 km-chart，
 * 否则变量取不到、文字会退回成默认的深色。
 */
function UnitLabel({ children }: { children: string }) {
  return (
    <span className="km-chart text-foot12" style={{ color: "var(--viz-subtitle)" }}>
      {children}
    </span>
  );
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
  } else if (range === "all") {
    // 累计：自上线以来按月汇总，取最近 12 个月
    for (let index = 11; index >= 0; index--) {
      const date = new Date(end.getFullYear(), end.getMonth() - index, 1);
      labels.push(`${date.getFullYear()}.${date.getMonth() + 1}`);
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

export function DeviceStatisticsTab({ device, language, edition }: { device: QueryDevice; language: Language; edition?: AppEdition }) {
  const t = detailCopy[language];
  const [overviewRange, setOverviewRange] = useState<OverviewRange>("30d");
  const [analysisRange, setAnalysisRange] = useState<AnalysisRange>("30d");
  const [dateRange, setDateRange] = useState<string[]>([]);
  const [metric, setMetric] = useState<Metric>("total");
  const overview = useOverview(device, overviewRange);

  // 统计维度（时间粒度 / 自定义日期）决定横轴标签；三张图表共用
  const axisLabels = useMemo(() => {
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
    return labels;
  }, [analysisRange, dateRange]);

  const period = useMemo(() => {
    const labels = axisLabels;
    const scale = analysisRange === "all" ? 25 : analysisRange === "24h" ? 0.6 : 1;
    const random = createRandom(seedOf(`${device.id}:period:${analysisRange}:${dateRange.join("-")}:${metric}`));
    const base = (metric === "door" ? 520 : metric === "total" ? 320 : 170) * scale;
    let value = base;
    return labels.map((label) => {
      value = Math.max(base * 0.4, Math.min(base * 1.8, value + (random() - 0.48) * base * 0.35));
      return { label, full: label, value: Math.round(value) };
    });
  }, [analysisRange, dateRange, device.id, metric, axisLabels]);

  // 日在线率：按设备编号 + 统计维度生成固定种子的数据（55%–100% 之间小幅波动），同一台设备每次一致
  const onlineRates = useMemo(() => {
    const random = createRandom(seedOf(`${device.id}:online-rate:${analysisRange}:${dateRange.join("-")}`));
    let value = 0.8 + random() * 0.15;
    return axisLabels.map((label) => {
      value = Math.max(0.55, Math.min(1, value + (random() - 0.5) * 0.12));
      return { date: label, rate: Math.round(value * 1000) / 1000 };
    });
  }, [axisLabels, analysisRange, dateRange, device.id]);

  const [analysisTab, setAnalysisTab] = useState<AnalysisTab>("online");

  const floors = useMemo(() => {
    const random = createRandom(seedOf(`${device.id}:floors:${analysisRange}:${dateRange.join("-")}`));
    const scale = analysisRange === "all" ? 8 : analysisRange === "24h" ? 0.3 : analysisRange === "90d" ? 2.4 : 1;
    return Array.from({ length: 12 }, (_, index) => {
      const up = index === 11 ? 0 : Math.round((40 + random() * 160) * scale);
      const down = index === 0 ? 0 : Math.round((20 + random() * 180) * scale);
      return { floor: `${index + 1}F`, up, down, total: up + down };
    }).reverse();
  }, [analysisRange, dateRange, device.id]);

  const metricOptions = (Object.keys(t.metrics) as Metric[]).map((key) => ({ label: t.metrics[key], value: key }));

  const analysisTabs: { key: AnalysisTab; label: string }[] = [
    { key: "online", label: t.onlineTrend },
    { key: "period", label: t.periodStats },
    { key: "floor", label: t.floorStats },
  ];
  const onlineFigure = (
    <div className="flex flex-col">
      <div className="flex min-h-6 items-center justify-between gap-4">
        <UnitLabel>{t.unitPercent}</UnitLabel>
        <SeriesLegend name={t.onlineRateSeries} />
      </div>
      <VizLineChart
        surface="page"
        className="!border-0 !p-0"
        height={320}
        data={onlineRates}
        xKey="date"
        series={[{ key: "rate", name: t.onlineRateSeries }]}
        // 50% 警示线：红色虚线 + 左侧「50%」标注
        referenceLines={[{ value: 0.5, label: "50%" }]}
        yTicks={[0.2, 0.4, 0.6, 0.8, 1]}
        formatTick={(value) => `${Math.round(value * 100)}%`}
        formatValue={(value) => `${(value * 100).toFixed(1)}%`}
        xInterval={onlineRates.length > 60 ? 6 : onlineRates.length > 24 ? 1 : 0}
        dots={onlineRates.length <= 40}
        flushEdges
      />
    </div>
  );
  const periodFigure = (
    <figure className="m-0 flex flex-col gap-0">
      <div className="flex min-h-6 items-center justify-between gap-4">
        <UnitLabel>{t.unitTimes}</UnitLabel>
        <div className="ml-auto flex items-center gap-4">
          <SeriesLegend name={t.metrics[metric]} />
          <div className="w-[220px]">
            <Select size="small" value={metric} options={metricOptions} onChange={(next) => setMetric(next as Metric)} />
          </div>
        </div>
      </div>
      {/* 组件库折线图，与「日在线率趋势」样式一致（贴满两端、空心白点、点划网格线） */}
      <VizLineChart
        surface="page"
        className="!border-0 !p-0"
        height={320}
        data={period}
        xKey="label"
        series={[{ key: "value", name: t.metrics[metric] }]}
        xInterval={period.length > 60 ? 6 : period.length > 24 ? 1 : 0}
        dots={period.length <= 40}
        flushEdges
      />
    </figure>
  );
  const floorFigure = (
    // 组件库条形图；柱高 5 / 组内间距 2 / 类目间距 22% / 图表高度这些定制值保持不变
    <VizBarChart
      surface="page"
      className="!border-0 !p-0"
      height={620}
      data={floors}
      categoryKey="floor"
      series={[
        { key: "up", name: t.floorSeries.up, color: "var(--chart-floor-up)" },
        { key: "down", name: t.floorSeries.down, color: "var(--chart-floor-down)" },
        { key: "total", name: t.floorSeries.total, color: "var(--chart-floor-total)" },
      ]}
      subtitle={t.unitTimes}
      barSize={5}
      barGap={2}
      barCategoryGap="22%"
      categoryWidth={40}
      legendSize="md"
    />
  );

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
        {edition === "qianfan" ? (
          // 仟帆：5 个指标放一排——运行总次数、运行总时长、平均运行时长、访问最多的楼层（蓝点），故障发生总次数（红点）
          <div className="grid grid-cols-2 gap-3 p-3 md:grid-cols-3 xl:grid-cols-5">
            <KpiCard tone="brand" value={fmt(overview.runs)} unit={t.units.times} label={t.kpi.runs} />
            <KpiCard tone="brand" value={fmt(overview.totalHours)} unit={t.units.hours} label={t.kpi.totalHours} />
            <KpiCard tone="brand" value={overview.avgHours} unit={t.units.hoursPerDay} label={t.kpi.avgHours} />
            <KpiCard tone="brand" value={overview.topFloor} label={t.kpi.topFloor} />
            <KpiCard tone="error" value={fmt(overview.faults)} unit={t.units.times} label={t.kpi.faults} />
          </div>
        ) : (
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
        )}
      </DetailSection>

      <DetailSection
        title={t.analysis}
        titleId="device-stats-analysis"
        extra={
          <>
            {/* 时间粒度用独立的标签筛选（累计 / 90天 / 30天 / 24小时），与设备档案卡片的标签样式一致；自选日期区间保留 */}
            <div role="group" aria-label={t.analysis} className="flex items-center gap-2">
              {(["all", "90d", "30d", "24h"] as AnalysisRange[]).map((key) => (
                <TagFilterButton
                  key={key}
                  label={t.analysisRanges[key]}
                  active={!dateRange.length && analysisRange === key}
                  onClick={() => {
                    setAnalysisRange(key);
                    setDateRange([]);
                  }}
                />
              ))}
            </div>
            <div className="w-[240px]">
              <DateRangePicker
                size="small"
                clearable
                value={dateRange}
                placeholder={[t.startDateShort, t.endDateShort]}
                onChange={(value) => setDateRange((value as string[]).filter(Boolean))}
                // 按 DatePicker 设计稿（Figma 37379:309578）：输入框显示 YYYY/MM/DD、双月面板、
                // 页脚左侧快捷选项（蓝色文字）+ 右侧「确定」；值仍是 YYYY-MM-DD，不影响图表取数
                suffixIcon={<CalendarIcon className="t-icon size-4" />}
                format="YYYY/MM/DD"
                valueType="YYYY-MM-DD"
                needConfirm
                presets={QIANFAN_DATE_PRESETS(t.overviewRanges)}
                disableDate={{ after: isoDate(new Date()) }}
              />
            </div>
          </>
        }
      >
        {/* 三张图表合在一张「数据分析」卡片里，共用上方的统计维度（时间粒度 / 自定义日期），用标签切换 */}
        <div className="flex flex-col gap-4 p-4">
          <div role="tablist" aria-label={t.analysis} className="flex flex-wrap gap-2">
            {analysisTabs.map((tab) => {
              const on = analysisTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setAnalysisTab(tab.key)}
                  className={`h-6 rounded-xs border px-2 text-foot12 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-base ${
                    on ? "border-brand-base bg-brand-light text-brand" : "border-component-border bg-container text-secondary-text hover:border-brand-hover"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div role="tabpanel">{analysisTab === "online" ? onlineFigure : analysisTab === "period" ? periodFigure : floorFigure}</div>
        </div>
      </DetailSection>
    </div>
  );
}
