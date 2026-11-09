// Mobile layout for 设备档案 tab

import { useState } from "react";
import { Button, Dropdown, Input } from "tdesign-react";
import { DetailCardHeader } from "./device-detail/DetailSection";
import { TagIcon } from "./icons/device-detail-icons";

type ArchiveFilter = {
  label: string;
  active: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
};

function ArchiveHeaderFilter({ filter }: { filter: ArchiveFilter }) {
  return (
    <Dropdown
      trigger="click"
      placement="bottom-right"
      minColumnWidth={filter.options.reduce((width, option) => Math.max(width, option.label.length * 14 + 16), 92)}
      options={filter.options.map((option) => ({ content: option.label, value: option.value, active: option.value === filter.active }))}
      popupProps={{ overlayClassName: "km-mobile-archive-filter-menu" }}
      onClick={(option) => filter.onChange(String(option.value))}
    >
      <button
        type="button"
        aria-label={filter.label}
        aria-haspopup="menu"
        className="flex size-5 cursor-pointer items-center justify-center rounded-xs border-0 bg-transparent p-0 text-icon-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
      >
        <TagIcon aria-hidden="true" className="size-5" />
      </button>
    </Dropdown>
  );
}

function SectionHeader({ title, titleId, filter }: { title: string; titleId: string; filter?: ArchiveFilter }) {
  return <DetailCardHeader title={title} titleId={titleId} extra={filter ? <ArchiveHeaderFilter filter={filter} /> : undefined} />;
}

function FieldCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full flex-col gap-0.5 rounded-md bg-secondarycontainer px-3 py-1.5">
      <span className="truncate text-foot12 font-medium text-primary-text" title={label}>{label}</span>
      <span className="truncate text-body text-secondary-text" title={value}>{value}</span>
    </div>
  );
}

function Section({
  id,
  title,
  filter,
  fields,
}: {
  id: string;
  title: string;
  filter?: ArchiveFilter;
  fields: { label: string; value: string }[];
}) {
  return (
    <section aria-labelledby={id} className="w-full overflow-hidden rounded-lg border border-stroke bg-container">
      <SectionHeader title={title} titleId={id} filter={filter} />
      <div className="flex flex-col gap-2 bg-container p-3">
        {fields.map((f, i) => (
          <FieldCard key={i} label={f.label} value={f.value} />
        ))}
      </div>
    </section>
  );
}

function DashedLine() {
  return (
    <div className="w-full h-px" style={{ background: "repeating-linear-gradient(to right, #DFE1E8 0, #DFE1E8 2px, transparent 2px, transparent 4px)" }} />
  );
}

// ── 楼层信息 ──────────────────────────────────────────────────────────────────

const FLOOR_LABELS = [
  { floor: "6层", label: "5F" },
  { floor: "5层", label: "4F" },
  { floor: "4层", label: "3F" },
  { floor: "3层", label: "2F" },
  { floor: "2层", label: "1F" },
  { floor: "1层", label: "B1" },
];

const FLOOR_LEARNING = [
  { range: "4F - 5F", distance: "370cm" },
  { range: "3F - 4F", distance: "370cm" },
  { range: "2F - 3F", distance: "370cm" },
  { range: "1F - 2F", distance: "370cm" },
  { range: "B1 - 1F", distance: "370cm" },
];

function FloorInfoSection({ language }: { language: "cn" | "en" }) {
  const [floorLabels, setFloorLabels] = useState(FLOOR_LABELS);
  const [draftLabels, setDraftLabels] = useState(FLOOR_LABELS);
  const [isEditing, setIsEditing] = useState(false);
  const isChinese = language === "cn";

  const startEditing = () => {
    setDraftLabels(floorLabels);
    setIsEditing(true);
  };
  const cancelEditing = () => {
    setDraftLabels(floorLabels);
    setIsEditing(false);
  };
  const saveFloorLabels = () => {
    setFloorLabels(draftLabels);
    setIsEditing(false);
  };

  return (
    <section aria-labelledby="mobile-archive-floor-title" className="w-full overflow-hidden rounded-lg border border-stroke bg-container">
      <SectionHeader title={language === "cn" ? "楼层信息" : "Floor Information"} titleId="mobile-archive-floor-title" />
      <div className="flex flex-col gap-2 bg-container p-3">

        {/* 总楼层数 */}
        <div className="flex h-40 items-center justify-center rounded-md bg-secondarycontainer px-7 py-5">
          <div className="flex flex-col items-center gap-2">
            <span className="text-h1 font-semibold text-primary-text">6</span>
            <span className="text-body text-secondary-text">
              {isChinese ? "总楼层数" : "Total Floors"}
            </span>
          </div>
        </div>

        {/* 楼层标签 */}
        <div className="flex flex-col gap-[2px] rounded-[6px] overflow-hidden">
          <div className="flex items-center justify-between bg-secondarycontainer px-3 py-2">
            <span className="text-body font-medium text-primary-text">
              {isChinese ? "楼层标签" : "Floor Labels"}
            </span>
            {isEditing ? (
              <div className="flex items-center gap-2">
                <Button size="small" theme="default" variant="outline" onClick={cancelEditing}>{isChinese ? "取消" : "Cancel"}</Button>
                <Button size="small" theme="primary" onClick={saveFloorLabels}>{isChinese ? "完成" : "Done"}</Button>
              </div>
            ) : (
              <Button size="small" theme="primary" onClick={startEditing}>{isChinese ? "编辑" : "Edit"}</Button>
            )}
          </div>
          <div className="flex flex-col gap-1.5 bg-secondarycontainer px-4 py-3">
            {floorLabels.map((item, i) => (
              <div key={item.floor}>
                <div className={`flex items-center ${isEditing ? "gap-[88px]" : "justify-between"}`}>
                  <span className="w-[72px] shrink-0 text-body text-primary-text">{item.floor}</span>
                  {isEditing ? (
                    <Input
                      size="medium"
                      value={draftLabels[i].label}
                      aria-label={`${item.floor} ${isChinese ? "楼层标签" : "floor label"}`}
                      onChange={(value) => setDraftLabels((current) => current.map((entry, index) => index === i ? { ...entry, label: String(value) } : entry))}
                    />
                  ) : (
                    <span className="min-w-0 flex-1 text-right text-body font-medium text-primary-text">{item.label}</span>
                  )}
                </div>
                {i < floorLabels.length - 1 && <DashedLine />}
              </div>
            ))}
          </div>
        </div>

        {/* 楼层学习结果 */}
        <div className="flex flex-col gap-0.5 overflow-hidden rounded-md">
          <div className="bg-secondarycontainer px-3 py-2">
            <span className="text-body font-medium text-primary-text">
              {isChinese ? "楼层学习结果" : "Floor Learning"}
            </span>
          </div>
          <div className="flex flex-col gap-2 bg-secondarycontainer px-4 py-3">
            <div className="flex justify-end">
              <span className="text-foot12 text-placeholder">
                {isChinese ? "楼层间距" : "Floor Spacing"}
              </span>
            </div>
            {FLOOR_LEARNING.map((item, i) => (
              <div key={item.range}>
                <div className="flex items-center justify-between">
                  <span className="w-[72px] text-body text-primary-text">{item.range}</span>
                  <span className="text-body font-medium text-primary-text">{item.distance}</span>
                </div>
                {i < FLOOR_LEARNING.length - 1 && <DashedLine />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const DEVICE_INFO_CN = [
  { label: "制造商", value: "KONE" },
  { label: "制造年份", value: "2020" },
  { label: "MBM技术平台", value: "通力MonoSpace Special" },
  { label: "公司代码", value: "KCC" },
  { label: "计划工作组", value: "T66" },
  { label: "工作中心", value: "KCCT0491" },
  { label: "业务类型", value: "办公大楼" },
  { label: "工地名称", value: "中国国家博物馆改扩建工程" },
  { label: "地址", value: "北京市东城区东长安街16号,100006,北京市" },
  { label: "梯号", value: "AQ-S-A15-2" },
  { label: "建筑物标识符", value: "t3FwJLgBOkU" },
  { label: "制造商序列编号", value: "42333841" },
];

const DEVICE_INFO_EN = [
  { label: "Manufacturer", value: "KONE" },
  { label: "Manufacturing Year", value: "2020" },
  { label: "MBM Tech Platform", value: "KONE MonoSpace Special" },
  { label: "Company Code", value: "KCC" },
  { label: "Work Group", value: "T66" },
  { label: "Work Center", value: "KCCT0491" },
  { label: "Business Type", value: "Office Building" },
  { label: "Site Name", value: "China National Museum Expansion" },
  { label: "Address", value: "16 East Chang'an Ave, 100006, Beijing" },
  { label: "Elevator No.", value: "AQ-S-A15-2" },
  { label: "Building ID", value: "t3FwJLgBOkU" },
  { label: "Manufacturer Serial No.", value: "42333841" },
];

const CONTRACT_INFO_CN = [
  { label: "客户名称", value: "中国国家博物馆" },
  { label: "客户编号", value: "A10176639" },
  { label: "保养合同", value: "通力MonoSpace Special" },
  { label: "Line NO", value: "T66" },
  { label: "保养合同类型", value: "KONE Care Plus" },
  { label: "合同号", value: "0063466105" },
  { label: "合同开始日期", value: "2024-06-01" },
  { label: "合同结束日期", value: "2026-11-02" },
];

const CONTRACT_INFO_EN = [
  { label: "Customer Name", value: "China National Museum" },
  { label: "Customer No.", value: "A10176639" },
  { label: "Maintenance Contract", value: "KONE MonoSpace Special" },
  { label: "Line NO", value: "T66" },
  { label: "Contract Type", value: "KONE Care Plus" },
  { label: "Contract No.", value: "0063466105" },
  { label: "Contract Start", value: "2024-06-01" },
  { label: "Contract End", value: "2026-11-02" },
];

const CONFIG_CN = [
  { label: "环境状况", value: "02" },
  { label: "启动次数（年预计）", value: "200000" },
  { label: "额定载重（公斤）", value: "1600" },
  { label: "额定速度（m/s）", value: "1.75" },
  { label: "厅门数", value: "6" },
  { label: "服务楼层总数", value: "8" },
  { label: "主机型号", value: "KO0060" },
  { label: "控制系统", value: "--" },
  { label: "驱动系统", value: "0040" },
  { label: "型号编码", value: "--" },
];

const CONFIG_EN = [
  { label: "Environment", value: "02" },
  { label: "Starts Per Year (Est.)", value: "200000" },
  { label: "Rated Load (kg)", value: "1600" },
  { label: "Rated Speed (m/s)", value: "1.75" },
  { label: "Landing Doors", value: "6" },
  { label: "Total Service Floors", value: "8" },
  { label: "Machine Model", value: "KO0060" },
  { label: "Control System", value: "--" },
  { label: "Drive System", value: "0040" },
  { label: "Model Code", value: "--" },
];

const CONTRACT_DIGITAL_CN = [
  { label: "数字化服务", value: "云管家服务" },
  { label: "服务状态", value: "已启用" },
  { label: "服务开始日期", value: "2024-06-01" },
  { label: "服务结束日期", value: "2026-11-02" },
];

const CONTRACT_DIGITAL_EN = [
  { label: "Digital Service", value: "Cloud Steward" },
  { label: "Service Status", value: "Active" },
  { label: "Service Start", value: "2024-06-01" },
  { label: "Service End", value: "2026-11-02" },
];

const CONFIG_HOISTWAY_CN = [
  { label: "井道类型", value: "单井道" },
  { label: "提升高度（m）", value: "22.2" },
  { label: "顶层高度（mm）", value: "4200" },
  { label: "底坑深度（mm）", value: "1500" },
];

const CONFIG_HOISTWAY_EN = [
  { label: "Hoistway Type", value: "Single" },
  { label: "Travel Height (m)", value: "22.2" },
  { label: "Headroom (mm)", value: "4200" },
  { label: "Pit Depth (mm)", value: "1500" },
];

const CONFIG_DOOR_CN = [
  { label: "轿门类型", value: "中分门" },
  { label: "厅门类型", value: "中分门" },
  { label: "开门宽度（mm）", value: "900" },
  { label: "开门高度（mm）", value: "2100" },
];

const CONFIG_DOOR_EN = [
  { label: "Car Door Type", value: "Center Opening" },
  { label: "Landing Door Type", value: "Center Opening" },
  { label: "Door Width (mm)", value: "900" },
  { label: "Door Height (mm)", value: "2100" },
];

// ── Main export ───────────────────────────────────────────────────────────────

export function MobileDeviceArchiveContent({ language }: { language: "cn" | "en" }) {
  const [contractView, setContractView] = useState<"main" | "digital">("main");
  const [configView, setConfigView] = useState<"main" | "hoistway" | "door">("main");
  const isChinese = language === "cn";
  const contractFields = contractView === "main"
    ? (isChinese ? CONTRACT_INFO_CN : CONTRACT_INFO_EN)
    : (isChinese ? CONTRACT_DIGITAL_CN : CONTRACT_DIGITAL_EN);
  const configFields = configView === "main"
    ? (isChinese ? CONFIG_CN : CONFIG_EN)
    : configView === "hoistway"
      ? (isChinese ? CONFIG_HOISTWAY_CN : CONFIG_HOISTWAY_EN)
      : (isChinese ? CONFIG_DOOR_CN : CONFIG_DOOR_EN);

  return (
    <div className="flex flex-col gap-4">
      <Section
        id="mobile-archive-device-title"
        title={isChinese ? "设备信息" : "Device Information"}
        fields={isChinese ? DEVICE_INFO_CN : DEVICE_INFO_EN}
      />
      <Section
        id="mobile-archive-contract-title"
        title={isChinese ? "合同信息" : "Contract Information"}
        filter={{
          label: isChinese ? "筛选合同信息" : "Filter contract information",
          active: contractView,
          options: isChinese
            ? [{ label: "合同主体", value: "main" }, { label: "数字化服务", value: "digital" }]
            : [{ label: "Main Contract", value: "main" }, { label: "Digital Services", value: "digital" }],
          onChange: (value) => setContractView(value as "main" | "digital"),
        }}
        fields={contractFields}
      />
      <Section
        id="mobile-archive-config-title"
        title={isChinese ? "配置参数" : "Configuration"}
        filter={{
          label: isChinese ? "筛选配置参数" : "Filter configuration",
          active: configView,
          options: isChinese
            ? [{ label: "主体", value: "main" }, { label: "井道和悬吊", value: "hoistway" }, { label: "门", value: "door" }]
            : [{ label: "Main", value: "main" }, { label: "Hoistway", value: "hoistway" }, { label: "Door", value: "door" }],
          onChange: (value) => setConfigView(value as "main" | "hoistway" | "door"),
        }}
        fields={configFields}
      />
      <FloorInfoSection language={language} />
    </div>
  );
}
