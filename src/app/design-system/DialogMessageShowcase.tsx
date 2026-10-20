/**
 * Dialog / Message 验证页
 *
 * 按 Figma「Dialog 对话框」「Message 全局提示」两个组件页的轴铺开，用来核对
 * tdesign-react 的 Dialog / Message 在 KONE token 与 tdesign-patches.css 的补丁之后是否对齐设计稿。
 *
 *   Dialog  https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=41952-300048
 *   Message https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=46808-353123
 *
 * 静态陈列用 DialogCard / Message 组件本体（不带遮罩与定位），下方按钮触发真实的 Dialog 与 MessagePlugin。
 */
import { useState } from "react";
import type { ReactNode } from "react";
import { Button, Dialog, DialogCard, Message, MessagePlugin } from "tdesign-react";

function Section({ title, desc, children }: { title: string; desc?: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4 border-t border-stroke pt-8">
      <div className="flex flex-col gap-1">
        <h2 className="text-h5 font-medium text-primary-text">{title}</h2>
        {desc && <p className="text-body text-secondary-text">{desc}</p>}
      </div>
      {children}
    </section>
  );
}

/** Figma 里对话框摆在 #666 底板上，这里同样处理，便于看清白色卡片的边界 */
function Stage({ children, caption }: { children: ReactNode; caption: string }) {
  return (
    <figure className="flex flex-col gap-2">
      <div className="rounded-sm bg-[#666666] p-10">{children}</div>
      <figcaption className="text-foot12 text-placeholder">{caption}</figcaption>
    </figure>
  );
}

const DIALOG_THEMES = ["default", "info", "warning", "danger", "success"] as const;
const THEME_LABEL: Record<(typeof DIALOG_THEMES)[number], string> = {
  default: "default 默认（无图标）",
  info: "info 信息",
  warning: "warning 警告",
  danger: "danger 危险（Figma: error）",
  success: "success 成功",
};

const CANCEL_BTN = { content: "取消", theme: "default", variant: "base" } as const;
const SAMPLE_TEXT = "我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度。";

function StaticDialog({
  theme,
  divider,
  closeBtn = true,
}: {
  theme: (typeof DIALOG_THEMES)[number];
  divider: boolean;
  closeBtn?: boolean;
}) {
  return (
    <DialogCard
      theme={theme}
      header="我是主要信息"
      body={SAMPLE_TEXT}
      closeBtn={closeBtn}
      cancelBtn={CANCEL_BTN}
      confirmBtn="确认删除"
      className={divider ? "km-dialog--divider" : undefined}
    />
  );
}

const MESSAGE_THEMES = ["info", "question", "success", "warning", "error", "loading"] as const;

export default function DialogMessageShowcase() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [dividerOpen, setDividerOpen] = useState(false);
  const [fullOpen, setFullOpen] = useState(false);

  return (
    <div className="min-h-screen bg-page">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-8 py-10">
        <header className="flex flex-col gap-2">
          <h1 className="text-h4 font-semibold text-primary-text">Dialog 对话框 / Message 全局提示</h1>
          <p className="text-body text-secondary-text">
            由 <code className="text-brand">tdesign-react</code> 提供行为，视觉来自 KONE token 与{" "}
            <code className="text-brand">tdesign-patches.css</code> 中的 Dialog / Message 补丁。
          </p>
        </header>

        <Section title="Dialog · 基础 / 带分割线" desc="宽 480，内边距 32；带分割线变体通过 dialogClassName=&quot;km-dialog--divider&quot; 启用。">
          <div className="grid grid-cols-2 gap-6 max-[1240px]:grid-cols-1">
            <Stage caption="基础对话框（default，带关闭按钮）">
              <StaticDialog theme="default" divider={false} />
            </Stage>
            <Stage caption="带分割线对话框（default）">
              <StaticDialog theme="default" divider />
            </Stage>
            <Stage caption="无关闭按钮（info）">
              <StaticDialog theme="info" divider={false} closeBtn={false} />
            </Stage>
            <Stage caption="带分割线 + 图标（info）">
              <StaticDialog theme="info" divider />
            </Stage>
          </div>
        </Section>

        <Section title="Dialog · 主题" desc="图标颜色分别取 brand / warning / error / success 基础色。">
          <div className="grid grid-cols-2 gap-6 max-[1240px]:grid-cols-1">
            {DIALOG_THEMES.filter((theme) => theme !== "default").map((theme) => (
              <Stage key={theme} caption={THEME_LABEL[theme]}>
                <StaticDialog theme={theme} divider={false} />
              </Stage>
            ))}
          </div>
        </Section>

        <Section title="Dialog · 真实弹出" desc="遮罩、居中、ESC 与关闭按钮的真实行为。">
          <div className="flex flex-wrap gap-3">
            <Button theme="default" onClick={() => setBasicOpen(true)}>基础对话框</Button>
            <Button theme="default" onClick={() => setDividerOpen(true)}>带分割线对话框</Button>
            <Button theme="default" onClick={() => setFullOpen(true)}>全屏模式（待补充样式）</Button>
          </div>
          <Dialog
            visible={basicOpen}
            theme="info"
            header="我是主要信息"
            body={SAMPLE_TEXT}
            placement="center"
            cancelBtn={CANCEL_BTN}
            confirmBtn="确认删除"
            onClose={() => setBasicOpen(false)}
            onConfirm={() => setBasicOpen(false)}
          />
          <Dialog
            visible={dividerOpen}
            theme="warning"
            header="我是主要信息"
            body={SAMPLE_TEXT}
            placement="center"
            dialogClassName="km-dialog--divider"
            cancelBtn={CANCEL_BTN}
            confirmBtn="确认删除"
            onClose={() => setDividerOpen(false)}
            onConfirm={() => setDividerOpen(false)}
          />
          <Dialog
            visible={fullOpen}
            mode="full-screen"
            header="我是主要信息"
            body={SAMPLE_TEXT}
            cancelBtn={CANCEL_BTN}
            confirmBtn="确认删除"
            onClose={() => setFullOpen(false)}
            onConfirm={() => setFullOpen(false)}
          />
        </Section>

        <Section title="Message · 静态外观" desc="六个主题 × 有无关闭按钮。高 48，圆角 6，0.5px 描边，阴影 0 8px 10px。">
          <div className="grid grid-cols-2 gap-x-10 gap-y-3 max-[1240px]:grid-cols-1">
            {[false, true].map((closeBtn) => (
              <div key={String(closeBtn)} className="flex flex-col items-start gap-3">
                {MESSAGE_THEMES.map((theme) => (
                  <Message key={theme} theme={theme} closeBtn={closeBtn} content="用于表示普通操作信息提示，可关闭，通常信息较长" />
                ))}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Message · 真实弹出" desc="顶部居中，3 秒后自动消失；MessagePlugin 在 Message 之上统一管理出入场与堆叠。">
          <div className="flex flex-wrap gap-3">
            {MESSAGE_THEMES.map((theme) => (
              <Button
                key={theme}
                theme="default"
                onClick={() => MessagePlugin[theme](theme === "loading" ? "正在处理…" : "密码重置成功", 3000)}
              >
                {theme}
              </Button>
            ))}
            <Button theme="default" onClick={() => MessagePlugin.success({ content: "带关闭按钮的提示", closeBtn: true, duration: 0 })}>
              带关闭按钮（不自动消失）
            </Button>
          </div>
        </Section>
      </div>
    </div>
  );
}
