import { useEffect, useState } from "react";
import { Dialog, Input, MessagePlugin } from "tdesign-react";

/**
 * 仟帆账号菜单里的「修改密码」弹窗。
 *
 * 字段：原密码、新密码；底部「取消 / 确认修改」。
 * 容器沿用「创建用户」「重置密码」同一套 Dialog（宽 480，带分割线变体）；成功提示用 TDesign Message。
 *
 * 这里没有后端，流程是模拟的：原密码与当前账号的演示密码（统一为 123）比对，
 * 新密码不能为空、不能与原密码相同；成功后关闭弹窗并提示「密码修改成功」。
 * 演示账号是常量，修改后的密码不会真正写回，下次登录仍用 123。
 */

type Language = "en" | "cn";

const copy = {
  cn: {
    title: "修改密码",
    oldPassword: "原密码",
    oldPlaceholder: "请输入原密码",
    oldRequired: "请输入原密码",
    oldIncorrect: "原密码不正确",
    newPassword: "新密码",
    newPlaceholder: "请输入新密码",
    newRequired: "请输入新密码",
    newSame: "新密码不能与原密码相同",
    cancel: "取消",
    confirm: "确认修改",
    success: "密码修改成功",
  },
  en: {
    title: "Change Password",
    oldPassword: "Current password",
    oldPlaceholder: "Enter your current password",
    oldRequired: "Enter your current password",
    oldIncorrect: "Current password is incorrect",
    newPassword: "New password",
    newPlaceholder: "Enter a new password",
    newRequired: "Enter a new password",
    newSame: "New password must differ from the current one",
    cancel: "Cancel",
    confirm: "Confirm",
    success: "Password changed",
  },
};

type ChangePasswordDialogProps = {
  visible: boolean;
  language: Language;
  /** 当前账号的密码，用于校验原密码 */
  currentPassword: string;
  onClose: () => void;
};

type FieldErrors = { oldPassword: string; newPassword: string };
const NO_ERRORS: FieldErrors = { oldPassword: "", newPassword: "" };

function FieldMessage({ error }: { error?: string }) {
  return error ? <p role="alert" className="mt-1 text-foot12 text-error">{error}</p> : null;
}

export default function ChangePasswordDialog({ visible, language, currentPassword, onClose }: ChangePasswordDialogProps) {
  const t = copy[language];
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errors, setErrors] = useState<FieldErrors>(NO_ERRORS);

  // 每次打开都是一张干净的表单
  useEffect(() => {
    if (!visible) return;
    setOldPassword("");
    setNewPassword("");
    setErrors(NO_ERRORS);
  }, [visible]);

  const submit = () => {
    const next: FieldErrors = {
      oldPassword: !oldPassword ? t.oldRequired : oldPassword === currentPassword ? "" : t.oldIncorrect,
      newPassword: !newPassword ? t.newRequired : newPassword === oldPassword ? t.newSame : "",
    };
    setErrors(next);
    if (next.oldPassword || next.newPassword) return;
    onClose();
    MessagePlugin.success(t.success, 3000);
  };

  return (
    <Dialog
      visible={visible}
      header={t.title}
      width={480}
      placement="center"
      dialogClassName="km-dialog--divider"
      closeOnOverlayClick={false}
      cancelBtn={{ content: t.cancel, theme: "default", variant: "base" }}
      confirmBtn={t.confirm}
      onConfirm={submit}
      onClose={onClose}
    >
      <div className="flex flex-col gap-4">
        <label className="block">
          <span className="mb-2 block text-body text-primary-text">{t.oldPassword}</span>
          <Input
            size="large"
            type="password"
            placeholder={t.oldPlaceholder}
            autocomplete="current-password"
            value={oldPassword}
            status={errors.oldPassword ? "error" : "default"}
            onChange={(value) => {
              setOldPassword(String(value));
              setErrors((current) => ({ ...current, oldPassword: "" }));
            }}
          />
          <FieldMessage error={errors.oldPassword} />
        </label>

        <label className="block">
          <span className="mb-2 block text-body text-primary-text">{t.newPassword}</span>
          <Input
            size="large"
            type="password"
            placeholder={t.newPlaceholder}
            autocomplete="new-password"
            value={newPassword}
            status={errors.newPassword ? "error" : "default"}
            onChange={(value) => {
              setNewPassword(String(value));
              setErrors((current) => ({ ...current, newPassword: "" }));
            }}
          />
          <FieldMessage error={errors.newPassword} />
        </label>
      </div>
    </Dialog>
  );
}
