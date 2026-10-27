import { Radio } from "tdesign-react";
import type { PopupProps } from "tdesign-react";
import ExecutionTimePicker from "./ExecutionTimePicker";

/**
 * 批量操作「设置执行时间」步骤的完整内容（批量系统升级 / 批量配置更新共用）：
 * 执行方式单选（即时执行 / 计划执行）+ 对应的说明文案；选择计划执行时再显示计划执行时间选择器。
 *
 * - 即时执行：审批完成后即刻执行，不需要时间，提交时 `scheduledAt` 用 {@link IMMEDIATE_EXECUTION} 标记。
 * - 计划执行：必须选择合法的计划执行时间（规则见 ExecutionTimePicker）。
 */

export type ExecutionMode = "immediate" | "scheduled";

/** 即时执行时写入审批记录 `scheduledAt` 的标记值；展示处按语言转成「即时执行」/ "Run immediately" */
export const IMMEDIATE_EXECUTION = "immediate";

const copy = {
  cn: {
    groupLabel: "执行方式",
    immediate: "即时执行",
    scheduled: "计划执行",
    immediateHint: "当前为即时执行，点击提交后，任务将在审批完成后即刻执行。",
    scheduledHint: "当前为计划执行，将在审批结束后按指定时间执行任务；如在计划执行时间之后才通过审批，任务会在通过审批后即刻执行。",
    executionTime: "计划执行时间",
    placeholder: "请设定计划执行时间",
  },
  en: {
    groupLabel: "Execution mode",
    immediate: "Run immediately",
    scheduled: "Planned execution",
    immediateHint: "Run immediately: after you submit, the task runs as soon as the approval is completed.",
    scheduledHint:
      "Planned: after approval, the task runs at the planned time you set. If the request is approved after the planned time, the task runs immediately once approved.",
    executionTime: "Planned execution time",
    placeholder: "Set planned execution time",
  },
} as const;

export default function ExecutionModeField({
  idPrefix,
  language,
  mode,
  onModeChange,
  scheduledAt,
  onScheduledAtChange,
  popupProps,
}: {
  /** 用来生成时间选择器的 id，同一页面内需唯一 */
  idPrefix: string;
  language: "cn" | "en";
  mode: ExecutionMode;
  onModeChange: (mode: ExecutionMode) => void;
  scheduledAt: string;
  onScheduledAtChange: (value: string) => void;
  popupProps?: PopupProps;
}) {
  const t = copy[language];
  const pickerId = `${idPrefix}-execution-time`;

  return (
    <div className="flex w-full flex-col gap-3">
      {/* 不显示「执行方式」标题，但保留给读屏用户的分组名称 */}
      <Radio.Group value={mode} onChange={(value) => onModeChange(value as ExecutionMode)} aria-label={t.groupLabel}>
        <Radio value="immediate">{t.immediate}</Radio>
        <Radio value="scheduled">{t.scheduled}</Radio>
      </Radio.Group>

      <p className="text-body text-secondary-text">{mode === "immediate" ? t.immediateHint : t.scheduledHint}</p>

      {mode === "scheduled" && (
        <div className="flex w-full max-w-[500px] flex-col gap-2">
          <label htmlFor={pickerId} className="text-body font-normal text-primary-text">
            {t.executionTime}
            <span className="ml-0.5 text-error" aria-hidden="true">*</span>
          </label>
          <ExecutionTimePicker
            id={pickerId}
            language={language}
            value={scheduledAt}
            placeholder={t.placeholder}
            onChange={onScheduledAtChange}
            popupProps={popupProps}
          />
        </div>
      )}
    </div>
  );
}
