import { useState } from "react";

const T = {
  en: {
    realtimeData: "Real-time Data",
    sensorData: "Sensor Data",
    operationData: "Operation Data",
    moduleInfo: "Module Info",
    currentFloor: "Current Floor",
    runSpeed: "Speed",
    serviceMode: "Service Mode",
    doorAStat: "Car Door A",
    doorBStat: "Car Door B",
    doorZoneStat: "Door Zone",
    temperature: "Temperature",
    humidity: "Humidity",
    velocity: "Velocity",
    levelingUp: "Leveling Up",
    levelingDown: "Leveling Down",
    runDuration: "Run Duration",
    startFloor: "Start Floor",
    stopFloor: "Stop Floor",
    moduleNameCol: "Module Name",
    connStatus: "Connection",
    serialNo: "Serial No.",
    typeCol: "Type",
    regStatus: "Reg. Status",
    swVersion: "SW Version",
    actions: "Actions",
    doorASensor: "Car Door A Sensor",
    doorBSensor: "Car Door B Sensor",
    machineRoomSensor: "Machine Room",
    online: "Online",
    registered: "Registered",
  },
  cn: {
    realtimeData: "实时数据",
    sensorData: "传感器数据",
    operationData: "运行数据",
    moduleInfo: "模块信息",
    currentFloor: "当前楼层",
    runSpeed: "运行速度",
    serviceMode: "服务模式",
    doorAStat: "轿门A状态",
    doorBStat: "轿门B状态",
    doorZoneStat: "门区状态",
    temperature: "温度",
    humidity: "湿度",
    velocity: "速度",
    levelingUp: "平层感应上",
    levelingDown: "平层感应下",
    runDuration: "运行持续时间",
    startFloor: "启动楼层",
    stopFloor: "停止楼层",
    moduleNameCol: "模块名称",
    connStatus: "连接状态",
    serialNo: "序列号",
    typeCol: "类型",
    regStatus: "注册状态",
    swVersion: "软件版本",
    actions: "操作",
    doorASensor: "轿门A传感器",
    doorBSensor: "轿门B传感器",
    machineRoomSensor: "机房传感器",
    online: "在线",
    registered: "已注册",
  },
};

const TIMESTAMP = "2026-04-04 16:49:39";

function SectionCard({ children, absoluteContent }: { children: React.ReactNode; absoluteContent?: React.ReactNode }) {
  return (
    <div className="relative rounded-[8px] w-full" style={{ border: "1px solid #dfe1e8" }}>
      <div className="flex flex-col items-start overflow-clip rounded-[8px] w-full">
        {children}
      </div>
      {absoluteContent}
    </div>
  );
}

function SectionHeader({ title, timestamp }: { title: string; timestamp?: string }) {
  return (
    <div className="bg-[#fafbfc] w-full" style={{ borderBottom: "1px solid #dfe1e8" }}>
      <div className="flex items-center gap-[12px] pb-[9px] pt-[8px] px-[12px]">
        <div className="flex gap-[8px] items-center shrink-0">
          <div className="bg-[#4373f7] h-[14px] rounded-[1px] w-[4px]" />
          <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] text-[#141414] text-[14px] whitespace-nowrap">{title}</p>
        </div>
        {timestamp && (
          <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[#676a72] text-[12px] whitespace-nowrap">{timestamp}</p>
        )}
      </div>
    </div>
  );
}

function ValueText({ value }: { value: string }) {
  return <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[22px] text-[#141414] text-[14px]">{value}</p>;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function LayersIcon({ fill = "#1450F5" }: { fill?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5L17.5 6.5L10 10.5L2.5 6.5Z" fill={fill}/>
      <path d="M2.5 10L10 14L17.5 10" stroke={fill} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5 13.5L10 17.5L17.5 13.5" stroke={fill} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DashboardIcon({ fill = "#1450F5" }: { fill?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2.5 14.5A7.5 7.5 0 0 1 17.5 14.5" stroke={fill} strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M10 14.5L13.5 8.5" stroke={fill} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="14.5" r="1.5" fill={fill}/>
    </svg>
  );
}

function CheckRectIcon({ fill = "#1450F5" }: { fill?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="2" width="16" height="16" rx="2" stroke={fill} strokeWidth="1.4"/>
      <path d="M5.5 10L8.5 13L14.5 7" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DoorClosedIcon({ fill = "#1450F5" }: { fill?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="4" y="2" width="12" height="16" rx="1" stroke={fill} strokeWidth="1.4"/>
      <circle cx="14" cy="10" r="1.2" fill={fill}/>
    </svg>
  );
}

function DoorOpenIcon({ fill = "#1450F5" }: { fill?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 18V2L13 4V18H4Z" stroke={fill} strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M13 18H16" stroke={fill} strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="11.5" cy="11" r="1.2" fill={fill}/>
    </svg>
  );
}

function WarningTriangleIcon({ fill = "#1450F5" }: { fill?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L18.5 17.5H1.5Z" stroke={fill} strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M10 8V12" stroke={fill} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="15" r="1" fill={fill}/>
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1L13 8H9.5V13H4.5V8H1L7 1Z" fill="#141414"/>
    </svg>
  );
}

function ThermometerIcon({ fill = "#3C3BC6" }: { fill?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12 11.3V5C12 3.9 11.1 3 10 3C8.9 3 8 3.9 8 5V11.3C7 11.9 6.5 12.9 6.5 14C6.5 15.9 8.1 17.5 10 17.5C11.9 17.5 13.5 15.9 13.5 14C13.5 12.9 13 11.9 12 11.3Z" stroke={fill} strokeWidth="1.3"/>
      <circle cx="10" cy="14" r="2.2" fill={fill}/>
      <path d="M10 5V11" stroke={fill} strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M12 7H13.5" stroke={fill} strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

function HumidityIcon({ fill = "#3C3BC6" }: { fill?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 3C10 3 5 9.5 5 13.5C5 16 7.24 18 10 18C12.76 18 15 16 15 13.5C15 9.5 10 3 10 3Z" stroke={fill} strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowUpKoneIcon({ fill = "#3C3BC6" }: { fill?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 4L16 11H12.5V17H7.5V11H4L10 4Z" fill={fill}/>
    </svg>
  );
}

function ArrowDownKoneIcon({ fill = "#3C3BC6" }: { fill?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 16L4 9H7.5V3H12.5V9H16L10 16Z" fill={fill}/>
    </svg>
  );
}

function ClockIcon({ fill = "#676A72" }: { fill?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke={fill} strokeWidth="1.4"/>
      <path d="M10 5.5V10L13 12.5" stroke={fill} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function NodeIcon() {
  return (
    <div className="bg-[#eaecf1] flex items-center justify-center p-[4px] rounded-[6px] shrink-0 size-[24px]">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="2" fill="#43464F"/>
        <circle cx="2" cy="2" r="1.5" stroke="#43464F" strokeWidth="0.8"/>
        <circle cx="12" cy="2" r="1.5" stroke="#43464F" strokeWidth="0.8"/>
        <circle cx="2" cy="12" r="1.5" stroke="#43464F" strokeWidth="0.8"/>
        <circle cx="12" cy="12" r="1.5" stroke="#43464F" strokeWidth="0.8"/>
        <path d="M3.4 3.4L5.6 5.6M8.4 8.4L10.6 10.6M8.4 5.6L10.6 3.4M5.6 8.4L3.4 10.6" stroke="#43464F" strokeWidth="0.8"/>
      </svg>
    </div>
  );
}

function RefreshIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 16 16">
        <path d="M14 8C14 11.31 11.31 14 8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C10.17 2 12.07 3.1 13.2 4.8" stroke="#141414" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M13 1.5V5H9.5" stroke="#141414" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function ChartIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 16 16">
        <rect x="1.5" y="9.5" width="3" height="5.5" rx="0.5" fill="#141414"/>
        <rect x="6.5" y="5.5" width="3" height="9.5" rx="0.5" fill="#141414"/>
        <rect x="11.5" y="2" width="3" height="13" rx="0.5" fill="#141414"/>
      </svg>
    </div>
  );
}

function MoreIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 16 16">
        <circle cx="8" cy="4" r="1.2" fill="#141414"/>
        <circle cx="8" cy="8" r="1.2" fill="#141414"/>
        <circle cx="8" cy="12" r="1.2" fill="#141414"/>
      </svg>
    </div>
  );
}

function RowActions() {
  return (
    <div className="flex gap-[10px] items-center shrink-0">
      <RefreshIcon />
      <ChartIcon />
      <MoreIcon />
    </div>
  );
}

function OnlineDot() {
  return (
    <div className="flex gap-[4px] items-center shrink-0">
      <svg className="shrink-0 size-[6px]" fill="none" viewBox="0 0 6 6">
        <circle cx="3" cy="3" fill="#1ED273" r="3" />
      </svg>
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] text-[#1ed273] text-[14px] whitespace-nowrap">在线</p>
    </div>
  );
}

// ─── Section: 实时数据 ────────────────────────────────────────────────────────

function RealtimeDataSection({ t }: { t: typeof T.en }) {
  return (
    <SectionCard>
      <SectionHeader title={t.realtimeData} timestamp={TIMESTAMP} />
      <div className="bg-white w-full">
        <div className="grid grid-cols-6 gap-[12px] p-[12px]">
          {/* 当前楼层 */}
          <div className="bg-[#f5f7fa] flex items-center justify-between px-[16px] py-[10px] rounded-[6px]">
            <div className="flex flex-col gap-[2px] items-start">
              <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[#676a72] text-[12px] whitespace-nowrap">{t.currentFloor}</p>
              <div className="flex gap-[2px] items-end">
                <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[22px] text-[#141414] text-[14px]">1F [5]</p>
                <ArrowUpIcon />
              </div>
            </div>
            <div className="bg-[#e7edfe] flex items-center justify-center p-[8px] rounded-[12px] shrink-0 size-[36px]">
              <LayersIcon fill="#1450F5" />
            </div>
          </div>
          {/* 运行速度 */}
          <div className="bg-[#f5f7fa] flex items-center justify-between px-[16px] py-[10px] rounded-[6px]">
            <div className="flex flex-col gap-[2px] items-start">
              <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[#676a72] text-[12px] whitespace-nowrap">{t.runSpeed}</p>
              <ValueText value="2m/s" />
            </div>
            <div className="bg-[#e7edfe] flex items-center justify-center p-[8px] rounded-[12px] shrink-0 size-[36px]">
              <DashboardIcon fill="#1450F5" />
            </div>
          </div>
          {/* 服务模式 */}
          <div className="bg-[#f5f7fa] flex items-center justify-between px-[16px] py-[10px] rounded-[6px]">
            <div className="flex flex-col gap-[2px] items-start">
              <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[#676a72] text-[12px] whitespace-nowrap">{t.serviceMode}</p>
              <ValueText value="正常" />
            </div>
            <div className="bg-[#e7edfe] flex items-center justify-center p-[8px] rounded-[12px] shrink-0 size-[36px]">
              <CheckRectIcon fill="#1450F5" />
            </div>
          </div>
          {/* 轿门A状态 */}
          <div className="bg-[#f5f7fa] flex items-center justify-between px-[16px] py-[10px] rounded-[6px]">
            <div className="flex flex-col gap-[2px] items-start">
              <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[#676a72] text-[12px] whitespace-nowrap">{t.doorAStat}</p>
              <ValueText value="已关门" />
            </div>
            <div className="bg-[#e7edfe] flex items-center justify-center p-[8px] rounded-[12px] shrink-0 size-[36px]">
              <DoorClosedIcon fill="#1450F5" />
            </div>
          </div>
          {/* 轿门B状态 */}
          <div className="bg-[#f5f7fa] flex items-center justify-between px-[16px] py-[10px] rounded-[6px]">
            <div className="flex flex-col gap-[2px] items-start">
              <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[#676a72] text-[12px] whitespace-nowrap">{t.doorBStat}</p>
              <ValueText value="已开门" />
            </div>
            <div className="bg-[#e7edfe] flex items-center justify-center p-[8px] rounded-[12px] shrink-0 size-[36px]">
              <DoorOpenIcon fill="#1450F5" />
            </div>
          </div>
          {/* 门区状态 */}
          <div className="bg-[#f5f7fa] flex items-center justify-between px-[16px] py-[10px] rounded-[6px]">
            <div className="flex flex-col gap-[2px] items-start">
              <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[#676a72] text-[12px] whitespace-nowrap">{t.doorZoneStat}</p>
              <ValueText value="在门区" />
            </div>
            <div className="bg-[#e7edfe] flex items-center justify-center p-[8px] rounded-[12px] shrink-0 size-[36px]">
              <WarningTriangleIcon fill="#1450F5" />
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

// ─── Section: 传感器数据 ──────────────────────────────────────────────────────

type SensorKey = 'doorA' | 'doorB' | 'machineRoom';

function SensorDataSection({ t }: { t: typeof T.en }) {
  const [activeSensor, setActiveSensor] = useState<SensorKey>('doorA');

  const sensors: { key: SensorKey; label: string }[] = [
    { key: 'doorA', label: t.doorASensor },
    { key: 'doorB', label: t.doorBSensor },
    { key: 'machineRoom', label: t.machineRoomSensor },
  ];

  const filterTags = (
    <div className="absolute flex gap-[7px] items-center right-[15px] top-[8px]">
      {sensors.map(({ key, label }) => {
        const isActive = activeSensor === key;
        return (
          <button
            key={key}
            onClick={() => setActiveSensor(key)}
            className="flex items-center px-[8px] py-[2px] rounded-[3px] cursor-pointer"
            style={{
              backgroundColor: isActive ? "#f3f6fe" : "transparent",
              border: `1px solid ${isActive ? "#1450f5" : "#c8cad0"}`,
            }}
          >
            <p
              className={`font-['PingFang_SC:${isActive ? "Medium" : "Regular"}',sans-serif] leading-[20px] text-[12px] whitespace-nowrap`}
              style={{ color: isActive ? "#1450f5" : "#141414" }}
            >
              {label}
            </p>
          </button>
        );
      })}
    </div>
  );

  return (
    <SectionCard absoluteContent={filterTags}>
      <SectionHeader title={t.sensorData} timestamp={TIMESTAMP} />
      <div className="bg-white w-full">
        <div className="grid grid-cols-5 gap-[12px] p-[12px]">
          <div className="bg-[#f5f7fa] flex items-center justify-between px-[16px] py-[10px] rounded-[6px]">
            <div className="flex flex-col gap-[2px] items-start">
              <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[#676a72] text-[12px] whitespace-nowrap">{t.temperature}</p>
              <ValueText value="23.5℃" />
            </div>
            <div className="bg-[#e3e3ff] flex items-center justify-center p-[8px] rounded-[12px] shrink-0 size-[36px]">
              <ThermometerIcon fill="#3C3BC6" />
            </div>
          </div>
          <div className="bg-[#f5f7fa] flex items-center justify-between px-[16px] py-[10px] rounded-[6px]">
            <div className="flex flex-col gap-[2px] items-start">
              <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[#676a72] text-[12px] whitespace-nowrap">{t.humidity}</p>
              <ValueText value="58.1%" />
            </div>
            <div className="bg-[#e3e3ff] flex items-center justify-center p-[8px] rounded-[12px] shrink-0 size-[36px]">
              <HumidityIcon fill="#3C3BC6" />
            </div>
          </div>
          <div className="bg-[#f5f7fa] flex items-center justify-between px-[16px] py-[10px] rounded-[6px]">
            <div className="flex flex-col gap-[2px] items-start">
              <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[#676a72] text-[12px] whitespace-nowrap">{t.velocity}</p>
              <ValueText value="2m/s" />
            </div>
            <div className="bg-[#e3e3ff] flex items-center justify-center p-[8px] rounded-[12px] shrink-0 size-[36px]">
              <DashboardIcon fill="#3C3BC6" />
            </div>
          </div>
          <div className="bg-[#f5f7fa] flex items-center justify-between px-[16px] py-[10px] rounded-[6px]">
            <div className="flex flex-col gap-[2px] items-start">
              <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[#676a72] text-[12px] whitespace-nowrap">{t.levelingUp}</p>
              <ValueText value="0" />
            </div>
            <div className="bg-[#e3e3ff] flex items-center justify-center p-[8px] rounded-[12px] shrink-0 size-[36px]">
              <ArrowUpKoneIcon fill="#3C3BC6" />
            </div>
          </div>
          <div className="bg-[#f5f7fa] flex items-center justify-between px-[16px] py-[10px] rounded-[6px]">
            <div className="flex flex-col gap-[2px] items-start">
              <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[#676a72] text-[12px] whitespace-nowrap">{t.levelingDown}</p>
              <ValueText value="1" />
            </div>
            <div className="bg-[#e3e3ff] flex items-center justify-center p-[8px] rounded-[12px] shrink-0 size-[36px]">
              <ArrowDownKoneIcon fill="#3C3BC6" />
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

// ─── Section: 运行数据 ────────────────────────────────────────────────────────

function OperationDataSection({ t }: { t: typeof T.en }) {
  return (
    <SectionCard>
      <SectionHeader title={t.operationData} timestamp={TIMESTAMP} />
      <div className="bg-white w-full">
        <div className="flex flex-wrap gap-[12px] items-start p-[12px]">
          {[
            { label: t.runDuration, value: "30s", icon: <div className="bg-[#eaecf1] flex items-center justify-center p-[8px] rounded-[12px] shrink-0 size-[36px]"><ClockIcon /></div> },
            { label: t.startFloor, value: "1F [2]", icon: <div className="bg-[#eaecf1] flex items-center justify-center p-[8px] rounded-[12px] shrink-0 size-[36px]"><LayersIcon fill="#676A72" /></div> },
            { label: t.stopFloor, value: "11F [12]", icon: <div className="bg-[#eaecf1] flex items-center justify-center p-[8px] rounded-[12px] shrink-0 size-[36px]"><LayersIcon fill="#676A72" /></div> },
            { label: t.serviceMode, value: "正常", icon: <div className="bg-[#eaecf1] flex items-center justify-center p-[8px] rounded-[12px] shrink-0 size-[36px]"><CheckRectIcon fill="#676A72" /></div> },
          ].map(({ label, value, icon }) => (
            <div key={label} className="bg-[#f5f7fa] flex flex-1 items-center justify-between min-w-[160px] px-[16px] py-[10px] rounded-[6px]">
              <div className="flex flex-col gap-[2px] items-start">
                <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[#676a72] text-[12px] whitespace-nowrap">{label}</p>
                <ValueText value={value} />
              </div>
              {icon}
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

// ─── Section: 模块信息 ────────────────────────────────────────────────────────

const COL_WIDTHS = {
  name: "w-[198px]",
  status: "w-[94px]",
  serial: "w-[255px]",
  type: "w-[162px]",
  regStatus: "w-[98px]",
  swVersion: "w-[80px]",
};

function ModuleInfoSection({ t }: { t: typeof T.en }) {
  const childRows = [
    { serial: "KM52152006G02.100ALZ244700005", type: "KONE Connection 310", sw: "SN1.00.07" },
    { serial: "KM52152006G02.100ALZ244700005", type: "KONE Connection 310", sw: "SN1.00.07" },
  ];

  return (
    <SectionCard>
      <SectionHeader title={t.moduleInfo} />
      <div className="bg-white w-full">
        <div className="flex flex-col items-start gap-[8px] p-[12px]">
          {/* Table header */}
          <div className="flex items-center pl-[12px] pr-[27px] w-full">
            {[
              { label: t.moduleNameCol, cls: COL_WIDTHS.name },
              { label: t.connStatus, cls: COL_WIDTHS.status },
              { label: t.serialNo, cls: COL_WIDTHS.serial },
              { label: t.typeCol, cls: COL_WIDTHS.type },
              { label: t.regStatus, cls: COL_WIDTHS.regStatus },
              { label: t.swVersion, cls: COL_WIDTHS.swVersion },
              { label: t.actions, cls: "flex-1" },
            ].map(({ label, cls }) => (
              <div key={label} className={`flex items-center shrink-0 ${cls}`}>
                <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] text-[#8f9195] text-[14px] whitespace-nowrap">{label}</p>
              </div>
            ))}
          </div>

          {/* Parent row */}
          <div className="relative w-full">
            <div className="bg-[#f5f7fa] flex items-center justify-between pl-[8px] pr-[12px] py-[8px] rounded-[6px] w-full">
              <div className="flex flex-1 gap-[40px] items-center min-w-0">
                <div className={`flex items-center ${COL_WIDTHS.name}`}>
                  <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] text-[#141414] text-[14px]">310</p>
                </div>
                <OnlineDot />
                <div className={`flex items-center ${COL_WIDTHS.serial}`}>
                  <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] text-[#141414] text-[14px]">KM52152006G02.100ALZ244700005</p>
                </div>
                <div className={`flex items-center ${COL_WIDTHS.type}`}>
                  <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] text-[#141414] text-[14px]">KONE Connection 310</p>
                </div>
                <div className={`flex items-center ${COL_WIDTHS.regStatus}`}>
                  <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] text-[#141414] text-[14px]">{t.registered}</p>
                </div>
                <div className={`flex items-center ${COL_WIDTHS.swVersion}`}>
                  <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] text-[#141414] text-[14px]">2.0.1d</p>
                </div>
              </div>
              <RowActions />
            </div>

            {/* Child rows with tree connector */}
            <div className="flex flex-col gap-[8px] mt-[8px] pl-[0px]">
              {childRows.map((row, i) => (
                <div key={i} className="relative flex items-center pl-[20px]">
                  {/* Dashed tree line */}
                  <div className="absolute left-[4px] top-0 bottom-0 flex flex-col items-center" style={{ width: 14 }}>
                    <div
                      className="absolute"
                      style={{
                        left: 0,
                        top: i === 0 ? 0 : -8,
                        bottom: i === childRows.length - 1 ? "50%" : -8,
                        width: 1,
                        borderLeft: "1px dashed #C8CAD0",
                      }}
                    />
                    <div
                      className="absolute"
                      style={{
                        top: "50%",
                        left: 0,
                        width: 12,
                        height: 1,
                        borderTop: "1px dashed #C8CAD0",
                      }}
                    />
                  </div>
                  <div className="bg-[#fafbfc] flex items-center justify-between pl-[8px] pr-[12px] py-[4px] rounded-[6px] w-full">
                    <div className="flex flex-1 gap-[54px] items-center min-w-0">
                      <div className="flex gap-[18px] items-center shrink-0 w-[120px]">
                        <NodeIcon />
                        <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] text-[#141414] text-[14px]">Nexus-D</p>
                      </div>
                      <OnlineDot />
                      <div className="flex items-center w-[242px]">
                        <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] text-[#141414] text-[14px]">{row.serial}</p>
                      </div>
                      <div className="flex items-center w-[148px]">
                        <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] text-[#141414] text-[14px]">{row.type}</p>
                      </div>
                      <div className="flex items-center w-[84px]">
                        <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] text-[#141414] text-[14px]">{t.registered}</p>
                      </div>
                      <div className="flex items-center w-[77px]">
                        <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] text-[#141414] text-[14px]">{row.sw}</p>
                      </div>
                    </div>
                    <RowActions />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function LiveDataContent({ language }: { language: 'en' | 'cn' }) {
  const t = T[language];
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <RealtimeDataSection t={t} />
      <SensorDataSection t={t} />
      <OperationDataSection t={t} />
      <ModuleInfoSection t={t} />
    </div>
  );
}
