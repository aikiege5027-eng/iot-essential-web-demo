import type { ComponentType, KeyboardEvent, SVGProps } from "react";
import { Tabs } from "tdesign-react";
import {
  EventsTabIcon,
  LiveDataTabIcon,
  MasterDataTabIcon,
  OperationTabIcon,
  StatisticsTabIcon,
} from "../icons/device-detail-icons";
import { detailCopy, type DetailTab, type Language } from "./copy";

/**
 * 设备详情页签（Figma IOT Delivery 5813:34058，normalTabs medium）。
 *
 * TDesign Tabs（theme="normal"）：图标 + 文字放在 label 里，选中项品牌色 + 底部指示线。
 * 页签高度、指示线粗细与配色在 tdesign-patches.css 的 .device-detail-tabs 下按设计稿收口。
 */
const TABS: { value: DetailTab; Icon: typeof LiveDataTabIcon }[] = [
  { value: "liveData", Icon: LiveDataTabIcon },
  { value: "masterData", Icon: MasterDataTabIcon },
  { value: "statistics", Icon: StatisticsTabIcon },
  { value: "events", Icon: EventsTabIcon },
  { value: "operationRecords", Icon: OperationTabIcon },
];

export function DeviceDetailTabs({ language, value, onChange }: { language: Language; value: DetailTab; onChange: (tab: DetailTab) => void }) {
  const t = detailCopy[language];
  return (
    <Tabs
      className="device-detail-tabs"
      theme="normal"
      size="medium"
      value={value}
      onChange={(next) => onChange(next as DetailTab)}
      list={TABS.map(({ value: tab, Icon }) => ({
        value: tab,
        label: (
          <span className="inline-flex items-center gap-2">
            <Icon className="size-4" />
            {t.tabs[tab]}
          </span>
        ),
      }))}
    />
  );
}

/**
 * 设备详情移动端页签。它仍然直接采用 TDesign Tabs 的滚动与 Operation bar，
 * 避免手写页签状态与 Web 端的基础交互分叉。
 */
type DetailTabIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type MobileDeviceDetailTab<T extends string> = {
  key: T;
  label: string;
  Icon: DetailTabIcon;
};

export function MobileDeviceDetailTabs<T extends string>({
  tabs,
  value,
  onChange,
  equalWidth = false,
  ariaLabel,
}: {
  tabs: readonly MobileDeviceDetailTab<T>[];
  value: T;
  onChange: (tab: T) => void;
  equalWidth?: boolean;
  ariaLabel: string;
}) {
  const usesEqualWidthLayout = equalWidth || tabs.length === 3;
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    const currentIndex = tabs.findIndex((tab) => tab.key === value);
    if (currentIndex < 0) return;

    const nextIndex = event.key === "ArrowRight"
      ? (currentIndex + 1) % tabs.length
      : event.key === "ArrowLeft"
        ? (currentIndex - 1 + tabs.length) % tabs.length
        : event.key === "Home"
          ? 0
          : tabs.length - 1;

    if (nextIndex !== currentIndex) onChange(tabs[nextIndex].key);
  };
  return (
    <div aria-label={ariaLabel} role="tablist" tabIndex={0} onKeyDown={handleKeyDown}>
      <Tabs
        className={`device-detail-tabs device-detail-tabs-mobile ${usesEqualWidthLayout ? "device-detail-tabs-mobile--equal-width" : ""}`}
        theme="normal"
        size="medium"
        value={value}
        scrollPosition="auto"
        onChange={(next) => onChange(next as T)}
        list={tabs.map(({ key, label, Icon }) => ({
          value: key,
          label: (
            <span className="inline-flex items-center gap-1.5">
              <Icon className="size-4" />
              {label}
            </span>
          ),
        }))}
      />
    </div>
  );
}
