import type { ComponentType, ReactNode, SVGProps } from "react";

/** Figma IOT Delivery 5532:18053 device-detail metric Cell. */
export type MetricCardTone = "brand" | "sensor" | "neutral";
export type MetricCardLayout = "web" | "mobile";
export type MetricCardIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type MetricCardMetric = {
  /** Stable identifier for list rendering. */
  id: string;
  label: string;
  value: ReactNode;
  icon: MetricCardIcon;
  trailing?: ReactNode;
  valueTone?: "error";
};

const TONE_CLASS: Record<MetricCardTone, string> = {
  brand: "bg-metric-tile-brand text-brand",
  sensor: "bg-metric-tile-sensor text-metric-icon-sensor",
  neutral: "bg-metric-tile-neutral text-metric-icon-neutral",
};

export function MetricCard({
  metric,
  tone,
  layout,
  fluid = false,
}: {
  metric: MetricCardMetric;
  tone: MetricCardTone;
  layout: MetricCardLayout;
  /** 仅 mobile：宽度跟随父级网格列，而非固定 100px（Figma 稿为 375 宽下的 100px 实测值）。 */
  fluid?: boolean;
}) {
  const MetricIcon = metric.icon;
  const valueClass = metric.valueTone === "error" ? "text-error" : "text-primary-text";
  const iconWell = (sizeClass: string) => (
    <span aria-hidden="true" className={`flex ${sizeClass} shrink-0 items-center justify-center rounded-xl ${TONE_CLASS[tone]}`}>
      <MetricIcon className="size-5" />
    </span>
  );

  if (layout === "mobile") {
    return (
      <div className={`flex h-[106px] ${fluid ? "min-w-0" : "w-[100px] shrink-0"} flex-col items-center justify-between rounded-md bg-secondarycontainer p-1`}>
        <span className="w-full truncate text-center text-foot12 text-secondary-text" title={metric.label}>
          {metric.label}
        </span>
        {iconWell("size-10")}
        <span className={`flex items-end gap-0.5 whitespace-nowrap text-body font-semibold ${valueClass}`}>
          {metric.value}
          {metric.trailing}
        </span>
      </div>
    );
  }

  return (
    <div className="flex min-w-0 items-center justify-between gap-2 rounded-md bg-secondarycontainer px-4 py-2.5">
      <div className="flex min-w-0 flex-col gap-0.5">
        <dt className="truncate text-foot12 text-secondary-text">{metric.label}</dt>
        <dd className={`m-0 flex items-end gap-0.5 text-body font-semibold ${valueClass}`}>
          <span className="whitespace-nowrap">{metric.value}</span>
          {metric.trailing}
        </dd>
      </div>
      {iconWell("size-9")}
    </div>
  );
}
