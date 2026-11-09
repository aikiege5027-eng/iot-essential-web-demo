import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  "aria-hidden": true,
  focusable: false,
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
} as const;

/**
 * 设备号验证成功图标，取自 IOT Delivery 10291:151450 的 check-circle 实例。
 * 颜色继承父级，避免把 Figma 导出的 success 色硬编码在 SVG 内。
 */
export function RegistrationSuccessIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 80 80" {...props}>
      <path
        fill="currentColor"
        d="M40 5C59.33 5 75 20.67 75 40C75 59.33 59.33 75 40 75C20.67 75 5 59.33 5 40C5 20.67 20.67 5 40 5ZM40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10ZM56.7676 31.7676L36.7676 51.7676C35.7913 52.7438 34.2087 52.7439 33.2324 51.7676L23.2324 41.7676L26.7676 38.2324L35 46.4648L53.2324 28.2324L56.7676 31.7676Z"
      />
    </svg>
  );
}

/** 设备注册 DTU 扫码入口，取自同级设备注册原型的 scan-2 图标。 */
export function RegistrationScanIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 18 18" {...props}>
      <path fill="currentColor" d="M12.75 0H17.25C17.6642 0 18 0.335786 18 0.75V5.25H16.5V1.5H12.75V0Z" />
      <path fill="currentColor" d="M1.5 12.75V16.5H5.25V18H0.75C0.335786 18 0 17.6642 0 17.25V12.75H1.5Z" />
      <path fill="currentColor" d="M18 17.25V12.75H16.5V16.5H12.75V18H17.25C17.6642 18 18 17.6642 18 17.25Z" />
      <path fill="currentColor" d="M0 0.75C0 0.335786 0.335786 0 0.75 0H5.25V1.5H1.5V5.25H0V0.75Z" />
      <path fill="currentColor" d="M1.5 9.75H16.5V8.25H1.5V9.75Z" />
    </svg>
  );
}
/**
 * Connection 310 模块页签图标，取自 IOT Delivery 10291:151720。
 * 用 currentColor 让选中和未选中的颜色由页签文字语义色驱动。
 */
export function RegistrationModuleTabIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 16 16" {...props}>
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M13.48 4.37C13.48 4.37 13.47 4.35 13.47 4.34C13.46 4.3 13.44 4.26 13.41 4.23C13.39 4.19 13.35 4.15 13.31 4.12C13.29 4.1 13.27 4.08 13.24 4.07C13.23 4.06 13.21 4.05 13.19 4.04L8.19 2.04C8.07 1.99 7.93 1.99 7.81 2.04L2.81 4.04C2.81 4.04 2.77 4.06 2.75 4.08C2.63 4.14 2.55 4.24 2.52 4.37C2.52 4.41 2.5 4.46 2.5 4.51V11.51C2.5 11.71 2.62 11.89 2.81 11.97L7.81 13.97C7.81 13.97 7.84 13.98 7.85 13.98C7.94 14.01 8.05 14.01 8.15 13.98C8.16 13.98 8.18 13.97 8.19 13.97L13.19 11.97C13.37 11.89 13.5 11.71 13.5 11.51V4.51C13.5 4.51 13.49 4.41 13.48 4.37ZM7.5 12.77L3.5 11.17V5.24L7.5 6.84V12.77ZM8.01 5.97H7.99L4.36 4.51L8 3.04L11.64 4.51L8.01 5.97ZM12.5 11.17L8.5 12.77V6.84L12.5 5.24V11.17Z" />
    </svg>
  );
}

/** Connection 310 实时数据页签图标，取自 IOT Delivery 10291:151722。 */
export function RegistrationRealtimeTabIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 16 16" {...props}>
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7.49194 1.50006C7.73328 1.49617 7.94295 1.66525 7.99029 1.90194L9.51688 9.53491L10.5111 4.89524C10.5583 4.6748 10.7473 4.51323 10.9724 4.50076C11.1974 4.4883 11.4031 4.62801 11.4743 4.84189L12.3604 7.5H14.5V8.5H12C11.7848 8.5 11.5937 8.36229 11.5257 8.15811L11.105 6.8962L9.9889 12.1048C9.93923 12.3366 9.73362 12.5016 9.49658 12.5C9.25953 12.4984 9.0562 12.3305 9.00971 12.0981L7.54472 4.77309L5.9932 14.0822C5.95425 14.3159 5.75666 14.4901 5.51995 14.4996C5.28324 14.5091 5.07239 14.3511 5.01493 14.1213L3.60961 8.5H1.5V7.5H4C4.22943 7.5 4.42943 7.65615 4.48507 7.87873L5.40202 11.5465L7.0068 1.9178C7.04648 1.67971 7.25059 1.50396 7.49194 1.50006Z" />
    </svg>
  );
}
