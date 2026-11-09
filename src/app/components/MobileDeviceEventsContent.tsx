import { useState } from "react";
import { Button, Drawer, Dropdown, Input } from "tdesign-react";
import { MobileBottomBar } from "./mobile/MobileShell";
import { DetailCardHeader } from "./device-detail/DetailSection";
import { AlarmIcon, CheckRectangleIcon, ChevronRightIcon as DetailChevronRightIcon, TagIcon, UserGroupIcon, UserMaintenanceIcon } from "./icons/device-detail-icons";
import { MobileFilterIcon } from "./icons/mobile-icons";

// ── Icons ─────────────────────────────────────────────────────────────────────

function LegacyAlarmIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2C7.2 2 5 4.2 5 7v5l-1.5 1.5V15h13v-1.5L15 12V7c0-2.8-2.2-5-5-5zm0-1.5c.6 0 1 .4 1 1S10.6 2.5 10 2.5s-1-.4-1-1 .4-1 1-1zM8.5 16.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5H8.5z" fill="#141414" />
    </svg>
  );
}

function CheckRectIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="3" width="14" height="14" rx="2" stroke="#141414" strokeWidth="1.5" fill="none"/>
      <path d="M6.5 10L9 12.5L13.5 8" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function UsergroupIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="8" cy="7" r="2.5" stroke="#141414" strokeWidth="1.4"/>
      <path d="M3 16c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#141414" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="14" cy="7.5" r="2" stroke="#141414" strokeWidth="1.3"/>
      <path d="M17 16c0-2.2-1.3-4-3-4.5" stroke="#141414" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function LegacyUserMaintenanceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="9" cy="6.5" r="2.5" stroke="#141414" strokeWidth="1.4"/>
      <path d="M4 16c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#141414" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M15 9l1.5 1.5-3 3L12 12l3-3z" stroke="#141414" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16.5" cy="8.5" r="1" fill="#141414"/>
    </svg>
  );
}

function FilterIcon() {
  return <MobileFilterIcon className="size-5" />;
}

function ChevronUpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path clipRule="evenodd" fillRule="evenodd" d="M3.5 10L8 5.5 12.5 10H3.5z" fill="#676A72"/>
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path clipRule="evenodd" fillRule="evenodd" d="M3.5 6L8 10.5 12.5 6H3.5z" fill="#676A72"/>
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path clipRule="evenodd" fillRule="evenodd" d="M6 3.5L10.5 8 6 12.5V3.5z" fill="#141414"/>
    </svg>
  );
}

// ── Rank badge colors ─────────────────────────────────────────────────────────

const RANK_COLORS = ["#ff7949", "#ffb145", "#ffd18d"];

// ── Stats data ────────────────────────────────────────────────────────────────

const STATS_CN = [
  {
    key: "fault",
    label: "故障消息",
    icon: <AlarmIcon className="size-5" />,
    items: [
      { label: "10096", count: 18 },
      { label: "00834", count: 12 },
      { label: "48394", count: 6 },
    ],
  },
  {
    key: "mode",
    label: "模式变化",
    icon: <CheckRectangleIcon className="size-5" />,
    items: [
      { label: "检修模式→普通模式", count: 29 },
      { label: "普通模式→检修模式", count: 23 },
      { label: "检修模式→普通模式", count: 12 },
    ],
  },
  {
    key: "customer",
    label: "客户通知",
    icon: <UserGroupIcon className="size-5" />,
    items: [
      { label: "CN000007", count: 27 },
      { label: "CN000002", count: 12 },
      { label: "CN000003", count: 3 },
    ],
  },
  {
    key: "service",
    label: "服务需求",
    icon: <UserMaintenanceIcon className="size-5" />,
    items: [
      { label: "SN000008", count: 24 },
      { label: "SN000004", count: 16 },
      { label: "SN000003", count: 8 },
    ],
  },
];

const STATS_EN = [
  {
    key: "fault",
    label: "Fault Messages",
    icon: <AlarmIcon className="size-5" />,
    items: [
      { label: "10096", count: 18 },
      { label: "00834", count: 12 },
      { label: "48394", count: 6 },
    ],
  },
  {
    key: "mode",
    label: "Mode Changes",
    icon: <CheckRectangleIcon className="size-5" />,
    items: [
      { label: "Maintenance→Normal", count: 29 },
      { label: "Normal→Maintenance", count: 23 },
      { label: "Maintenance→Normal", count: 12 },
    ],
  },
  {
    key: "customer",
    label: "Customer Notices",
    icon: <UserGroupIcon className="size-5" />,
    items: [
      { label: "CN000007", count: 27 },
      { label: "CN000002", count: 12 },
      { label: "CN000003", count: 3 },
    ],
  },
  {
    key: "service",
    label: "Service Requests",
    icon: <UserMaintenanceIcon className="size-5" />,
    items: [
      { label: "SN000008", count: 24 },
      { label: "SN000004", count: 16 },
      { label: "SN000003", count: 8 },
    ],
  },
];

// ── Events data ───────────────────────────────────────────────────────────────

type EventStatus = "active" | "resolved" | null;

interface EventItem {
  code: string;
  codeExtra?: string;
  status: EventStatus;
  descCn: string;
  descEn: string;
  time: string;
}

const EVENTS: EventItem[] = [
  { code: "10096", status: "active", descCn: "厅门触点未打开", descEn: "Landing door contact not opened", time: "2026-03-18 13:18:39" },
  { code: "警铃消息", status: null, descCn: "2026-03-18 13:18:39", descEn: "2026-03-18 13:18:39", time: "" },
  { code: "模式变化", status: null, descCn: "检修模式→普通模式", descEn: "Maintenance→Normal Mode", time: "2026-03-18 13:18:39" },
  { code: "CN000007", status: "resolved", descCn: "电梯停止运行", descEn: "Elevator stopped", time: "2026-03-18 13:18:39" },
  { code: "SN000008", status: "resolved", descCn: "楼层位置丢失", descEn: "Floor position lost", time: "2026-03-18 13:18:39" },
  { code: "走修工单", codeExtra: "00000000", status: null, descCn: "安全隐患", descEn: "Safety hazard", time: "2026-03-18 13:18:39" },
  { code: "维保工单", codeExtra: "00000000", status: null, descCn: "半月保", descEn: "Biweekly maintenance", time: "2026-03-18 13:18:39" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function StatCard({ category, language }: { category: typeof STATS_CN[0]; language: "cn" | "en" }) {
  const max = Math.max(...category.items.map((i) => i.count));
  return (
    <div className="bg-[#fafbfc] relative rounded-[6px] w-full" style={{ border: "1px solid #dfe1e8" }}>
      <div className="flex flex-col gap-[10px] px-[16px] py-[12px]">
        {/* Category header */}
        <div className="flex items-end justify-between w-full">
          <div className="flex gap-[4px] items-center">
            {category.icon}
            <span className="text-body font-medium text-primary-text whitespace-nowrap">
              {category.label}
            </span>
          </div>
          <span className="text-foot12 text-secondary-text whitespace-nowrap">
            Top 3
          </span>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-[12px] pl-[4px]">
          {category.items.map((item, i) => (
            <div key={i} className="flex flex-col gap-[4px] w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-[7px] items-center">
                  <div
                    className="flex items-center justify-center rounded-full shrink-0"
                    style={{ width: 16, height: 16, backgroundColor: RANK_COLORS[i] }}
                  >
                    <span className="text-foot12 font-medium text-white-text">
                      {i + 1}
                    </span>
                  </div>
                  <span className="text-foot12 text-primary-text whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
                <div className="flex items-end gap-0 whitespace-nowrap">
                  <span className="text-body font-medium text-primary-text">
                    {item.count}
                  </span>
                  <span className="text-foot12 text-secondary-text">
                    {language === "cn" ? "次" : ""}
                  </span>
                </div>
              </div>
              {/* Progress bar */}
              <div className="h-[4px] w-full rounded-[100px] overflow-hidden bg-[#dfe1e8]">
                <div
                  className="h-[4px] rounded-[100px]"
                  style={{
                    width: `${Math.round((item.count / max) * 100)}%`,
                    backgroundColor: RANK_COLORS[i],
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EventCard({ event, language }: { event: EventItem; language: "cn" | "en" }) {
  const statusColor = event.status === "active" ? "#f51414" : "#1ed273";
  const statusLabel =
    event.status === "active"
      ? language === "cn" ? "未恢复" : "Active"
      : event.status === "resolved"
      ? language === "cn" ? "已恢复" : "Resolved"
      : null;

  const desc = language === "cn" ? event.descCn : event.descEn;

  return (
    <div className="bg-[#f5f7fa] rounded-[6px] px-[12px] py-[10px] flex flex-col gap-[6px] w-full">
      {/* Top row: code + status + chevron */}
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-[4px] items-center">
          <span className="text-h7 font-medium text-primary-text whitespace-nowrap">
            {event.code}
          </span>
          {event.codeExtra && (
            <span className="text-h7 font-medium text-primary-text whitespace-nowrap">
              {event.codeExtra}
            </span>
          )}
        </div>
        <div className="flex gap-[6px] items-center">
          {statusLabel && (
            <div className="flex gap-[4px] items-center">
              <div
                className="rounded-full shrink-0"
                style={{ width: 6, height: 6, backgroundColor: statusColor }}
              />
              <span
                className="font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px] whitespace-nowrap"
                style={{ color: statusColor }}
              >
                {statusLabel}
              </span>
            </div>
          )}
          <DetailChevronRightIcon aria-hidden="true" className="size-4 text-icon-primary" />
        </div>
      </div>

      {/* Bottom rows: description + time */}
      <div className="flex flex-col gap-[4px] w-full">
        {desc && (
          <span className="text-body text-primary-text">
            {desc}
          </span>
        )}
        {event.time && (
          <span className="text-body text-primary-text">
            {event.time}
          </span>
        )}
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export function MobileDeviceEventsContent({ language }: { language: "cn" | "en" }) {
  const [statsExpanded, setStatsExpanded] = useState(true);
  const [timeDrawerOpen, setTimeDrawerOpen] = useState(false);
  const [timeRange, setTimeRange] = useState<"24h" | "7d" | "30d">("24h");
  const [eventType, setEventType] = useState("all");
  const stats = language === "cn" ? STATS_CN : STATS_EN;
  const timeLabels = language === "cn" ? { title: "时间区间", day: "近24小时", week: "近7天", month: "近30天", custom: "自定义时间", reset: "重置", query: "查询" } : { title: "Time Range", day: "Last 24 Hours", week: "Last 7 Days", month: "Last 30 Days", custom: "Custom Time", reset: "Reset", query: "Apply" };
  const eventOptions = language === "cn" ? [{ content: "全部事件", value: "all" }, { content: "故障消息", value: "fault" }, { content: "模式变化", value: "mode" }, { content: "客户通知", value: "customer" }, { content: "服务需求", value: "service" }] : [{ content: "All Events", value: "all" }, { content: "Fault Messages", value: "fault" }, { content: "Mode Changes", value: "mode" }, { content: "Customer Notices", value: "customer" }, { content: "Service Requests", value: "service" }];
  const visibleEvents = eventType === "all" ? EVENTS : EVENTS.filter((event) => eventType === "fault" ? /^\d/.test(event.code) : eventType === "mode" ? event.code === "模式变化" : eventType === "customer" ? event.code.startsWith("CN") : event.code.startsWith("SN"));

  return (
    <section aria-labelledby="mobile-events-title" className="w-full overflow-hidden rounded-lg border border-stroke bg-container">
      <DetailCardHeader
        title={language === "cn" ? "设备事件" : "Device Events"}
        titleId="mobile-events-title"
        extra={<button type="button" aria-label={timeLabels.title} onClick={() => setTimeDrawerOpen(true)} className="flex size-5 cursor-pointer items-center justify-center rounded-xs border-0 bg-transparent p-0 text-icon-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"><MobileFilterIcon className="size-5" /></button>}
      />

      <div className="flex flex-col gap-4 bg-container p-3">

        {/* 事件统计 */}
        <div className="flex flex-col gap-[8px]">
          {/* Stats header */}
          <div className="flex items-center justify-between w-full h-[22px]">
            <span className="text-body font-medium text-primary-text whitespace-nowrap">
              {language === "cn" ? "事件统计" : "Event Statistics"}
            </span>
            <button
              className="flex items-center gap-[2px] bg-transparent border-0 p-0 cursor-pointer"
              onClick={() => setStatsExpanded((v) => !v)}
            >
              <span className="text-foot12 text-secondary-text whitespace-nowrap">
                {statsExpanded
                  ? language === "cn" ? "收起" : "Collapse"
                  : language === "cn" ? "展开" : "Expand"}
              </span>
              {statsExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
          </div>

          {statsExpanded && (
            <div className="flex flex-col gap-[8px]">
              {stats.map((cat) => (
                <StatCard key={cat.key} category={cat} language={language} />
              ))}
            </div>
          )}
        </div>

        {/* 所有事件 */}
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center justify-between w-full h-[22px]">
            <span className="text-body font-medium text-primary-text whitespace-nowrap">
              {language === "cn" ? "所有事件" : "All Events"}
            </span>
            <Dropdown trigger="click" placement="bottom-right" minColumnWidth={108} options={eventOptions.map((option) => ({ ...option, active: option.value === eventType }))} onClick={(option) => setEventType(String(option.value))}>
              <button type="button" aria-label={language === "cn" ? "筛选事件类型" : "Filter event type"} className="flex size-5 cursor-pointer items-center justify-center rounded-xs border-0 bg-transparent p-0 text-icon-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"><TagIcon aria-hidden="true" className="size-5" /></button>
            </Dropdown>
          </div>

          <div className="flex flex-col gap-[8px]">
            {visibleEvents.map((event, i) => (
              <EventCard key={i} event={event} language={language} />
            ))}
          </div>
        </div>
      </div>
      <Drawer className="km-mobile-sheet" visible={timeDrawerOpen} placement="bottom" size="304px" header={<h2 className="m-0 text-h6 font-semibold text-primary-text">{timeLabels.title}</h2>} onClose={() => setTimeDrawerOpen(false)} footer={<MobileBottomBar><Button className="km-mobile-button--secondary" theme="default" size="large" block onClick={() => setTimeRange("24h")}>{timeLabels.reset}</Button><Button theme="primary" size="large" block onClick={() => setTimeDrawerOpen(false)}>{timeLabels.query}</Button></MobileBottomBar>}>
        <div className="flex flex-col gap-6"><div role="radiogroup" aria-label={timeLabels.title} className="flex gap-1 rounded-sm bg-stroke p-0.5">{([['24h', timeLabels.day], ['7d', timeLabels.week], ['30d', timeLabels.month]] as const).map(([value, label]) => <button key={value} type="button" role="radio" aria-checked={timeRange === value} onClick={() => setTimeRange(value)} className={`flex-1 cursor-pointer rounded-xs border-0 px-3 py-1 text-body ${timeRange === value ? 'bg-container text-primary-text' : 'bg-transparent text-secondary-text'}`}>{label}</button>)}</div><label className="flex flex-col gap-2 text-body text-primary-text">{timeLabels.custom}<Input size="medium" placeholder={language === "cn" ? "开始时间 - 结束时间" : "Start time - End time"} /></label></div>
      </Drawer>
    </section>
  );
}
