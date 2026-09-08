/**
 * Button 验证页
 *
 * 目的有两个：
 *   1. 证明 tdesign-react 的组件确实由 KONE token 驱动（而非 TDesign 默认蓝）
 *   2. 按 Figma「Button 按钮」组件集的轴逐项铺开，便于设计比对
 *
 * 设计来源：Figma China Design system for web / Button 按钮
 *   https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=30382-113576
 *
 * 页面自身的排版/配色使用本仓库的 KONE 语义工具类（text-body、bg-page…），
 * 与被展示的 TDesign 组件共用同一套 token —— 这本身也是一致性的证明。
 */
import { Button } from "tdesign-react";
import type { ReactNode } from "react";
import { NavSearchIcon, ChevronRightIcon, RefreshIcon } from "../components/icons/nav-icons";

/* ---------------------------------------------------------------------------
 * 页面骨架
 * ------------------------------------------------------------------------- */

function Section({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children: ReactNode;
}) {
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

/** 一行带左侧标签的示例，标签宽度固定以便纵向对齐 */
function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-6">
      <span className="w-[104px] shrink-0 text-foot12 text-placeholder">{label}</span>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * token 生效证明
 * ------------------------------------------------------------------------- */

/**
 * 并排显示 KONE 源 token 与 TDesign 目标 token。
 * 两个色块若完全一致，说明桥接链路 --td-brand-color-7 → var(--brand-color) 通了。
 */
function TokenProof() {
  const pairs = [
    { label: "品牌主色", kone: "--brand-color", td: "--td-brand-color" },
    { label: "品牌 hover", kone: "--brand-color-hover", td: "--td-brand-color-hover" },
    { label: "品牌 active", kone: "--brand-color-active", td: "--td-brand-color-active" },
    { label: "品牌浅底", kone: "--brand-color-light", td: "--td-brand-color-light" },
    { label: "错误色", kone: "--error-color", td: "--td-error-color" },
    { label: "成功色", kone: "--success-color", td: "--td-success-color" },
    { label: "警告色", kone: "--warning-color", td: "--td-warning-color" },
    { label: "一级文字", kone: "--text-color-primary", td: "--td-text-color-primary" },
    { label: "弱描边", kone: "--component-stroke", td: "--td-component-stroke" },
  ];

  return (
    <div className="grid grid-cols-[auto_1fr_1fr] gap-x-6 gap-y-2 rounded-md border border-stroke bg-container p-4">
      <span className="text-foot12 text-placeholder">语义</span>
      <span className="text-foot12 text-placeholder">KONE token</span>
      <span className="text-foot12 text-placeholder">TDesign token（桥接后）</span>
      {pairs.map(({ label, kone, td }) => (
        <div key={label} className="col-span-3 grid grid-cols-[auto_1fr_1fr] items-center gap-x-6">
          <span className="w-[88px] text-body text-secondary-text">{label}</span>
          <span className="flex items-center gap-2">
            <span
              className="size-5 shrink-0 rounded-xs border border-stroke"
              style={{ background: `var(${kone})` }}
            />
            <code className="text-foot12 text-placeholder">{kone}</code>
          </span>
          <span className="flex items-center gap-2">
            <span
              className="size-5 shrink-0 rounded-xs border border-stroke"
              style={{ background: `var(${td})` }}
            />
            <code className="text-foot12 text-placeholder">{td}</code>
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * 主体
 * ------------------------------------------------------------------------- */

const THEMES = ["default", "primary", "danger", "warning", "success"] as const;
const VARIANTS = ["base", "outline", "dashed", "text"] as const;
const SIZES = ["small", "medium", "large"] as const;
const SHAPES = ["rectangle", "round", "square", "circle"] as const;

export default function ButtonShowcase() {
  return (
    <div className="min-h-screen bg-page">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-8 px-8 py-10">
        {/* 页头 */}
        <header className="flex flex-col gap-2">
          <h1 className="text-h4 font-semibold text-primary-text">Button 按钮</h1>
          <p className="text-body text-secondary-text">
            由 <code className="text-brand">tdesign-react</code> 提供组件行为，
            由 KONE Design Token 提供视觉。开发侧用{" "}
            <code className="text-brand">tdesign-vue-next</code> 实现时，
            设计规范与 token 完全一致。
          </p>
        </header>

        <Section
          title="Token 桥接验证"
          desc="左右两列色块应完全一致。若一致，说明 TDesign 组件已由 KONE token 驱动，而非 TDesign 默认蓝 #0052d9。"
        >
          <TokenProof />
        </Section>

        <Section title="组件类型 variant" desc="基础 / 线框 / 虚线 / 文字，纵向为主题色。">
          <div className="flex flex-col gap-3">
            {VARIANTS.map((variant) => (
              <Row key={variant} label={variant}>
                {THEMES.map((theme) => (
                  <Button key={theme} variant={variant} theme={theme}>
                    按钮
                  </Button>
                ))}
              </Row>
            ))}
          </div>
        </Section>

        <Section
          title="幽灵按钮 ghost"
          desc="TDesign 把幽灵作为独立布尔属性，可与任意 variant 组合；Figma 里它是 variant 的一个取值。用于深色/图片背景之上。"
        >
          <div className="rounded-md bg-[var(--text-color-primary)] p-6">
            <div className="flex flex-wrap items-center gap-3">
              {THEMES.map((theme) => (
                <Button key={theme} ghost theme={theme}>
                  按钮
                </Button>
              ))}
            </div>
          </div>
        </Section>

        <Section title="尺寸 size" desc="小 24px · 中 32px · 大 40px，与 Figma 实测一致。">
          <div className="flex flex-col gap-3">
            {SIZES.map((size) => (
              <Row key={size} label={size}>
                <Button size={size} theme="primary">
                  按钮
                </Button>
                <Button size={size} theme="primary" variant="outline">
                  按钮
                </Button>
                <Button size={size} theme="primary" icon={<NavSearchIcon />}>
                  前置图标
                </Button>
                <Button size={size} theme="primary" suffix={<ChevronRightIcon />}>
                  后置图标
                </Button>
                <Button size={size} theme="primary" shape="square" icon={<NavSearchIcon />} />
              </Row>
            ))}
          </div>
        </Section>

        <Section title="形状 shape" desc="长方形 / 圆角长方形 / 正方形 / 圆形，后两者为纯图标按钮。">
          <div className="flex flex-col gap-3">
            {SHAPES.map((shape) => {
              const iconOnly = shape === "square" || shape === "circle";
              return (
                <Row key={shape} label={shape}>
                  {(["base", "outline"] as const).map((variant) =>
                    iconOnly ? (
                      <Button
                        key={variant}
                        shape={shape}
                        variant={variant}
                        theme="primary"
                        icon={<NavSearchIcon />}
                      />
                    ) : (
                      <Button key={variant} shape={shape} variant={variant} theme="primary">
                        按钮
                      </Button>
                    ),
                  )}
                </Row>
              );
            })}
          </div>
        </Section>

        <Section
          title="状态 state"
          desc="hover 与 active 需实际交互才能看到 —— 请把鼠标移到下面的按钮上并按住。disabled 与 loading 为静态可见。"
        >
          <div className="flex flex-col gap-3">
            <Row label="normal">
              {THEMES.map((t) => (
                <Button key={t} theme={t}>
                  按钮
                </Button>
              ))}
            </Row>
            <Row label="disabled">
              {THEMES.map((t) => (
                <Button key={t} theme={t} disabled>
                  按钮
                </Button>
              ))}
            </Row>
            <Row label="loading">
              {THEMES.map((t) => (
                <Button key={t} theme={t} loading>
                  加载中
                </Button>
              ))}
            </Row>
            <Row label="disabled·线框">
              {VARIANTS.map((v) => (
                <Button key={v} variant={v} theme="primary" disabled>
                  按钮
                </Button>
              ))}
            </Row>
          </div>
        </Section>

        <Section title="通栏 block" desc="宽度撑满父容器，常用于移动端与表单底部主操作。">
          <div className="flex max-w-[360px] flex-col gap-3">
            <Button block theme="primary">
              主操作
            </Button>
            <Button block theme="default" variant="outline">
              次操作
            </Button>
            <Button block theme="danger" icon={<RefreshIcon />}>
              危险操作
            </Button>
          </div>
        </Section>

        <Section
          title="已知差异：Secondary 次要"
          desc="需要设计确认的一处缺口。"
        >
          <div className="rounded-md border border-warning-focus bg-warning-light p-4">
            <p className="text-body text-primary-text">
              Figma 的 Button 组件集里 <code>theme</code> 有一档{" "}
              <strong>Secondary 次要</strong>，但 TDesign 的{" "}
              <code>theme</code> 只有 default / primary / danger / warning / success，
              <strong>不存在 secondary</strong>（已核对 TDesign 的类型定义与 CSS，
              两处都没有 <code>.t-button--theme-secondary</code>）。
            </p>
            <p className="mt-2 text-body text-secondary-text">
              也就是说这一档是 KONE 在 TDesign 之上自行扩展的。落地有两种方式：
              一是用 <code>variant="outline" theme="primary"</code> 近似替代，
              二是补一份自定义 CSS 覆盖。需要设计确认它的准确定义后再实现，
              这里先不猜。
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
