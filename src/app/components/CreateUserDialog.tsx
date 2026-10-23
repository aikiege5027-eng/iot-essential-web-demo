import { useEffect, useRef, useState } from "react";
import { Dialog, Input, Select } from "tdesign-react";

/**
 * 仟帆「创建用户」弹窗（TDesign Dialog，带分割线变体，和重置密码弹窗同一套）。
 *
 * 字段：账户名称（手机号或邮箱）、用户姓名、用户角色。
 *
 * 用户角色按创建者所属范围限制（creatorScope）：
 *   · platform —— 仟帆自己的系统管理员：只能为仟帆本公司加人，角色固定为「系统管理员」，另外两项禁用；
 *   · tenant   —— 租户的管理员：只能选「运营人员」或「前线维保员工」，「系统管理员」禁用。
 * 租户账号计划在第三方平台开通，每个租户有独立的 IoT Essential 自管员工；仟帆管理员能查看、禁用、注销
 * 租户创建的员工，但不能替租户加人。当前演示只有仟帆管理员（platform），tenant 模式先按规则预留。
 * 重复账号的判断（按邮箱）和成功后的提示都由父级处理：`onCreate` 返回 true 表示创建成功，弹窗随即关闭；
 * 返回 false（账号已存在）则弹窗保持打开，方便改账号后重试。
 */

type Language = "en" | "cn";

const PLATFORM_ROLE = "系统管理员";
const TENANT_ROLES = ["运营人员", "前线维保员工"];
/** 选项顺序与角色管理页一致 */
const ROLE_OPTIONS = [PLATFORM_ROLE, "前线维保员工", "运营人员"];

export type CreatorScope = "platform" | "tenant";

const PHONE_PATTERN = /^\d{11}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const copy = {
  cn: {
    title: "创建用户",
    account: "账户名称",
    accountPlaceholder: "请输入手机号或邮箱",
    accountRequired: "请输入手机号或邮箱",
    accountInvalid: "请输入正确的手机号或邮箱",
    name: "用户姓名",
    namePlaceholder: "请输入用户姓名",
    nameRequired: "请输入用户姓名",
    role: "用户角色",
    rolePlaceholder: "请选择用户角色",
    roleRequired: "请选择用户角色",
    cancel: "取消",
    create: "创建",
  },
  en: {
    title: "Create User",
    account: "Account",
    accountPlaceholder: "Enter a phone number or email",
    accountRequired: "Enter a phone number or email",
    accountInvalid: "Enter a valid phone number or email",
    name: "Name",
    namePlaceholder: "Enter the user's name",
    nameRequired: "Enter the user's name",
    role: "Role",
    rolePlaceholder: "Select a role",
    roleRequired: "Select a role",
    cancel: "Cancel",
    create: "Create",
  },
};

type CreateUserDialogProps = {
  visible: boolean;
  language: Language;
  /** 创建者所属范围，决定可选角色；默认 platform（仟帆管理员） */
  creatorScope?: CreatorScope;
  onClose: () => void;
  onCreate: (values: { account: string; name: string; role: string }) => boolean;
};

type FieldErrors = { account: string; name: string; role: string };
const NO_ERRORS: FieldErrors = { account: "", name: "", role: "" };

function FieldMessage({ error }: { error?: string }) {
  return error ? <p role="alert" className="mt-1 text-foot12 text-error">{error}</p> : null;
}

export default function CreateUserDialog({ visible, language, creatorScope = "platform", onClose, onCreate }: CreateUserDialogProps) {
  const t = copy[language];
  // 仟帆管理员只有「系统管理员」一个可选项，直接预选；租户管理员需要自己在两项里选
  const defaultRole = creatorScope === "platform" ? PLATFORM_ROLE : "";
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState(defaultRole);
  const [errors, setErrors] = useState<FieldErrors>(NO_ERRORS);
  // TDesign Dialog 的按钮回调可能拿到旧闭包（见 ForgotPasswordDialog），校验统一从 ref 读最新输入
  const latest = useRef({ account, name, role });
  latest.current = { account, name, role };

  const roleOptions = ROLE_OPTIONS.map((value) => ({
    value,
    label: value,
    disabled: creatorScope === "platform" ? value !== PLATFORM_ROLE : !TENANT_ROLES.includes(value),
  }));

  // 每次打开都是一张干净的表单
  useEffect(() => {
    if (!visible) return;
    setAccount("");
    setName("");
    setRole(defaultRole);
    setErrors(NO_ERRORS);
  }, [visible, defaultRole]);

  const submit = () => {
    const { account, name, role } = latest.current;
    const trimmedAccount = account.trim();
    const trimmedName = name.trim();
    const next: FieldErrors = {
      account: !trimmedAccount
        ? t.accountRequired
        : PHONE_PATTERN.test(trimmedAccount) || EMAIL_PATTERN.test(trimmedAccount)
          ? ""
          : t.accountInvalid,
      name: trimmedName ? "" : t.nameRequired,
      role: role ? "" : t.roleRequired,
    };
    setErrors(next);
    if (next.account || next.name || next.role) return;
    if (onCreate({ account: trimmedAccount, name: trimmedName, role })) onClose();
  };

  return (
    <Dialog
      visible={visible}
      header={t.title}
      width={480}
      placement="center"
      dialogClassName="km-dialog--divider"
      closeOnOverlayClick={false}
      cancelBtn={{ content: t.cancel, theme: "default", variant: "base" }}
      confirmBtn={t.create}
      onConfirm={submit}
      onClose={onClose}
    >
      <div className="flex flex-col gap-4">
        <label className="block">
          <span className="mb-2 block text-body text-primary-text">{t.account}</span>
          <Input
            size="large"
            placeholder={t.accountPlaceholder}
            autocomplete="off"
            value={account}
            status={errors.account ? "error" : "default"}
            onChange={(value) => {
              setAccount(String(value));
              setErrors((current) => ({ ...current, account: "" }));
            }}
          />
          <FieldMessage error={errors.account} />
        </label>

        <label className="block">
          <span className="mb-2 block text-body text-primary-text">{t.name}</span>
          <Input
            size="large"
            placeholder={t.namePlaceholder}
            autocomplete="off"
            value={name}
            status={errors.name ? "error" : "default"}
            onChange={(value) => {
              setName(String(value));
              setErrors((current) => ({ ...current, name: "" }));
            }}
          />
          <FieldMessage error={errors.name} />
        </label>

        <label className="block">
          <span className="mb-2 block text-body text-primary-text">{t.role}</span>
          <Select
            size="large"
            placeholder={t.rolePlaceholder}
            value={role || undefined}
            options={roleOptions}
            status={errors.role ? "error" : "default"}
            onChange={(value) => {
              setRole(String(value ?? ""));
              setErrors((current) => ({ ...current, role: "" }));
            }}
          />
          <FieldMessage error={errors.role} />
        </label>
      </div>
    </Dialog>
  );
}
