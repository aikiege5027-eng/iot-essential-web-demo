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

/** 设备注册 DTU 扫码入口，取自 IOT Delivery 10291:151561 的 scan-2（24×24 画布，图形 18×18 居中）。 */
export function RegistrationScanIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M15.75 3H20.25C20.6642 3 21 3.33579 21 3.75V8.25H19.5V4.5H15.75V3Z" />
      <path fill="currentColor" d="M4.5 15.75V19.5H8.25V21H3.75C3.33579 21 3 20.6642 3 20.25V15.75H4.5Z" />
      <path fill="currentColor" d="M21 20.25V15.75H19.5V19.5H15.75V21H20.25C20.6642 21 21 20.6642 21 20.25Z" />
      <path fill="currentColor" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H8.25V4.5H4.5V8.25H3V3.75Z" />
      <path fill="currentColor" d="M4.5 12.75H19.5V11.25H4.5V12.75Z" />
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

/** Connection 320 传感器卡片：单选按钮，取自 IOT Delivery 10291:152155 / 10291:153173（22×22）。 */
export function RegistrationRadioIcon({ checked, ...props }: IconProps & { checked: boolean }) {
  return (
    <svg {...base} viewBox="0 0 22 22" {...props}>
      {checked ? (
        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M19.7633 11.4583C19.7633 6.87958 16.0508 3.15333 11.4583 3.15333C6.86583 3.15333 3.15333 6.87958 3.15333 11.4583C3.15333 16.0371 6.86583 19.7633 11.4583 19.7633C16.0508 19.7633 19.7633 16.0508 19.7633 11.4583ZM21.0833 11.4583C21.0833 16.7796 16.7796 21.0833 11.4583 21.0833C6.13708 21.0833 1.83333 16.7796 1.83333 11.4583C1.83333 6.13708 6.13708 1.83333 11.4583 1.83333C16.7796 1.83333 21.0833 6.13708 21.0833 11.4583ZM11.4583 17.4808C14.7858 17.4808 17.4808 14.7858 17.4808 11.4583C17.4808 8.13083 14.7858 5.43583 11.4583 5.43583C8.13083 5.43583 5.43583 8.13083 5.43583 11.4583C5.43583 14.7858 8.13083 17.4808 11.4583 17.4808Z" />
      ) : (
        <path fill="currentColor" d="M11 1.375C16.3157 1.375 20.625 5.68426 20.625 11C20.625 16.3157 16.3157 20.625 11 20.625C5.68426 20.625 1.375 16.3157 1.375 11C1.375 5.68426 5.68426 1.375 11 1.375ZM11 2.75C6.44365 2.75 2.75 6.44365 2.75 11C2.75 15.5563 6.44365 19.25 11 19.25C15.5563 19.25 19.25 15.5564 19.25 11C19.25 6.44365 15.5564 2.75 11 2.75Z" />
      )}
    </svg>
  );
}

/** 传感器功能行右侧「进入选择」箭头，取自 IOT Delivery 10291:152168（22×22）。 */
export function RegistrationChevronRightIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 22 22" {...props}>
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M6.875 5.36286L8.03462 4.23847L14.1069 10.1263C14.664 10.6665 14.664 11.5604 14.1069 12.1006L8.03462 17.9885L6.875 16.8641L12.8058 11.1135L6.875 5.36286Z" />
    </svg>
  );
}

/** 传感器功能行已选值后的清除图标 close-circle-filled，取自 IOT Delivery 10291:153183（22×22）。 */
export function RegistrationClearIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 22 22" {...props}>
      <path fill="currentColor" d="M11 1.375C16.3157 1.375 20.625 5.68426 20.625 11C20.625 16.3157 16.3157 20.625 11 20.625C5.68426 20.625 1.375 16.3157 1.375 11C1.375 5.68426 5.68426 1.375 11 1.375ZM11 10.0273L7.59766 6.625L6.625 7.59668L10.0273 11L6.625 14.4033L7.59668 15.375L11 11.9727L14.4033 15.375L15.375 14.4033L11.9727 11L15.375 7.59668L14.4033 6.625L11 10.0273Z" />
    </svg>
  );
}

/** 新增传感器卡片右上角的删除图标，取自 IOT Delivery 10647:73495 的 delete 实例（20×20）。 */
export function RegistrationDeleteIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 20 20" {...props}>
      <path fill="currentColor" d="M7.5 15V7.5H8.75V15H7.5Z" />
      <path fill="currentColor" d="M11.25 7.5V15H12.5V7.5H11.25Z" />
      <path fill="currentColor" d="M13.125 3.75H17.5V5H16.25V17.5C16.25 18.1904 15.6904 18.75 15 18.75H5C4.30964 18.75 3.75 18.1904 3.75 17.5V5H2.5V3.75H6.875L6.875 2.25C6.875 1.69772 7.32272 1.25 7.875 1.25H12.125C12.6773 1.25 13.125 1.69772 13.125 2.25V3.75ZM8.125 3.75H11.875L11.875 2.5L8.125 2.5V3.75ZM5 5V17.5H15V5H5Z" />
    </svg>
  );
}

/** 「添加传感器」按钮图标 add，取自 IOT Delivery 10291:152184（18×18）。 */
export function RegistrationAddIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 18 18" {...props}>
      <path fill="currentColor" d="M8.4375 9.5625V13.5H9.5625V9.5625H13.5V8.4375H9.5625V4.5H8.4375V8.4375H4.5V9.5625H8.4375Z" />
    </svg>
  );
}

/** 上传照片动作面板的「拍照片」图标 cinema，取自 IOT Delivery 10291:153435（24×24）。 */
export function RegistrationCameraIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12ZM15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" />
      <path fill="currentColor" d="M9.08028 3C8.77936 3 8.49835 3.15039 8.33143 3.40077L7.09861 5.25H3.015C2.5925 5.25 2.25 5.5925 2.25 6.015V18.735C2.25 19.1575 2.5925 19.5 3.015 19.5H20.985C21.4075 19.5 21.75 19.1575 21.75 18.735V6.015C21.75 5.59251 21.4075 5.25 20.985 5.25H16.9014L15.6686 3.40077C15.5016 3.15039 15.2206 3 14.9197 3H9.08028ZM9.40139 4.5H14.5986L16.0986 6.75H20.25V18H3.75V6.75H7.90139L9.40139 4.5Z" />
    </svg>
  );
}

/** 电梯面板照片上传区的加号，取自 IOT Delivery 10291:152233（32×32）。 */
export function RegistrationUploadAddIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 32 32" {...props}>
      <path fill="currentColor" d="M15 17V24H17V17H24V15H17V8H15V15H8V17H15Z" />
    </svg>
  );
}

/** 基准楼层勾选图标，取自 IOT Delivery 10291:152946 / 10291:152954（24×24，圆形）。 */
export function RegistrationCheckboxIcon({ checked, ...props }: IconProps & { checked: boolean }) {
  return (
    <svg {...base} viewBox="0 0 24 24" {...props}>
      {checked ? (
        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5ZM17.0304 9.53039L11.0304 15.5304C10.7375 15.8233 10.2626 15.8233 9.96973 15.5304L6.96973 12.5304L8.03039 11.4697L10.5001 13.9394L15.9697 8.46973L17.0304 9.53039Z" />
      ) : (
        <>
          <circle cx="12" cy="12" r="10.5" fill="var(--bg-color-component)" />
          <path fill="var(--component-border)" d="M12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02943 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" />
        </>
      )}
    </svg>
  );
}

/** 照片识别成功 / 识别完成状态图标 check-circle-filled，取自 IOT Delivery 10291:152605（16×16）。 */
export function RegistrationCheckCircleIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 16 16" {...props}>
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11.3536 6.35359L7.35359 10.3536C7.15833 10.5489 6.84175 10.5489 6.64648 10.3536L4.64648 8.35359L5.35359 7.64648L7.00004 9.29293L10.6465 5.64648L11.3536 6.35359Z" />
    </svg>
  );
}

/** 连接列表条目完成态图标（theme=success），取自 IOT Delivery 10291:153537（22×22）。 */
export function RegistrationItemSuccessIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 22 22" {...props}>
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11 20.625C16.3157 20.625 20.625 16.3157 20.625 11C20.625 5.68426 16.3157 1.375 11 1.375C5.68426 1.375 1.375 5.68426 1.375 11C1.375 16.3157 5.68426 20.625 11 20.625ZM15.6112 8.73619L10.1112 14.2362C9.8427 14.5047 9.4074 14.5047 9.13892 14.2362L6.38892 11.4862L7.36119 10.5139L9.62505 12.7778L14.6389 7.76392L15.6112 8.73619Z" />
    </svg>
  );
}

/** 「连接成功」结果图标 check-circle，取自 IOT Delivery 10291:154445（80×80）。 */
export function RegistrationResultSuccessIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 80 80" {...props}>
      <path fill="currentColor" d="M40 5C59.33 5 75 20.67 75 40C75 59.33 59.33 75 40 75C20.67 75 5 59.33 5 40C5 20.67 20.67 5 40 5ZM40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10ZM56.7676 31.7676L36.7676 51.7676C35.7913 52.7438 34.2087 52.7439 33.2324 51.7676L23.2324 41.7676L26.7676 38.2324L35 46.4648L53.2324 28.2324L56.7676 31.7676Z" />
    </svg>
  );
}

/** 连接列表展开 / 收起箭头，取自 IOT Delivery 10291:153539 / 10291:153805（20×20）。 */
export function RegistrationChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 20 20" {...props}>
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14.955 6.62598L15.9772 7.68019L10.6246 13.2005C10.1335 13.7069 9.32086 13.7069 8.82977 13.2005L3.47718 7.68019L4.49936 6.62598L9.72718 12.0176L14.955 6.62598Z" />
    </svg>
  );
}
export function RegistrationChevronUpIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 20 20" {...props}>
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M15.5006 13.4772L16.5228 12.423L11.1702 6.90269C10.6792 6.39623 9.8665 6.39623 9.37542 6.90269L4.02283 12.423L5.04501 13.4772L10.2728 8.08558L15.5006 13.4772Z" />
    </svg>
  );
}

/** 安装检查「未开始」状态图标 clock，取自 IOT Delivery 10437:44246（16×16）。 */
export function RegistrationClockIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 16 16" {...props}>
      <path fill="currentColor" d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM8.5 8.08594C8.50004 8.21849 8.55275 8.34572 8.64648 8.43945L10.8535 10.6465L10.1465 11.3535L7.93945 9.14648C7.65818 8.86522 7.50004 8.48371 7.5 8.08594V4H8.5V8.08594Z" />
    </svg>
  );
}

/** 功能检查「上下行」速度前的向上箭头 arrow-up，取自 IOT Delivery 10939:42855（20×20）。 */
export function RegistrationArrowUpIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 20 20" {...props}>
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M10.442 4.55806C10.198 4.31398 9.80223 4.31398 9.55815 4.55806L5.36621 8.75L6.25009 9.63388L9.375 6.50898V15.625H10.625V6.50879L13.7501 9.63388L14.634 8.75L10.442 4.55806Z" />
    </svg>
  );
}
