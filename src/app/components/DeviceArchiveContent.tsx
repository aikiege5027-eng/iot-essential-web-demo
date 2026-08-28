import { useState } from "react";

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="bg-[#fafbfc] relative shrink-0 w-full" style={{ borderBottom: "1px solid #dfe1e8" }}>
      <div className="flex flex-row items-center px-[12px] py-[8px]">
        <div className="flex gap-[8px] items-center">
          <div className="bg-[#4373f7] h-[14px] rounded-[1px] w-[4px]" />
          <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414] whitespace-nowrap">{title}</span>
        </div>
      </div>
    </div>
  );
}

function FieldCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#f5f7fa] rounded-[6px] px-[12px] py-[6px] flex flex-col gap-[2px]" style={{ flex: "1 0 0", minWidth: 0 }}>
      <span className="font-['PingFang_SC:Medium',sans-serif] text-[12px] leading-[20px] text-[#141414] overflow-hidden text-ellipsis whitespace-nowrap">{label}</span>
      <span className="font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px] text-[#676a72] overflow-hidden text-ellipsis whitespace-nowrap">{value}</span>
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

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-[8px] py-[2px] rounded-[3px] text-[12px] border cursor-pointer ${
        active
          ? "bg-[#f3f6fe] border-[#1450f5] text-[#1450f5] font-['PingFang_SC:Medium',sans-serif]"
          : "bg-white border-[#c8cad0] text-[#141414] font-['PingFang_SC:Regular',sans-serif]"
      }`}
      style={{ lineHeight: "20px" }}
    >
      {label}
    </button>
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
    <div className="w-full h-px my-[4px]" style={{ background: "repeating-linear-gradient(to right, #DFE1E8 0, #DFE1E8 4px, transparent 4px, transparent 8px)" }} />
  );
}

export function DeviceArchiveContent({ language }: { language: 'en' | 'cn' }) {
  const [contractTab, setContractTab] = useState<'主体' | '数字化服务'>('主体');
  const [configTab, setConfigTab] = useState<'主体' | '井道和悬吊' | '门'>('主体');

  return (
    <div className="flex flex-col gap-[16px] pb-[24px]">
      {/* 设备信息 */}
      <div className="relative rounded-[8px] overflow-hidden border border-[#dfe1e8]">
        <SectionHeader title={language === 'cn' ? "设备信息" : "Device Information"} />
        <div className="bg-white p-[12px]">
          <FieldGrid fields={deviceInfoFields} />
        </div>
      </div>

      {/* 合同信息 */}
      <div className="relative rounded-[8px] overflow-hidden border border-[#dfe1e8]">
        <SectionHeader title={language === 'cn' ? "合同信息" : "Contract Information"} />
        <div className="bg-white p-[12px] pt-[12px]">
          <FieldGrid fields={contractInfoFields} />
        </div>
        <div className="absolute top-[7px] right-[12px] flex gap-[7px]">
          <TabButton label={language === 'cn' ? "合同主体" : "Main Contract"} active={contractTab === '主体'} onClick={() => setContractTab('主体')} />
          <TabButton label={language === 'cn' ? "数字化服务" : "Digital Services"} active={contractTab === '数字化服务'} onClick={() => setContractTab('数字化服务')} />
        </div>
      </div>

      {/* 配置参数 */}
      <div className="relative rounded-[8px] overflow-hidden border border-[#dfe1e8]">
        <SectionHeader title={language === 'cn' ? "配置参数" : "Configuration"} />
        <div className="bg-white p-[12px]">
          <FieldGrid fields={configFields} />
        </div>
        <div className="absolute top-[8px] right-[12px] flex gap-[7px]">
          <TabButton label={language === 'cn' ? "主体" : "Main"} active={configTab === '主体'} onClick={() => setConfigTab('主体')} />
          <TabButton label={language === 'cn' ? "井道和悬吊" : "Hoistway"} active={configTab === '井道和悬吊'} onClick={() => setConfigTab('井道和悬吊')} />
          <TabButton label={language === 'cn' ? "门" : "Door"} active={configTab === '门'} onClick={() => setConfigTab('门')} />
        </div>
      </div>

      {/* 楼层信息 */}
      <div className="relative rounded-[8px] overflow-hidden border border-[#dfe1e8]">
        <SectionHeader title={language === 'cn' ? "楼层信息" : "Floor Information"} />
        <div className="bg-white p-[12px]">
          <div className="grid grid-cols-3 gap-[12px] items-stretch">
            {/* 总楼层数 */}
            <div className="bg-[#f5f7fa] rounded-[6px] flex items-center justify-center px-[28px] py-[20px]">
              <div className="flex flex-col items-center gap-[8px]">
                <span className="font-['PingFang_SC:Semibold',sans-serif] text-[40px] leading-[48px] text-[#141414]">6</span>
                <span className="font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px] text-[#676a72]">{language === 'cn' ? "总楼层数" : "Total Floors"}</span>
              </div>
            </div>

            {/* 楼层标签 */}
            <div className="flex flex-col gap-[2px] rounded-[6px] overflow-hidden">
              <div className="bg-[#f5f7fa] flex items-center justify-between px-[12px] py-[8px]">
                <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414]">{language === 'cn' ? "楼层标签" : "Floor Labels"}</span>
                <div className="bg-[#1450f5] flex items-center justify-center px-[8px] py-[2px] rounded-[4px] h-[24px]">
                  <span className="font-['PingFang_SC:Regular',sans-serif] text-[12px] leading-[20px] text-white">{language === 'cn' ? "编辑" : "Edit"}</span>
                </div>
              </div>
              <div className="bg-[#f5f7fa] flex-1 px-[16px] py-[12px] flex flex-col gap-[6px]">
                {floorLabels.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between">
                      <span className="font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px] text-[#141414] w-[72px]">{item.floor}</span>
                      <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414]">{item.label}</span>
                    </div>
                    {i < floorLabels.length - 1 && <DashedDivider />}
                  </div>
                ))}
              </div>
            </div>

            {/* 楼层学习结果 */}
            <div className="flex flex-col gap-[2px] rounded-[6px] overflow-hidden">
              <div className="bg-[#f5f7fa] px-[12px] py-[8px]">
                <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414]">{language === 'cn' ? "楼层学习结果" : "Floor Learning"}</span>
              </div>
              <div className="bg-[#f5f7fa] flex-1 px-[16px] py-[12px] flex flex-col gap-[8px]">
                <div className="flex justify-end mb-[4px]">
                  <span className="font-['PingFang_SC:Regular',sans-serif] text-[12px] leading-[20px] text-[#8f9195]">{language === 'cn' ? "楼层间距" : "Floor Spacing"}</span>
                </div>
                {floorLearning.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between">
                      <span className="font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px] text-[#141414] w-[72px]">{item.range}</span>
                      <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414]">{item.distance}</span>
                    </div>
                    {i < floorLearning.length - 1 && <DashedDivider />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
