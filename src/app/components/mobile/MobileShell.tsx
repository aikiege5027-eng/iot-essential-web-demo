import { useEffect, useId } from "react";
import type { ReactNode } from "react";
import { KoneLogo } from "../icons/nav-icons";
import { MobileOverlayScrollbar } from "./MobileOverlayScrollbar";
import { CloseMIcon, MobileChevronLeftIcon, MobileMenuIcon, MobileUserIcon } from "../icons/mobile-icons";

/**
 * 移动端页面框架（Figma IOT Delivery 7103:36620「IOT_Mobile_template」8895:32007）。
 *
 * 自上而下四个区域：
 *   1. 顶部导航 MobileTopNav —— 56 高：KONE 标识 + 产品名，右侧账号 / 菜单两个 32 圆形按钮；点 Logo 回首页
 *   2. 页面标题 MobilePageTitle —— 50 高白底：可选返回箭头 + H6 Semibold 标题 + 可选右侧操作
 *   3. 页面主体 —— 页面底色 bg-page，内容自行决定白底或卡片
 *   4. 底部操作 MobileBottomBar —— 白底 16 内边距，40 高按钮，贴底
 * 菜单展开态（7216:26517）：顶栏下方整屏白色面板，中英文切换 + 一级导航项，菜单按钮变为关闭。
 *
 * 状态栏、浏览器地址栏和底部工具栏是设计稿里的手机浏览器外壳，不属于页面，不实现。
 */

export type MobileLang = "cn" | "en";

export interface MobileNavItem<K extends string = string> {
  key: K;
  label: string;
  icon: ReactNode;
}

const copy = {
  cn: { openMenu: "打开菜单", closeMenu: "关闭菜单", account: "账号", home: "返回首页", back: "返回", language: "语言", menu: "主导航", platform: "平台快捷切换", platformIot: "通力", platformQianfan: "仟帆" },
  en: { openMenu: "Open menu", closeMenu: "Close menu", account: "Account", home: "Go to home", back: "Back", language: "Language", menu: "Main navigation", platform: "Switch platform", platformIot: "KONE", platformQianfan: "Qianfan" },
};

export interface MobileAccountPresentation {
  avatarUrl?: string;
  /** Localized account name used as the avatar button's accessible label. */
  label?: string;
}

const ROUND_BUTTON =
  "flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-brand-light text-brand transition-colors hover:bg-[var(--brand-color-light-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base";

export function MobileTopNav({
  language,
  menuOpen,
  menuId,
  onToggleMenu,
  onLogoClick,
  onUserClick,
  account,
  accountMenuId,
  accountMenuOpen,
  accountMenuTriggerId,
  brandLogo,
  platform,
}: {
  language: MobileLang;
  menuOpen: boolean;
  menuId: string;
  onToggleMenu: () => void;
  onLogoClick?: () => void;
  onUserClick?: () => void;
  /** Optional user presentation for the account button. */
  account?: MobileAccountPresentation;
  /** Optional accessible association with a Mobile account menu. */
  accountMenuId?: string;
  accountMenuOpen?: boolean;
  accountMenuTriggerId?: string;
  /** 可选品牌标识。未传时沿用 KONE 标识。 */
  brandLogo?: ReactNode;
  /** Demo 用的通力 / 仟帆快速切换；顶栏放得下时显示在这里，放不下时显示在展开菜单里。 */
  platform?: MobilePlatformSwitch;
}) {
  const t = copy[language];
  return (
    <header className="sticky top-0 z-50 flex h-14 shrink-0 items-center justify-between border-b border-stroke bg-container px-4">
      <button
        type="button"
        onClick={onLogoClick}
        aria-label={t.home}
        className="flex min-w-0 cursor-pointer items-center gap-3.5 rounded-sm border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
      >
        {brandLogo ?? <KoneLogo aria-hidden="true" role="presentation" className="h-7 w-[72px] shrink-0 text-brand-base" />}
        <span className="truncate text-h7 font-semibold text-primary-text">IoT Essential</span>
      </button>
      <div className="flex items-center gap-2">
        {platform && (
          <MenuSegmented
            compact
            label={t.platform}
            value={platform.value}
            options={platformOptions(t)}
            onChange={platform.onChange}
            className={platformBarClass(platform.value)}
          />
        )}
        <button
          id={accountMenuTriggerId}
          type="button"
          data-mobile-account-trigger
          className={`${ROUND_BUTTON} overflow-hidden`}
          aria-label={account?.label ?? t.account}
          aria-haspopup={accountMenuId ? "menu" : undefined}
          aria-expanded={accountMenuId ? accountMenuOpen : undefined}
          aria-controls={accountMenuId}
          onClick={onUserClick}
        >
          {account?.avatarUrl ? <img src={account.avatarUrl} alt="" className="size-full object-cover" /> : <MobileUserIcon className="size-[18px]" />}
        </button>
        <button
          type="button"
          className={ROUND_BUTTON}
          aria-label={menuOpen ? t.closeMenu : t.openMenu}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={onToggleMenu}
        >
          {menuOpen ? <CloseMIcon className="size-[18px]" /> : <MobileMenuIcon className="size-[18px]" />}
        </button>
      </div>
    </header>
  );
}

export type MobilePlatform = "iot" | "qianfan";

/**
 * 通力 / 仟帆切换在顶栏的可用空间：375 宽时通力版右侧只剩约 87px、仟帆版（Logo 容器 112）只剩约 47px，
 * 最小档分段控件约 78 宽（两侧还要留约 7 的间距，共约 92），所以按版本设宽度阈值：
 * 通力 ≥ 380、仟帆 ≥ 420 时显示在顶栏，更窄时改放进展开菜单（二者互斥）。Tailwind 需要静态类名，故逐个写出。
 */
const platformBarClass = (value: MobilePlatform) => (value === "qianfan" ? "hidden min-[420px]:flex" : "hidden min-[380px]:flex");
const platformMenuClass = (value: MobilePlatform) => (value === "qianfan" ? "min-[420px]:hidden" : "min-[380px]:hidden");
// 平台切换在菜单里隐藏时，语言切换要顶到最上面（去掉它原本的上边距由 mt-5 兜底）。
const platformLanguageClass = (value: MobilePlatform) => (value === "qianfan" ? "min-[420px]:mt-5" : "min-[380px]:mt-5");
const platformOptions = (t: { platformIot: string; platformQianfan: string }) => [
  { value: "iot" as const, label: t.platformIot },
  { value: "qianfan" as const, label: t.platformQianfan },
];
export interface MobilePlatformSwitch {
  value: MobilePlatform;
  onChange: (value: MobilePlatform) => void;
}

/** 展开菜单里的分段切换（radioButton-Group）：外框 component-stroke 底、2px 内边距，选中项白底。语言与平台切换共用。 */
function MenuSegmented<V extends string>({ label, value, options, onChange, className = "", compact = false }: {
  label: string;
  value: V;
  options: { value: V; label: string }[];
  onChange: (value: V) => void;
  className?: string;
  /** 顶栏里的最小档：24 高、12/20 文字、内边距 6，两项共约 78 宽。 */
  compact?: boolean;
}) {
  return (
    <div role="radiogroup" aria-label={label} className={`${compact ? "flex shrink-0 gap-0.5" : "mx-4 flex gap-1"} rounded-sm bg-stroke p-0.5 ${className}`}>
      {options.map((option) => {
        const active = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option.value)}
            className={`${compact ? "h-5 px-1.5 text-foot12" : "flex-1 px-4 py-[3px]"} cursor-pointer rounded-[2px] border-0 font-normal transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base ${
              active ? "bg-container text-primary-text" : "bg-transparent text-secondary-text"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

/** 菜单展开态：顶栏下方整屏白色面板（7216:26517）。 */
export function MobileNavMenu<K extends string>({
  id,
  open,
  language,
  items,
  activeKey,
  onSelect,
  onLanguageChange,
  platform,
  onClose,
}: {
  id: string;
  open: boolean;
  language: MobileLang;
  items: MobileNavItem<K>[];
  activeKey: K;
  onSelect: (key: K) => void;
  onLanguageChange: (lang: MobileLang) => void;
  /** Demo 用的通力 / 仟帆快速切换；不传则不显示。 */
  platform?: MobilePlatformSwitch;
  onClose: () => void;
}) {
  const t = copy[language];

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div id={id} hidden={!open} className="fixed inset-x-0 bottom-0 top-14 z-40 overflow-y-auto bg-container">
      {/* Demo 用：通力 / 仟帆快速切换，与桌面顶栏的 PlatformQuickSwitch 一致，直接以各平台默认账号进入 */}
      {platform && (
        <MenuSegmented
          label={t.platform}
          value={platform.value}
          options={platformOptions(t)}
          onChange={platform.onChange}
          className={`mt-5 ${platformMenuClass(platform.value)}`}
        />
      )}
      {/* 中英文切换：radioButton-Group，外框 component-stroke 底、2px 内边距，选中项白底 */}
      <MenuSegmented
        label={t.language}
        value={language}
        options={[{ value: "cn", label: "中文" }, { value: "en", label: "English" }]}
        onChange={onLanguageChange}
        className={platform ? `mt-3 ${platformLanguageClass(platform.value)}` : "mt-5"}
      />
      <nav aria-label={t.menu} className="mt-3">
        <ul className="m-0 list-none p-0">
          {items.map((item) => {
            const active = item.key === activeKey;
            return (
              <li key={item.key}>
                <button
                  type="button"
                  aria-current={active ? "page" : undefined}
                  onClick={() => onSelect(item.key)}
                  className={`flex w-full cursor-pointer items-center gap-3 border-0 px-5 py-3 text-left text-h7 font-medium text-primary-text transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-base ${
                    active ? "bg-brand-light" : "bg-container hover:bg-container-hover"
                  }`}
                >
                  <span aria-hidden="true" className="flex size-5 shrink-0 text-icon-primary">
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

/** 页面标题区（8895:31706）：50 高白底，返回箭头 20、间距 8，标题 H6 18/26 Semibold。 */
export function MobilePageTitle({
  title,
  language,
  onBack,
  extra,
}: {
  title: string;
  language: MobileLang;
  onBack?: () => void;
  extra?: ReactNode;
}) {
  return (
    <div className="flex h-[50px] shrink-0 items-center gap-2 bg-container px-4">
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          aria-label={copy[language].back}
          className="-m-1 flex shrink-0 cursor-pointer items-center justify-center rounded-sm border-0 bg-transparent p-1 text-icon-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
        >
          <MobileChevronLeftIcon className="size-5" />
        </button>
      )}
      <h1 className="m-0 min-w-0 flex-1 truncate text-h6 font-semibold text-primary-text">{title}</h1>
      {extra}
    </div>
  );
}

/**
 * 底部操作区（8895:31707 单按钮 / 8910:9168 双按钮）：白底、16 内边距、按钮间距 8，贴在视口底部。
 * 按钮用 TDesign Button size="large" block，圆角与字重由 .km-mobile-actions 补齐（见 tdesign-patches.css）。
 */
export function MobileBottomBar({ children }: { children: ReactNode }) {
  return <div className="km-mobile-actions sticky bottom-0 z-10 flex shrink-0 gap-2 bg-container p-4">{children}</div>;
}

/** 完整骨架：顶栏 + 菜单面板 + 页面（标题、主体、底部操作由页面自己组合）。 */
export function MobileShell<K extends string>({
  language,
  onLanguageChange,
  navItems,
  activeKey,
  onNavSelect,
  menuOpen,
  onMenuOpenChange,
  onLogoClick,
  onUserClick,
  account,
  accountMenuId,
  accountMenuOpen,
  accountMenuTriggerId,
  brandLogo,
  platform,
  children,
}: {
  language: MobileLang;
  onLanguageChange: (lang: MobileLang) => void;
  navItems: MobileNavItem<K>[];
  activeKey: K;
  onNavSelect: (key: K) => void;
  menuOpen: boolean;
  onMenuOpenChange: (open: boolean) => void;
  onLogoClick?: () => void;
  onUserClick?: () => void;
  /** Optional user presentation for the account button. */
  account?: MobileAccountPresentation;
  /** Optional accessible association with a Mobile account menu. */
  accountMenuId?: string;
  accountMenuOpen?: boolean;
  accountMenuTriggerId?: string;
  /** 可选品牌标识。未传时沿用 KONE 标识。 */
  brandLogo?: ReactNode;
  /** Demo 用的通力 / 仟帆快速切换，显示在展开菜单顶部。 */
  platform?: MobilePlatformSwitch;
  children: ReactNode;
}) {
  const menuId = useId();
  return (
    <div className="flex min-h-dvh w-full flex-col bg-page">
      <MobileTopNav
        language={language}
        menuOpen={menuOpen}
        menuId={menuId}
        onToggleMenu={() => onMenuOpenChange(!menuOpen)}
        onLogoClick={() => {
          onMenuOpenChange(false);
          onLogoClick?.();
        }}
        onUserClick={onUserClick}
        platform={platform}
        account={account}
        accountMenuId={accountMenuId}
        accountMenuOpen={accountMenuOpen}
        accountMenuTriggerId={accountMenuTriggerId}
        brandLogo={brandLogo}
      />
      <MobileNavMenu
        id={menuId}
        open={menuOpen}
        language={language}
        items={navItems}
        activeKey={activeKey}
        onSelect={(key) => {
          onNavSelect(key);
          onMenuOpenChange(false);
        }}
        onLanguageChange={onLanguageChange}
        platform={platform}
        onClose={() => onMenuOpenChange(false)}
      />
      <main className="flex min-h-0 flex-1 flex-col">{children}</main>
      <MobileOverlayScrollbar />
    </div>
  );
}
