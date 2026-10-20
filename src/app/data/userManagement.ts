import type { AppEdition } from "./accounts";

/**
 * 用户管理页的演示数据。
 *
 * 两个平台（通力 / 仟帆）共用同一个用户管理模块，但各自有独立的用户名单：
 * 通力 37 人（前 10 行与设计稿截图一致），仟帆 26 人；仟帆只有系统管理员 / 管理层员工 / 前线维保员工三个角色，
 * 其中前线维保员工属于各维保分包商租户，管理层员工和系统管理员是仟帆自己的人（无租户）。
 * 数据按创建时间倒序，页面内的「禁用 / 启用」只改本地状态，刷新后恢复。
 */

export type ManagedUserStatus = "normal" | "disabled";

export type ManagedUser = {
  /** 稳定主键，用于表格 rowKey 与状态覆盖。 */
  id: string;
  employeeId: string;
  name: string;
  email: string;
  role: string;
  /** 创建时间，格式 YYYY-MM-DD HH:mm:ss */
  createdAt: string;
  status: ManagedUserStatus;
  /** 所属租户（仅仟帆）：仟帆合作的电梯维保分包商；仟帆自己的人没有租户（undefined）。 */
  tenant?: string;
  /** 以手机号作为账户名称创建的用户：此时 email 为空串，列表里显示「-」。 */
  phone?: string;
};

/** 角色下拉选项（按平台）；与角色管理页的角色列表保持一致。 */
export const USER_ROLES: Record<AppEdition, string[]> = {
  iot: ["系统管理员", "管理层员工", "前线维保员工", "L2人员", "Devops人员", "研发人员", "IOTEssential测试角色", "测试角色:{{timestamp}}", "自动化测试角色-勿删"],
  qianfan: ["系统管理员", "管理层员工", "前线维保员工"],
};

/** 管理员角色不可被禁用（设计稿中这类行只有「编辑」）。 */
export const PROTECTED_ROLES = new Set(["系统管理员"]);

const KONE_HEAD: Omit<ManagedUser, "id">[] = [
  { employeeId: "64152788", name: "Zhang Yujing (EXT)", email: "yujing.zhang@kone.com", role: "系统管理员", createdAt: "2026-10-15 13:06:13", status: "normal" },
  { employeeId: "64186565", name: "Kan Yali (EXT)", email: "yali.kan@kone.com", role: "前线维保员工", createdAt: "2026-10-15 10:49:26", status: "normal" },
  { employeeId: "64182872", name: "Luo Chan (EXT)", email: "chan.luo@kone.com", role: "管理层员工", createdAt: "2026-09-10 15:58:59", status: "normal" },
  { employeeId: "28022121", name: "Wang Ye, Will", email: "ye.wang3@kone.com", role: "系统管理员", createdAt: "2026-08-18 22:49:12", status: "normal" },
  { employeeId: "64174048", name: "Liu Yi (EXT)", email: "yi.4.liu@kone.com", role: "前线维保员工", createdAt: "2026-08-18 13:13:14", status: "normal" },
  { employeeId: "64171434", name: "Luo Bo,Bruce", email: "bo.2.luo@kone.com", role: "管理层员工", createdAt: "2026-08-14 15:18:10", status: "normal" },
  { employeeId: "64171084", name: "Zhu Yazhou", email: "yazhou.zhu@kone.com", role: "管理层员工", createdAt: "2026-08-07 15:00:04", status: "normal" },
  { employeeId: "64122705", name: "Tong Zhen", email: "zhen.tong@kone.com", role: "管理层员工", createdAt: "2026-08-11 13:26:43", status: "normal" },
  { employeeId: "64180624", name: "Zhu Mingjian (EXT)", email: "mingjian.zhu@kone.com", role: "系统管理员", createdAt: "2026-07-13 13:50:45", status: "normal" },
  { employeeId: "746a71b1-6507-4c67-bd0f-512a8c3e9f01", name: "TEST_PMCKBAM1", email: "TEST_PMCKBAM1@kone.com", role: "系统管理员", createdAt: "2026-06-08 14:49:27", status: "normal" },
];

/** 通力其余 27 人：用确定性的姓名 / 角色循环生成，保证每次刷新一致。 */
const KONE_GIVEN = ["Li Jianguo", "Wang Zhiqiang", "Lin Xue", "Liu Yang", "Zhao Min", "Zhang Mingyuan", "Zhou Qiang", "Chen Hao", "Sun Lei", "Xu Fang", "Gao Peng", "Ma Li", "Hu Jun", "Guo Tao", "He Ning", "Deng Yu", "Cao Wen", "Peng Kai", "Yuan Hui", "Jiang Bo", "Shen Lin", "Han Mei", "Tang Rui", "Feng Jie", "Yu Tian", "Dong Xin", "Xiao Yan"];
/**
 * 通力其余 27 人的角色。与前 10 行合计后，各角色人数和角色管理页一致：
 * 系统管理员 23 / 管理层员工 8 / 前线维保员工 4 / L2人员 1 / Devops人员 1 / 研发人员 0。
 */
const KONE_TAIL_ROLES = [
  "系统管理员", "管理层员工", "系统管理员", "系统管理员", "前线维保员工", "系统管理员", "L2人员", "系统管理员", "系统管理员",
  "管理层员工", "系统管理员", "系统管理员", "Devops人员", "系统管理员", "系统管理员", "管理层员工", "系统管理员", "系统管理员",
  "前线维保员工", "系统管理员", "系统管理员", "管理层员工", "系统管理员", "系统管理员", "系统管理员", "系统管理员", "系统管理员",
];

function buildKoneUsers(): ManagedUser[] {
  const tail: Omit<ManagedUser, "id">[] = KONE_GIVEN.map((fullName, index) => {
    const [given, family] = fullName.split(" ").reverse();
    const month = String(5 - Math.floor(index / 9)).padStart(2, "0");
    const day = String(28 - ((index * 3) % 27)).padStart(2, "0");
    const hour = String(9 + (index % 10)).padStart(2, "0");
    const minute = String((index * 7) % 60).padStart(2, "0");
    const second = String((index * 13) % 60).padStart(2, "0");
    return {
      employeeId: String(64100000 + index * 137),
      name: index % 4 === 0 ? `${fullName} (EXT)` : fullName,
      email: `${given.toLowerCase()}.${family.toLowerCase()}@kone.com`,
      role: KONE_TAIL_ROLES[index],
      createdAt: `2026-${month}-${day} ${hour}:${minute}:${second}`,
      // 管理员类角色不可禁用，所以只让两位非管理员示例用户处于禁用状态
      status: index === 4 || index === 18 ? "disabled" : "normal",
    };
  });
  return [...KONE_HEAD, ...tail].map((user, index) => ({ ...user, id: `iot-${index + 1}` }));
}

/**
 * 仟帆合作的电梯维保分包商（虚构）。
 * 租户人员的角色只有「前线维保员工」；系统管理员 / 管理层员工都是仟帆自己的人，不属于任何租户（列表里显示「-」）。
 */
const QIANFAN_TENANTS = ["申城电梯维保", "鼎力机电维保", "恒安电梯服务", "南粤电梯工程", "京津电梯维保", "西蜀电梯技服"];

/** 账号前缀（given.family）；姓名与通力一致，用「Family Given」拼音格式，由账号前缀推出。 */
const QIANFAN_ACCOUNTS: string[] = [
  "siyuan.chen",
  "yutong.zhou",
  "haoran.wu",
  "jiayi.zheng",
  "zixuan.wang",
  "yajing.feng",
  "wenbo.jiang",
  "mengqi.shen",
  "yuhang.han",
  "xiaotong.yang",
  "tianyu.zhu",
  "ruoxi.qin",
  "zhiqiang.xu",
  "jiaqi.he",
  "chenyang.lv",
  "yating.shi",
  "junjie.zhang",
  "lingyi.kong",
  "zimo.cao",
  "shihan.yan",
  "bowen.hua",
  "xinyi.jin",
  "pengfei.wei",
  "siqi.tao",
  "haoyu.jiang",
  "zihan.qi",
];

function buildQianfanUsers(): ManagedUser[] {
  return QIANFAN_ACCOUNTS.map((account, index) => {
    // 每 3 人里有 1 位是仟帆自己的人（系统管理员 2 位，其余为管理层员工），其余都是租户的前线维保员工
    const isPlatformStaff = index % 3 === 0;
    const role = isPlatformStaff ? (index === 0 || index === 6 ? "系统管理员" : "管理层员工") : "前线维保员工";
    const [given, family] = account.split(".");
    const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);
    const name = `${capitalize(family)} ${capitalize(given)}`;
    const month = String(10 - Math.floor(index / 6)).padStart(2, "0");
    const day = String(26 - ((index * 5) % 25)).padStart(2, "0");
    const hour = String(8 + (index % 11)).padStart(2, "0");
    const minute = String((index * 11) % 60).padStart(2, "0");
    const second = String((index * 17) % 60).padStart(2, "0");
    return {
      id: `qianfan-${index + 1}`,
      employeeId: String(20260001 + index * 9),
      name,
      email: `${account}@qianfan-iot.com`,
      role,
      createdAt: `2026-${month}-${day} ${hour}:${minute}:${second}`,
      status: index === 8 ? "disabled" : "normal",
      tenant: isPlatformStaff ? undefined : QIANFAN_TENANTS[index % QIANFAN_TENANTS.length],
    };
  });
}

export function getInitialManagedUsers(edition: AppEdition): ManagedUser[] {
  return edition === "qianfan" ? buildQianfanUsers() : buildKoneUsers();
}
