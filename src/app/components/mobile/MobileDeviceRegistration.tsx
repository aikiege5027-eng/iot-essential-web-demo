import { useEffect, useMemo, useRef, useState } from "react";
import { RegistrationScanIcon, RegistrationSuccessIcon } from "../icons/registration-icons";
import { Mobile310RegistrationFlow } from "./Mobile310RegistrationFlow";
import { Button, Checkbox, Dialog, Drawer, Input, MessagePlugin, Radio, RadioGroup, Select, Tabs } from "tdesign-react";
import {
  ADVANCED_EQUIPMENT_NUMBER,
  CONNECTION_310_POST_REGISTRATION_EQUIPMENT_NUMBER,
  createDemoFloors,
  DEMO_DTU_SERIAL,
  DEMO_MACHINE_SENSOR_SERIAL,
  realtimeMetrics,
  SENSOR_PORT_OPTIONS,
  type RegistrationFloor,
  type RegistrationSensorConfig,
  type RegistrationSensorKind,
} from "../../data/deviceRegistration";
import { MobileBottomBar, MobilePageTitle, type MobileLang } from "./MobileShell";

type Phase = "equipment" | "verifying" | "confirmed" | "serial" | "standard" | "connection310data" | "waiting320" | "config320" | "connecting" | "installing" | "postcheck";
type DataTab = "module" | "floor" | "realtime";
type StandardLifecycle = "offline" | "online" | "submoduleLoading" | "ready";
type Connection320Lifecycle = "offline" | "online";
type CheckState = "idle" | "checking" | "done";
type PhotoSource = "camera" | "album";
type FunctionChecks = { door: CheckState; travel: CheckState };

const isPositiveFinite = (value: string) => {
  const number = Number(value);
  return value.trim() !== "" && Number.isFinite(number) && number > 0;
};

const sensorNames: Record<RegistrationSensorKind, string> = {
  doorA: "轿门传感器",
  doorB: "轿门 B 传感器",
  machine: "机房传感器",
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
        back: "返回", offline: "设备未上线，正在等待 DTU 数据同步", online: "设备已上线，正在加载模块信息", submoduleLoading: "正在加载子模块和实时数据", ready: "设备数据已同步", connection: "开始连接", installation: "安装检查", viewData: "查看数据", skip: "跳过检查", complete: "完成", reconfigure: "重新配置", module: "模块信息", floor: "楼层信息", realtime: "实时数据", refresh: "刷新",
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
        back: "Back", offline: "Device is offline. Waiting for DTU synchronisation", online: "Device online. Loading module information", submoduleLoading: "Loading submodule and live data", ready: "Device data synchronised", connection: "Start connection", installation: "Installation checks", viewData: "View data", skip: "Skip checks", complete: "Complete", reconfigure: "Reconfigure", module: "Modules", floor: "Floors", realtime: "Live data", refresh: "Refresh",
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
  const [scanTarget, setScanTarget] = useState<"dtu" | "machine">("dtu");
  const [photoOpen, setPhotoOpen] = useState(false);
  const [photoSource, setPhotoSource] = useState<PhotoSource>("camera");
  const [photoState, setPhotoState] = useState<"idle" | "recognising" | "done">("idle");
  const [tab, setTab] = useState<DataTab>("module");
  const [standardLifecycle, setStandardLifecycle] = useState<StandardLifecycle>("offline");
  const [connection320Lifecycle, setConnection320Lifecycle] = useState<Connection320Lifecycle>("offline");
  const [doorA, setDoorA] = useState<RegistrationSensorConfig>({ kind: "doorA", enabled: true, placement: "", serial: "", ports: ["", ""] });
  const [doorB, setDoorB] = useState<RegistrationSensorConfig>({ kind: "doorB", enabled: false, placement: "", serial: "", ports: ["", ""] });
  const [machine, setMachine] = useState<RegistrationSensorConfig>({ kind: "machine", enabled: false, placement: "machine room", serial: "", ports: ["", ""] });
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
  const [postCheckEditing, setPostCheckEditing] = useState(false);
  const installationRunRef = useRef(0);

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
    setPhotoSource("camera");
    setPhotoState("idle");
    setStandardLifecycle("offline");
    setConnection320Lifecycle("offline");
    setDoorA({ kind: "doorA", enabled: true, placement: "", serial: "", ports: ["", ""] });
    setDoorB({ kind: "doorB", enabled: false, placement: "", serial: "", ports: ["", ""] });
    setMachine({ kind: "machine", enabled: false, placement: "machine room", serial: "", ports: ["", ""] });
    setFloors(createDemoFloors());
    setFloorCount("6");
    setAverageSpacing("");
    setFloorError("");
    setConnectionStep(0);
    resetInstallationRun();
    setTab("module");
    setPostCheckEditing(false);
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
    if (phase !== "waiting320" || connection320Lifecycle !== "offline") return;
    const timer = window.setTimeout(() => setConnection320Lifecycle("online"), 1500);
    return () => window.clearTimeout(timer);
  }, [connection320Lifecycle, phase]);

  useEffect(() => {
    if (phase !== "waiting320" || connection320Lifecycle !== "online") return;
    const submittedSerial = serial.trim();
    setDoorA((current) => ({ ...current, serial: submittedSerial }));
    setDoorB((current) => ({ ...current, serial: submittedSerial }));
    setTab("module");
    setPhase("config320");
  }, [connection320Lifecycle, phase, serial]);

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

  useEffect(() => {
    if (photoState !== "recognising") return;
    const timer = window.setTimeout(() => {
      setPhotoState("done");
      setFloors(createDemoFloors());
      setFloorCount("6");
      MessagePlugin.success(language === "cn" ? "楼层信息识别完成" : "Floor information recognised", 3000);
    }, 1700);
    return () => window.clearTimeout(timer);
  }, [language, photoState]);

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
      resetInstallationRun();
      setConnection320Lifecycle("offline");
      setPhase("waiting320");
      return;
    }
    setStandardLifecycle("offline");
    setPhase("standard");
  };

  const scan = (target: "dtu" | "machine") => {
    setScanTarget(target);
    setScanOpen(true);
  };

  const finishScan = () => {
    setScanOpen(false);
    if (scanTarget === "dtu") {
      setSerial(DEMO_DTU_SERIAL);
    } else {
      setMachine((current) => ({ ...current, serial: DEMO_MACHINE_SENSOR_SERIAL }));
    }
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
    setFloors((current) => current.map((floor, itemIndex) => itemIndex === index ? { ...floor, ...update } : floor));
  };

  const floorsComplete = photoState === "done"
    && floors.length === Number(floorCount)
    && isPositiveFinite(averageSpacing)
    && floors.every((floor, index) => floor.label.trim() && (index === floors.length - 1 || isPositiveFinite(floor.spacing)));
  const sensorsComplete = doorA.placement
    && (!doorB.enabled || Boolean(doorB.placement))
    && (!machine.enabled || Boolean(machine.serial.trim()));
  const readyToConnect = Boolean(sensorsComplete && floorsComplete);
  const checksComplete = configuredSensors.every((sensor) => magnetChecks[sensor.kind] === "done")
    && functionChecks.door === "done"
    && functionChecks.travel === "done";

  const startMagnetCheck = (kind: RegistrationSensorKind) => {
    const run = installationRunRef.current;
    setMagnetChecks((checks) => ({ ...checks, [kind]: "checking" }));
    setFunctionChecks((checks) => checks.door === "idle" ? { door: "checking", travel: "checking" } : checks);
    window.setTimeout(() => {
      if (run === installationRunRef.current) setMagnetChecks((checks) => ({ ...checks, [kind]: "done" }));
    }, 1100);
  };

  const restartStandardLifecycle = () => {
    setCompleteOpen(false);
    setTab("module");
    setStandardLifecycle("offline");
    MessagePlugin.success(language === "cn" ? "正在重新同步设备数据" : "Restarting device data synchronisation", 3000);
  };

  const handleBack = () => {
    if (["standard", "waiting320", "config320", "connecting", "installing", "postcheck"].includes(phase)) setIncompleteOpen(true);
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
          <div className="flex flex-1 flex-col gap-2.5 px-4 pt-4">
            <section className="km-registration-card h-[92px]">
              <div className="km-registration-card__title"><span aria-hidden="true" className="km-registration-card__marker" /> <h2 className="m-0 text-h7 font-semibold text-primary-text">{t.equipmentLocked}</h2></div>
              <p className="m-0 px-3 text-h7 text-primary-text">{equipment}</p>
            </section>
            <section
              aria-labelledby="registration-serial-validation-title"
              className="km-registration-card min-h-[124px]"
            >
              <div className="km-registration-card__title">
                <span aria-hidden="true" className="km-registration-card__marker" />
                <h2 id="registration-serial-validation-title" className="m-0 text-h7 font-semibold text-primary-text">
                  {t.serialValidation}
                </h2>
              </div>
              <p className="m-0 px-3 text-foot12 text-secondary-text">{t.serialHint}</p>
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
                <button type="button" aria-label={t.scan} className="km-registration-scan-trigger" onClick={() => scan("dtu")}>
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
        <DtuScanDrawer open={scanOpen} language={language} onClose={() => setScanOpen(false)} onSelect={finishScan} />
      </div>
    );
  }

  if (phase === "connection310data") {
    return <Mobile310RegistrationFlow language={language} onRestart={reset} onReturnHome={onReturnHome} />;
  }

  if (phase === "connecting") {
    return <ConnectionView language={language} step={connectionStep} sensors={configuredSensors} floors={floors} onBack={handleBack} onNext={() => { resetInstallationRun(); setPhase("installing"); }} />;
  }

  if (phase === "installing") {
    return (
      <InstallationView
        language={language}
        preparation={preparation}
        sensors={configuredSensors}
        checks={magnetChecks}
        functionChecks={functionChecks}
        onBack={() => { resetInstallationRun(); setPhase("connecting"); }}
        onStartCheck={startMagnetCheck}
        onSkip={() => setSkipOpen(true)}
        onView={() => setPhase("postcheck")}
        complete={checksComplete}
      />
    );
  }

  if (phase === "waiting320") {
    const waitingForDtu = connection320Lifecycle === "offline";
    return (
      <div className="flex flex-1 flex-col bg-page">
        <MobilePageTitle title={t.title} language={language} onBack={handleBack} />
        <div className="px-4 py-4">
          <StatusNotice
            status={waitingForDtu ? t.offline : t.online}
            tone={waitingForDtu ? "warning" : "success"}
            detail={waitingForDtu
              ? (language === "cn" ? "DTU 上线后将加载 Connection 320 配置。" : "Connection 320 configuration loads after the DTU is online.")
              : (language === "cn" ? "正在加载 Connection 320 配置。" : "Loading Connection 320 configuration.")}
          />
        </div>
        <Dialog visible={incompleteOpen} theme="warning" header={language === "cn" ? "设备注册尚未完成" : "Registration incomplete"} body={language === "cn" ? "离开会清除当前演示注册数据。" : "Leaving clears the current demo registration data."} cancelBtn={language === "cn" ? "留在当页" : "Stay here"} confirmBtn={language === "cn" ? "重新注册" : "Restart"} onClose={() => setIncompleteOpen(false)} onConfirm={() => { setIncompleteOpen(false); reset(); }} />
      </div>
    );
  }

  const isStandard = phase === "standard";
  return (
    <>
      <div className="flex min-h-0 flex-1 flex-col bg-page">
        <MobilePageTitle
          title={t.title}
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
          {tab === "module" && (isStandard
            ? <StandardModules language={language} serial={serial} lifecycle={standardLifecycle} />
            : phase === "postcheck"
              ? <PostCheckModules language={language} sensors={configuredSensors} />
              : <ConfigModules language={language} doorA={doorA} doorB={doorB} machine={machine} setSensor={setSensor} setPort={setPort} onAddDoorB={() => setDoorB((value) => ({ ...value, enabled: true }))} onAddMachine={() => setMachine((value) => ({ ...value, enabled: true }))} onScanMachine={() => scan("machine")} />)}
          {tab === "floor" && advanced && (phase === "postcheck"
            ? <PostCheckFloors language={language} floors={floors} editing={postCheckEditing} setEditing={setPostCheckEditing} updateFloor={updateFloor} />
            : <FloorConfiguration language={language} photoState={photoState} photoSource={photoSource} floors={floors} floorCount={floorCount} spacing={averageSpacing} error={floorError} onPhoto={() => setPhotoOpen(true)} onCount={setFloorCount} onGenerate={generateFloors} onSpacing={setAverageSpacing} onFill={fillSpacing} onFloor={updateFloor} />)}
          {tab === "realtime" && <RealtimePanel language={language} ready={standardReady || phase === "postcheck"} skipped={phase === "postcheck" && !checksComplete} />}
        </div>
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
        {phase === "postcheck" && (
          <MobileBottomBar>
            <Button className="km-mobile-button--secondary" theme="default" size="large" block onClick={() => { resetInstallationRun(); setPhase("config320"); setTab("module"); }}>{t.reconfigure}</Button>
            <Button theme="primary" size="large" block onClick={reset}>{t.complete}</Button>
          </MobileBottomBar>
        )}
      </div>
      <ScanDrawer open={scanOpen} language={language} onClose={() => setScanOpen(false)} onConfirm={finishScan} />
      <PhotoDrawer
        open={photoOpen}
        language={language}
        source={photoSource}
        onSourceChange={setPhotoSource}
        onClose={() => setPhotoOpen(false)}
        onConfirm={() => {
          setPhotoOpen(false);
          setPhotoState("recognising");
          MessagePlugin.success(photoSource === "camera" ? (language === "cn" ? "已选择拍摄照片" : "Photo capture selected") : (language === "cn" ? "已选择相册照片" : "Album photo selected"), 3000);
        }}
      />
      <Dialog visible={skipOpen} theme="warning" header={language === "cn" ? "跳过安装检查？" : "Skip installation checks?"} body={language === "cn" ? "跳过后楼层学习和实时楼层数据可能不准确。" : "Floor learning and live floor data may be inaccurate."} cancelBtn={language === "cn" ? "继续检查" : "Continue checks"} confirmBtn={language === "cn" ? "确认跳过" : "Skip"} onClose={() => setSkipOpen(false)} onConfirm={() => { setSkipOpen(false); setPhase("postcheck"); }} />
      <Dialog visible={completeOpen} theme="info" header={language === "cn" ? "设备注册完成" : "Registration complete"} body={language === "cn" ? "模块、子模块和实时数据已加载，本设备已成功完成注册。" : "Module, submodule, and live data are loaded. This device is registered."} cancelBtn={language === "cn" ? "留在当页" : "Stay here"} confirmBtn={language === "cn" ? "完成" : "Done"} onClose={() => setCompleteOpen(false)} onConfirm={reset} />
      <Dialog visible={incompleteOpen} theme="warning" header={language === "cn" ? "设备注册尚未完成" : "Registration incomplete"} body={language === "cn" ? "离开会清除当前演示注册数据。" : "Leaving clears the current demo registration data."} cancelBtn={language === "cn" ? "留在当页" : "Stay here"} confirmBtn={language === "cn" ? "重新注册" : "Restart"} onClose={() => setIncompleteOpen(false)} onConfirm={() => { setIncompleteOpen(false); reset(); }} />
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

function ConfigModules({ language, doorA, doorB, machine, setSensor, setPort, onAddDoorB, onAddMachine, onScanMachine }: { language: MobileLang; doorA: RegistrationSensorConfig; doorB: RegistrationSensorConfig; machine: RegistrationSensorConfig; setSensor: (kind: RegistrationSensorKind, update: Partial<RegistrationSensorConfig>) => void; setPort: (kind: RegistrationSensorKind, index: number, value: string) => void; onAddDoorB: () => void; onAddMachine: () => void; onScanMachine: () => void }) {
  return <div className="flex flex-col gap-3"><SensorCard language={language} sensor={doorA} setSensor={setSensor} setPort={setPort} /><SensorCard language={language} sensor={doorB} setSensor={setSensor} setPort={setPort} onRemove={() => setSensor("doorB", { enabled: false, placement: "" })} />{!doorB.enabled && <Button theme="default" variant="outline" size="large" block onClick={onAddDoorB}>{language === "cn" ? "添加轿门 B 传感器" : "Add Door B sensor"}</Button>}<SensorCard language={language} sensor={machine} setSensor={setSensor} setPort={setPort} onScan={onScanMachine} onRemove={() => setSensor("machine", { enabled: false, serial: "" })} />{!machine.enabled && <Button theme="default" variant="outline" size="large" block onClick={onAddMachine}>{language === "cn" ? "添加机房传感器" : "Add machine room sensor"}</Button>}</div>;
}

function SensorCard({ language, sensor, setSensor, setPort, onScan, onRemove }: { language: MobileLang; sensor: RegistrationSensorConfig; setSensor: (kind: RegistrationSensorKind, update: Partial<RegistrationSensorConfig>) => void; setPort: (kind: RegistrationSensorKind, index: number, value: string) => void; onScan?: () => void; onRemove?: () => void }) {
  if (!sensor.enabled) return null;
  const door = sensor.kind !== "machine";
  return <section className="rounded-md bg-container p-4"><div className="flex items-center justify-between gap-3"><h2 className="m-0 text-h7 font-semibold text-primary-text">{sensorNames[sensor.kind]}</h2>{onRemove && <button type="button" onClick={onRemove} className="cursor-pointer rounded-sm border-0 bg-transparent p-1 text-foot12 text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base">{language === "cn" ? "移除" : "Remove"}</button>}</div>{door ? <><p className="mt-3 mb-2 text-body text-primary-text">{language === "cn" ? "安装位置" : "Placement"}</p><div className="flex flex-wrap gap-4"><Radio checked={sensor.placement === "left"} onChange={() => setSensor(sensor.kind, { placement: "left" })}>{language === "cn" ? "左侧" : "Left"}</Radio><Radio checked={sensor.placement === "right"} onChange={() => setSensor(sensor.kind, { placement: "right" })}>{language === "cn" ? "右侧" : "Right"}</Radio></div></> : <><p className="mt-3 mb-2 text-body text-primary-text">{language === "cn" ? "传感器序列号" : "Sensor serial"}</p><Input size="medium" value={sensor.serial} placeholder="输入或扫描传感器二维码" onChange={(value) => setSensor(sensor.kind, { serial: String(value) })} /><Button className="mt-2" theme="default" variant="outline" size="medium" block onClick={onScan}>{language === "cn" ? "扫描传感器二维码" : "Scan sensor QR"}</Button></>}<div className="mt-4 flex flex-col gap-2">{sensor.ports.map((value, index) => <label key={index} className="flex items-center gap-3"><span className="w-12 shrink-0 text-foot12 text-secondary-text">{sensor.kind === "machine" ? `IN${index + 1}` : `USB${index + 1}`}</span><Select size="medium" value={value || undefined} onChange={(nextValue) => setPort(sensor.kind, index, String(nextValue ?? ""))} options={SENSOR_PORT_OPTIONS[sensor.kind].map((option) => ({ label: option, value: option }))} placeholder={language === "cn" ? "选择功能" : "Choose function"} className="flex-1" /></label>)}</div></section>;
}

function FloorConfiguration({ language, photoState, photoSource, floors, floorCount, spacing, error, onPhoto, onCount, onGenerate, onSpacing, onFill, onFloor }: { language: MobileLang; photoState: "idle" | "recognising" | "done"; photoSource: PhotoSource; floors: RegistrationFloor[]; floorCount: string; spacing: string; error: string; onPhoto: () => void; onCount: (value: string) => void; onGenerate: () => void; onSpacing: (value: string) => void; onFill: () => void; onFloor: (index: number, update: Partial<RegistrationFloor>) => void }) {
  return <div className="flex flex-col gap-3"><section className="rounded-md bg-container p-4"><h2 className="m-0 text-h7 font-semibold text-primary-text">{language === "cn" ? "轿厢操纵盘照片" : "Car operating panel photo"}</h2><p className="mt-2 mb-3 text-foot12 text-secondary-text">{photoState === "idle" ? (language === "cn" ? "上传照片后，系统将模拟识别楼层按键。" : "Upload a photo to simulate floor button recognition.") : photoState === "recognising" ? (language === "cn" ? "正在识别总楼层与楼层标签…" : "Recognising floors and labels…") : (photoSource === "camera" ? (language === "cn" ? "已用拍摄照片识别完成，可修改生成的数据。" : "Recognition from the captured photo is complete. You can edit the data.") : (language === "cn" ? "已用相册照片识别完成，可修改生成的数据。" : "Recognition from the album photo is complete. You can edit the data."))}</p><Button theme="default" variant="outline" size="large" block disabled={photoState === "recognising"} onClick={onPhoto}>{photoState === "done" ? (language === "cn" ? "重新上传" : "Replace photo") : (language === "cn" ? "上传或拍摄照片" : "Upload or take photo")}</Button></section>{photoState === "done" && <section className="rounded-md bg-container p-4"><div className="flex gap-2"><Input size="medium" value={floorCount} placeholder={language === "cn" ? "总楼层" : "Floor count"} onChange={(value) => onCount(String(value))} /><Button theme="default" size="medium" onClick={onGenerate}>{language === "cn" ? "生成" : "Generate"}</Button></div>{error && <p role="alert" className="mt-2 mb-0 text-foot12 text-error">{error}</p>}<div className="mt-3 flex gap-2"><Input size="medium" value={spacing} placeholder={language === "cn" ? "平均层间距（cm）" : "Average spacing (cm)"} onChange={(value) => onSpacing(String(value))} /><Button theme="default" size="medium" disabled={!isPositiveFinite(spacing)} onClick={onFill}>{language === "cn" ? "填充" : "Fill"}</Button></div><FloorEditor language={language} floors={floors} onFloor={onFloor} /></section>}</div>;
}

function FloorEditor({ language, floors, onFloor }: { language: MobileLang; floors: RegistrationFloor[]; onFloor: (index: number, update: Partial<RegistrationFloor>) => void }) {
  const bases = floors.filter((floor) => floor.base).length;
  return <div className="mt-4 flex flex-col gap-3">{floors.map((floor, index) => <div key={index} className="rounded-sm bg-secondarycontainer p-3"><div className="flex items-center gap-3"><Checkbox checked={floor.base} disabled={!floor.base && bases >= 2} onChange={(checked) => onFloor(index, { base: Boolean(checked) })}>{language === "cn" ? "基准楼层" : "Base floor"}</Checkbox><Input size="small" value={floor.label} placeholder={language === "cn" ? "楼层标签" : "Floor label"} onChange={(value) => onFloor(index, { label: String(value) })} /></div>{index !== floors.length - 1 && <div className="mt-2"><Input size="small" value={floor.spacing} placeholder={language === "cn" ? "与下一层间距（cm）" : "Spacing to next floor (cm)"} onChange={(value) => onFloor(index, { spacing: String(value) })} /></div>}</div>)}</div>;
}

function RealtimePanel({ language, ready, skipped }: { language: MobileLang; ready: boolean; skipped: boolean }) {
  return ready ? <div className="flex flex-col gap-3">{skipped && <p className="m-0 rounded-sm bg-warning-light p-3 text-foot12 text-primary-text">{language === "cn" ? "已跳过安装检查，楼层学习和实时楼层数据可能不准确。" : "Installation checks were skipped. Floor learning and live floor data may be inaccurate."}</p>}<section className="rounded-md bg-container p-4"><h2 className="m-0 text-h7 font-semibold text-primary-text">{language === "cn" ? "实时运行数据" : "Live operating data"}</h2><div className="mt-4 grid grid-cols-2 gap-3">{realtimeMetrics.map(([label, value]) => <div key={label} className="rounded-sm bg-secondarycontainer p-3"><p className="m-0 text-foot12 text-secondary-text">{label}</p><p className="mt-1 mb-0 text-body font-medium text-primary-text">{value}</p></div>)}</div></section></div> : <section className="rounded-md bg-container p-4 text-center"><p className="m-0 text-body text-secondary-text">{language === "cn" ? "设备数据完成同步后可获取实时数据。" : "Live data becomes available after device synchronisation."}</p></section>;
}

function ConnectionView({ language, step, sensors, floors, onBack, onNext }: { language: MobileLang; step: number; sensors: RegistrationSensorConfig[]; floors: RegistrationFloor[]; onBack: () => void; onNext: () => void }) {
  const groups = [...sensors.map((sensor) => sensor.kind), "floors"];
  const complete = step >= groups.length;
  return <div className="flex flex-1 flex-col bg-page"><MobilePageTitle title={language === "cn" ? "设备连接" : "Device connection"} language={language} onBack={onBack} /><div className="flex flex-1 flex-col gap-3 px-4 py-4"><p className="m-0 text-body text-secondary-text">{language === "cn" ? "正在依次连接模块与楼层配置。展开可核对提交的数据。" : "Connecting configured modules and floor information in sequence. Expand each item to review submitted data."}</p>{sensors.map((sensor, index) => <ConnectionReview key={sensor.kind} sensor={sensor} state={index < step ? "done" : index === step ? "checking" : "idle"} language={language} />)}<FloorConnectionReview language={language} floors={floors} state={sensors.length < step ? "done" : sensors.length === step ? "checking" : "idle"} /></div><MobileBottomBar><Button theme="primary" size="large" block disabled={!complete} onClick={onNext}>{language === "cn" ? "下一步" : "Next"}</Button></MobileBottomBar></div>;
}

function ConnectionReview({ language, sensor, state }: { language: MobileLang; sensor: RegistrationSensorConfig; state: CheckState }) {
  return <details className="rounded-md bg-container p-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-3"><span className="text-body text-primary-text">{sensorNames[sensor.kind]}</span><CheckLabel language={language} state={state} doneLabel={language === "cn" ? "已连接" : "Connected"} checkingLabel={language === "cn" ? "连接中" : "Connecting"} idleLabel={language === "cn" ? "等待" : "Waiting"} /></summary><ModuleRows rows={[[language === "cn" ? "安装位置" : "Placement", sensor.placement || "—"], [language === "cn" ? "传感器序列号" : "Sensor serial", sensor.serial || "—"], ...sensor.ports.map((port, index) => [`${sensor.kind === "machine" ? "IN" : "USB"}${index + 1}`, port || (language === "cn" ? "未选择" : "Not selected")])]} /></details>;
}

function FloorConnectionReview({ language, floors, state }: { language: MobileLang; floors: RegistrationFloor[]; state: CheckState }) {
  return <details className="rounded-md bg-container p-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-3"><span className="text-body text-primary-text">{language === "cn" ? "楼层信息" : "Floor information"}</span><CheckLabel language={language} state={state} doneLabel={language === "cn" ? "已连接" : "Connected"} checkingLabel={language === "cn" ? "连接中" : "Connecting"} idleLabel={language === "cn" ? "等待" : "Waiting"} /></summary><FloorReviewList language={language} floors={floors} /></details>;
}

function CheckLabel({ language, state, doneLabel, checkingLabel, idleLabel }: { language: MobileLang; state: CheckState; doneLabel: string; checkingLabel: string; idleLabel: string }) {
  const label = state === "done" ? doneLabel : state === "checking" ? checkingLabel : idleLabel;
  return <span className={`text-foot12 ${state === "done" ? "text-success" : state === "checking" ? "text-warning" : "text-placeholder"}`}>{label}</span>;
}

function InstallationView({ language, preparation, sensors, checks, functionChecks, onBack, onStartCheck, onSkip, onView, complete }: { language: MobileLang; preparation: number; sensors: RegistrationSensorConfig[]; checks: Record<string, CheckState>; functionChecks: FunctionChecks; onBack: () => void; onStartCheck: (kind: RegistrationSensorKind) => void; onSkip: () => void; onView: () => void; complete: boolean }) {
  return <div className="flex flex-1 flex-col bg-page"><MobilePageTitle title={language === "cn" ? "安装检查" : "Installation checks"} language={language} onBack={onBack} /><div className="flex flex-1 flex-col gap-3 px-4 py-4"><section className="rounded-md bg-container p-4"><p className="m-0 text-body text-primary-text">{language === "cn" ? "传感器准备" : "Sensor preparation"}</p><div className="mt-3 h-2 overflow-hidden rounded-full bg-component"><div className="h-full bg-brand-base transition-all" style={{ width: `${preparation}%` }} /></div><p className="mt-2 mb-0 text-foot12 text-secondary-text">{preparation}%</p></section>{sensors.map((sensor) => <section key={sensor.kind} className="rounded-md bg-container p-4"><div className="flex items-center justify-between"><span className="text-body text-primary-text">{sensorNames[sensor.kind]} · {language === "cn" ? "磁铁检查" : "Magnet check"}</span><CheckLabel language={language} state={checks[sensor.kind] ?? "idle"} doneLabel={language === "cn" ? "安装正确" : "Correct"} checkingLabel={language === "cn" ? "进行中" : "Checking"} idleLabel={language === "cn" ? "待检查" : "Waiting"} /></div><Button className="mt-3" theme="default" variant="outline" size="medium" block disabled={preparation < 100 || checks[sensor.kind] === "checking" || checks[sensor.kind] === "done"} onClick={() => onStartCheck(sensor.kind)}>{language === "cn" ? "开始检查" : "Start check"}</Button></section>)}<section className="rounded-md bg-container p-4"><h2 className="m-0 text-h7 font-semibold text-primary-text">{language === "cn" ? "门机与运行功能检查" : "Door and travel function checks"}</h2><div className="mt-3 flex flex-col gap-2"><div className="flex justify-between gap-3"><span className="text-body text-primary-text">{language === "cn" ? "门机功能" : "Door function"}</span><CheckLabel language={language} state={functionChecks.door} doneLabel={language === "cn" ? "通过" : "Passed"} checkingLabel={language === "cn" ? "检查中" : "Checking"} idleLabel={language === "cn" ? "等待磁铁检查" : "Waiting for magnet check"} /></div><div className="flex justify-between gap-3"><span className="text-body text-primary-text">{language === "cn" ? "运行功能" : "Travel function"}</span><CheckLabel language={language} state={functionChecks.travel} doneLabel={language === "cn" ? "通过" : "Passed"} checkingLabel={language === "cn" ? "检查中" : "Checking"} idleLabel={language === "cn" ? "等待磁铁检查" : "Waiting for magnet check"} /></div></div></section></div><MobileBottomBar>{complete ? <Button theme="primary" size="large" block onClick={onView}>{language === "cn" ? "查看数据" : "View data"}</Button> : <Button className="km-mobile-button--secondary" theme="default" size="large" block onClick={onSkip}>{language === "cn" ? "跳过检查" : "Skip checks"}</Button>}</MobileBottomBar></div>;
}

function PostCheckModules({ language, sensors }: { language: MobileLang; sensors: RegistrationSensorConfig[] }) {
  return <div className="flex flex-col gap-3"><section className="rounded-md bg-container p-4"><h2 className="m-0 text-h7 font-semibold text-primary-text">KONE Connection 320</h2><ModuleRows rows={[[language === "cn" ? "状态" : "Status", language === "cn" ? "已注册" : "Registered"], [language === "cn" ? "版本" : "Version", "1.2.11"]]} /></section>{sensors.map((sensor) => <section key={sensor.kind} className="rounded-md bg-container p-4"><h2 className="m-0 text-h7 font-semibold text-primary-text">{sensorNames[sensor.kind]}</h2><ModuleRows rows={[[language === "cn" ? "安装位置" : "Placement", sensor.placement || "—"], [language === "cn" ? "传感器序列号" : "Sensor serial", sensor.serial || "—"], ...sensor.ports.map((port, index) => [`${sensor.kind === "machine" ? "IN" : "USB"}${index + 1}`, port || (language === "cn" ? "未选择" : "Not selected")])]} /></section>)}</div>;
}

function FloorReviewList({ language, floors }: { language: MobileLang; floors: RegistrationFloor[] }) {
  return <div className="mt-4 flex flex-col gap-3">{floors.map((floor, index) => <div key={index} className="grid grid-cols-[auto_1fr_auto] gap-3 border-b border-stroke pb-3 text-body"><span className="text-secondary-text">{index + 1}{language === "cn" ? "层" : ""}</span><span className="text-primary-text">{floor.label}{floor.base ? ` · ${language === "cn" ? "基准楼层" : "Base floor"}` : ""}</span><span className="text-primary-text">{index === floors.length - 1 ? "—" : `${floor.spacing}cm`}</span></div>)}</div>;
}

function PostCheckFloors({ language, floors, editing, setEditing, updateFloor }: { language: MobileLang; floors: RegistrationFloor[]; editing: boolean; setEditing: (editing: boolean) => void; updateFloor: (index: number, update: Partial<RegistrationFloor>) => void }) {
  const [error, setError] = useState("");
  const fieldRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const save = () => {
    for (const [index, floor] of floors.entries()) {
      const field = !floor.label.trim() ? "label" : index !== floors.length - 1 && !isPositiveFinite(floor.spacing) ? "spacing" : null;
      if (field) {
        setError(language === "cn" ? (field === "label" ? `第 ${index + 1} 层的楼层标签不能为空。` : `第 ${index + 1} 层的层间距必须为正数。`) : (field === "label" ? `Floor ${index + 1} needs a label.` : `Floor ${index + 1} needs a positive spacing.`));
        window.requestAnimationFrame(() => fieldRefs.current[`${index}-${field}`]?.querySelector("input")?.focus());
        return;
      }
    }
    setError("");
    setEditing(false);
  };
  return <section className="rounded-md bg-container p-4"><div className="flex items-center justify-between"><h2 className="m-0 text-h7 font-semibold text-primary-text">{language === "cn" ? `总楼层数：${floors.length}` : `Floors: ${floors.length}`}</h2><button type="button" onClick={() => editing ? save() : setEditing(true)} className="cursor-pointer rounded-sm border-0 bg-transparent p-1 text-body text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base">{editing ? (language === "cn" ? "保存" : "Save") : (language === "cn" ? "编辑" : "Edit")}</button></div>{editing ? <><p role="alert" className={error ? "mt-3 mb-0 text-foot12 text-error" : "sr-only"}>{error}</p><div className="mt-4 flex flex-col gap-3">{floors.map((floor, index) => <div key={index} className="rounded-sm bg-secondarycontainer p-3"><div ref={(element) => { fieldRefs.current[`${index}-label`] = element; }}><Input size="small" value={floor.label} status={error.includes(`${index + 1}`) && error.includes(language === "cn" ? "标签" : "label") ? "error" : undefined} placeholder={language === "cn" ? "楼层标签" : "Floor label"} onChange={(value) => updateFloor(index, { label: String(value) })} /></div>{index !== floors.length - 1 && <div ref={(element) => { fieldRefs.current[`${index}-spacing`] = element; }} className="mt-2"><Input size="small" value={floor.spacing} status={error.includes(`${index + 1}`) && error.includes(language === "cn" ? "间距" : "spacing") ? "error" : undefined} placeholder={language === "cn" ? "与下一层间距（cm）" : "Spacing to next floor (cm)"} onChange={(value) => updateFloor(index, { spacing: String(value) })} /></div>}<p className="mt-2 mb-0 text-foot12 text-secondary-text">{floor.base ? (language === "cn" ? "已选为基准楼层" : "Selected as a base floor") : (language === "cn" ? "非基准楼层" : "Not a base floor")}</p></div>)}</div></> : <FloorReviewList language={language} floors={floors} />}</section>;
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return <div className="flex items-start justify-between gap-4"><dt className="text-secondary-text">{label}</dt><dd className="m-0 text-right text-primary-text">{value}</dd></div>;
}

function VerificationToast({ label }: { label: string }) {
  return <div role="status" aria-live="polite" className="km-registration-verifying"><span aria-hidden="true" className="km-registration-verifying__spinner" /><span className="text-body text-white-text">{label}</span></div>;
}

function DtuScanDrawer({ open, language, onClose, onSelect }: { open: boolean; language: MobileLang; onClose: () => void; onSelect: () => void }) {
  const t = copy(language);
  return (
    <Drawer className="km-registration-scan-sheet" visible={open} placement="bottom" size="176px" header={false} footer={false} closeBtn={false} onClose={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="registration-scan-sheet-title"
      >
        <h2 id="registration-scan-sheet-title" className="sr-only">
          {language === "cn" ? "DTU 序列号录入方式" : "DTU serial entry method"}
        </h2>
        <button type="button" className="km-registration-scan-sheet__action km-registration-scan-sheet__action--primary" onClick={onSelect}>
          <RegistrationScanIcon aria-hidden="true" className="size-6" />
          <span>{t.scan}</span>
        </button>
        <button type="button" className="km-registration-scan-sheet__action" onClick={onSelect}>{t.album}</button>
        <div aria-hidden="true" className="km-registration-scan-sheet__divider" />
        <button type="button" className="km-registration-scan-sheet__action" onClick={onClose}>{t.cancel}</button>
      </div>
    </Drawer>
  );
}

function ScanDrawer({ open, language, onClose, onConfirm }: { open: boolean; language: MobileLang; onClose: () => void; onConfirm: () => void }) {
  return <Drawer className="km-mobile-sheet" visible={open} placement="bottom" size="60%" header={<h2 className="m-0 text-h6 font-semibold text-primary-text">{language === "cn" ? "扫描二维码" : "Scan QR code"}</h2>} onClose={onClose} footer={<MobileBottomBar><Button theme="primary" size="large" block onClick={onConfirm}>{language === "cn" ? "模拟扫描成功" : "Simulate scan success"}</Button></MobileBottomBar>}><p className="m-0 text-body text-secondary-text">{language === "cn" ? "演示环境不访问相机。确认后将自动填入模拟序列号。" : "This demo does not access the camera. Confirm to insert a sample serial number."}</p></Drawer>;
}

function PhotoDrawer({ open, language, source, onSourceChange, onClose, onConfirm }: { open: boolean; language: MobileLang; source: PhotoSource; onSourceChange: (source: PhotoSource) => void; onClose: () => void; onConfirm: () => void }) {
  return <Drawer className="km-mobile-sheet" visible={open} placement="bottom" size="60%" header={<h2 className="m-0 text-h6 font-semibold text-primary-text">{language === "cn" ? "添加照片" : "Add photo"}</h2>} onClose={onClose} footer={<MobileBottomBar><Button theme="primary" size="large" block onClick={onConfirm}>{source === "camera" ? (language === "cn" ? "模拟拍摄并识别" : "Simulate capture and recognition") : (language === "cn" ? "模拟从相册上传并识别" : "Simulate album upload and recognition")}</Button></MobileBottomBar>}><div className="flex flex-col gap-3 text-body text-primary-text"><RadioGroup value={source} onChange={(value) => onSourceChange(value as PhotoSource)}><Radio value="camera">{language === "cn" ? "拍摄照片" : "Take photo"}</Radio><Radio value="album">{language === "cn" ? "从相册选择" : "Choose from album"}</Radio></RadioGroup><p className="m-0 text-foot12 text-secondary-text">{language === "cn" ? "请正面拍摄并完整包含全部楼层按键。" : "Capture the whole floor-button panel from the front."}</p></div></Drawer>;
}
