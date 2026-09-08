/**
 * 侧边导航信息架构（IA）
 *
 * 结构与文案取自 Figma IOT Delivery / Side_Navigation 的 CN 与 EN 两个变体：
 *   https://www.figma.com/design/L9e70WefNsB8pSYKB5U7zh/IOT-Delivery?node-id=5813-33085
 *
 * 设计稿中 EN 变体的「运维管理」分组标题未翻译，此处按其余分组的命名习惯
 * 补为 "O&M Management"。如与设计不符请以设计稿更新为准。
 */
import { createElement } from "react";
import type { ReactNode } from "react";
import type { SideNavEntry } from "./SideNav";
import {
  NavOperationsIcon,
  NavOverviewIcon,
  NavPermissionIcon,
  NavProvisioningIcon,
  NavSearchIcon,
  NavSettingsIcon,
  NavSimCardIcon,
} from "../icons/nav-icons";

export type NavLang = "cn" | "en";

interface RawLeaf {
  id: string;
  cn: string;
  en: string;
}

interface RawGroup extends RawLeaf {
  icon: () => ReactNode;
  children: RawLeaf[];
}

type RawEntry = (RawLeaf & { icon: () => ReactNode }) | RawGroup;

const IA: RawEntry[] = [
  { id: "overview", cn: "设备总览", en: "Equipment Overview", icon: () => createElement(NavOverviewIcon) },
  { id: "search", cn: "设备查询", en: "Equipment Search", icon: () => createElement(NavSearchIcon) },
  { id: "provisioning", cn: "设备注册", en: "Provisioning", icon: () => createElement(NavProvisioningIcon) },
  {
    // id 必须与既有路由约定一致（EventsApp 用 activeSidebarItem 做页面分发），
    // 因此这里用 iot / iot-card-* 而非设计稿标题里的 SIM 字样。
    id: "iot",
    cn: "物联卡管理",
    en: "SIM Mgmt",
    icon: () => createElement(NavSimCardIcon),
    children: [
      { id: "iot-card-query", cn: "物联卡查询", en: "SIM Search" },
      { id: "iot-card-statistics", cn: "物联卡统计", en: "SIM Overview" },
    ],
  },
  {
    id: "operations",
    cn: "运维管理",
    en: "O&M Management",
    icon: () => createElement(NavOperationsIcon),
    children: [
      { id: "batch-operations", cn: "设备批量操作", en: "Device Batch Op." },
      { id: "monitoring", cn: "设备运维监控", en: "Device op. Mon." },
      { id: "operation-history", cn: "平台操作日志", en: "Operation History" },
      { id: "feedback", cn: "用户反馈管理", en: "User Feedback Mgmt" },
    ],
  },
  {
    id: "permissions",
    cn: "权限管理",
    en: "Permission Mgmt",
    icon: () => createElement(NavPermissionIcon),
    children: [
      { id: "user-management", cn: "用户管理", en: "Users" },
      { id: "role-management", cn: "角色管理", en: "Roles" },
    ],
  },
  {
    id: "settings",
    cn: "系统配置",
    en: "Device Mgmt",
    icon: () => createElement(NavSettingsIcon),
    children: [
      { id: "hardware-types", cn: "硬件类型管理", en: "HW Type Mgmt" },
      { id: "software-versions", cn: "软件版本管理", en: "SW Version Mgmt" },
      { id: "software-packages", cn: "软件更新包管理", en: "SW Binary Mgmt" },
      { id: "profile-management", cn: "Profile管理", en: "Profile Mgmt" },
      { id: "fault-management", cn: "Fault信息管理", en: "Fault Mgmt" },
      { id: "rule-configuration", cn: "规则配置", en: "Rule Setting" },
    ],
  },
];

const hasChildren = (entry: RawEntry): entry is RawGroup =>
  Array.isArray((entry as RawGroup).children);

/**
 * 按语言生成侧边导航数据。
 *
 * @param lang    界面语言
 * @param visible 可见项 id 白名单（用于按角色权限裁剪）。省略则全部可见；
 *                分组只要命中自身 id 或任一子项 id 就保留，并只渲染命中的子项。
 */
export function getSideNavItems(lang: NavLang, visible?: string[]): SideNavEntry[] {
  const canShow = (id: string) => !visible || visible.includes(id);

  return IA.reduce<SideNavEntry[]>((acc, entry) => {
    const label = entry[lang];

    if (!hasChildren(entry)) {
      if (canShow(entry.id)) acc.push({ id: entry.id, label, icon: entry.icon() });
      return acc;
    }

    const children = entry.children.filter((child) => canShow(child.id));
    if (children.length === 0 && !canShow(entry.id)) return acc;

    acc.push({
      id: entry.id,
      label,
      icon: entry.icon(),
      children: children.map((child) => ({ id: child.id, label: child[lang] })),
    });
    return acc;
  }, []);
}

/**
 * 全部可选中的叶子项 id，便于路由校验。
 *
 * 用函数而非模块级常量：常量形式会产生模块初始化期的计算，
 * Rollup 无法判定其无副作用，导致本模块即使未被使用也会被打进产物。
 */
export function getAllNavLeafIds(): string[] {
  return IA.flatMap((entry) =>
    hasChildren(entry) ? entry.children.map((child) => child.id) : [entry.id],
  );
}
