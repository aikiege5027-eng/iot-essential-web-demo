import type { ReactNode } from "react";
import { LegendDot } from "./ChartLegend";

/**
 * 图表悬浮提示卡片（Figma 折线图 2383:7982「数据悬浮」）。
 *
 * 白底 / 暗底（Theme/Tooltip background）、圆角 8、内边距 12、阴影 `--viz-tooltip-shadow`。
 * 左列：标题（如 AAA）+ 每个系列的「圆点 + 名称」（Text/legend text，12px / 字距 0.6）；
 * 右列：与左列逐行对齐的数值（Text/title，Medium）。
 */

export interface ChartTooltipRow {
  key: string;
  color: string;
  name: ReactNode;
  value: ReactNode;
}

export function ChartTooltipCard({ title, rows }: { title?: ReactNode; rows: ChartTooltipRow[] }) {
  return (
    <div
      className="pointer-events-none min-w-[88px] rounded-lg p-3 text-foot12"
      style={{ backgroundColor: "var(--viz-tooltip-background)", boxShadow: "var(--viz-tooltip-shadow)", letterSpacing: "0.6px" }}
    >
      <dl className="m-0 grid grid-cols-[auto_auto] items-center gap-x-6 gap-y-1 leading-[normal]">
        {title != null && (
          <dt className="col-span-2 whitespace-nowrap" style={{ color: "var(--viz-legend-text)" }}>
            {title}
          </dt>
        )}
        {rows.map((row) => (
          <div key={row.key} className="contents">
            <dt className="inline-flex items-center gap-1 whitespace-nowrap" style={{ color: "var(--viz-legend-text)" }}>
              <LegendDot color={row.color} />
              {row.name}
            </dt>
            <dd className="m-0 whitespace-nowrap text-right font-medium tabular-nums" style={{ color: "var(--viz-title)" }}>
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
