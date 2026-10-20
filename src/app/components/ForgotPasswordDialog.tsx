import { useEffect, useState } from "react";
import { Button, Dialog, Input, MessagePlugin } from "tdesign-react";

/**
 * 仟帆 IOT Essential 的「重置密码」弹窗。
 *
 * 版式参考旧版 myKONE web 的「登录密码修改」弹窗（手机号 → 验证码 + 重新发送 → 密码），
 * 按本次需求做了裁剪：标题改为「重置密码」，去掉顶部提示条和全部密码输入框，只保留手机号和验证码，
 * 底部为「取消 / 确认重置」。弹窗出现时由登录页隐藏登录卡片，弹窗代替它。
 * 容器遵循设计系统的 Dialog 规格（Figma 41952:300048，带分割线变体）；
 * 成功提示用 TDesign Message（Figma 46808:353123）。
 *
 * 这里没有后端，整条流程是模拟的：输入 11 位手机号（演示号码 00000000000）→ 发送验证码（顶部提示「验证码已发送」）
 * → 输入验证码 123456 → 确认重置，成功后关闭弹窗并提示「密码重置成功」。
 */

type ForgotPasswordDialogProps = {
  visible: boolean;
  onClose: () => void;
};

// 演示用：手机号只校验 11 位数字（演示号码 00000000000），验证码固定为 123456
const PHONE_PATTERN = /^\d{11}$/;
const DEMO_CODE = "123456";
const RESEND_SECONDS = 60;

/** 输入框下方的校验错误文案 */
function FieldMessage({ error }: { error?: string }) {
  return error ? <p role="alert" className="mt-1 text-foot12 text-error">{error}</p> : null;
}

type FieldErrors = { phone: string; code: string };
const NO_ERRORS: FieldErrors = { phone: "", code: "" };

export default function ForgotPasswordDialog({ visible, onClose }: ForgotPasswordDialogProps) {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [errors, setErrors] = useState<FieldErrors>(NO_ERRORS);

  // 每次打开都是一张干净的表单
  useEffect(() => {
    if (!visible) return;
    setPhone("");
    setCode("");
    setCodeSent(false);
    setCountdown(0);
    setErrors(NO_ERRORS);
  }, [visible]);

  // 重新发送倒计时
  useEffect(() => {
    if (countdown <= 0) return;
    const timer = window.setTimeout(() => setCountdown((seconds) => seconds - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [countdown]);

  const setFieldError = (field: keyof FieldErrors, message: string) =>
    setErrors((current) => ({ ...current, [field]: message }));

  const sendCode = () => {
    if (!PHONE_PATTERN.test(phone)) {
      setFieldError("phone", phone ? "请输入正确的手机号" : "请输入手机号");
      return;
    }
    setFieldError("phone", "");
    setCodeSent(true);
    setCountdown(RESEND_SECONDS);
    MessagePlugin.success("验证码已发送", 3000);
  };

  const confirm = () => {
    const next: FieldErrors = {
      phone: PHONE_PATTERN.test(phone) ? "" : phone ? "请输入正确的手机号" : "请输入手机号",
      code: !codeSent ? "请先发送验证码" : code === DEMO_CODE ? "" : code ? "验证码不正确" : "请输入验证码",
    };
    setErrors(next);
    if (next.phone || next.code) return;
    onClose();
    MessagePlugin.success("密码重置成功", 3000);
  };

  const resendLabel = countdown > 0 ? `重新发送（${countdown}s）` : codeSent ? "重新发送" : "发送验证码";

  return (
    <Dialog
      visible={visible}
      header="重置密码"
      width={480}
      placement="center"
      dialogClassName="km-dialog--divider"
      closeOnOverlayClick={false}
      cancelBtn={{ content: "取消", theme: "default", variant: "base" }}
      confirmBtn="确认重置"
      onConfirm={confirm}
      onClose={onClose}
    >
      <div className="flex flex-col gap-4">
        <label className="block">
          <span className="sr-only">手机号</span>
          <Input
            size="large"
            type="tel"
            maxlength={11}
            placeholder="请输入手机号"
            autocomplete="tel"
            value={phone}
            status={errors.phone ? "error" : "default"}
            onChange={(value) => {
              setPhone(String(value).replace(/\D/g, ""));
              setFieldError("phone", "");
            }}
          />
          <FieldMessage error={errors.phone} />
        </label>

        <div className="flex items-start gap-3">
          <label className="block min-w-0 flex-1">
            <span className="sr-only">验证码</span>
            <Input
              size="large"
              inputMode="numeric"
              maxlength={6}
              placeholder="请输入验证码"
              autocomplete="one-time-code"
              value={code}
              status={errors.code ? "error" : "default"}
              onChange={(value) => {
                setCode(String(value).replace(/\D/g, ""));
                setFieldError("code", "");
              }}
            />
            <FieldMessage error={errors.code} />
          </label>
          <Button
            type="button"
            size="large"
            theme="primary"
            variant="outline"
            disabled={countdown > 0}
            onClick={sendCode}
            className="shrink-0 whitespace-nowrap"
            style={{ minWidth: 128 }}
          >
            {resendLabel}
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
