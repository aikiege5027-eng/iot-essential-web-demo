import { useEffect, useRef } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import type { AppAccount } from "../../data/accounts";
import {
  AccountApprovalIcon,
  AccountFeedbackIcon,
  AccountIdentityIcon,
  AccountLogoutIcon,
  AccountProfileIcon,
} from "../icons/account-menu-icons";
import type { MobileLang } from "./MobileShell";

type MobileAccountMenuProps = {
  id: string;
  triggerId: string;
  open: boolean;
  language: MobileLang;
  user: AppAccount;
  onClose: () => void;
  onOpenProfile: () => void;
  onLogout: () => void;
  /** Mobile destinations for these two account entries are not part of the current two-page scope. */
  onUnavailableAction: (action: "approval" | "feedback") => void;
};

const copy = {
  cn: {
    label: "用户菜单",
    profile: "个人信息",
    approval: "审批中心",
    feedback: "产品反馈",
    logout: "退出登录",
  },
  en: {
    label: "User menu",
    profile: "Profile",
    approval: "Approval Center",
    feedback: "Product feedback",
    logout: "Log out",
  },
};

/** Account popover (IOT Delivery 7105:14859), anchored below the MobileTopNav avatar. */
export function MobileAccountMenu({
  id,
  triggerId,
  open,
  language,
  user,
  onClose,
  onOpenProfile,
  onLogout,
  onUnavailableAction,
}: MobileAccountMenuProps) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const t = copy[language];
  const name = language === "cn" ? user.name : user.nameEn;

  const focusTrigger = () => document.getElementById(triggerId)?.focus();

  useEffect(() => {
    if (!open) return;

    const firstItem = popoverRef.current?.querySelector<HTMLButtonElement>("[role='menuitem']");
    firstItem?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      onClose();
      focusTrigger();
    };
    const closeOnOutsidePointer = (event: PointerEvent) => {
      const target = event.target;
      const clickedAccountTrigger = target instanceof Element && target.closest("[data-mobile-account-trigger]");
      if (!popoverRef.current?.contains(target as Node) && !clickedAccountTrigger) onClose();
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, [onClose, open, triggerId]);

  if (!open) return null;

  const run = (action: () => void) => {
    onClose();
    action();
  };

  const handleMenuKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    const items = Array.from(popoverRef.current?.querySelectorAll<HTMLButtonElement>("[role='menuitem']") ?? []);
    const currentIndex = items.indexOf(document.activeElement as HTMLButtonElement);
    if (currentIndex < 0) return;

    let nextIndex: number | undefined;
    if (event.key === "ArrowDown") nextIndex = (currentIndex + 1) % items.length;
    if (event.key === "ArrowUp") nextIndex = (currentIndex - 1 + items.length) % items.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = items.length - 1;
    if (nextIndex === undefined) return;

    event.preventDefault();
    items[nextIndex]?.focus();
  };

  const itemClassName = "flex w-full cursor-pointer items-center gap-1.5 rounded-sm border-0 bg-container px-1.5 py-[3px] text-left text-body text-primary-text transition-colors hover:bg-container-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base";

  return (
    <div
      ref={popoverRef}
      id={id}
      role="menu"
      aria-label={t.label}
      onKeyDown={handleMenuKeyDown}
      className="fixed right-4 top-[58px] z-[60] w-[166px] rounded-lg bg-container px-1.5 pb-2 pt-3 shadow-popover"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 px-1">
          <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
            <AccountIdentityIcon className="size-[18px]" />
          </span>
          <span className="truncate text-body font-semibold text-primary-text">{name}</span>
        </div>
        <div className="flex flex-col gap-1">
          <button type="button" role="menuitem" onClick={() => run(onOpenProfile)} className={itemClassName}>
            <AccountProfileIcon className="size-4 shrink-0" />
            <span className="truncate">{t.profile}</span>
          </button>
          <button type="button" role="menuitem" onClick={() => run(() => onUnavailableAction("approval"))} className={itemClassName}>
            <AccountApprovalIcon className="size-4 shrink-0" />
            <span className="truncate">{t.approval}</span>
          </button>
          <button type="button" role="menuitem" onClick={() => run(() => onUnavailableAction("feedback"))} className={itemClassName}>
            <AccountFeedbackIcon className="size-4 shrink-0" />
            <span className="truncate">{t.feedback}</span>
          </button>
          <button type="button" role="menuitem" onClick={() => run(onLogout)} className={itemClassName}>
            <AccountLogoutIcon className="size-4 shrink-0" />
            <span className="truncate">{t.logout}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
