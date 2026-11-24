import type { CSSProperties, ReactNode } from "react";
import { Button } from "tdesign-react";
import { DetailSection } from "../device-detail/DetailSection";
import {
  RegistrationArrowUpIcon,
  RegistrationCheckCircleIcon,
  RegistrationClockIcon,
} from "../icons/registration-icons";
import { MobileBottomBar, MobilePageTitle, type MobileLang } from "./MobileShell";

/**
 * Connection 320 安装检查（IOT Delivery 12363:76332「安装检查」，先预热、后自检，只模拟成功）。
 *
 * 三张卡片：传感器准备（预热进度）→ 磁条安装检查（逐个基准楼层点「开始检查」）→ 功能检查（开关门 / 上下行，
 * 在第一个楼层开始检查后自动进行）。磁条检查的行数取决于前面勾选的基准楼层；全部完成后底部由「跳过」变为「查看数据」。
 */
export type CheckState = "idle" | "checking" | "done";
export type InstallFunctionChecks = { door: CheckState; travel: CheckState };
export type BaseFloorCheck = { index: number; label: string };

const copy = {
  cn: {
    title: "安装检查", prep: "传感器准备", prepHint: "请尝试操作电梯上下行及开关门多次，以完成传感器的预热准备。",
    magnet: "磁条安装检查", magnetHint: "请确保将电梯停靠到指定楼层，电梯停稳后，再点击开始检查，检查过程中请不要移动电梯。",
    start: "开始检查", idle: "未开始", checking: "进行中", correct: "安装正确",
    func: "功能检查", door: "开关门检查", travel: "上下行检查", doorValue: "开门中", done: "已完成", distance: "本次运行距离：3.35m",
    skip: "跳过", view: "查看数据",
  },
  en: {
    title: "Installation checks", prep: "Sensor warm-up", prepHint: "Run the elevator up and down and open and close the doors several times to warm up the sensors.",
    magnet: "Magnet strip check", magnetHint: "Park the elevator at the listed floor and wait until it stops, then tap Start check. Do not move the elevator during the check.",
    start: "Start check", idle: "Not started", checking: "In progress", correct: "Installed correctly",
    func: "Function checks", door: "Door check", travel: "Up/down check", doorValue: "Opening", done: "Completed", distance: "Distance this run: 3.35m",
    skip: "Skip", view: "View data",
  },
} as const;

export function Mobile320InstallationView({ language, preparation, baseFloors, checks, functionChecks, complete, onBack, onStartCheck, onSkip, onView }: {
  language: MobileLang;
  /** 预热进度 0–100。 */
  preparation: number;
  baseFloors: BaseFloorCheck[];
  /** 磁条检查状态，键为楼层序号（0 起）。 */
  checks: Record<number, CheckState>;
  functionChecks: InstallFunctionChecks;
  complete: boolean;
  onBack: () => void;
  onStartCheck: (floorIndex: number) => void;
  onSkip: () => void;
  onView: () => void;
}) {
  const t = copy[language];
  const warmedUp = preparation >= 100;

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-page">
      <MobilePageTitle title={t.title} language={language} onBack={onBack} />
      <div className="flex flex-1 flex-col gap-3 px-4 py-4">
        <DetailSection title={t.prep} titleId="installation-prep-title" contentClassName="flex flex-col gap-2 p-3">
          <p className="m-0 text-body text-secondary-text">{t.prepHint}</p>
          <div className="flex items-center gap-2">
            <div
              role="progressbar"
              aria-labelledby="installation-prep-title"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={preparation}
              className="flex h-1.5 min-w-0 flex-1 items-center overflow-hidden rounded-full bg-stroke"
            >
              <div
                className={`h-full rounded-full transition-[width] duration-300 ${warmedUp ? "bg-surface-success" : "bg-brand-base"}`}
                style={{ width: `${preparation}%` }}
              />
            </div>
            {warmedUp
              ? <RegistrationCheckCircleIcon role="img" aria-label={t.done} className="size-4 shrink-0 text-success" />
              : <span className="w-9 text-right text-body text-primary-text tabular-nums">{preparation}%</span>}
          </div>
        </DetailSection>

        {baseFloors.length > 0 && (
          <DetailSection title={t.magnet} titleId="installation-magnet-title" contentClassName="flex flex-col gap-2 px-3 pt-2 pb-3">
            <p className="m-0 text-foot12 text-placeholder">{t.magnetHint}</p>
            <div className="grid grid-cols-[minmax(0,86fr)_minmax(0,116fr)_minmax(0,117fr)] overflow-hidden rounded-md">
              {baseFloors.map((floor) => {
                const state = checks[floor.index] ?? "idle";
                return (
                  <div key={floor.index} className="contents">
                    <Cell className="justify-start px-3 font-medium">{floor.label}[{floor.index + 1}]</Cell>
                    <Cell className="justify-center">
                      <Button
                        theme="primary"
                        size="small"
                        className="km-installation-start"
                        disabled={!warmedUp || state === "checking"}
                        onClick={() => onStartCheck(floor.index)}
                        aria-label={`${t.start} ${floor.label}`}
                      >
                        {t.start}
                      </Button>
                    </Cell>
                    <Cell className="justify-end px-3">
                      <StatusLabel
                        state={state}
                        idle={t.idle}
                        checking={t.checking}
                        done={t.correct}
                      />
                    </Cell>
                  </div>
                );
              })}
            </div>
          </DetailSection>
        )}

        <DetailSection title={t.func} titleId="installation-function-title" contentClassName="p-3">
          <div className="overflow-hidden rounded-md bg-secondarycontainer">
            <div className="grid grid-cols-3">
              <FunctionCell align="start" className="font-medium">{t.door}</FunctionCell>
              <FunctionCell>{functionChecks.door === "idle" ? "--" : t.doorValue}</FunctionCell>
              <FunctionCell align="end"><StatusLabel state={functionChecks.door} idle={t.idle} checking={t.checking} done={t.done} /></FunctionCell>
              <FunctionCell align="start" className="font-medium" last>{t.travel}</FunctionCell>
              <FunctionCell last>
                {functionChecks.travel === "idle"
                  ? "--"
                  : <span className="inline-flex items-center"><RegistrationArrowUpIcon aria-hidden="true" className="size-5 text-brand" />3.0m/s</span>}
              </FunctionCell>
              <FunctionCell align="end" last><StatusLabel state={functionChecks.travel} idle={t.idle} checking={t.checking} done={t.done} /></FunctionCell>
            </div>
            {functionChecks.travel === "done" && (
              <div className="px-4 pb-3">
                <p className="m-0 rounded-md bg-[#e7edfe] px-2 py-0.5 text-foot12 text-secondary-text">{t.distance}</p>
              </div>
            )}
          </div>
        </DetailSection>
      </div>
      <MobileBottomBar>
        {complete
          ? <Button theme="primary" size="large" block onClick={onView}>{t.view}</Button>
          : <Button theme="primary" size="large" block onClick={onSkip}>{t.skip}</Button>}
      </MobileBottomBar>
    </div>
  );
}

function Cell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`flex h-[46px] items-center bg-secondarycontainer py-2 text-body text-primary-text ${className}`}>{children}</div>;
}

/** 功能检查单元格：首列靠左、末列靠右、中间列居中，两侧内边距 12px。 */
function FunctionCell({ children, className = "", last = false, align = "center" }: { children: ReactNode; className?: string; last?: boolean; align?: "start" | "center" | "end" }) {
  const justify = align === "start" ? "justify-start" : align === "end" ? "justify-end" : "justify-center";
  return <div className={`flex items-center ${justify} px-3 pt-3 text-body text-primary-text ${last ? "pb-2" : "pb-3"} ${className}`}>{children}</div>;
}

/** 状态：未开始 / 进行中 / 完成。文字沿用设计稿的 placeholder 灰，用图标区分颜色。 */
function StatusLabel({ state, idle, checking, done }: { state: CheckState; idle: string; checking: string; done: string }) {
  return (
    <span className="inline-flex items-center gap-1 whitespace-nowrap text-body text-placeholder">
      {state === "done"
        ? <RegistrationCheckCircleIcon aria-hidden="true" className="size-4 shrink-0 text-success" />
        : state === "checking"
          ? <span aria-hidden="true" className="km-loading-ring size-4 shrink-0" style={{ "--ring-width": "2px" } as CSSProperties} />
          : <RegistrationClockIcon aria-hidden="true" className="size-4 shrink-0 text-disabled" />}
      {state === "done" ? done : state === "checking" ? checking : idle}
    </span>
  );
}
