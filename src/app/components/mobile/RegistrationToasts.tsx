import MobileMessage from "tdesign-mobile-react/es/message/Message";

/**
 * 页面顶部浮出的上传结果提示（IOT Delivery 10291:153449 / 10291:153461 的 Message 实例）。
 * 沿用 Mobile Message + `.km-mobile-message`，只是固定在视口顶部（y=27，左右 16）并单行省略。
 */
export function RegistrationTopMessage({ theme, content }: { theme: "success" | "error"; content: string }) {
  return (
    <div className="pointer-events-none fixed top-[27px] right-4 left-4 z-[6000]" role="status">
      <MobileMessage
        className={`km-mobile-message km-mobile-message--toast km-mobile-message--${theme}`}
        theme={theme}
        visible
        duration={0}
        content={content}
      />
    </div>
  );
}

/**
 * 居中的「生成中」轻提示（IOT Delivery 10291:152556 Toast）：
 * #141414 90% 底、24 内边距、6px 圆角、32px 加载图标 + Body 14 白字。
 * 带一层透明遮罩，生成期间屏蔽页面点击。
 */
export function RegistrationLoadingToast({ label }: { label: string }) {
  return (
    <div className="fixed inset-0 z-[6000] flex items-start justify-center pt-[40%]" role="status" aria-live="polite">
      <div className="flex min-w-28 flex-col items-center gap-2 rounded-md bg-primary-text/90 p-6 text-body text-white-text">
        <span aria-hidden="true" className="size-8 animate-spin rounded-full border-[3px] border-current/25 border-t-current" />
        <span>{label}</span>
      </div>
    </div>
  );
}
