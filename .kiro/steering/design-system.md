# KONE IoT Design System

本项目所有 UI 的设计约定。此文件为**始终生效**的 steering，生成或修改任何界面代码前都应遵循。

## 事实来源

三个 Figma 文件，各自权威范围不重叠。冲突时按此优先级裁决。

| Figma 文件 | file key | 权威范围 |
| --- | --- | --- |
| **Design Token China** | `vuD3onrb6PS5UtMrGdgbrA` | 颜色、字体、图标 token 的**唯一**来源 |
| **China Design system for web** | `b5cc1y3jzLmOQkpa8vz5AX` | TDesign 底层组件的变体、尺寸、状态 |
| **IOT Delivery** | `L9e70WefNsB8pSYKB5U7zh` | 页面骨架（顶栏/侧栏）与业务页面 |

Design Token China 的具体节点：

| 内容 | Figma 链接 |
| --- | --- |
| 颜色 | [node 3477-5033](https://www.figma.com/design/vuD3onrb6PS5UtMrGdgbrA/Design-Token-China?node-id=3477-5033) |
| 字体 | [node 184-1388](https://www.figma.com/design/vuD3onrb6PS5UtMrGdgbrA/Design-Token-China?node-id=184-1388) |
| 图标 | [node 2371-26](https://www.figma.com/design/vuD3onrb6PS5UtMrGdgbrA/Design-Token-China?node-id=2371-26) |

代码侧的落地位置：

- `src/styles/fonts.css` — 字族与排版尺度
- `src/styles/theme.css` — 颜色、圆角、阴影
- `src/styles/tdesign-bridge.css` — 把 KONE token 灌给 TDesign 的 `--td-*`
- `src/styles/index.css` — 样式入口，**导入顺序有意义**（`tailwind.css` 必须最先，`tdesign-bridge.css` 必须在 `tdesign.css` 之后）

CSS 变量名与 Figma 中的变量名**逐字一致**（`--brand-color`、`--text-color-primary`…）。这是有意的：设计师和开发用同一套词汇，评审时不需要在两套命名间做心算翻译。**不要**为了「更像 Tailwind 风格」而重命名。

技术栈：Tailwind CSS v4（`@theme` / `@theme inline`，无 `tailwind.config.js`）+ TDesign React + shadcn/ui + Radix。组件底座的分工见[组件底座](#组件底座)。

### 详细组件规格另有文件

25 个 TDesign 底层组件的完整规格（每个组件的变体轴、尺寸、各状态色、TDesign API 映射、与设计稿的缺口）在 **`.kiro/steering/tdesign-components.md`**。

那份文件是**按需加载**（`inclusion: auto`）而不是始终生效 —— 它近 700 行，若常驻会在每次对话里挤占上下文。要用到具体组件时它会自动进来，也可以用 `#tdesign-components` 手动引入。本文件只保留[组件索引](#tdesign-组件索引)与跨组件通用规则。

---

## 硬性规则

以下几条是本仓库最常见的错误来源，优先级高于其他风格偏好。

### 1. 不要写 `font-['PingFang_SC:Medium',sans-serif]`

这是 Figma 导出产物，仓库现存 232 处。**它是失效代码**：字重被塞进了字族名里，而 `"PingFang SC:Medium"` 不是可解析的字族，浏览器匹配失败后静默回退到 `sans-serif` / 400。64 处 Medium 变体中无一附带真正的字重类，设计稿要求的中黑字重全部丢失，且不产生任何报错。

```tsx
// ✗ 字族无效、字重丢失、字号行高硬编码
<p className="font-['PingFang_SC:Medium',sans-serif] text-[14px] leading-[22px] text-[#141414]">

// ✓ 字族由 body 继承，字号行高成对，字重显式声明
<p className="text-body font-medium text-primary-text">
```

### 2. 不要硬编码颜色

不要写 `text-[#141414]`、`bg-[#f5f7fa]`、`border-[#dfe1e8]`，也不要用 Tailwind 默认调色板（`bg-blue-500`、`text-green-600`）。只用下面表格里的语义工具类。

仓库现状：颜色几乎全是硬编码 hex（`#141414` 318 处、`#1450f5` 241 处、`#dfe1e8` 158 处），且大小写不统一（`#f51414` 与 `#F51414` 混用）。新代码不要延续。

### 3. 不要硬编码字号与行高

不要写 `text-[14px] leading-[22px]`。用 `text-body` —— 行高已与字号成对绑定，不会写错配对。

### 4. 状态色分「填充」与「文字」两套，不可混用

高饱和状态色是为填充设计的，直接当文字用对比度不足。详见[无障碍](#无障碍)一节。

---

## 颜色

### 文字

| Token | 工具类 | 值 | 用途 |
| --- | --- | --- | --- |
| `--text-color-primary` | `text-primary-text` | `#141414` | 标题、关键数值、表格主要列 |
| `--text-color-secondary` | `text-secondary-text` | `#676a72` | 辅助说明、表格次要列 |
| `--text-color-placeholder` | `text-placeholder` | `#8f9195` | 输入框占位符、时间戳 |
| `--text-color-disabled` | `text-disabled` | `#abadb2` | 禁用态 |
| `--text-color-white` | `text-white-text` | `#ffffff` | 深色底上的文字 |
| `--text-color-brand` | `text-brand` | `#1450f5` | 品牌强调文字 |
| `--text-color-link` | `text-link` | `#1450f5` | 可点击文字、链接 |

### 背景

层级从低到高：`page` → `container` → `secondarycontainer` → `component`。

| Token | 工具类 | 值 | 用途 |
| --- | --- | --- | --- |
| `--bg-color-page` | `bg-page` | `#f5f7fa` | 页面底色 |
| `--bg-color-container` | `bg-container` | `#ffffff` | 卡片、弹窗等浮起容器 |
| `--bg-color-container-hover` | `bg-container-hover` | `#f5f7fa` | 容器 hover（如表格行） |
| `--bg-color-container-active` | `bg-container-active` | `#dfe1e8` | 容器 active |
| `--bg-color-secondarycontainer` | `bg-secondarycontainer` | `#f5f7fa` | 容器内次级分区 |
| `--bg-color-secondarycontainer-hover` | `bg-secondarycontainer-hover` | `#dfe1e8` | |
| `--bg-color-secondarycontainer-active` | — | `#c8cad0` | |
| `--bg-color-component` | `bg-component` | `#f2f4f7` | 输入框、控件自身底色 |
| `--bg-color-component-hover` | `bg-component-hover` | `#dfe1e8` | |
| `--bg-color-component-active` | — | `#8f9195` | |
| `--bg-color-component-disabled` | `bg-component-disabled` | `#f2f4f7` | |

### 描边

| Token | 工具类 | 值 | 用途 |
| --- | --- | --- | --- |
| `--component-stroke` | `border-stroke` | `#dfe1e8` | 分割线、卡片描边（弱） |
| `--component-border` | `border-component-border` | `#c8cad0` | 输入框、可交互控件（强） |

### 品牌色 KONE Blue

| Token | 工具类 | 值 |
| --- | --- | --- |
| `--brand-color` | `bg-brand-base` | `#1450f5` |
| `--brand-color-hover` | `bg-brand-hover` | `#4373f7` |
| `--brand-color-active` | `bg-brand-active` | `#1444c8` |
| `--brand-color-disabled` | `bg-brand-disabled` | `#a1b9fb` |
| `--brand-color-light` | `bg-brand-light` | `#f3f6fe` |
| `--brand-color-light-hover` | — | `#d0dcfd` |
| `--brand-color-light-active` | — | `#a1b9fb` |
| `--brand-color-focus` | — | `#d0dcfd` |

### 状态色

每个状态有完整的交互色阶。`base` 用于填充，`light` 用于浅底，`-color-*` 变量可直接在 CSS 中引用。

| 状态 | base | hover | active | disabled | light | focus |
| --- | --- | --- | --- | --- | --- | --- |
| success 成功/在线/已恢复 | `#1ed273` | `#4bdb8f` | `#16b662` | `#8ceeba` | `#dbfbea` | `#b2f5d2` |
| warning 警告/已暂停 | `#f98600` | `#ffb145` | `#d97019` | `#ffd18d` | `#fff1db` | `#ffe1b3` |
| error 故障/告警/失败 | `#f51414` | `#f74343` | `#c41010` | `#fba1a1` | `#fef3f3` | `#fdd0d0` |

填充与浅底工具类：`bg-surface-success` / `bg-surface-warning` / `bg-surface-alert`、`bg-success-light` / `bg-warning-light` / `bg-error-light`。

### IoT 状态语义映射

业务语义已在仓库中稳定成型，沿用即可，不要另造一套：

| 语义 | 颜色 |
| --- | --- |
| 在线 / 成功 / 已恢复 / 验证成功 | success 绿 |
| 故障 / 告警 / 失败 / 未恢复 | error 红 |
| 警告 / 已暂停 | warning 橙 |
| 运行中 / 信息 | brand 蓝 |
| 排队中 / 空闲 / 离线 | 中性灰（`text-placeholder`） |

---

## 状态色一致性与无障碍说明

状态文字、状态点和 TDesign 状态组件统一使用 Figma 的基础 success / warning / error 色，不再维护独立的压深文字色：

| Token | 工具类 | 值 |
| --- | --- | --- |
| `--text-color-success` → `--success-color` | `text-success` | `#1ed273` |
| `--text-color-warning` → `--warning-color` | `text-warning` | `#f98600` |
| `--text-color-error` → `--error-color` | `text-error` | `#f51414` |

> 这是项目确认后的统一映射。基础 success / warning / error 在白底 14px 正文上的对比度低于 WCAG AA（分别约 2.00:1、2.49:1、4.21:1）；实现仍以设计稿和 TDesign 的基础状态色一致性为准。状态绝不能只靠颜色传达，必须同时提供文字标签。

标准写法 —— 由父级状态文字色同时驱动圆点和文字，确保两者完全同色：

```tsx
<span className="inline-flex items-center gap-1 text-body text-success">
  <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
  在线
</span>
```

其他要求：

- 状态**绝不能只靠颜色传达**。圆点旁必须有文字标签，或提供 `aria-label`。色觉障碍用户与灰度打印场景都依赖这一点。
- 装饰性圆点、纯图形指示器加 `aria-hidden="true"`，避免屏幕阅读器重复播报。
- 禁用态文字（`#abadb2`，2.50:1）不满足 AA，但 WCAG 对禁用控件豁免，可接受。
- `text-placeholder`（`#8f9195`，3.16:1）**不满足正文 AA**。仅用于占位符和 ≥18px 大字，不要用于关键正文信息。

---

## 字体

字族统一 **PingFang SC**，由 `body` 统一继承 —— 业务组件**不需要也不应该**再声明 `font-family`。

字重三档：`font-normal` 400 / `font-medium` 500 / `font-semibold` 600。全表无字间距、无斜体。

### 排版尺度

字号与行高已成对绑定，用一个类即可，不要另加 `leading-*`。

| Figma 名称 | 工具类 | 字号/行高 | 用途 |
| --- | --- | --- | --- |
| Foot 10 | `text-foot10` | 10/16 | 角标、图例、密集表格 |
| Foot 12 | `text-foot12` | 12/20 | 辅助说明、时间戳、标签 |
| Body 14 | `text-body` | 14/22 | **正文默认**，全站主力 |
| H7 16 | `text-h7` | 16/24 | 卡片标题、区块小标题 |
| H6 18 | `text-h6` | 18/26 | 区块标题 |
| H5 20 | `text-h5` | 20/28 | 页面小标题 |
| H4 24 | `text-h4` | 24/32 | 页面标题 |
| H3 28 | `text-h3` | 28/36 | 大标题 |
| H2 30 | `text-h2` | 30/44 | 模块级大标题 |
| H1 38 | `text-h1` | 38/56 | 首屏主标题 |
| Headline/small | `text-headline-sm` | 24/32 | Semibold，语气更强的标题 |
| Headline/medium | `text-headline` | 28/36 | Semibold |
| Headline/large | `text-headline-lg` | 36/44 | Semibold |
| Display/medium | `text-display` | 48/56 | Semibold，监控大盘核心指标 |
| Display/large | `text-display-lg` | 64/72 | Semibold |

`Headline/*` 与 `Display/*` 已内建 600 字重，无需再加 `font-semibold`。

正文默认就是 `text-body`（14/22），拿不准时用它。

### HTML 元素默认样式

`h1`–`h4`、`label`、`button`、`input` 在 `@layer base` 中已有默认排版（`h1`→`text-h2`、`h2`→`text-h4`、`h3`→`text-h5`、`h4`→`text-h7`、`label`/`button`/`input`→`text-body`）。因为在 base layer，任何工具类都能覆盖它们。语义标题**优先用 `h1`–`h4` 标签**而非 `div` + 字号类，这对屏幕阅读器的文档结构很重要。

### 数字对齐

`<table>` 已默认 `font-variant-numeric: tabular-nums`。表格外的数字列若需对齐，手动加 `tabular-nums`。设备 ID、故障码等定宽数据可用 `font-mono`。

---

## 图标

图标库在 Figma [node 2371-26](https://www.figma.com/design/vuD3onrb6PS5UtMrGdgbrA/Design-Token-China?node-id=2371-26)，按域组织为 9 类：**箭头、基础、电梯、设备/工具、角色、建筑、操作、开发、自然**，另有独立的信号强度、语言、加载态与 KONE / GiantKONE 标识。完整清单以 Figma 为准。

### 规格

- **基础尺寸 16×16**，库中所有图标均以此绘制。放大时用 16 的倍数（16 / 24 / 32）以保持描边清晰。
- 命名为 kebab-case 英文：`elevator-door-open`、`warning-triangle`、`cloud-disconnected`。
- 多数图标有 **outline / `-filled` 成对变体**（`setting` / `setting-filled`）。约定：**导航与列表用 outline，选中态与强调用 filled**。

### 图标颜色

| Token | 工具类 | 值 | 用途 |
| --- | --- | --- | --- |
| `--icon-primary` | `text-icon-primary` | `#141414` | 默认图标 |
| `--icon-inactive` | `text-icon-inactive` | `#8f9195` | 未选中、禁用 |
| `--icon-warning` | `text-icon-warning` | `#f98600` | 警告态图标 |

图标应用 `fill="currentColor"` 或 `stroke="currentColor"`，颜色由文字色继承，不要在 SVG 内写死颜色。

### 领域图标

电梯业务图标是这套系统的独特资产，涉及以下概念时**优先查 Figma 图标库**，不要用通用图标凑：

门态 `elevator-door-open` / `-closed` / `-opening` / `-closing`；轿厢类型 `elevator-passenger` / `-VIP` / `-cargo` / `-maintenance` / `-idle`；群控 `elevator-group` / `-group-control` / `elevator-exchange`；扶梯 `escalator`；连接态 `cloud-disconnected` / `wifi-lost1` / `wifi-lost2` / 信号强弱 0–3；运维 `maintenance` / `diagnosis` / `overdue` / `contract`；建筑类型 `mall` / `school` / `hospital` / `airport` / `factory` / `residence` / `villa`。

### 当前实现差距

代码目前有两套图标来源，与设计系统尚未统一：

1. `lucide-react` —— 22 个通用图标（`ChevronRight`、`Search`、`X` 等），主要由 shadcn/ui 组件内部使用。
2. **152 处内联 `<svg>`** —— Figma 导出的领域图标，路径数据直接嵌在业务组件里（`EventsApp.tsx` 独占 67 处）。

Figma 图标页的说明是「icon 与开发一致」，即两者应当对齐。目标方向是把内联 SVG 收敛为 `src/app/components/icons/` 下的独立组件，统一 16×16 viewBox 与 `currentColor`。**新增领域图标时按此方式建组件，不要再往业务组件里内联路径数据。** shadcn/ui 内部继续用 lucide 无需改动。

---

## 圆角与阴影

圆角为离散档位（来自设计稿实测分布），不是等比计算：

| 工具类 | 值 | 用途 |
| --- | --- | --- |
| `rounded-xs` | 3px | 小徽章、标签 |
| `rounded-sm` | 4px | 输入框、按钮、状态胶囊（最常用） |
| `rounded-md` | 6px | 卡片、面板 |
| `rounded-lg` | 8px | 大卡片、弹窗 |
| `rounded-xl` | 12px | 模态框、抽屉 |

阴影只有两级，不要自造：

| 工具类 | 值 | 用途 |
| --- | --- | --- |
| `shadow-popover` | `0 4px 5px rgba(0,0,0,.1)` | 下拉、气泡、Toast |
| `shadow-modal` | `0 8px 10px rgba(0,0,0,.1)` | 模态框、抽屉 |

---

## 组件底座

仓库里有**两套**组件库，这不是历史遗留混乱，是有明确分工的：

| | TDesign React（`tdesign-react` 1.18.3） | shadcn/ui（`src/app/components/ui/`，46 个） |
| --- | --- | --- |
| 设计来源 | Figma **China Design system for web** | 无设计稿，Figma Make 生成时带入 |
| token 消费 | `tdesign-bridge.css` → `--td-*` | `theme.css` 第 3 层桥接 → `--primary` 等 |
| 定位 | **新代码的默认选择** | 存量，维持现状 |

**判定规则，按顺序套用：**

1. 需求落在下面 25 个组件里 → **用 TDesign**，规格查 `tdesign-components.md`。
2. 不在这 25 个里，但 shadcn/ui 已有（如 `card` `badge` `alert`）→ 继续用 shadcn/ui。
3. 两边都没有 → 先回 Figma 找，找不到再问设计，不要自己造。

**不要在同一个页面区块里混用两套的同类组件。** 例如表单里一半 `tdesign-react` 的 `Input`、一半 shadcn 的 `input` —— 二者高度分别是 32px 与 36px（`h-9`），会看出错位。

### 重叠清单

25 个 TDesign 组件里有 **18 个**在 shadcn/ui 中有同类实现。**新代码走 TDesign，已有调用点不主动迁移**（迁移成本与收益需单独评估）：

`Button`→`button`、`Divider`→`separator`、`Dropdown`→`dropdown-menu`、`Breadcrumb`→`breadcrumb`、`Pagination`→`pagination`、`Tabs`→`tabs`、`Checkbox`→`checkbox`、`Radio`→`radio-group`、`Select`→`select`、`Input`→`input`、`Slider`→`slider`、`Switch`→`switch`、`Tooltip`→`tooltip`、`Table`→`table`、`Collapse`→`accordion`/`collapsible`、`DatePicker`→`calendar`（仅面板，无输入框）、`Dialog`→`dialog`/`alert-dialog`、`Message`→`sonner`

剩下 **7 个只有 TDesign 有**，需要时没有别的选择：`Link`、`Steps`、`Cascader`、`InputNumber`、`Search`、`Tree`、`Transfer`。

### 验证页

`#/design-system/button` 是 Button 的验证页（`src/app/design-system/ButtonShowcase.tsx`），顶部有 token 桥接对照表 —— 左右色块一致即说明 TDesign 组件确实由 KONE token 驱动。新增组件验证页请沿用该文件的结构，挂到 `src/main.tsx` 的 hash 路由上。

`#/design-system/dialog` 是 Dialog 与 Message 的验证页（`src/app/design-system/DialogMessageShowcase.tsx`）：静态陈列用 `DialogCard` / `Message` 本体，按钮触发真实的 `Dialog` 与 `MessagePlugin`。

---

## TDesign 组件索引

25 个组件的一览。**「缺口」列标 ⚠ 的表示设计稿与 TDesign API 之间有需要设计确认的差异**，动手前先看 `tdesign-components.md` 对应小节。

| 组件 | TDesign 导入名 | 关键档位 | 缺口 |
| --- | --- | --- | --- |
| Button 按钮 | `Button` | 高 24/32/40 | ⚠ Figma 有 `Secondary` 主题，TDesign 无 |
| Divider 分割线 | `Divider` | 线宽 1px | — |
| Link 链接 | `Link` | 行高 20/22/24 | ⚠ warning/success 主题文字对比度不达标 |
| Dropdown 下拉菜单 | `Dropdown` | 面板宽 160，项高 28 | ⚠ 变体缺 success/warning 主题 |
| Breadcrumb 面包屑 | `Breadcrumb` | 行高 22 | ⚠ 可点击项用了 3.16:1 的 `text-placeholder` |
| Pagination 分页 | `Pagination` | 页码 24/32 | ⚠ simple 主题实现与设计稿不一致 |
| Steps 步骤条 | `Steps` | 序号圆 24，圆点 8 | ⚠ `sequence` 取值 Figma 写 `negative`，API 是 `reverse` |
| Tabs 选项卡 | `Tabs` | 项高 48/64 | ⚠ 缺 bottom/right 两个 placement |
| Cascader 级联选择 | `Cascader` | 高 24/32/40 | ⚠ 圆角全线 3px 而非 4px；clearable 无变体 |
| Checkbox 多选框 | `Checkbox` | 方框 16 | ⚠ 半选被绑在 checked=true 上 |
| DatePicker 日期选择 | `DatePicker` | 输入框 24/32/40，面板 280×278 | ⚠ 缺 quarter/week 模式与 status 校验态 |
| Input 输入框 | `Input` | 高 24/32/40 | ⚠ `status` 不是变体轴，只在 demo 里 |
| InputNumber 数字输入 | `InputNumber` | 高 24/32/40 | ⚠ 缺 `normal` 主题、`status`、`tips` |
| Radio 单选框 | `Radio` | 圆点 16，按钮 24/32/40 | ⚠ filled 按钮比 outline 矮 4px |
| Search 搜索 | 无独立组件 | **只有 32 一档** | ⚠ 无 size 轴；TDesign 侧需用 `Input`+`AutoComplete` |
| Select 选择器 | `Select` | 高 24/32/40 | ⚠ `clearable` 完全无设计 |
| Tooltip 文字提示 | `Tooltip`（mouse 用 `TooltipLite`） | 标准宽 172、箭头 10×6；mouse 12/20 | ⚠ mouse 六主题无法由单一 TDesign 组件覆盖 |
| Table 表格 | `Table` | 行高 36/46/54，分页区高 64 | ⚠ large 仍用 14/22；状态文字与表头对比度不达标 |
| Tree 树结构 | `Tree` | 行高 34，缩进 24/层 | ⚠ 轴名 `options`，API 是 `operations` |
| Slider 滑块 | `Slider` | 轨道 4，手柄 18 | ⚠ 焦点环 `#d9e1ff` 不在色阶内 |
| Switch 开关 | `Switch` | 轨道 26/32/39 | ⚠ medium 档滑块在两态下尺寸不同（15 vs 12） |
| Collapse 折叠面板 | `Collapse` | header 高 46 | ⚠ `borderless` 在设计稿里还改了内容区底色 |
| Transfer 穿梭框 | `Transfer` | 列表框宽 200，行高 32 | ⚠ 头部无 title，需显式关掉 |
| Dialog 对话框 | `Dialog`（静态陈列 `DialogCard`） | 宽 480（min 480 / max 960），圆角 8，内边距 32 | ⚠ 分割线变体与 `error` 主题名无 API 对应；全屏模式样式未补 |
| Message 全局提示 | `Message` / `MessagePlugin` | 高 48，圆角 6，图标 20 | ⚠ 阴影变量与节点实测不一致；`question` / `loading` 主题需确认用法 |
| Drawer 抽屉 | `Drawer`（样式类 `km-drawer`） | 宽 300 / 500 / 760，头部与底部各 56，蒙层 #141414 60% | 后补入（[45841:327431](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=45841-327431)），`tdesign-components.md` 尚无详细小节；首个使用方是设备查询的「设备筛选」抽屉，审批中心详情抽屉仍是手写实现、未迁移 |

### 跨组件通用规则

这几条从上述组件里归纳出来，**比单个组件的细节更重要**，因为它们决定了组件之间能不能对齐。

**控件高度只有三档：24 / 32 / 40**，对应 `size="small" | "medium" | "large"`。内边距与字号成套绑定，不要单独改一项：

| size | 高度 | 内边距 | 字号 |
| --- | --- | --- | --- |
| small | 24px | `px-8 py-2` | `text-foot12`（12/20） |
| medium | 32px | `px-8 py-5` | `text-body`（14/22） |
| large | 40px | `px-12 py-8` | `text-h7`（16/24） |

同一表单行内的控件必须同档。**唯一的例外是 Search，设计稿只给了 32px 一档** —— 它没法和 small 档的输入框并排，遇到就得回问设计。

**焦点态是全库统一的一条规则**，不用逐组件查：

```css
border: 1px solid var(--brand-color);        /* #1450f5 */
box-shadow: 0 0 0 2px var(--brand-color-focus); /* #d0dcfd */
```

> ⚠ **可交互基础组件的设计稿普遍没有 focus 变体。** Table 是复合数据展示组件，没有单一的表格级 focus 轴；其选择、排序、筛选、展开和分页应沿用对应子组件的键盘焦点。TDesign 组件自带焦点样式，**不要去覆盖掉它**；自建交互按上面规则补。这是已知设计缺口，需回流设计。

**圆角对照。** Figma 的圆角变量是 `radius-small` 2 / `radius-default` 4 / `radius-medium` 6 / `radius_full` 128：

| Figma | 本仓库工具类 |
| --- | --- |
| `radius-small` 2px | 无对应档，最近的是 `rounded-xs`（3px） |
| `radius-default` 4px | `rounded-sm` |
| `radius-medium` 6px | `rounded-md` |
| `radius_full` 128px | `rounded-full` |
| 裸值 3px（见下） | `rounded-xs` |

**多个组件在设计稿里用了未 token 化的裸值 3px**：Cascader 输入框与选项行、DatePicker 日历单元格、Tree 行的 normal/disabled 态、Pagination 的 jumper、Tabs normal 主题的内层、Transfer 列表行。代码侧用 `rounded-xs` 承接即可，但**这是设计稿越出档位的产物**，是否统一到 4px 待设计确认。Tree 更严重：同一元素 hover 态 4px、normal 态 3px，切换时圆角会跳 1px。

**阴影只有两级，但设计稿的值对不上。** Figma 变量 `Light/Shadow/2` 定义为 `0 4px 10px rgba(0,0,0,.1)`，而组件节点上实际渲染的是 `0 4px 5px rgba(0,0,0,.1)`（与本仓库 `shadow-popover` 一致）。**以节点实测为准，用 `shadow-popover`。** 另外 Slider 手柄用了三层硬编码阴影，是第三种阴影，不要照抄。

**状态色在文字、圆点和 TDesign 组件之间统一使用基础色。** `text-success` / `text-warning` / `text-error` 分别映射 `#1ed273` / `#f98600` / `#f51414`，与 `bg-surface-success` / `bg-surface-warning` / `bg-surface-alert` 及 TDesign 状态色保持一致。Link、Table 等组件直接沿用这套映射，不在调用处另行压深或硬编码。基础状态色在白底小字号文字上的对比度低于 WCAG AA，这是项目确认后的设计取舍；状态仍必须同时提供文字标签，不能只靠颜色传达。Breadcrumb 的非当前项使用 `text-color-placeholder`（3.16:1）同样需要结合业务可读性评估。

**Figma 轴名不能直接当 prop 名抄。** 已确认的不一致：

| Figma 轴名 | 真实 TDesign prop |
| --- | --- |
| `rang 双游标`（Slider） | `range`（Figma 拼写漏了 e） |
| `options 操作`（Tree） | `operations` |
| `checked 开关`（Switch） | `value`（Switch 没有 `checked` prop） |
| `sequence = negative`（Steps） | `sequence="reverse"` |
| `disable 禁用`（Cascader 选项集） | `disabled` |
| `border 边框`（Table） | `bordered` |
| `zebra 斑马线`（Table） | `stripe` |
| `row-select` + `checkProps`（Table） | `columns` 中的 `{ colKey: 'row-select', type: 'multiple' | 'single' }` |

还有几类轴是**作图辅助，不是 API，映射时整条丢弃**：`filled 填充`（表示有没有值，由 `value` 派生）、`item 数量` / `⬑subItem 二级数量`（穷举数据量）、`columns 列数` / `row 行数`（Table 的数据量）、`position 位置`（Radio 按钮组的相邻边框合并）、`linePlacement 条目位置`（Tree 用 `|` / `0` 编码祖先层级是否还有兄弟）、`state 状态`（CSS 伪类）。

**`danger` 与 `error` 混用是 TDesign 自身的 API 不一致**，不是设计稿的错，但会写错：`Button` / `Link` 用 `theme="danger"`，`DropdownOption` 用 `theme="error"`。

---

## shadcn/ui 存量组件

`src/app/components/ui/` 下有 46 个标准 shadcn/ui 组件，基于 Radix + `class-variance-authority`。新代码优先按[组件底座](#组件底座)的判定规则选型。

### 使用约定

- **优先复用现有组件**，不要新建功能重复的组件。已有：`button` `input` `select` `checkbox` `radio-group` `switch` `slider` `textarea` `label` `form`（表单）；`table` `pagination` `tabs` `accordion` `collapsible` `scroll-area`（数据展示）；`dialog` `alert-dialog` `sheet` `drawer` `popover` `hover-card` `tooltip` `dropdown-menu` `context-menu` `command`（浮层）；`card` `badge` `alert` `avatar` `separator` `skeleton` `progress` `chart` `sonner`（其他）。
- shadcn `tooltip` 是存量组件，已有调用点不主动迁移；**新业务 Tooltip 使用 TDesign 的 `Tooltip`**，跟随鼠标场景按 TDesign 规格评估 `TooltipLite` 的主题限制。
- 这些组件通过 `theme.css` 第 3 层桥接消费 token（`--primary` → `--brand-color` 等），**已自动符合设计系统**。不要在调用处用硬编码颜色覆盖它们。
- 扩展样式走 `className`（内部已用 `cn()` 合并）；新增变体请在组件的 `cva` 配置里加，而不是在调用处堆工具类。
- 组件默认字号是 `text-sm`（Tailwind 内置 14px），与 `text-body` 字号一致但行高略有差异。这是刻意保留的：改动 shadcn 内置尺度会影响全部 46 个组件。业务文本用 `text-body`。

### Button（shadcn 版，勿与 TDesign 的 Button 混淆）

变体：`default`（品牌蓝实心，主操作，每区域仅一个）、`secondary`（次要操作）、`outline`（描边）、`ghost`（弱化）、`link`（文字链接）、`destructive`（危险操作，如删除/批量下发）。

尺寸：`sm` h-8 / `default` h-9 / `lg` h-10 / `icon` 正方形。

> 与 TDesign 的 `Button` 是**两个不同组件**，API 与高度都不同（shadcn 默认 `h-9` = 36px，TDesign medium = 32px）。新代码用 TDesign 那个。

### Badge

变体：`default` `secondary` `destructive` `outline`。

Badge **不含 IoT 状态变体**。状态展示请用[无障碍](#无障碍)一节的「圆点 + 文字」写法。仓库中该模式已在 6 个以上文件重复出现（`ApprovalCenterContent` `TaskListContent` `MobileDeviceEventsContent` `EventsApp` `IoTMobileApp` `LiveDataContent`），且出现了同一语义两套颜色的漂移。**新代码统一用本文档的 token，并使用共享组件 `StatusLabel`（`src/app/components/StatusLabel.tsx`，`tone` 取 success / warning / error / brand / neutral）；旧调用点不主动迁移。** 用户管理页的状态列是首个使用方，表格里的状态列都应是这种「圆点 + 文字」，与审批中心一致。

### Card

组合式：`Card` / `CardHeader` / `CardTitle` / `CardDescription` / `CardAction` / `CardContent` / `CardFooter`。内边距 `px-6`、间距 `gap-6` 已内建，不要另加 padding 覆盖。

---

## 导航框架

页面骨架组件在 `src/app/components/layout/`，设计来源 Figma **IOT Delivery**（file key `L9e70WefNsB8pSYKB5U7zh`）：

| 组件 | 说明 | Figma 节点 |
| --- | --- | --- |
| `AppShell` | 顶栏 + 侧栏 + 内容区的完整骨架 | [11739-31415](https://www.figma.com/design/L9e70WefNsB8pSYKB5U7zh/IOT-Delivery?node-id=11739-31415) |
| `TopNav` | 顶部菜单导航 | [11272-31411](https://www.figma.com/design/L9e70WefNsB8pSYKB5U7zh/IOT-Delivery?node-id=11272-31411) |
| `SideNav` | 侧边主导航 | [5813-33085](https://www.figma.com/design/L9e70WefNsB8pSYKB5U7zh/IOT-Delivery?node-id=5813-33085) |
| `getSideNavItems(lang, visible?)` | 侧边导航 IA 数据（中英双语 + 权限裁剪） | 同上 |

**新建页面一律用 `AppShell` 包裹，不要自己拼顶栏和侧栏。**

```tsx
import { AppShell, getSideNavItems } from "@/app/components/layout";
import { WorkbenchIcon, LanguageIcon, NotificationIcon } from "@/app/components/icons/nav-icons";

<AppShell
  navItems={getSideNavItems(language, user.sidebarPermissions)}
  activeId={activeId}
  onNavSelect={setActiveId}
  user={{ name: user.name }}
  onUserClick={openAccountMenu}
  actions={[
    { id: "workbench", label: "工作台", icon: <WorkbenchIcon /> },
    { id: "lang", label: "语言切换", icon: <LanguageIcon />, dividerBefore: true },
    { id: "notify", label: "通知", icon: <NotificationIcon />, badgeCount: unread },
  ]}
>
  {page}
</AppShell>
```

### 尺寸规范

均取自设计稿实测，改动前请先与设计确认。

| 部位 | 规格 |
| --- | --- |
| 顶栏高度 | 56px（`h-14`），左右内边距 24px |
| 顶栏标题 | `text-h6 font-semibold`，与 logo 间距 24px |
| 顶栏操作按钮 | 32×32，圆角 4px（`rounded-sm`），图标 16×16，间距 8px |
| 头像 | 32×32 圆形，底色 `bg-brand-focus` |
| 侧栏展开宽度 | 232px |
| 侧栏折叠宽度 | 56px（`w-14`）|
| 导航行 | 最小高 36px，`px-4 py-[7px]`，圆角 6px（`rounded-md`），行间距 4px |
| 一级图标 | 20×20，与文字间距 8px |
| 二级项缩进 | `pl-11`（44px = 16 + 20 + 8），使二级文字与一级文字左对齐 |
| 侧栏底部操作条 | 56px，上描边 `border-stroke` |

### 状态与配色

| 状态 | 样式 |
| --- | --- |
| 一级叶子项 / 二级项（默认） | `text-secondary-text` |
| 分组标题 | `text-primary-text`（比叶子项更重，因为它是分类而非目标） |
| hover | `bg-container-hover` + `text-primary-text` |
| 选中 | `bg-brand-light` + `text-link` |
| 聚焦 | `outline-2 outline-brand-base`，侧栏内用 `outline-offset-[-2px]` 避免被裁切 |

所有导航配色已实测对比度，正文项 5.41–18.42:1、图标 5.56–6.01:1，全部达 AA。

**计数徽标底色用 `bg-error-active`（#c41010）而非 `bg-surface-alert`（#f51414）。** 徽标文字是 12px 白字，在 `#f51414` 上仅 4.21:1 未达 AA，`#c41010` 为 6.12:1。两者都是官方色阶内的值，视觉差异极小。

### 无障碍约定

组件已内建以下行为，扩展时不要破坏：

- 侧栏为 `<nav aria-label>`；页面出现多个导航时必须给不同的 `ariaLabel`。
- 选中项带 `aria-current="page"`。
- 分组标题带 `aria-expanded` 与 `aria-controls`，指向子项列表的 `id`。
- 折叠态下文字被隐藏，此时自动补 `aria-label` 与 `title`（悬浮提示）。
- 顶栏按钮的未读数并入 `aria-label`（如「通知，3 条未读」），徽标本身 `aria-hidden`，避免屏幕阅读器把数字读成孤立内容。
- 图标一律 `aria-hidden`，可读名称由外层按钮的 `aria-label` 提供。

### 折叠行为

折叠态只显示一级图标。**点击分组标题会先展开侧栏再展开该分组** —— 折叠时二级项不可见，若只切换分组状态用户看不到任何反馈。

`AppShell` 的折叠状态支持受控与非受控：传 `collapsed` + `onToggleCollapsed` 由外部托管，否则组件内部自持。传 `collapsible={false}` 可隐藏底部开关。

### 导航图标

导航图标在 `src/app/components/icons/nav-icons.tsx`，由 Figma 导出后转换：所有 `fill` 改为 `currentColor`，颜色由父级文字色继承。

> Figma 源文件里同类导航图标混用了 `#141414` / `#676a72` / `#727272` 三种硬编码色，转为 `currentColor` 后这类漂移自动消失。这也是「图标不写死颜色」这条规则的实际收益。

新增导航图标请沿用该文件的写法（`viewBox` 保留原始尺寸、`aria-hidden`、`currentColor`），不要往业务组件里内联路径数据。

### 页面导航控件（返回 / 前进 / 刷新）

顶栏**默认不带**这组控件 —— 它在 Figma 中是可选元素（`headerMenu` 的 `propValue` 开关）。传入 `pageControls` 才渲染：

```tsx
<TopNav
  pageControls={isTaskProgressPage ? {
    onBack: () => {},
    onForward: () => {},
    onRefresh: () => {},
  } : undefined}
/>
```

规格：控件组前有一条 37px 竖分隔线，三个 32×32 圆角 4px 按钮，间距 8px，图标 16×16。

**省略某个回调即为禁用态**（`text-disabled`），对应设计稿中「前进」置灰 `#959595` 的表现。目前任务进度视图与设备总览的「设备筛选」视图启用这组控件；二级视图用它返回上级，不再在页面内另放面包屑。

### 移动端框架（< 768px）

设计来源 IOT Delivery [7103:36620](https://www.figma.com/design/L9e70WefNsB8pSYKB5U7zh/IOT-Delivery?node-id=7103-36620)（模板 8895:32007），组件在 `src/app/components/mobile/MobileShell.tsx`，入口 `IoTMobileApp.tsx`。**新建移动端页面用 `MobileShell` + `MobilePageTitle`（+ 可选 `MobileBottomBar`），不要自己拼顶栏。**

| 区域 | 规格 |
| --- | --- |
| 顶栏 `MobileTopNav` | 56 高，KONE 标识 + `text-h7 font-semibold` 产品名；右侧 32 圆形 `bg-brand-light` 按钮（账号 / 菜单，展开时菜单变关闭）；点 Logo 回首页 |
| 菜单 `MobileNavMenu` | 顶栏下方整屏白面板：中英文分段切换 + 一级导航项（`px-5 py-3`、图标 20、`text-h7 font-medium`，选中 `bg-brand-light`） |
| 页面标题 `MobilePageTitle` | 50 高白底，二级页带 20 返回箭头，标题 `text-h6 font-semibold`，可带右侧操作 |
| 底部操作 `MobileBottomBar` | 白底 `p-4`、间距 8，TDesign Button `size="large" block`；圆角 6 / 16 Semibold 由 `.km-mobile-actions` 补齐，次要按钮（品牌浅底）用 `.km-mobile-button--secondary` |
| 底部面板 | TDesign `Drawer placement="bottom"` + `.km-mobile-sheet`（顶部圆角 12、标题居中、24 关闭） |

设计稿里的状态栏、浏览器地址栏与底部工具栏是手机浏览器外壳，不实现。

### 已知差异

- **`EventsApp.tsx` 的导航已迁移完成**，顶栏与侧栏均使用本组件。但该文件仍有大量其他内联样式（硬编码色值、失效字体类），属于独立的技术债，见「迁移现有代码」一节。
- **侧栏折叠宽度 64px 不是 Figma 规格。** 设计稿只提供 `state=expand` 变体，64px 沿用迁移前的既有实现以避免视觉变动，需与设计确认。
- **`--text-color-secondary` 存在跨文件冲突。** Design Token China 为 `#676a72`，IOT Delivery 文件里是 `#727272`。以 Design Token China 为准（它是 token 的权威来源），代码用 `#676a72`。
- **`getSideNavItems` 的标签与现有 Demo 不完全一致。** 该函数返回设计稿文案（如 `SIM Mgmt`、`系统配置`），而 `EventsApp` 沿用自己 `translations` 里的历史文案（`IoT Card Mgmt`、`系统设置`）。新页面用前者；改动 `EventsApp` 的文案需产品确认。
- **导航项 id 是路由契约。** `EventsApp` 用 `activeSidebarItem` 做页面分发，`iot` / `iot-card-query` / `iot-card-statistics` 等 id 不可重命名。
- Figma EN 变体的「运维管理」分组标题未翻译，`getSideNavItems` 按其余分组的命名习惯补为 `O&M Management`；`EventsApp` 中该项在中英文下均显示「运维管理」，与迁移前一致。
- **从 `layout/` 导入时注意桶文件。** 只用到个别组件时请直接从 `layout/SideNav`、`layout/TopNav` 导入 —— 走 `layout/index.ts` 会把 `AppShell`、`nav-items` 一并带进产物。

---

## 迁移现有代码

存量代码大量使用 Figma 导出样式。**不要主动做大规模重写** —— 6800 行业务组件全量替换风险过高。原则：

- 修改某段代码时，**顺手把那段**的硬编码值换成 token。
- 新代码一律用 token。
- `EventsApp.tsx`（2964 行，67 处内联 SVG）是最大的技术债聚集地，重构需单独立项。

对照替换表：

| 硬编码写法 | 替换为 |
| --- | --- |
| `text-[#141414]` | `text-primary-text` |
| `text-[#676a72]` | `text-secondary-text` |
| `text-[#8f9195]` | `text-placeholder` |
| `text-[#1450f5]` | `text-link` 或 `text-brand` |
| `bg-[#f5f7fa]` | `bg-page` 或 `bg-secondarycontainer` |
| `bg-[#ffffff]` | `bg-container` |
| `bg-[#f2f4f7]` | `bg-component` |
| `border-[#dfe1e8]` | `border-stroke` |
| `border-[#c8cad0]` | `border-component-border` |
| `text-[#1ed273]`（文字） | `text-success` |
| `bg-[#1ed273]`（圆点） | `bg-surface-success` |
| `text-[#f51414]`（文字） | `text-error` |
| `bg-[#f51414]`（圆点） | `bg-surface-alert` |
| `text-[#f98600]`（文字） | `text-warning` |
| `text-[14px] leading-[22px]` | `text-body` |
| `text-[12px] leading-[20px]` | `text-foot12` |
| `text-[16px] leading-[24px]` | `text-h7` |
| `font-['PingFang_SC:Regular',sans-serif]` | 删除（body 已继承） |
| `font-['PingFang_SC:Medium',sans-serif]` | 换为 `font-medium` |
| `font-['PingFang_SC:Semibold',sans-serif]` | 换为 `font-semibold` |
| `rounded-[4px]` / `[6px]` / `[8px]` | `rounded-sm` / `rounded-md` / `rounded-lg` |
| `shadow-[0_4px_5px_rgba(0,0,0,0.1)]` | `shadow-popover` |
| `shadow-[0_8px_10px_rgba(0,0,0,0.1)]` | `shadow-modal` |

---

## 暗色模式

`theme.css` 中有 `.dark` 覆盖，通过 `next-themes` 切换。

> ⚠ **暗色值不是 Figma 官方 token**，是本仓库的推导值。Figma 颜色页存在暗色模式（`--bg-color-container` 暗色下为 `#141414`），但完整映射尚未从设计侧取得。**上线暗色模式前必须与设计确认。**

只要业务代码使用语义 token 而非硬编码 hex，暗色模式即自动生效 —— 这是坚持用 token 的直接收益。
