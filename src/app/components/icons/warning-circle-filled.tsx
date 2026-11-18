import type { SVGProps } from "react";

/**
 * 实心圆 + 白色「!」，Dialog 警告款（Figma China Design system for web 42005:300114）的标题图标。
 * TDesign 的 theme="warning" 内置图标是「i」，与设计稿不同，所以自绘。24×24，颜色由文字色继承。
 */
export function WarningCircleFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <rect x="10.75" y="5.5" width="2.5" height="8.5" rx="1.25" fill="#fff" />
      <circle cx="12" cy="17.75" r="1.5" fill="#fff" />
    </svg>
  );
}
