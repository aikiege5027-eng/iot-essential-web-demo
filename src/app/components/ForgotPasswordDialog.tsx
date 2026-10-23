import { useEffect, useRef, useState } from "react";
import { Alert, Button, Dialog, Input, MessagePlugin, Steps } from "tdesign-react";

/**
 * 仟帆 IoT Essential 登录页「忘记密码」→「修改密码」弹窗，两步完成：
 *
 *   1. 验证手机号：手机号 + 验证码（发送 / 60s 后重新发送），校验通过进入下一步；
 *   2. 设置新密码：新密码输入两遍，两次一致后「确认」。顶部黄色 Alert 倒计时 1 分钟；
 *      超时后两个输入框与「确认」都置为禁用，提示条改为「密码修改已超时，请重新验证并重试」，只能「上一步」。
 *
 * 从第二步「上一步」回到第一步时，手机号、验证码、发送状态全部清空，必须重新输入手机号并重新获取验证码。
 *
 * 倒计时提示用 TDesign Alert（设计规范 China Design system 50063:541914，theme=warning、带图标、仅标题），
 * 外观按规范用 `km-alert` 收口（见 tdesign-patches.css）。
 * 步骤引导用 TDesign Steps（设计规范 China Design system 43752:306570，横向 default 主题）；
 * 容器遵循设计系统的 Dialog 规格（Figma 41952:300048，带分割线变体）；成功提示用 TDesign Message。
 * 弹窗出现时由登录页隐藏登录卡片，弹窗代替它。
 *
 * 这里没有后端，流程是模拟的：任意 11 位手机号（演示号码 00000000000）→ 发送验证码 → 输入 123456 → 下一步
 * → 两次输入相同的新密码 → 确认。成功后通过 onReset 把新密码交给登录页（由 App 记住），
 * 关闭弹窗、提示「密码修改成功」，回到登录页用新密码重新登录。
 */

type ForgotPasswordDialogProps = {
  visible: boolean;
  onClose: () => void;
  /** 新密码设置成功；登录页据此更新该账号的密码并清空密码框 */
  onReset: (newPassword: string) => void;
};

// 演示用：手机号只校验 11 位数字，验证码固定为 123456
const PHONE_PATTERN = /^\d{11}$/;
const DEMO_CODE = "123456";
const RESEND_SECONDS = 60;
/** 验证通过后，设置新密码的有效时长 */
const RESET_WINDOW_SECONDS = 60;

/** 秒数格式化为 mm:ss */
const formatCountdown = (seconds: number) =>
  `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
const STEPS = ["验证手机号", "设置新密码"];

/** 输入框下方的校验错误文案 */
function FieldMessage({ error }: { error?: string }) {
  return error ? <p role="alert" className="mt-1 text-foot12 text-error">{error}</p> : null;
}

type FieldErrors = { phone: string; code: string; password: string; confirm: string };
const NO_ERRORS: FieldErrors = { phone: "", code: "", password: "", confirm: "" };

export default function ForgotPasswordDialog({ visible, onClose, onReset }: ForgotPasswordDialogProps) {
  const [step, setStep] = useState<0 | 1>(0);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FieldErrors>(NO_ERRORS);
  // 第二步剩余秒数：进入第二步时从 60 开始倒数，回到第一步再进来会重新计时
  const [resetRemaining, setResetRemaining] = useState(RESET_WINDOW_SECONDS);
  // TDesign Dialog 的 footer 不会随每次输入重新渲染，按钮回调里的闭包会停留在旧值；
  // 校验统一从这个 ref 读取最新输入。
  const latest = useRef({ phone, code, codeSent, password, confirmPassword, resetRemaining });
  latest.current = { phone, code, codeSent, password, confirmPassword, resetRemaining };

  /** 清空第一步：手机号、验证码与发送倒计时都要重来 */
  const resetVerification = () => {
    setPhone("");
    setCode("");
    setCodeSent(false);
    setCountdown(0);
  };

  /** 第二步「上一步」：清空新密码与整个验证状态，回到第一步重新验证 */
  const backToVerify = () => {
    resetVerification();
    setPassword("");
    setConfirmPassword("");
    setErrors(NO_ERRORS);
    setStep(0);
  };

  // 每次打开都是一张干净的表单，从第一步开始
  useEffect(() => {
    if (!visible) return;
    setStep(0);
    setPhone("");
    setCode("");
    setCodeSent(false);
    setCountdown(0);
    setPassword("");
    setConfirmPassword("");
    setErrors(NO_ERRORS);
  }, [visible]);

  // 第二步的有效期倒计时，到 0 停止（之后输入框与「确认」禁用，只能「上一步」）
  useEffect(() => {
    if (!visible || step !== 1 || resetRemaining <= 0) return;
    const timer = window.setTimeout(() => setResetRemaining((seconds) => seconds - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [visible, step, resetRemaining]);

  // 重新发送倒计时
  useEffect(() => {
    if (countdown <= 0) return;
    const timer = window.setTimeout(() => setCountdown((seconds) => seconds - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [countdown]);

  const setFieldError = (field: keyof FieldErrors, message: string) =>
    setErrors((current) => ({ ...current, [field]: message }));

  const phoneError = () => {
    const { phone } = latest.current;
    return PHONE_PATTERN.test(phone) ? "" : phone ? "请输入正确的手机号" : "请输入手机号";
  };

  const sendCode = () => {
    const error = phoneError();
    setFieldError("phone", error);
    if (error) return;
    setCodeSent(true);
    setCountdown(RESEND_SECONDS);
    MessagePlugin.success("验证码已发送", 3000);
  };

  /** 第一步：手机号与验证码都通过才进入第二步 */
  const verify = () => {
    const { code, codeSent } = latest.current;
    const next: FieldErrors = {
      ...NO_ERRORS,
      phone: phoneError(),
      code: !codeSent ? "请先发送验证码" : code === DEMO_CODE ? "" : code ? "验证码不正确" : "请输入验证码",
    };
    setErrors(next);
    if (next.phone || next.code) return;
    setResetRemaining(RESET_WINDOW_SECONDS);
    setStep(1);
  };

  /** 第二步：两次输入一致即修改成功 */
  const submit = () => {
    const { password, confirmPassword, resetRemaining } = latest.current;
    // 超时后「确认」已禁用；这里兜底，防止倒计时归零的同一时刻触发提交
    if (resetRemaining <= 0) return;
    const next: FieldErrors = {
      ...NO_ERRORS,
      password: password ? "" : "请输入新密码",
      confirm: !confirmPassword ? "请再次输入新密码" : confirmPassword === password ? "" : "两次输入的密码不一致",
    };
    setErrors(next);
    if (next.password || next.confirm) return;
    onReset(password);
    onClose();
    MessagePlugin.success("密码修改成功，请使用新密码登录", 3000);
  };

  const expired = step === 1 && resetRemaining <= 0;

  const resendLabel = countdown > 0 ? `重新发送（${countdown}s）` : codeSent ? "重新发送" : "发送验证码";

  return (
    <Dialog
      visible={visible}
      header="修改密码"
      width={480}
      placement="center"
      dialogClassName="km-dialog--divider"
      closeOnOverlayClick={false}
      // 登录页上的弹窗代替登录卡片，背景保持登录页图片，不加黑色蒙层
      showOverlay={false}
      onClose={onClose}
      footer={
        // 第一步：取消 / 下一步；第二步：上一步 / 确认（次要按钮在左、主按钮在右）
        <div className="flex justify-end gap-2">
          {step === 0 ? (
            <Button theme="default" variant="base" onClick={onClose}>取消</Button>
          ) : (
            <Button theme="default" variant="base" onClick={backToVerify}>上一步</Button>
          )}
          <Button theme="primary" disabled={expired} onClick={step === 0 ? verify : submit}>{step === 0 ? "下一步" : "确认"}</Button>
        </div>
      }
    >
      <div className="flex flex-col gap-6">
        <Steps current={step} layout="horizontal" readonly>
          {STEPS.map((title) => (
            <Steps.StepItem key={title} title={title} />
          ))}
        </Steps>

        {step === 0 ? (
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
                  onEnter={verify}
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
        ) : (
          <div className="flex flex-col gap-4">
            <Alert
              className="km-alert km-alert--compact"
              theme="warning"
              // 倒计时不放进 live region，避免读屏每秒播报；超时文案用 role="alert" 播报一次
              message={
                resetRemaining > 0 ? (
                  <span>
                    请在 <span className="font-medium tabular-nums">{formatCountdown(resetRemaining)}</span> 内完成密码修改
                  </span>
                ) : (
                  <span role="alert">密码修改已超时，请重新验证并重试</span>
                )
              }
            />
            <label className="block">
              <span className="sr-only">新密码</span>
              <Input
                size="large"
                type="password"
                placeholder="请输入新密码"
                autocomplete="new-password"
                disabled={expired}
                value={password}
                status={errors.password ? "error" : "default"}
                onChange={(value) => {
                  setPassword(String(value));
                  setFieldError("password", "");
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
                disabled={expired}
                value={confirmPassword}
                status={errors.confirm ? "error" : "default"}
                onChange={(value) => {
                  setConfirmPassword(String(value));
                  setFieldError("confirm", "");
                }}
                onEnter={submit}
              />
              <FieldMessage error={errors.confirm} />
            </label>
          </div>
        )}
      </div>
    </Dialog>
  );
}
