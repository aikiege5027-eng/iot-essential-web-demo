import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Tooltip } from "tdesign-react";
import type { OverviewDevice } from "../../data/deviceOverview";
import { InfoCircleIcon } from "../icons/info-circle";
import { StatusLabel, type StatusTone } from "../StatusLabel";
import type { DeviceCopy } from "./copy";

/**
 * 字段说明气泡：hover 或键盘聚焦 info 图标时显示（Figma 4497:15985「字段解释说明，hover 展示」）。
 * TDesign Tooltip light 主题、带箭头、在图标上方；触发器自带可读名称，键盘可达。
 */
export function InfoTip({ label, content }: { label: string; content: string }) {
  const [visible, setVisible] = useState(false);
  return (
    <Tooltip
      content={<span className="block max-w-[280px] text-body">{content}</span>}
      placement="top"
      showArrow
      theme="light"
      trigger="hover"
      delay={[100, 100]}
      visible={visible}
      onVisibleChange={setVisible}
    >
      <span
        role="img"
        tabIndex={0}
        aria-label={`${label}：${content}`}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        className="inline-flex size-4 shrink-0 cursor-default rounded-full text-icon-inactive outline-none focus-visible:ring-2 focus-visible:ring-brand-focus"
      >
        <InfoCircleIcon className="size-4" />
      </span>
    </Tooltip>
  );
}

/**
 * 给无可见标签的 TDesign Select / Input 补可访问名称。
 *
 * 设计稿里这些控件只有占位符；TDesign 不把 id / aria-* 透传到内部原生 input
 * （多余属性只落在外层 div 上），所以挂载后直接给内部 input 写 aria-label。
 */
export function LabelledControl({ label, className, children }: { label: string; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.querySelectorAll("input").forEach((input) => input.setAttribute("aria-label", label));
  });
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/** 千分位，与设计稿 273,393 的写法一致。 */
export const formatCount = (value: number) => value.toLocaleString("en-US");
export const formatPercent = (value: number) => `${(value * 100).toFixed(1)}%`;

const STATUS_TONE: Record<OverviewDevice["status"], StatusTone> = {
  online: "success",
  disconnected: "warning",
  offline: "error",
  unregistered: "neutral",
};

/** 云管家状态：在线绿 / 断连橙 / 离线红 / 未注册灰（Figma 4497:14405 展开行）。 */
export function DeviceStatus({ device, t, className }: { device: OverviewDevice; t: DeviceCopy; className?: string }) {
  return (
    <StatusLabel tone={STATUS_TONE[device.status]} className={className}>
      {t.options[device.status]}
    </StatusLabel>
  );
}

export const yesNo = (value: boolean | null, t: DeviceCopy) => (value === null ? "-" : value ? t.yes : t.no);
export const deviceKindLabel = (device: OverviewDevice, t: DeviceCopy) => (device.kind === "elevator" ? t.options.elevator : t.options.escalator);
