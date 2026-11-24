import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "tdesign-react";
import { DetailSection } from "../device-detail/DetailSection";
import {
  RegistrationAddIcon,
  RegistrationChevronRightIcon,
  RegistrationClearIcon,
  RegistrationDeleteIcon,
  RegistrationRadioIcon,
  RegistrationScanIcon,
} from "../icons/registration-icons";
import { ModuleDetails, RegistrationStatus, SubmoduleTag } from "./Mobile310RegistrationFlow";
import { getSensorPortOptions, type RegistrationSensorConfig, type RegistrationSensorKind } from "../../data/deviceRegistration";
import type { MobileLang } from "./MobileShell";
import { RegistrationPickerSheet } from "./RegistrationPickerSheet";

/**
 * Connection 320 注册流程「模块信息」页签（IOT Delivery 10291:152081 / 10291:153050 / 10647:73494）。
 *
 * 默认只有「轿门传感器」。点「添加传感器」依次出现第二个轿门传感器（标题变为 A / B）和机房传感器；
 * 新增的卡片右上角带红色删除图标。机房传感器的序列号需要扫码或手动输入。
 */
const copy = {
  cn: {
    connection: "KONE Connection 320", serial: "序列号", software: "软件版本", registration: "注册状态", registrationTime: "注册时间",
    online: "在线", offline: "未上线", registered: "已注册", portName: "端口名称", placement: "安装位置", left: "左侧轿门", right: "右侧轿门",
    functions: "传感器功能", add: "添加传感器", remove: "删除", scan: "扫码", serialPlaceholder: "扫码/手动输入序列号", clear: "清除", unselected: "未选择",
    cancel: "取消", confirm: "确认", doorSingle: "轿门传感器", doorA: "轿门A传感器", doorB: "轿门B传感器", machine: "机房传感器",
  },
  en: {
    connection: "KONE Connection 320", serial: "Serial", software: "Software version", registration: "Registration", registrationTime: "Registration time",
    online: "Online", offline: "Offline", registered: "Registered", portName: "Port name", placement: "Placement", left: "Left door", right: "Right door",
    functions: "Sensor functions", add: "Add sensor", remove: "Remove", scan: "Scan", serialPlaceholder: "Scan or enter the serial number", clear: "Clear", unselected: "Not selected",
    cancel: "Cancel", confirm: "Confirm", doorSingle: "Door sensor", doorA: "Door sensor A", doorB: "Door sensor B", machine: "Machine room sensor",
  },
} as const;

type SensorUpdate = Partial<RegistrationSensorConfig>;

export function sensorTitle(kind: RegistrationSensorKind, pairedDoors: boolean, language: MobileLang) {
  const t = copy[language];
  if (kind === "machine") return t.machine;
  if (!pairedDoors) return t.doorSingle;
  return kind === "doorA" ? t.doorA : t.doorB;
}

export function Mobile320ModulePanel({ language, serial, doorA, doorB, machine, onSensor, onPort, onRemove, onAdd, onScanMachine }: {
  language: MobileLang;
  serial: string;
  doorA: RegistrationSensorConfig;
  doorB: RegistrationSensorConfig;
  machine: RegistrationSensorConfig;
  onSensor: (kind: RegistrationSensorKind, update: SensorUpdate) => void;
  onPort: (kind: RegistrationSensorKind, index: number, value: string) => void;
  onRemove: (kind: RegistrationSensorKind) => void;
  onAdd: () => void;
  onScanMachine: () => void;
}) {
  const t = copy[language];
  const [picker, setPicker] = useState<{ kind: RegistrationSensorKind; index: number } | null>(null);
  const paired = doorB.enabled;
  const sensors = [doorA, doorB, machine].filter((sensor) => sensor.enabled);
  const pickerSensor = picker ? sensors.find((sensor) => sensor.kind === picker.kind) : undefined;
  const pickerOptions = picker ? getSensorPortOptions(picker.kind, paired) : [];
  const pickerValue = picker && pickerSensor ? pickerSensor.ports[picker.index] : "";

  return (
    <div id="connection-320-module-panel" role="tabpanel" className="flex flex-col gap-3">
      <DetailSection
        title={t.connection}
        titleId="connection-320-main-title"
        extra={<RegistrationStatus online offlineLabel={t.offline} onlineLabel={t.online} />}
        contentClassName="px-3 py-[11px]"
      >
        <ModuleDetails rows={[
          [t.serial, serial],
          [t.software, "1.2.11"],
          [t.registration, t.registered],
          [t.registrationTime, "2026/03/02 00:00:00"],
        ]} />
      </DetailSection>
      {sensors.map((sensor) => (
        <SensorCard
          key={sensor.kind}
          language={language}
          sensor={sensor}
          title={sensorTitle(sensor.kind, paired, language)}
          removable={sensor.kind !== "doorA"}
          onSensor={onSensor}
          onOpenPort={(index) => setPicker({ kind: sensor.kind, index })}
          onClearPort={(index) => onPort(sensor.kind, index, "")}
          onRemove={() => onRemove(sensor.kind)}
          onScan={onScanMachine}
        />
      ))}
      {(!doorB.enabled || !machine.enabled) && (
        <div>
          <Button className="km-registration-add-sensor" theme="primary" variant="outline" size="medium" onClick={onAdd}>
            <span className="inline-flex items-center gap-1">
              <RegistrationAddIcon aria-hidden="true" className="size-[18px]" />
              {t.add}
            </span>
          </Button>
        </div>
      )}
      <RegistrationPickerSheet
        visible={picker !== null}
        title={t.functions}
        options={pickerOptions}
        value={pickerValue}
        cancelLabel={t.cancel}
        confirmLabel={t.confirm}
        onCancel={() => setPicker(null)}
        onConfirm={(option) => {
          if (picker) onPort(picker.kind, picker.index, option);
          setPicker(null);
        }}
      />
    </div>
  );
}

function SensorCard({ language, sensor, title, removable, onSensor, onOpenPort, onClearPort, onRemove, onScan }: {
  language: MobileLang;
  sensor: RegistrationSensorConfig;
  title: string;
  removable: boolean;
  onSensor: (kind: RegistrationSensorKind, update: SensorUpdate) => void;
  onOpenPort: (index: number) => void;
  onClearPort: (index: number) => void;
  onRemove: () => void;
  onScan: () => void;
}) {
  const t = copy[language];
  const machine = sensor.kind === "machine";
  const titleId = `connection-320-${sensor.kind}-title`;
  return (
    <DetailSection
      title={title}
      titleId={titleId}
      timestamp={<SubmoduleTag label={language === "cn" ? "子模块" : "Submodule"} />}
      timestampClassName="-ml-1"
      extra={removable ? (
        <button
          type="button"
          aria-label={`${t.remove}${title}`}
          onClick={onRemove}
          className="flex size-5 cursor-pointer items-center justify-center rounded-xs border-0 bg-transparent p-0 text-error focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
        >
          <RegistrationDeleteIcon aria-hidden="true" className="size-5" />
        </button>
      ) : undefined}
      contentClassName="flex flex-col gap-3 px-3 py-[11px]"
    >
      <div className="flex flex-col gap-2 text-body">
        {machine ? (
          <SerialField
            label={t.serial}
            value={sensor.serial}
            placeholder={t.serialPlaceholder}
            scanLabel={t.scan}
            onChange={(serial) => onSensor(sensor.kind, { serial })}
            onScan={onScan}
          />
        ) : (
          <InfoRow label={t.serial} value={sensor.serial} />
        )}
        <InfoRow label={t.portName} value={machine ? "USB-LoRa" : "USB"} />
        {!machine && (
          <div className="flex items-center gap-2">
            <span id={`${titleId}-placement`} className="flex min-w-0 flex-1 items-center gap-1 whitespace-nowrap text-secondary-text">
              {t.placement}
              <span aria-hidden="true" className="text-error">*</span>
            </span>
            <div role="radiogroup" aria-labelledby={`${titleId}-placement`} className="flex shrink-0 items-center gap-2">
              <RadioOption label={t.left} checked={sensor.placement === "left"} onSelect={() => onSensor(sensor.kind, { placement: "left" })} />
              <RadioOption label={t.right} checked={sensor.placement === "right"} onSelect={() => onSensor(sensor.kind, { placement: "right" })} />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="m-0 text-body font-medium text-primary-text">{t.functions}</h3>
        <div className="flex flex-col gap-2">
          {sensor.ports.map((value, index) => (
            <PortRow
              key={index}
              label={`Port X${index + 1}`}
              value={value}
              clearLabel={`${t.clear} Port X${index + 1}`}
              unselected={t.unselected}
              onOpen={() => onOpenPort(index)}
              onClear={() => onClearPort(index)}
            />
          ))}
        </div>
      </div>
    </DetailSection>
  );
}

function InfoRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex min-w-0 items-start gap-3">
      <span className="shrink-0 text-secondary-text">{label}</span>
      <span className="min-w-0 flex-1 break-all text-right text-primary-text">{value}</span>
    </div>
  );
}

function RadioOption({ label, checked, onSelect }: { label: string; checked: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      onClick={onSelect}
      className="flex cursor-pointer items-start gap-1 rounded-xs border-0 bg-transparent p-0 text-body font-normal text-primary-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
    >
      <RegistrationRadioIcon aria-hidden="true" checked={checked} className={`size-[22px] shrink-0 ${checked ? "text-brand" : "text-component-border"}`} />
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
}

/** 机房传感器序列号：支持手动输入，长序列号按设计稿折行，右侧是扫码入口。 */
function SerialField({ label, value, placeholder, scanLabel, onChange, onScan }: {
  label: string;
  value: string;
  placeholder: string;
  scanLabel: string;
  onChange: (value: string) => void;
  onScan: () => void;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  }, [value]);
  return (
    <div className="flex items-start gap-4">
      <label htmlFor="connection-320-machine-serial" className="w-14 shrink-0 text-body font-normal text-secondary-text">{label}</label>
      <div className="flex min-w-0 flex-1 items-start gap-4">
        <textarea
          id="connection-320-machine-serial"
          ref={ref}
          rows={1}
          value={value}
          placeholder={placeholder}
          spellCheck={false}
          className="km-registration-sensor-serial"
          onChange={(event) => onChange(event.target.value.replace(/\s/g, ""))}
          onKeyDown={(event) => { if (event.key === "Enter") event.preventDefault(); }}
        />
        <button
          type="button"
          aria-label={scanLabel}
          onClick={onScan}
          className="flex size-[22px] shrink-0 cursor-pointer items-center justify-center rounded-xs border-0 bg-transparent p-0 text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
        >
          <RegistrationScanIcon aria-hidden="true" className="size-[22px]" />
        </button>
      </div>
    </div>
  );
}

function PortRow({ label, value, clearLabel, unselected, onOpen, onClear }: {
  label: string;
  value: string;
  clearLabel: string;
  unselected: string;
  onOpen: () => void;
  onClear: () => void;
}) {
  return (
    <div className="flex items-start gap-2">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-label={`${label} ${value || unselected}`}
        onClick={onOpen}
        className="flex min-w-0 flex-1 cursor-pointer items-start gap-4 rounded-xs border-0 bg-transparent p-0 text-left text-body font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
      >
        <span aria-hidden="true" className="w-[81px] shrink-0 text-secondary-text">{label}</span>
        <span aria-hidden="true" className={`min-w-0 flex-1 text-right ${value ? "text-primary-text" : "text-placeholder"}`}>{value || "-"}</span>
      </button>
      {!value ? (
        <span aria-hidden="true" onClick={onOpen} className="flex size-[22px] shrink-0 cursor-pointer items-center justify-center text-icon-inactive">
          <RegistrationChevronRightIcon className="size-[22px]" />
        </span>
      ) : (
        <button
          type="button"
          aria-label={clearLabel}
          onClick={onClear}
          className="flex size-[22px] shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-icon-inactive focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
        >
          <RegistrationClearIcon aria-hidden="true" className="size-[22px]" />
        </button>
      )}
    </div>
  );
}
