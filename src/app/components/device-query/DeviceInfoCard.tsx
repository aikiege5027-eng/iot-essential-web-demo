import type { QueryDevice } from "../../data/deviceQuery";
import { EscalatorIcon, WalkwayIcon } from "../icons/device-detail-icons";
import { ElevatorIcon, NodeIcon } from "../icons/device-icons";
import { StatusLabel } from "../StatusLabel";
// 这里不用 cn()：tailwind-merge 会把自定义字号类 text-foot12 / text-body 当成颜色类，与 text-brand 等冲突后丢掉
import cn from "clsx";
import { deviceQueryCopy, type Language } from "./copy";
import { RegistrationSourceTag, ServiceTag, SimStatusTag, StewardStatusTag } from "./DeviceTags";

/**
 * 设备信息卡（Figma IOT Delivery 组件「Component 08 - 搜索项目卡片」8602:34833）。
 *
 * 用在三处：设备查询的「搜索结果」（带模块列表）、「最近查看设备」、设备详情页顶部。
 *   · variant="list"   灰底卡片，整卡可点击进入详情（标题按钮 + 拉伸点击区）
 *   · variant="detail" 白底描边项目面板（Figma 5532:18192：直梯 / 扶梯 / 步道梯三种图标），设备详情页顶部，不可点击；
 *     保养合同显示合同产品名，如「有效 (KONE Care Plus)」
 */

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <dt className="text-foot12 text-secondary-text">{label}</dt>
      <dd className="truncate text-body font-medium text-primary-text" title={value}>
        {value}
      </dd>
    </div>
  );
}

function ModuleList({ device, language }: { device: QueryDevice; language: Language }) {
  const t = deviceQueryCopy[language];
  return (
    <ul aria-label={t.modulesLabel(device.name)} className="flex w-full flex-col gap-0.5">
      {device.modules.map((module) => {
        const isMain = module.kind === "main";
        return (
          <li
            key={module.name}
            className={cn(
              // 列宽按设计稿（135 / 80 / 256 / 221 / 124 / 98）的比例分配整行宽度，宽屏时均匀铺开，不在右侧留白
              "grid min-h-10 grid-cols-[minmax(120px,135fr)_minmax(64px,80fr)_minmax(0,256fr)_minmax(0,221fr)_minmax(0,124fr)_minmax(0,98fr)] items-center gap-6 rounded-md bg-container px-6 py-2 text-body text-primary-text",
              isMain && "font-medium",
            )}
          >
            <span className="flex items-center gap-2">
              {!isMain && (
                <span aria-hidden="true" className="flex size-6 items-center justify-center rounded-md bg-component text-secondary-text">
                  <NodeIcon className="size-3.5" />
                </span>
              )}
              <span className={cn("text-h7", isMain ? "font-semibold" : "font-normal")}>{module.name}</span>
            </span>
            <StatusLabel tone={module.online ? "success" : "error"} className="font-normal">
              {module.online ? t.module.online : t.module.offline}
            </StatusLabel>
            <span className="truncate tabular-nums" title={module.serial}>
              {module.serial}
            </span>
            <span className="truncate">{module.type}</span>
            <span>{module.state === "registered" ? t.module.registered : t.module.configured}</span>
            <span className="tabular-nums">{module.version}</span>
          </li>
        );
      })}
    </ul>
  );
}

const EQUIPMENT_ICON = { elevator: ElevatorIcon, escalator: EscalatorIcon, walkway: WalkwayIcon };

export function DeviceInfoCard({
  device,
  language,
  variant = "list",
  showModules = false,
  onOpen,
}: {
  device: QueryDevice;
  language: Language;
  variant?: "list" | "detail";
  showModules?: boolean;
  onOpen?: () => void;
}) {
  const t = deviceQueryCopy[language];
  const clickable = variant === "list" && Boolean(onOpen);
  const isDetail = variant === "detail";
  const EquipmentIcon = EQUIPMENT_ICON[device.equipment];
  const title = (
    <>
      <EquipmentIcon className="size-7 shrink-0 text-icon-primary" />
      {/* 项目面板（详情页）标题 18/26，列表卡片 16/24 */}
      <span className={cn("truncate font-medium text-primary-text", isDetail ? "text-h6" : "text-h7")}>{device.name}</span>
      <span className="shrink-0 rounded-md border border-stroke bg-container px-1.5 py-0.5 text-body font-medium text-primary-text tabular-nums">
        #{device.id}
      </span>
    </>
  );

  return (
    <article
      className={cn(
        "relative flex flex-col",
        // 列表：灰底卡片（8602:34833）；详情：白底描边项目面板（5532:18192，px 29 / py 17 / gap 24）
        isDetail ? "gap-6 rounded-lg border border-stroke bg-container px-[29px] py-[17px]" : "gap-4 rounded-md bg-secondarycontainer px-5 py-[15px]",
        // 焦点环只在键盘聚焦时出现（:focus-visible），鼠标点击不显示；hover 底色为默认灰与 hover 灰按 8:2 混合（约 #f1f3f6）
        clickable &&
          "transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-focus hover:bg-[color-mix(in_srgb,var(--bg-color-secondarycontainer),var(--bg-color-secondarycontainer-hover)_20%)]",
      )}
    >
      <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        {clickable ? (
          <h3 className="m-0 min-w-0 text-body font-normal">
            {/* 拉伸点击区：按钮的 ::after 覆盖整张卡片，读屏只朗读这一个按钮 */}
            <button
              type="button"
              onClick={onOpen}
              aria-label={t.openDevice(device.name, device.id)}
              className="flex min-w-0 items-center gap-2 border-0 bg-transparent p-0 text-left outline-none after:absolute after:inset-0 after:rounded-md after:content-['']"
            >
              {title}
            </button>
          </h3>
        ) : (
          <h2 className="m-0 flex min-w-0 items-center gap-2 text-body font-normal">{title}</h2>
        )}

        {/* 标签顺序与 Figma 卡片 8602:34833 一致：24/7 → 云管家状态 → 注册来源 → 物联卡；未注册设备没有后两项 */}
        <div className="flex flex-wrap items-center gap-2">
          {device.service247 && <ServiceTag language={language} />}
          <StewardStatusTag device={device} language={language} />
          {device.source && <RegistrationSourceTag source={device.source} language={language} />}
          {device.source && <SimStatusTag sim={device.sim} language={language} />}
        </div>
      </header>

      <dl className="m-0 flex items-center gap-6">
        <Field label={t.fields.project} value={device.project?.name ?? "-"} />
        <span aria-hidden="true" className="h-5 w-px shrink-0 bg-stroke" />
        <Field label={t.fields.address} value={device.project?.address ?? "-"} />
        <span aria-hidden="true" className="h-5 w-px shrink-0 bg-stroke" />
        <Field
          label={t.fields.contract}
          value={device.contractValid ? (isDetail && device.contractPlan ? `${t.valid} (${device.contractPlan})` : t.valid) : t.invalid}
        />
        <span aria-hidden="true" className="h-5 w-px shrink-0 bg-stroke" />
        <Field label={t.fields.agreement} value={device.agreement ? t.valid : t.invalid} />
      </dl>

      {showModules && device.modules.length > 0 && <ModuleList device={device} language={language} />}
    </article>
  );
}
