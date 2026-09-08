/**
 * 页面导航框架。用法见 .kiro/steering/design-system.md 的「导航框架」一节。
 */
export { AppShell } from "./AppShell";
export type { AppShellProps } from "./AppShell";

export { TopNav } from "./TopNav";
export type { TopNavAction, TopNavPageControls, TopNavProps } from "./TopNav";

export { SideNav } from "./SideNav";
export type { SideNavEntry, SideNavGroup, SideNavLeaf, SideNavProps } from "./SideNav";

export { getSideNavItems, getAllNavLeafIds } from "./nav-items";
export type { NavLang } from "./nav-items";
