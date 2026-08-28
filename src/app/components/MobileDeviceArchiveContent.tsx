// Mobile layout for 设备档案 tab

function SectionHeader({ title, showTag = false }: { title: string; showTag?: boolean }) {
  return (
    <div className="bg-[#fafbfc] relative shrink-0 w-full" style={{ borderBottom: "1px solid #dfe1e8" }}>
      <div className="flex items-center justify-between px-[12px] py-[8px]">
        <div className="flex items-center gap-[8px]">
          <div className="bg-[#4373f7] h-[14px] rounded-[1px] w-[4px] shrink-0" />
          <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414] whitespace-nowrap">
            {title}
          </span>
        </div>
        {showTag && (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M11.5 2.5H17.5V8.5L11.3 14.7C10.9 15.1 10.3 15.1 9.9 14.7L5.3 10.1C4.9 9.7 4.9 9.1 5.3 8.7L11.5 2.5Z" stroke="#141414" strokeWidth="1.4" strokeLinejoin="round"/>
            <circle cx="14.5" cy="5.5" r="1.5" fill="#141414"/>
          </svg>
        )}
      </div>
    </div>
  );
}

function FieldCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#f5f7fa] rounded-[6px] px-[12px] py-[6px] w-full flex flex-col gap-[2px]">
      <span className="font-['PingFang_SC:Medium',sans-serif] text-[12px] leading-[20px] text-[#141414] overflow-hidden text-ellipsis whitespace-nowrap">
        {label}
      </span>
      <span className="font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px] text-[#676a72] overflow-hidden text-ellipsis whitespace-nowrap">
        {value}
      </span>
    </div>
  );
}

function Section({
  title,
  showTag = false,
  fields,
}: {
  title: string;
  showTag?: boolean;
  fields: { label: string; value: string }[];
}) {
  return (
    <div className="relative rounded-[8px] w-full overflow-hidden" style={{ border: "1px solid #dfe1e8" }}>
      <SectionHeader title={title} showTag={showTag} />
      <div className="bg-white p-[12px] flex flex-col gap-[8px]">
        {fields.map((f, i) => (
          <FieldCard key={i} label={f.label} value={f.value} />
        ))}
      </div>
    </div>
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
  return (
    <div className="relative rounded-[8px] w-full overflow-hidden" style={{ border: "1px solid #dfe1e8" }}>
      <SectionHeader title={language === "cn" ? "楼层信息" : "Floor Information"} />
      <div className="bg-white p-[12px] flex flex-col gap-[8px]">

        {/* 总楼层数 */}
        <div className="bg-[#f5f7fa] rounded-[6px] flex items-center justify-center py-[20px]" style={{ minHeight: 100 }}>
          <div className="flex flex-col items-center gap-[8px]">
            <span className="font-['PingFang_SC:Semibold',sans-serif] text-[40px] leading-[48px] text-[#141414]">6</span>
            <span className="font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px] text-[#676a72]">
              {language === "cn" ? "总楼层数" : "Total Floors"}
            </span>
          </div>
        </div>

        {/* 楼层标签 */}
        <div className="flex flex-col gap-[2px] rounded-[6px] overflow-hidden">
          <div className="bg-[#f5f7fa] flex items-center justify-between px-[12px] py-[8px]">
            <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414]">
              {language === "cn" ? "楼层标签" : "Floor Labels"}
            </span>
            <div className="bg-[#1450f5] flex items-center justify-center px-[8px] py-[2px] rounded-[4px]">
              <span className="font-['PingFang_SC:Regular',sans-serif] text-[12px] leading-[20px] text-white">
                {language === "cn" ? "编辑" : "Edit"}
              </span>
            </div>
          </div>
          <div className="bg-[#f5f7fa] px-[16px] py-[12px] flex flex-col gap-[6px]">
            {FLOOR_LABELS.map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between">
                  <span className="font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px] text-[#141414] w-[72px]">{item.floor}</span>
                  <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414]">{item.label}</span>
                </div>
                {i < FLOOR_LABELS.length - 1 && <DashedLine />}
              </div>
            ))}
          </div>
        </div>

        {/* 楼层学习结果 */}
        <div className="flex flex-col gap-[2px] rounded-[6px] overflow-hidden">
          <div className="bg-[#f5f7fa] px-[12px] py-[8px]">
            <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414]">
              {language === "cn" ? "楼层学习结果" : "Floor Learning"}
            </span>
          </div>
          <div className="bg-[#f5f7fa] px-[16px] py-[12px] flex flex-col gap-[8px]">
            <div className="flex justify-end">
              <span className="font-['PingFang_SC:Regular',sans-serif] text-[12px] leading-[20px] text-[#8f9195]">
                {language === "cn" ? "楼层间距" : "Floor Spacing"}
              </span>
            </div>
            {FLOOR_LEARNING.map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between">
                  <span className="font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px] text-[#141414] w-[72px]">{item.range}</span>
                  <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414]">{item.distance}</span>
                </div>
                {i < FLOOR_LEARNING.length - 1 && <DashedLine />}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
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

// ── Main export ───────────────────────────────────────────────────────────────

export function MobileDeviceArchiveContent({ language }: { language: "cn" | "en" }) {
  return (
    <div className="flex flex-col gap-[16px]">
      <Section
        title={language === "cn" ? "设备信息" : "Device Information"}
        fields={language === "cn" ? DEVICE_INFO_CN : DEVICE_INFO_EN}
      />
      <Section
        title={language === "cn" ? "合同信息" : "Contract Information"}
        showTag
        fields={language === "cn" ? CONTRACT_INFO_CN : CONTRACT_INFO_EN}
      />
      <Section
        title={language === "cn" ? "配置参数" : "Configuration"}
        showTag
        fields={language === "cn" ? CONFIG_CN : CONFIG_EN}
      />
      <FloorInfoSection language={language} />
    </div>
  );
}
