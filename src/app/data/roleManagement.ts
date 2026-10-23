import type { AppEdition } from "./accounts";
import { getInitialManagedUsers } from "./userManagement";

/**
 * 角色管理页的演示数据。
 *
 * 角色列表按平台区分；「关联用户数」不是写死的，而是按用户管理页的名单统计，
 * 所以两个页面的数字天然一致（通力：23 / 8 / 4 / 1 / 1 / 0…）。
 */

export type ManagedRole = {
  id: string;
  name: string;
  /** 创建时间，格式 YYYY-MM-DD HH:mm */
  createdAt: string;
  /** 内置角色：只能编辑，不能删除。 */
  builtin: boolean;
  /** 关联用户数 */
  userCount: number;
};

type RoleSeed = Omit<ManagedRole, "id" | "userCount">;

const ROLE_SEEDS: Record<AppEdition, RoleSeed[]> = {
  iot: [
    { name: "系统管理员", createdAt: "2026-01-05 10:12", builtin: true },
    { name: "管理层员工", createdAt: "2026-01-05 10:12", builtin: true },
    { name: "前线维保员工", createdAt: "2026-01-05 10:12", builtin: true },
    { name: "L2人员", createdAt: "2026-10-08 16:20", builtin: false },
    { name: "Devops人员", createdAt: "2026-10-08 16:20", builtin: false },
    { name: "研发人员", createdAt: "2026-10-08 16:20", builtin: false },
    { name: "IoTEssential测试角色", createdAt: "2026-08-14 18:55", builtin: false },
    { name: "测试角色:{{timestamp}}", createdAt: "2026-06-22 09:46", builtin: false },
    { name: "自动化测试角色-勿删", createdAt: "2026-04-03 13:19", builtin: false },
  ],
  qianfan: [
    // 仟帆三类角色：系统管理员、前线维保员工（租户人员）、运营人员（仟帆自己的运营）
    { name: "系统管理员", createdAt: "2026-02-10 09:30", builtin: true },
    { name: "前线维保员工", createdAt: "2026-02-10 09:30", builtin: true },
    { name: "运营人员", createdAt: "2026-02-10 09:30", builtin: true },
  ],
};

export function getInitialManagedRoles(edition: AppEdition): ManagedRole[] {
  const users = getInitialManagedUsers(edition);
  return ROLE_SEEDS[edition].map((seed, index) => ({
    ...seed,
    id: `${edition}-role-${index + 1}`,
    userCount: users.filter((user) => user.role === seed.name).length,
  }));
}
