/**
 * TopNav —— 顶部菜单导航
 *
 * 设计来源：Figma IOT Delivery / headerMenu 顶部菜单导航
 *   https://www.figma.com/design/L9e70WefNsB8pSYKB5U7zh/IOT-Delivery?node-id=11272-31411
 *
 * 尺寸取自设计稿实测：
 *   高 56px · 左右内边距 24px · logo 与标题间距 24px · 标题 H6 18/26 Semibold
 *   右侧操作按钮 32×32、圆角 4px、图标 16×16、间距 8px
 *   头像 32×32 圆形，底色 --brand-color-focus
 *
 * 所有颜色走设计系统语义 token，不出现硬编码色值。
 */
import type { ReactNode } from "react";
import { cn } from "../ui/utils";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  KoneLogo,
  RefreshIcon,
} from "../icons/nav-icons";

/**
 * 页面导航控件（返回 / 前进 / 刷新）。
 *
 * 顶栏默认不带这组控件 —— 它在 Figma 中是可选元素（headerMenu 的 propValue 开关）。
 * 传入 pageControls 才渲染，因此只有需要页内前进后退的视图（如任务进度视图）才会出现。
 * 省略某个回调即表示该按钮为禁用态，与设计稿中「前进」置灰（#959595）的表现一致。
 */
export interface TopNavPageControls {
  onBack?: () => void;
  onForward?: () => void;
  onRefresh?: () => void;
  /** 无障碍名称，默认中文 */
  labels?: { back?: string; forward?: string; refresh?: string };
}

export interface TopNavAction {
  id: string;
  /** 无障碍名称。图标是装饰性的，可读信息全靠这里 */
  label: string;
  icon: ReactNode;
  /** 未读数；0 或 undefined 不显示徽标 */
  badgeCount?: number;
  onClick?: () => void;
  /** 在此项之前插入一条竖分隔线 */
  dividerBefore?: boolean;
}

export interface TopNavProps {
  /** 产品名，设计稿为「IoT Essential」 */
  title?: string;
  actions?: TopNavAction[];
  user?: {
    name?: string;
    avatarUrl?: string;
  };
  onLogoClick?: () => void;
  /** 头像点击（账号菜单）。未传时头像为纯展示元素 */
  onUserClick?: () => void;
  /** 可选的页面导航控件（返回/前进/刷新），紧随品牌区之后 */
  pageControls?: TopNavPageControls;
  /** 标题右侧插槽，可放面包屑或环境标识 */
  children?: ReactNode;
  /**
   * 右区自定义内容，会替换默认的 actions + 头像。
   * 用于承载消息中心、账号菜单这类带浮层的业务功能 ——
   * 它们属于应用特性而非导航规范，不应塞进本组件。
   */
  trailing?: ReactNode;
  className?: string;
}

/** 徽标数字上限，超出显示 99+，避免撑破 16px 圆形 */
const formatBadge = (count: number) => (count > 99 ? "99+" : String(count));

/** 页面导航控件按钮样式：32×32、圆角 4px，与设计稿一致 */
const controlButton =
  "flex size-8 items-center justify-center rounded-sm border-0 bg-transparent transition-colors " +
  "enabled:text-icon-primary enabled:hover:bg-container-hover " +
  "disabled:cursor-not-allowed disabled:text-disabled " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base";

function PageControls({ onBack, onForward, onRefresh, labels }: TopNavPageControls) {
  const items = [
    { key: "back", label: labels?.back ?? "返回", Icon: ChevronLeftIcon, onClick: onBack },
    { key: "forward", label: labels?.forward ?? "前进", Icon: ChevronRightIcon, onClick: onForward },
    { key: "refresh", label: labels?.refresh ?? "刷新", Icon: RefreshIcon, onClick: onRefresh },
  ];

  return (
    <div className="flex items-center gap-2">
      {items.map(({ key, label, Icon, onClick }) => (
        <button
          key={key}
          type="button"
          onClick={onClick}
          disabled={!onClick}
          aria-label={label}
          title={label}
          className={controlButton}
        >
          <Icon className="size-4" />
        </button>
      ))}
    </div>
  );
}

export function TopNav({
  title = "IoT Essential",
  actions = [],
  user,
  onLogoClick,
  onUserClick,
  pageControls,
  children,
  trailing,
  className,
}: TopNavProps) {
  const initial = user?.name?.trim().charAt(0);

  return (
    <header
      className={cn(
        "flex h-14 w-full shrink-0 items-center justify-between border-b border-stroke bg-container px-6",
        className,
      )}
    >
      {/* 左区：品牌 + 产品名 + 插槽 */}
      <div className="flex min-w-0 items-center gap-8">
        <div className="flex min-w-0 items-center gap-6">
          {onLogoClick ? (
            <button
              type="button"
              onClick={onLogoClick}
              aria-label={`${title} 首页`}
              className="shrink-0 rounded-sm border-0 bg-transparent text-brand-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
            >
              <KoneLogo className="h-7 w-auto" />
            </button>
          ) : (
            <KoneLogo className="h-7 w-auto shrink-0 text-brand-base" />
          )}
          <p className="truncate text-h6 font-semibold text-primary-text">{title}</p>
        </div>
        {pageControls && (
          <>
            {/* 设计稿中控件组前有一条竖分隔线 */}
            <span aria-hidden="true" className="h-[37px] w-px shrink-0 bg-stroke" />
            <PageControls {...pageControls} />
          </>
        )}
        {children}
      </div>

      {/* 右区：业务插槽优先；未提供时用默认的操作区 + 头像 */}
      <div className="flex shrink-0 items-center gap-2">
        {trailing}
        {!trailing && actions.length > 0 && (
          <div className="flex h-8 items-center gap-2">
            {actions.map((action) => {
              const showBadge = Boolean(action.badgeCount && action.badgeCount > 0);
              return (
                <div key={action.id} className="flex items-center gap-2">
                  {action.dividerBefore && (
                    <span
                      aria-hidden="true"
                      className="h-3.5 w-px shrink-0 bg-stroke"
                    />
                  )}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={action.onClick}
                      // 未读数并入可读名称，否则屏幕阅读器只会读到「通知」
                      aria-label={
                        showBadge
                          ? `${action.label}，${action.badgeCount} 条未读`
                          : action.label
                      }
                      className={cn(
                        "flex size-8 items-center justify-center rounded-sm border-0 bg-transparent text-link transition-colors",
                        "hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base",
                      )}
                    >
                      <span className="[&>svg]:size-4" aria-hidden="true">
                        {action.icon}
                      </span>
                    </button>
                    {showBadge && (
                      <span
                        aria-hidden="true"
                        // 底色用 error-active 而非 surface-alert：白字在 #f51414 上
                        // 仅 4.21:1，未达 12px 文字的 AA 阈值；#c41010 为 6.12:1。
                        className="pointer-events-none absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-error-active px-1 text-foot12 text-white-text"
                      >
                        {formatBadge(action.badgeCount!)}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {!trailing &&
          user &&
          (() => {
            const avatar = (
              <>
                {user.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt=""
                    className="size-full object-cover"
                  />
                ) : (
                  <span className="text-foot12 font-medium text-brand-active">
                    {initial}
                  </span>
                )}
              </>
            );
            const shell =
              "flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-focus";

            return onUserClick ? (
              <button
                type="button"
                onClick={onUserClick}
                aria-label={user.name ? `账号菜单：${user.name}` : "账号菜单"}
                className={cn(
                  shell,
                  "border-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-base",
                )}
              >
                {avatar}
              </button>
            ) : (
              <span className={shell} role="img" aria-label={user.name ?? "用户头像"}>
                {avatar}
              </span>
            );
          })()}
      </div>
    </header>
  );
}

export default TopNav;
