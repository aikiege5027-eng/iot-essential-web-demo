import { Dialog } from "tdesign-react";
import type { AppAccount } from "../data/accounts";

/**
 * 「个人信息」弹窗（IOT Delivery 7105:14727），通力 / 仟帆共用。
 *
 * 只读展示当前登录账号的工号、姓名、邮箱、角色：宽 460，带分割线的紧凑变体
 * （`km-dialog--divider km-dialog--compact`），无页脚，右上角关闭。
 * 字段两列排布，每列 180 宽，行距 16、列距 36。
 */

type Language = "en" | "cn";

const copy = {
  cn: { title: "个人信息", employeeId: "用户工号", name: "用户姓名", email: "用户邮箱", role: "用户角色" },
  en: { title: "Profile", employeeId: "Employee ID", name: "Name", email: "Email", role: "Role" },
};

type ProfileInfoDialogProps = {
  visible: boolean;
  language: Language;
  user: AppAccount;
  onClose: () => void;
};

export default function ProfileInfoDialog({ visible, language, user, onClose }: ProfileInfoDialogProps) {
  const t = copy[language];
  const isChinese = language === "cn";
  const fields = [
    { label: t.employeeId, value: user.employeeId },
    { label: t.name, value: isChinese ? user.name : user.nameEn },
    { label: t.email, value: user.email },
    { label: t.role, value: isChinese ? user.role : user.roleEn },
  ];

  return (
    <Dialog
      visible={visible}
      header={t.title}
      width={460}
      placement="center"
      dialogClassName="km-dialog--divider km-dialog--compact"
      footer={false}
      onClose={onClose}
    >
      <dl className="flex flex-wrap gap-x-9 gap-y-4">
        {fields.map((field) => (
          <div key={field.label} className="flex w-[180px] flex-col gap-1">
            <dt className="text-body text-placeholder">{field.label}</dt>
            {/* 邮箱可能超过 180 宽：截断并用 title 补全 */}
            <dd className="truncate text-body text-primary-text" title={field.value || undefined}>{field.value || "-"}</dd>
          </div>
        ))}
      </dl>
    </Dialog>
  );
}
