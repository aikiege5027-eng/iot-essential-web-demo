import type { SVGProps } from "react";

/**
 * KONE 图标库 `chevron-up`（16×16），取自设备事件「事件统计」收起 / 展开按钮的图标实例（IOT Delivery 7447:30194 旁）。
 * 原稿填充为 #676A72，这里改为 currentColor。展开（向下）态由调用方旋转 180° 表示。
 */
export function ChevronUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4005 10.7817L13.2183 9.93836L8.93619 5.52214C8.54332 5.11697 7.8932 5.11697 7.50034 5.52214L3.21826 9.93836L4.03601 10.7817L8.21826 6.46845L12.4005 10.7817Z"
        fill="currentColor"
      />
    </svg>
  );
}
