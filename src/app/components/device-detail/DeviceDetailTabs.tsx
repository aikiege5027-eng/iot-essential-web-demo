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
