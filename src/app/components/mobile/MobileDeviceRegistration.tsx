import { useEffect, useMemo, useRef, useState } from "react";
import { StickyTabBar } from "./StickyTabBar";
import { RegistrationCameraIcon, RegistrationModuleTabIcon, RegistrationRealtimeTabIcon, RegistrationScanIcon, RegistrationSuccessIcon } from "../icons/registration-icons";
import { DeviceSummary, Mobile310RegistrationFlow, RegistrationNotice } from "./Mobile310RegistrationFlow";
import { RegistrationPendingDialog } from "./RegistrationPendingDialog";
import { RegistrationActionSheet } from "./RegistrationActionSheet";
import { RegistrationLoadingToast, RegistrationTopMessage } from "./RegistrationToasts";
import { Mobile320ConnectionView } from "./Mobile320ConnectionView";
import { Mobile320DeviceData } from "./Mobile320DeviceData";
import { Mobile320InstallationView } from "./Mobile320InstallationView";
import { RegistrationSkipDialog } from "./RegistrationSkipDialog";
import { Mobile320FloorPanel, type FloorPhotoState } from "./Mobile320FloorPanel";
import { Mobile320ModulePanel } from "./Mobile320ModulePanel";
import { MobileDeviceDetailTabs } from "../device-detail/DeviceDetailTabs";
import { LayersIcon } from "../icons/live-data-icons";
import { Button, Dialog, MessagePlugin, Tabs } from "tdesign-react";
import {
  ADVANCED_EQUIPMENT_NUMBER,
  CONNECTION_310_POST_REGISTRATION_EQUIPMENT_NUMBER,
  createDemoFloors,
  DEMO_DTU_SERIAL,
  DEMO_MACHINE_SENSOR_SERIAL,
  realtimeMetrics,
  sanitizeMachinePorts,
  type RegistrationFloor,
  type RegistrationSensorConfig,
  type RegistrationSensorKind,
} from "../../data/deviceRegistration";
import { MobileBottomBar, MobilePageTitle, type MobileLang } from "./MobileShell";

type Phase = "equipment" | "verifying" | "confirmed" | "serial" | "standard" | "connection310data" | "config320" | "connecting" | "installing" | "postcheck";
type DataTab = "module" | "floor" | "realtime";
type StandardLifecycle = "offline" | "online" | "submoduleLoading" | "ready";
type CheckState = "idle" | "checking" | "done";
type FunctionChecks = { door: CheckState; travel: CheckState };

const isPositiveFinite = (value: string) => {
  const number = Number(value);
  return value.trim() !== "" && Number.isFinite(number) && number > 0;
};

function copy(language: MobileLang) {
  return language === "cn"
    ? {
        title: "设备注册",
        equipment: "设备号",
        equipmentValidation: "电梯设备号验证",
        equipmentLocked: "电梯设备号",
        equipmentPlaceholder: "请输入电梯设备号",
        validate: "设备号验证",
        required: "请输入设备号",
        format: "请输入 8 位数字设备号",
        verifying: "验证中",
        verified: "设备号验证成功",
        next: "下一步",
        serial: "DTU 序列号",
        serialValidation: "DTU序列号验证",
        serialHint: "扫描DTU上的二维码或手动输入序列号",
        serialPlaceholder: "请输入序列号",
        serialRequired: "请输入 DTU 序列号",
        scan: "扫一扫",
        album: "从相册中选择",
        cancel: "取消",
        register: "设备注册",
        previous: "上一步",
        project: "所属项目",
        address: "项目地址",
        elevatorName: "电梯名称",
        elevatorType: "电梯类型",
        back: "返回", offline: "设备未上线，正在等待 DTU 数据同步", online: "设备已上线，正在加载模块信息", submoduleLoading: "正在加载子模块和实时数据", ready: "设备数据已同步", connection: "开始连接", installation: "安装检查", viewData: "查看数据", skip: "跳过检查", complete: "完成", reconfigure: "重新配置", module: "模块信息", floor: "楼层信息", realtime: "实时数据", refresh: "刷新", deviceData: "设备数据", configNotice: "请完成模块信息和楼层信息的填写，点击开始连接，完成安装检查并获取实时数据后，完成设备注册。",
      }
    : {
        title: "Provisioning",
        equipment: "Equipment number",
        equipmentValidation: "Elevator equipment validation",
        equipmentLocked: "Elevator equipment number",
        equipmentPlaceholder: "Enter the elevator equipment number",
        validate: "Validate equipment",
        required: "Enter the equipment number",
        format: "Enter an 8-digit number",
        verifying: "Validating",
        verified: "Equipment number validated",
        next: "Next",
        serial: "DTU serial number",
        serialValidation: "DTU serial validation",
        serialHint: "Scan the QR code on the DTU or enter its serial number manually",
        serialPlaceholder: "Enter the serial number",
        serialRequired: "Enter the DTU serial number",
        scan: "Scan",
        album: "Choose from album",
        cancel: "Cancel",
        register: "Register device",
        previous: "Previous",
        project: "Project",
        address: "Project address",
        elevatorName: "Elevator name",
        elevatorType: "Elevator type",
        back: "Back", offline: "Device is offline. Waiting for DTU synchronisation", online: "Device online. Loading module information", submoduleLoading: "Loading submodule and live data", ready: "Device data synchronised", connection: "Start connection", installation: "Installation checks", viewData: "View data", skip: "Skip checks", complete: "Complete", reconfigure: "Reconfigure", module: "Modules", floor: "Floors", realtime: "Live data", refresh: "Refresh", deviceData: "Device data", configNotice: "Complete the module and floor information, then start the connection. Registration finishes after the installation checks pass and live data is retrieved.",
      };
}

function lifecycleLabel(lifecycle: StandardLifecycle, language: MobileLang) {
  const labels = copy(language);
  return labels[lifecycle];
}

export function MobileDeviceRegistration({ language, onReturnHome }: { language: MobileLang; onReturnHome?: () => void }) {
  const t = copy(language);
  const [phase, setPhase] = useState<Phase>("equipment");
  const [equipment, setEquipment] = useState("");
  const [serial, setSerial] = useState("");
  const [scanOpen, setScanOpen] = useState(false);
  const [photoOpen, setPhotoOpen] = useState(false);
  const [photoState, setPhotoState] = useState<FloorPhotoState>("idle");
  const [photoToast, setPhotoToast] = useState(false);
  const [tab, setTab] = useState<DataTab>("module");
  const [standardLifecycle, setStandardLifecycle] = useState<StandardLifecycle>("offline");
  const [doorA, setDoorA] = useState<RegistrationSensorConfig>({ kind: "doorA", enabled: true, placement: "", serial: "", ports: ["", "", "", ""] });
  const [doorB, setDoorB] = useState<RegistrationSensorConfig>({ kind: "doorB", enabled: false, placement: "", serial: "", ports: ["", "", "", ""] });
  const [machine, setMachine] = useState<RegistrationSensorConfig>({ kind: "machine", enabled: false, placement: "machine room", serial: "", ports: ["", "", "", ""] });
  const [floors, setFloors] = useState<RegistrationFloor[]>(createDemoFloors());
  const [floorCount, setFloorCount] = useState("6");
  const [averageSpacing, setAverageSpacing] = useState("");
  const [floorError, setFloorError] = useState("");
  const [connectionStep, setConnectionStep] = useState(0);
  const [preparation, setPreparation] = useState(0);
  const [magnetChecks, setMagnetChecks] = useState<Record<string, CheckState>>({});
  const [functionChecks, setFunctionChecks] = useState<FunctionChecks>({ door: "idle", travel: "idle" });
  const [skipOpen, setSkipOpen] = useState(false);
  const [completeOpen, setCompleteOpen] = useState(false);
  const [incompleteOpen, setIncompleteOpen] = useState(false);
  const installationRunRef = useRef(0);

  // 磁条安装检查针对前面勾选的基准楼层（至多两个），没有基准楼层时只做功能检查。
  const baseFloors = floors.flatMap((floor, index) => floor.base ? [{ index, label: floor.label }] : []);
  const advanced = equipment === ADVANCED_EQUIPMENT_NUMBER;
  const usesConnection310PostRegistrationFlow = equipment === CONNECTION_310_POST_REGISTRATION_EQUIPMENT_NUMBER;
  const configuredSensors = useMemo(
    () => [doorA, doorB, machine].filter((sensor) => sensor.enabled),
    [doorA, doorB, machine],
  );
  const standardReady = phase === "standard" && standardLifecycle === "ready";

  const resetInstallationRun = () => {
    installationRunRef.current += 1;
    setPreparation(0);
    setMagnetChecks({});
    setFunctionChecks({ door: "idle", travel: "idle" });
  };

  const reset = () => {
    setPhase("equipment");
    setEquipment("");
    setSerial("");
    setPhotoState("idle");
    setPhotoToast(false);
    setStandardLifecycle("offline");
    setDoorA({ kind: "doorA", enabled: true, placement: "", serial: "", ports: ["", "", "", ""] });
    setDoorB({ kind: "doorB", enabled: false, placement: "", serial: "", ports: ["", "", "", ""] });
    setMachine({ kind: "machine", enabled: false, placement: "machine room", serial: "", ports: ["", "", "", ""] });
    setFloors(createDemoFloors());
    setFloorCount("6");
    setAverageSpacing("");
    setFloorError("");
    setConnectionStep(0);
    resetInstallationRun();
    setTab("module");
    setCompleteOpen(false);
  };

  useEffect(() => {
    if (phase !== "verifying") return;
    const timer = window.setTimeout(() => setPhase("confirmed"), 1000);
    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "standard" || standardLifecycle === "ready") return;
    const delay = standardLifecycle === "offline" ? 1500 : 1200;
    const timer = window.setTimeout(() => {
      setStandardLifecycle((current) => current === "offline" ? "online" : current === "online" ? "submoduleLoading" : "ready");
    }, delay);
    return () => window.clearTimeout(timer);
  }, [phase, standardLifecycle]);

  useEffect(() => {
    if (!standardReady) return;
    setCompleteOpen(true);
  }, [standardReady]);

  useEffect(() => {
    if (phase !== "connecting") return;
    const timer = window.setInterval(() => setConnectionStep((value) => Math.min(value + 1, configuredSensors.length + 1)), 1200);
    return () => window.clearInterval(timer);
  }, [configuredSensors.length, phase]);

  useEffect(() => {
    if (phase !== "installing") return;
    const run = installationRunRef.current;
    const steps = [6, 17, 39, 60, 81, 100];
    let index = 0;
    let interval: number | undefined;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        if (run !== installationRunRef.current) return;
        setPreparation(steps[index]);
        index += 1;
        if (index === steps.length && interval !== undefined) window.clearInterval(interval);
      }, 550);
    }, 900);
    return () => {
      window.clearTimeout(start);
      if (interval !== undefined) window.clearInterval(interval);
    };
  }, [phase]);

  useEffect(() => {
    // 没有勾选基准楼层时没有磁条检查可点，预热完成后直接开始功能检查。
    if (phase !== "installing" || preparation < 100 || baseFloors.length > 0 || functionChecks.door !== "idle") return;
    setFunctionChecks({ door: "checking", travel: "checking" });
  }, [baseFloors.length, functionChecks.door, phase, preparation]);
  useEffect(() => {
    if (phase !== "installing" || functionChecks.door !== "checking") return;
    const run = installationRunRef.current;
    const timer = window.setTimeout(() => {
      if (run === installationRunRef.current) setFunctionChecks((checks) => ({ ...checks, door: "done" }));
    }, 900);
    return () => window.clearTimeout(timer);
  }, [functionChecks.door, phase]);

  useEffect(() => {
    if (phase !== "installing" || functionChecks.travel !== "checking") return;
    const run = installationRunRef.current;
    const timer = window.setTimeout(() => {
      if (run === installationRunRef.current) setFunctionChecks((checks) => ({ ...checks, travel: "done" }));
    }, 1500);
    return () => window.clearTimeout(timer);
  }, [functionChecks.travel, phase]);

  // 楼层信息：识别中 → 识别完成 → 「生成中」提示 → 进入填写页（IOT Delivery 12360:76330）。
  useEffect(() => {
    if (photoState === "done" || photoState === "idle") return;
    const next: Record<Exclude<FloorPhotoState, "done" | "idle">, { delay: number; state: FloorPhotoState }> = {
      recognising: { delay: 1700, state: "recognised" },
      recognised: { delay: 800, state: "generating" },
      generating: { delay: 1200, state: "done" },
    };
    const step = next[photoState];
    const timer = window.setTimeout(() => {
      if (step.state === "done") {
        setFloors(createDemoFloors());
        setFloorCount("6");
        setAverageSpacing("");
        setFloorError("");
      }
      setPhotoState(step.state);
    }, step.delay);
    return () => window.clearTimeout(timer);
  }, [photoState]);
  useEffect(() => {
    if (!photoToast) return;
    const timer = window.setTimeout(() => setPhotoToast(false), 3000);
    return () => window.clearTimeout(timer);
  }, [photoToast]);
  const handleValidate = () => {
    if (equipment.trim()) setPhase("verifying");
  };

  const beginRegistration = () => {
    if (!serial.trim()) return;
    setTab("module");
    if (usesConnection310PostRegistrationFlow) {
      setPhase("connection310data");
      return;
    }
    if (advanced) {
      // Connection 320 没有设备上线的中间状态页：提交 DTU 序列号后直接进入配置页。
      resetInstallationRun();
      const submittedSerial = serial.trim();
      setDoorA((current) => ({ ...current, serial: submittedSerial }));
      setDoorB((current) => ({ ...current, serial: submittedSerial }));
      setPhase("config320");
      return;
    }
    setStandardLifecycle("offline");
    setPhase("standard");
  };

  const finishScan = () => {
    setScanOpen(false);
    setSerial(DEMO_DTU_SERIAL);
  };

  const setSensor = (kind: RegistrationSensorKind, update: Partial<RegistrationSensorConfig>) => {
    const setter = kind === "doorA" ? setDoorA : kind === "doorB" ? setDoorB : setMachine;
    setter((current) => ({ ...current, ...update }));
  };

  const setPort = (kind: RegistrationSensorKind, index: number, value: string) => {
    const sensor = kind === "doorA" ? doorA : kind === "doorB" ? doorB : machine;
    const ports = sensor.ports.map((item, itemIndex) => itemIndex === index ? value : item);
    setSensor(kind, { ports });
  };

  const addSensor = () => {
    if (!doorB.enabled) {
      setSensor("doorB", { enabled: true });
      // 出现 B 门后机房回路选项变为 A / B 两套，清掉已失效的选择。
      setSensor("machine", { ports: sanitizeMachinePorts(machine.ports, true) });
    } else if (!machine.enabled) {
      setSensor("machine", { enabled: true });
    }
  };

  const removeSensor = (kind: RegistrationSensorKind) => {
    if (kind === "doorB") {
      setSensor("doorB", { enabled: false, placement: "", ports: ["", "", "", ""] });
      setSensor("machine", { ports: sanitizeMachinePorts(machine.ports, false) });
    }
    else if (kind === "machine") setSensor("machine", { enabled: false, serial: "", ports: ["", "", "", ""] });
  };

  const generateFloors = () => {
    const count = Number(floorCount);
    if (!Number.isInteger(count) || count < 1 || count > 60) {
      setFloorError(language === "cn" ? "请输入 1–60 之间的总楼层数" : "Enter a floor count from 1 to 60");
      return;
    }
    setFloors((current) => Array.from({ length: count }, (_, index) => current[index] ?? {
      label: index === 0 ? "B1" : `${index}F`, spacing: "", base: false,
    }));
    setFloorError("");
  };

  const fillSpacing = () => {
    if (!isPositiveFinite(averageSpacing)) return;
    setFloors((current) => current.map((floor, index) => index === current.length - 1 ? floor : { ...floor, spacing: averageSpacing }));
  };

  const updateFloor = (index: number, update: Partial<RegistrationFloor>) => {
    setFloors((current) => {
      // 基准楼层至多两个：已满时忽略再勾选第三个。
      if (update.base && !current[index]?.base && current.filter((floor) => floor.base).length >= 2) return current;
      return current.map((floor, itemIndex) => itemIndex === index ? { ...floor, ...update } : floor);
    });
  };

  const pickPhoto = () => {
    setPhotoOpen(false);
    setPhotoToast(true);
    setPhotoState("recognising");
  };

  const removePhoto = () => {
    setPhotoState("idle");
    setFloors(createDemoFloors());
    setFloorCount("6");
    setAverageSpacing("");
    setFloorError("");
  };

  const floorsComplete = photoState === "done"
    && floors.length === Number(floorCount)
    && isPositiveFinite(averageSpacing)
    && floors.every((floor, index) => floor.label.trim() && (index === floors.length - 1 || isPositiveFinite(floor.spacing)));
  const sensorsComplete = doorA.placement
    && (!doorB.enabled || Boolean(doorB.placement))
    && (!machine.enabled || Boolean(machine.serial.trim()));
  const readyToConnect = Boolean(sensorsComplete && floorsComplete);
  const checksComplete = baseFloors.every((floor) => magnetChecks[floor.index] === "done")
    && functionChecks.door === "done"
    && functionChecks.travel === "done";

  const startMagnetCheck = (floorIndex: number) => {
    const run = installationRunRef.current;
    setMagnetChecks((checks) => ({ ...checks, [floorIndex]: "checking" }));
    setFunctionChecks((checks) => checks.door === "idle" ? { door: "checking", travel: "checking" } : checks);
    window.setTimeout(() => {
      if (run === installationRunRef.current) setMagnetChecks((checks) => ({ ...checks, [floorIndex]: "done" }));
    }, 1100);
  };

  const restartStandardLifecycle = () => {
    setCompleteOpen(false);
    setTab("module");
    setStandardLifecycle("offline");
    MessagePlugin.success(language === "cn" ? "正在重新同步设备数据" : "Restarting device data synchronisation", 3000);
  };

  const handleBack = () => {
    if (["standard", "config320", "connecting", "installing", "postcheck"].includes(phase)) setIncompleteOpen(true);
    else if (phase === "serial") setPhase("confirmed");
    else if (phase === "confirmed") setPhase("equipment");
  };

  if (phase === "equipment" || phase === "verifying" || phase === "confirmed" || phase === "serial") {
    const verifying = phase === "verifying";

    return (
      <div className={`flex flex-1 flex-col ${phase === "confirmed" ? "bg-container" : "bg-page"}`}>
        <MobilePageTitle title={t.title} language={language} onBack={phase === "equipment" || verifying ? undefined : handleBack} />
        {(phase === "equipment" || verifying) && (
          <div className="relative flex flex-1 items-start px-4 pt-4">
            <section
              aria-labelledby="registration-equipment-validation-title"
              className="km-registration-card h-[92px] w-full"
            >
              <div className="km-registration-card__title">
                <span aria-hidden="true" className="km-registration-card__marker" />
                <h2 id="registration-equipment-validation-title" className="m-0 text-h7 font-semibold text-primary-text">
                  {t.equipmentValidation}
                </h2>
              </div>
              <div className="km-registration-field">
                <input
                  className="km-registration-field__input"
                  value={equipment}
                  disabled={verifying}
                  aria-labelledby="registration-equipment-validation-title"
                  inputMode="numeric"
                  placeholder={t.equipmentPlaceholder}
                  onChange={(event) => {
                    setEquipment(event.target.value.replace(/\s/g, ""));
                  }}
                />
              </div>
            </section>
            {verifying && <VerificationToast label={t.verifying} />}
          </div>
        )}
        {phase === "confirmed" && (
          <div className="flex flex-1 flex-col px-4 pt-10">
            <div className="flex flex-col items-center text-center">
              <RegistrationSuccessIcon aria-hidden="true" className="size-20 text-success" />
              <h2 className="mt-3 mb-0 text-h5 font-semibold text-primary-text">{t.verified}</h2>
            </div>
            <dl className="mt-12 mb-0 flex w-full flex-col gap-3 text-body">
              <DetailRow label={t.equipment} value={equipment} />
              <DetailRow label={t.project} value={language === "cn" ? "标力大厦" : "Biaoli Building"} />
              <DetailRow label={t.address} value={language === "cn" ? "福州市鼓楼区湖东路99号" : "99 Hudong Road, Gulou District, Fuzhou"} />
              <DetailRow label={t.elevatorName} value="L3" />
              <DetailRow label={t.elevatorType} value={language === "cn" ? "直梯" : "Passenger lift"} />
            </dl>
          </div>
        )}
        {phase === "serial" && (
          <div className="flex flex-1 flex-col gap-3 px-4 pt-4">
            <section className="km-registration-card h-[92px]">
              <div className="km-registration-card__title"><span aria-hidden="true" className="km-registration-card__marker" /> <h2 className="m-0 text-h7 font-semibold text-primary-text">{t.equipmentLocked}</h2></div>
              <p className="m-0 flex h-14 items-center px-3 text-h7 text-primary-text">{equipment}</p>
            </section>
            <section
              aria-labelledby="registration-serial-validation-title"
              className="km-registration-card h-[124px]"
            >
              <div className="km-registration-card__title">
                <span aria-hidden="true" className="km-registration-card__marker" />
                <h2 id="registration-serial-validation-title" className="m-0 text-h7 font-semibold text-primary-text">
                  {t.serialValidation}
                </h2>
              </div>
              <p className="mx-3 mt-3 mb-0 text-foot12 text-secondary-text">{t.serialHint}</p>
              <div className="km-registration-field">
                <input
                  className="km-registration-field__input"
                  value={serial}
                  aria-labelledby="registration-serial-validation-title"
                  placeholder={t.serialPlaceholder}
                  onChange={(event) => {
                    setSerial(event.target.value);
                  }}
                />
                <button type="button" aria-label={t.scan} className="km-registration-scan-trigger" onClick={() => setScanOpen(true)}>
                  <RegistrationScanIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
            </section>
          </div>
        )}
        <MobileBottomBar>
          {phase === "serial" ? (
            <div className="km-registration-actions">
              <Button className="km-mobile-button--secondary" theme="default" size="large" block onClick={() => setPhase("confirmed")}>{t.previous}</Button>
              <Button theme="primary" size="large" block disabled={!serial.trim()} onClick={beginRegistration}>{t.register}</Button>
            </div>
          ) : (
            <Button theme="primary" size="large" block disabled={verifying || (phase === "equipment" && !equipment.trim())} onClick={phase === "confirmed" ? () => setPhase("serial") : handleValidate}>
              {phase === "confirmed" ? t.next : t.validate}
            </Button>
          )}
        </MobileBottomBar>
        <RegistrationActionSheet
          visible={scanOpen}
          srTitle={language === "cn" ? "DTU 序列号录入方式" : "DTU serial entry method"}
          primaryIcon={<RegistrationScanIcon aria-hidden="true" className="size-6" />}
          primaryLabel={t.scan}
          secondaryLabel={t.album}
          cancelLabel={t.cancel}
          onPrimary={finishScan}
          onSecondary={finishScan}
          onClose={() => setScanOpen(false)}
        />
      </div>
    );
  }

  if (phase === "connection310data") {
    return <Mobile310RegistrationFlow language={language} onRestart={reset} onReturnHome={onReturnHome} />;
  }

  if (phase === "connecting") {
    return <Mobile320ConnectionView language={language} step={connectionStep} sensors={configuredSensors} floors={floors} onNext={() => { resetInstallationRun(); setPhase("installing"); }} />;
  }

  if (phase === "installing") {
    return (
      <>
        <Mobile320InstallationView
          language={language}
          preparation={preparation}
          baseFloors={baseFloors}
          checks={magnetChecks}
          functionChecks={functionChecks}
          complete={checksComplete}
          onBack={() => { resetInstallationRun(); setPhase("connecting"); }}
          onStartCheck={startMagnetCheck}
          onSkip={() => setSkipOpen(true)}
          onView={() => setPhase("postcheck")}
        />
        <RegistrationSkipDialog language={language} visible={skipOpen} onBack={() => setSkipOpen(false)} onSkip={() => { setSkipOpen(false); setPhase("postcheck"); }} />
      </>
    );
  }

  if (phase === "postcheck") {
    return (
      <>
        <Mobile320DeviceData
          language={language}
          serial={serial.trim()}
          sensors={configuredSensors}
          floors={floors}
          skipped={!checksComplete}
          onBack={() => setIncompleteOpen(true)}
          onRefresh={() => MessagePlugin.success(language === "cn" ? "数据已刷新" : "Data refreshed", 3000)}
          onFloorLabels={(labels) => setFloors((current) => current.map((floor, index) => ({ ...floor, label: labels[index] ?? floor.label })))}
          onReconfigure={() => { resetInstallationRun(); setPhase("config320"); setTab("module"); }}
          onComplete={reset}
        />
        <RegistrationPendingDialog language={language} visible={incompleteOpen} onRestart={() => { setIncompleteOpen(false); reset(); }} onStay={() => setIncompleteOpen(false)} />
      </>
    );
  }
  const isStandard = phase === "standard";
  const isConfig320 = phase === "config320";
  return (
    <>
      <div className="flex min-h-0 flex-1 flex-col bg-page">
        <MobilePageTitle
          title={isConfig320 ? t.deviceData : t.title}
          language={language}
          onBack={handleBack}
          extra={
            <button
              type="button"
              onClick={isStandard ? restartStandardLifecycle : () => MessagePlugin.success(language === "cn" ? "数据已刷新" : "Data refreshed", 3000)}
              className="cursor-pointer rounded-sm border-0 bg-transparent p-1 text-body text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
            >
              {t.refresh}
            </button>
          }
        />
        {isConfig320 ? (
          <div className="flex-1 px-4 pb-4">
            <RegistrationNotice message={t.configNotice} />
            <DeviceSummary language={language} />
            {/* 页面整体由文档滚动，页签吸附在顶部导航（56px）下方；外层不能设 overflow，否则 sticky 会相对它而不是视口。 */}
            <StickyTabBar>
              <MobileDeviceDetailTabs
                tabs={[
                  { key: "module" as DataTab, label: t.module, Icon: RegistrationModuleTabIcon },
                  { key: "floor" as DataTab, label: t.floor, Icon: LayersIcon },
                  { key: "realtime" as DataTab, label: t.realtime, Icon: RegistrationRealtimeTabIcon },
                ]}
                value={tab}
                onChange={setTab}
                equalWidth
                ariaLabel={language === "cn" ? "设备数据内容" : "Device data content"}
              />
            </StickyTabBar>
            <div className="mt-4">
              {tab === "module" && (
                <Mobile320ModulePanel
                  language={language}
                  serial={serial.trim()}
                  doorA={doorA}
                  doorB={doorB}
                  machine={machine}
                  onSensor={setSensor}
                  onPort={setPort}
                  onRemove={removeSensor}
                  onAdd={addSensor}
                  onScanMachine={() => setSensor("machine", { serial: DEMO_MACHINE_SENSOR_SERIAL })}
                />
              )}
              {tab === "floor" && (
                <Mobile320FloorPanel
                  language={language}
                  photoState={photoState}
                  floors={floors}
                  floorCount={floorCount}
                  averageSpacing={averageSpacing}
                  floorError={floorError}
                  onUpload={() => setPhotoOpen(true)}
                  onRemovePhoto={removePhoto}
                  onCount={setFloorCount}
                  onGenerate={generateFloors}
                  onSpacing={setAverageSpacing}
                  onFill={fillSpacing}
                  onFloor={updateFloor}
                />
              )}
              {tab === "realtime" && <RealtimePanel language={language} ready={false} skipped={false} />}
            </div>
          </div>
        ) : (
          <>
        <div className="px-4 pt-4">
          <StatusNotice
            status={isStandard ? lifecycleLabel(standardLifecycle, language) : language === "cn" ? "设备已上线" : "Device online"}
            tone={isStandard && standardLifecycle !== "ready" ? "warning" : "success"}
            detail={isStandard ? standardLifecycle === "ready" ? (language === "cn" ? "模块、子模块和实时数据已同步。" : "Module, submodule, and live data are synchronised.") : (language === "cn" ? "完成同步前不能完成设备注册。" : "Registration remains unavailable until synchronisation finishes.") : phase === "postcheck" ? (language === "cn" ? "注册后检查数据已生成。" : "Post-registration check data is available.") : (language === "cn" ? "请完成模块与楼层信息后开始连接。" : "Complete module and floor information before connecting.")}
          />
        </div>
        <div className="px-4 pt-4">
          <Tabs
            theme="normal"
            size="medium"
            value={tab}
            onChange={(value) => setTab(value as DataTab)}
            list={[{ value: "module", label: t.module }, ...(advanced ? [{ value: "floor", label: t.floor }] : []), { value: "realtime", label: t.realtime }]}
          />
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {tab === "module" && <StandardModules language={language} serial={serial} lifecycle={standardLifecycle} />}
          {tab === "realtime" && <RealtimePanel language={language} ready={standardReady} skipped={false} />}
        </div>
          </>
        )}
        {isStandard && (
          <MobileBottomBar>
            <Button theme="primary" size="large" block disabled={!standardReady} onClick={() => setCompleteOpen(true)}>{t.complete}</Button>
          </MobileBottomBar>
        )}
        {phase === "config320" && (
          <MobileBottomBar>
            <Button theme="primary" size="large" block disabled={!readyToConnect} onClick={() => { resetInstallationRun(); setConnectionStep(0); setPhase("connecting"); }}>{t.connection}</Button>
          </MobileBottomBar>
        )}
      </div>
      <RegistrationActionSheet
        visible={photoOpen}
        srTitle={language === "cn" ? "电梯面板照片来源" : "Elevator panel photo source"}
        primaryIcon={<RegistrationCameraIcon aria-hidden="true" className="size-6" />}
        primaryLabel={language === "cn" ? "拍照片" : "Take a photo"}
        secondaryLabel={t.album}
        cancelLabel={t.cancel}
        onPrimary={pickPhoto}
        onSecondary={pickPhoto}
        onClose={() => setPhotoOpen(false)}
      />
      {photoToast && <RegistrationTopMessage theme="success" content={language === "cn" ? "照片上传成功，即将分析楼层信息。" : "Photo uploaded. Floor information will be analysed shortly."} />}
      {photoState === "generating" && <RegistrationLoadingToast label={language === "cn" ? "生成中" : "Generating"} />}
      <Dialog visible={completeOpen} theme="info" header={language === "cn" ? "设备注册完成" : "Registration complete"} body={language === "cn" ? "模块、子模块和实时数据已加载，本设备已成功完成注册。" : "Module, submodule, and live data are loaded. This device is registered."} cancelBtn={language === "cn" ? "留在当页" : "Stay here"} confirmBtn={language === "cn" ? "完成" : "Done"} onClose={() => setCompleteOpen(false)} onConfirm={reset} />
      <RegistrationPendingDialog language={language} visible={incompleteOpen} onRestart={() => { setIncompleteOpen(false); reset(); }} onStay={() => setIncompleteOpen(false)} />
    </>
  );
}

function StatusNotice({ status, tone, detail }: { status: string; tone: "success" | "warning"; detail: string }) {
  return <div className="rounded-md border border-stroke bg-container p-3"><p className={`m-0 inline-flex items-center gap-1 text-body ${tone === "success" ? "text-success" : "text-warning"}`}><span aria-hidden="true" className="size-1.5 rounded-full bg-current" />{status}</p><p className="mt-1 mb-0 text-foot12 text-secondary-text">{detail}</p></div>;
}

function StandardModules({ language, serial, lifecycle }: { language: MobileLang; serial: string; lifecycle: StandardLifecycle }) {
  const ready = lifecycle === "ready";
  const loading = lifecycle === "submoduleLoading";
  return <section className="rounded-md bg-container p-4"><h2 className="m-0 text-h7 font-semibold text-primary-text">KONE Connection 310</h2><ModuleRows rows={[[language === "cn" ? "状态" : "Status", ready ? (language === "cn" ? "已注册" : "Registered") : lifecycle === "offline" ? (language === "cn" ? "离线" : "Offline") : (language === "cn" ? "同步中" : "Synchronising")], [language === "cn" ? "序列号" : "Serial", serial], [language === "cn" ? "软件版本" : "Software version", lifecycle === "offline" ? "—" : "1.2.11"], [language === "cn" ? "子模块" : "Submodule", loading ? (language === "cn" ? "正在加载…" : "Loading…") : ready ? "LCECPU561 · 9.4.7" : "—"]]} /></section>;
}

function ModuleRows({ rows }: { rows: string[][] }) {
  return <dl className="mt-4 mb-0 flex flex-col gap-3 text-body">{rows.map(([label, value]) => <div key={label} className="flex justify-between gap-4"><dt className="text-secondary-text">{label}</dt><dd className="m-0 text-right text-primary-text break-all">{value}</dd></div>)}</dl>;
}

function RealtimePanel({ language, ready, skipped }: { language: MobileLang; ready: boolean; skipped: boolean }) {
  return ready ? <div className="flex flex-col gap-3">{skipped && <p className="m-0 rounded-sm bg-warning-light p-3 text-foot12 text-primary-text">{language === "cn" ? "已跳过安装检查，楼层学习和实时楼层数据可能不准确。" : "Installation checks were skipped. Floor learning and live floor data may be inaccurate."}</p>}<section className="rounded-md bg-container p-4"><h2 className="m-0 text-h7 font-semibold text-primary-text">{language === "cn" ? "实时运行数据" : "Live operating data"}</h2><div className="mt-4 grid grid-cols-2 gap-3">{realtimeMetrics.map(([label, value]) => <div key={label} className="rounded-sm bg-secondarycontainer p-3"><p className="m-0 text-foot12 text-secondary-text">{label}</p><p className="mt-1 mb-0 text-body font-medium text-primary-text">{value}</p></div>)}</div></section></div> : <section className="rounded-md bg-container p-4 text-center"><p className="m-0 text-body text-secondary-text">{language === "cn" ? "设备数据完成同步后可获取实时数据。" : "Live data becomes available after device synchronisation."}</p></section>;
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return <div className="flex items-start justify-between gap-4"><dt className="text-secondary-text">{label}</dt><dd className="m-0 text-right text-primary-text">{value}</dd></div>;
}

function VerificationToast({ label }: { label: string }) {
  return <div role="status" aria-live="polite" className="km-registration-verifying"><span aria-hidden="true" className="km-registration-verifying__spinner" /><span className="text-body text-white-text">{label}</span></div>;
}

