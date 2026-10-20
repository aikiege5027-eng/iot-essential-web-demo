import { useEffect, useState } from "react";
import { Dialog, Input } from "tdesign-react";

/**
 * 仟帆「创建用户」弹窗（TDesign Dialog，带分割线变体，和重置密码弹窗同一套）。
 *
 * 字段：账户名称（手机号或邮箱）、用户姓名。
 * 弹窗里不展示角色：仟帆的系统管理员只能创建「管理层员工」，创建时由代码固定写入（CREATE_USER_ROLE）。
 * 重复账号的判断（按邮箱）和成功后的提示都由父级处理：`onCreate` 返回 true 表示创建成功，弹窗随即关闭；
 * 返回 false（账号已存在）则弹窗保持打开，方便改账号后重试。
 */

type Language = "en" | "cn";

export const CREATE_USER_ROLE = "管理层员工";

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
    cancel: "Cancel",
    create: "Create",
  },
};

type CreateUserDialogProps = {
  visible: boolean;
  language: Language;
  onClose: () => void;
  onCreate: (values: { account: string; name: string; role: string }) => boolean;
};

type FieldErrors = { account: string; name: string };
const NO_ERRORS: FieldErrors = { account: "", name: "" };

function FieldMessage({ error }: { error?: string }) {
  return error ? <p role="alert" className="mt-1 text-foot12 text-error">{error}</p> : null;
}

export default function CreateUserDialog({ visible, language, onClose, onCreate }: CreateUserDialogProps) {
  const t = copy[language];
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<FieldErrors>(NO_ERRORS);

  // 每次打开都是一张干净的表单
  useEffect(() => {
    if (!visible) return;
    setAccount("");
    setName("");
    setErrors(NO_ERRORS);
  }, [visible]);

  const submit = () => {
    const trimmedAccount = account.trim();
    const trimmedName = name.trim();
    const next: FieldErrors = {
      account: !trimmedAccount
        ? t.accountRequired
        : PHONE_PATTERN.test(trimmedAccount) || EMAIL_PATTERN.test(trimmedAccount)
          ? ""
          : t.accountInvalid,
      name: trimmedName ? "" : t.nameRequired,
    };
    setErrors(next);
    if (next.account || next.name) return;
    if (onCreate({ account: trimmedAccount, name: trimmedName, role: CREATE_USER_ROLE })) onClose();
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
      </div>
    </Dialog>
  );
}
