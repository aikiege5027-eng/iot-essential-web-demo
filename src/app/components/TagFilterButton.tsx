/**
 * 标签式切换按钮：12px、内边距 8 / 2、圆角 3、1px 描边，高 24。
 * 选中 = 浅蓝底 + 品牌蓝描边与文字（Medium），未选中 = 白底 + 灰描边 + 主文字色。
 * 设备详情「设备档案」卡片头部的类别切换与「统计数据」的数据分析筛选共用。
 */
export function TagFilterButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`flex h-6 items-center rounded-xs border px-2 text-foot12 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-base ${
        active ? "border-brand-base bg-brand-light font-medium text-brand" : "border-component-border bg-container font-normal text-primary-text hover:border-brand-hover"
      }`}
    >
      {label}
    </button>
  );
}
