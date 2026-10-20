import liAvatar from "../../imports/维保员工李建国/f53b42671c153590ed4a8a58db404198110e34af.png";
import wangAvatar from "../../imports/维保经理王志强/bc0dd9340cdc398d64fc0d77ad0831df457c309f.png";
import zhangAvatar from "../../imports/项目经理张明远-1/829c4636d017667935d957fcbe75e56486d3423a.png";
import linAvatar from "../../imports/Component10/6847d687db3edf3e5d330faa9a67e02d91c0298f.png";
import liuAvatar from "../../imports/Component10/340e161f99fe54cc796d4ef8ee2b090b96f49df0.png";
import zhaoAvatar from "../../imports/Component10/ddf94a90705d5dea2421c8ad86a24839c9b0e289.png";
import zhouAvatar from "../../imports/Component10/2ce0faf98af7b6e81e7b1e7e4a1fd3b77c325d8f.png";

/** 平台版本：KONE 自有的 IOT Essential，以及仟帆版本的 IOT Essential。 */
export type AppEdition = "iot" | "qianfan";

export const EDITION_TITLES: Record<AppEdition, string> = {
  iot: "通力IOT Essential",
  qianfan: "仟帆IOT Essential",
};

export type AppAccount = {
  /** 用户工号，「个人信息」弹窗展示用；访客等占位账号可不填。 */
  employeeId?: string;
  email: string;
  password: string;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  avatar: string;
  sidebarPermissions: string[];
  /** 账号所属平台版本；未填表示 IOT Essential。 */
  edition?: AppEdition;
};

/** 仟帆版本的模拟管理员（演示数据）。 */
export const QIANFAN_ADMIN_EMAIL = "siyuan.chen@qianfan-iot.com";

/** 各平台的默认账号：登录页进入、切换平台时自动选中；顶栏的平台快捷切换也用它。 */
export const EDITION_DEFAULT_EMAILS: Record<AppEdition, string> = {
  iot: "mingyuan.zhang@kone.com",
  qianfan: QIANFAN_ADMIN_EMAIL,
};

export const getAccountEdition = (account?: Pick<AppAccount, "edition">): AppEdition => account?.edition ?? "iot";

/** 按邮箱判断所属平台版本，找不到账号时视为 IOT Essential。 */
export const getEditionByEmail = (email: string): AppEdition => getAccountEdition(ACCOUNTS.find((account) => account.email === email));

export const ACCOUNTS: AppAccount[] = [
  { employeeId: "64151234", email: "jianguo.li@kone.com", password: "123", name: "李建国", nameEn: "Li Jianguo", role: "维保员工", roleEn: "Maintenance Technician", avatar: liAvatar, sidebarPermissions: ["search", "provisioning"] },
  { employeeId: "64152167", email: "zhiqiang.wang@kone.com", password: "123", name: "王志强", nameEn: "Wang Zhiqiang", role: "管理层员工", roleEn: "Management Staff", avatar: wangAvatar, sidebarPermissions: ["overview", "search", "provisioning", "iot", "iot-card-query"] },
  { employeeId: "64158830", email: "lin.xue@kone.com", password: "123", name: "林雪", nameEn: "Lin Xue", role: "研发人员（自建）", roleEn: "R&D Staff", avatar: linAvatar, sidebarPermissions: ["overview", "search", "provisioning", "iot", "iot-card-query", "iot-card-statistics"] },
  { employeeId: "64160452", email: "liu.yang@kone.com", password: "123", name: "刘洋", nameEn: "Liu Yang", role: "L2人员（自建）", roleEn: "L2 Staff", avatar: liuAvatar, sidebarPermissions: ["overview", "search", "provisioning", "iot", "iot-card-query", "iot-card-statistics", "operations", "monitoring", "operation-history", "feedback", "permissions", "user-management", "settings", "hardware-types", "software-versions", "software-packages", "profile-management", "fault-management"] },
  { employeeId: "64163019", email: "zhao.min@kone.com", password: "123", name: "赵敏", nameEn: "Zhao Min", role: "Devops人员（自建）", roleEn: "DevOps Staff", avatar: zhaoAvatar, sidebarPermissions: ["overview", "search", "provisioning", "iot", "iot-card-query", "iot-card-statistics", "operations", "batch-operations", "monitoring", "operation-history", "feedback", "permissions", "user-management", "settings", "hardware-types", "software-versions", "software-packages", "profile-management", "fault-management"] },
  { employeeId: "64150086", email: "mingyuan.zhang@kone.com", password: "123", name: "张明远", nameEn: "Zhang Mingyuan", role: "系统管理员", roleEn: "System Administrator", avatar: zhangAvatar, sidebarPermissions: ["overview", "search", "provisioning", "operation-history", "iot", "iot-card-query", "iot-card-statistics", "permissions", "user-management", "role-management", "approval-center", "batch-operations", "monitoring", "feedback", "settings", "hardware-types", "software-versions", "software-packages", "profile-management", "fault-management", "rule-configuration"] },
  { employeeId: "64150001", email: "qiang.zhou@kone.com", password: "123", name: "周强", nameEn: "Zhou Qiang", role: "超级管理员（系统）", roleEn: "Super Administrator", avatar: zhouAvatar, sidebarPermissions: [] },
  // 仟帆版本目前只开放：设备总览 / 设备查询 / 设备注册 / 权限管理（用户、角色）。
  // 物联卡管理、运维管理、系统设置三个分组先移除；后续要恢复，把对应菜单 id 加回这个数组即可。
  { employeeId: "20260001", email: QIANFAN_ADMIN_EMAIL, password: "123", name: "陈思远", nameEn: "Chen Siyuan", role: "系统管理员", roleEn: "System Administrator", avatar: linAvatar, edition: "qianfan", sidebarPermissions: ["overview", "search", "provisioning", "permissions", "user-management", "role-management", "approval-center"] },
];
