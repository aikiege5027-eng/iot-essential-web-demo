import type { ReactNode } from "react";
import { cn } from "../ui/utils";
import type { ChartTheme } from "./chart-theme";

/**
 * 图表卡片外框（Figma 饼图 226:7264 / 折线图 202:29241）。
 *
 * · 背景 Theme/Background，圆角 12，阴影 `--viz-card-shadow`；
 * · 内边距 上 14 / 左右 28 / 下 28（嵌套环形图为 上 16 / 下 19）；
 * · 头部 24 高：主标题（H7 16/24 Semibold）靠左绝对定位，图例在整行居中，互不挤压；
 * · 默认 500×320，宽度随容器，高度由 `height` 控制。
 *
 * `theme` 不传时跟随祖先 `.dark`（见 charts.css）。
 */

export interface ChartFrameProps {
  title?: ReactNode;
  /** 头部居中的图例，通常是 <ChartLegend /> */
  legend?: ReactNode;
  theme?: ChartTheme;
  height?: number | string;
  /** nested：上 16 / 下 19，用于头部有两行图例的嵌套环形图 */
  padding?: "default" | "nested";
  /**
   * chart（默认）：图表规范卡片——圆角 12、轻阴影、无描边、内边距 14/28/28，标题 Semibold；
   * page：嵌入业务页面时与页面卡片一致——1px `border-stroke` 描边、圆角 8、无阴影、内边距 16，标题 Medium。
   */
  surface?: "chart" | "page";
  /**
   * 图例位置：center（默认）在头部整行居中，标题绝对定位靠左；
   * end 与标题同一行、靠右对齐，业务页面卡片统一用这个。
   */
  legendAlign?: "center" | "end";
  className?: string;
  /** 读屏摘要；图表本体对读屏隐藏，数据由各图表自带的 sr-only 表格 / 列表提供 */
  ariaLabel?: string;
  children: ReactNode;
}

export function ChartFrame({
  title,
  legend,
  theme,
  height = 320,
  padding = "default",
  surface = "chart",
  legendAlign = "center",
  className,
  ariaLabel,
  children,
}: ChartFrameProps) {
  return (
    <figure
      role="group"
      aria-label={ariaLabel}
      data-theme={theme}
      className={cn(
        "km-chart m-0 flex w-full min-w-0 flex-col",
        surface === "page"
          ? "rounded-lg border border-stroke p-4"
          : cn("rounded-xl px-7", padding === "nested" ? "pb-[19px] pt-4" : "pb-7 pt-3.5"),
        className,
      )}
      style={{ height, backgroundColor: "var(--viz-background)", boxShadow: surface === "page" ? "none" : "var(--viz-card-shadow)" }}
    >
      {(title != null || legend != null) &&
        (legendAlign === "end" ? (
          <div className="flex min-h-6 shrink-0 items-center justify-between gap-3">
            {title != null && (
              <h3 className={cn("m-0 whitespace-nowrap text-h7", surface === "page" ? "font-medium" : "font-semibold")} style={{ color: "var(--viz-title)" }}>
                {title}
              </h3>
            )}
            {legend}
          </div>
        ) : (
          <div className="relative flex min-h-6 shrink-0 items-center justify-center">
            {title != null && (
              <h3 className={cn("absolute left-0 top-0 m-0 whitespace-nowrap text-h7", surface === "page" ? "font-medium" : "font-semibold")} style={{ color: "var(--viz-title)" }}>
                {title}
              </h3>
            )}
            {legend}
          </div>
        ))}
      {children}
    </figure>
  );
}
