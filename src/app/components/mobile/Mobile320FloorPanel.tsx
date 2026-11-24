import { useEffect, useState, type ReactNode } from "react";
import { DetailSection } from "../device-detail/DetailSection";
import { RegistrationCheckboxIcon, RegistrationCheckCircleIcon, RegistrationUploadAddIcon } from "../icons/registration-icons";
import elevatorPanelPhoto from "../../../assets/registration-elevator-panel.jpg";
import type { RegistrationFloor } from "../../data/deviceRegistration";
import type { MobileLang } from "./MobileShell";

/**
 * Connection 320 注册流程「楼层信息」页签（IOT Delivery 12360:76330「楼层信息输入」）。
 *
 * 流程：未上传（上传区）→ 上传后识别中 → 识别完成 → 「生成中」提示 → 填写页（电梯面板照片 / 总楼层数 / 平均层间距 /
 * 楼层标签及楼层间距）。照片拍摄 / 选择由父级的动作面板完成，这里只负责展示和表单。
 */
export type FloorPhotoState = "idle" | "recognising" | "recognised" | "generating" | "done";

const copy = {
  cn: {
    photo: "电梯面板照片", count: "总楼层数", spacing: "平均层间距", labels: "楼层标签及楼层间距",
    uploadHint: "请正面拍摄并完整包含全部楼层按键，避免反光、模糊、倾斜或手指遮挡，支持照片格式jpg、png，文件大小在10MB以内。",
    upload: "上传照片/拍照", analysing: "正在进行照片检查，以及楼层信息识别，完成后将自动生成楼层数及楼层标签内容。",
    recognising: "正在识别总楼层与楼层按键标签", recognised: "总楼层与楼层按键标签识别完成", removePhoto: "移除照片",
    photoOk: "照片信息识别成功", photoOkHint: "如重新上传照片，楼层信息内容将重新分析。", viewLarge: "查看大图", replace: "更换照片", close: "关闭",
    countHint: "输入总楼层数后，点击生成楼层标签，自动生成楼层信息", countPlaceholder: "请输入总楼层数", generate: "生成楼层标签",
    spacingHint: "输入平均层间距后，点击填充，自动填写楼层间距", spacingPlaceholder: "请输入平均层间距（cm）", fill: "填充",
    labelsHint: "至多勾选两个停靠最多的楼层作为基准楼层并安装磁条，开始连接时确保网络通畅，过程中不要移动电梯",
    base: "基准楼层", mark: "标记楼层", gap: "楼层间距", gapPlaceholder: "楼层间距", floorSuffix: "层",
  },
  en: {
    photo: "Elevator panel photo", count: "Total floors", spacing: "Average floor spacing", labels: "Floor labels and spacing",
    uploadHint: "Photograph the panel from the front and keep every floor button in view. Avoid glare, blur, tilt or fingers. JPG or PNG, up to 10 MB.",
    upload: "Upload or take a photo", analysing: "Checking the photo and recognising floor information. Floor count and labels are generated when it finishes.",
    recognising: "Recognising total floors and button labels", recognised: "Total floors and button labels recognised", removePhoto: "Remove photo",
    photoOk: "Photo recognised", photoOkHint: "Uploading a new photo analyses the floor information again.", viewLarge: "View larger", replace: "Replace photo", close: "Close",
    countHint: "Enter the total floors, then generate floor labels to create the floor list", countPlaceholder: "Enter the total floors", generate: "Generate labels",
    spacingHint: "Enter the average spacing, then fill to apply it to every floor gap", spacingPlaceholder: "Enter the average spacing (cm)", fill: "Fill",
    labelsHint: "Tick at most two of the busiest floors as base floors and install magnet strips. Keep the network stable and do not move the elevator while connecting.",
    base: "Base floor", mark: "Floor label", gap: "Spacing", gapPlaceholder: "Spacing", floorSuffix: "F",
  },
} as const;

export function Mobile320FloorPanel({ language, photoState, floors, floorCount, averageSpacing, floorError, onUpload, onRemovePhoto, onCount, onGenerate, onSpacing, onFill, onFloor }: {
  language: MobileLang;
  photoState: FloorPhotoState;
  floors: RegistrationFloor[];
  floorCount: string;
  averageSpacing: string;
  floorError: string;
  onUpload: () => void;
  onRemovePhoto: () => void;
  onCount: (value: string) => void;
  onGenerate: () => void;
  onSpacing: (value: string) => void;
  onFill: () => void;
  onFloor: (index: number, update: Partial<RegistrationFloor>) => void;
}) {
  const t = copy[language];
  const [viewerOpen, setViewerOpen] = useState(false);
  const baseCount = floors.filter((floor) => floor.base).length;
  const canFill = Number(averageSpacing) > 0 && Number.isFinite(Number(averageSpacing));

  return (
    <div id="connection-320-floor-panel" role="tabpanel" className="flex flex-col gap-3">
      {photoState === "idle" && (
        <FloorCard title={t.photo} titleId="connection-320-photo-title" required>
          <div className="flex flex-col gap-2 p-3">
            <p className="m-0 text-foot12 text-placeholder">{t.uploadHint}</p>
            <button
              type="button"
              onClick={onUpload}
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-0 bg-secondarycontainer py-[54px] text-foot12 font-normal text-secondary-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
            >
              <RegistrationUploadAddIcon aria-hidden="true" className="size-8" />
              {t.upload}
            </button>
          </div>
        </FloorCard>
      )}

      {(photoState === "recognising" || photoState === "recognised" || photoState === "generating") && (
        <FloorCard title={t.photo} titleId="connection-320-photo-title" required>
          <div className="flex flex-col gap-2 p-3">
            <p className="m-0 text-foot12 text-placeholder">{t.analysing}</p>
            {photoState === "recognising" ? (
              <div className="relative aspect-[1672/941] w-full overflow-hidden rounded-md bg-metric-tile-neutral">
                <img alt="" src={elevatorPanelPhoto} className="size-full object-cover" />
                <RemovePhotoButton label={t.removePhoto} onClick={onRemovePhoto} />
              </div>
            ) : (
              // 识别完成后的照片：191×180 的裁切窗口，居中放在 250 灰底上（10291:152487）。
              <div className="relative flex h-[179.5px] w-full items-center justify-center overflow-hidden rounded-md bg-metric-tile-neutral">
                <div className="relative h-[180px] w-[191px] overflow-hidden">
                  <img alt="" src={elevatorPanelPhoto} className="absolute top-0 left-[-35.08%] h-[99.74%] w-[167.02%] max-w-none" />
                </div>
                <RemovePhotoButton label={t.removePhoto} onClick={onRemovePhoto} />
              </div>
            )}
            <p className="m-0 flex items-center gap-2 text-body text-primary-text">
              {photoState === "recognising"
                ? <span aria-hidden="true" className="size-4 shrink-0 animate-spin rounded-full border-2 border-current/25 border-t-current" />
                : <RegistrationCheckCircleIcon aria-hidden="true" className="size-4 shrink-0 text-success" />}
              {photoState === "recognising" ? t.recognising : t.recognised}
            </p>
          </div>
        </FloorCard>
      )}

      {photoState === "done" && (
        <>
          <FloorCard title={t.photo} titleId="connection-320-photo-title" required>
            <div className="flex items-start gap-4 p-3">
              <img alt="" src={elevatorPanelPhoto} className="h-20 w-[120px] shrink-0 rounded-md bg-metric-tile-neutral object-cover" />
              <div className="flex min-w-0 flex-1 flex-col">
                <p className="m-0 flex items-center gap-2 text-body text-primary-text">
                  <RegistrationCheckCircleIcon aria-hidden="true" className="size-4 shrink-0 text-success" />
                  {t.photoOk}
                </p>
                <p className="m-0 text-foot12 text-placeholder">{t.photoOkHint}</p>
                <div className="flex gap-2 text-body">
                  <TextLink onClick={() => setViewerOpen(true)}>{t.viewLarge}</TextLink>
                  <TextLink onClick={onUpload}>{t.replace}</TextLink>
                </div>
              </div>
            </div>
          </FloorCard>

          <FloorCard title={t.count} titleId="connection-320-count-title" required>
            <div className="flex flex-col pt-2">
              <p className="m-0 px-4 text-foot12 text-placeholder">{t.countHint}</p>
              <div className="km-registration-field km-registration-field--card">
                <input
                  className="km-registration-field__input"
                  value={floorCount}
                  inputMode="numeric"
                  placeholder={t.countPlaceholder}
                  aria-labelledby="connection-320-count-title"
                  aria-invalid={Boolean(floorError)}
                  onChange={(event) => onCount(event.target.value.replace(/\D/g, ""))}
                />
                <button type="button" className="km-registration-field__action" onClick={onGenerate}>{t.generate}</button>
              </div>
              {floorError && <p role="alert" className="m-0 px-4 pb-3 text-foot12 text-error">{floorError}</p>}
            </div>
          </FloorCard>

          <FloorCard title={t.spacing} titleId="connection-320-spacing-title" required>
            <div className="flex flex-col pt-2">
              <p className="m-0 px-4 text-foot12 text-placeholder">{t.spacingHint}</p>
              <div className="km-registration-field km-registration-field--card">
                <input
                  className="km-registration-field__input"
                  value={averageSpacing}
                  inputMode="decimal"
                  placeholder={t.spacingPlaceholder}
                  aria-labelledby="connection-320-spacing-title"
                  onChange={(event) => onSpacing(event.target.value.replace(/[^\d.]/g, ""))}
                />
                <button type="button" className="km-registration-field__action" disabled={!canFill} onClick={onFill}>{t.fill}</button>
              </div>
            </div>
          </FloorCard>

          <FloorCard title={t.labels} titleId="connection-320-labels-title">
            <div className="flex flex-col gap-2 pt-2 pb-4">
              <p className="m-0 px-4 text-foot12 text-placeholder">{t.labelsHint}</p>
              <div className="flex items-start gap-2 px-3">
                <div className={`flex shrink-0 flex-col gap-4 ${floors.length >= 10 ? "w-[76px]" : "w-16"}`}>
                  <ColumnTitle>{t.base}</ColumnTitle>
                  <div className="flex flex-col gap-6">
                    {floors.map((floor, index) => {
                      const disabled = !floor.base && baseCount >= 2;
                      return (
                        <div key={index} className="flex items-center justify-between">
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked={floor.base}
                            aria-label={`${t.base} ${index + 1}${t.floorSuffix}`}
                            disabled={disabled}
                            onClick={() => onFloor(index, { base: !floor.base })}
                            className={`flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base disabled:cursor-not-allowed disabled:opacity-40 ${floor.base ? "text-brand" : ""}`}
                          >
                            <RegistrationCheckboxIcon aria-hidden="true" checked={floor.base} className="size-6" />
                          </button>
                          <span className="text-h7 font-medium whitespace-nowrap text-primary-text">{index + 1}{language === "cn" ? "层" : "F"}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <ColumnTitle required>{t.mark}</ColumnTitle>
                  {floors.map((floor, index) => (
                    <input
                      key={index}
                      className="km-floor-input"
                      value={floor.label}
                      aria-label={`${index + 1}${t.floorSuffix} ${t.mark}`}
                      onChange={(event) => onFloor(index, { label: event.target.value })}
                    />
                  ))}
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <ColumnTitle>{t.gap}</ColumnTitle>
                  {floors.map((floor, index) => (
                    <input
                      key={index}
                      className="km-floor-input"
                      value={index === floors.length - 1 ? "" : floor.spacing}
                      disabled={index === floors.length - 1}
                      inputMode="decimal"
                      placeholder={index === floors.length - 1 ? undefined : t.gapPlaceholder}
                      aria-label={`${index + 1}${t.floorSuffix} ${t.gap}`}
                      onChange={(event) => onFloor(index, { spacing: event.target.value.replace(/[^\d.]/g, "") })}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FloorCard>
        </>
      )}

      {viewerOpen && <PhotoViewer label={t.close} onClose={() => setViewerOpen(false)} />}
    </div>
  );
}

function FloorCard({ title, titleId, required = false, children }: { title: string; titleId: string; required?: boolean; children: ReactNode }) {
  return (
    <DetailSection
      title={<span>{title}{required && <span aria-hidden="true" className="ml-1 font-normal text-error">*</span>}</span>}
      titleId={titleId}
    >
      {children}
    </DetailSection>
  );
}

function ColumnTitle({ children, required = false }: { children: ReactNode; required?: boolean }) {
  return (
    <p className="m-0 text-center text-body font-medium text-placeholder">
      {children}
      {required && <span aria-hidden="true" className="ml-1 font-normal text-error">*</span>}
    </p>
  );
}

function TextLink({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="cursor-pointer rounded-xs border-0 bg-transparent p-0 text-body font-normal text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base">
      {children}
    </button>
  );
}

/** 照片右上角的 24×24 移除按钮（Figma Group 1739330328：#141414 40% 底，左下 6px 圆角，白色关闭图标）。 */
function RemovePhotoButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="absolute top-0 right-0 flex size-6 cursor-pointer items-center justify-center rounded-none rounded-bl-md border-0 bg-primary-text/40 p-0 text-white-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
    >
      <svg aria-hidden="true" viewBox="0 0 19.2 19.2" className="size-[19px]">
        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M9.6 10.3796L13.6204 14.4L14.4 13.6204L10.3796 9.6L14.4 5.57962L13.6204 4.8L9.6 8.82038L5.57962 4.8L4.8 5.57962L8.82038 9.6L4.8 13.6204L5.57962 14.4L9.6 10.3796Z" />
      </svg>
    </button>
  );
}

function PhotoViewer({ label, onClose }: { label: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);
  return (
    <div role="dialog" aria-modal="true" aria-label={label} className="fixed inset-0 z-[5000] flex items-center justify-center bg-primary-text/90" onClick={onClose}>
      <img alt="" src={elevatorPanelPhoto} className="max-h-full max-w-full object-contain" />
      <button type="button" aria-label={label} onClick={onClose} className="absolute top-4 right-4 flex size-8 cursor-pointer items-center justify-center rounded-full border-0 bg-white-text/20 p-0 text-white-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
        <svg aria-hidden="true" viewBox="0 0 19.2 19.2" className="size-5">
          <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M9.6 10.3796L13.6204 14.4L14.4 13.6204L10.3796 9.6L14.4 5.57962L13.6204 4.8L9.6 8.82038L5.57962 4.8L4.8 5.57962L8.82038 9.6L4.8 13.6204L5.57962 14.4L9.6 10.3796Z" />
        </svg>
      </button>
    </div>
  );
}
