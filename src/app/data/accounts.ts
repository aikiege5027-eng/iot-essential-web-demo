import liAvatar from "../../imports/维保员工李建国/f53b42671c153590ed4a8a58db404198110e34af.png";
import wangAvatar from "../../imports/维保经理王志强/bc0dd9340cdc398d64fc0d77ad0831df457c309f.png";
import zhangAvatar from "../../imports/项目经理张明远-1/829c4636d017667935d957fcbe75e56486d3423a.png";
import linAvatar from "../../imports/Component10/6847d687db3edf3e5d330faa9a67e02d91c0298f.png";
import liuAvatar from "../../imports/Component10/340e161f99fe54cc796d4ef8ee2b090b96f49df0.png";
import zhaoAvatar from "../../imports/Component10/ddf94a90705d5dea2421c8ad86a24839c9b0e289.png";
import zhouAvatar from "../../imports/Component10/2ce0faf98af7b6e81e7b1e7e4a1fd3b77c325d8f.png";

export type AppAccount = {
  email: string;
  password: string;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  avatar: string;
  sidebarPermissions: string[];
};

export const ACCOUNTS: AppAccount[] = [
  { email: "jianguo.li@kone.com", password: "123", name: "李建国", nameEn: "Li Jianguo", role: "维保员工", roleEn: "Maintenance Technician", avatar: liAvatar, sidebarPermissions: ["search", "provisioning"] },
  { email: "zhiqiang.wang@kone.com", password: "123", name: "王志强", nameEn: "Wang Zhiqiang", role: "管理层员工", roleEn: "Management Staff", avatar: wangAvatar, sidebarPermissions: ["overview", "search", "provisioning", "iot", "iot-card-query"] },
  { email: "lin.xue@kone.com", password: "123", name: "林雪", nameEn: "Lin Xue", role: "研发人员（自建）", roleEn: "R&D Staff", avatar: linAvatar, sidebarPermissions: ["overview", "search", "provisioning", "iot", "iot-card-query", "iot-card-statistics"] },
  { email: "liu.yang@kone.com", password: "123", name: "刘洋", nameEn: "Liu Yang", role: "L2人员（自建）", roleEn: "L2 Staff", avatar: liuAvatar, sidebarPermissions: ["overview", "search", "provisioning", "iot", "iot-card-query", "iot-card-statistics", "operations", "monitoring", "operation-history", "feedback", "permissions", "user-management", "settings", "hardware-types", "software-versions", "software-packages", "profile-management", "fault-management"] },
  { email: "zhao.min@kone.com", password: "123", name: "赵敏", nameEn: "Zhao Min", role: "Devops人员（自建）", roleEn: "DevOps Staff", avatar: zhaoAvatar, sidebarPermissions: ["overview", "search", "provisioning", "iot", "iot-card-query", "iot-card-statistics", "operations", "batch-operations", "monitoring", "operation-history", "feedback", "permissions", "user-management", "settings", "hardware-types", "software-versions", "software-packages", "profile-management", "fault-management"] },
  { email: "mingyuan.zhang@kone.com", password: "123", name: "张明远", nameEn: "Zhang Mingyuan", role: "系统管理员", roleEn: "System Administrator", avatar: zhangAvatar, sidebarPermissions: ["overview", "search", "provisioning", "operation-history", "iot", "iot-card-query", "iot-card-statistics", "permissions", "user-management", "role-management", "approval-center", "batch-operations", "monitoring", "feedback", "settings", "hardware-types", "software-versions", "software-packages", "profile-management", "fault-management", "rule-configuration"] },
  { email: "qiang.zhou@kone.com", password: "123", name: "周强", nameEn: "Zhou Qiang", role: "超级管理员（系统）", roleEn: "Super Administrator", avatar: zhouAvatar, sidebarPermissions: [] },
];
