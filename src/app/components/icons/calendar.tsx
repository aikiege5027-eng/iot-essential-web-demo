/**
 * 日历图标（Figma China Design system for web · DatePicker-input 37379:309579 内的 calendar，16×16）。
 * 颜色取 currentColor，由使用处的文字色决定（设计稿聚焦态为品牌蓝 #1450f5）。
 */
export function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 3H6L6 1.5H5L5 3H3C2.44772 3 2 3.44771 2 4V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V4C14 3.44772 13.5523 3 13 3H11V1.5H10L10 3ZM5 5L6 5L6 4H10L10 5L11 5V4H13V6H3V4H5L5 5ZM3 7H13V13H3L3 7Z"
      />
    </svg>
  );
}
