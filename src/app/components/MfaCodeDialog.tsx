import { useEffect, useRef, useState } from "react";
import { Button, Dialog } from "tdesign-react";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";

/**
 * 仟帆登录时的「动态验证码」（MFA）弹窗。
 *
 * 已绑定 MFA 的用户在登录页输入账号和密码后，会再弹出这个窗口，输入验证 App 里的 6 位动态验证码，
 * 输满 6 位后「登录」才可点。演示里验证码固定为 000000（见 App.tsx 的 MFA_DEMO_CODE）。
 *
 * 输入框用 shadcn/ui 的 InputOTP：设计系统里 TDesign 的 25 个组件没有验证码输入框，shadcn 里有，
 * 按"TDesign 没有、shadcn 有就用 shadcn"的规则选它；外观改成 KONE 风格的竖向格子（48 × 56、4px 圆角、
 * component-border 描边，聚焦时品牌蓝描边 + focus 外环）。
 *
 * 和登录页的其他弹窗一样：弹窗代替登录卡片，背景保持登录页图片，不加黑色蒙层；只能通过「取消」回到登录卡片。
 */

const CODE_LENGTH = 6;

type MfaCodeDialogProps = {
  visible: boolean;
  /** 提交验证码；返回错误文案表示验证失败（弹窗保持打开并清空输入），返回空串表示通过 */
  onSubmit: (code: string) => string;
  onCancel: () => void;
};

export default function MfaCodeDialog({ visible, onSubmit, onCancel }: MfaCodeDialogProps) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  // TDesign Dialog 的按钮回调可能拿到旧闭包（见 ForgotPasswordDialog），提交时从 ref 读最新输入
  const latest = useRef({ code, onSubmit });
  latest.current = { code, onSubmit };

  // ui/input-otp 的 InputOTP 不转发 ref，所以用外层容器去找里面的 <input>
  const holderRef = useRef<HTMLDivElement>(null);

  // 每次打开都是一张干净的表单
  useEffect(() => {
    if (!visible) return;
    setCode("");
    setError("");
  }, [visible]);

  const submit = () => {
    const { code: value, onSubmit: handle } = latest.current;
    if (value.length < CODE_LENGTH) return;
    const message = handle(value);
    if (message) {
      setError(message);
      setCode("");
    }
  };

  return (
    <Dialog
      visible={visible}
      header="动态验证码"
      // 6 个 48 宽的格子 + 5 个 12 的间距 = 348，加上左右内边距各 32，弹窗宽 412：格子左缘对齐文字，右缘对齐内边距
      width={412}
      placement="center"
      dialogClassName="km-dialog--divider"
      closeOnOverlayClick={false}
      closeOnEscKeydown={false}
      // 登录页上的弹窗代替登录卡片，背景保持登录页图片，不加黑色蒙层
      showOverlay={false}
      onClose={onCancel}
      // 打开动画结束后把光标放进验证码输入框（TDesign Dialog 会在动画结束时把焦点放到弹窗本身，autoFocus 会被它抢走）
      onOpened={() => holderRef.current?.querySelector("input")?.focus()}
      // 自定义页脚：输满 6 位「登录」才可点（用 confirmBtn 的 disabled 时按钮状态不会随输入刷新）
      footer={
        <div className="flex justify-end gap-2">
          <Button theme="default" variant="base" onClick={onCancel}>取消</Button>
          <Button theme="primary" variant="base" disabled={code.length < CODE_LENGTH} onClick={submit}>登录</Button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <p className="text-body text-primary-text">请输入验证器中显示的 6 位动态验证码</p>

        <div ref={holderRef}>
          <InputOTP
            maxLength={CODE_LENGTH}
            // 默认会把隐藏的 <input> 加宽 40px 给密码管理器图标留位置，超出容器就会在弹窗里冒出横向滚动条，这里关掉
            pushPasswordManagerStrategy="none"
            pattern={REGEXP_ONLY_DIGITS}
            inputMode="numeric"
            value={code}
            aria-label="动态验证码"
            aria-invalid={Boolean(error)}
            onChange={(value) => {
              setCode(value);
              setError("");
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") submit();
            }}
            containerClassName="w-full gap-0"
          >
            <InputOTPGroup className="w-full justify-between">
              {Array.from({ length: CODE_LENGTH }, (_, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  aria-invalid={Boolean(error)}
                  // 数字用 H4（24/32）+ Medium。字号用行内样式引用字体 token：InputOTPSlot 里 cn() 的 twMerge 会把 text-h4 当成颜色，
                  // 跟 text-primary-text 一起写时被丢掉，退回基础组件的 text-sm（14px）
                  style={{ fontSize: "var(--text-h4)", lineHeight: "var(--text-h4--line-height)" }}
                  // 48 × 56 的竖向格子（高比宽多一点）；4px 圆角、component-border 描边，聚焦格品牌蓝描边 + focus 外环（覆盖 shadcn 默认的圆角 / 环）
                  className="h-14 w-12 rounded-sm border border-component-border bg-container font-medium tabular-nums text-primary-text shadow-none first:rounded-l-sm first:border-l last:rounded-r-sm data-[active=true]:border-brand-base data-[active=true]:ring-[2px] data-[active=true]:ring-[color:var(--brand-color-focus)] aria-invalid:border-error"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
          {error && <p role="alert" className="mt-1 text-foot12 text-error">{error}</p>}
        </div>

        <p className="text-foot12 text-placeholder">如更换手机，无法获取验证码，请联系管理员做重新绑定。</p>
      </div>
    </Dialog>
  );
}
