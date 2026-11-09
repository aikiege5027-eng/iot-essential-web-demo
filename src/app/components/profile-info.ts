import type { AppAccount } from "../data/accounts";

export type ProfileInfoLanguage = "en" | "cn";

export const profileInfoCopy = {
  cn: { title: "个人信息", employeeId: "用户工号", name: "用户姓名", email: "用户邮箱", role: "用户角色" },
  en: { title: "Profile", employeeId: "Employee ID", name: "Name", email: "Email", role: "Role" },
} as const;

export function getProfileInfoFields(user: AppAccount, language: ProfileInfoLanguage) {
  const t = profileInfoCopy[language];
  const isChinese = language === "cn";

  return [
    { label: t.employeeId, value: user.employeeId },
    { label: t.name, value: isChinese ? user.name : user.nameEn },
    { label: t.email, value: user.email },
    { label: t.role, value: isChinese ? user.role : user.roleEn },
  ];
}
