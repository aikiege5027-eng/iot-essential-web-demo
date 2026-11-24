import type { ReactNode } from "react";
import { Drawer } from "tdesign-react";

/**
 * 注册流程的底部动作面板（IOT Delivery 10291:153435 ActionSheet）：
 * 品牌色主操作（可带图标）+ 次操作 + 间隔条 + 取消。「扫一扫 / 从相册中选择」与「拍照片 / 从相册中选择」共用。
 * 样式由 `.km-registration-scan-sheet` 收口，总高 168（56 + 56 + 8 + 48）。
 */
export function RegistrationActionSheet({ visible, srTitle, primaryIcon, primaryLabel, secondaryLabel, cancelLabel, onPrimary, onSecondary, onClose }: {
  visible: boolean;
  srTitle: string;
  primaryIcon: ReactNode;
  primaryLabel: string;
  secondaryLabel: string;
  cancelLabel: string;
  onPrimary: () => void;
  onSecondary: () => void;
  onClose: () => void;
}) {
  return (
    <Drawer className="km-registration-scan-sheet" visible={visible} placement="bottom" size="168px" header={false} footer={false} closeBtn={false} onClose={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby="registration-action-sheet-title">
        <h2 id="registration-action-sheet-title" className="sr-only">{srTitle}</h2>
        <button type="button" className="km-registration-scan-sheet__action km-registration-scan-sheet__action--primary" onClick={onPrimary}>
          {primaryIcon}
          <span>{primaryLabel}</span>
        </button>
        <button type="button" className="km-registration-scan-sheet__action" onClick={onSecondary}>{secondaryLabel}</button>
        <div aria-hidden="true" className="km-registration-scan-sheet__divider" />
        <button type="button" className="km-registration-scan-sheet__action km-registration-scan-sheet__action--cancel" onClick={onClose}>{cancelLabel}</button>
      </div>
    </Drawer>
  );
}
