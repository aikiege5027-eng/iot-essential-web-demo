// 这里不用 cn()：tailwind-merge 会把自定义字号类 text-foot12 / text-body 当成颜色类，与 text-success 等冲突后丢掉
import cn from "clsx";
import type { DeviceModule, QueryDevice } from "../../data/deviceQuery";
import { deviceQueryCopy } from "../device-query/copy";
import { RegistrationSourceTag, ServiceTag, SimStatusTag, StewardStatusTag } from "../device-query/DeviceTags";
import { EscalatorIcon, WalkwayIcon } from "../icons/device-detail-icons";
import { ElevatorIcon } from "../icons/device-icons";
import type { MobileLang } from "./MobileShell";

const EQUIPMENT_ICON = { elevator: ElevatorIcon, escalator: EscalatorIcon, walkway: WalkwayIcon };

/* ---------------------------------------------------------------------------
 * 搜索卡片（按最新 Web 版更新的移动端卡片，Figma IOT Delivery 8626:40736「搜索结果」/ 8626:40922「最近查看设备」）
 *
 *   灰底卡片（secondarycontainer）圆角 6、内边距 12、内容间距 12：
 *   · 标题行：设备图标 28 + 设备名 H7 Medium + 编号胶囊（14/22 Medium，描边圆角 6），间距 8
 *   · 标签行：与 Web 端同一组标签（24/7 → 云管家状态 → 注册来源 → 物联卡），间距 8、可换行
 *   · 项目地址：12/20 标签 + 14/22 Medium 单行省略
 *   · 搜索结果另有模块列表：白底行圆角 4、内边距 12、行间距 2；模块名 / 序列号 / 连接状态
 * ------------------------------------------------------------------------- */

function ModuleRow({ module, language }: { module: DeviceModule; language: MobileLang }) {
  const t = deviceQueryCopy[language];
  const isMain = module.kind === "main";
  return (
    <li className="flex items-center gap-3 rounded-sm bg-container p-3">
      {/* 主模块 16/24 Semibold，子模块 14/22 Semibold。设计稿名称列 55 宽，数据里有「Nexus-D / Nexus-M」，
          放宽到 68 让名称完整显示，同时各行序列号列保持对齐 */}
      <span className={cn("w-[68px] shrink-0 whitespace-nowrap font-semibold text-primary-text", isMain ? "text-h7" : "text-body")} title={module.name}>
        {module.name}
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-foot12 text-secondary-text">{t.mobileCard.serial}</span>
        <span className="truncate text-body text-primary-text tabular-nums" title={module.serial}>
          {module.serial}
        </span>
      </div>
      <div className="flex shrink-0 flex-col gap-0.5">
        <span className="text-foot12 text-secondary-text">{t.mobileCard.connection}</span>
        <span className={cn("inline-flex items-center gap-1 text-body", module.online ? "text-success" : "text-error")}>
          <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
          {module.online ? t.module.online : t.module.offline}
        </span>
      </div>
    </li>
  );
}

export function MobileDeviceCard({
  device,
  language,
  showModules = false,
  onOpen,
}: {
  device: QueryDevice;
  language: MobileLang;
  showModules?: boolean;
  onOpen?: () => void;
}) {
  const t = deviceQueryCopy[language];
  const EquipmentIcon = EQUIPMENT_ICON[device.equipment];
  const title = (
    <>
      <EquipmentIcon className="size-7 shrink-0 text-icon-primary" />
      <span className="min-w-0 truncate text-h7 font-medium text-primary-text">{device.name}</span>
      <span className="shrink-0 rounded-md border border-stroke bg-container px-1.5 py-0.5 text-body font-medium text-primary-text tabular-nums">
        #{device.id}
      </span>
    </>
  );

  return (
    <article
      className={cn(
        "relative flex flex-col gap-3 rounded-md bg-secondarycontainer p-3",
        // 点击反馈只用极浅的底色变化（默认灰与 hover 灰 8:2 混合）；焦点环只在键盘聚焦时出现
        onOpen &&
          "transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-focus hover:bg-[color-mix(in_srgb,var(--bg-color-secondarycontainer),var(--bg-color-secondarycontainer-hover)_20%)]",
      )}
    >
      {onOpen ? (
        <h3 className="m-0 min-w-0 text-body font-normal">
          {/* 拉伸点击区：按钮的 ::after 覆盖整张卡片，读屏只朗读这一个按钮 */}
          <button
            type="button"
            onClick={onOpen}
            aria-label={t.openDevice(device.name, device.id)}
            className="flex w-full min-w-0 cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-left outline-none after:absolute after:inset-0 after:rounded-md after:content-['']"
          >
            {title}
          </button>
        </h3>
      ) : (
        <h3 className="m-0 flex min-w-0 items-center gap-2 text-body font-normal">{title}</h3>
      )}

      <div className="flex flex-wrap items-center gap-2">
        {device.service247 && <ServiceTag language={language} />}
        <StewardStatusTag device={device} language={language} />
        {device.source && <RegistrationSourceTag source={device.source} language={language} />}
        {device.source && <SimStatusTag sim={device.sim} language={language} />}
      </div>

      <div className="flex flex-col">
        <span className="text-foot12 text-secondary-text">{t.fields.address}</span>
        <span className="truncate text-body font-medium text-primary-text" title={device.project?.address}>
          {device.project?.address ?? "-"}
        </span>
      </div>

      {showModules && device.modules.length > 0 && (
        <ul aria-label={t.modulesLabel(device.name)} className="m-0 flex list-none flex-col gap-0.5 p-0">
          {device.modules.map((module) => (
            <ModuleRow key={module.name} module={module} language={language} />
          ))}
        </ul>
      )}
    </article>
  );
}

/* ---------------------------------------------------------------------------
 * 设备详情顶部的设备卡（老版本移动端设备详情页样式，详情页待后续设计更新）：
 * 白底描边圆角 8、内边距 16；设备图标 28 + 设备名 H6 + 编号胶囊；设备标签；四行左标签右数值。
 * ------------------------------------------------------------------------- */

export function MobileDeviceDetailCard({ device, language }: { device: QueryDevice; language: MobileLang }) {
  const t = deviceQueryCopy[language];
  const EquipmentIcon = EQUIPMENT_ICON[device.equipment];
  const rows = [
    { label: t.fields.project, value: device.project?.name ?? "-" },
    { label: t.fields.address, value: device.project?.address ?? "-" },
    { label: t.fields.contract, value: device.contractValid ? (device.contractPlan ? `${t.valid} (${device.contractPlan})` : t.valid) : t.invalid },
    { label: t.fields.agreement, value: device.agreement ? t.valid : t.invalid },
  ];

  return (
    <article className="flex flex-col gap-3 rounded-lg border border-stroke bg-container p-4">
      <h2 className="m-0 flex min-w-0 items-center gap-3 text-body font-normal">
        <EquipmentIcon className="size-7 shrink-0 text-icon-primary" />
        <span className="min-w-0 truncate text-h6 font-medium text-primary-text">{device.name}</span>
        <span className="shrink-0 rounded-md border border-stroke bg-container px-1.5 py-0.5 text-body font-medium text-primary-text tabular-nums">
          #{device.id}
        </span>
      </h2>

      <div className="flex flex-wrap gap-1">
        {device.service247 && <ServiceTag language={language} />}
        <StewardStatusTag device={device} language={language} />
        {device.source && <RegistrationSourceTag source={device.source} language={language} />}
        {device.source && <SimStatusTag sim={device.sim} language={language} />}
      </div>

      <dl className="m-0 flex flex-col gap-2.5">
        {rows.map((row) => (
          <div key={row.label} className="flex items-start gap-3 text-body">
            <dt className="shrink-0 whitespace-nowrap text-secondary-text">{row.label}</dt>
            <dd className="m-0 min-w-0 flex-1 text-right text-primary-text">{row.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
