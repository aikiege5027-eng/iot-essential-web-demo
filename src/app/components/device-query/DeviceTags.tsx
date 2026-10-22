import type { ReactNode } from "react";
// 这里不用 cn()：tailwind-merge 会把自定义字号类 text-foot12 当成颜色类，与 text-success 等冲突后丢掉
import cn from "clsx";
import type { OverviewDevice } from "../../data/deviceOverview";
import type { QueryDevice, RegistrationSource, SignalLevel } from "../../data/deviceQuery";
import { ChinaMobileIcon, ChinaUnicomIcon, CloudIcon, HeadsetIcon, SimCardIcon } from "../icons/device-icons";
import type { Language } from "./copy";

/**
 * 设备卡片右上角的四类标签，逐一对应 Figma IOT Delivery 的组件集：
 *   · ServiceTag            24/7 服务（Tag 标签，brand 浅底描边）
 *   · StewardStatusTag      云管家状态 5813:33401 —— 在线 / 已断连 N 天 / 已离线 N 天 / 未注册
 *   · RegistrationSourceTag 注册来源 8601:28788 —— AWS / IOT（文案 IESS）
 *   · SimStatusTag          物联卡状态 5813:33542 —— 移动 / 联通 × 信号强 / 中等 / 弱 / 无信号，另有「无卡」
 * 中英文案按组件的 Language 轴取值；高度统一 24px（12/20 文字 + 上下 2px）。
 */

function TagShell({ className, icon, children, label }: { className: string; icon?: ReactNode; children: ReactNode; label?: string }) {
  return (
    <span className={cn("inline-flex h-6 shrink-0 items-center gap-1 whitespace-nowrap border px-2 text-foot12 font-medium", className)}>
      {icon}
      {/* 有完整读法（label）时，可见文字对读屏隐藏，改读 label，避免只听到「AWS」「-65dBm」这类缩写 */}
      {label ? (
        <>
          <span aria-hidden="true" className="contents">
            {children}
          </span>
          <span className="sr-only">{label}</span>
        </>
      ) : (
        children
      )}
    </span>
  );
}

// ---------------------------------------------------------------------------

const SERVICE_COPY = { cn: { text: "24/7", label: "24/7 服务" }, en: { text: "24/7", label: "24/7 service" } };

export function ServiceTag({ language }: { language: Language }) {
  const t = SERVICE_COPY[language];
  return (
    <TagShell className="rounded-xs border-brand-base bg-brand-light text-brand" icon={<HeadsetIcon className="size-3.5" />} label={t.label}>
      {t.text}
    </TagShell>
  );
}

// ---------------------------------------------------------------------------

const STEWARD_COPY = {
  cn: {
    online: () => "云管家在线",
    disconnected: (days: number) => `云管家已断连${days}天`,
    offline: (days: number) => `云管家已离线${days}天`,
    unregistered: () => "未注册",
  },
  en: {
    online: () => "Connect",
    disconnected: (days: number) => `Controller Disconnected ${days} days`,
    offline: (days: number) => `Disconnected ${days} days`,
    unregistered: () => "Unprovisioned",
  },
};

/** 状态 → 样式：在线绿、断连橙、离线红、未注册中性灰（文字与云图标同为禁用灰）。 */
const STEWARD_STYLE: Record<OverviewDevice["status"], string> = {
  online: "border-success bg-success-light text-success",
  disconnected: "border-warning bg-warning-light text-warning",
  offline: "border-error bg-error-light text-error",
  unregistered: "border-component-border bg-page text-disabled",
};

export function StewardStatusTag({ device, language }: { device: Pick<OverviewDevice, "status" | "offlineDays">; language: Language }) {
  const text = STEWARD_COPY[language][device.status](device.offlineDays);
  return (
    <TagShell className={cn("justify-center rounded-sm", STEWARD_STYLE[device.status])} icon={<CloudIcon className="size-3.5" />}>
      {text}
    </TagShell>
  );
}

// ---------------------------------------------------------------------------

const SOURCE_LABEL = { cn: "注册来源", en: "Registration source" };

export function RegistrationSourceTag({ source, language }: { source: RegistrationSource; language: Language }) {
  return (
    // Figma 描边 color/grey/700 #43464f 不在本仓库色板内，取最接近的 secondary-text #676a72
    <TagShell className="rounded-xs border-secondary-text bg-component text-primary-text" label={`${SOURCE_LABEL[language]}：${source}`}>
      {source}
    </TagShell>
  );
}

// ---------------------------------------------------------------------------

const SIGNAL_COPY: Record<Language, Record<SignalLevel, string> & { noSim: string; carrier: Record<"mobile" | "unicom", string> }> = {
  cn: {
    strong: "信号强",
    medium: "信号中等",
    weak: "信号弱",
    none: "无信号",
    noSim: "物联卡未安装",
    carrier: { mobile: "中国移动", unicom: "中国联通" },
  },
  en: {
    strong: "Strong",
    medium: "Fair",
    weak: "Weak",
    none: "No Signal",
    noSim: "No SIM Card",
    carrier: { mobile: "China Mobile", unicom: "China Unicom" },
  },
};

export function SimStatusTag({ sim, language }: { sim: QueryDevice["sim"]; language: Language }) {
  const t = SIGNAL_COPY[language];
  const shell = "gap-2 justify-center rounded-sm border-stroke bg-secondarycontainer";

  if (!sim) {
    return (
      <TagShell className={cn(shell, "text-disabled")} icon={<SimCardIcon className="h-4 w-3" />}>
        {t.noSim}
      </TagShell>
    );
  }

  const CarrierIcon = sim.carrier === "mobile" ? ChinaMobileIcon : ChinaUnicomIcon;
  const value = sim.dbm === null ? "--" : `${sim.dbm}dBm`;
  return (
    <TagShell
      className={cn(shell, "text-primary-text")}
      icon={<CarrierIcon className="size-4" />}
      label={`${t.carrier[sim.carrier]} ${value} ${t[sim.level]}`}
    >
      <span className="tabular-nums">{value}</span>
      <span className="font-normal">({t[sim.level]})</span>
    </TagShell>
  );
}
