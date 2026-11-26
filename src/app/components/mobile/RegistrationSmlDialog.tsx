import { useEffect, useState } from "react";
import MobileDialog from "tdesign-mobile-react/es/dialog/Dialog";
import { RegistrationScanIcon } from "../icons/registration-icons";
import { DEMO_DTU_SERIAL, DEMO_SML_SERIAL } from "../../data/deviceRegistration";
import type { MobileLang } from "./MobileShell";

const smlCopy = {
  cn: {
    title: "输入SML 序列号",
    hint: "扫描SML上的二维码或手动输入序列号",
    label: "SML 序列号",
    scan: "扫一扫",
    placeholder: "请输入序列号",
    required: "请输入 SML 序列号。",
    cancel: "取消",
    confirm: "确认",
  },
  en: {
    title: "Enter SML serial number",
    hint: "Scan the QR code on the SML or enter its serial number manually",
    label: "SML serial number",
    scan: "Scan",
    placeholder: "Enter the serial number",
    required: "Enter the SML serial number.",
    cancel: "Cancel",
    confirm: "Confirm",
  },
} as const;
/** 云管家（DTU）侧：LCE 设备已注册 SML、后续补注册云管家时用同一个弹窗。 */
const cloudCopy = {
  cn: {
    ...smlCopy.cn,
    title: "输入云管家序列号",
    hint: "扫描DTU上的二维码或手动输入序列号",
    label: "云管家序列号",
    required: "请输入云管家序列号。",
  },
  en: {
    ...smlCopy.en,
    title: "Enter Cloud Butler serial number",
    hint: "Scan the QR code on the DTU or enter its serial number manually",
    label: "Cloud Butler serial number",
    required: "Enter the Cloud Butler serial number.",
  },
} as const;

/**
 * 已注册 310 设备补注册 SML 的序列号弹窗。
 * 沿用注册流程的 Mobile Dialog 样式（`.km-mobile-registration-dialog`），内容是一个序列号输入框：
 * 失焦即校验必填，点「确认」再校验一次，通过后把去掉首尾空格的序列号交给调用方。
 */
export function RegistrationSmlDialog({ language, visible, onCancel, onConfirm, kind = "sml" }: {
  language: MobileLang;
  /** 序列号属于哪一侧：SML（默认）或云管家。 */
  kind?: "sml" | "cloud";
  visible: boolean;
  onCancel: () => void;
  onConfirm: (serial: string) => void;
}) {
  const t = (kind === "cloud" ? cloudCopy : smlCopy)[language];
  const [serial, setSerial] = useState("");
  const [error, setError] = useState("");

  // 每次打开都是一个干净的输入框。
  useEffect(() => {
    if (!visible) return;
    setSerial("");
    setError("");
  }, [visible]);

  const validate = (value: string) => {
    const message = value.trim() ? "" : t.required;
    setError(message);
    return !message;
  };

  return (
    <MobileDialog
      className="km-mobile-registration-dialog km-mobile-sml-dialog"
      visible={visible}
      title={t.title}
      content={
        <>
          <p className="m-0 text-foot12 text-secondary-text">{t.hint}</p>
          <div className="km-mobile-sml-dialog__field">
            <div className="km-mobile-sml-dialog__control" data-invalid={error ? "true" : undefined}>
              <input
                className="km-mobile-sml-dialog__input"
                value={serial}
                aria-label={t.label}
                aria-invalid={Boolean(error)}
                autoComplete="off"
                placeholder={t.placeholder}
                onChange={(event) => {
                  setSerial(event.target.value);
                  if (error) setError("");
                }}
                onBlur={(event) => {
                  // 点扫码图标时输入框先失焦，此时不报必填错误。
                  if (event.relatedTarget instanceof HTMLElement && event.relatedTarget.dataset.smlScan) return;
                  validate(event.target.value);
                }}
              />
              <button
                type="button"
                data-sml-scan="true"
                aria-label={t.scan}
                className="km-registration-scan-trigger"
                onClick={() => { setSerial(kind === "cloud" ? DEMO_DTU_SERIAL : DEMO_SML_SERIAL); setError(""); }}
              >
                <RegistrationScanIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            {error && <p role="alert" className="km-mobile-sml-dialog__error">{error}</p>}
          </div>
        </>
      }
      cancelBtn={t.cancel}
      confirmBtn={t.confirm}
      closeOnOverlayClick={false}
      onCancel={onCancel}
      onConfirm={() => { if (validate(serial)) onConfirm(serial.trim()); }}
      onClose={onCancel}
    />
  );
}
