import { useEffect, useId } from "react";
import type { ReactNode } from "react";
import { KoneLogo } from "../icons/nav-icons";
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
  cn: { openMenu: "打开菜单", closeMenu: "关闭菜单", account: "账号", home: "返回首页", back: "返回", language: "语言", menu: "主导航" },
  en: { openMenu: "Open menu", closeMenu: "Close menu", account: "Account", home: "Go to home", back: "Back", language: "Language", menu: "Main navigation" },
};

const ROUND_BUTTON =
  "flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-brand-light text-brand transition-colors hover:bg-[var(--brand-color-light-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base";

export function MobileTopNav({
  language,
  menuOpen,
  menuId,
  onToggleMenu,
  onLogoClick,
  onUserClick,
}: {
  language: MobileLang;
  menuOpen: boolean;
  menuId: string;
  onToggleMenu: () => void;
  onLogoClick?: () => void;
  onUserClick?: () => void;
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
        <KoneLogo aria-hidden="true" role="presentation" className="h-7 w-[72px] shrink-0 text-brand-base" />
        <span className="truncate text-h7 font-semibold text-primary-text">IoT Essential</span>
      </button>
      <div className="flex items-center gap-2">
        <button type="button" className={ROUND_BUTTON} aria-label={t.account} onClick={onUserClick}>
          <MobileUserIcon className="size-[18px]" />
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

/** 菜单展开态：顶栏下方整屏白色面板（7216:26517）。 */
export function MobileNavMenu<K extends string>({
  id,
  open,
  language,
  items,
  activeKey,
  onSelect,
  onLanguageChange,
  onClose,
}: {
  id: string;
  open: boolean;
  language: MobileLang;
  items: MobileNavItem<K>[];
  activeKey: K;
  onSelect: (key: K) => void;
  onLanguageChange: (lang: MobileLang) => void;
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
      {/* 中英文切换：radioButton-Group，外框 component-stroke 底、2px 内边距，选中项白底 */}
      <div role="radiogroup" aria-label={t.language} className="mx-4 mt-5 flex gap-1 rounded-sm bg-stroke p-0.5">
        {(["cn", "en"] as MobileLang[]).map((lang) => {
          const active = language === lang;
          return (
            <button
              key={lang}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onLanguageChange(lang)}
              className={`flex-1 cursor-pointer rounded-[2px] border-0 px-4 py-[3px] font-normal transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base ${
                active ? "bg-container text-primary-text" : "bg-transparent text-secondary-text"
              }`}
            >
              {lang === "cn" ? "中文" : "English"}
            </button>
          );
        })}
      </div>

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
        onClose={() => onMenuOpenChange(false)}
      />
      <main className="flex min-h-0 flex-1 flex-col">{children}</main>
    </div>
  );
}
