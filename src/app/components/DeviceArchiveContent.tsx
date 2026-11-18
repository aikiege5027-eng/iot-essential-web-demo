import { useState } from "react";
import type { AppEdition } from "../data/accounts";
import { DetailSection } from "./device-detail/DetailSection";
import { TagFilterButton } from "./TagFilterButton";

function FieldCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-secondarycontainer rounded-[6px] px-[12px] py-[6px] flex flex-col gap-[2px]" style={{ flex: "1 0 0", minWidth: 0 }}>
      <span className="font-medium text-foot12 text-primary-text overflow-hidden text-ellipsis whitespace-nowrap">{label}</span>
      <span className="font-normal text-body text-secondary-text overflow-hidden text-ellipsis whitespace-nowrap">{value}</span>
    </div>
  );
}

function FieldGrid({ fields }: { fields: { label: string; value: string }[] }) {
  return (
    <div className="grid gap-x-[12px] gap-y-[8px]" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
      {fields.map((f, i) => (
        <FieldCard key={i} label={f.label} value={f.value} />
      ))}
    </div>
  );
}

// ── 设备信息 ─────────────────────────────────────────────────────────────────

const deviceInfoFields = [
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

// ── 合同信息 ─────────────────────────────────────────────────────────────────

const contractInfoFields = [
  { label: "客户名称", value: "中国国家博物馆" },
  { label: "客户编号", value: "A10176639" },
  { label: "保养合同", value: "通力MonoSpace Special" },
  { label: "Line NO", value: "T66" },
  { label: "保养合同类型", value: "KONE Care Plus" },
  { label: "合同号", value: "0063466105" },
  { label: "合同开始日期", value: "2024-06-01" },
  { label: "合同结束日期", value: "2026-11-02" },
];

// ── 配置参数 ─────────────────────────────────────────────────────────────────

const configFields = [
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

// ── 楼层信息 ─────────────────────────────────────────────────────────────────

const floorLabels = [
  { floor: "6层", label: "5F" },
  { floor: "5层", label: "4F" },
  { floor: "4层", label: "3F" },
  { floor: "3层", label: "2F" },
  { floor: "2层", label: "1F" },
  { floor: "1层", label: "B1" },
];

const floorLearning = [
  { range: "4F - 5F", distance: "370cm" },
  { range: "3F - 4F", distance: "370cm" },
  { range: "2F - 3F", distance: "370cm" },
  { range: "1F - 2F", distance: "370cm" },
  { range: "B1 - 1F", distance: "370cm" },
];

function DashedDivider() {
  return (
    <div className="w-full h-px my-[4px]" style={{ background: "repeating-linear-gradient(to right, var(--component-stroke) 0, var(--component-stroke) 4px, transparent 4px, transparent 8px)" }} />
  );
}

export function DeviceArchiveContent({ language, edition = "iot", tenant }: { language: 'en' | 'cn'; edition?: AppEdition; /** 设备所属租户（仅仟帆展示） */ tenant?: string }) {
  // 仟帆版本没有合同信息卡片，设备信息多一个「所属租户」字段
  const showContract = edition !== "qianfan";
  const deviceFields = edition === "qianfan" ? [...deviceInfoFields, { label: language === 'cn' ? "所属租户" : "Tenant", value: tenant ?? "-" }] : deviceInfoFields;
  const [contractTab, setContractTab] = useState<'主体' | '数字化服务'>('主体');
  const [configTab, setConfigTab] = useState<'主体' | '井道和悬吊' | '门'>('主体');

  return (
    <div className="flex flex-col gap-[16px] pb-[24px]">
      {/* 设备信息 */}
      <DetailSection title={language === 'cn' ? "设备信息" : "Device Information"} titleId="archive-device-title">
        <div className="p-3">
          <FieldGrid fields={deviceFields} />
        </div>
      </DetailSection>

      {/* 合同信息（仅通力） */}
      {showContract && (
        <DetailSection
          title={language === 'cn' ? "合同信息" : "Contract Information"}
          titleId="archive-contract-title"
          extra={
            <div className="flex gap-[7px]">
            <TagFilterButton label={language === 'cn' ? "合同主体" : "Main Contract"} active={contractTab === '主体'} onClick={() => setContractTab('主体')} />
            <TagFilterButton label={language === 'cn' ? "数字化服务" : "Digital Services"} active={contractTab === '数字化服务'} onClick={() => setContractTab('数字化服务')} />
            </div>
          }
        >
          <div className="p-3">
            <FieldGrid fields={contractInfoFields} />
          </div>
        </DetailSection>
      )}
      {/* 配置参数 */}
      <DetailSection
        title={language === 'cn' ? "配置参数" : "Configuration"}
        titleId="archive-config-title"
        extra={
          <div className="flex gap-[7px]">
          <TagFilterButton label={language === 'cn' ? "主体" : "Main"} active={configTab === '主体'} onClick={() => setConfigTab('主体')} />
          <TagFilterButton label={language === 'cn' ? "井道和悬吊" : "Hoistway"} active={configTab === '井道和悬吊'} onClick={() => setConfigTab('井道和悬吊')} />
          <TagFilterButton label={language === 'cn' ? "门" : "Door"} active={configTab === '门'} onClick={() => setConfigTab('门')} />
          </div>
        }
      >
        <div className="p-3">
          <FieldGrid fields={configFields} />
        </div>
      </DetailSection>

      {/* 楼层信息 */}
      <DetailSection title={language === 'cn' ? "楼层信息" : "Floor Information"} titleId="archive-floor-title">
        <div className="p-3">
          <div className="grid grid-cols-3 gap-[12px] items-stretch">
            {/* 总楼层数 */}
            <div className="bg-secondarycontainer rounded-[6px] flex items-center justify-center px-[28px] py-[20px]">
              <div className="flex flex-col items-center gap-[8px]">
                <span className="font-semibold text-[40px] leading-[48px] text-primary-text">6</span>
                <span className="font-normal text-body text-secondary-text">{language === 'cn' ? "总楼层数" : "Total Floors"}</span>
              </div>
            </div>

            {/* 楼层标签 */}
            <div className="flex flex-col gap-[2px] rounded-[6px] overflow-hidden">
              <div className="bg-secondarycontainer flex items-center justify-between px-[12px] py-[8px]">
                <span className="font-medium text-body text-primary-text">{language === 'cn' ? "楼层标签" : "Floor Labels"}</span>
                <div className="bg-brand-base flex items-center justify-center px-[8px] py-[2px] rounded-[4px] h-[24px]">
                  <span className="font-normal text-foot12 text-white">{language === 'cn' ? "编辑" : "Edit"}</span>
                </div>
              </div>
              <div className="bg-secondarycontainer flex-1 px-[16px] py-[12px] flex flex-col gap-[6px]">
                {floorLabels.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between">
                      <span className="font-normal text-body text-primary-text w-[72px]">{item.floor}</span>
                      <span className="font-medium text-body text-primary-text">{item.label}</span>
                    </div>
                    {i < floorLabels.length - 1 && <DashedDivider />}
                  </div>
                ))}
              </div>
            </div>

            {/* 楼层学习结果 */}
            <div className="flex flex-col gap-[2px] rounded-[6px] overflow-hidden">
              <div className="bg-secondarycontainer px-[12px] py-[8px]">
                <span className="font-medium text-body text-primary-text">{language === 'cn' ? "楼层学习结果" : "Floor Learning"}</span>
              </div>
              <div className="bg-secondarycontainer flex-1 px-[16px] py-[12px] flex flex-col gap-[8px]">
                <div className="flex justify-end mb-[4px]">
                  <span className="font-normal text-foot12 text-placeholder">{language === 'cn' ? "楼层间距" : "Floor Spacing"}</span>
                </div>
                {floorLearning.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between">
                      <span className="font-normal text-body text-primary-text w-[72px]">{item.range}</span>
                      <span className="font-medium text-body text-primary-text">{item.distance}</span>
                    </div>
                    {i < floorLearning.length - 1 && <DashedDivider />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DetailSection>
    </div>
  );
}
