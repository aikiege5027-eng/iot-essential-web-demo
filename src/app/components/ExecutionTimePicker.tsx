import { DatePicker } from "tdesign-react";
import type { PopupProps } from "tdesign-react";

/**
 * 批量操作「执行时间」选择器（批量系统升级 / 批量配置更新共用）。
 *
 * 规则：
 * - 精确到分钟，值格式 `YYYY-MM-DD HH:mm`。
 * - 只能选整点或半点（分钟 00 / 30）。
 * - 不早于「当前时间 + 30 分钟」向上取整到的整点 / 半点。
 *
 * 基于 TDesign `DatePicker`（`enableTimePicker`），面板形态对应 Figma
 * China Design system for web 的 DatePicker 面板 `mode = dateTimes`。
 */

const SLOT_MINUTES = 30;
const LEAD_MINUTES = 30;
export const EXECUTION_TIME_FORMAT = "YYYY-MM-DD HH:mm";

const pad = (value: number) => String(value).padStart(2, "0");

/** 最早可选的执行时间：当前时间 + 30 分钟，再向上取整到整点 / 半点。 */
export function getEarliestExecutionTime(now: Date = new Date()): Date {
  const date = new Date(now.getTime() + LEAD_MINUTES * 60_000);
  if (date.getSeconds() > 0 || date.getMilliseconds() > 0) date.setMinutes(date.getMinutes() + 1);
  date.setSeconds(0, 0);
  const remainder = date.getMinutes() % SLOT_MINUTES;
  if (remainder > 0) date.setMinutes(date.getMinutes() + SLOT_MINUTES - remainder);
  return date;
}

export function formatExecutionTime(date: Date): string {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function parseExecutionTime(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})/.exec(value);
  if (!match) return null;
  const [, year, month, day, hour, minute] = match.map(Number);
  return new Date(year, month - 1, day, hour, minute, 0, 0);
}

/** 值是否符合规则（用于下一步 / 提交前校验）。 */
export function isValidExecutionTime(value: string, now: Date = new Date()): boolean {
  const date = parseExecutionTime(value);
  if (!date) return false;
  return date.getMinutes() % SLOT_MINUTES === 0 && date.getTime() >= getEarliestExecutionTime(now).getTime();
}

/** 把任意值修正到合法范围：先向上取整到半点，再不早于最早可选时间。 */
function normalizeExecutionTime(value: string): string {
  const date = parseExecutionTime(value);
  if (!date) return "";
  const remainder = date.getMinutes() % SLOT_MINUTES;
  if (remainder > 0) date.setMinutes(date.getMinutes() + SLOT_MINUTES - remainder);
  const earliest = getEarliestExecutionTime();
  return formatExecutionTime(date.getTime() < earliest.getTime() ? earliest : date);
}

const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();

const copy = {
  cn: { invalid: "执行时间需晚于当前时间 30 分钟，且为整点或半点。" },
  en: { invalid: "Pick a time at least 30 minutes from now, on the hour or half hour." },
} as const;

export default function ExecutionTimePicker({
  id,
  language,
  value,
  placeholder,
  onChange,
  popupProps,
}: {
  id?: string;
  language: "cn" | "en";
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  popupProps?: PopupProps;
}) {
  const invalid = Boolean(value) && !isValidExecutionTime(value);

  return (
    <DatePicker
      inputProps={id ? { id } : undefined}
      enableTimePicker
      clearable
      size="medium"
      format={EXECUTION_TIME_FORMAT}
      value={value}
      placeholder={placeholder}
      // 只在选择当天之前的日期时整天置灰
      disableDate={(date) => startOfDay(new Date(date as Date)) < startOfDay(getEarliestExecutionTime())}
      // 选中日期是最早可选日时，隐藏早于最早时间的小时 / 分钟
      disableTime={(time) => {
        const earliest = getEarliestExecutionTime();
        if (startOfDay(time) !== startOfDay(earliest)) return {};
        const hour = Array.from({ length: earliest.getHours() }, (_, index) => index);
        const minute = time.getHours() === earliest.getHours() ? Array.from({ length: earliest.getMinutes() }, (_, index) => index) : [];
        return { hour, minute };
      }}
      // 小时步长 1，分钟步长 30 → 分钟列只有 00 / 30
      timePickerProps={{ steps: [1, SLOT_MINUTES], hideDisabledTime: true }}
      status={invalid ? "error" : "default"}
      tips={invalid ? copy[language].invalid : undefined}
      onChange={(next) => onChange(next ? normalizeExecutionTime(String(next)) : "")}
      // km-execution-time-panel：时间面板只有时、分两列，宽度按两列算（样式见 tdesign-patches.css）
      // 弹出面板不窄于输入框，右边缘与输入框对齐；多出的宽度由日历区吸收（见 CSS），时间列保持 72px
      popupProps={{
        overlayInnerStyle: (trigger: HTMLElement) => ({ minWidth: trigger.offsetWidth }),
        ...popupProps,
        overlayClassName: ["km-execution-time-panel", popupProps?.overlayClassName] as PopupProps["overlayClassName"],
      }}
    />
  );
}
