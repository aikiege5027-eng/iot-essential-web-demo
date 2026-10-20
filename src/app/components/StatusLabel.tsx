import type { ReactNode } from "react";
import { cn } from "./ui/utils";

/**
 * 表格 / 列表里的状态标识：小圆点 + 文字标签，圆点与文字由同一个文字色驱动。
 *
 * 语义色沿用设计系统的 IoT 状态映射：
 *   success 在线 / 成功 / 正常，error 故障 / 失败，warning 警告 / 待处理，brand 运行中，neutral 离线 / 已禁用。
 * 状态绝不只靠颜色传达，所以文字标签必填；圆点是装饰，对读屏隐藏。
 *
 * 仓库里已有多处手写的同款「圆点 + 文字」，新代码请用这个组件，旧调用点不主动迁移。
 */

export type StatusTone = "success" | "warning" | "error" | "brand" | "neutral";

const TONE_CLASS: Record<StatusTone, string> = {
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
  brand: "text-brand",
  neutral: "text-placeholder",
};

export function StatusLabel({ tone, children, className }: { tone: StatusTone; children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1 text-body", TONE_CLASS[tone], className)}>
      <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-current" />
      {children}
    </span>
  );
}
