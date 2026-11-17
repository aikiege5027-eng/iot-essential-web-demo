import type { ReactNode } from "react";
import { BarChart, LineChart, PieChart, type BarChartProps, type ChartTheme, type LineChartProps, type PieChartProps } from "../components/charts";

/**
 * 数据可视化图表验证页（#/design-system/charts）。
 *
 * 设计来源 Figma「China Data Visualization」：饼图 PieChart 224:5919、折线图 LineChart 202:2。
 * 同一份数据按亮 / 暗两个主题各渲染一遍，与设计稿的 Light / Dark 两栏对照；每张卡片标题
 * 之上是形态名（中文 + 英文），与设计稿展示组一致。
 */

const PIE_DATA = [
  { name: "图例A", value: 40 },
  { name: "图例B", value: 30 },
  { name: "图例C", value: 15 },
  { name: "图例D", value: 10 },
  { name: "图例E", value: 5 },
];

const PIE_INNER_DATA = [
  { name: "图例1", value: 30 },
  { name: "图例2", value: 35 },
  { name: "图例3", value: 35 },
];

const PIE_VARIANTS: { zh: string; en: string; props: Pick<PieChartProps, "variant" | "innerData" | "center" | "data"> }[] = [
  { zh: "基础饼图", en: "Pie chart", props: { variant: "pie" } },
  { zh: "环形饼图", en: "Ring Pie Chart", props: { variant: "ring" } },
  { zh: "南丁格尔玫瑰图", en: "Nightingale Chart", props: { variant: "rose" } },
  { zh: "嵌套环形图", en: "Nested Pies", props: { variant: "nested", innerData: PIE_INNER_DATA } },
  {
    // 业务扩展：环心放总数；颜色可由数据自带（设备总览「设备注册情况」沿用业务语义色）
    zh: "环形饼图 · 环心内容",
    en: "Ring with center",
    props: {
      variant: "ring",
      data: [
        { name: "已注册", value: 413, color: "var(--brand-2nd-green)" },
        { name: "未注册", value: 22, color: "var(--bg-color-secondarycontainer-hover)" },
      ],
      center: (
        <>
          <span className="text-h5 font-semibold tabular-nums" style={{ color: "var(--viz-title)" }}>435</span>
          <span className="text-foot12" style={{ color: "var(--viz-subtitle)" }}>云管家设备</span>
        </>
      ),
    },
  },
];

const X = ["AAA", "BBB", "CCC", "EEE", "DDD", "FFF", "GGG"];
const rows = (...columns: number[][]) =>
  X.map((name, index) => Object.fromEntries([["name", name], ...columns.map((column, series) => [`s${series}`, column[index]])]) as Record<string, string | number>);

const SINGLE = [{ key: "s0", name: "图例A" }];
const THREE = [
  { key: "s0", name: "图例A" },
  { key: "s1", name: "图例B" },
  { key: "s2", name: "图例C" },
];
const TWO_COLORED = [
  { key: "s0", name: "图例A", color: "var(--categorical-color-1)" },
  { key: "s1", name: "图例B", color: "var(--categorical-color-2)" },
];

const BASIC_DATA = rows([145, 145, 205, 148, 55, 143, 207]);
const SMOOTH_DATA = rows([110, 168, 175, 148, 207, 210, 247]);
const AREA_DATA = rows([157, 220, 112, 65, 178, 152, 245]);
const SMOOTH_AREA_DATA = rows([170, 220, 105, 62, 172, 152, 218]);
const STACK_DATA = rows([45, 70, 92, 95, 100, 108, 120], [42, 45, 50, 43, 50, 55, 70], [18, 45, 22, 17, 38, 35, 58]);
const STEP_DATA = rows([105, 185, 185, 200, 200, 215, 245], [60, 100, 100, 150, 130, 130, 190], [20, 55, 40, 60, 45, 60, 55]);
const MIRROR_DATA = rows([20, 165, 15, 10, 155, 100, 10], [60, 130, 160, 75, 190, 80, 40]);
const BIPOLAR_DATA = rows([5, 25, 230, 15, 80, 170, 20], [30, 200, 40, 20, 170, 60, 10]);

const LINE_VARIANTS: { zh: string; en: string; props: Omit<LineChartProps, "title" | "theme" | "height" | "className"> }[] = [
  { zh: "基础折线图", en: "Basic Line Chart", props: { data: BASIC_DATA, series: SINGLE, subtitle: "副标题显示" } },
  { zh: "基础平滑折线图", en: "Smoothed Line Chart", props: { data: SMOOTH_DATA, series: SINGLE, subtitle: "副标题显示", smooth: true } },
  { zh: "基础面积折线图", en: "Base Area Line Chart", props: { data: AREA_DATA, series: SINGLE, subtitle: "副标题显示", area: true } },
  { zh: "基础平滑面积折线图", en: "Smooth Area Line Chart", props: { data: SMOOTH_AREA_DATA, series: SINGLE, subtitle: "副标题显示", smooth: true, area: true } },
  { zh: "堆叠折线图", en: "Stacked Line Chart", props: { data: STACK_DATA, series: THREE, subtitle: "副标题显示", stacked: true } },
  { zh: "堆叠平滑折线图", en: "Stacked Smooth Line Chart", props: { data: STACK_DATA, series: THREE, subtitle: "副标题显示", stacked: true, smooth: true } },
  { zh: "堆叠面积折线图", en: "Stacked Area Line Chart", props: { data: STACK_DATA, series: THREE, subtitle: "副标题显示", stacked: true, area: true } },
  { zh: "堆叠平滑面积折线图", en: "Stacked Smooth Area Line", props: { data: STACK_DATA, series: THREE, subtitle: "副标题显示", stacked: true, smooth: true, area: true } },
  { zh: "区域高亮折线图", en: "Area Highlight Line Chart", props: { data: SMOOTH_DATA, series: SINGLE, subtitle: "副标题显示", smooth: true, highlight: { from: "DDD", to: "FFF" } } },
  { zh: "X轴对称折线图", en: "X-axis symmetrical line chart", props: { data: MIRROR_DATA, series: TWO_COLORED, subtitle: "副标题显示", smooth: true, layout: "mirror" } },
  { zh: "上下X轴折线图", en: "Up-down X-axis line chart", props: { data: BIPOLAR_DATA, series: TWO_COLORED, subtitle: "副标题显示", smooth: true, layout: "bipolar" } },
  { zh: "阶梯折线图", en: "Ladder Line Chart", props: { data: STEP_DATA, series: THREE, subtitle: "副标题显示", step: true } },
];

const BAR_NAMES = ["AAA", "BBB", "CCC", "DDD", "EEE"];
const bars = (...columns: number[][]) =>
  BAR_NAMES.map((name, index) => Object.fromEntries([["name", name], ...columns.map((column, series) => [`s${series}`, column[index]])]) as Record<string, string | number>);
const BAR_BASIC = bars([240, 160, 100, 205, 310]);
const BAR_MULTI = bars([330, 250, 160, 190, 410], [290, 205, 120, 205, 320]);
const BAR_STACK = bars([220, 160, 120, 150, 250], [60, 50, 30, 100, 70], [50, 20, 20, 35, 100], [30, 10, 10, 15, 60]);
const BAR_DIVERGING = ["AAA", "BBB", "CCC", "DDD", "EEE", "FFF", "GGG", "HHH"].map((name, index) => ({
  name,
  s0: [0, -120, 0, 0, -45, 0, -80, -150][index],
  s1: [150, 0, 120, 60, 0, 85, 0, 0][index],
}));
const BAR_POLAR = [
  { name: "图例A", s0: 500 },
  { name: "图例B", s0: 430 },
  { name: "图例C", s0: 300 },
  { name: "图例D", s0: 190 },
];
const FOUR = [
  { key: "s0", name: "图例A" },
  { key: "s1", name: "图例B" },
  { key: "s2", name: "图例C" },
  { key: "s3", name: "图例D" },
];

const BAR_VARIANTS: { zh: string; en: string; props: Omit<BarChartProps, "title" | "theme" | "height" | "className"> }[] = [
  { zh: "基础条形图", en: "Basic bar chart", props: { data: BAR_BASIC, series: SINGLE, subtitle: "副标题显示" } },
  { zh: "带背景基础条形图", en: "Basic bar chart with background", props: { data: BAR_BASIC, series: SINGLE, subtitle: "副标题显示", background: true } },
  { zh: "多值条形图", en: "Multivalue Bar Chart", props: { data: BAR_MULTI, series: TWO_COLORED, subtitle: "副标题显示", barSize: 10, barGap: 2 } },
  { zh: "正负轴条形图", en: "Positive and negative axis bar chart", props: { data: BAR_DIVERGING, series: TWO_COLORED, subtitle: "副标题显示", diverging: true, barSize: 12, barCategoryGap: "12%" } },
  { zh: "堆叠条形图", en: "Stacked Bar Chart", props: { data: BAR_STACK, series: FOUR, subtitle: "副标题显示", stacked: true } },
  { zh: "极坐标条形图", en: "Polar Bar Chart", props: { data: BAR_POLAR, series: SINGLE, polar: true } },
];

function Group({ zh, en, children }: { zh: string; en: string; children: ReactNode }) {
  return (
    <section className="flex min-w-0 flex-col gap-3.5">
      <div className="flex items-baseline justify-between gap-4 px-1">
        <h3 className="m-0 text-h6 font-semibold">{zh}</h3>
        <span className="text-foot12 opacity-70">{en}</span>
      </div>
      {children}
    </section>
  );
}

/** `#/design-system/charts?only=pie|line|bar` 只显示某一类图表，方便单独查看 / 截图。 */
const onlyKind = () => new URLSearchParams(window.location.hash.split("?")[1] ?? "").get("only");

function ThemeSection({ theme }: { theme: ChartTheme }) {
  const isDark = theme === "dark";
  const only = onlyKind();
  return (
    <div className={`flex min-w-0 flex-1 flex-col gap-10 p-8 ${isDark ? "bg-secondary-text text-white-text" : "bg-page text-primary-text"}`}>
      <h2 className="m-0 text-h5 font-semibold">{isDark ? "Dark 暗色" : "Light 亮色"}</h2>

      {(!only || only === "pie") && (
      <div className="flex flex-col gap-3">
        <h2 className="m-0 text-h6 font-semibold">饼图 PieChart</h2>
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 2xl:grid-cols-2">
          {PIE_VARIANTS.map(({ zh, en, props }) => (
            <Group key={zh} zh={zh} en={en}>
              <PieChart theme={theme} title="主标题显示" data={PIE_DATA} {...props} />
            </Group>
          ))}
        </div>
      </div>

      )}
      {(!only || only === "line") && (
      <div className="flex flex-col gap-3">
        <h2 className="m-0 text-h6 font-semibold">折线图 LineChart</h2>
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 2xl:grid-cols-2">
          {LINE_VARIANTS.map(({ zh, en, props }) => (
            <Group key={zh} zh={zh} en={en}>
              <LineChart theme={theme} title="主标题显示" {...props} />
            </Group>
          ))}
        </div>
      </div>
      )}
      {(!only || only === "bar") && (
      <div className="flex flex-col gap-3">
        <h2 className="m-0 text-h6 font-semibold">条形图 BarChart</h2>
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 2xl:grid-cols-2">
          {BAR_VARIANTS.map(({ zh, en, props }) => (
            <Group key={zh} zh={zh} en={en}>
              <BarChart theme={theme} title="主标题显示" {...props} />
            </Group>
          ))}
        </div>
      </div>
      )}
    </div>
  );
}

export default function ChartsShowcase() {
  return (
    <div className="min-h-screen bg-page">
      <header className="border-b border-stroke bg-container px-8 py-5">
        <h1 className="m-0 text-h4 font-semibold text-primary-text">数据可视化 · 图表</h1>
        <p className="m-0 mt-1 text-body text-secondary-text">
          饼图 PieChart（Figma 224:5919）、折线图 LineChart（Figma 202:2）与条形图 BarChart（Figma 214:8610）。亮 / 暗主题 token 见 src/styles/charts.css，
          定性色板 --categorical-color-1…8 见 theme.css。悬停可查看提示卡片。
        </p>
      </header>
      <div className="flex flex-col xl:flex-row">
        <ThemeSection theme="light" />
        <ThemeSection theme="dark" />
      </div>
    </div>
  );
}
