import { useEffect, useRef, useState } from "react";
import { Alert, Dialog, Input, MessagePlugin } from "tdesign-react";

/**
 * 仟帆「管理员重置密码后，用户通过临时链接设置新密码」的落地页（演示）。
 *
 * 业务流程：管理员在用户管理里「重置密码」→ 用户收到含临时链接的邮件 / 短信 → 打开链接进入本页。
 * 页面沿用登录页的背景图，主体是一个不可点遮罩关闭的弹窗：
 *   · 头部：标题「修改密码」+ 该用户的姓名与账号（邮箱或手机号）；
 *   · 正文：提示条（TDesign Alert，theme=info，规范 50063:541914）说明管理员已重置密码，
 *     下方两次输入新密码；
 *   · 底部：只有「确认」——这一步不能跳过，设置完才能访问系统。
 * 演示入口在登录页左下角的「重置密码链接」；右上角关闭按钮仅为演示方便，回到登录页。
 *
 * 这里没有后端：两次输入一致即成功，通过 onSubmit 把新密码交给登录页（由 App 记住），
 * 提示「新密码设置成功，请重新登录」后回到默认登录页，用新密码登录。
 */

type ResetLinkPasswordDialogProps = {
  visible: boolean;
  /** 被重置密码的用户 */
  account: { name: string; email?: string; phone?: string };
  onClose: () => void;
  onSubmit: (newPassword: string) => void;
};

type FieldErrors = { password: string; confirm: string };
const NO_ERRORS: FieldErrors = { password: "", confirm: "" };

function FieldMessage({ error }: { error?: string }) {
  return error ? <p role="alert" className="mt-1 text-foot12 text-error">{error}</p> : null;
}

export default function ResetLinkPasswordDialog({ visible, account, onClose, onSubmit }: ResetLinkPasswordDialogProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FieldErrors>(NO_ERRORS);
  // TDesign Dialog 的按钮回调可能拿到旧闭包（见 ForgotPasswordDialog），校验统一从 ref 读最新输入
  const latest = useRef({ password, confirmPassword });
  latest.current = { password, confirmPassword };

  // 每次打开都是一张干净的表单
  useEffect(() => {
    if (!visible) return;
    setPassword("");
    setConfirmPassword("");
    setErrors(NO_ERRORS);
  }, [visible]);

  const submit = () => {
    const { password, confirmPassword } = latest.current;
    const next: FieldErrors = {
      password: password ? "" : "请输入新密码",
      confirm: !confirmPassword ? "请再次输入新密码" : confirmPassword === password ? "" : "两次输入的密码不一致",
    };
    setErrors(next);
    if (next.password || next.confirm) return;
    onSubmit(password);
    MessagePlugin.success("新密码设置成功，请重新登录", 3000);
  };

  // 账号可能是邮箱，也可能是手机号
  const accountId = account.email || account.phone || "";

  return (
    <Dialog
      visible={visible}
      header={
        <div className="flex min-w-0 flex-col">
          <span>修改密码</span>
          <span className="truncate text-body font-normal text-secondary-text" title={`${account.name} · ${accountId}`}>
            {account.name} · {accountId}
          </span>
        </div>
      }
      width={480}
      placement="center"
      dialogClassName="km-dialog--divider"
      closeOnOverlayClick={false}
      // 登录页上的弹窗代替登录卡片，背景保持登录页图片，不加黑色蒙层
      showOverlay={false}
      closeOnEscKeydown={false}
      cancelBtn={null}
      confirmBtn="确认"
      onConfirm={submit}
      onClose={onClose}
    >
      <div className="flex flex-col gap-4">
        <Alert
          className="km-alert km-alert--compact"
          theme="info"
          message="管理员已重置你的登录密码，请设置新密码后再访问系统。"
        />
        <label className="block">
          <span className="sr-only">新密码</span>
          <Input
            size="large"
            type="password"
            placeholder="请输入新密码"
            autocomplete="new-password"
            value={password}
            status={errors.password ? "error" : "default"}
            onChange={(value) => {
              setPassword(String(value));
              setErrors((current) => ({ ...current, password: "" }));
            }}
          />
          <FieldMessage error={errors.password} />
        </label>
        <label className="block">
          <span className="sr-only">确认新密码</span>
          <Input
            size="large"
            type="password"
            placeholder="请再次输入新密码"
            autocomplete="new-password"
            value={confirmPassword}
            status={errors.confirm ? "error" : "default"}
            onChange={(value) => {
              setConfirmPassword(String(value));
              setErrors((current) => ({ ...current, confirm: "" }));
            }}
            onEnter={submit}
          />
          <FieldMessage error={errors.confirm} />
        </label>
      </div>
    </Dialog>
  );
}
