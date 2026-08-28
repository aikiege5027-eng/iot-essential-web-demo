import { FormEvent, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import loginBackground from "../../imports/LoginDesktop/c139536a8499b15e3dcc9f92c8c622e4be36e24d.png";
import koneLogo from "../../imports/KONE_Logo_Primary_RGB.svg";

type LoginPageProps = {
  onLogin: (email: string, password: string) => boolean;
};

const LOGIN_HINTS = [
  { email: "jianguo.li@kone.com", label: "李建国 · 维保员工" },
  { email: "zhiqiang.wang@kone.com", label: "王志强 · 管理层员工" },
  { email: "lin.xue@kone.com", label: "林雪 · 研发人员" },
  { email: "liu.yang@kone.com", label: "刘洋 · L2人员" },
  { email: "zhao.min@kone.com", label: "赵敏 · Devops人员" },
  { email: "mingyuan.zhang@kone.com", label: "张明远 · 系统管理员" },
  { email: "qiang.zhou@kone.com", label: "周强 · 超级管理员" },
];

function KoneLogo() {
  return <img src={koneLogo} alt="KONE" className="h-7 w-[72px] object-contain object-left" />;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!onLogin(email.trim().toLowerCase(), password)) {
      setError("邮箱或密码不正确，请重新输入。");
    }
  };

  const handleEmailChange = (value: string) => {
    const normalized = value.trim().toLowerCase();
    setEmail(value);
    setError("");
    if (LOGIN_HINTS.some((account) => account.email === normalized)) setPassword("123");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-['PingFang_SC:Regular',sans-serif]">
      <img src={loginBackground} alt="KONE office lobby" className="absolute inset-0 size-full object-cover object-center" />
      <section className="relative z-10 flex min-h-screen items-center justify-center px-5 py-8">
        <form onSubmit={submit} className="w-full max-w-[440px] rounded-[24px] bg-white p-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <KoneLogo />
              <h1 className="text-[28px] font-semibold leading-9 text-[#141414]">Welcome to IOT Essential</h1>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-6">
                <label className="block">
                  <span className="sr-only">Email</span>
                  <input value={email} onChange={(event) => handleEmailChange(event.target.value)} type="email" list="kone-accounts" autoComplete="username" placeholder="选择或输入 KONE 邮箱" className="h-10 w-full rounded-[8px] border border-[#c8cad0] bg-white px-3 text-[16px] leading-6 text-[#141414] outline-none transition focus:border-[#1450f5] focus:ring-2 focus:ring-[#1450f5]/15" required />
                  <datalist id="kone-accounts">{LOGIN_HINTS.map((account) => <option key={account.email} value={account.email}>{account.label}</option>)}</datalist>
                </label>
                <label className="relative block">
                  <span className="sr-only">Password</span>
                  <input value={password} onChange={(event) => { setPassword(event.target.value); setError(""); }} type={isPasswordVisible ? "text" : "password"} autoComplete="current-password" placeholder="Password（统一为 123）" className="h-10 w-full rounded-[8px] border border-[#c8cad0] bg-white px-3 pr-11 text-[16px] leading-6 text-[#141414] outline-none transition focus:border-[#1450f5] focus:ring-2 focus:ring-[#1450f5]/15" required />
                  <button type="button" onClick={() => setIsPasswordVisible((visible) => !visible)} aria-label={isPasswordVisible ? "隐藏密码" : "显示密码"} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8f9195] transition-colors hover:text-[#676a72]">{isPasswordVisible ? <EyeOff className="size-[18px]" strokeWidth={1.8} /> : <Eye className="size-[18px]" strokeWidth={1.8} />}</button>
                </label>
              </div>

              {error && <p role="alert" className="text-[13px] leading-5 text-[#d92d20]">{error}</p>}

              <div className="flex flex-col gap-4">
                <label className="flex h-[22px] cursor-pointer items-start gap-2 text-[14px] leading-[22px] text-[#141414]">
                  <input checked={remember} onChange={(event) => setRemember(event.target.checked)} type="checkbox" className="mt-[3px] size-4 rounded-[4px] border-[#c8cad0] accent-[#1450f5]" />
                  Remember me
                </label>
                <button type="submit" className="h-10 w-full rounded-full bg-[#1450f5] px-6 text-[16px] font-semibold leading-6 text-white transition hover:bg-[#0e43d0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1450f5]">Log In</button>
              </div>

              <button type="button" className="text-center text-[14px] font-semibold leading-[22px] text-[#1450f5] hover:underline">Forgot password?</button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
