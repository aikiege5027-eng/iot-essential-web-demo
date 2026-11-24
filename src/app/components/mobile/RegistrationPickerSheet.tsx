import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import { Drawer } from "tdesign-react";

/** 选项行：24px 文字 + 16px 间距，滚轮每格 40px（IOT Delivery 12360:76329「Picker 选择器」）。 */
const ITEM_STEP = 40;

/**
 * 底部滚轮选择器（取消 / 标题 / 确认 + 5 行滚轮 + 居中的 40px 选中条）。
 * 滚动吸附到最近一项，中间行即选中项；点击某一行会滚动到该行；↑ ↓ 键可移动选中项。
 * 点「确认」才回写，点「取消」或遮罩不改动。
 */
export function RegistrationPickerSheet({ visible, title, options, value, cancelLabel, confirmLabel, onCancel, onConfirm }: {
  visible: boolean;
  title: string;
  options: readonly string[];
  /** 当前已选值；为空时默认选中第一项。 */
  value: string;
  cancelLabel: string;
  confirmLabel: string;
  onCancel: () => void;
  onConfirm: (value: string) => void;
}) {
  return (
    <Drawer
      className="km-registration-scan-sheet km-registration-picker-sheet"
      visible={visible}
      placement="bottom"
      size="258px"
      header={false}
      footer={false}
      closeBtn={false}
      destroyOnClose
      onClose={onCancel}
    >
      {visible && <PickerBody title={title} options={options} value={value} cancelLabel={cancelLabel} confirmLabel={confirmLabel} onCancel={onCancel} onConfirm={onConfirm} />}
    </Drawer>
  );
}

function PickerBody({ title, options, value, cancelLabel, confirmLabel, onCancel, onConfirm }: {
  title: string;
  options: readonly string[];
  value: string;
  cancelLabel: string;
  confirmLabel: string;
  onCancel: () => void;
  onConfirm: (value: string) => void;
}) {
  const initial = Math.max(0, options.indexOf(value));
  const [index, setIndex] = useState(initial);
  const wheelRef = useRef<HTMLDivElement>(null);
  const titleId = "registration-picker-title";

  const scrollTo = (next: number, smooth: boolean) => {
    wheelRef.current?.scrollTo({ top: next * ITEM_STEP, behavior: smooth ? "smooth" : "auto" });
  };

  useLayoutEffect(() => {
    scrollTo(initial, false);
    // 抽屉进入动画期间容器尺寸可能尚未稳定，下一帧再对齐一次。
    const frame = window.requestAnimationFrame(() => scrollTo(initial, false));
    return () => window.cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // 选项数量变化（例如轿门数量改变）时，保证索引不越界。
    if (index > options.length - 1) setIndex(options.length - 1);
  }, [index, options.length]);

  const handleScroll = () => {
    const top = wheelRef.current?.scrollTop ?? 0;
    const next = Math.min(options.length - 1, Math.max(0, Math.round(top / ITEM_STEP)));
    setIndex((current) => (current === next ? current : next));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const next = Math.min(options.length - 1, Math.max(0, index + (event.key === "ArrowDown" ? 1 : -1)));
    setIndex(next);
    scrollTo(next, true);
  };

  return (
    <div role="dialog" aria-modal="true" aria-labelledby={titleId} className="km-registration-picker">
      <header className="km-registration-picker__header">
        <button type="button" className="km-registration-picker__link km-registration-picker__link--cancel" onClick={onCancel}>{cancelLabel}</button>
        <h2 id={titleId} className="km-registration-picker__title">{title}</h2>
        <button type="button" className="km-registration-picker__link km-registration-picker__link--confirm" onClick={() => onConfirm(options[index])}>{confirmLabel}</button>
      </header>
      <div className="km-registration-picker__content">
        <div aria-hidden="true" className="km-registration-picker__indicator" />
        <div
          ref={wheelRef}
          role="listbox"
          aria-label={title}
          aria-activedescendant={`registration-picker-option-${index}`}
          tabIndex={0}
          className="km-registration-picker__wheel"
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
        >
          {options.map((option, optionIndex) => {
            const distance = Math.abs(optionIndex - index);
            return (
              <div
                key={option}
                id={`registration-picker-option-${optionIndex}`}
                role="option"
                aria-selected={optionIndex === index}
                className={`km-registration-picker__option ${distance === 0 ? "km-registration-picker__option--selected" : distance === 1 ? "km-registration-picker__option--near" : ""}`}
                onClick={() => { setIndex(optionIndex); scrollTo(optionIndex, true); }}
              >
                {option}
              </div>
            );
          })}
        </div>
        <div aria-hidden="true" className="km-registration-picker__mask km-registration-picker__mask--top" />
        <div aria-hidden="true" className="km-registration-picker__mask km-registration-picker__mask--bottom" />
      </div>
    </div>
  );
}
