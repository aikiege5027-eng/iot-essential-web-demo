/**
 * 批量配置更新弹窗使用的图标，由 Figma IOT Delivery「配置更新」稿
 * （node 9978:126122）导出后转换：fill 改为 currentColor，颜色由父级文字色继承。
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** 重置为默认值（刷新），14×14 */
export function ResetDefaultIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 0.875C10.3862 0.875 13.125 3.61375 13.125 7C13.125 10.3862 10.3862 13.125 7 13.125C3.61375 13.125 0.875 10.3862 0.875 7H1.75C1.75 9.89625 4.10375 12.25 7 12.25C9.89625 12.25 12.25 9.89625 12.25 7C12.25 4.10375 9.89625 1.75 7 1.75C5.0575 1.75 3.36 2.80875 2.45 4.375H4.375V5.25H1.3125C1.0675 5.25 0.875 5.0575 0.875 4.8125V1.75H1.75V3.84125C2.8175 2.065 4.76875 0.875 7 0.875Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** 向左的 chevron，16×16 */
export function ScrollLeftIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9.53962 3.54L10.4589 4.45924L6.91848 7.99962L10.4589 11.54L9.53962 12.4592L5.08 7.99962L9.53962 3.54Z" fill="currentColor" />
    </svg>
  );
}

/** 向右的 chevron，16×16 */
export function ScrollRightIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6.46038 12.4592L5.54114 11.54L9.08152 7.99962L5.54114 4.45924L6.46038 3.54L10.92 7.99962L6.46038 12.4592Z" fill="currentColor" />
    </svg>
  );
}
