import { Button, Dialog } from "tdesign-react";
import { WarningCircleFilledIcon } from "./icons/warning-circle-filled";
/**
 * 仟帆「绑定 MFA」的两个提示窗口（登录页上，代替登录卡片显示）。
 *
 * 触发：新用户首次设置密码后，或账号 MFA 未绑定（管理员解绑后）时输完账号密码。
 *   · step="prompt"：说明平台启用 MFA、绑定指引已发到邮箱；「已绑定，输入验证码」进入动态验证码窗口，「下次再说」进入下一个提示。
 *   · step="later"：提示不绑定就无法进入系统；「我知道了」回到登录卡片，下次登录仍从 prompt 开始。
 *
 * 样式：绑定提示是无图标、带分割线的 Dialog；「下次再说」后的提醒是带警告图标（自绘「!」）、无分割线的款式（Figma 41952-300048 / 42005-300114）。邮件内容与扫码过程不模拟。绑定提示没有右上角关闭按钮，只能通过按钮继续；提醒窗口有关闭按钮，等同「我知道了」。
 */
type MfaBindPromptDialogProps = {
  /** 当前显示哪个窗口；空串表示都不显示 */
  step: "" | "prompt" | "later";
  onBind: () => void;
  onLater: () => void;
  onAcknowledge: () => void;
};
export default function MfaBindPromptDialog({ step, onBind, onLater, onAcknowledge }: MfaBindPromptDialogProps) {
  // 只在对应步骤时才挂载弹窗：弹窗关闭时 TDesign 会播放淡出动画，那段时间里它会和接着出现的下一个窗口 / 登录卡片同时可见。
  // 卸载后弹窗立刻消失，下一个界面直接出现，看起来像刷新回到登录页。
  return (
    <>
      {step === "prompt" && (
      <Dialog
        visible
        header="MFA绑定提示"
        width={480}
        placement="center"
        dialogClassName="km-dialog--divider"
        closeBtn={false}
        closeOnOverlayClick={false}
        closeOnEscKeydown={false}
        // 登录页上的弹窗代替登录卡片，背景保持登录页图片，不加黑色蒙层
        showOverlay={false}
        footer={
          <div className="flex justify-end gap-2">
            <Button theme="default" variant="base" onClick={onLater}>下次再说</Button>
            <Button theme="primary" variant="base" onClick={onBind}>已绑定，输入验证码</Button>
          </div>
        }
      >
        <div className="flex flex-col gap-2 text-body text-secondary-text">
          <p>为提升 IoT Essential 平台账号安全性，平台将启用多因素认证（MFA）。登录系统时，在账号密码之外，还需要提供 6 位动态验证码。</p>
          <p>
            {/* 重点句：加粗一档（Medium）、文字色深一档（主文字色） */}
            <span className="font-medium text-primary-text">MFA 绑定指引及动态验证码获取方法已发送至您的邮箱</span>，请及时查看并完成绑定。
          </p>
        </div>
      </Dialog>
      )}
      {step === "later" && (
      <Dialog
        visible
        // 设计稿的警告款图标是「!」；TDesign 的 theme="warning" 内置图标是「i」，所以这里不传 theme，自己画头部图标（24×24，与标题间距 8）
        header={
          <span className="flex items-center gap-2">
            <WarningCircleFilledIcon className="size-6 shrink-0 text-warning" />
            提示
          </span>
        }
        width={480}
        placement="center"
        onClose={onAcknowledge}
        closeOnOverlayClick={false}
        closeOnEscKeydown={false}
        showOverlay={false}
        footer={
          <div className="flex justify-end gap-2">
            <Button theme="primary" variant="base" onClick={onAcknowledge}>我知道了</Button>
          </div>
        }
      >
        <p className="text-body text-secondary-text">MFA 绑定为系统登录必要条件，未绑定将无法进入系统。请查收邮箱指引并及时完成绑定。</p>
      </Dialog>
      )}
    </>
  );
}
