import type { SVGProps } from "react";

/**
 * KONE 图标库 `info`（16×16），取自 IOT Delivery 设备总览设计稿中的图标实例。
 * 原稿填充为 #8F9195，这里改为 currentColor，颜色由父级文字色继承。
 */
export function InfoCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7.50562 11.9998V6.5H8.50562V11.9998H7.50562Z" fill="currentColor" />
      <path
        d="M1 8C1 11.866 4.13403 15 8 15C11.866 15 15 11.866 15 8C15 4.13403 11.866 1 8 1C4.13403 1 1 4.13403 1 8ZM2 8C2 4.68628 4.68628 2 8 2C11.3137 2 14 4.68628 14 8C14 11.3137 11.3137 14 8 14C4.68628 14 2 11.3137 2 8Z"
        fill="currentColor"
      />
      <path d="M7.5 4.5H8.5V5.5H7.5V4.5Z" fill="currentColor" />
    </svg>
  );
}
