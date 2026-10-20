import { lazy, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

const ButtonShowcase = lazy(() => import("./app/design-system/ButtonShowcase.tsx"));
const DialogMessageShowcase = lazy(() => import("./app/design-system/DialogMessageShowcase.tsx"));
const IoTPageTemplateShowcase = lazy(
  () => import("./app/design-system/IoTPageTemplateShowcase.tsx"),
);

/**
 * 极简 hash 路由。
 *
 * 只为把设计系统验证页挂到一个独立 URL，不侵入 App 自身的状态与路由逻辑：
 *   #/design-system/button             → Button 验证页
 *   #/design-system/dialog             → Dialog / Message 验证页
 *   #/design-system/iot-page-template  → IoT 页面模板验证页
 *   其他                                → 原 Demo
 *
 * 用 hash 而不是 history 路由，是因为本项目部署在子路径
 * （vite base = /iot-essential-web-demo/），hash 无需服务端配合。
 */
function Root() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  if (hash.startsWith("#/design-system/button")) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-page p-8 text-body text-secondary-text">正在加载验证页…</div>}>
        <ButtonShowcase />
      </Suspense>
    );
  }
  if (hash.startsWith("#/design-system/dialog")) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-page p-8 text-body text-secondary-text">正在加载验证页…</div>}>
        <DialogMessageShowcase />
      </Suspense>
    );
  }
  if (hash.startsWith("#/design-system/iot-page-template")) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-page p-8 text-body text-secondary-text">正在加载验证页…</div>}>
        <IoTPageTemplateShowcase />
      </Suspense>
    );
  }
  return <App />;
}

createRoot(document.getElementById("root")!).render(<Root />);
