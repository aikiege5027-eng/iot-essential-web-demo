import { useEffect, useRef, useState } from "react";
import { Dialog, Input, Select } from "tdesign-react";

/**
 * 仟帆「创建用户」弹窗（TDesign Dialog，带分割线变体，和重置密码弹窗同一套）。
 *
 * 字段（按顺序，必填项在前）：
 *   · 账号（必填）：仅支持邮箱，满足邮箱规则（见 {@link validateEmail}），且全平台唯一（不区分大小写）；
 *   · 姓名（必填）：汉字、字母、数字、下划线、短横线，4–20 位；
 *   · 角色（必填）：选项来自角色管理页的角色列表（由父级传入 `roles`）；
 *   · 工号（选填）：字母、数字、下划线、短横线，4–20 位；填写时唯一；
 *   · 手机号（选填）：11 位纯数字，以 1 开头、第二位 3–9；填写时唯一。
 * 校验时机：每个字段失焦（离开输入框）时立即校验当前字段，点「创建」时再校验全部；重新输入时该字段的提示先清掉。
 * 账号不做首尾去空格（空格一律不合法，并提示具体是哪条规则）；姓名、工号、手机号首尾的空格会先去掉再校验。唯一性由父级通过 `isTaken` 判断（名单在父级手里），错误直接显示在对应字段下面。
 *
 * 角色按创建者所属范围（creatorScope）限制可选项：
 *   · platform —— 仟帆自己的系统管理员：只能为仟帆本公司加人，角色固定为「系统管理员」，其余选项禁用；
 *   · tenant   —— 租户的管理员：只能选「运营人员」或「前线维保员工」，「系统管理员」禁用。
 * 租户账号计划在第三方平台开通，每个租户有独立的 IoT Essential 自管员工；仟帆管理员能查看、禁用、注销
 * 租户创建的员工，但不能替租户加人。当前演示只有仟帆管理员（platform），tenant 模式先按规则预留。
 * 同一个弹窗兼作「编辑用户」（mode="edit"）：账号（邮箱）显示为只读，不支持编辑；工号、姓名、手机号、角色可改，校验规则一样，
 * 唯一性由父级的 `isTaken` 排除正在编辑的这个人；角色只能在同类里改（系统管理员不能改成其他角色，租户员工只能在运营人员 / 前线维保员工之间改）。
 * `onSubmit` 返回 true 表示成功，弹窗随即关闭；返回 false 则保持打开。
 */

type Language = "en" | "cn";

const PLATFORM_ROLE = "系统管理员";
const TENANT_ROLES = ["运营人员", "前线维保员工"];

export type CreatorScope = "platform" | "tenant";
export type UniqueField = "account" | "employeeId" | "phone";

const EMAIL_LOCAL_CHARS = /^[A-Za-z0-9._%+-]+$/;
const EMAIL_DOMAIN_CHARS = /^[A-Za-z0-9.-]+$/;
const TLD_PATTERN = /^[A-Za-z]{2,}$/;
const NAME_PATTERN = /^[\u4e00-\u9fa5A-Za-z0-9_-]{4,20}$/;
const EMPLOYEE_ID_PATTERN = /^[A-Za-z0-9_-]{4,20}$/;
const PHONE_PATTERN = /^1[3-9]\d{9}$/;

export type EmailError =
  | "format"
  | "space"
  | "totalLength"
  | "localChars"
  | "localLength"
  | "localDots"
  | "domainChars"
  | "domainLength"
  | "domainNoDot"
  | "domainEdge"
  | "tld";

/**
 * 邮箱规则（用户名@域名），通过返回 null，否则返回第一条不满足的规则：
 *   · 不能包含空格（首尾也不行，不做自动去空格）；整个地址不超过 254 个字符，恰好一个 @；
 *   · 用户名：字母、数字和 ._%+-，1–64 个字符，不能以 . 开头或结尾，不能有连续点号；
 *   · 域名：字母、数字、- 和 .，不超过 253 个字符，至少包含一个 .，不能以 - 或 . 开头 / 结尾，不能有连续点号，
 *     顶级域名（最后一段）至少 2 个字母。
 */
export function validateEmail(value: string): EmailError | null {
  if (/\s/.test(value)) return "space";
  if (value.length > 254) return "totalLength";
  const parts = value.split("@");
  if (parts.length !== 2 || !parts[0] || !parts[1]) return "format";
  const [local, domain] = parts;

  if (local.length > 64) return "localLength";
  if (!EMAIL_LOCAL_CHARS.test(local)) return "localChars";
  if (local.startsWith(".") || local.endsWith(".") || local.includes("..")) return "localDots";

  if (domain.length > 253) return "domainLength";
  if (!EMAIL_DOMAIN_CHARS.test(domain)) return "domainChars";
  if (!domain.includes(".")) return "domainNoDot";
  if (/^[-.]|[-.]$/.test(domain) || domain.includes("..")) return "domainEdge";
  const tld = domain.slice(domain.lastIndexOf(".") + 1);
  return TLD_PATTERN.test(tld) ? null : "tld";
}

const copy = {
  cn: {
    title: "创建用户",
    editTitle: "编辑用户",
    accountReadonlyHint: "账号不支持编辑",
    account: "账号",
    accountPlaceholder: "请输入邮箱",
    accountRequired: "请输入账号",
    accountErrors: {
      format: "请输入正确的邮箱地址（用户名@域名）",
      space: "邮箱不能包含空格",
      totalLength: "邮箱地址总长度不能超过 254 个字符",
      localChars: "用户名仅支持字母、数字和 . _ % + - 这几个符号",
      localLength: "用户名最多 64 个字符",
      localDots: "用户名不能以 . 开头或结尾，也不能出现连续的 .",
      domainChars: "域名仅支持字母、数字、- 和 .",
      domainLength: "域名最多 253 个字符",
      domainNoDot: "域名需包含顶级域名，如 .com",
      domainEdge: "域名不能以 - 或 . 开头或结尾，也不能出现连续的 .",
      tld: "顶级域名至少 2 个字母，如 .com、.cn",
    } satisfies Record<EmailError, string>,
    accountTaken: "该账号已存在",
    name: "姓名",
    namePlaceholder: "请输入姓名",
    nameRequired: "请输入姓名",
    nameInvalid: "姓名仅支持汉字、字母、数字、下划线和短横线，长度 4–20 位",
    employeeId: "工号",
    employeeIdPlaceholder: "请输入工号（选填）",
    employeeIdInvalid: "工号仅支持字母、数字、下划线和短横线，长度 4–20 位",
    employeeIdTaken: "该工号已存在",
    phone: "手机号",
    phonePlaceholder: "请输入手机号（选填）",
    phoneInvalid: "请输入正确的 11 位手机号",
    phoneTaken: "该手机号已存在",
    role: "角色",
    rolePlaceholder: "请选择角色",
    roleRequired: "请选择角色",
    cancel: "取消",
    create: "创建",
    save: "保存",
  },
  en: {
    title: "Create User",
    editTitle: "Edit User",
    accountReadonlyHint: "The account cannot be edited",
    account: "Account",
    accountPlaceholder: "Enter an email address",
    accountRequired: "Enter an account",
    accountErrors: {
      format: "Enter a valid email address (username@domain)",
      space: "The email cannot contain spaces",
      totalLength: "The email address can be at most 254 characters",
      localChars: "The username can only contain letters, digits and . _ % + -",
      localLength: "The username can be at most 64 characters",
      localDots: "The username cannot start or end with a dot or contain consecutive dots",
      domainChars: "The domain can only contain letters, digits, - and .",
      domainLength: "The domain can be at most 253 characters",
      domainNoDot: "The domain needs a top-level domain, such as .com",
      domainEdge: "The domain cannot start or end with - or . or contain consecutive dots",
      tld: "The top-level domain needs at least 2 letters, such as .com or .cn",
    } satisfies Record<EmailError, string>,
    accountTaken: "This account already exists",
    name: "Name",
    namePlaceholder: "Enter the user's name",
    nameRequired: "Enter the user's name",
    nameInvalid: "Use 4–20 characters: Chinese characters, letters, digits, underscores or hyphens",
    employeeId: "Employee ID",
    employeeIdPlaceholder: "Enter the employee ID (optional)",
    employeeIdInvalid: "Use 4–20 characters: letters, digits, underscores or hyphens",
    employeeIdTaken: "This employee ID already exists",
    phone: "Phone number",
    phonePlaceholder: "Enter the phone number (optional)",
    phoneInvalid: "Enter a valid 11-digit phone number",
    phoneTaken: "This phone number already exists",
    role: "Role",
    rolePlaceholder: "Select a role",
    roleRequired: "Select a role",
    cancel: "Cancel",
    create: "Create",
    save: "Save",
  },
};

export type UserFormValues = { account: string; name: string; employeeId: string; phone: string; role: string };

type CreateUserDialogProps = {
  visible: boolean;
  language: Language;
  /** create：创建用户（默认）；edit：编辑用户，账号只读，表单带入 initialValues */
  mode?: "create" | "edit";
  /** 编辑时表单的初始值 */
  initialValues?: UserFormValues;
  /** 创建者所属范围，决定可选角色；默认 platform（仟帆管理员） */
  creatorScope?: CreatorScope;
  /** 角色下拉的全部选项，来自角色管理页的角色列表（按其顺序） */
  roles: string[];
  /** 该字段的值是否已被现有用户占用（账号 / 工号不区分大小写）；传入的值已去掉首尾空格 */
  isTaken: (field: UniqueField, value: string) => boolean;
  onClose: () => void;
  onSubmit: (values: UserFormValues) => boolean;
};

type FieldErrors = { account: string; name: string; employeeId: string; phone: string; role: string };
const NO_ERRORS: FieldErrors = { account: "", name: "", employeeId: "", phone: "", role: "" };

function FieldMessage({ error }: { error?: string }) {
  return error ? <p role="alert" className="mt-1 text-foot12 text-error">{error}</p> : null;
}

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <span className="mb-2 block text-body text-primary-text">
      {text}
      {required && <span className="ml-0.5 text-error" aria-hidden="true">*</span>}
    </span>
  );
}

export default function CreateUserDialog({ visible, language, mode = "create", initialValues, creatorScope = "platform", roles, isTaken, onClose, onSubmit }: CreateUserDialogProps) {
  const t = copy[language];
  const isEdit = mode === "edit";
  // 仟帆管理员只有「系统管理员」一个可选项，直接预选；租户管理员需要自己在两项里选
  const defaultRole = isEdit ? (initialValues?.role ?? "") : creatorScope === "platform" ? PLATFORM_ROLE : "";
  const [account, setAccount] = useState(initialValues?.account ?? "");
  const [name, setName] = useState(initialValues?.name ?? "");
  const [employeeId, setEmployeeId] = useState(initialValues?.employeeId ?? "");
  const [phone, setPhone] = useState(initialValues?.phone ?? "");
  const [role, setRole] = useState(defaultRole);
  const [errors, setErrors] = useState<FieldErrors>(NO_ERRORS);
  // TDesign Dialog 的按钮回调可能拿到旧闭包（见 ForgotPasswordDialog），校验统一从 ref 读最新输入与最新的父级回调
  const latest = useRef({ account, name, employeeId, phone, role, isTaken, onSubmit });
  latest.current = { account, name, employeeId, phone, role, isTaken, onSubmit };

  const roleOptions = roles.map((value) => ({
    value,
    label: value,
    disabled: isEdit
      ? // 编辑：系统管理员只能保持系统管理员，租户员工只能在运营人员 / 前线维保员工之间改
        initialValues?.role === PLATFORM_ROLE
        ? value !== PLATFORM_ROLE
        : !TENANT_ROLES.includes(value)
      : creatorScope === "platform"
        ? value !== PLATFORM_ROLE
        : !TENANT_ROLES.includes(value),
  }));

  // 每次打开都是一张干净的表单（编辑时带入当前用户的值）；用基本类型作依赖，避免父级每次渲染传新对象导致输入被重置
  const { account: initAccount = "", name: initName = "", employeeId: initEmployeeId = "", phone: initPhone = "" } = initialValues ?? {};
  useEffect(() => {
    if (!visible) return;
    setAccount(isEdit ? initAccount : "");
    setName(isEdit ? initName : "");
    setEmployeeId(isEdit ? initEmployeeId : "");
    setPhone(isEdit ? initPhone : "");
    setRole(defaultRole);
    setErrors(NO_ERRORS);
  }, [visible, isEdit, defaultRole, initAccount, initName, initEmployeeId, initPhone]);

  const clearError = (field: keyof FieldErrors) => setErrors((current) => ({ ...current, [field]: "" }));

  /**
   * 单个字段的校验，返回错误文案（通过为空串）。失焦时校验当前字段，点「创建」时校验全部，用的是同一套规则。
   * 账号不去空格；姓名、工号、手机号先去掉首尾空格。选填项为空时不报错。
   */
  const validate = (field: keyof FieldErrors, raw: string): string => {
    const { isTaken: taken } = latest.current;
    switch (field) {
      case "account": {
        if (isEdit) return ""; // 编辑时账号只读，不校验
        if (!raw) return t.accountRequired;
        const reason = validateEmail(raw);
        if (reason) return t.accountErrors[reason];
        return taken("account", raw) ? t.accountTaken : "";
      }
      case "name": {
        const value = raw.trim();
        if (!value) return t.nameRequired;
        return NAME_PATTERN.test(value) ? "" : t.nameInvalid;
      }
      case "employeeId": {
        const value = raw.trim();
        if (!value) return "";
        if (!EMPLOYEE_ID_PATTERN.test(value)) return t.employeeIdInvalid;
        return taken("employeeId", value) ? t.employeeIdTaken : "";
      }
      case "phone": {
        const value = raw.trim();
        if (!value) return "";
        if (!PHONE_PATTERN.test(value)) return t.phoneInvalid;
        return taken("phone", value) ? t.phoneTaken : "";
      }
      case "role":
        return raw ? "" : t.roleRequired;
    }
  };

  /** 失焦即时校验：只更新当前字段的提示 */
  const validateOnBlur = (field: keyof FieldErrors, raw: string) => {
    // 弹窗关闭过程中输入框也会失焦，此时不再校验（否则编辑自己刚保存的值会被当成重复）
    if (!visible) return;
    setErrors((current) => ({ ...current, [field]: validate(field, raw) }));
  };

  const submit = () => {
    const current = latest.current;
    const next: FieldErrors = {
      account: validate("account", current.account),
      name: validate("name", current.name),
      employeeId: validate("employeeId", current.employeeId),
      phone: validate("phone", current.phone),
      role: validate("role", current.role),
    };
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;
    const values = {
      // 账号不去空格：规则要求不能包含空格，首尾也算（上面已经校验过）
      account: current.account,
      name: current.name.trim(),
      employeeId: current.employeeId.trim(),
      phone: current.phone.trim(),
      role: current.role,
    };
    if (current.onSubmit(values)) onClose();
  };

  return (
    <Dialog
      visible={visible}
      header={isEdit ? t.editTitle : t.title}
      width={480}
      placement="center"
      dialogClassName="km-dialog--divider"
      closeOnOverlayClick={false}
      cancelBtn={{ content: t.cancel, theme: "default", variant: "base" }}
      confirmBtn={isEdit ? t.save : t.create}
      onConfirm={submit}
      onClose={onClose}
    >
      {/* 必填项（账号、姓名、角色）放在一起，选填项（工号、手机号）在后 */}
      <div className="flex flex-col gap-4">
        <label className="block">
          <Label text={t.account} required={!isEdit} />
          <Input
            size="large"
            placeholder={t.accountPlaceholder}
            autocomplete="off"
            disabled={isEdit}
            tips={isEdit ? t.accountReadonlyHint : undefined}
            value={account}
            status={errors.account ? "error" : "default"}
            onChange={(value) => {
              setAccount(String(value));
              clearError("account");
            }}
            onBlur={(value) => validateOnBlur("account", String(value))}
          />
          <FieldMessage error={errors.account} />
        </label>

        <label className="block">
          <Label text={t.name} required />
          <Input
            size="large"
            placeholder={t.namePlaceholder}
            autocomplete="off"
            value={name}
            status={errors.name ? "error" : "default"}
            onChange={(value) => {
              setName(String(value));
              clearError("name");
            }}
            onBlur={(value) => validateOnBlur("name", String(value))}
          />
          <FieldMessage error={errors.name} />
        </label>

        <label className="block">
          <Label text={t.role} required />
          <Select
            size="large"
            placeholder={t.rolePlaceholder}
            value={role || undefined}
            options={roleOptions}
            status={errors.role ? "error" : "default"}
            onChange={(value) => {
              setRole(String(value ?? ""));
              clearError("role");
            }}
            onBlur={() => validateOnBlur("role", latest.current.role)}
          />
          <FieldMessage error={errors.role} />
        </label>

        <label className="block">
          <Label text={t.employeeId} />
          <Input
            size="large"
            placeholder={t.employeeIdPlaceholder}
            autocomplete="off"
            value={employeeId}
            status={errors.employeeId ? "error" : "default"}
            onChange={(value) => {
              setEmployeeId(String(value));
              clearError("employeeId");
            }}
            onBlur={(value) => validateOnBlur("employeeId", String(value))}
          />
          <FieldMessage error={errors.employeeId} />
        </label>

        <label className="block">
          <Label text={t.phone} />
          <Input
            size="large"
            placeholder={t.phonePlaceholder}
            autocomplete="off"
            value={phone}
            status={errors.phone ? "error" : "default"}
            onChange={(value) => {
              setPhone(String(value));
              clearError("phone");
            }}
            onBlur={(value) => validateOnBlur("phone", String(value))}
          />
          <FieldMessage error={errors.phone} />
        </label>
      </div>
    </Dialog>
  );
}
