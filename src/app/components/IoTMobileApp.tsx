import { useState, useEffect } from "react";
import { MobileLiveDataContent } from "./MobileLiveDataContent";
import { MobileDeviceArchiveContent } from "./MobileDeviceArchiveContent";
import { MobileDeviceEventsContent } from "./MobileDeviceEventsContent";

// All SVG paths inlined from Figma imports (IoTMobile & IoTMobile-1)
const paths = {
  // KONE logo – white fill blocks
  logoWhite1: "M37.1452 0H53.3966V28H37.1452V0Z",
  logoWhite2: "M18.573 0H34.8244V28H18.573V0Z",
  // KONE logo – blue letter fills
  logoK:  "M0 28H16.2514V0H0V28ZM10.1752 19.9922L6.08824 14.3141V19.9922H2.90927V8.00842H6.08884V13.2366L10.0244 8.00842H13.7687L9.42286 13.6495L14.0667 19.9922H10.1752Z",
  logoN:  "M37.1452 28V0H53.3966V28H37.1452ZM47.9214 19.9916H50.5724V8.0084H47.6221V14.5184L42.7466 8.0084H39.9694V19.9916H42.9101V12.977L47.9214 19.9916Z",
  logoO:  "M26.6975 10.5685C25.0033 10.5685 23.6941 11.9686 23.6941 13.9976C23.6941 16.0265 25.0027 17.4266 26.6975 17.4266C28.3923 17.4266 29.7003 16.0314 29.7003 13.9976C29.7003 11.9638 28.3868 10.5685 26.6975 10.5685Z",
  logoOFill: "M18.573 28V0H34.8244V28H18.573ZM20.5157 13.9976C20.5157 17.7074 23.2718 20.2554 26.6981 20.2554C30.1256 20.2554 32.8817 17.708 32.8817 13.9976C32.8817 10.2872 30.1244 7.74463 26.6981 7.74463C23.2718 7.74463 20.5157 10.2878 20.5157 13.9976Z",
  logoE:  "M55.7486 0V28H72V0H55.7486ZM68.3848 10.6492H62.5053V12.6751H67.4213L67.4201 15.2406H62.5059V17.2726H68.3854V19.9928H59.365V8.00719H68.3854L68.3848 10.6492Z",
  // User icon
  user: "M6.46875 1.125C5.13745 1.125 4.07812 2.17921 4.07812 3.45536C4.07812 4.7315 5.13745 5.78571 6.46875 5.78571C7.80005 5.78571 8.85938 4.7315 8.85938 3.45536C8.85938 2.17921 7.80005 1.125 6.46875 1.125ZM2.95312 3.45536C2.95312 1.53614 4.53811 0 6.46875 0C8.39939 0 9.98438 1.53614 9.98438 3.45536C9.98438 5.37458 8.39939 6.91071 6.46875 6.91071C4.53811 6.91071 2.95312 5.37458 2.95312 3.45536ZM3.51562 9.57122C2.18433 9.57122 1.125 10.6254 1.125 11.9016V13.3882H11.8125V11.9016C11.8125 10.6254 10.7532 9.57122 9.42188 9.57122H3.51562ZM0 11.9016C0 9.98236 1.58499 8.44622 3.51562 8.44622H9.42188C11.3525 8.44622 12.9375 9.98236 12.9375 11.9016V13.9507C12.9375 14.2613 12.6857 14.5132 12.375 14.5132H0.5625C0.25184 14.5132 0 14.2613 0 13.9507V11.9016Z",
  // Hamburger / list icon
  hamburger: "M11.25 1.125H0V0H11.25V1.125ZM11.25 5.0625H0V3.9375H11.25V5.0625ZM0 9H11.25V7.875H0V9Z",
  // Close X icon
  close: "M4.5 5.23089L8.26911 9L9 8.26911L5.23089 4.5L9 0.730893L8.26911 0L4.5 3.76911L0.730893 0L0 0.730893L3.76911 4.5L0 8.26911L0.730893 9L4.5 5.23089Z",
  // Server icon (设备注册) – 4 parts
  server1: "M6.87469 4.0625H3.12469V2.8125H6.87469V4.0625Z",
  server2: "M2.34994e-08 0.62517C-9.36299e-05 0.279926 0.279756 0 0.625 0H15.625C15.9701 0 16.2499 0.279719 16.25 0.62483L16.2512 6.24985C16.2513 6.5951 15.9714 6.87502 15.6262 6.87502H0.626187C0.281075 6.87502 0.00128046 6.5953 0.00118684 6.25019L2.34994e-08 0.62517ZM1.25102 5.62502H15.001L15.0002 1.25H1.25017L1.25102 5.62502Z",
  server3: "M3.12483 12.1875H6.87483V10.9375H3.12483V12.1875Z",
  server4: "M0.00135634 8.75002C0.00135634 8.40484 0.281178 8.12502 0.626356 8.12502H15.6264C15.9715 8.12502 16.2514 8.40484 16.2514 8.75002V14.375C16.2514 14.7202 15.9715 15 15.6264 15H0.626357C0.281179 15 0.00135634 14.7202 0.00135634 14.375V8.75002ZM1.25136 13.75H15.0014V9.37502H1.25136V13.75Z",
  // Elevator icon (设备查询)
  elevator: "M1.25 1.25H13.75V13.75H1.25L1.25 1.25ZM0 1.25C0 0.559644 0.559644 0 1.25 0H13.75C14.4404 0 15 0.559644 15 1.25V13.75C15 14.4404 14.4404 15 13.75 15H1.25C0.559644 15 0 14.4404 0 13.75V1.25ZM6.39284 4.24113C6.63012 4.33605 6.78572 4.56586 6.78572 4.82143V10.8036H5.53572V6.38393L4.39656 7.58005L3.49138 6.71798L5.70813 4.39039C5.88438 4.20533 6.15555 4.14622 6.39284 4.24113ZM8.60717 10.7588C8.36988 10.6639 8.21429 10.4341 8.21429 10.1786V4.19641H9.46429V8.61605L10.6035 7.41993L11.5086 8.282L9.29188 10.6096C9.11562 10.7947 8.84446 10.8538 8.60717 10.7588Z",
};

type PageKey = "registration" | "search";
type Lang = "cn" | "en";
type DetailTab = "liveData" | "archive" | "events";

const DETAIL_TABS: { key: DetailTab; cn: string; en: string }[] = [
  { key: "liveData", cn: "实时数据", en: "Live Data" },
  { key: "archive",  cn: "设备档案", en: "Device Archive" },
  { key: "events",   cn: "设备事件", en: "Events" },
];

const NAV_LABELS: Record<PageKey, Record<Lang, string>> = {
  registration: { cn: "设备注册", en: "Provisioning" },
  search:       { cn: "设备查询", en: "Equipment Search" },
};

function KoneLogo() {
  return (
    <div className="h-[28px] relative shrink-0 w-[72px]">
      {/* White fill layer */}
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 28">
        <path d="M0 28H16.2514V0H0V28Z" fill="white" />
        <path d={paths.logoWhite1} fill="white" />
        <path d={paths.logoWhite2} fill="white" />
        <path d="M55.7486 28H72V0H55.7486V28Z" fill="white" />
      </svg>
      {/* Blue fill layer */}
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 28">
        <path d={paths.logoK}      fill="#1450F5" />
        <path d={paths.logoN}      fill="#1450F5" />
        <path d={paths.logoO}      fill="#1450F5" />
        <path d={paths.logoOFill}  fill="#1450F5" />
        <path d={paths.logoE}      fill="#1450F5" />
      </svg>
    </div>
  );
}

function ServerIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[12.5%_9.37%_12.5%_9.38%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2514 15">
          <path d={paths.server1} fill="#141414" />
          <path d={paths.server2} fill="#141414" />
          <path d={paths.server3} fill="#141414" />
          <path d={paths.server4} fill="#141414" />
        </svg>
      </div>
    </div>
  );
}

function ElevatorIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[12.5%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <path clipRule="evenodd" d={paths.elevator} fill="#141414" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

const NAV_ITEMS: { key: PageKey; Icon: () => JSX.Element }[] = [
  { key: "registration", Icon: ServerIcon },
  { key: "search",       Icon: ElevatorIcon },
];

export default function IoTMobileApp({
  activeTabOverride,
  onCoreTabChange,
  languageOverride,
  onLanguageChange,
}: {
  activeTabOverride?: DetailTab;
  onCoreTabChange?: (tab: DetailTab) => void;
  languageOverride?: Lang;
  onLanguageChange?: (lang: Lang) => void;
} = {}) {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activePage, setActivePage]   = useState<PageKey>("search");
  const [language, setLanguage]       = useState<Lang>(languageOverride ?? "cn");
  const [activeDetailTab, setDetailTab] = useState<DetailTab>(activeTabOverride ?? "liveData");

  // Sync when parent changes the active tab
  useEffect(() => {
    if (activeTabOverride) setDetailTab(activeTabOverride);
  }, [activeTabOverride]);

  // Sync when parent changes language
  useEffect(() => {
    if (languageOverride) setLanguage(languageOverride);
  }, [languageOverride]);

  const handleDetailTabChange = (tab: DetailTab) => {
    setDetailTab(tab);
    onCoreTabChange?.(tab);
  };

  const handleLanguageChange = (lang: Lang) => {
    setLanguage(lang);
    onLanguageChange?.(lang);
  };

  const handleNavClick = (key: PageKey) => {
    setActivePage(key);
    setMenuOpen(false);
  };

  return (
    <div className="relative bg-[#f5f7fa] min-h-screen w-full">

      {/* ── Navigation bar ─────────────────────────────────────────── */}
      <div
        className="sticky top-0 z-30 bg-white flex items-center justify-between px-[16px] py-[12px]"
        style={{ borderBottom: "1px solid #d7d8db" }}
      >
        {/* Branding */}
        <div className="flex gap-[14px] items-center shrink-0">
          <KoneLogo />
          <p className="font-['Inter:600',sans-serif] text-[#141414] text-[16px] leading-[24px] whitespace-nowrap">
            IoT Essential
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-[8px] items-center">
          {/* User icon */}
          <div className="bg-[#f3f6fe] flex items-center justify-center rounded-full size-[32px]">
            <div className="relative size-[18px]">
              <div className="absolute inset-[10%_14.06%_9.38%_14.06%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9375 14.5132">
                  <path clipRule="evenodd" d={paths.user} fill="#1450F5" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Hamburger / Close toggle */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="bg-[#f3f6fe] flex items-center justify-center rounded-full size-[32px] border-0 cursor-pointer transition-colors hover:bg-[#e8eefe]"
            aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
          >
            {menuOpen ? (
              <div className="relative size-[18px]">
                <div className="absolute inset-1/4">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                    <path clipRule="evenodd" d={paths.close} fill="#1450F5" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="relative size-[18px]">
                <div className="absolute bottom-1/4 left-[18.75%] right-[18.75%] top-1/4">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 9">
                    <path clipRule="evenodd" d={paths.hamburger} fill="#1450F5" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* ── Slide-down navigation drawer ───────────────────────────── */}
      <div
        className="absolute left-0 right-0 z-20 bg-white overflow-hidden transition-all duration-200"
        style={{
          top: 52,
          maxHeight: menuOpen ? 400 : 0,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          borderBottom: menuOpen ? "1px solid #f0f2f5" : "none",
        }}
      >
        <div className="flex flex-col">
          {/* Language toggle */}
          <div className="px-[16px] pt-[20px] pb-[8px]">
            <div
              className="flex gap-[4px] p-[2px] rounded-[4px]"
              style={{ backgroundColor: "#dfe1e8" }}
            >
              {(["cn", "en"] as Lang[]).map((lang) => {
                const isActive = language === lang;
                return (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className="flex-1 rounded-[2px] px-[16px] py-[3px] border-0 cursor-pointer transition-colors"
                    style={{
                      backgroundColor: isActive ? "white" : "#dfe1e8",
                      color: isActive ? "#141414" : "#676a72",
                    }}
                  >
                    <span className="font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px] whitespace-nowrap">
                      {lang === "cn" ? "中文" : "English"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Nav items */}
          {NAV_ITEMS.map(({ key, Icon }) => {
            const isActive = activePage === key;
            return (
              <button
                key={key}
                onClick={() => handleNavClick(key)}
                className={`flex items-center gap-[12px] w-full px-[20px] py-[12px] border-0 cursor-pointer text-left transition-colors ${
                  isActive ? "bg-[#f3f6fe]" : "bg-white hover:bg-[#f8f9fc]"
                }`}
              >
                <Icon />
                <span className="font-['PingFang_SC:Medium',sans-serif] text-[#141414] text-[16px] leading-[24px]">
                  {NAV_LABELS[key][language]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Overlay to close drawer on outside tap */}
      {menuOpen && (
        <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
      )}

      {/* Page content area */}
      {activePage === "search" ? (
        <div className="flex flex-col">

          {/* ── 设备详情 sub-header ──────────────────────────────────────── */}
          <div
            className="bg-white flex items-center justify-between px-[16px] py-[10px]"
            style={{ borderBottom: "1px solid #dfe1e8" }}
          >
            <div className="flex items-center gap-[8px]">
              {/* Back chevron */}
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M7 1L1 7L7 13" stroke="#1450F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-['PingFang_SC:Medium',sans-serif] text-[16px] leading-[24px] text-[#141414]">
                {language === "cn" ? "设备详情" : "Device Details"}
              </span>
            </div>
            <button
              className="border-0 bg-transparent cursor-pointer flex items-center gap-[4px]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.5C4.0147 1.5 1.5 4.0147 1.5 7C1.5 9.9853 4.0147 12.5 7 12.5C9.9853 12.5 12.5 9.9853 12.5 7" stroke="#1450F5" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M10 1L12.5 3.5L10 6" stroke="#1450F5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px] text-[#1450f5]">
                {language === "cn" ? "刷新" : "Refresh"}
              </span>
            </button>
          </div>

          {/* ── Device card ─────────────────────────────────────────────── */}
          <div className="bg-white mx-[16px] mt-[16px] rounded-[8px] p-[16px] flex flex-col gap-[12px]" style={{ border: "1px solid #dfe1e8" }}>
            {/* Title row */}
            <div className="flex items-center gap-[12px]">
              {/* Elevator icon */}
              <div className="relative shrink-0 size-[28px]">
                <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 28 28">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.5 3.5H24.5V24.5H3.5L3.5 3.5ZM2.33337 3.5C2.33337 2.8373 2.8373 2.33337 3.5 2.33337H24.5C25.1627 2.33337 25.6667 2.8373 25.6667 3.5V24.5C25.6667 25.1627 25.1627 25.6667 24.5 25.6667H3.5C2.8373 25.6667 2.33337 25.1627 2.33337 24.5V3.5ZM11.3996 7.49197C11.8096 7.65599 12.0714 8.05697 12.0714 8.49463V18.3064H9.94804V10.8149L8.02985 12.8001L6.44958 11.3317L10.2142 7.35233C10.52 7.03265 10.9893 6.92854 11.3996 7.49197ZM16.6004 18.2281C16.1904 18.0641 15.9286 17.6631 15.9286 17.2254V7.41368H18.052V14.9052L19.9702 12.9199L21.5505 14.3883L17.7859 18.3677C17.4801 18.6874 17.0108 18.7915 16.6004 18.2281Z" fill="#141414"/>
                </svg>
              </div>
              <span className="font-['PingFang_SC:Medium',sans-serif] text-[18px] leading-[26px] text-[#141414]">DT1</span>
              <div className="bg-[#fafbfc] flex items-center px-[6px] py-[2px] rounded-[6px]" style={{ border: "1px solid #dfe1e8" }}>
                <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414]">#45509091</span>
              </div>
            </div>

            {/* Signal badges */}
            <div className="flex flex-wrap gap-[4px]">
              {/* 24/7 badge */}
              <div className="bg-[#f3f6fe] flex gap-[4px] items-center px-[8px] py-[2px] rounded-[3px]" style={{ border: "1px solid #1450f5" }}>
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                  <path d="M5 0.5C3.067 0.5 1.5 2.067 1.5 4C1.5 5.933 3.067 7.5 5 7.5C6.933 7.5 8.5 5.933 8.5 4C8.5 2.067 6.933 0.5 5 0.5ZM0.5 10C0.5 8.619 1.619 7.5 3 7.5H7C8.381 7.5 9.5 8.619 9.5 10V11.5H0.5V10Z" fill="#1450F5"/>
                </svg>
                <span className="font-['PingFang_SC:Medium',sans-serif] text-[12px] leading-[20px] text-[#1450f5]">24/7</span>
              </div>
              {/* 云管家在线 badge */}
              <div className="bg-[#f7fffa] flex gap-[4px] items-center px-[8px] py-[2px] rounded-[4px]" style={{ border: "1px solid #1ed273" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3.5 10.5C2.119 10.5 1 9.381 1 8C1 6.619 2.119 5.5 3.5 5.5C3.5 3.567 5.067 2 7 2C8.933 2 10.5 3.567 10.5 5.5C11.881 5.5 13 6.619 13 8C13 9.381 11.881 10.5 10.5 10.5H3.5Z" fill="#1ED273"/>
                </svg>
                <span className="font-['PingFang_SC:Medium',sans-serif] text-[12px] leading-[20px] text-[#1ed273]">云管家在线</span>
              </div>
              {/* Signal strength badge */}
              <div className="bg-[#f5f7fa] flex gap-[8px] items-center px-[8px] py-[2px] rounded-[4px]" style={{ border: "1px solid #dfe1e8" }}>
                {/* China Mobile icon */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="white"/>
                  <circle cx="8" cy="8" r="7" fill="#0085D0"/>
                  <text x="8" y="11" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif">M</text>
                </svg>
                <span className="font-['PingFang_SC:Medium',sans-serif] text-[12px] leading-[20px] text-[#141414]">-65dBm <span className="font-['PingFang_SC:Regular',sans-serif]">(信号中等)</span></span>
              </div>
            </div>

            {/* Info rows */}
            <div className="flex flex-col gap-[10px]">
              {[
                { label: language === "cn" ? "所属项目" : "Project", value: language === "cn" ? "中国国家博物馆" : "China National Museum" },
                { label: language === "cn" ? "项目地址" : "Address", value: language === "cn" ? "北京市东城区东长安街16号" : "16 East Chang'an Ave, Beijing" },
                { label: language === "cn" ? "保养合同" : "Maintenance", value: language === "cn" ? "有效 (KONE Care Plus)" : "Active (KONE Care Plus)" },
                { label: language === "cn" ? "云管家协议" : "Cloud Protocol", value: language === "cn" ? "有效" : "Active" },
              ].map((row, i) => (
                <div key={i} className="flex gap-[12px] items-start">
                  <span className="font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px] text-[#676a72] shrink-0 whitespace-nowrap">{row.label}</span>
                  <span className="font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px] text-[#141414] flex-1 min-w-0 text-right">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Detail tab bar ───────────────────────────────────────────── */}
          <div
            className="bg-white mx-[16px] mt-[12px] rounded-[6px] flex"
            style={{ border: "1px solid #dfe1e8" }}
          >
            {DETAIL_TABS.map((tab) => {
              const isActive = activeDetailTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => handleDetailTabChange(tab.key)}
                  className="flex-1 flex items-center justify-center gap-[6px] px-[8px] py-[10px] border-0 cursor-pointer bg-transparent relative"
                >
                  {isActive && (
                    <span className="absolute bottom-0 left-[16px] right-[16px] h-[2px] bg-[#1450f5] rounded-t-[2px]" />
                  )}
                  <span className={`font-['PingFang_SC:${isActive ? "Medium" : "Regular"}',sans-serif] text-[14px] leading-[22px] ${isActive ? "text-[#1450f5]" : "text-[#676a72]"} whitespace-nowrap`}>
                    {language === "cn" ? tab.cn : tab.en}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Detail tab content ───────────────────────────────────────── */}
          <div className="px-[16px] pt-[12px] pb-[24px]">
            {activeDetailTab === "liveData" && <MobileLiveDataContent language={language} />}
            {activeDetailTab === "archive" && <MobileDeviceArchiveContent language={language} />}
            {activeDetailTab === "events" && <MobileDeviceEventsContent language={language} />}
          </div>

        </div>
      ) : (
        <div className="flex flex-col items-center justify-center px-[16px] py-[48px] text-center">
          <span className="font-['PingFang_SC:Regular',sans-serif] text-[#8f9195] text-[14px] leading-[22px]">
            {NAV_LABELS[activePage][language]}
          </span>
        </div>
      )}
    </div>
  );
}
