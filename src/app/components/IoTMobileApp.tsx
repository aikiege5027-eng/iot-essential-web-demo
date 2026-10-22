import { useEffect, useState } from "react";
import type { AppEdition } from "../data/accounts";
import type { QueryDevice } from "../data/deviceQuery";
import { MobileLiveDataContent } from "./MobileLiveDataContent";
import { MobileDeviceArchiveContent } from "./MobileDeviceArchiveContent";
import { MobileDeviceEventsContent } from "./MobileDeviceEventsContent";
import { MobileElevatorIcon, MobileServerIcon } from "./icons/mobile-icons";
import { MobileDeviceQuery } from "./mobile/MobileDeviceQuery";
import { MobileDeviceDetailCard } from "./mobile/MobileDeviceCard";
import { MobilePageTitle, MobileShell, type MobileNavItem } from "./mobile/MobileShell";

/**
 * 移动端应用（< 768px）。框架见 mobile/MobileShell（Figma IOT Delivery 7103:36620）：
 * 顶栏 + 菜单面板 + 页面标题 + 主体。目前只开放「设备注册 / 设备查询」两个一级页面。
 *   · 设备查询：首页为搜索 + 最近查看（mobile/MobileDeviceQuery），点设备卡片进入设备详情（二级页，标题带返回）
 *   · 设备详情：沿用原有移动端详情内容（实时数据 / 设备档案 / 设备事件），详情样式待后续设计更新
 */

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

const navItems = (language: Lang): MobileNavItem<PageKey>[] => [
  { key: "registration", label: NAV_LABELS.registration[language], icon: <MobileServerIcon className="size-5" /> },
  { key: "search", label: NAV_LABELS.search[language], icon: <MobileElevatorIcon className="size-5" /> },
];

export default function IoTMobileApp({
  activeTabOverride,
  onCoreTabChange,
  languageOverride,
  onLanguageChange,
  edition,
  email,
}: {
  activeTabOverride?: DetailTab;
  onCoreTabChange?: (tab: DetailTab) => void;
  languageOverride?: Lang;
  onLanguageChange?: (lang: Lang) => void;
  edition: AppEdition;
  email: string;
}) {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activePage, setActivePage]   = useState<PageKey>("search");
  const [language, setLanguage]       = useState<Lang>(languageOverride ?? "cn");
  const [activeDetailTab, setDetailTab] = useState<DetailTab>(activeTabOverride ?? "liveData");
  const [selectedDevice, setSelectedDevice] = useState<QueryDevice | null>(null);

  // Sync when parent changes the active tab
  useEffect(() => {
    if (activeTabOverride) setDetailTab(activeTabOverride);
  }, [activeTabOverride]);

  // Sync when parent changes language
  useEffect(() => {
    if (languageOverride) setLanguage(languageOverride);
  }, [languageOverride]);

  // 进入设备详情 / 返回查询时回到页面顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedDevice, activePage]);

  const handleDetailTabChange = (tab: DetailTab) => {
    setDetailTab(tab);
    onCoreTabChange?.(tab);
  };

  const handleLanguageChange = (lang: Lang) => {
    setLanguage(lang);
    onLanguageChange?.(lang);
  };

  const handleNavSelect = (key: PageKey) => {
    setActivePage(key);
    setSelectedDevice(null);
  };

  const device = selectedDevice;
  return (
    <MobileShell
      language={language}
      onLanguageChange={handleLanguageChange}
      navItems={navItems(language)}
      activeKey={activePage}
      onNavSelect={handleNavSelect}
      menuOpen={menuOpen}
      onMenuOpenChange={setMenuOpen}
      // 点 Logo 回首页：设备查询首页
      onLogoClick={() => handleNavSelect("search")}
    >
      {activePage === "search" ? (
        <>
          {/* 设备查询首页：打开详情时隐藏但保持挂载，返回后搜索条件与结果仍在；按平台 + 账号重挂载 */}
          <div hidden={device !== null} className={device === null ? "flex flex-1 flex-col" : undefined}>
            <MobileDeviceQuery
              key={`${edition}:${email}`}
              language={language}
              edition={edition}
              email={email}
              onOpenDevice={setSelectedDevice}
            />
          </div>
          {device && (
        <div className="flex flex-col">
          <MobilePageTitle
            title={language === "cn" ? "设备详情" : "Device Details"}
            language={language}
            onBack={() => setSelectedDevice(null)}
            extra={
              <button type="button" className="flex shrink-0 cursor-pointer items-center gap-1 border-0 bg-transparent p-0 font-normal text-link">
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1.5C4.0147 1.5 1.5 4.0147 1.5 7C1.5 9.9853 4.0147 12.5 7 12.5C9.9853 12.5 12.5 9.9853 12.5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M10 1L12.5 3.5L10 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-body">{language === "cn" ? "刷新" : "Refresh"}</span>
              </button>
            }
          />

          {/* ── Device card（老版本移动端详情顶部设备卡） ── */}
          <div className="mx-4 mt-4">
            <MobileDeviceDetailCard device={device} language={language} />
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
          )}
        </>
      ) : (
        <div className="flex flex-1 flex-col">
          <MobilePageTitle title={NAV_LABELS[activePage][language]} language={language} />
          <div className="flex flex-1 items-center justify-center px-4 py-12 text-center text-body text-placeholder">
            {NAV_LABELS[activePage][language]}
          </div>
        </div>
      )}
    </MobileShell>
  );
}
