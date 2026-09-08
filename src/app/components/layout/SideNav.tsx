/**
 * SideNav —— 侧边主导航
 *
 * 设计来源：Figma IOT Delivery / Side_Navigation
 *   https://www.figma.com/design/L9e70WefNsB8pSYKB5U7zh/IOT-Delivery?node-id=5813-33085
 *
 * 尺寸取自设计稿实测：
 *   展开宽度 232px · 一级项 px-16 py-7（行高 36px）· 圆角 6px
 *   二级项 pl-44 —— 即 16(左内边距) + 20(图标) + 8(间距)，使二级文字与一级文字左对齐
 *   底部操作条 56px，上描边分隔
 *
 * 所有颜色走设计系统语义 token，不出现硬编码色值。
 */
import { useCallback, useId, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "../ui/utils";
import { ChevronUpIcon, ViewListIcon } from "../icons/nav-icons";

/** 无子项的导航项 */
export interface SideNavLeaf {
  id: string;
  label: string;
  /** 一级项才有图标；二级项按设计不带图标 */
  icon?: ReactNode;
}

/** 可展开的导航分组 */
export interface SideNavGroup {
  id: string;
  label: string;
  icon?: ReactNode;
  children: SideNavLeaf[];
}

export type SideNavEntry = SideNavLeaf | SideNavGroup;

const isGroup = (entry: SideNavEntry): entry is SideNavGroup =>
  Array.isArray((entry as SideNavGroup).children);

export interface SideNavProps {
  items: SideNavEntry[];
  /** 当前选中项 id（可以是二级项） */
  activeId?: string | null;
  onSelect: (id: string) => void;
  /** 折叠为图标条 */
  collapsed?: boolean;
  onToggleCollapsed?: () => void;
  /** 初始展开的分组 id；默认全部展开，与设计稿的 state=expand 一致 */
  defaultExpandedGroups?: string[];
  /** 无障碍名称，页面存在多个 nav 时必须区分 */
  ariaLabel?: string;
  /** 底部折叠开关的可读名称，默认中文 */
  collapseLabels?: { expand?: string; collapse?: string };
  className?: string;
}

/** 一级与二级导航项共用的行样式 */
const rowBase =
  "flex min-h-9 w-full items-center rounded-md border-0 bg-transparent py-[7px] text-left text-body font-normal transition-colors " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-base";

export function SideNav({
  items,
  activeId = null,
  onSelect,
  collapsed = false,
  onToggleCollapsed,
  defaultExpandedGroups,
  ariaLabel = "主导航",
  collapseLabels,
  className,
}: SideNavProps) {
  const groupIds = useMemo(
    () => items.filter(isGroup).map((group) => group.id),
    [items],
  );

  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      groupIds.map((id) => [id, defaultExpandedGroups?.includes(id) ?? true]),
    ),
  );

  const baseId = useId();
  const toggleGroup = useCallback(
    (id: string) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] })),
    [],
  );

  /**
   * 折叠态下点击分组：先展开侧边栏再展开该分组。
   * 折叠时二级项不可见，若只切换分组状态用户不会看到任何反馈。
   */
  const handleGroupClick = useCallback(
    (id: string) => {
      if (collapsed) {
        onToggleCollapsed?.();
        setExpanded((prev) => ({ ...prev, [id]: true }));
        return;
      }
      toggleGroup(id);
    },
    [collapsed, onToggleCollapsed, toggleGroup],
  );

  const renderLeaf = (leaf: SideNavLeaf, level: 1 | 2) => {
    const active = activeId === leaf.id;
    return (
      <li key={leaf.id}>
        <button
          type="button"
          onClick={() => onSelect(leaf.id)}
          aria-current={active ? "page" : undefined}
          // 折叠态只剩图标，需要显式补可读名称与原生 tooltip
          aria-label={collapsed ? leaf.label : undefined}
          title={collapsed ? leaf.label : undefined}
          className={cn(
            rowBase,
            level === 1 ? "gap-2 px-4" : "pl-11 pr-4",
            collapsed && "justify-center px-2",
            active
              ? "bg-brand-light text-link"
              : "text-secondary-text hover:bg-container-hover hover:text-primary-text",
          )}
        >
          {level === 1 && leaf.icon ? (
            <span className="shrink-0 [&>svg]:size-5" aria-hidden="true">
              {leaf.icon}
            </span>
          ) : null}
          {!collapsed && <span className="min-w-0 flex-1 truncate">{leaf.label}</span>}
        </button>
      </li>
    );
  };

  const renderGroup = (group: SideNavGroup) => {
    const open = expanded[group.id] ?? true;
    const panelId = `${baseId}-${group.id}`;
    // 子项被选中时，分组标题也应呈现激活语气
    const hasActiveChild = group.children.some((child) => child.id === activeId);

    return (
      <li key={group.id}>
        <button
          type="button"
          onClick={() => handleGroupClick(group.id)}
          aria-expanded={collapsed ? undefined : open}
          aria-controls={collapsed ? undefined : panelId}
          aria-label={collapsed ? group.label : undefined}
          title={collapsed ? group.label : undefined}
          className={cn(
            rowBase,
            "gap-2 px-4",
            collapsed && "justify-center px-2",
            hasActiveChild && collapsed
              ? "bg-brand-light text-link"
              : "text-primary-text hover:bg-container-hover",
          )}
        >
          {group.icon ? (
            <span className="shrink-0 [&>svg]:size-5" aria-hidden="true">
              {group.icon}
            </span>
          ) : null}
          {!collapsed && (
            <>
              <span className="min-w-0 flex-1 truncate">{group.label}</span>
              {/* 设计稿在文字与箭头之间有 4px 间隙 */}
              <span className="w-1 shrink-0" aria-hidden="true" />
              <ChevronUpIcon
                className={cn(
                  "size-4 shrink-0 transition-transform",
                  !open && "rotate-180",
                )}
              />
            </>
          )}
        </button>

        {!collapsed && open && (
          <ul id={panelId} className="mt-1 flex flex-col gap-1">
            {group.children.map((child) => renderLeaf(child, 2))}
          </ul>
        )}
      </li>
    );
  };

  // 折叠开关用 aria-controls 指向真正被折叠的菜单区域，
  // 避免出现只有 aria-expanded 而无关联目标的悬空关系
  const menuRegionId = `${baseId}-menu`;

  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        // 不要加 h-full：本组件的高度由使用方决定 ——
        //   · AppShell 中它是 flex 行的子项，align-items: stretch 自动撑满
        //   · 固定定位场景由 top/bottom 双向定位确定高度
        // 若在此写死 h-full（height:100%），固定定位下会相对视口解析为 100vh，
        // 配合 top:56px 会使元素整体下溢 56px，底部操作条被推出视口之外。
        "flex flex-col overflow-hidden bg-container pt-2",
        // 折叠宽度 64px 沿用现有实现，Figma 未提供 collapse 变体
        collapsed ? "w-16" : "w-[232px]",
        className,
      )}
    >
      <div
        id={menuRegionId}
        className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto pb-2 custom-scrollbar"
      >
        <ul className="flex flex-col gap-1 px-2">
          {items.map((entry) =>
            isGroup(entry) ? renderGroup(entry) : renderLeaf(entry, 1),
          )}
        </ul>
      </div>

      {/*
       * 底部操作条：控制侧边栏收起/展开，始终吸附在底部。
       * 菜单区 flex-1 吸收剩余空间、自身 shrink-0 不被压缩，故菜单再长也不会把它顶走；
       * mt-auto 作为兜底，保证即使外层高度为 auto 也贴在末尾。
       * 设计规格 5813:32932 —— 高 56px、上描边、px-16、32×32 按钮、图标 16×16。
       */}
      {onToggleCollapsed && (
        <div className="mt-auto flex h-14 shrink-0 items-center gap-2 border-t border-stroke px-4">
          <button
            type="button"
            onClick={onToggleCollapsed}
            aria-controls={menuRegionId}
            aria-label={
              collapsed
                ? (collapseLabels?.expand ?? "展开侧边导航")
                : (collapseLabels?.collapse ?? "收起侧边导航")
            }
            title={
              collapsed
                ? (collapseLabels?.expand ?? "展开侧边导航")
                : (collapseLabels?.collapse ?? "收起侧边导航")
            }
            aria-expanded={!collapsed}
            className={cn(
              "flex size-8 items-center justify-center rounded-sm border-0 bg-transparent text-icon-primary transition-colors",
              "hover:bg-container-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base",
            )}
          >
            <ViewListIcon className="size-4" />
          </button>
        </div>
      )}
    </nav>
  );
}

export default SideNav;
