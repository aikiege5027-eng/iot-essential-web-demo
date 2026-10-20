import { Radio } from "tdesign-react";
import { ACCOUNTS, EDITION_DEFAULT_EMAILS, getAccountEdition, type AppAccount, type AppEdition } from "../data/accounts";

/**
 * 顶栏的「通力 / 仟帆」平台快捷切换，仅用于 Demo 里快速对比两个平台。
 *
 * 用 Radio 按钮组（default-filled）切换。切换时直接以目标平台的默认账号进入
 * （通力 → 张明远，仟帆 → 管理员），不需要回登录页；点击当前平台不做任何事。账号与审批、通知的隔离仍由 App 按平台处理。
 */

type PlatformQuickSwitchProps = {
  user: AppAccount;
  language: "en" | "cn";
  onSwitchAccount?: (account: AppAccount) => void;
};

const LABELS = {
  cn: { group: "平台快捷切换", iot: "通力", qianfan: "仟帆" },
  en: { group: "Switch platform", iot: "KONE", qianfan: "Qianfan" },
};

export default function PlatformQuickSwitch({ user, language, onSwitchAccount }: PlatformQuickSwitchProps) {
  const labels = LABELS[language];
  const current = getAccountEdition(user);

  const switchTo = (value: unknown) => {
    const next = String(value) as AppEdition;
    if (next === current) return;
    const account = ACCOUNTS.find((candidate) => candidate.email === EDITION_DEFAULT_EMAILS[next]);
    if (account) onSwitchAccount?.(account);
  };

  return (
    // 默认填充（default-filled）按钮组，small 档，对应 Figma radioButton-Group 43622:307383：
    // 灰色容器 + 白色选中项。选中项由 TDesign 内部的滑块底板承载。
    <Radio.Group variant="default-filled" size="small" value={current} onChange={switchTo} aria-label={labels.group}>
      <Radio.Button value="iot">{labels.iot}</Radio.Button>
      <Radio.Button value="qianfan">{labels.qianfan}</Radio.Button>
    </Radio.Group>
  );
}
