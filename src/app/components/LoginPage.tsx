import { FormEvent, useState } from "react";
import { Button, Checkbox, Input, Link, Select } from "tdesign-react";
// 背景图与设计系统登录页模板同源（2880×1800，16:10），按 cover + 居中铺满；旧图是 3:2 的另一种裁切，视野范围不同。
import loginBackground from "../../imports/LoginDesktop/login-bg.jpg";
import koneLogo from "../../imports/KONE_Logo_Primary_RGB.svg";
import { ACCOUNTS, EDITION_DEFAULT_EMAILS, EDITION_TITLES, getAccountEdition, QIANFAN_ADMIN_EMAIL, QIANFAN_RESET_DEMO_EMAIL, QIANFAN_TENANT_ADMIN_EMAIL, type AppEdition } from "../data/accounts";
import ForgotPasswordDialog from "./ForgotPasswordDialog";
import ResetLinkPasswordDialog from "./ResetLinkPasswordDialog";
import { EyeClosedIcon, EyeOpenIcon } from "./icons/login-icons";
import { LanguageCnIcon, LanguageIcon } from "./icons/nav-icons";
import { cn } from "./ui/utils";

/**
 * 登录页。布局、尺寸与配色对齐设计系统的登录页模板（#/login）：
 * 440 宽卡片、24 圆角、40 内边距、标题与表单间距 32；输入框 40 高 8 圆角，聚焦时品牌蓝描边加 3px 外环；
 * Log In 为全圆角 40 高按钮；忘记密码用 TDesign Link（「记住我」已按产品要求移除）。
 *
 * 页面底部的「平台选择」「用户选择」是演示用的快捷登录：
 * 通力 IoT Essential 为企业账号登录（对齐模板 #/amp：一个 Log in with KONE Account 按钮 + 隐私政策勾选），
 * 选中什么角色就以该角色登录；仟帆仍是邮箱 + 密码登录。
 * 每个平台有默认账号（IoT Essential → 张明远，仟帆 → 管理员），进入页面和切换平台时自动选中并填入；
 * 也可以换选其他用户，自动填入对应邮箱和密码（统一为 123）。账号必须属于所选平台，否则登录失败。
 *
 * 左下角的「重置密码链接」模拟仟帆用户（周雨桐）被管理员重置密码后，从邮件 / 短信里的临时链接进入的页面：
 * 登录卡片隐藏，只显示 ResetLinkPasswordDialog；设置成功后回到登录页，切到仟帆并填好该账号、清空密码框。
 */

type LoginPageProps = {
  /** 当前界面语言；登录后的主界面沿用同一个值，所以在登录页切换后进入系统不会被重置 */
  language: "cn" | "en";
  onLanguageChange: (language: "cn" | "en") => void;
  onLogin: (email: string, password: string, edition: AppEdition) => boolean;
  /** 账号当前的密码（忘记密码修改后为新密码），演示快捷登录用它自动填入 */
  getPassword: (email: string) => string;
  /** 忘记密码流程修改成功：记住该账号的新密码 */
  onPasswordReset: (email: string, newPassword: string) => void;
};

type LoginUser = { email: string; label: string };

const LOGIN_USERS: Record<AppEdition, LoginUser[]> = {
  iot: [
    { email: "jianguo.li@kone.com", label: "李建国 · 维保员工" },
    { email: "zhiqiang.wang@kone.com", label: "王志强 · 管理层员工" },
    { email: "lin.xue@kone.com", label: "林雪 · 研发人员" },
    { email: "liu.yang@kone.com", label: "刘洋 · L2人员" },
    { email: "zhao.min@kone.com", label: "赵敏 · Devops人员" },
    { email: "mingyuan.zhang@kone.com", label: "张明远 · 系统管理员" },
    { email: "qiang.zhou@kone.com", label: "周强 · 超级管理员" },
  ],
  qianfan: [
    { email: QIANFAN_ADMIN_EMAIL, label: "管理员" },
    { email: QIANFAN_TENANT_ADMIN_EMAIL, label: "方振宇 · 鼎力机电维保管理员" },
    { email: QIANFAN_RESET_DEMO_EMAIL, label: "周雨桐 · 前线维保员工" },
  ],
};

/** 登录卡片文案。底部的演示快捷登录（平台 / 用户选择）不是产品界面，不随语言切换。 */
const COPY = {
  cn: {
    title: "欢迎使用 IoT Essential",
    ssoLogin: "使用通力账号登录",
    agreePrefix: "继续即表示您同意我们的",
    privacyPolicy: "隐私政策",
    username: "用户名",
    usernamePlaceholder: "请输入用户名",
    password: "密码",
    passwordPlaceholder: "请输入密码",
    showPassword: "显示密码",
    hidePassword: "隐藏密码",
    login: "登录",
    forgotPassword: "忘记密码？",
    ssoError: "登录失败，请重新选择用户后再试。",
    credentialError: "邮箱或密码不正确，请重新输入。",
    switchLanguage: "切换语言",
  },
  en: {
    title: "Welcome to IoT Essential",
    ssoLogin: "Log in with KONE Account",
    agreePrefix: "By continuing, you agree to our",
    privacyPolicy: "Privacy Policy",
    username: "Username",
    usernamePlaceholder: "Enter your username",
    password: "Password",
    passwordPlaceholder: "Enter your password",
    showPassword: "Show password",
    hidePassword: "Hide password",
    login: "Log In",
    forgotPassword: "Forgot password?",
    ssoError: "Login failed. Please select a user and try again.",
    credentialError: "Incorrect email or password. Please try again.",
    switchLanguage: "Switch language",
  },
} as const;

function getDefaultCredentials(edition: AppEdition, getPassword: (email: string) => string) {
  const account = ACCOUNTS.find((candidate) => candidate.email === EDITION_DEFAULT_EMAILS[edition]);
  return { email: account?.email ?? "", password: account ? getPassword(account.email) : "" };
}

const PLATFORM_OPTIONS = (Object.keys(EDITION_TITLES) as AppEdition[]).map((edition) => ({ value: edition, label: EDITION_TITLES[edition] }));

function KoneLogo() {
  return <img src={koneLogo} alt="KONE" className="h-7 w-[72px] object-contain object-left" />;
}

export default function LoginPage({ language, onLanguageChange, onLogin, getPassword, onPasswordReset }: LoginPageProps) {
  const [platform, setPlatform] = useState<AppEdition>("iot");
  const [email, setEmail] = useState(() => getDefaultCredentials("iot", getPassword).email);
  const [password, setPassword] = useState(() => getDefaultCredentials("iot", getPassword).password);
  const [agreedPolicy, setAgreedPolicy] = useState(false);
  const [isResetOpen, setIsResetOpen] = useState(false);
  const [isResetLinkOpen, setIsResetLinkOpen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  // 错误提示记成「哪一类」而不是文本，这样切换语言后提示会跟着变
  const [error, setError] = useState<"" | "sso" | "credential">("");
  const t = COPY[language];
  const errorText = error === "sso" ? t.ssoError : error === "credential" ? t.credentialError : "";

  // 通力 IoT Essential 使用企业账号登录，仟帆仍是邮箱 + 密码。
  const isSso = platform === "iot";
  const users = LOGIN_USERS[platform];
  const normalizedEmail = email.trim().toLowerCase();
  // 用户下拉的选中项由邮箱框的内容推导：手动输入了列表里的邮箱，下拉也会同步高亮。
  const selectedUser = users.find((user) => user.email === normalizedEmail)?.email;

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!onLogin(normalizedEmail, password, platform)) {
      setError(isSso ? "sso" : "credential");
    }
  };

  const changePlatform = (value: unknown) => {
    const next = String(value) as AppEdition;
    if (next === platform) return;
    // 账号属于各自的平台，切换平台时改为填入该平台的默认账号。
    const defaults = getDefaultCredentials(next, getPassword);
    setPlatform(next);
    setEmail(defaults.email);
    setPassword(defaults.password);
    setError("");
  };

  const pickUser = (value: unknown) => {
    const account = ACCOUNTS.find((candidate) => candidate.email === String(value));
    if (!account) return;
    setEmail(account.email);
    setPassword(getPassword(account.email));
    setError("");
  };

  /**
   * 忘记密码修改成功：修改的是邮箱框里的仟帆账号（邮箱框不是仟帆账号时视为默认管理员），
   * 回到登录卡片后保留邮箱、清空密码框，让用户用新密码重新登录。
   */
  const handlePasswordReset = (newPassword: string) => {
    const target = ACCOUNTS.find((candidate) => candidate.email === normalizedEmail && getAccountEdition(candidate) === "qianfan")?.email ?? QIANFAN_ADMIN_EMAIL;
    onPasswordReset(target, newPassword);
    setEmail(target);
    setPassword("");
    setIsPasswordVisible(false);
    setError("");
  };

  /** 临时链接页设置新密码成功：回到登录页，以仟帆、该账号、空密码框等待用新密码登录 */
  const handleResetLinkSubmit = (newPassword: string) => {
    onPasswordReset(QIANFAN_RESET_DEMO_EMAIL, newPassword);
    setPlatform("qianfan");
    setEmail(QIANFAN_RESET_DEMO_EMAIL);
    setPassword("");
    setIsPasswordVisible(false);
    setError("");
    setIsResetLinkOpen(false);
  };

  const resetLinkAccount = ACCOUNTS.find((account) => account.email === QIANFAN_RESET_DEMO_EMAIL)!;

  return (
    <main className="relative min-h-screen overflow-hidden bg-container">
      <img src={loginBackground} alt="" aria-hidden="true" className="fixed inset-0 size-full object-cover object-center" />

      {/* 右上角语言切换：32×32 圆角 4px、图标 16×16，配色与顶栏操作按钮一致（品牌蓝，hover 浅蓝底）。默认语言为中文（App 的 language 初始值 "cn"） */}
      <button
        type="button"
        onClick={() => onLanguageChange(language === "cn" ? "en" : "cn")}
        aria-label={t.switchLanguage}
        title={t.switchLanguage}
        className="absolute right-6 top-2 z-20 flex size-8 items-center justify-center rounded-sm border-0 bg-transparent text-link transition-colors hover:bg-brand-light/50 focus-visible:outline-2 focus-visible:outline-brand-base"
      >
        {/* 图标显示当前语言（中文显示「中」，英文显示「EN」），取自 Design Token China 图标库 623:1817 */}
        {language === "cn" ? <LanguageCnIcon className="size-4" /> : <LanguageIcon className="size-4" />}
      </button>

      <section className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <form
          onSubmit={submit}
          className={cn(
            "flex w-full max-w-[440px] flex-col gap-8 rounded-[24px] bg-container p-10 shadow-[0_8px_40px_rgba(0,0,0,0.12)]",
            // 重置密码弹窗出现时，它代替登录卡片；关闭后登录卡片恢复，已填内容保留
            (isResetOpen || isResetLinkOpen) && "hidden",
          )}
        >
          <div className="flex flex-col gap-6">
            <KoneLogo />
            <h1 className="text-h3 font-semibold text-primary-text">{t.title}</h1>
          </div>

          {isSso ? (
            // 通力平台走企业账号（SSO）登录：不再输入账号密码，以底部「用户选择」选中的角色登录
            <div className="flex w-full flex-col gap-6">
              <Button type="submit" theme="primary" size="large" shape="round" block>
                <strong>{t.ssoLogin}</strong>
              </Button>
              {error && <p role="alert" className="text-foot12 text-error">{errorText}</p>}
              <Checkbox checked={agreedPolicy} onChange={(checked) => setAgreedPolicy(Boolean(checked))}>
                {t.agreePrefix}{language === "en" ? " " : ""}
                <Link className="iot-login-policy-link" theme="primary" hover="underline" href="#" onClick={(event) => event.preventDefault()}>
                  {t.privacyPolicy}
                </Link>
              </Checkbox>
            </div>
          ) : (
            // 输入框与 Log In 按钮之间 32px（移除「记住我」后原来的 16px 显得局促），与标题到表单的间距一致
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  {/* TDesign Input 把 id / aria-* 透传到外层容器而不是 <input>，所以用包裹式 label 给输入框命名 */}
                  <label className="block">
                    <span className="sr-only">{t.username}</span>
                    <Input
                      className="iot-login-input"
                      size="large"
                      type="text"
                      autocomplete="username"
                      placeholder={t.usernamePlaceholder}
                      status={error ? "error" : "default"}
                      value={email}
                      onChange={(value) => { setEmail(String(value)); setError(""); }}
                    />
                  </label>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="login-password" className="sr-only">{t.password}</label>
                  <div
                    className={cn(
                      "flex h-10 w-full items-center rounded-[8px] border bg-container px-3 transition-[border-color,box-shadow] duration-200",
                      error ? "border-error" : isPasswordFocused ? "border-brand-base shadow-[0_0_0_3px_rgba(20,80,245,0.1)]" : "border-component-border hover:border-brand-base",
                    )}
                  >
                    <input
                      id="login-password"
                      type={isPasswordVisible ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder={t.passwordPlaceholder}
                      value={password}
                      onChange={(event) => { setPassword(event.target.value); setError(""); }}
                      onFocus={() => setIsPasswordFocused(true)}
                      onBlur={() => setIsPasswordFocused(false)}
                      className="h-full min-w-0 flex-1 border-0 bg-transparent text-h7 font-normal text-primary-text outline-none placeholder:text-placeholder"
                    />
                    <button
                      type="button"
                      onClick={() => setIsPasswordVisible((visible) => !visible)}
                      aria-label={isPasswordVisible ? t.hidePassword : t.showPassword}
                      aria-pressed={isPasswordVisible}
                      className="flex size-[18px] items-center justify-center rounded-xs text-placeholder transition-colors hover:text-primary-text focus-visible:outline-2 focus-visible:outline-brand-base"
                    >
                      {isPasswordVisible ? <EyeOpenIcon className="size-[18px]" /> : <EyeClosedIcon className="size-[18px]" />}
                    </button>
                  </div>
                  {error && <p role="alert" className="text-foot12 text-error">{errorText}</p>}
                </div>
              </div>

              <div className="flex flex-col items-start gap-4">
                <Button type="submit" theme="primary" size="large" shape="round" block>
                  <strong>{t.login}</strong>
                </Button>
                <div className="flex w-full justify-center">
                  <Link
                    className="iot-login-link"
                    theme="primary"
                    hover="underline"
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      setIsResetOpen(true);
                    }}
                  >
                    {t.forgotPassword}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </form>
      </section>

      <ForgotPasswordDialog visible={isResetOpen} onClose={() => setIsResetOpen(false)} onReset={handlePasswordReset} />
      <ResetLinkPasswordDialog
        visible={isResetLinkOpen}
        account={resetLinkAccount}
        onClose={() => setIsResetLinkOpen(false)}
        onSubmit={handleResetLinkSubmit}
      />

      {/* 演示用快捷登录：先选平台，再选用户，自动填入邮箱和密码 */}
      <div className="absolute bottom-5 left-6 z-20 flex flex-wrap items-center gap-6 pr-6">
        {/* 文字标签已去掉，用 group 的名称给读屏用户说明这两个下拉框的用途 */}
        <div role="group" aria-label="平台选择">
          <Select
            className="iot-login-select"
            size="medium"
            value={platform}
            options={PLATFORM_OPTIONS}
            onChange={changePlatform}
            popupProps={{ placement: "top-left" }}
          />
        </div>
        <div role="group" aria-label="用户选择">
          <Select
            className="iot-login-select"
            size="medium"
            placeholder="请选择用户"
            value={selectedUser}
            options={users.map((user) => ({ value: user.email, label: user.label }))}
            onChange={pickUser}
            popupProps={{ placement: "top-left" }}
          />
        </div>
        {/* 演示入口：模拟用户从「管理员已重置密码」邮件 / 短信里点开的临时链接 */}
        {!isResetLinkOpen && (
          <Link
            className="iot-login-link"
            theme="primary"
            hover="underline"
            href="#"
            onClick={(event) => {
              event.preventDefault();
              setIsResetOpen(false);
              setIsResetLinkOpen(true);
            }}
          >
            重置密码链接
          </Link>
        )}
      </div>
    </main>
  );
}
