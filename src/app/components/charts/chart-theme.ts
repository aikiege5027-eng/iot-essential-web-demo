import { useLayoutEffect, useState } from "react";
import type { RefObject } from "react";

/**
 * 图表主题与通用工具（Figma China Data Visualization，f4nG73gc9qgxn2vwk0GElY）。
 *
 * 颜色一律走 CSS 变量：
 *   · 定性色板 `--categorical-color-1…8` 在 theme.css，两个主题取值相同；
 *   · 背景 / 文字 / 坐标轴 / 悬浮提示等 `--viz-*` 在 charts.css，随 `.km-chart[data-theme]` 切换。
 * 这里不出现任何 hex。
 */

export type ChartTheme = "light" | "dark";

/** 主系列色板（color-1…5），按序号循环。 */
const SERIES_COLORS = [1, 2, 3, 4, 5].map((n) => `var(--categorical-color-${n})`);

/** 嵌套环形图内圈专用色（color-6…8）。 */
export const INNER_SERIES_COLORS = [6, 7, 8].map((n) => `var(--categorical-color-${n})`);

export const chartColor = (index: number) => SERIES_COLORS[index % SERIES_COLORS.length];

/** 图例 / 数据标签中的百分比：整数不带小数，否则保留一位。 */
export function formatPercent(value: number) {
  const rounded = Math.round(value * 1000) / 10;
  return `${Number.isInteger(rounded) ? rounded : rounded.toFixed(1)}%`;
}

/** 1 / 2 / 5 × 10^k 的取整步长，使纵轴刻度落在 0…max 的 5 等分上（250 → 0,50,…,250）。 */
export function niceStep(raw: number) {
  if (raw <= 0) return 1;
  // 大数按 50 / 10 的倍数取整（250、300），小数按 1·2·5 取整，避免 55 被抬到 100
  if (raw >= 100) return Math.ceil(raw / 50) * 50;
  if (raw >= 10) return Math.ceil(raw / 10) * 10;
  const power = 10 ** Math.floor(Math.log10(raw));
  const normalized = raw / power;
  return (normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10) * power;
}

/** divisions 等分的刻度（默认 5 等分 → 6 个刻度；mirror 的半高绘图区用 4 等分，避免标签挤在一起）。 */
export function buildTicks(maxValue: number, divisions = 5) {
  const step = niceStep(maxValue / divisions);
  return Array.from({ length: divisions + 1 }, (_, index) => step * index);
}

/** 监听元素尺寸；首次测量前返回 0×0，调用方应据此不渲染几何。 */
export function useElementSize(ref: RefObject<HTMLElement | null>) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    const update = () => setSize({ width: element.clientWidth, height: element.clientHeight });
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}
