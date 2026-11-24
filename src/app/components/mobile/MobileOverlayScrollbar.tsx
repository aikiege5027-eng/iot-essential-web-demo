import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

/**
 * 移动端页面的悬浮滚动条。
 *
 * 移动端整页由文档滚动（MobileShell 的根是 min-h-dvh）。桌面浏览器里窄窗口预览时，经典滚动条会占 15px 宽度：
 * 切换页签、内容长短变化时它时有时无，页面宽度随之跳动；TDesign 的 Drawer 锁滚动时还会在右侧留出一条空白。
 * 这里把文档自带的滚动条隐藏（`html.km-overlay-scroll`），改画一个浮在内容上方的细滑块：
 * 滚动、悬停、拖动时显现，停止后淡出，不占任何布局宽度；真机的叠加式滚动条不受影响。
 */
const MIN_THUMB = 32;
const HIDE_DELAY = 900;

export function MobileOverlayScrollbar() {
  const [thumb, setThumb] = useState({ top: 0, height: 0 });
  const [active, setActive] = useState(false);
  const hideTimer = useRef<number | undefined>(undefined);
  const drag = useRef<{ startY: number; startScroll: number } | null>(null);
  const hovering = useRef(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("km-overlay-scroll");

    const update = () => {
      const viewport = window.innerHeight;
      const total = root.scrollHeight;
      if (total <= viewport + 1) {
        setThumb((current) => (current.height === 0 ? current : { top: 0, height: 0 }));
        return;
      }
      const height = Math.max(MIN_THUMB, (viewport * viewport) / total);
      const top = (window.scrollY / (total - viewport)) * (viewport - height);
      setThumb({ top, height });
    };
    const scheduleHide = () => {
      window.clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => {
        if (!drag.current && !hovering.current) setActive(false);
      }, HIDE_DELAY);
    };
    const show = () => {
      update();
      setActive(true);
      scheduleHide();
    };

    window.addEventListener("scroll", show, { passive: true });
    window.addEventListener("resize", show);
    // 内容高度变化（切换页签、展开清单）只重算滑块，不主动显现。
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    update();

    return () => {
      root.classList.remove("km-overlay-scroll");
      window.removeEventListener("scroll", show);
      window.removeEventListener("resize", show);
      observer.disconnect();
      window.clearTimeout(hideTimer.current);
    };
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { startY: event.clientY, startScroll: window.scrollY };
    setActive(true);
  };
  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const viewport = window.innerHeight;
    const total = document.documentElement.scrollHeight;
    const track = viewport - thumb.height;
    if (track <= 0) return;
    window.scrollTo({ top: drag.current.startScroll + ((event.clientY - drag.current.startY) * (total - viewport)) / track });
  };
  const onPointerUp = () => {
    drag.current = null;
    window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => { if (!hovering.current) setActive(false); }, HIDE_DELAY);
  };

  if (thumb.height === 0) return null;
  return (
    <div
      aria-hidden="true"
      className={`km-overlay-scrollbar ${active ? "km-overlay-scrollbar--active" : ""}`}
      style={{ top: thumb.top, height: thumb.height }}
      onPointerEnter={() => { hovering.current = true; setActive(true); }}
      onPointerLeave={() => { hovering.current = false; if (!drag.current) setActive(false); }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    />
  );
}
