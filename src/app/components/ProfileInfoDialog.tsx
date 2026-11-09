import { Dialog } from "tdesign-react";
import type { AppAccount } from "../data/accounts";
import { getProfileInfoFields, profileInfoCopy, type ProfileInfoLanguage } from "./profile-info";

/**
 * 「个人信息」弹窗（IOT Delivery 7105:14727），通力 / 仟帆共用。
 *
 * 只读展示当前登录账号的工号、姓名、邮箱、角色：宽 460，带分割线的紧凑变体
 * （`km-dialog--divider km-dialog--compact`），无页脚，右上角关闭。
 * 字段两列排布，每列 180 宽，行距 16、列距 36。
 */

type Language = ProfileInfoLanguage;

type ProfileInfoDialogProps = {
  visible: boolean;
  language: Language;
  user: AppAccount;
  onClose: () => void;
};

export default function ProfileInfoDialog({ visible, language, user, onClose }: ProfileInfoDialogProps) {
  const t = profileInfoCopy[language];
  const fields = getProfileInfoFields(user, language);

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
