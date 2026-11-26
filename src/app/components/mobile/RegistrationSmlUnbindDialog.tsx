import MobileDialog from "tdesign-mobile-react/es/dialog/Dialog";
import type { MobileLang } from "./MobileShell";

const copy = {
  cn: { title: "SML解绑", body: "是否确认要解绑SML设备？", cancel: "取消", confirm: "确认" },
  en: { title: "Unbind SML", body: "Are you sure you want to unbind the SML device?", cancel: "Cancel", confirm: "Confirm" },
} as const;

/**
 * 解绑 SML 的确认弹窗：确认类 Mobile Dialog（title + content），左侧浅色「取消」，右侧主色「确认」。
 * 只解绑 SML，云管家数据不受影响。样式沿用注册流程的 `.km-mobile-registration-dialog`。
 */
export function RegistrationSmlUnbindDialog({ language, visible, onCancel, onConfirm }: {
  language: MobileLang;
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  const t = copy[language];
  return (
    <MobileDialog
      className="km-mobile-registration-dialog"
      visible={visible}
      title={t.title}
      content={t.body}
      cancelBtn={t.cancel}
      confirmBtn={t.confirm}
      closeOnOverlayClick={false}
      onCancel={onCancel}
      onConfirm={onConfirm}
      onClose={onCancel}
    />
  );
}
