import { useEffect, useRef, useState } from "react";
import { Dialog, Input, Select, TagInput } from "tdesign-react";
import { DOMAIN_LENGTH, FAULT_CODE_MAX_LENGTH, normalizeFaultCode, normalizeFaultCodes } from "../data/faultMasking";

/**
 * 通力「故障屏蔽管理」的新增 / 编辑屏蔽弹窗（TDesign Dialog，带分割线变体，和创建用户弹窗同一套）。
 *
 * 字段（均必填）：
 *   · 生效范围：多选，选项是全部总公司（`companies`），与登录用户的数据权限无关；
 *   · Domain：只能录入数字，固定四位；
 *   · FaultCode：可录入多个，每个至多五位数字。回车、逗号 / 空格或离开输入框时生成标签，不足五位时前面补 0 到五位
 *     再显示（录入 1 → 标签 00001）；重复的编号只保留一个。
 * 校验时机与创建用户一致：字段失焦时校验当前字段，点确定时校验全部。FaultCode 输入框里还没变成标签的内容，点确定时会一并算上。
 * `onSubmit` 返回 true 表示成功，弹窗随即关闭。
 */
type Language = "en" | "cn";

const copy = {
  cn: {
    addTitle: "新增屏蔽",
    editTitle: "编辑屏蔽",
    scope: "生效范围",
    scopePlaceholder: "请选择总公司",
    scopeRequired: "请选择生效范围",
    domain: "Domain",
    domainPlaceholder: "请输入四位数字",
    domainRequired: "请输入 Domain",
    domainInvalid: "Domain 需为四位数字",
    faultCode: "FaultCode",
    faultCodePlaceholder: "输入数字后回车添加，可添加多个",
    faultCodeHint: "FaultCode 为五位数字，不足五位时前面自动补 0",
    faultCodeRequired: "请至少录入一个 FaultCode",
    cancel: "取消",
    add: "确定",
    save: "保存",
  },
  en: {
    addTitle: "Add Fault Mask",
    editTitle: "Edit Fault Mask",
    scope: "Effective Scope",
    scopePlaceholder: "Select head offices",
    scopeRequired: "Select at least one head office",
    domain: "Domain",
    domainPlaceholder: "Enter 4 digits",
    domainRequired: "Enter the Domain",
    domainInvalid: "Domain must be 4 digits",
    faultCode: "FaultCode",
    faultCodePlaceholder: "Type digits and press Enter; add as many as needed",
    faultCodeHint: "FaultCode is 5 digits; shorter codes are padded with leading zeros",
    faultCodeRequired: "Enter at least one FaultCode",
    cancel: "Cancel",
    add: "OK",
    save: "Save",
  },
};

export type FaultMaskFormValues = { scope: string[]; domain: string; faultCodes: string[] };

type FaultMaskDialogProps = {
  visible: boolean;
  language: Language;
  mode?: "create" | "edit";
  /** 编辑时表单的初始值 */
  initialValues?: FaultMaskFormValues;
  /** 「生效范围」的全部选项（所有总公司） */
  companies: readonly string[];
  onClose: () => void;
  onSubmit: (values: FaultMaskFormValues) => boolean;
};

type FieldErrors = { scope: string; domain: string; faultCodes: string };
const NO_ERRORS: FieldErrors = { scope: "", domain: "", faultCodes: "" };
const SEPARATORS = /[,，、;；\s]+/;

function FieldMessage({ error }: { error?: string }) {
  return error ? <p role="alert" className="mt-1 text-foot12 text-error">{error}</p> : null;
}

function Label({ text }: { text: string }) {
  return (
    <span className="mb-2 block text-body font-normal text-primary-text">
      {text}
      <span className="ml-0.5 text-error" aria-hidden="true">*</span>
    </span>
  );
}

export default function FaultMaskDialog({ visible, language, mode = "create", initialValues, companies, onClose, onSubmit }: FaultMaskDialogProps) {
  const t = copy[language];
  const isEdit = mode === "edit";
  const [scope, setScope] = useState<string[]>(initialValues?.scope ?? []);
  const [domain, setDomain] = useState(initialValues?.domain ?? "");
  const [faultCodes, setFaultCodes] = useState<string[]>(initialValues?.faultCodes ?? []);
  const [codeInput, setCodeInput] = useState("");
  const [errors, setErrors] = useState<FieldErrors>(NO_ERRORS);

  // TDesign Dialog 的按钮回调可能拿到旧闭包，校验统一从 ref 读最新输入
  const latest = useRef({ scope, domain, faultCodes, codeInput, onSubmit });
  latest.current = { scope, domain, faultCodes, codeInput, onSubmit };

  // 每次打开都是一张干净的表单（编辑时带入当前记录的值）；用基本类型作依赖，避免父级每次渲染传新数组导致输入被重置
  const initScopeKey = (initialValues?.scope ?? []).join("|");
  const initDomain = initialValues?.domain ?? "";
  const initCodesKey = (initialValues?.faultCodes ?? []).join("|");
  useEffect(() => {
    if (!visible) return;
    setScope(isEdit && initScopeKey ? initScopeKey.split("|") : []);
    setDomain(isEdit ? initDomain : "");
    setFaultCodes(isEdit && initCodesKey ? initCodesKey.split("|") : []);
    setCodeInput("");
    setErrors(NO_ERRORS);
  }, [visible, isEdit, initScopeKey, initDomain, initCodesKey]);

  const clearError = (field: keyof FieldErrors) => setErrors((current) => ({ ...current, [field]: "" }));

  const validate = (field: keyof FieldErrors, values: { scope: string[]; domain: string; faultCodes: string[] }): string => {
    switch (field) {
      case "scope":
        return values.scope.length > 0 ? "" : t.scopeRequired;
      case "domain":
        if (!values.domain) return t.domainRequired;
        return new RegExp(`^\\d{${DOMAIN_LENGTH}}$`).test(values.domain) ? "" : t.domainInvalid;
      case "faultCodes":
        return values.faultCodes.length > 0 ? "" : t.faultCodeRequired;
    }
  };

  /** 把输入框里待生成的内容并入标签列表（补零、去重），返回新列表 */
  const commitCodes = (current: string[], pending: string) => normalizeFaultCodes([...current, ...pending.split(SEPARATORS)]);

  const validateOnBlur = (field: keyof FieldErrors) => {
    // 弹窗关闭过程中输入框也会失焦，此时不再校验
    if (!visible) return;
    const current = latest.current;
    const values = { scope: current.scope, domain: current.domain, faultCodes: commitCodes(current.faultCodes, current.codeInput) };
    setErrors((existing) => ({ ...existing, [field]: validate(field, values) }));
  };

  const submit = () => {
    const current = latest.current;
    const codes = commitCodes(current.faultCodes, current.codeInput);
    const values = { scope: current.scope, domain: current.domain, faultCodes: codes };
    const next: FieldErrors = {
      scope: validate("scope", values),
      domain: validate("domain", values),
      faultCodes: validate("faultCodes", values),
    };
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;
    // 保持选项原有顺序，列表里显示稳定
    const orderedScope = companies.filter((company) => current.scope.includes(company));
    if (current.onSubmit({ ...values, scope: orderedScope })) onClose();
  };

  return (
    <Dialog
      visible={visible}
      header={isEdit ? t.editTitle : t.addTitle}
      width={480}
      placement="center"
      dialogClassName="km-dialog--divider"
      closeOnOverlayClick={false}
      cancelBtn={{ content: t.cancel, theme: "default", variant: "base" }}
      confirmBtn={isEdit ? t.save : t.add}
      onConfirm={submit}
      onClose={onClose}
    >
      <div className="flex flex-col gap-4">
        <div>
          <Label text={t.scope} />
          <Select
            multiple
            clearable
            size="large"
            placeholder={t.scopePlaceholder}
            value={scope}
            options={companies.map((company) => ({ value: company, label: company }))}
            status={errors.scope ? "error" : "default"}
            popupProps={{ overlayInnerStyle: (trigger: HTMLElement) => ({ width: `${trigger.offsetWidth}px`, minWidth: 0 }) }}
            onChange={(value) => {
              setScope((value as string[]) ?? []);
              clearError("scope");
            }}
            onBlur={() => validateOnBlur("scope")}
          />
          <FieldMessage error={errors.scope} />
        </div>
        <label className="block">
          <Label text={t.domain} />
          <Input
            size="large"
            placeholder={t.domainPlaceholder}
            autocomplete="off"
            maxlength={DOMAIN_LENGTH}
            value={domain}
            status={errors.domain ? "error" : "default"}
            onChange={(value) => {
              // 只接受数字（粘贴含其他字符时丢掉）
              setDomain(String(value).replace(/\D/g, "").slice(0, DOMAIN_LENGTH));
              clearError("domain");
            }}
            onBlur={() => validateOnBlur("domain")}
          />
          <FieldMessage error={errors.domain} />
        </label>
        <div>
          <Label text={t.faultCode} />
          <TagInput
            clearable
            size="large"
            className="km-tag-input-multiple"
            placeholder={faultCodes.length === 0 ? t.faultCodePlaceholder : undefined}
            value={faultCodes}
            inputValue={codeInput}
            status={errors.faultCodes ? "error" : "default"}
            onChange={(value) => {
              // 回车加入的标签是原始录入值，这里统一补零、去重；删除标签也走这里
              setFaultCodes(normalizeFaultCodes(value as string[]));
              clearError("faultCodes");
            }}
            onInputChange={(value) => {
              if (SEPARATORS.test(value)) {
                // 逗号 / 空格 / 粘贴多个编号：前面的立即生成标签，最后一段留在输入框里
                const parts = value.split(SEPARATORS);
                const rest = parts.pop() ?? "";
                setFaultCodes((current) => normalizeFaultCodes([...current, ...parts]));
                setCodeInput(rest.replace(/\D/g, "").slice(0, FAULT_CODE_MAX_LENGTH));
              } else {
                setCodeInput(value.replace(/\D/g, "").slice(0, FAULT_CODE_MAX_LENGTH));
              }
              clearError("faultCodes");
            }}
            onBlur={() => {
              // 离开输入框时，没按回车的内容也生成标签，避免用户以为已经录入
              const pending = normalizeFaultCode(latest.current.codeInput);
              if (pending) {
                setFaultCodes((current) => normalizeFaultCodes([...current, pending]));
                setCodeInput("");
              }
              validateOnBlur("faultCodes");
            }}
          />
          {errors.faultCodes ? <FieldMessage error={errors.faultCodes} /> : <p className="mt-1 text-foot12 text-secondary-text">{t.faultCodeHint}</p>}
        </div>
      </div>
    </Dialog>
  );
}
