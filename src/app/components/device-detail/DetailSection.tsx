import type { ReactNode } from "react";

/**
 * 设备详情页卡片的通用标题（Figma IOT Delivery 7363:30962「Container」，Property 1 = Web）。
 *
 * 标题栏 color/grey/50 底、底部 1px 分隔线，px 12 / py 8（含分隔线共 39 高）；
 * 左侧 4×14、圆角 1 的 color/blue/400 竖条 + 标题（Body 14 Medium），间距 8；
 * 可选数据时间（Foot 12，次要文字色），与标题间距 12。
 * `extra` 是代码侧的扩展插槽（设计稿未画），放区内操作，靠右对齐。
 *
 * Mobile 变体（7363:31163，右侧带 tag 图标）暂未接入，移动端设备详情更新时再补。
 */
export function DetailCardHeader({
  title,
  titleId,
  timestamp,
  extra,
}: {
  title: ReactNode;
  titleId?: string;
  timestamp?: ReactNode;
  extra?: ReactNode;
}) {
  return (
    // 高度锁定为设计稿的 39px（含底部分隔线）：右侧放不放操作控件都不改变标题栏高度，切换页签时卡片不跳动。
    // 插槽里的控件请用 small 档（24–28px），在 38px 内容高度里垂直居中。
    <header className="box-border flex h-[39px] items-center gap-3 overflow-hidden border-b border-stroke bg-section-header px-3">
      <h2 id={titleId} className="m-0 flex shrink-0 items-center gap-2 whitespace-nowrap text-body font-medium text-primary-text">
        <span aria-hidden="true" className="h-3.5 w-1 shrink-0 rounded-[1px] bg-brand-hover" />
        {title}
      </h2>
      {timestamp && <p className="m-0 shrink-0 whitespace-nowrap text-foot12 text-secondary-text">{timestamp}</p>}
      {extra && <div className="ml-auto flex shrink-0 items-center gap-2">{extra}</div>}
    </header>
  );
}

/** 设备详情页的分区卡片：白底、描边、8px 圆角，顶部为 DetailCardHeader，内容区内边距由调用方决定。 */
export function DetailSection({
  title,
  titleId,
  timestamp,
  extra,
  children,
  className,
}: {
  title: ReactNode;
  titleId: string;
  timestamp?: ReactNode;
  extra?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section aria-labelledby={titleId} className={`overflow-hidden rounded-lg border border-stroke bg-container ${className ?? ""}`}>
      <DetailCardHeader title={title} titleId={titleId} timestamp={timestamp} extra={extra} />
      {children}
    </section>
  );
}
