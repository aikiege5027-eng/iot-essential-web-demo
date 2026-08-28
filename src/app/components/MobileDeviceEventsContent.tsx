import { useState } from "react";

// ── Icons ─────────────────────────────────────────────────────────────────────

function AlarmIcon() {
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

function UserMaintenanceIcon() {
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
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 5h14M5.5 10h9M8 15h4" stroke="#141414" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
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
    icon: <AlarmIcon />,
    items: [
      { label: "10096", count: 18 },
      { label: "00834", count: 12 },
      { label: "48394", count: 6 },
    ],
  },
  {
    key: "mode",
    label: "模式变化",
    icon: <CheckRectIcon />,
    items: [
      { label: "检修模式→普通模式", count: 29 },
      { label: "普通模式→检修模式", count: 23 },
      { label: "检修模式→普通模式", count: 12 },
    ],
  },
  {
    key: "customer",
    label: "客户通知",
    icon: <UsergroupIcon />,
    items: [
      { label: "CN000007", count: 27 },
      { label: "CN000002", count: 12 },
      { label: "CN000003", count: 3 },
    ],
  },
  {
    key: "service",
    label: "服务需求",
    icon: <UserMaintenanceIcon />,
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
    icon: <AlarmIcon />,
    items: [
      { label: "10096", count: 18 },
      { label: "00834", count: 12 },
      { label: "48394", count: 6 },
    ],
  },
  {
    key: "mode",
    label: "Mode Changes",
    icon: <CheckRectIcon />,
    items: [
      { label: "Maintenance→Normal", count: 29 },
      { label: "Normal→Maintenance", count: 23 },
      { label: "Maintenance→Normal", count: 12 },
    ],
  },
  {
    key: "customer",
    label: "Customer Notices",
    icon: <UsergroupIcon />,
    items: [
      { label: "CN000007", count: 27 },
      { label: "CN000002", count: 12 },
      { label: "CN000003", count: 3 },
    ],
  },
  {
    key: "service",
    label: "Service Requests",
    icon: <UserMaintenanceIcon />,
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
            <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414] whitespace-nowrap">
              {category.label}
            </span>
          </div>
          <span className="font-['PingFang_SC:Regular',sans-serif] text-[12px] leading-[20px] text-[#676a72] whitespace-nowrap">
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
                    <span className="font-['PingFang_SC:Medium',sans-serif] text-[12px] leading-[20px] text-white">
                      {i + 1}
                    </span>
                  </div>
                  <span className="font-['PingFang_SC:Regular',sans-serif] text-[12px] leading-[20px] text-[#141414] whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
                <div className="flex items-end gap-0 whitespace-nowrap">
                  <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414]">
                    {item.count}
                  </span>
                  <span className="font-['PingFang_SC:Regular',sans-serif] text-[12px] leading-[20px] text-[#676a72]">
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
          <span className="font-['PingFang_SC:Medium',sans-serif] text-[16px] leading-[24px] text-[#141414] whitespace-nowrap">
            {event.code}
          </span>
          {event.codeExtra && (
            <span className="font-['PingFang_SC:Medium',sans-serif] text-[16px] leading-[24px] text-[#141414] whitespace-nowrap">
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
          <ChevronRightIcon />
        </div>
      </div>

      {/* Bottom rows: description + time */}
      <div className="flex flex-col gap-[4px] w-full">
        {desc && (
          <span className="font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px] text-[#141414] w-full">
            {desc}
          </span>
        )}
        {event.time && (
          <span className="font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px] text-[#141414] w-full">
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
  const stats = language === "cn" ? STATS_CN : STATS_EN;

  return (
    <div className="relative rounded-[8px] w-full overflow-hidden" style={{ border: "1px solid #dfe1e8" }}>
      {/* Section header */}
      <div className="bg-[#fafbfc] relative shrink-0 w-full" style={{ borderBottom: "1px solid #dfe1e8" }}>
        <div className="flex items-center justify-between px-[12px] py-[8px]">
          <div className="flex items-center gap-[8px]">
            <div className="bg-[#4373f7] h-[14px] rounded-[1px] w-[4px] shrink-0" />
            <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414] whitespace-nowrap">
              {language === "cn" ? "设备事件" : "Device Events"}
            </span>
          </div>
          <FilterIcon />
        </div>
      </div>

      {/* Content */}
      <div className="bg-white flex flex-col gap-[16px] p-[12px]">

        {/* 事件统计 */}
        <div className="flex flex-col gap-[8px]">
          {/* Stats header */}
          <div className="flex items-center justify-between w-full h-[22px]">
            <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414] whitespace-nowrap">
              {language === "cn" ? "事件统计" : "Event Statistics"}
            </span>
            <button
              className="flex items-center gap-[2px] bg-transparent border-0 p-0 cursor-pointer"
              onClick={() => setStatsExpanded((v) => !v)}
            >
              <span className="font-['PingFang_SC:Regular',sans-serif] text-[12px] leading-[20px] text-[#676a72] whitespace-nowrap">
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
            <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414] whitespace-nowrap">
              {language === "cn" ? "所有事件" : "All Events"}
            </span>
            <FilterIcon />
          </div>

          <div className="flex flex-col gap-[8px]">
            {EVENTS.map((event, i) => (
              <EventCard key={i} event={event} language={language} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
