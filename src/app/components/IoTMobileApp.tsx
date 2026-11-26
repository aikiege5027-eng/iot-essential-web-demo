import { useEffect, useId, useState } from "react";
import { MessagePlugin } from "tdesign-react";
import { ACCOUNTS, EDITION_DEFAULT_EMAILS, type AppAccount, type AppEdition } from "../data/accounts";
import type { QueryDevice } from "../data/deviceQuery";
import { MobileLiveDataContent } from "./MobileLiveDataContent";
import { MobileDeviceArchiveContent } from "./MobileDeviceArchiveContent";
import { MobileDeviceEventsContent } from "./MobileDeviceEventsContent";
import { EventsTabIcon, LiveDataTabIcon, MasterDataTabIcon } from "./icons/device-detail-icons";
import { MobileDeviceDetailTabs, type MobileDeviceDetailTab } from "./device-detail/DeviceDetailTabs";
import { MobileElevatorIcon, MobileServerIcon } from "./icons/mobile-icons";
import { MobileDeviceQuery } from "./mobile/MobileDeviceQuery";
import { MobileAccountMenu } from "./mobile/MobileAccountMenu";
import { MobileProfilePage } from "./mobile/MobileProfilePage";
import { MobileDeviceRegistration } from "./mobile/MobileDeviceRegistration";
import { MobileDeviceDetailCard } from "./mobile/MobileDeviceCard";
import { MobilePageTitle, MobileShell, type MobileNavItem } from "./mobile/MobileShell";
import qianFanLogo from "../../imports/QianFan_Logo.svg";

/**
 * 移动端应用（< 768px）。框架见 mobile/MobileShell（Figma IOT Delivery 7103:36620）：
 * 顶栏 + 菜单面板 + 页面标题 + 主体。目前只开放「设备注册 / 设备查询」两个一级页面。
 *   · 设备查询：首页为搜索 + 最近查看（mobile/MobileDeviceQuery），点设备卡片进入设备详情（二级页，标题带返回）
 *   · 设备详情：设备摘要卡、带图标的页签，以及实时数据 / 设备档案 / 设备事件三类内容。
 */

type PageKey = "registration" | "search";
type Lang = "cn" | "en";
type DetailTab = "liveData" | "archive" | "events";

type MobileDetailTabConfig = Omit<MobileDeviceDetailTab<DetailTab>, "label"> & {
  cn: string;
  en: string;
};

const DETAIL_TABS: MobileDetailTabConfig[] = [
  { key: "liveData", cn: "实时数据", en: "Live Data", Icon: LiveDataTabIcon },
  { key: "archive", cn: "设备档案", en: "Device Archive", Icon: MasterDataTabIcon },
  { key: "events", cn: "设备事件", en: "Events", Icon: EventsTabIcon },
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
  activePageOverride,
  onActivePageChange,
  detailResetKey,
  selectedDeviceOverride,
  onSelectedDeviceChange,
  syncEnabled = true,
  activeTabOverride,
  onCoreTabChange,
  languageOverride,
  onLanguageChange,
  edition,
  email,
  currentUser,
  onLogout,
  onSwitchAccount,
}: {
  activePageOverride?: PageKey;
  onActivePageChange?: (page: PageKey) => void;
  detailResetKey?: number;
  selectedDeviceOverride?: QueryDevice | null;
  onSelectedDeviceChange?: (device: QueryDevice | null) => void;
  /** 只有当前可见的移动布局可将本地状态回传给 App。 */
  syncEnabled?: boolean;
  activeTabOverride?: DetailTab;
  onCoreTabChange?: (tab: DetailTab) => void;
  languageOverride?: Lang;
  onLanguageChange?: (lang: Lang) => void;
  edition: AppEdition;
  email: string;
  currentUser: AppAccount;
  onLogout: () => void;
  /** Demo 用：通力 / 仟帆快速切换时，以目标平台的默认账号进入。 */
  onSwitchAccount?: (account: AppAccount) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const accountMenuId = useId();
  const accountMenuTriggerId = useId();
  const [profileOpen, setProfileOpen] = useState(false);
  const [activePage, setActivePage]   = useState<PageKey>("search");
  const [language, setLanguage]       = useState<Lang>(languageOverride ?? "cn");
  const [activeDetailTab, setDetailTab] = useState<DetailTab>(activeTabOverride ?? "liveData");
  const [detailRefreshKey, setDetailRefreshKey] = useState(0);
  const [selectedDevice, setSelectedDevice] = useState<QueryDevice | null>(null);

  useEffect(() => {
    if (!activePageOverride || activePageOverride === activePage) return;
    setSelectedDevice(null);
    setActivePage(activePageOverride);
  }, [activePage, activePageOverride]);

  useEffect(() => {
    if (detailResetKey !== undefined) setSelectedDevice(null);
  }, [detailResetKey]);

  useEffect(() => {
    if (selectedDeviceOverride === undefined || selectedDeviceOverride?.id === selectedDevice?.id) return;
    setSelectedDevice(selectedDeviceOverride);
  }, [selectedDevice, selectedDeviceOverride]);

  useEffect(() => {
    if (!syncEnabled || (selectedDeviceOverride !== undefined && selectedDeviceOverride?.id !== selectedDevice?.id)) return;
    onSelectedDeviceChange?.(selectedDevice);
  }, [onSelectedDeviceChange, selectedDevice, selectedDeviceOverride, syncEnabled]);

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
    setAccountMenuOpen(false);
    setProfileOpen(false);
    setActivePage(key);
    onSelectedDeviceChange?.(null);
    setSelectedDevice(null);
    onActivePageChange?.(key);
  };

  const handleCloseDevice = () => {
    onSelectedDeviceChange?.(null);
    setSelectedDevice(null);
  };

  const handleOpenDevice = (device: QueryDevice) => {
    onSelectedDeviceChange?.(device);
    setSelectedDevice(device);
    setDetailRefreshKey((key) => key + 1);
  };

  const refreshDetail = () => {
    setDetailRefreshKey((key) => key + 1);
    MessagePlugin.success(language === "cn" ? "设备数据已刷新" : "Device data refreshed", 3000);
  };

  const device = selectedDevice;
  return (
    <>
      <MobileShell
      language={language}
      onLanguageChange={handleLanguageChange}
      navItems={navItems(language)}
      activeKey={activePage}
      onNavSelect={handleNavSelect}
      menuOpen={menuOpen}
      onMenuOpenChange={(open) => {
        setMenuOpen(open);
        if (open) setAccountMenuOpen(false);
      }}
      // 点 Logo 回首页：设备查询首页
      onLogoClick={() => {
        setAccountMenuOpen(false);
        setProfileOpen(false);
        handleNavSelect("search");
      }}
      onUserClick={() => {
        setMenuOpen(false);
        setAccountMenuOpen((open) => !open);
      }}
      accountMenuId={accountMenuId}
      accountMenuOpen={accountMenuOpen}
      accountMenuTriggerId={accountMenuTriggerId}
      account={{
        avatarUrl: currentUser.avatar,
        label: language === "cn" ? currentUser.name : currentUser.nameEn,
      }}
      platform={onSwitchAccount ? {
        value: edition,
        onChange: (next) => {
          if (next === edition) return;
          const account = ACCOUNTS.find((candidate) => candidate.email === EDITION_DEFAULT_EMAILS[next]);
          if (!account) return;
          setMenuOpen(false);
          setProfileOpen(false);
          onSwitchAccount(account);
        },
      } : undefined}
      brandLogo={edition === "qianfan" ? <img src={qianFanLogo} alt="" className="h-9 w-28 shrink-0 object-contain object-left" /> : undefined}
    >
      {profileOpen ? (
        <MobileProfilePage language={language} user={currentUser} onLogout={onLogout} />
      ) : activePage === "search" ? (
        <>
          {/* 设备查询首页：打开详情时隐藏但保持挂载，返回后搜索条件与结果仍在；按平台 + 账号重挂载 */}
          <div hidden={device !== null} className={device === null ? "flex flex-1 flex-col" : undefined}>
            <MobileDeviceQuery
              key={`${edition}:${email}`}
              language={language}
              edition={edition}
              email={email}
              onOpenDevice={handleOpenDevice}
            />
          </div>
          {device && (
        <div className="flex flex-col">
          <MobilePageTitle
            title={language === "cn" ? "设备详情" : "Device Details"}
            language={language}
            onBack={handleCloseDevice}
            extra={
              <button
                type="button"
                aria-label={language === "cn" ? "刷新设备数据" : "Refresh device data"}
                onClick={refreshDetail}
                className="flex shrink-0 cursor-pointer items-center rounded-sm border-0 bg-transparent p-0 font-normal text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
              >
                <span className="text-body">{language === "cn" ? "刷新" : "Refresh"}</span>
              </button>
            }
          />

          <div className="mx-4 mt-4">
            <MobileDeviceDetailCard device={device} language={language} />
          </div>

          <div className="mx-4 mt-4">
            <MobileDeviceDetailTabs
              tabs={DETAIL_TABS.map(({ cn, en, ...tab }) => ({
                ...tab,
                label: language === "cn" ? cn : en,
              }))}
              value={activeDetailTab}
              onChange={handleDetailTabChange}
              ariaLabel={language === "cn" ? "设备详情内容" : "Device details content"}
            />
          </div>

          <div id={`mobile-device-detail-panel-${activeDetailTab}`} role="tabpanel" aria-labelledby={`mobile-device-detail-tab-${activeDetailTab}`} className="px-4 pt-3 pb-6">
            {activeDetailTab === "liveData" && <MobileLiveDataContent key={detailRefreshKey} language={language} />}
            {activeDetailTab === "archive" && <MobileDeviceArchiveContent key={detailRefreshKey} language={language} />}
            {activeDetailTab === "events" && <MobileDeviceEventsContent key={detailRefreshKey} language={language} />}
          </div>


        </div>
          )}
        </>
      ) : (
        <MobileDeviceRegistration language={language} onReturnHome={() => handleNavSelect("search")} />
      )}
      </MobileShell>
      <MobileAccountMenu
        open={accountMenuOpen}
        id={accountMenuId}
        triggerId={accountMenuTriggerId}
        language={language}
        user={currentUser}
        onClose={() => setAccountMenuOpen(false)}
        onOpenProfile={() => setProfileOpen(true)}
        onLogout={onLogout}
        onUnavailableAction={(action) => {
          MessagePlugin.info(language === "cn"
            ? `${action === "approval" ? "审批中心" : "产品反馈"}暂未在移动端开放`
            : `${action === "approval" ? "Approval Center" : "Product feedback"} is not available on mobile yet`);
        }}
      />
    </>
  );
}
