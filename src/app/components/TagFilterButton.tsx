/**
 * 标签式切换按钮：12px、内边距 8 / 2、圆角 3、1px 描边，高 24。
 * 选中 = 浅蓝底 + 品牌蓝描边与文字（Medium），未选中 = 白底 + 灰描边 + 主文字色。
 * 设备详情「设备档案」卡片头部的类别切换与「统计数据」的数据分析筛选共用。
 *
 * `size`：默认 medium = 高 24 / 12·20；large 对应 Mobile 设计系统 CheckTag（China Design system for mobile，
 * 26766:16970）的 large 档：高 32、内边距 5 / 10（含 1px 描边）、14·22、圆角 4。移动端页面内的数据来源切换用 large。
 */
const SIZE_CLASS = {
  medium: "h-6 rounded-xs px-2 text-foot12",
  large: "h-8 rounded-sm px-[9px] text-body",
} as const;

export function TagFilterButton({ label, active, onClick, size = "medium" }: { label: string; active: boolean; onClick: () => void; size?: keyof typeof SIZE_CLASS }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`flex items-center border ${SIZE_CLASS[size]} transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-base ${
        active ? "border-brand-base bg-brand-light font-medium text-brand" : "border-component-border bg-container font-normal text-primary-text hover:border-brand-hover"
      }`}
    >
      {label}
    </button>
  );
}
