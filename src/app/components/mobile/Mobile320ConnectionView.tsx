import { useState, type CSSProperties, type ReactNode } from "react";
import { Button } from "tdesign-react";
import {
  RegistrationChevronDownIcon,
  RegistrationChevronUpIcon,
  RegistrationCheckCircleIcon,
  RegistrationItemSuccessIcon,
  RegistrationResultSuccessIcon,
} from "../icons/registration-icons";
import type { RegistrationFloor, RegistrationSensorConfig } from "../../data/deviceRegistration";
import { sensorTitle } from "./Mobile320ModulePanel";
import { MobileBottomBar, type MobileLang } from "./MobileShell";

/**
 * Connection 320 连接过程（IOT Delivery 12362:76331「连接过程」，只模拟连接成功）。
 *
 * 页面没有页面标题 / 返回，只有结果区（连接中 / 连接成功）、可展开的配置清单和底部「下一步」。
 * 清单内容来自前面填写的数据：每个已启用的传感器各一项（轿门传感器、轿门A / B、机房传感器），
 * 最后是「楼层信息配置」。各项依次完成；默认收起，可展开查看提交的配置。
 */
const copy = {
  cn: {
    connecting: "连接中", success: "连接成功", next: "下一步", floors: "楼层信息配置",
    serial: "序列号", portName: "端口名称", placement: "安装位置", left: "左侧轿门", right: "右侧轿门", functions: "传感器功能",
    floorSuffix: "层", expand: "展开", collapse: "收起", baseFloor: "基准楼层",
  },
  en: {
    connecting: "Connecting", success: "Connected", next: "Next", floors: "Floor configuration",
    serial: "Serial", portName: "Port name", placement: "Placement", left: "Left door", right: "Right door", functions: "Sensor functions",
    floorSuffix: "F", expand: "Expand", collapse: "Collapse", baseFloor: "Base floor",
  },
} as const;

export function Mobile320ConnectionView({ language, step, sensors, floors, onNext }: {
  language: MobileLang;
  /** 已完成的条目数：序号小于 step 的条目为完成态，其余为连接中。 */
  step: number;
  sensors: RegistrationSensorConfig[];
  floors: RegistrationFloor[];
  onNext: () => void;
}) {
  const t = copy[language];
  const paired = sensors.some((sensor) => sensor.kind === "doorB");
  const items = [
    ...sensors.map((sensor) => ({ id: sensor.kind, title: sensorTitle(sensor.kind, paired, language), body: <SensorDetails language={language} sensor={sensor} /> })),
    { id: "floors", title: t.floors, body: <FloorDetails language={language} floors={floors} /> },
  ];
  const complete = step >= items.length;
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-container">
      <div className="flex-1 overflow-y-auto px-7 pt-[34px] pb-6">
        <div role="status" aria-live="polite" className="flex flex-col items-center gap-3">
          {complete
            ? <RegistrationResultSuccessIcon aria-hidden="true" className="size-20 text-success" />
            : <span aria-hidden="true" className="km-loading-ring size-20" style={{ "--ring-width": "6px" } as CSSProperties} />}
          <p className="m-0 text-h5 font-semibold text-primary-text">{complete ? t.success : t.connecting}</p>
        </div>
        <ul className="m-0 mt-[45px] flex list-none flex-col gap-6 p-0">
          {items.map((item, index) => {
            const done = index < step;
            const open = Boolean(expanded[item.id]);
            const panelId = `connection-320-item-${item.id}`;
            return (
              <li key={item.id} className="flex flex-col gap-2">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setExpanded((current) => ({ ...current, [item.id]: !current[item.id] }))}
                  className="flex w-full cursor-pointer items-center gap-3 rounded-xs border-0 bg-transparent p-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
                >
                  <span className="flex min-w-0 flex-1 items-center gap-2 text-h7 font-semibold text-primary-text">
                    {done
                      ? <RegistrationItemSuccessIcon aria-hidden="true" className="size-[22px] shrink-0 text-success" />
                      : <span aria-hidden="true" className="km-loading-ring m-0.5 size-[18px] shrink-0" style={{ "--ring-width": "2px" } as CSSProperties} />}
                    <span className="min-w-0 flex-1">{item.title}</span>
                    <span className="sr-only">{done ? t.success : t.connecting}</span>
                  </span>
                  {open
                    ? <RegistrationChevronUpIcon aria-label={t.collapse} role="img" className="size-5 shrink-0 text-icon-inactive" />
                    : <RegistrationChevronDownIcon aria-label={t.expand} role="img" className="size-5 shrink-0 text-icon-inactive" />}
                </button>
                {open && <div id={panelId}>{item.body}</div>}
              </li>
            );
          })}
        </ul>
      </div>
      <MobileBottomBar>
        <Button theme="primary" size="large" block disabled={!complete} onClick={onNext}>{t.next}</Button>
      </MobileBottomBar>
    </div>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex min-w-0 items-start gap-3">
      <span className="shrink-0 text-secondary-text">{label}</span>
      <span className="min-w-0 flex-1 text-right break-all text-primary-text">{children}</span>
    </div>
  );
}

function SensorDetails({ language, sensor }: { language: MobileLang; sensor: RegistrationSensorConfig }) {
  const t = copy[language];
  const machine = sensor.kind === "machine";
  return (
    <div className="flex flex-col gap-2 text-body">
      <div className="flex flex-col gap-2">
        <Row label={t.serial}>{sensor.serial || "-"}</Row>
        <Row label={t.portName}>{machine ? "USB-LoRa" : "USB"}</Row>
        {!machine && <Row label={t.placement}>{sensor.placement === "left" ? t.left : sensor.placement === "right" ? t.right : "-"}</Row>}
      </div>
      <h3 className="m-0 text-body font-medium text-primary-text">{t.functions}</h3>
      <div className="flex flex-col gap-2">
        {sensor.ports.map((value, index) => (
          <div key={index} className="flex items-start gap-4">
            <span className="w-[81px] shrink-0 text-secondary-text">Port X{index + 1}</span>
            <span className={`min-w-0 flex-1 text-right ${value ? "text-primary-text" : "text-placeholder"}`}>{value || "-"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 楼层清单：secondarycontainer 底，虚线分隔；基准楼层在楼层号后带灰色勾选图标；最后一层无间距显示「--」。
 * 传入 `editingLabels` 时标签列变成输入框（设备数据页「编辑」态，IOT Delivery 11048:9059）。
 */
export function FloorDetails({ language, floors, editingLabels, onLabelChange }: {
  language: MobileLang;
  floors: RegistrationFloor[];
  editingLabels?: string[];
  onLabelChange?: (index: number, value: string) => void;
}) {
  const t = copy[language];
  return (
    <ul className="m-0 flex list-none flex-col gap-1.5 rounded-md bg-secondarycontainer px-4 py-3 text-body text-primary-text">
      {floors.map((floor, index) => (
        <li key={index} className="flex flex-col gap-1.5">
          {index > 0 && <div aria-hidden="true" className="h-0 border-t border-dashed border-stroke" />}
          <div className="flex items-center justify-between">
            <span className="flex w-[85px] items-center gap-1">
              {index + 1}{t.floorSuffix}
              {floor.base && <RegistrationCheckCircleIcon role="img" aria-label={t.baseFloor} className="size-4 text-icon-inactive" />}
            </span>
            {editingLabels
              ? (
                <input
                  className="km-floor-label-input"
                  value={editingLabels[index] ?? ""}
                  aria-label={`${index + 1}${t.floorSuffix}`}
                  onChange={(event) => onLabelChange?.(index, event.target.value)}
                />
              )
              : <span className="font-medium">{floor.label}</span>}
            <span className="min-w-[69px] text-right font-medium tabular-nums">{index === floors.length - 1 ? "--" : `${floor.spacing}cm`}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
