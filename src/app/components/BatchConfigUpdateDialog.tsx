import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Button, Checkbox, Input, Steps, Tooltip } from "tdesign-react";
import ExecutionModeField, { IMMEDIATE_EXECUTION, type ExecutionMode } from "./ExecutionModeField";
import { isValidExecutionTime } from "./ExecutionTimePicker";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { cn } from "./ui/utils";
import { ResetDefaultIcon, ScrollLeftIcon, ScrollRightIcon } from "./icons/config-update-icons";

/**
 * 批量配置更新弹窗。
 * 设计稿：IOT Delivery「配置更新 / Overlay / Dialog_Content」node 9978:126122。
 *
 * 结构自上而下：步骤条 → 所选设备涉及的 KM 号 → 该 KM 下的 Profile 文件 → Profile 表单。
 * 默认展示第一个 KM 的第一个 Profile。
 *
 * 设计稿备注：
 *  - 字段默认只读；设计稿原为点击标签旁的编辑图标激活，现改为字段前的 Checkbox：
 *    勾选 = 该字段将被批量更新，输入框随之可编辑；至少勾选一个字段后「下一步」才可用；
 *  - KM 与 Profile 两行两侧的滚动按钮仅在横向超出时出现。
 *
 * 目前没有 Profile 接口，下方 Profile 文件与字段均为演示数据。
 */

type Language = "cn" | "en";

type FieldDef = { key: string; label: Record<Language, string>; original: (profileIndex: number) => string };

const PROFILE_FILES = [
  "v2/dtu-lce-5-0-config.json",
  "v2/dtu-lce-5-1-config.json",
  "v2/network-config.json",
  "v2/alarm-config.json",
  "v2/report-config.json",
  "v2/maintenance-config.json",
];

const TOP_FIELDS: FieldDef[] = [
  { key: "report-interval", label: { cn: "上报间隔（秒）", en: "Report interval (s)" }, original: (i) => String([60, 120, 30, 300, 60, 600][i % 6]) },
  { key: "heartbeat", label: { cn: "心跳周期（秒）", en: "Heartbeat period (s)" }, original: (i) => String([30, 30, 15, 60, 45, 120][i % 6]) },
];

const GROUP_FIELDS: FieldDef[] = [
  { key: "server-host", label: { cn: "服务器地址", en: "Server address" }, original: () => "iot.kone.com.cn" },
  { key: "server-port", label: { cn: "服务器端口", en: "Server port" }, original: () => "8883" },
  { key: "timeout", label: { cn: "连接超时（毫秒）", en: "Connection timeout (ms)" }, original: (i) => String([5000, 5000, 8000, 3000, 5000, 10000][i % 6]) },
  { key: "retry", label: { cn: "重试次数", en: "Retry count" }, original: (i) => String([3, 3, 5, 2, 3, 4][i % 6]) },
];

const copy = {
  cn: {
    title: "批量配置更新",
    hardwareTypes: (count: number) => `共${count}个硬件类型`,
    steps: ["更新Profile", "升级内容确认", "设置执行时间"],
    hardwareTypeTabs: "硬件类型",
    profileFiles: "Profile 文件",
    scrollLeft: "向左滚动",
    scrollRight: "向右滚动",
    change: "更改",
    resetDefault: "重置为默认值",
    fieldsSelectedCount: (count: number) => `当前有 ${count} 个字段将被批量更新`,
    fieldGroup: "嵌套配置",
    cancel: "取消",
    previous: "上一步",
    next: "下一步",
    submit: "提交",
    confirmHint: "请核对以下配置变更，确认无误后设置执行时间。",
    deviceCount: "更新设备数量",
    hardwareType: "硬件类型",
    profile: "Profile 文件",
    changes: "变更内容",
    deviceUnit: "台",
  },
  en: {
    title: "Batch configuration update",
    hardwareTypes: (count: number) => `${count} hardware type${count === 1 ? "" : "s"}`,
    steps: ["Update profile", "Confirm changes", "Set execution time"],
    hardwareTypeTabs: "Hardware types",
    profileFiles: "Profile files",
    scrollLeft: "Scroll left",
    scrollRight: "Scroll right",
    change: "Change",
    resetDefault: "Reset to default",
    fieldsSelectedCount: (count: number) => `${count} field${count === 1 ? "" : "s"} will be updated in bulk`,
    fieldGroup: "Nested configuration",
    cancel: "Cancel",
    previous: "Previous",
    next: "Next",
    submit: "Submit",
    confirmHint: "Review the configuration changes below, then set the execution time.",
    deviceCount: "Devices to update",
    hardwareType: "Hardware type",
    profile: "Profile file",
    changes: "Changes",
    deviceUnit: "",
  },
};

/** 某个 Profile 下已被激活编辑的字段：fieldKey → 当前输入值。 */
type ProfileEdits = Record<string, string>;
const editKey = (km: string, profile: string) => `${km}::${profile}`;

/** 横向滚动容器：仅在内容超出时对应方向才出现滚动按钮。 */
function useHorizontalOverflow() {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ canLeft: false, canRight: false });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const canLeft = el.scrollLeft > 1;
    const canRight = el.scrollLeft + el.clientWidth < el.scrollWidth - 1;
    setState((prev) => (prev.canLeft === canLeft && prev.canRight === canRight ? prev : { canLeft, canRight }));
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    Array.from(el.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [update]);

  const scrollBy = (direction: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: direction * Math.max(160, el.clientWidth * 0.6), behavior: "smooth" });
  };

  return { ref, ...state, update, scrollBy };
}

/**
 * 已勾选字段数量序号。
 * hover 时弹出气泡说明这些字段将被批量更新。气泡调用设计系统的 TDesign `Tooltip`
 * （theme="light"，对应 Figma「Tooltip 文字提示」：白底、14/22 主文字色、小箭头），
 * 浮层默认挂到 body，不会被 Tab 栏的横向滚动容器或弹窗的 overflow 裁掉。
 * 数字对读屏冗余，用 sr-only 文案表达同一句话，键盘和读屏用户也能获得。
 * 为 0 时不渲染，不占位。
 */
function SelectedCountBadge({ language, count, tone = "solid" }: { language: Language; count: number; tone?: "solid" | "soft" | "muted" | "neutral" }) {
  if (count <= 0) return null;
  const message = copy[language].fieldsSelectedCount(count);
  return (
    <>
      <Tooltip content={message} placement="top" showArrow theme="light">
        <span
          aria-hidden="true"
          className={cn(
            "inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full px-1 text-foot10 font-normal tabular-nums",
            // solid：当前选中的 KM 选项卡，实心品牌蓝；
            // muted：有勾选但未选中的 KM 选项卡，灰色（与「系统升级」弹窗里已选包但未选中的 KM 号对勾同色 icon-inactive）；
            // soft：浅蓝底 + 品牌蓝字，用于当前选中的 Profile 标签（本身已是浅蓝底），与标签文字同色；未选中的 Profile 标签用 neutral。
            // soft / muted 的对比度低于 AA，数字另有读屏文案兜底。
            tone === "soft" && "bg-brand-focus text-brand",
            tone === "solid" && "bg-brand-base text-white-text",
            tone === "muted" && "bg-icon-inactive text-white-text",
            // neutral：未选中的 Profile 标签，淡灰底 + 与标签文字相同的主文字色
            tone === "neutral" && "bg-component-hover text-primary-text",
          )}
        >
          {count}
        </span>
      </Tooltip>
      <span className="sr-only">{message}</span>
    </>
  );
}

/**
 * KM 号选项卡（对应 Figma normalTabs 默认主题 · medium · top）。
 *
 * 不直接用 TDesign Tabs：它在 Radix Dialog 的缩放入场动画中测量尺寸，
 * 会误判滚动位置，导致左侧操作按钮在起点就出现并遮住第一个选项卡；
 * 且其操作按钮底色为灰色，与设计稿的白底不一致。
 * 操作按钮：40×48、白底、内侧 1px 描边，投影向内容一侧扩散；仅在该方向还能滚动时出现。
 */
function KmTabs({ language, items, active, selectedCounts, onSelect }: { language: Language; items: string[]; active: string; selectedCounts: Record<string, number>; onSelect: (km: string) => void }) {
  const t = copy[language];
  const { ref, canLeft, canRight, update, scrollBy } = useHorizontalOverflow();
  const operationClass =
    "absolute top-0 z-10 flex h-12 w-10 items-center justify-center bg-container text-secondary-text hover:bg-container-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-base";

  const moveSelection = (event: KeyboardEvent<HTMLDivElement>) => {
    const delta = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = items[(items.indexOf(active) + delta + items.length) % items.length];
    onSelect(next);
    requestAnimationFrame(() => {
      const tab = ref.current?.querySelector<HTMLElement>(`[data-km="${next}"]`);
      tab?.focus();
      tab?.scrollIntoView({ inline: "nearest", block: "nearest" });
    });
  };

  return (
    <div className="relative shrink-0 border-b border-stroke bg-container">
      <div
        ref={ref}
        role="tablist"
        aria-label={t.hardwareTypeTabs}
        onScroll={update}
        onKeyDown={moveSelection}
        className="flex h-12 items-start overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((km) => {
          const selected = km === active;
          const count = selectedCounts[km] ?? 0;
          return (
            <button
              key={km}
              type="button"
              role="tab"
              data-km={km}
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => onSelect(km)}
              className={cn(
                "group relative flex h-12 shrink-0 items-start whitespace-nowrap p-2 text-body outline-none",
                selected ? "border-b-[3px] border-brand-base font-medium text-brand" : "font-normal text-secondary-text hover:text-primary-text",
              )}
            >
              <span className="flex items-center gap-1.5 rounded-xs px-2 py-[5px] group-focus-visible:outline-2 group-focus-visible:outline-brand-base">
                <SelectedCountBadge language={language} count={count} tone={selected ? "solid" : "muted"} />
                {km}
              </span>
            </button>
          );
        })}
      </div>
      {canLeft && (
        <button
          type="button"
          aria-label={t.scrollLeft}
          onClick={() => scrollBy(-1)}
          className={cn(operationClass, "left-0 border-r border-stroke shadow-[10px_0_10px_rgba(0,0,0,0.05)]")}
        >
          <ScrollLeftIcon className="size-4" />
        </button>
      )}
      {canRight && (
        <button
          type="button"
          aria-label={t.scrollRight}
          onClick={() => scrollBy(1)}
          className={cn(operationClass, "right-0 border-l border-stroke shadow-[-10px_0_10px_rgba(0,0,0,0.05)]")}
        >
          <ScrollRightIcon className="size-4" />
        </button>
      )}
    </div>
  );
}

function ProfileTags({ language, profiles, active, selectedCounts, onSelect }: { language: Language; profiles: string[]; active: string; selectedCounts: Record<string, number>; onSelect: (profile: string) => void }) {
  const t = copy[language];
  const { ref, canLeft, canRight, update, scrollBy } = useHorizontalOverflow();
  const arrowClass =
    "absolute top-1/2 z-10 flex size-6 -translate-y-1/2 items-center justify-center rounded-full bg-container text-secondary-text shadow-popover hover:text-primary-text focus-visible:outline-2 focus-visible:outline-brand-base";

  return (
    <div className="relative shrink-0">
      <div
        ref={ref}
        role="group"
        aria-label={t.profileFiles}
        onScroll={update}
        className="flex items-center gap-[7px] overflow-x-auto py-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {profiles.map((profile) => {
          const selected = profile === active;
          const count = selectedCounts[profile] ?? 0;
          return (
            <button
              key={profile}
              type="button"
              aria-pressed={selected}
              onClick={() => onSelect(profile)}
              className={cn(
                "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xs border px-2 py-0.5 text-foot12",
                selected
                  ? "border-brand-base bg-brand-light font-medium text-brand"
                  : "border-component-border bg-container font-normal text-primary-text hover:border-brand-base hover:text-brand",
              )}
            >
              <SelectedCountBadge language={language} count={count} tone={selected ? "soft" : "neutral"} />
              {profile}
            </button>
          );
        })}
      </div>
      {canLeft && (
        <button type="button" aria-label={t.scrollLeft} onClick={() => scrollBy(-1)} className={cn(arrowClass, "left-0")}>
          <ScrollLeftIcon className="size-4" />
        </button>
      )}
      {canRight && (
        <button type="button" aria-label={t.scrollRight} onClick={() => scrollBy(1)} className={cn(arrowClass, "right-0")}>
          <ScrollRightIcon className="size-4" />
        </button>
      )}
    </div>
  );
}

function ProfileField({
  language,
  idPrefix,
  def,
  profileIndex,
  edits,
  onToggle,
  onChange,
}: {
  language: Language;
  idPrefix: string;
  def: FieldDef;
  profileIndex: number;
  edits: ProfileEdits;
  onToggle: (key: string, original: string, checked: boolean) => void;
  onChange: (key: string, value: string) => void;
}) {
  const original = def.original(profileIndex);
  // 勾选 = 该字段会被批量更新，输入框随之可编辑；取消勾选会丢弃本次输入并恢复原值。
  const checked = def.key in edits;
  const label = def.label[language];
  const inputId = `${idPrefix}-${def.key}`;

  return (
    <div className="flex min-w-0 flex-col items-start pb-2">
      {/* flex 容器避免 inline 基线带来的额外留白；标题到输入框间距 4px */}
      <div className="flex w-full pb-1">
        <Checkbox
          className="iot-config-field-checkbox"
          checked={checked}
          onChange={(next) => {
            onToggle(def.key, original, next);
            // 勾选后立即聚焦输入框，方便直接输入。
            if (next) requestAnimationFrame(() => document.getElementById(inputId)?.querySelector("input")?.focus());
          }}
        >
          {label}
        </Checkbox>
      </div>
      {/* TDesign Input 把 id / aria-* 透传到外层容器而不是 <input>，所以用包裹式 label 给输入框命名 */}
      <label className="block w-full">
        <span className="sr-only">{label}</span>
        <Input
          id={inputId}
          className="w-full"
          size="medium"
          disabled={!checked}
          value={checked ? edits[def.key] : original}
          onChange={(value) => onChange(def.key, String(value))}
        />
      </label>
    </div>
  );
}

/** 勾选的字段：改过值显示「原值 → 新值」，未改值则只显示将写入的值。 */
function summarizeSelectedFields(language: Language, profileIndex: number, edits: ProfileEdits) {
  return [...TOP_FIELDS, ...GROUP_FIELDS]
    .filter((def) => def.key in edits)
    .map((def) => {
      const original = def.original(profileIndex);
      const next = edits[def.key];
      return next === original ? `${def.label[language]}：${next}` : `${def.label[language]}：${original} → ${next}`;
    });
}

export default function BatchConfigUpdateDialog({
  language,
  open,
  kmNumbers,
  deviceCountByKm,
  onClose,
  onComplete,
}: {
  language: Language;
  open: boolean;
  kmNumbers: string[];
  deviceCountByKm: Record<string, number>;
  onClose: () => void;
  onComplete: (submission: { scheduledAt: string; selectedProfiles: number }) => void;
}) {
  const t = copy[language];
  const [step, setStep] = useState(1);
  const [activeKm, setActiveKm] = useState(kmNumbers[0] ?? "");
  const [activeProfile, setActiveProfile] = useState(PROFILE_FILES[0]);
  const [editsByProfile, setEditsByProfile] = useState<Record<string, ProfileEdits>>({});
  const [executionMode, setExecutionMode] = useState<ExecutionMode>("immediate");
  const [scheduledAt, setScheduledAt] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);

  const profileIndex = PROFILE_FILES.indexOf(activeProfile);
  const currentKey = editKey(activeKm, activeProfile);
  const currentEdits = editsByProfile[currentKey] ?? {};

  // 至少勾选一个字段的 Profile：用于「下一步」可用性、提示条与确认页。
  const { selectedProfiles, selectedFieldTotal, selectedCountByKm } = useMemo(() => {
    const rows: { km: string; profile: string; changes: string[] }[] = [];
    const countByKm: Record<string, number> = {};
    let total = 0;
    for (const km of kmNumbers) {
      PROFILE_FILES.forEach((profile, index) => {
        const edits = editsByProfile[editKey(km, profile)];
        if (!edits) return;
        const count = Object.keys(edits).length;
        total += count;
        countByKm[km] = (countByKm[km] ?? 0) + count;
        rows.push({ km, profile, changes: summarizeSelectedFields(language, index, edits) });
      });
    }
    return { selectedProfiles: rows, selectedFieldTotal: total, selectedCountByKm: countByKm };
  }, [editsByProfile, kmNumbers, language]);

  // 当前 KM 下各 Profile 已勾选的字段数，用于 Profile 标签上的序号。
  const selectedCountByProfile = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const profile of PROFILE_FILES) counts[profile] = Object.keys(editsByProfile[editKey(activeKm, profile)] ?? {}).length;
    return counts;
  }, [editsByProfile, activeKm]);

  const setCurrentEdits = (updater: (current: ProfileEdits) => ProfileEdits) =>
    setEditsByProfile((all) => {
      const next = updater(all[currentKey] ?? {});
      const { [currentKey]: _removed, ...rest } = all;
      return Object.keys(next).length === 0 ? rest : { ...rest, [currentKey]: next };
    });

  const toggleField = (key: string, original: string, checked: boolean) =>
    setCurrentEdits((current) => {
      if (!checked) {
        const { [key]: _removed, ...rest } = current;
        return rest;
      }
      return { ...current, [key]: original };
    });

  const changeField = (key: string, value: string) => setCurrentEdits((current) => ({ ...current, [key]: value }));
  const resetProfile = () => setCurrentEdits(() => ({}));

  const selectKm = (km: string) => {
    setActiveKm(km);
    setActiveProfile(PROFILE_FILES[0]);
  };

  // 步骤顺序：更新 Profile → 升级内容确认 → 设置执行时间（最后一步提交）
  const canAdvance = step === 3 ? selectedFieldTotal > 0 && (executionMode === "immediate" || isValidExecutionTime(scheduledAt)) : selectedFieldTotal > 0;
  const goNext = () => {
    if (step < 3) setStep(step + 1);
    else onComplete({ scheduledAt: executionMode === "immediate" ? IMMEDIATE_EXECUTION : `${scheduledAt}:00`, selectedProfiles: selectedProfiles.length });
  };

  const idPrefix = `config-${activeKm}-${profileIndex}`.replace(/[^a-zA-Z0-9_-]/g, "");

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()}>
      <DialogContent
        // 打开时把焦点放在弹窗本身，而不是第一个选项卡，避免一打开就出现焦点环。
        onOpenAutoFocus={(event) => {
          event.preventDefault();
          (event.currentTarget as HTMLElement).focus();
        }}
        className="flex h-[634px] max-h-[calc(100vh-2rem)] flex-col gap-0 overflow-hidden border-stroke bg-container p-0 shadow-modal sm:max-w-[900px] [&>button]:right-8 [&>button]:top-7"
      >
        <DialogHeader className="shrink-0 flex-row items-center gap-2 border-b border-stroke px-8 py-6 pr-16 text-left">
          <DialogTitle className="text-h7 font-semibold text-primary-text">{t.title}</DialogTitle>
          <DialogDescription className="text-body text-secondary-text">{t.hardwareTypes(kmNumbers.length)}</DialogDescription>
        </DialogHeader>

        <div ref={dialogRef} className="flex min-h-0 flex-1 flex-col gap-4 px-8 pb-6 pt-3">
          <Steps current={step - 1} layout="horizontal" className="iot-config-steps shrink-0">
            {t.steps.map((title) => (
              <Steps.StepItem key={title} title={title} />
            ))}
          </Steps>

          {step === 1 && (
            <>
              <KmTabs language={language} items={kmNumbers} active={activeKm} selectedCounts={selectedCountByKm} onSelect={selectKm} />
              <ProfileTags language={language} profiles={PROFILE_FILES} active={activeProfile} selectedCounts={selectedCountByProfile} onSelect={setActiveProfile} />

              <div className="min-h-0 flex-1 overflow-y-auto">
                <section aria-label={activeProfile} className="flex flex-col gap-4 rounded-sm border border-component-border px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      <h2 className="truncate text-h7 font-medium text-primary-text">{activeProfile}</h2>
                      <Button size="small" theme="primary" variant="outline" shape="rectangle">
                        {t.change}
                      </Button>
                    </div>
                    <Button
                      size="small"
                      theme="primary"
                      variant="text"
                      icon={<ResetDefaultIcon className="size-3.5" />}
                      onClick={resetProfile}
                    >
                      {t.resetDefault}
                    </Button>
                  </div>
                  <hr className="m-0 border-0 border-t border-stroke" />

                  <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-x-3">
                      {TOP_FIELDS.map((def) => (
                        <ProfileField key={def.key} language={language} idPrefix={idPrefix} def={def} profileIndex={profileIndex} edits={currentEdits} onToggle={toggleField} onChange={changeField} />
                      ))}
                    </div>
                    <div role="group" aria-label={t.fieldGroup} className="rounded-sm border border-component-border p-5">
                      <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                        {GROUP_FIELDS.map((def) => (
                          <ProfileField key={def.key} language={language} idPrefix={idPrefix} def={def} profileIndex={profileIndex} edits={currentEdits} onToggle={toggleField} onChange={changeField} />
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </>
          )}

          {step === 2 && (
            <div className="min-h-0 flex-1 overflow-y-auto">
              <p className="text-body text-secondary-text">{t.confirmHint}</p>
              {/* 首列左 / 末列右边距 = 表格统一边距；末列 w-px + nowrap 收到内容宽度，右侧不留多余空白 */}
              {/* 外框和圆角画在外层 div 上：border-collapse 的 table 不支持 border-radius / overflow，画在 table 上会丢失；最后一行不再画底线，避免与外框重叠。与批量系统升级的确认表格一致 */}
              <div className="mt-4 overflow-hidden rounded-md border border-stroke">
              <table className="w-full border-collapse text-left text-foot12">
                <thead className="bg-secondarycontainer text-placeholder">
                  <tr>
                    <th scope="col" className="w-[calc(144px+var(--iot-table-edge-start))] border-b border-stroke py-2 pl-[var(--iot-table-edge-start)] pr-2 font-normal">{t.hardwareType}</th>
                    <th scope="col" className="w-[220px] border-b border-stroke px-2 py-2 font-normal">{t.profile}</th>
                    <th scope="col" className="border-b border-stroke px-2 py-2 font-normal">{t.changes}</th>
                    <th scope="col" className="w-px whitespace-nowrap border-b border-stroke py-2 pl-2 pr-[var(--iot-table-edge-end)] font-normal">{t.deviceCount}</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedProfiles.map((row) => (
                    <tr key={editKey(row.km, row.profile)} className="bg-container align-top last:[&>td]:border-b-0">
                      <td className="border-b border-stroke py-2 pl-[var(--iot-table-edge-start)] pr-2 text-primary-text">{row.km}</td>
                      <td className="border-b border-stroke px-2 py-2 text-primary-text">{row.profile}</td>
                      <td className="border-b border-stroke px-2 py-2 text-primary-text">
                        <ul className="m-0 list-none p-0">
                          {row.changes.map((change) => (
                            <li key={change}>{change}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="whitespace-nowrap border-b border-stroke py-2 pl-2 pr-[var(--iot-table-edge-end)] tabular-nums text-primary-text">
                        {deviceCountByKm[row.km] ?? 0}
                        {t.deviceUnit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
          )}

          {step === 3 && (
            // overflow-y-auto 会连带裁掉横向溢出：输入框聚焦时 2px 的浅蓝外环在最左边被切掉。
            // 容器左右各外扩 4px 再用内边距补回，输入框位置不变，外环完整显示。
            <div className="-mx-1 min-h-0 flex-1 overflow-y-auto px-1">
              <ExecutionModeField
                idPrefix="config"
                language={language}
                mode={executionMode}
                onModeChange={setExecutionMode}
                scheduledAt={scheduledAt}
                onScheduledAtChange={setScheduledAt}
                // Radix Dialog 会让 body 外的元素不可点击，浮层需挂到弹窗内部。
                popupProps={{ attach: () => dialogRef.current ?? document.body }}
              />
            </div>
          )}
        </div>

        <footer className="flex shrink-0 items-center justify-end gap-2 border-t border-stroke px-8 py-6">
          <Button size="medium" theme="default" variant="base" onClick={step === 1 ? onClose : () => setStep(step - 1)}>
            {step === 1 ? t.cancel : t.previous}
          </Button>
          <Button size="medium" theme="primary" variant="base" disabled={!canAdvance} onClick={goNext}>
            {step === 3 ? t.submit : t.next}
          </Button>
        </footer>
      </DialogContent>
    </Dialog>
  );
}
