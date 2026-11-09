import { Button } from "tdesign-react";
import type { AppAccount } from "../../data/accounts";
import { getProfileInfoFields, profileInfoCopy } from "../profile-info";
import { MobileBottomBar, MobilePageTitle, type MobileLang } from "./MobileShell";

type MobileProfilePageProps = {
  language: MobileLang;
  user: AppAccount;
  onLogout?: () => void;
};

/**
 * Mobile personal-information page (IOT Delivery 7105:14747).
 * The profile menu opens this page; values remain sourced from App.currentUser.
 */
export function MobileProfilePage({ language, user, onLogout }: MobileProfilePageProps) {
  const t = profileInfoCopy[language];
  const fields = getProfileInfoFields(user, language);

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-page">
      <MobilePageTitle title={t.title} language={language} />
      <div className="flex-1 px-4 pt-4">
        <dl className="flex flex-col gap-3 rounded-lg bg-container p-3">
          {fields.map((field) => (
            <div key={field.label} className="flex min-w-0 items-start gap-3 text-body">
              <dt className="shrink-0 text-secondary-text">{field.label}</dt>
              <dd className="min-w-0 flex-1 break-words text-right text-primary-text" title={field.value || undefined}>
                {field.value || "-"}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <MobileBottomBar>
        <Button className="km-mobile-profile-logout" size="large" block onClick={onLogout}>
          {language === "cn" ? "退出登录" : "Log out"}
        </Button>
      </MobileBottomBar>
    </div>
  );
}
