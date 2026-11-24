import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * 移动端页签吸顶容器。
 *
 * 未吸附时页签按页面内边距（16px）缩进、顶部圆角；滚动到顶部导航（56px）下方吸附后，
 * 页签横向铺满视口、去掉圆角，与顶部导航对齐（样式见 tdesign-patches.css 的 `.km-sticky-tabs`）。
 * 吸附状态由一个 16px 高的哨兵元素判断（它同时承担页签上方的 16px 间距）。
 * 页面由文档滚动，容器的任何上层都不能设置 overflow，否则 sticky 会失效。
 */
const NAV_HEIGHT = 56;

export function StickyTabBar({ children }: { children: ReactNode }) {
  const sentinel = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const element = sentinel.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting && entry.boundingClientRect.top < NAV_HEIGHT),
      { rootMargin: `-${NAV_HEIGHT}px 0px 0px 0px`, threshold: [0, 1] },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} aria-hidden="true" className="h-4" />
      <div className="km-sticky-tabs" data-stuck={stuck}>{children}</div>
    </>
  );
}
