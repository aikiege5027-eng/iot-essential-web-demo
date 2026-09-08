/**
 * AppShell —— 页面导航框架
 *
 * 组合顶部导航与侧边导航，形成标准页面骨架：
 *
 *   ┌──────────────────────────────────────┐
 *   │ TopNav                        56px   │
 *   ├──────────┬───────────────────────────┤
 *   │ SideNav  │ main（独立滚动）           │
 *   │ 232/56px │                           │
 *   └──────────┴───────────────────────────┘
 *
 * 设计来源：Figma IOT Delivery / Page Frame
 *   https://www.figma.com/design/L9e70WefNsB8pSYKB5U7zh/IOT-Delivery?node-id=11739-31415
 *
 * 布局约定：外层锁定视口高度，只有 main 滚动，顶栏与侧栏始终可见。
 */
import { useState } from "react";
import type { ReactNode } from "react";
import { cn } from "../ui/utils";
import { SideNav } from "./SideNav";
import type { SideNavEntry } from "./SideNav";
import { TopNav } from "./TopNav";
import type { TopNavAction, TopNavProps } from "./TopNav";

export interface AppShellProps {
  navItems: SideNavEntry[];
  activeId?: string | null;
  onNavSelect: (id: string) => void;

  /** 透传给 TopNav */
  title?: string;
  actions?: TopNavAction[];
  user?: TopNavProps["user"];
  onLogoClick?: () => void;
  onUserClick?: () => void;
  /** 顶栏标题右侧插槽 */
  headerSlot?: ReactNode;

  /** 侧边栏折叠态。传入则由外部托管，否则组件内部自持 */
  collapsed?: boolean;
  onToggleCollapsed?: () => void;
  /** 设为 false 可隐藏底部折叠开关 */
  collapsible?: boolean;

  children: ReactNode;
  className?: string;
  /** main 区域附加类名，默认给页面底色 */
  contentClassName?: string;
}

export function AppShell({
  navItems,
  activeId = null,
  onNavSelect,
  title,
  actions,
  user,
  onLogoClick,
  onUserClick,
  headerSlot,
  collapsed,
  onToggleCollapsed,
  collapsible = true,
  children,
  className,
  contentClassName,
}: AppShellProps) {
  // 非受控模式下自持折叠状态
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const isControlled = collapsed !== undefined;
  const isCollapsed = isControlled ? collapsed : internalCollapsed;
  const toggle = isControlled
    ? onToggleCollapsed
    : () => setInternalCollapsed((prev) => !prev);

  return (
    <div className={cn("flex h-screen flex-col overflow-hidden bg-page", className)}>
      <TopNav
        title={title}
        actions={actions}
        user={user}
        onLogoClick={onLogoClick}
        onUserClick={onUserClick}
      >
        {headerSlot}
      </TopNav>

      <div className="flex min-h-0 flex-1">
        <SideNav
          items={navItems}
          activeId={activeId}
          onSelect={onNavSelect}
          collapsed={isCollapsed}
          onToggleCollapsed={collapsible ? toggle : undefined}
          className="shrink-0 border-r border-stroke transition-[width] duration-200"
        />

        <main className={cn("min-w-0 flex-1 overflow-auto bg-page", contentClassName)}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default AppShell;
