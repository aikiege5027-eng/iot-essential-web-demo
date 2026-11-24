import MobileDialog from "tdesign-mobile-react/es/dialog/Dialog";
import type { MobileLang } from "./MobileShell";

const copy = {
  cn: {
    title: "跳过安装检查",
    body: "若选择跳过功能检查，暂时无法保证实时数据中楼层信息的准确性，电梯会根据后续的持续运行情况逐步完成楼层学习。",
    back: "返回",
    skip: "跳过",
  },
  en: {
    title: "Skip installation checks",
    body: "If you skip the function checks, the floor information in live data cannot be guaranteed for now. The elevator completes floor learning gradually as it keeps running.",
    back: "Back",
    skip: "Skip",
  },
} as const;

/** 跳过安装检查的确认弹窗（IOT Delivery 10450:7227）：左侧浅色「返回」，右侧主色「跳过」。 */
export function RegistrationSkipDialog({ language, visible, onBack, onSkip }: {
  language: MobileLang;
  visible: boolean;
  onBack: () => void;
  onSkip: () => void;
}) {
  const t = copy[language];
  return (
    <MobileDialog
      className="km-mobile-registration-dialog"
      visible={visible}
      title={t.title}
      content={t.body}
      cancelBtn={t.back}
      confirmBtn={t.skip}
      closeOnOverlayClick={false}
      onCancel={onBack}
      onConfirm={onSkip}
      onClose={onBack}
    />
  );
}
