import { cn } from "../ui/utils";

/**
 * 图表图例（Figma 饼图 226:7181 / 折线图 2383:10022）。
 *
 * 两种标记：
 *   · square —— 12×8、圆角 2 的色块，饼图用，文字 10px / 字距 0.5；
 *   · line   —— 19×9 的「线 + 空心圆点」，折线图用，文字 12px / 字距 0.6。
 * 文字色为 Text/title（图例本体）；悬浮提示里的图例文字改用 Text/legend text，见 ChartTooltipCard。
 */

export interface ChartLegendItem {
  key: string;
  name: string;
  color: string;
}

export function LegendSquare({ color }: { color: string }) {
  return <span aria-hidden="true" className="h-2 w-3 shrink-0 rounded-[2px]" style={{ backgroundColor: color }} />;
}

/** 折线图图例标记：左右两段 5px 线，中间 r=3.8 的空心圆点。 */
export function LegendLine({ color }: { color: string }) {
  return (
    <svg aria-hidden="true" focusable="false" width="20.5" height="9" viewBox="0 0 20.5 9" className="shrink-0 overflow-visible">
      <path d="M0.75 4.5H5.75M14.75 4.5H19.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="10.25" cy="4.5" r="3.8" fill="var(--viz-background)" stroke={color} strokeWidth="1.4" />
    </svg>
  );
}

/** 悬浮提示里的实心圆点标记（9×9）。 */
export function LegendDot({ color }: { color: string }) {
  return <span aria-hidden="true" className="size-[9px] shrink-0 rounded-full" style={{ backgroundColor: color }} />;
}

export function ChartLegend({
  items,
  marker = "square",
  size,
  className,
}: {
  items: ChartLegendItem[];
  marker?: "square" | "line";
  /** sm：10px / 字距 0.5（饼图设计稿）；md：12px / 字距 0.6（与折线图图例一致）。默认按标记类型：line 为 md，square 为 sm */
  size?: "sm" | "md";
  className?: string;
}) {
  const isLine = marker === "line";
  const isMd = (size ?? (isLine ? "md" : "sm")) === "md";
  return (
    <ul
      className={cn("m-0 flex list-none flex-wrap items-center justify-center p-0", isLine ? "gap-3" : "gap-x-2.5 gap-y-2", className)}
    >
      {items.map((item) => (
        <li key={item.key} className="inline-flex items-center gap-1">
          {isLine ? <LegendLine color={item.color} /> : <LegendSquare color={item.color} />}
          <span
            className={cn("whitespace-nowrap leading-[normal]", isMd ? "text-foot12" : "text-foot10")}
            style={{ color: "var(--viz-title)", letterSpacing: isMd ? "0.6px" : "0.5px" }}
          >
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
