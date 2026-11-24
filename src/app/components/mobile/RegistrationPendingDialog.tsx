import MobileDialog from "tdesign-mobile-react/es/dialog/Dialog";
import type { MobileLang } from "./MobileShell";

const copy = {
  cn: {
    title: "设备注册尚未完成",
    body: "系统正在同步设备模块信息与实时数据，请留在当前页面，等待数据加载完毕后注册流程才能正常完成。",
    restart: "重新注册",
    stay: "留在当页",
  },
  en: {
    title: "Registration incomplete",
    body: "The system is synchronising module information and live data. Stay on this page until loading finishes, otherwise registration cannot complete.",
    restart: "Restart",
    stay: "Stay here",
  },
} as const;

/**
 * 注册流程中途返回时的确认弹窗（IOT Delivery 10291:153249）。
 * 使用 Mobile 设计系统的 Dialog，样式由 `.km-mobile-registration-dialog` 收口：
 * 左侧浅色「重新注册」，右侧主色「留在当页」。
 */
export function RegistrationPendingDialog({ language, visible, onRestart, onStay }: {
  language: MobileLang;
  visible: boolean;
  onRestart: () => void;
  onStay: () => void;
}) {
  const t = copy[language];
  return (
    <MobileDialog
      className="km-mobile-registration-dialog"
      visible={visible}
      title={t.title}
      content={t.body}
      cancelBtn={t.restart}
      confirmBtn={t.stay}
      closeOnOverlayClick={false}
      onCancel={onRestart}
      onConfirm={onStay}
      onClose={onStay}
    />
  );
}
