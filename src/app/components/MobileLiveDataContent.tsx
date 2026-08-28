import React, { useState } from "react";

// ── Translations ──────────────────────────────────────────────────────────────

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
    serialNo: "Serial No.",
    typeCol: "Type",
    regStatus: "Reg. Status",
    swVersion: "SW Version",
    online: "Online",
    registered: "Registered",
    restart: "Restart",
    moreActions: "More",
    normal: "Normal",
    closed: "Closed",
    open: "Open",
    inZone: "In Zone",
    doorASensor: "Car Door A Sensor",
    doorBSensor: "Car Door B Sensor",
    machineRoomSensor: "Machine Room",
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
    serialNo: "序列号",
    typeCol: "类型",
    regStatus: "注册状态",
    swVersion: "软件版本",
    online: "在线",
    registered: "已注册",
    restart: "重启模块",
    moreActions: "更多操作",
    normal: "正常",
    closed: "已关门",
    open: "已开门",
    inZone: "在门区",
    doorASensor: "轿门A传感器",
    doorBSensor: "轿门B传感器",
    machineRoomSensor: "机房传感器",
  },
};

// ── Reusable data cell ────────────────────────────────────────────────────────

function DataCell({
  label,
  value,
  icon,
  bgColor = "#e7edfe",
}: {
  label: string;
  value: React.ReactNode;
  icon: React.ReactNode;
  bgColor?: string;
}) {
  return (
    <div
      className="flex flex-col items-center justify-between p-[4px] rounded-[6px] shrink-0"
      style={{ backgroundColor: "#f5f7fa", width: 100, height: 106 }}
    >
      <p className="font-['PingFang_SC:Regular',sans-serif] text-[12px] leading-[20px] text-[#676a72] text-center overflow-hidden text-ellipsis whitespace-nowrap w-full min-w-0">
        {label}
      </p>
      <div
        className="flex items-center justify-center rounded-[12px] shrink-0"
        style={{ backgroundColor: bgColor, width: 40, height: 40, padding: 8 }}
      >
        {icon}
      </div>
      <div className="font-['PingFang_SC:Semibold',sans-serif] text-[14px] leading-[22px] text-[#141414] whitespace-nowrap">
        {value}
      </div>
    </div>
  );
}

// ── Section card wrapper ──────────────────────────────────────────────────────

function SectionCard({
  title,
  timestamp,
  children,
  rightIcon,
  absoluteActions,
}: {
  title: string;
  timestamp?: string;
  children: React.ReactNode;
  rightIcon?: React.ReactNode;
  absoluteActions?: React.ReactNode;
}) {
  return (
    <div className="relative rounded-[8px] w-full border border-[#dfe1e8]">
      <div className="bg-[#fafbfc] px-[12px] py-[8px] flex items-center gap-[12px] border-b border-[#dfe1e8]">
        <div className="flex items-center gap-[8px] shrink-0">
          <div className="bg-[#4373f7] rounded-[1px] shrink-0" style={{ width: 4, height: 14 }} />
          <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414] whitespace-nowrap">
            {title}
          </span>
        </div>
        {timestamp && (
          <span className="font-['PingFang_SC:Regular',sans-serif] text-[12px] leading-[20px] text-[#676a72] whitespace-nowrap">
            {timestamp}
          </span>
        )}
        {rightIcon && <div className="ml-auto">{rightIcon}</div>}
      </div>
      {absoluteActions && (
        <div className="absolute right-[8px] top-[8px]">{absoluteActions}</div>
      )}
      <div className="bg-white">{children}</div>
    </div>
  );
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function LayersIcon({ color = "#1450F5" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5L17.5 6.5L10 10.5L2.5 6.5Z" fill={color}/>
      <path d="M2.5 10L10 14L17.5 10" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5 13.5L10 17.5L17.5 13.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SpeedometerIcon({ color = "#1450F5" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2.5 14.5A7.5 7.5 0 0 1 17.5 14.5" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M10 14.5L13.5 8.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="14.5" r="1.5" fill={color}/>
    </svg>
  );
}

function CheckRectIcon({ color = "#1450F5" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="2" width="16" height="16" rx="2" stroke={color} strokeWidth="1.4"/>
      <path d="M5.5 10L8.5 13L14.5 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DoorClosedIcon({ color = "#1450F5" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="4" y="2" width="12" height="16" rx="1" stroke={color} strokeWidth="1.4"/>
      <circle cx="14" cy="10" r="1.2" fill={color}/>
    </svg>
  );
}

function DoorOpenIcon({ color = "#1450F5" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 18V2L13 4V18H4Z" stroke={color} strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M13 18H16" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="11.5" cy="11" r="1.2" fill={color}/>
    </svg>
  );
}

function WarningIcon({ color = "#1450F5" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L18.5 17.5H1.5Z" stroke={color} strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M10 8V12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="15" r="1" fill={color}/>
    </svg>
  );
}

function ThermometerIcon({ color = "#3C3BC6" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12 11.3V5C12 3.9 11.1 3 10 3C8.9 3 8 3.9 8 5V11.3C7 11.9 6.5 12.9 6.5 14C6.5 15.9 8.1 17.5 10 17.5C11.9 17.5 13.5 15.9 13.5 14C13.5 12.9 13 11.9 12 11.3Z" stroke={color} strokeWidth="1.3"/>
      <circle cx="10" cy="14" r="2.2" fill={color}/>
      <path d="M10 5V11" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M12 7H13.5" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

function DropletIcon({ color = "#3C3BC6" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 3C10 3 5 9.5 5 13.5C5 16 7.24 18 10 18C12.76 18 15 16 15 13.5C15 9.5 10 3 10 3Z" stroke={color} strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowUpIcon({ color = "#3C3BC6" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 4L16 11H12.5V17H7.5V11H4L10 4Z" fill={color}/>
    </svg>
  );
}

function ArrowDownIcon({ color = "#3C3BC6" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 16L4 9H7.5V3H12.5V9H16L10 16Z" fill={color}/>
    </svg>
  );
}

function ClockIcon({ color = "#676A72" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke={color} strokeWidth="1.4"/>
      <path d="M10 5.5V10L13 12.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M12.5 7C12.5 10.04 10.04 12.5 7 12.5C3.96 12.5 1.5 10.04 1.5 7C1.5 3.96 3.96 1.5 7 1.5C8.9 1.5 10.5 2.4 11.5 3.8" stroke="#141414" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M11.5 1.5V4.5H8.5" stroke="#141414" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 5L7 9L11 5" stroke="#141414" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M11.5 2.5H17.5V8.5L11.3 14.7C10.9 15.1 10.3 15.1 9.9 14.7L5.3 10.1C4.9 9.7 4.9 9.1 5.3 8.7L11.5 2.5Z" stroke="#141414" strokeWidth="1.4" strokeLinejoin="round"/>
      <circle cx="14.5" cy="5.5" r="1.5" fill="#141414"/>
    </svg>
  );
}

function NodeIcon() {
  return (
    <div className="bg-[#eaecf1] flex items-center justify-center rounded-[6px] p-[4px]" style={{ width: 24, height: 24 }}>
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

function LinkIcon() {
  return (
    <div className="bg-[#f3f6fe] flex items-center justify-center p-[2px] rounded-[6px]" style={{ width: 20, height: 20 }}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M8.5 10L9.5 11C10.6 12.1 12.4 12.1 13.5 11C14.6 9.9 14.6 8.1 13.5 7L12 5.5" stroke="#1450F5" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M5.5 4L4.5 3C3.4 1.9 1.6 1.9 0.5 3C-0.6 4.1 -0.6 5.9 0.5 7L2 8.5" stroke="#1450F5" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M9 5L5 9" stroke="#1450F5" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

// ── Section 1: 实时数据 / Real-time Data ──────────────────────────────────────

function LiveDataSection({ t }: { t: typeof T.en }) {
  return (
    <SectionCard title={t.realtimeData} timestamp="2026-04-04 16:49:39">
      <div className="flex flex-wrap gap-[8px] p-[12px]">
        <DataCell
          label={t.currentFloor}
          bgColor="#e7edfe"
          icon={<LayersIcon />}
          value={
            <span className="flex items-end gap-[2px]">
              1F [5]
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                <path d="M6 1L11 7H8V13H4V7H1L6 1Z" fill="#141414"/>
              </svg>
            </span>
          }
        />
        <DataCell label={t.runSpeed} bgColor="#e7edfe" icon={<SpeedometerIcon />} value="2m/s" />
        <DataCell label={t.serviceMode} bgColor="#e7edfe" icon={<CheckRectIcon />} value={t.normal} />
        <DataCell label={t.doorAStat} bgColor="#e7edfe" icon={<DoorClosedIcon />} value={t.closed} />
        <DataCell label={t.doorBStat} bgColor="#e7edfe" icon={<DoorOpenIcon />} value={t.open} />
        <DataCell label={t.doorZoneStat} bgColor="#e7edfe" icon={<WarningIcon />} value={t.inZone} />
      </div>
    </SectionCard>
  );
}

// ── Section 2: 传感器数据 / Sensor Data ───────────────────────────────────────

type SensorKey = "doorA" | "doorB" | "machineRoom";

const SENSOR_DATA: Record<SensorKey, { temperature: string; humidity: string; velocity: string; levelingUp: string; levelingDown: string }> = {
  doorA:       { temperature: "23.5℃", humidity: "58.1%", velocity: "2m/s",  levelingUp: "0", levelingDown: "1" },
  doorB:       { temperature: "21.0℃", humidity: "55.3%", velocity: "1.6m/s", levelingUp: "1", levelingDown: "0" },
  machineRoom: { temperature: "28.2℃", humidity: "62.0%", velocity: "—",     levelingUp: "—", levelingDown: "—" },
};

function SensorDataSection({ t }: { t: typeof T.en }) {
  const [activeSensor, setActiveSensor] = useState<SensorKey>("doorA");

  const sensors: Array<{ key: SensorKey; label: string }> = [
    { key: "doorA",       label: t.doorASensor },
    { key: "doorB",       label: t.doorBSensor },
    { key: "machineRoom", label: t.machineRoomSensor },
  ];

  const filterTags = (
    <div className="flex items-center gap-[4px]">
      {sensors.map((s) => {
        const active = s.key === activeSensor;
        return (
          <button
            key={s.key}
            onClick={() => setActiveSensor(s.key)}
            className={[
              "rounded-[3px] px-[8px] py-[2px] text-[12px] leading-[20px] border cursor-pointer whitespace-nowrap",
              active
                ? "bg-[#f3f6fe] border-[#1450f5] text-[#1450f5] font-['PingFang_SC:Medium',sans-serif]"
                : "bg-white border-[#c8cad0] text-[#141414] font-['PingFang_SC:Regular',sans-serif]",
            ].join(" ")}
          >
            {s.label}
          </button>
        );
      })}
    </div>
  );

  const data = SENSOR_DATA[activeSensor];

  return (
    <SectionCard title={t.sensorData} timestamp="2026-04-04 16:49:39" absoluteActions={filterTags}>
      <div className="flex flex-wrap gap-[8px] p-[12px]">
        <DataCell label={t.temperature} bgColor="#e3e3ff" icon={<ThermometerIcon />} value={data.temperature} />
        <DataCell label={t.humidity}    bgColor="#e3e3ff" icon={<DropletIcon />}     value={data.humidity} />
        <DataCell label={t.velocity}    bgColor="#e3e3ff" icon={<SpeedometerIcon color="#3C3BC6" />} value={data.velocity} />
        <DataCell label={t.levelingUp}  bgColor="#e3e3ff" icon={<ArrowUpIcon />}     value={data.levelingUp} />
        <DataCell label={t.levelingDown} bgColor="#e3e3ff" icon={<ArrowDownIcon />}  value={data.levelingDown} />
      </div>
    </SectionCard>
  );
}

// ── Section 3: 运行数据 / Operation Data ──────────────────────────────────────

function RunDataSection({ t }: { t: typeof T.en }) {
  return (
    <SectionCard title={t.operationData} timestamp="2026-04-04 16:49:39">
      <div className="flex flex-wrap gap-[8px] p-[12px]">
        <DataCell label={t.runDuration} bgColor="#eaecf1" icon={<ClockIcon />} value="30s" />
        <DataCell label={t.startFloor} bgColor="#eaecf1" icon={<LayersIcon color="#676A72" />} value="1F [2]" />
        <DataCell label={t.stopFloor} bgColor="#eaecf1" icon={<LayersIcon color="#676A72" />} value="11F [12]" />
        <DataCell label={t.serviceMode} bgColor="#eaecf1" icon={<CheckRectIcon color="#676A72" />} value={t.normal} />
      </div>
    </SectionCard>
  );
}

// ── Section 4: 模块信息 / Module Info ─────────────────────────────────────────

function ModuleCard({
  name,
  isNode = false,
  serialNo,
  type,
  regStatus,
  softVersion,
  bg = "#f5f7fa",
  t,
}: {
  name: string;
  isNode?: boolean;
  serialNo: string;
  type: string;
  regStatus: string;
  softVersion: string;
  bg?: string;
  t: typeof T.en;
}) {
  return (
    <div className="flex flex-col gap-[16px] px-[12px] py-[16px] rounded-[6px] w-full" style={{ backgroundColor: bg }}>
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[12px]">
          {isNode ? (
            <NodeIcon />
          ) : (
            <span className="font-['PingFang_SC:Medium',sans-serif] text-[16px] leading-[24px] text-[#141414]">{name}</span>
          )}
          {isNode && (
            <span className="font-['PingFang_SC:Regular',sans-serif] text-[16px] leading-[24px] text-[#141414]">{name}</span>
          )}
        </div>
        <div className="flex items-center gap-[6px]">
          <div className="flex items-center gap-[4px]">
            <svg width="6" height="6" fill="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" r="3" fill="#1ED273" />
            </svg>
            <span className="font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px] text-[#1ed273]">{t.online}</span>
          </div>
          <svg width="8" height="14" fill="none" viewBox="0 0 8 14">
            <path d="M1 1L7 7L1 13" stroke="#141414" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-[8px] w-full font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px]">
        <div className="flex flex-col">
          <span className="text-[#676a72]">{t.serialNo}</span>
          <span className="font-['PingFang_SC:Medium',sans-serif] text-[#141414]">{serialNo}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[#676a72]">{t.typeCol}</span>
          <span className="font-['PingFang_SC:Medium',sans-serif] text-[#141414]">{type}</span>
        </div>
        <div className="flex gap-[10px]">
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-[#676a72]">{t.regStatus}</span>
            <span className="font-['PingFang_SC:Medium',sans-serif] text-[#141414]">{regStatus}</span>
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-[#676a72]">{t.swVersion}</span>
            <span className="font-['PingFang_SC:Medium',sans-serif] text-[#141414]">{softVersion}</span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-[8px] w-full">
        <button className="flex-1 h-[32px] flex items-center justify-center gap-[4px] bg-white rounded-[4px] border border-[#c8cad0] cursor-pointer">
          <RefreshIcon />
          <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414]">{t.restart}</span>
        </button>
        <button className="flex-1 h-[32px] flex items-center justify-center gap-[4px] bg-white rounded-[4px] border border-[#c8cad0] cursor-pointer">
          <span className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414]">{t.moreActions}</span>
          <ChevronDownIcon />
        </button>
      </div>
    </div>
  );
}

function DashedDivider() {
  return (
    <div className="flex items-center gap-[8px] w-full">
      <div className="flex-1 border-0 border-t border-dashed border-[#dfe1e8]" />
      <LinkIcon />
      <div className="flex-1 border-0 border-t border-dashed border-[#dfe1e8]" />
    </div>
  );
}

function ModuleInfoSection({ t }: { t: typeof T.en }) {
  return (
    <SectionCard title={t.moduleInfo}>
      <div className="flex flex-col gap-[8px] p-[12px]">
        <ModuleCard
          name="310"
          serialNo="KM52152006G02.100ALZ244700005"
          type="KONE Connection 310"
          regStatus={t.registered}
          softVersion="2.0.1d"
          bg="#f5f7fa"
          t={t}
        />
        <DashedDivider />
        <ModuleCard
          name="Nexus-D"
          isNode
          serialNo="KM52152006G02.100ALZ244700005"
          type="KONE Connection 310"
          regStatus={t.registered}
          softVersion="2.0.1d"
          bg="#fafbfc"
          t={t}
        />
      </div>
    </SectionCard>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export function MobileLiveDataContent({ language = "cn" }: { language?: "cn" | "en" }) {
  const t = T[language];
  return (
    <div className="flex flex-col gap-[12px]">
      <LiveDataSection t={t} />
      <SensorDataSection t={t} />
      <RunDataSection t={t} />
      <ModuleInfoSection t={t} />
    </div>
  );
}
