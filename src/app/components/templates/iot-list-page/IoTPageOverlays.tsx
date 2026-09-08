import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { AlertTriangle, CheckCircle2, CircleAlert, Info } from "lucide-react";
import { Button } from "tdesign-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../../ui/sheet";
import { cn } from "../../ui/utils";

export type IoTFieldStatus = "success" | "warning" | "error" | "neutral";

export interface IoTFieldItem {
  label: string;
  value: ReactNode;
  status?: IoTFieldStatus;
}

const statusClasses: Record<IoTFieldStatus, { text: string; dot: string }> = {
  success: { text: "text-success", dot: "bg-surface-success" },
  warning: { text: "text-warning", dot: "bg-surface-warning" },
  error: { text: "text-error", dot: "bg-surface-alert" },
  neutral: { text: "text-secondary-text", dot: "bg-component-hover" },
};

/** Drawer 与详情卡片共用的“字段名称 / 字段内容”列表。 */
export function IoTFieldList({ items }: { items: IoTFieldItem[] }) {
  return (
    <dl className="flex flex-col gap-2">
      {items.map((item) => {
        const status = item.status ? statusClasses[item.status] : null;
        return (
          <div
            key={item.label}
            className="flex min-h-[34px] items-center justify-between gap-4 rounded-md bg-secondarycontainer px-3 py-1.5"
          >
            <dt className="w-20 shrink-0 truncate text-body font-medium text-primary-text">
              {item.label}
            </dt>
            <dd
              className={cn(
                "min-w-0 flex-1 truncate text-right text-body",
                status?.text ?? "text-secondary-text",
              )}
            >
              {status && (
                <span
                  aria-hidden="true"
                  className={cn(
                    "mr-1 inline-block size-1.5 rounded-full align-middle",
                    status.dot,
                  )}
                />
              )}
              {item.value}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

/**
 * Radix 在没有 Trigger 时不会自动找到焦点返回目标。
 * 在浮层打开自动聚焦前记录当前元素，关闭时仅在元素仍存在时恢复。
 */
function useOverlayFocusRestore() {
  const openerRef = useRef<HTMLElement | null>(null);

  return {
    onOpenAutoFocus: () => {
      if (document.activeElement instanceof HTMLElement) {
        openerRef.current = document.activeElement;
      }
    },
    onCloseAutoFocus: (event: Event) => {
      const opener = openerRef.current;
      if (!opener?.isConnected) return;
      event.preventDefault();
      opener.focus();
    },
  };
}

export interface IoTDetailDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
}

/** 对应 Figma Side Panel：桌面端右侧详情/轻编辑面板。 */
export function IoTDetailDrawer({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
}: IoTDetailDrawerProps) {
  const focusRestore = useOverlayFocusRestore();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        onOpenAutoFocus={focusRestore.onOpenAutoFocus}
        onCloseAutoFocus={focusRestore.onCloseAutoFocus}
        className="w-full gap-0 border-component-border bg-container p-0 shadow-modal sm:max-w-[477px]"
      >
        <SheetHeader className="min-h-14 justify-center gap-0 border-b border-stroke px-4 py-3 pr-12">
          <SheetTitle className="text-h7 font-semibold text-primary-text">{title}</SheetTitle>
          <SheetDescription
            className={cn("text-foot12 text-secondary-text", !description && "sr-only")}
          >
            {description ?? `${title}详情`}
          </SheetDescription>
        </SheetHeader>
        <div className="min-h-0 flex-1 overflow-y-auto p-4">{children}</div>
        {footer && (
          <SheetFooter className="mt-0 flex-row justify-end border-t border-stroke p-4">
            {footer}
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}

interface DialogAction {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export interface IoTContentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  descriptionVisuallyHidden?: boolean;
  children: ReactNode;
  secondaryAction?: DialogAction;
  primaryAction?: DialogAction & { theme?: "primary" | "danger" };
  size?: "content" | "basic";
}

/** 对应 Figma Dialog Content / Dialog Basic 两档尺寸。 */
export function IoTContentDialog({
  open,
  onOpenChange,
  title,
  description,
  descriptionVisuallyHidden = false,
  children,
  secondaryAction,
  primaryAction,
  size = "content",
}: IoTContentDialogProps) {
  const focusRestore = useOverlayFocusRestore();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        onOpenAutoFocus={focusRestore.onOpenAutoFocus}
        onCloseAutoFocus={focusRestore.onCloseAutoFocus}
        className={cn(
          "flex max-h-[calc(100vh-2rem)] flex-col gap-0 overflow-hidden border-stroke bg-container p-0 shadow-modal",
          "[&>button]:right-8 [&>button]:top-7",
          size === "content" ? "sm:max-w-[706px]" : "sm:max-w-[480px]",
        )}
      >
        <DialogHeader className="shrink-0 gap-1 border-b border-stroke px-8 py-6 pr-16 text-left">
          <DialogTitle className="text-h7 font-semibold text-primary-text">{title}</DialogTitle>
          <DialogDescription
            className={cn(
              "text-body text-secondary-text",
              (!description || descriptionVisuallyHidden) && "sr-only",
            )}
          >
            {description ?? `${title}对话框`}
          </DialogDescription>
        </DialogHeader>
        <div
          className={cn(
            "min-h-0 overflow-y-auto px-8 py-6",
            size === "content" && "min-h-[364px]",
          )}
        >
          {children}
        </div>
        {(secondaryAction || primaryAction) && (
          <DialogFooter className="shrink-0 flex-row justify-end border-t border-stroke px-8 py-6">
            {secondaryAction && (
              <Button
                size="medium"
                theme="default"
                disabled={secondaryAction.disabled}
                loading={secondaryAction.loading}
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.label}
              </Button>
            )}
            {primaryAction && (
              <Button
                size="medium"
                theme={primaryAction.theme ?? "primary"}
                disabled={primaryAction.disabled}
                loading={primaryAction.loading}
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
              </Button>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}

export interface IoTConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  danger?: boolean;
  onConfirm: () => void | Promise<void>;
}

export function IoTConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = "确认",
  cancelLabel = "取消",
  danger = false,
  onConfirm,
}: IoTConfirmDialogProps) {
  const [pending, setPending] = useState(false);

  const handleConfirm = async () => {
    setPending(true);
    try {
      await onConfirm();
      onOpenChange(false);
    } finally {
      setPending(false);
    }
  };

  return (
    <IoTContentDialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!pending || nextOpen) onOpenChange(nextOpen);
      }}
      title={title}
      description={description}
      descriptionVisuallyHidden
      size="basic"
      secondaryAction={{
        label: cancelLabel,
        disabled: pending,
        onClick: () => onOpenChange(false),
      }}
      primaryAction={{
        label: confirmLabel,
        theme: danger ? "danger" : "primary",
        loading: pending,
        disabled: pending,
        onClick: handleConfirm,
      }}
    >
      <div className="flex items-start gap-3">
        <CircleAlert
          aria-hidden="true"
          className={cn(
            "mt-0.5 size-5 shrink-0",
            danger ? "text-error" : "text-brand",
          )}
        />
        <p aria-hidden="true" className="text-body text-primary-text">
          {description}
        </p>
      </div>
    </IoTContentDialog>
  );
}

export type IoTToastStatus = "success" | "warning" | "error" | "info";

const toastVisuals: Record<
  IoTToastStatus,
  { Icon: typeof CheckCircle2; className: string }
> = {
  success: { Icon: CheckCircle2, className: "text-success" },
  warning: { Icon: AlertTriangle, className: "text-warning" },
  error: { Icon: CircleAlert, className: "text-error" },
  info: { Icon: Info, className: "text-brand" },
};

/** 供 sonner toast.custom() 使用的 240×48 消息内容。 */
export function IoTToastContent({
  status = "info",
  children,
}: {
  status?: IoTToastStatus;
  children: ReactNode;
}) {
  const { Icon, className } = toastVisuals[status];
  return (
    <div className="flex min-h-12 w-60 items-center gap-2 rounded-md border border-stroke bg-container px-4 py-3 shadow-popover">
      <Icon aria-hidden="true" className={cn("size-4 shrink-0", className)} />
      <p className="min-w-0 flex-1 truncate text-body text-primary-text">{children}</p>
    </div>
  );
}
