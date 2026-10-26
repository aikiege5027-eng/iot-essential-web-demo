---
inclusion: auto
name: TDesign 组件规格
description: 25 个 TDesign 底层组件（Button、Divider、Link、Dropdown、Breadcrumb、Pagination、Steps、Tabs、Input、InputNumber、Search、Select、Cascader、DatePicker、Checkbox、Radio、Switch、Slider、Tooltip、Table、Tree、Transfer、Collapse、Dialog、Message）的变体轴、尺寸档位、各状态配色、TDesign React API 映射与设计稿缺口。在实现或修改使用 tdesign-react 组件的界面、表单、弹层时加载。
---

# TDesign 组件规格

设计来源：Figma **China Design system for web**（file key `b5cc1y3jzLmOQkpa8vz5AX`）。该文件是 TDesign 的中文设计稿 —— 每个组件页 header 都带 TDesign logo 与 Vue / Vue-Next / React 文档链接，所以下面的 API 映射可信度较高。

代码侧：`tdesign-react` 1.18.3，视觉由 `src/styles/tdesign-bridge.css` 把 KONE token 灌给 `--td-*`。**组件不需要也不应该在调用处覆盖颜色。**

**先读 `design-system.md` 的[跨组件通用规则](./design-system.md)**：三档高度 24/32/40、统一焦点态、圆角对照、轴名不能当 prop 抄。那些规则适用于有独立交互表面的组件；Table 是复合数据展示组件，行高与内嵌控件规则见本文件 Table 小节。

本文只记录**与 Figma 稿有关的规格与差异**。完整 API 请查 TDesign 官方文档。

---

## 通用

### Button 按钮

[Figma 30382-113576](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=30382-113576) · `Button`（组件集 `22709:32356`）

> 按钮用于开启一个闭环的操作任务，如"删除"对象、"购买"商品等。

**变体轴（8 轴）**

| Figma 轴 | 取值 | prop |
| --- | --- | --- |
| `variant 类型` | `base 基础` / `outline 描边按钮` / `dash 虚边按钮` / `text 文字按钮` / `ghost 幽灵按钮` | `variant`（`base`/`outline`/`dashed`/`text`） |
| `size 尺寸` | `small 小尺寸` / `medium 中尺寸` / `large 大尺寸` | `size` |
| `theme 主题样式` | `default 默认` / `primary 主要` / `Secondary 次要` / `danger 危险` | `theme` |
| `shape 形状` | `rectangle 矩形` / `round 圆角矩形` / `square 方形` / `circle 圆形` | `shape` |
| `icon 图标` + `⬑icon type` | `prefixIcon` / `suffixIcon` / `singleIcon` | `icon`（前置）/ `suffix`（后置） |
| `state 状态` | `normal` / `hover` / `active` | CSS 伪类 |
| `disabled 禁用` | `false` / `true` | `disabled` |

**尺寸**

| size | 高 | 左右内边距 | 字号 |
| --- | --- | --- | --- |
| small | 24 | 8 | `text-foot12` 12/20 |
| medium | 32 | 16 | `text-body` 14/22 |
| large | 40 | 24 | `text-h7` 16/24 |

圆角 4px（`rounded-sm`）；`shape="round"` 改为 128px（`rounded-full`）。图标 16×16，与文字间距 8px。`square` / `circle` 为等宽高纯图标按钮。

**缺口**

- ⚠ **`theme` 双向不匹配。** Figma 有 `Secondary 次要`（约 90 个变体），TDesign 没有 `secondary`；反过来 Figma 缺 `warning` 与 `success`。落地只能用 `variant="outline"` 近似或补自定义 CSS，**需设计确认定义后再实现，不要猜**。注意 Figma 里这个值首字母大写，与其余小写取值不一致。
- ⚠ **`ghost` 在 Figma 是 `variant` 的取值，在 TDesign 是独立布尔 prop。** 落地要拆成 `ghost` + 某个 `variant`（从稿子看深色底上呈描边样式，推测 `variant="outline" ghost`），组合方式需确认。
- `loading` 与 `block` 没做成变体轴（示例页有独立展示区），TDesign 两个 prop 都有，直接用。
- `round 圆角矩形` 实际是 128px 胶囊，`rectangle 矩形` 才是 4px。中文文案容易误读。
- 同页另有 **`Button_hero`**（`30945:4124`，`Size = Medium | Big | Extra Big` × `State`，高 48/64/72，白圆圈内只放右箭头，每页仅用一个）。**这是 KONE 品牌层扩展，不在 TDesign Button 覆盖范围内**，要用得自建。

### Divider 分割线

[Figma 30445-122549](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=30445-122549) · `Divider`（组件集 `24830:36245`，10 变体）

> 分割线是一个呈线状的轻量化组件，起到分割、组织、细化的作用。

**变体轴**：`布局` = `horizontal 水平分割线` / `vertical 垂直分割线` → `layout`；`虚线` → `dashed`；`文字分割线` → 由 `children` 有无决定；`文字对齐` = `none` / `left` / `center` / `right` → `align`。

组合是稀疏的：垂直线只存在于无文字下，文字分割线只存在于水平下。

**尺寸**：线宽 1px，色 `border-stroke`（#dfe1e8）。带文字时整体高 22，`gap 8`，左段线固定 40px、右段 `flex-1`。垂直线组件集里高 40，示例页实际用 12 —— **高度由使用方决定，设计稿没给推荐值**。

**缺口**：`文字对齐=none` 在 TDesign 里不存在（`align` 默认 `center`），它只是 Figma 用来表示「本变体无文字」，直接丢弃。`文字分割线` 与 `文字对齐` 两轴要压成「传不传 children + align」。

### Link 链接

[Figma 69043-216748](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=69043-216748) · `Link`（组件集 `69043:216869`，360 变体）

**变体轴（7 轴）**：`size` = small/medium/large；`theme` = `primary 主要` / `default 默认` / `danger 危险` / `warning 警告` / `success 成功`（**五值与 TDesign 一一对应，是全库映射最干净的一个**）；`state` = normal/hover/active；`prefixIcon` / `suffixIcon` / `underline` / `disabled` 均为布尔直传。

**尺寸**：行高 20（12/20）/ 22（14/22）/ 24（16/24），无内边距，图标 16×16、`gap 8`。

**缺口**

- ⚠ **对比度不达标。** `theme="warning"` 是 #f98600（白底 2.49:1）、`theme="success"` 是 #1ed273（2.00:1），按 TDesign 默认渲染都不满足 AA。用压深后的 `text-warning` / `text-success`，或只用于 ≥18px 大字。
- ⚠ **TDesign 的 `hover?: 'color' | 'underline' | 'none'` 在 Figma 里没有对应轴。** TDesign 默认是「hover 才出现下划线」，而 Figma 的 `underline` 是静态布尔，看起来是常显下划线。两种行为需与设计确认。
- Figma 该页 header 描述写的是「按照时间顺序或倒序规则的展示信息内容」—— 那是 Timeline 的定义，**误复制到了 Link 页**，需报设计修正。
- `success` 色阶变量挂在 `dimension/success/*` 而非 `Color/success/*`，与其他状态色命名不一致，自动生成 token 时会漏。

---

## 导航

### Dropdown 下拉菜单

[Figma 24901-36226](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=24901-36226) · `Dropdown`

该页有 4 个组件集：面板 `29659:91099`、一级项 `29800:94521`、二级项 `29805:122979`、基础项 `29376:88569`。

> 用于承载过多的操作集合，通过下拉拓展的形式，收纳更多的操作。

**变体轴**

面板：`item 数量` 1–8、`icon 图标`、`children 子集` —— 全部由 `options` 数组决定，无对应 prop。

菜单项：`icon` → `options[].prefixIcon`；`theme` = `default 默认` / `error 错误` → `options[].theme`；`state` = normal/hover/active/**select 选中**；`disabled` / `divider` / `children` → 同名字段；`⬑expand 展开`、`⬑items 数量`（仅偶数 2/4/6/8）为作图辅助。

**尺寸**：面板宽 **160 固定**，`padding 6`、项间 `gap 2`、圆角 6px（`rounded-md`）、描边 0.5px `#c8cad0`、`shadow-popover`。面板高 = 40/70/100/…/250（item 1→8），即每项 28 + 间距 2 + 上下 padding 12。项 `px-8 py-3`、高 28、圆角 4px、文字 14/22、超长省略。带分割线的项高 35。

**缺口**

- ⚠ **`theme` 轴只做了 default 与 error，但示例页明确画了四个主题**（默认/错误/成功/告警，`30337:105666`–`105669`）。TDesign 的 `DropdownOption.theme` 也是四值。**success 与 warning 画了但没做进变体**，直接照组件集实现会缺档位。
- ⚠ **`state=select 选中` 在 TDesign 没有对应字段**（Dropdown 是操作菜单，不是选择器）。而且 `⬑expand 展开=true` 的变体全部只出现在 `select` 下，暗示「选中」其实表示「因含子菜单而展开高亮」。**两种语义疑似被混用，需设计确认。**
- 面板描边 **0.5px** 非整数像素，1x 屏会模糊或消失。TDesign 默认无 border 只有 shadow。需确认是否保留。
- 一级项与二级项是两个独立组件集但轴与尺寸完全相同，**代码侧用同一个 `DropdownOption` 递归即可，不要拆两个组件**。
- 超过 8 项如何滚动没有变体。TDesign 靠 `maxHeight`（默认 300）处理，8 项面板已高 250，第 9 项就接近边界。

### Breadcrumb 面包屑

[Figma 43652-307932](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=43652-307932) · `Breadcrumb`

组件集：整体 `43657:306177`（24 变体）、单项 `43657:306409`（16 变体）。

**变体轴**：整体 `item 项目数量` 2–7、`divider 分割` = `“>“` / `“/”` → `separator`、`icon 图标` → `BreadcrumbItem.icon`。单项 `State状态` = `Normal` / `Hover` / `Current 当前`、`Type类型` = `Basic基础` / `icon on带图标` / `Dropdown下拉` / `Customised自定义`、`Disable禁用` → `disabled`。

**尺寸**：行高 22，项与分隔符 `gap 4`，分隔符图标 16×16，文字 14/22。每增加一级宽度 +80（项 56 + 分隔符 16 + gap 4×2）。

**缺口**

- ⚠ **可点击项的对比度不达标。** 非当前项用 `text-color-placeholder` #8f9195（**3.16:1**），当前项用 `text-color-primary` #141414。可交互链接用了不合格对比度，需设计确认压深。
- ⚠ `Type类型=Dropdown下拉` 在 TDesign Breadcrumb 里没有 prop，示例页是手动把 `Dropdown` 实例叠上去的。**这是「组合」不是「变体」。**
- ⚠ `Type类型=Customised自定义` 语义不明（宽度比 basic 多 41px），**待确认**。
- `State状态=Current 当前` 不是 prop —— TDesign 自动把最后一项渲染为当前态，这个轴要丢弃。
- 没有单级变体（`item 项目数量` 从 2 起），但一级菜单直达页真实存在。
- 文案截断（`maxItemWidth` / `maxWidth`）示例页有、组件集无规格：省略号位置、是否调用 [Tooltip](#tooltip-文字提示) 都未定义。独立 Tooltip 已有视觉规格，不代表 Breadcrumb 的触发条件已确定。
- 组件名有错别字：`item/breadcrumb 面板屑` 应为「面包屑」。

### Pagination 分页

[Figma 45562-332659](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=45562-332659) · `Pagination`（组件集 `45617:338270`，48 变体）

**变体轴（6 轴）**：`theme 风格` = `default 默认` / `simple 极简`；`size 尺寸` = medium/small；`totalContent 总条数内容` → `totalContent`；`pagesize 条数设置` → `showPageSize`；`jumper 跳转` → `showJumper`；`disable 禁用` → `disabled`。

**尺寸**

| | medium | small |
| --- | --- | --- |
| 整体行高 | 64 | 56 |
| 页码按钮 | 32×32 | 24×24 |
| 条数选择器 | 112×32 | 96×24 |
| jumper | 160×32 | 144×24 |
| 文案 | 14/22 | 12/20 |

左右内边距 24，三组间 `gap 16`，页码按钮间 `gap 8`，圆角 4px。页码结构固定为「‹ 1 2 3 4 5 … 11 ›」，相当于 `maxPageBtn≈7`。

**缺口**

- ⚠ **simple 主题的跳页控件实现不一致。** Figma 极简态恒定渲染「跳至 [n]/20 页」输入框且不受 `jumper` 轴控制，而 TDesign 的 simple 渲染的是**页码下拉 select**。这是实现层的真实差异。
- 页码数量硬编码在变体里，`maxPageBtn` / `foldedMaxPageBtn` / `pageSizeOptions` / `showFirstAndLastPageBtn` 无对应档位。
- jumper 容器与内部 input 圆角是裸值 3px，页码按钮走 4px token。落地取哪档需明确（`rounded-xs` vs `rounded-sm`）。
- small 档字号降到 12/20，TDesign small 只改高度不改字号，需确认。

### Steps 步骤条

[Figma 43752-306570](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=43752-306570) · `Steps` / `StepItem`（组件集 `43755:319933`，50 变体）

**变体轴**：`item 数量` 2–6（数据量）；`layout 布局` = `horizontal 横向` / `vertical 纵向`；`theme 主题` = `default 默认` / `dot 不带序号`；`icon 图标` → `StepItem.icon`；`sequence 纵向布局顺序` = `positive 正向` / `negative 反向`。

单步组件集（`.master/{horizontal|vertical}/{default|dot|icon}`）：`state 状态` = `finish 完成` / `process 进行中` / `default 默认` / `error 错误` → `StepItem.status`；`last 最后项`、`start 开始项` 为布局辅助。

**尺寸**：default 主题序号圆 24×24（序号 16/24 Semibold 白字）；标题 16/24 Semibold，描述 14/22 `pl-40`（24+16，与标题左对齐）；连接线高 **2px** 色 `#c8cad0`。dot 主题圆点 8×8。横向单步宽 316（末项 154），纵向 280×84。

**缺口**

- ⚠ **`sequence` 取值名要改。** Figma 写 `negative 反向`，TDesign 的值是 **`reverse`**。照抄会写错。
- ⚠ **文案与实现都对不上的 warning 态。** demo 页文案写「当前流程还可能出现失败或告警状态」，但变体只有 `error`，TDesign `status` 也没有 warning。是否补 warning 需设计确认。
- `separator` 无档位：TDesign 支持 `line`/`dashed`/`arrow`，Figma 只有实线 2px。
- `icon=true` 时 `theme` 被置 `n/a`，即 Figma 把自定义图标当第三种 theme；TDesign 里 `theme` 与 `StepItem.icon` 是**正交**的，属结构性差异。
- `readonly` 无变体（TDesign 有）。
- `start 开始项` 只在横向 dot 存在，纵向 dot 没有 —— 首项连接线处理不一致，疑似遗漏。

### Tabs 选项卡

[Figma 35336-295539](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=35336-295539) · `Tabs` / `TabPanel`

**theme 不是变体轴，是两个并列组件集**：`normalTabs 选项卡-默认主题`（`35336:308101`）→ `theme="normal"`；`cardTabs 选项卡-卡片主题`（`35336:296666`）→ `theme="card"`。

**变体轴（两集相同，7 轴）**：`placement 位置` = `top 顶部` / `left 左 (only 8items)`；`size 尺寸` = medium/large；`items 数量` 2–8；`icon 图标`；`add 添加选项卡` → `addable`；`⬑removable 删除` → `TabPanel.removable`；`chevron 滑动`。

**尺寸**：项高 medium **48** / large **64**。normal 选中项：外层 `p-8` + 底部 **3px** `brand` 下划线，内层 `px-8 py-5` 圆角 3px。card 选中项：`px-16 py-13`，白底，右侧 1px `border-stroke` 分隔；未选中底色 `bg-component` #f2f4f7。滑动按钮 medium 40×48 / large 48×64。左侧布局宽 160 / 200。

**缺口**

- ⚠ **`placement` 缺 `bottom` 与 `right`**（TDesign 四向都支持）。有意思的是滑动按钮子组件反而备齐了四向，说明设计过但没做进组件集。
- ⚠ `left` 位置被硬限制为 8 项（轴名直接写了 `only 8items`），2–7 项的左侧布局不存在。
- `icon` 无 prop 可映射 —— `TabPanel` 只有 `label`（ReactNode），约定用 `label={<><Icon/>文本</>}`。
- `chevron 滑动` 无 prop：TDesign 溢出自动出箭头，只有 `scrollPosition` 可调，与布尔开关不是一回事。
- `add` 与 `removable` 在 Figma 里强绑定，TDesign 里两者独立。「可删不可增」「可增不可删」两种组合无稿。
- `dragSort`（拖拽排序）无变体，TDesign 有。
- 文案漂移：normal 项写 `select 选中`，card 项写 `select 选择`。两套主题的禁用态基准状态也不同（normal 只与选中组合，card 只与默认组合）。

---

## 输入

> 下面 6 个输入类组件的**内边距与字号规律完全一致**，已抽到 `design-system.md` 的三档尺寸表，不再逐个重复。焦点态也统一（`#1450f5` 描边 + `#d0dcfd` 2px 外环）。

### Input 输入框

[Figma 24929-36227](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=24929-36227) · `Input`（组件集 `25535:53727`）

> 用于承载用户信息录入的文本框，常用于表单、对话框等场景。

**变体轴**：`size` = small/medium/large；`state 状态` = `normal 默认` / `filled 填充` / `hover 悬浮` / `focus 聚集`；`prefixIcon` / `suffixIcon` / `clearable 清空` / `tips 提示` / `disabled` 均为 `off|on` 布尔。

**同页另有 4 个组件集**：`inputPassword 密码输入框`（`27133:84519`，多一个 `browse 浏览` 轴）→ `<Input type="password">`；`addonInput 标签输入框`（`49596:470375`）→ `InputAdornment prepend/append`；`inputGroup 组合输入框`（`26742:74878`，`separate 分离` + `item 数量` 2–5）→ `Input.Group separate`；`textarea 多行文本框`（`26786:74773`，`autosize` + `maxcharacter`）→ `Textarea`。

**尺寸**：高 24/32/40，图标 16×16、`gap 8`，圆角 4px。**`tips=on` 时整体高度 +20**（提示文字 12/20）。

**状态**

| 状态 | 描边 | 底色 | 文字 |
| --- | --- | --- | --- |
| default | `border-component-border` #c8cad0 | `bg-container` | `text-placeholder` |
| filled | 同上 | 同上 | `text-primary-text` |
| hover | `--brand-color-hover` #4373f7 | 白 | primary |
| focus | `--brand-color` + 2px #d0dcfd 外环 | 白 | primary |
| disabled | #c8cad0 | `bg-component-disabled` | `text-disabled` |
| error | #f51414 | 白 | 提示文字 #f51414 |
| warning | #f98600 | 白 | 提示文字 #f98600 |
| success | **硬编码 #2ba471** | 白 | 提示文字 #1ed273 |

**缺口**

- ⚠ **`status` 不是变体轴。** success/warning/error 只在 demo 区通过实例覆盖（`27023:84660`–`84662`），组件集里查不到。要取校验态颜色必须去 demo 节点。
- ⚠ **success 描边是未绑变量的硬编码 #2ba471**，与该 token 的 #1ed273 不是一个值。且 token 名拼错：`Color/Text/text_sucess`（少一个 c）。
- `readonly` 完全缺失（TDesign 有）。
- `borderless` 不是变体轴，demo 里的无边框输入框是散装 frame，不在组件集内。
- 轴值写法不统一：这里是 `focus 聚集`，InputNumber/Select/Cascader 是 `focus 聚焦`；布尔用 `off/on`，其他组件用 `false/true`。

### InputNumber 数字输入框

[Figma 42459-300256](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=42459-300256) · `InputNumber`（组件集 `42467:306736`）

**变体轴**：`theme 主题` = `row 双侧调整` / `column 右侧调整`；`size` = `small 小` / `medium 中` / `large 大`；`state` = normal/hover/`focus 聚焦`；`disabled`；`filled 填充`。

**尺寸**

`theme="row"`（左右各一方按钮 + 中间输入框，`gap 4`）：高 24/32/40，按钮 24/32/40 见方，图标 14/16/18，整体宽 120/144/168。

`theme="column"`（右侧步进器）：高 24/32/40，整体宽 88/96/120，步进器 24×10 / 28×14 / 32×19。**normal 态不显示步进器，hover/focus 才出现** —— 实现时默认就要留出右侧空间，否则 hover 会挤压文本。

**缺口**

- ⚠ **`status` 与 `tips` 完全缺失**，连 demo 都没有（Input 至少有 demo）。TDesign 两者都支持。
- ⚠ TDesign `theme` 的第三个取值 **`normal`（无加减按钮）Figma 没画**。
- 加减按钮是独立方块（`gap 4` 分离），与 TDesign 默认的贴合式左右按钮视觉不同，需确认是否覆盖默认样式。
- `readonly` / `align` / `autoWidth` / `decimalPlaces` / `largeNumber` 无视觉表达。

### Search 搜索

[Figma 72086-226133](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=72086-226133) · **TDesign 无独立 Search 组件**，PC 端等价实现是 `Input` + `prefixIcon`/`suffixIcon`，联想能力用 `AutoComplete`。

**变体轴（9 轴）**：`borderless 无边框` → `Input.borderless`；`prefix 前缀` / `suffix 后缀`（搜索按钮位置）；`fill 填充`；`state` = normal/hover/`focus 聚集`；`clearable清空空` → `clearable`；`multiline 批量搜索`；`popup 联想` → `AutoComplete.options`；`disabled`。

配套：`item/searchBox`（`78092:236261`）搜索按钮、`item/searchPopup`（`78092:236130`）联想面板（`mind 联想词` / `history 历史记录`）。

**尺寸**：容器 240×**32**，`pl-4 pr-8 py-4`、`gap 8`、圆角 4px。搜索按钮高 24、`px-4`、**圆角 2px（硬编码）**、三形态宽 24/36/56。联想面板宽 240、`p-6`、圆角 6px、`shadow-popover`，条目 `px-8 py-3`、`gap 2`，匹配片段文字 `#1450f5`。`multiline` focus 态展开到 240×120。

**缺口**

- ⚠ **只有 32px 一档，没有 size 轴** —— 输入类组件里唯一一个。要和 small 档输入框并排就没有依据，**这是本组件最需要设计确认的缺口**。
- ⚠ 圆角三个值：有边框 4px（token）、无边框 **3px 硬编码**、按钮 **2px 硬编码**（不在圆角档位表内）。
- `prefix` 与 `suffix` 是两个独立布尔而非枚举，理论上存在「两个搜索按钮」的非法组合，实现时要自行约束。
- `item/searchBox` 的 `state` 轴含 `disabled`，同时又有独立 `disabled` 布尔轴，**两者重复**。
- `multiline` 展开动画与最大高度未定义。`status` / `tips` / `readonly` 全无。
- 轴名 `clearable清空空` 有错别字且中英无空格。

### Select 选择器

[Figma 30450-105768](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=30450-105768) · `Select` / `Option`（组件集 `30477:106261`）

**变体轴**：`size`；`state` = normal/hover/`focus 聚焦`；`expand 展开` → `popupVisible`；`filled`；`multiple 多选`；`prefixIcon`；`disabled`。**`focus` 只与 `expand=true` 成对出现。**

选项组件集：`item/selectOption/{s,m,l}`、`item/multiOption/{s,m,l}` —— `state` = normal/hover/active/`select 选中`、`disabled`、`divider 分割线`。菜单容器 `item/menu option/*`：`item` = 1…10（行数）。

**尺寸**：输入框高 24/32/40，宽示例 240/280/328，文字与图标 `gap 8`。选项行 `px-8 py-3`、圆角 4px、高 24/28/32（带分割线 +7）。菜单面板宽 240/280/320、`p-6`、`gap 2`、圆角 6px、描边 **0.5px**、`shadow-popover`。

**选项状态**：normal 白底 + primary 文字；hover/active `bg-component` #f2f4f7；`select 选中` `bg-brand-light` #f3f6fe + `text-link` #1450f5；disabled `text-disabled`。

**缺口**

- ⚠ **`clearable` 完全没有设计。** 同文件的 Input 有 `clearable 清空` 轴，Select 一个变体都没有。清空态无依据。
- ⚠ **`status` / `tips` 缺失**，变体与 demo 都没有。
- ⚠ **收起箭头是 `16.919 × 15.379` 而非 16×16** —— Figma 里被缩放过的实例，三档尺寸下都是这个值。落地改回 16×16，否则半像素模糊。**建议报设计。**
- `focus` 与 `expand` 被绑死，但「键盘 Tab 聚焦而未展开」是真实状态，缺这一态。
- `divider 分割线` 挂在**单个选项**上，而 TDesign 是 `OptionGroup divider`。实现时要把「某条选项后带分割线」翻译成分组结构。
- 面板阴影：节点实测 `0 4px 5px`，绑定的变量 `Light/Shadow/2` 是 `0 4px 10px`，**两者不一致**，以实测为准。
- `filterable` / `loading` / `minCollapsedNum`（多选标签折叠）/ `readonly` / `borderless` / `creatable` 无定义。**多选态标签溢出策略尤其没有依据。**

### Cascader 级联选择器

[Figma 46236-328290](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=46236-328290) · `Cascader`

两个组件集：输入框 `46236:331768`、菜单 `46236:332165`；选项级组件集 12 个（`item/selectOption|multipleOption/父级|子级/{s,m,l}`）。

**变体轴**：输入框 `size` / `state`（normal/hover/`focus 聚焦`）/ `filled` / `⬑clearable 清空` / `multiple` / `prefixIcon` / `disabled`。菜单 `size` / `multiple` / `item`（列数 1–4）。选项 `state` = normal/hover/active/`select 选中`、`disable 禁用`、`divider`、`indeterminate 半选`。

多选态内嵌 `Tag` 实例（`dark` / `default` / `square` / `closable`）→ `tagProps` / `collapsedItems`。

**尺寸**：输入框高 24/32/40，宽 240/280/320。菜单单列宽 208/212/216，`p-6`、`gap 2`，最小内容高 130/160/200；选项行 `px-8 py-3`、高 24/28/32、右侧 `chevron-right` 16×16。多列横向拼接（medium：1 列 212、4 列 848）。面板外层圆角 4px、`Light/Shadow/2`。

**缺口**

- ⚠ **`⬑clearable 清空` 轴只有 `false` 一个取值 —— 清空态一个变体都没画。这是本组件最大的缺口。**
- ⚠ **输入框与选项行圆角是硬编码 3px，没走 4px token**，而同文件 Input/Select/InputNumber 都是 4px。**Cascader 与其他输入类组件圆角不一致**，且面板外层用了 4px，内外也不统一。
- ⚠ **异步加载子级的 loading 态完全没有设计** —— 这是 Cascader 的典型场景。
- 收起箭头同样是 `16.919 × 15.379`（与 Select 同一个被缩放实例）。
- 「父级 / 子级」做成两套独立组件集而非一个轴，同一个选项行样式在 12 个组件集里重复定义，容易漂移。
- `item` 轴在菜单上只到 4 列，底层 `item/cascader-popup/*` 支持到 10。**上层封装比底层窄**，超过 4 级需自行拼接。
- `multiple=true` 时标签溢出/折叠态无设计（`minCollapsedNum` / `collapsedItems`）。
- `status` / `tips` / `readonly` / `borderless` / `filterable` 全缺。选项集轴名 `disable` 少了 `d`。

### DatePicker 日期选择器

[Figma 30345-106262](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=30345-106262) · `DatePicker` / `DateRangePicker`

组件集：输入框 `36058:296433`（72 变体）、面板 `37035:305208`（30 变体）、单元格 `36186:297669`（date）/ `36597:297694`（month）/ `36641:297725`（year）。

**变体轴**

输入框：`mode 类型` = `date 日期` / `dateRange 日期区间` / `datetimesRange 日期时间区间`；`size`；`state` = normal/hover/`focus 聚焦`；`filled`；`disabled`。

面板：`mode 类型` = `date` / `year` / `month` / `dateTimes` / `datetimesRange` / `multipleDate 多日期`；`footer 页脚插槽` → `presets`；`⬑placement 页脚定位` = bottom/top/left/right → `presetsPlacement`（**四值逐一对齐**）。

单元格（date，8 轴）：`now 此刻` / `hover` / `active 选中激活` / `active-start 选中开始` / `highlight` / `active-end 选中结束` / `disabled` → `disableDate` / `additional 额外`（上下月补位日）。

**尺寸**

输入框高 24/32/40，宽 208/240/280（区间态 320/360/416）。

面板**无 size 轴**（Figma 原文标注：「面板无尺寸大小」）：

| mode | 无 footer |
| --- | --- |
| date | 280 × 278 |
| year / month | 280 × 224 |
| dateTimes | 496 × 278 |
| datetimesRange | 560 × 278 |
| multipleDate | 280 × 308 |

底/顶 footer **+48 高**，左/右 footer **+120 宽**。

面板内部：header 高 44（两个 80×32 Select + 三个 24×24 控制按钮）；日期区左右内边距 16；行高 30；**单元格 24×24，水平步进 32**。面板圆角 6px、`Light/Shadow/2`。

**单元格状态**

| 状态 | 描边 | 填充 | 文字 |
| --- | --- | --- | --- |
| normal | — | — | `text-primary-text` |
| hover | `brand` 1px | — | primary |
| active 选中 | — | `brand` #1450f5 | 白 |
| now 此刻 | — | `bg-brand-light` #f3f6fe | `text-link` |
| disabled | #c8cad0 1px | `bg-component-disabled` | `text-disabled` |
| additional 补位日 | — | — | `text-disabled` |
| highlight 区间中间 | — | `bg-brand-light`，**左右各外扩 8px** 铺满间隙 | primary |
| active-start / -end | — | 格内 `brand` 实心 + 单侧 light 延伸条（外端圆角 3px） | **rgba(255,255,255,.9)** |

单元格圆角统一 **3px**（写死）。

**缺口**

- ⚠ **`quarter 季度` 模式完全缺失**（TDesign `mode` 支持 year/quarter/month/week/date）。
- ⚠ **`week 周` 模式不是变体** —— 周选择器以三个独立普通 frame 存在于 demo 区（`97918:157513` 等），不在组件集里，不会随组件更新。
- ⚠ **输入框与面板的 mode 取值集合不一致**：输入框只有 3 值，面板有 6 值。year/month/dateTimes/multipleDate 的输入框形态只能去 demo 反推。**这是本组件最大的规格断层。**
- ⚠ **没有 `status`（error/warning/success）与 `tips`** —— 表单校验失败时日期输入框长什么样，设计稿没给，而这在实际表单里必然会用到。
- month / year 单元格没有区间三轴，`mode="month"` + 区间无规格。
- 面板阴影 `Light/Shadow/2` 是 `0 4px 10px`，与仓库 `shadow-popover`（`0 4px 5px`）**模糊半径不同**，需明确取哪个。
- 区间起止的文字色是 `rgba(255,255,255,.9)`，而单选中态是 token 纯白。同一语义两种写法。
- `clearable` / `allowInput` / `firstDayOfWeek` / `format` 无变体。
- `.item/rangeCell/*` 有 s/m/l 三档（高 20/24/32），但**面板本身无尺寸轴**，这三档没有对应面板来消费，用途不明，需问设计。

**项目内用法：批量操作「执行时间」**

批量系统升级 / 批量配置更新的执行时间统一用 `src/app/components/ExecutionTimePicker.tsx`（TDesign `DatePicker` + `enableTimePicker`，对应面板 `mode = dateTimes`），**不要再手写日历 + 时分秒列**。规则：精确到分、值格式 `YYYY-MM-DD HH:mm`；分钟只有 00 / 30（`timePickerProps.steps = [1, 30]`）；最早可选 = 当前时间 + 30 分钟向上取整到整点/半点，更早的日期整天置灰、当天更早的小时与分钟隐藏。面板底部只有「确定」，没有「此刻」。提交时补 `:00` 秒位以兼容审批中心的 `YYYY-MM-DD HH:mm:ss`。

---

## 选择控件

### Checkbox 多选框

[Figma 43626-307824](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=43626-307824) · `Checkbox` / `CheckboxGroup`

组件集：`43606:305674`（含文字，7 变体）、`43606:305652`（纯方框）、`43606:305696`（组，`item 数量` 2–8）。

**变体轴**：`checked 已选`、`state 状态` = normal/hover、`disable 禁用`、`indeterminate 半选`。**无 size 轴**（与 TDesign 一致）。

实际只有 7 个有效组合，不是笛卡尔积。

**尺寸**：方框 **16×16**，1px 描边，圆角 4px。半选横杠 **8×2px** 居中。整行高 22，方框与文字 `gap 8`，方框容器 `padding-top: 3px` 让 16px 方框在 22px 行高里视觉居中。组内项步进 82px（项宽 66 + 间距 16）。

**状态**：unchecked 描边 `#c8cad0` 白底；hover 描边 `brand`；checked/indeterminate 描边+填充 `brand` + 白色对勾/横杠；disabled 描边 `#c8cad0` + `bg-component-disabled` + `text-disabled`。

**缺口**

- ⚠ **半选被强绑在 `checked=true` 上。** Figma 里 `indeterminate=true` 只出现在 checked 变体上，而 TDesign 的 `indeterminate` 与 `checked` 是独立 prop（前者会盖掉后者的视觉）。**按图实现容易写出「必须先 checked 才能半选」的错误状态机。**
- checked 态被 flatten 成 SVG，无法从变量层确认对勾与底色用的哪个 token，需设计侧拆图层或补标注。
- 未选 normal 态填充是硬编码 `rgba(255,255,255,0.9)`，同组件的 hover/disabled 却走 token，外层内联的那份又用纯白 `bg-container`。**同一语义三种写法。**
- 轴名在两个组件集间不一致：外层 `disable 禁用` + `normal默认`（无空格），内层 `disabled 禁用` + `normal 默认`（有空格）。
- CheckboxGroup 只有项数轴，**没有横排/竖排方向**，也没有换行规则；`max` 超限后的禁用视觉未出图。

### Radio 单选框

[Figma 43606-304677](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=43606-304677) · `Radio` / `RadioGroup` / `RadioButton`

组件集：圆点式 `43606:305593`、纯圆点 `43606:305577`、组 `43606:305609`、**按钮式单个** `43606:304792`（72 变体）、按钮组 `43606:304883`。

**变体轴**

圆点式：`checked 已选` / `state` = normal/hover / `disable 禁用`。**无 size 轴** —— size 只作用于按钮式，与 TDesign（`RadioGroup.size`）一致。

按钮式：`variants 类型` = `outline描边` / `default-filled默认填充` / `primary-filled品牌填充` → **`RadioGroup.variant` 三值逐字对齐，是全库映射最干净的一条**；`state` = normal/hover/`select已选`；`disabled`；`size` = small/medium/large；`position 位置` = `left to selected` / `right to seleted` / `/`。

**尺寸**：圆点外圈 16×16、内点 8×8，与文字 `gap 8`，行高 22。

| size | outline 高 | filled 高 |
| --- | --- | --- |
| small | 24 | **20** |
| medium | 32 | **28** |
| large | 40 | **36** |

outline 单按钮 `px-16 py-5`、**圆角 0**、1px 描边。filled 单按钮 `px-16 py-3`、圆角 2px（`radius-small`）。filled 按钮组容器 `padding 2`、`gap 4`、圆角 4px、底色 `component-stroke` #dfe1e8。

**按钮状态**

| 变体 / 状态 | 描边 | 填充 | 文字 |
| --- | --- | --- | --- |
| outline / 已选 | `brand` | 白 | `brand` |
| filled / 未选 | — | `component-stroke` #dfe1e8 | `text-secondary-text` |
| default-filled / 已选 | — | 白 | primary |
| primary-filled / 已选 | — | `brand` | 白 |

**缺口**

- ⚠ **filled 档位比 outline 矮 4px**（20/28/36 vs 24/32/40）。TDesign 三种 variant 在同 size 下高度一致。这是设计稿内部的不一致（filled 无 1px 描边 + 更小 padding），**落地必须二选一，需设计确认是否有意**。
- ⚠ **filled 未选态底色与组容器底色完全相同**（都是 #dfe1e8），靠 4px gap 分隔，视觉上是「整块灰底 + 白色选中块」。TDesign default-filled 未选项通常是透明/容器底，与默认实现不一致，需确认。
- ⚠ `position 位置` **没有 TDesign 对应 prop** —— 它是为 outline 变体处理相邻边框合并的作图辅助轴，代码里由 CSS 相邻选择器解决。做 Code Connect 必须显式丢弃，否则会生成无意义的 prop。取值文案还有拼写错误：`right to seleted`。
- outline 单按钮圆角为 0，**按钮组首尾的圆角没有单独变体**，而 TDesign 会给首尾加圆角。首尾规格缺失。
- `allowUncheck` / `RadioGroup.readonly` 无变体。

**项目内用法**：顶栏的「通力 / 仟帆」平台快捷切换（`PlatformQuickSwitch.tsx`）用 `variant="default-filled" size="small"` 的按钮组，对应 Figma `radioButton-Group` 43622:307383。选中项是白底 + primary 文字、圆角 2px，容器是 `component-stroke` 灰底。
**补丁**：TDesign 的白色选中底板（`.t-radio-group__bg-block`）靠 JS 量位置，在会被父级重渲染的位置（如顶栏）会停在旧位置或宽度为 0，选中项就没有白底。`tdesign-patches.css` 里改为直接给选中项上色并隐藏底板，视觉与设计稿一致，只是没有滑动动画。

### Switch 开关

[Figma 45757-378235](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=45757-378235) · `Switch`（组件集 `45757:378284`，30 变体）

**变体轴**：`size 尺寸` = small/medium/large；`checked 开关` → **`value`**；`loading 加载`；`disabled`；`label标签` = `none 无` / `icon 图标` / `text 文字` → `label`。

30 = 3 size × 2 checked × (3 label + loading + disabled)，即 **loading / disabled 只出了 `label=none` 一档**。

**尺寸**

| size | 轨道（none） | 轨道（text/icon） | 滑块 |
| --- | --- | --- | --- |
| small | 26×16 | 30×16 | 12 |
| medium | 32×20 | 40×20 | **15（开）/ 12（关）** |
| large | 39×24 | 43×24 | 18 |

loading 图标 14×14 叠在滑块上。文字标签 `text-foot12` 白字。

**状态**：unchecked 轨道 `#c8cad0`；checked `brand` #1450f5；checked+disabled 与 checked+loading 都是 `brand-color-disabled` #a1b9fb。

**缺口**

- ⚠ **medium 档滑块在两态下尺寸不同：15px（开）vs 12px（关）**，small 与 large 两态都相同。**这几乎确定是设计稿失误** —— 切换时滑块会「变大」。建议统一取 15px 并回问设计。
- ⚠ **轨道圆角三档全部写死 `border-radius: 12px`，不是胶囊。** small 高 16 时 12px 大于半高（8px 才全圆），large 高 24 时 12px 恰好等于半高。三档同一数值说明是按 medium 目测填的。**实现统一用 `rounded-full`。**
- ⚠ **`checked 开关` 与 prop 名不同** —— TDesign Switch 没有 `checked` prop，是 `value` / `defaultValue`。照抄轴名会写错。
- loading 与 disabled 的轨道底色都是 `brand-color-disabled`，checked 下两态**视觉不可区分**（只差一个转圈图标）。
- loading / disabled 只在 `label=none` 下出图，带标签时的这两态未定义（6 个组合缺失）。
- `label=icon` 用哪个图标未标注。`customValue` / `beforeChange` 无变体。
- ⚠ **带文字标签时，未选中态是 `#c8cad0` 底 + 白字，对比度很低（约 1.7:1）**，文字几乎看不清；选中态（品牌蓝底白字）没有这个问题。文字用来表达状态时，不要只靠它，必要时在旁边放一个独立的可读标签。


### Slider 滑块

[Figma 46618-337304](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=46618-337304) · `Slider`（组件集 `46777:353245`，32 变体；手柄 `46633:337720`）

**变体轴**：`layout 布局` = `horizontal 水平` / `vertical 垂直`；`rang 双游标` → **`range`**；`inputnumber 数字输入框` → `inputNumberProps`；`marks 刻度` → `marks`；`disabled`。完整笛卡尔积。手柄另有 `state` = normal/hover/active。

**尺寸**：轨道高 **4px** 圆角 `rounded-full`；垂直轨道宽 4、长 320。手柄 **18×18**（`padding 2` + 内圆 14），全圆。刻度线 1×6px 色 `#dfe1e8`，刻度文字 `text-foot12` 在轨道上方 24px。InputNumber 宽 68、高 32、圆角 4px，与轨道 `gap 24`。整体宽：水平单游标 320，带输入框 412（单）/ 504（双）。**无 size 轴**（与 TDesign 一致）。

**状态**：rail `#dfe1e8`；track `brand` #1450f5；手柄外环 `brand`、内圆 normal 白 / hover `#f2f4f7` / active `#dfe1e8`；disabled 外环 `#a1b9fb` + 内圆 `#f2f4f7`。

**缺口**

- ⚠ **active 态的焦点环颜色 `#d9e1ff` 是硬编码，且不在官方色阶里。** brand 的 focus 值是 `#d0dcfd`，light 是 `#f3f6fe` —— #d9e1ff 是第三个值。**落地前必须问设计：笔误还是新增档位。**
- ⚠ **手柄阴影是三层硬编码**（`0 1px 5px rgba(0,0,0,.05)`, `0 4px 2.5px rgba(0,0,0,.08)`, `0 2px 2px rgba(0,0,0,.12)`），与「阴影只有两级」的约定冲突。这是第三种阴影，需归并或补 token，**不要照抄**。
- ⚠ 轴名 `rang` 拼写漏了 e，prop 是 `range`。
- 数值气泡不属于 Slider 组件变体，只在 demo 区以外部 `Tooltip` 实例摆放。独立 Tooltip 的外观与 API 见 [Tooltip 文字提示](#tooltip-文字提示)；Slider 自身的 `showTooltip` / `tooltipProps` 集成规则（显示时机、位置、内容格式）**仍没有正式出图**。
- `marks` 只有 0/20/40/60/80/100 六档均分，非均匀刻度、自定义标签文案都没出样式，而 TDesign 支持对象形式的任意位置与 ReactNode。
- 刻度文字用 `text-placeholder`（3.16:1）**不满足正文 AA**。若刻度值是关键信息，改用 `text-secondary-text`。
- `step` / `min` / `max` / `label` / `showStep` 无视觉表达。

---

## 数据展示

### Tooltip 文字提示

[Figma 44907-322227](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=44907-322227) · `Tooltip`（组件集 `44917:322249`，84 变体）

> 用于文字提示的气泡框。

**变体轴（3 轴）**

| Figma 轴 | 取值 | TDesign React 1.18.3 |
| --- | --- | --- |
| `placement 位置` | 12 个标准方位：top/bottom/left/right 各含 left/center/right 或 top/center/bottom；另有 `n/a`、`mouse 跟随鼠标` | 标准方位 → `Tooltip.placement`；`*-center` 分别映射为 `top` / `bottom` / `left` / `right`；`mouse` 仅 `TooltipLite.placement` 支持；`n/a` 无对应值 |
| `showArrow 是否带箭头` | true / false | `showArrow` |
| `theme 主题` | `default 默认` / `primary 品牌色` / `success 成功` / `warning 警告` / `danger 危险` / `light 亮色` | `Tooltip.theme` 六值逐一对应；注意这里与 Button/Link 一样用 `danger`，不是 DropdownOption 的 `error` |

变体不是完整笛卡尔积：每个主题下，`showArrow=true` 覆盖 12 个标准方位；`showArrow=false` 只画了 `placement=n/a` 与 `mouse`。共 `6 × (12 + 2) = 84` 个变体。

**尺寸与排版**

| 类型 | 面板 | 内边距 | 文字 | 圆角 | 箭头 |
| --- | --- | --- | --- | --- | --- |
| 标准 | 固定宽 172；两行示例内容高 52 | `px-8 py-4` | `text-body` 14/22，自动换行 | 6px（`rounded-md`） | 10×6；上/下方位总高 58，左/右方位总宽 178 |
| 无箭头 | 172×52（两行示例） | `px-8 py-4` | `text-body` 14/22 | 6px | — |
| 跟随鼠标 | 内容自适应，示例 140×20 | `px-4`，无垂直内边距 | `text-foot12` 12/20，单行不换行 | 4px（`rounded-sm`） | — |

箭头填充与面板背景同色。所有变体均带阴影；节点实测为 `0 4px 5px rgba(0,0,0,.1)`，代码使用 `shadow-popover`。Figma 绑定的 `Light/Shadow/2` 元数据仍写 `0 4px 10px rgba(0,0,0,.1)`，属于全库已知的阴影定义冲突，以节点实测为准。

**主题配色**

| theme | 背景 | 文字与箭头 |
| --- | --- | --- |
| default | `--text-color-primary` #141414 | `--text-color-white` #ffffff |
| primary | `--brand-color-light` #f3f6fe | `--brand-color` #1450f5 |
| success | `--success-color-light` #dbfbea | `--success-color` #1ed273 |
| warning | `--warning-color-light` #fff1db | `--warning-color` #f98600 |
| danger | `--error-color-light` #fef3f3 | `--error-color` #f51414 |
| light | `--bg-color-container` #ffffff | `--text-color-primary` #141414 |

这些颜色已由 `tdesign-bridge.css` 的 brand / success / warning / error 色阶桥接给 TDesign，调用处不要再覆盖。success / warning / danger 的 14px 状态文字在对应浅底上仍未达到 AA；这是项目统一使用基础状态色的既定映射，但 Tooltip 不能成为传达关键状态的唯一方式。

**行为与可访问性**

Figma 只定义浮层外观，没有 `trigger`、`delay`、`duration`、受控显隐、挂载节点或交互内容的变体。普通提示默认使用 `Tooltip`（默认 `trigger="hover"`）；触发元素仍须有独立的可访问名称，键盘用户需要同等信息时应同时提供 focus 可达方式。内容只放简短辅助文本，不放按钮、链接等可交互元素，也不要把操作名称或错误原因仅藏在 Tooltip 中。

**缺口**

- ⚠ **`placement=n/a` 不是 TDesign API。** 它只是 Figma 在无箭头变体里表示「不画方位」的作图值；TDesign 的 `showArrow` 与 `placement` 正交，即使 `showArrow={false}` 仍必须保留真实方位。映射时丢弃 `n/a`，由使用场景选择 placement。
- ⚠ **跟随鼠标无法由一个组件覆盖全部主题。** `Tooltip` 有六个主题但不支持 `placement="mouse"`；`TooltipLite` 支持 mouse，却只有 `default | light` 两个主题。设计稿为 mouse 画齐六主题，primary / success / warning / danger 没有一一对应的无覆盖实现，需设计或组件层确认，不要在调用处硬改颜色。
- ⚠ **无箭头只画了 `placement=n/a`。** 设计稿没有「12 个标准方位 × 无箭头」的组合，不能据此认为这些组合不允许；TDesign API 实际支持。
- 标准 Tooltip 固定宽 172 并按两行示例展示，跟随鼠标则单行自适应；更短文案是否收缩、超长文案的最大宽度与截断策略均未定义。
- 所有示例都是静态展开态，hover/focus 的显示延迟、隐藏延迟、移动端触发方式和屏幕边缘自动翻转没有视觉规格，沿用 TDesign 默认行为。

### Table 表格

[Figma 46868-353120](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=46868-353120) · `Table`（row 行模式组件集 `46879:371097`；column 列模式组件集 `46879:370298`）

> 两套组件集是 Figma 为方便增删行列而做的两种编辑结构，代码侧都映射到同一个 TDesign `Table`。设计稿备注要求超出预设行列数时 detach；这不是运行时约束。

**变体轴与 API 映射**

| Figma | 取值 | TDesign React 1.18.3 |
| --- | --- | --- |
| `size 尺寸`（仅 column 模式） | small / medium / large | `size`；row 模式固定为 medium |
| `border 边框` | false / true | `bordered`；false 仍保留横向行分隔线 |
| `zebra 斑马线`（仅 row 模式） | false / true | `stripe` |
| `row-select 选中行` + `↳checkProps 选中选项` | false；true + checkbox/radio | 在 `columns` 增加 `{ colKey: 'row-select', type: 'multiple' | 'single' }`；受控值用 `selectedRowKeys` / `onSelectChange` |
| `expand 下拉` / `row-expand 展开行` | false / true | `expandedRow` + `expandedRowKeys` / `onExpandChange`；图标与整行点击分别用 `expandIcon` / `expandOnRowClick` |
| `fix 固定` + `↳direction 方向` | false；true + left/right | `columns[].fixed = 'left' | 'right'` |
| `align 对齐` | left / center / right | `columns[].align` |
| `sortIcon` + `asc 升序` / `des 降序` | 布尔组合 | `columns[].sorter` / `sortType` + `sort` / `onSortChange`；升降序图标状态由 `sort` 派生 |
| `filter 筛选` | false / true | `columns[].filter` + `filterValue` / `onFilterChange` |
| `fixedrow` | false / true | **无一对一 prop**；内部滚动固定表头用 `height` / `maxHeight`（必要时 `fixedRows`），页面吸顶用 `headerAffixedTop` |
| `columns 列数` / `row 行数` | 4/6/8；6/8/10/20 | 作图辅助轴，代码由 `columns` / `data` 数量自然决定，整条丢弃 |

单元格子组件还把 `prefixIcon`、`text`、`operations`、`button`、`state`、`tag` 做成布尔轴；代码侧通过 `columns[].title` / `cell` / `render` 组合，不是 Table 顶层 prop。分页固定引用同页 `Pagination` 组件，代码侧用 `pagination`；不传即不显示。

**尺寸**

| size | 表头/数据行高 | 单元格内边距 | 字号 |
| --- | --- | --- | --- |
| small | **36px** | 8px | 12/20（`text-foot12`） |
| medium | **46px** | 16px × 12px | 14/22（`text-body`） |
| large | **54px** | 24px × 16px | **14/22**（`text-body`） |

两套主组件示例宽均为 1200px，不是固定 API 宽度。column 模式固定画 1 行表头 + 12 行数据；总高分别为 532/662/766，其中底部分页恒高 64。row 模式固定 medium，表格总高公式为 `(数据行数 + 1) × 46 + 64`，与 6/8/10/20 行变体的 386/478/570/1030 一致。文字单行省略；操作链接间距 24px；图标、checkbox、radio 基础尺寸 16px。

**视觉与状态**

- 表头和内容默认均为 `bg-container`；单元格分隔线为 1px `border-stroke`。`bordered=false` 只画横线，`bordered=true` 再加纵线与外框。斑马行用 `bg-secondarycontainer` #f5f7fa。
- 表头文字使用 `text-placeholder` #8f9195，内容文字使用 `text-primary-text` #141414；表头与内容都支持左/中/右对齐。
- 状态单元格为 6px 圆点 + 4px 间距 + 14/22 标签，四态为「健康 / 异常 / 警告 / 失效」。实现时圆点分别用 success/error/warning/中性填充，文字必须改用 `text-success` / `text-error` / `text-warning` / 中性文字，不能照抄 Figma 的高饱和填充色做文字色。
- 排序、筛选、展开、选择、Tag、Button、Link 都是嵌入已有底层组件；其 hover/focus/disabled 应沿用各自组件规格，不在 Table 上另造一套。

**缺口**

- ⚠ **large 行仍用 14/22，而全库 large 控件通常用 16/24。** Figma 只增加 padding，不放大字号；TDesign `size="large"` 的实际视觉需在实现页对照后决定是否覆盖，不能直接套通用三档字号表。
- ⚠ **状态文字直接用了填充色**：success #1ed273（2.00:1）、warning #f98600（2.49:1）、error #f51414（4.21:1），正文均不满足 AA；必须使用仓库压深文字 token。状态圆点保留鲜艳色并 `aria-hidden="true"`，文字标签不可省略。
- ⚠ **表头文字用 `text-placeholder`，白底仅 3.16:1。** 表头是理解数据的关键信息，应改为至少 `text-secondary-text`，需设计确认。
- ⚠ **固定表头语义不清。** `fixedrow` 挂在每个 header cell 上，只描述视觉状态，无法判断应映射内部滚动固定、冻结行还是页面吸顶；必须按页面滚动容器选 `height` / `maxHeight`、`fixedRows` 或 `headerAffixedTop`。
- ⚠ **外层 wrapper 另有硬编码 `#dcdcdc` / `#e7e7e7` 描边**，与单元格已绑定的 `component-stroke` #dfe1e8 不一致。代码只用 token，不复制这两种散值。
- `row-select=true` 只表示出现选择列，没有已选中行的背景变体；Table 的 `hover`、选中行、loading、empty、可编辑单元格、拖拽与列宽调整也都没有正式变体。
- row/column 两套主组件表达同一运行时组件，不能变成两个 React 封装。分页在 Figma 母版里恒定存在，但 TDesign `pagination` 可选。
- 轴名有数据质量问题：`des 降序` 应为 `desc`；border 内容单元格的 `zebra` 取值异常混入 `ß`。两者都不能直译成 prop。

### Tree 树结构

[Figma 49473-473352](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=49473-473352) · `Tree`（组件集 `50051:530276`，48 变体）

行组件按层级拆成 8 个组件集：`item/normal/{1level,2level,3level,base}` + `item/line/{...}`。

**变体轴**：`checkable 多选`；`item 数量` 1–8（数据量）；`line 连接线`；`options 操作` → **`operations`**。

行：`checkable` / `activable 高亮` / `hover 悬浮` / `children 子集` / `expanded 展开` / `⬑subItem 二级数量` / `options` / `disabled`。连接线行另有 `linePlacement 条目位置`，用 `|`（该层级还有后续兄弟，画竖线）与 `0`（没有，不画）编码。

**尺寸**：行宽 320（示例），`py-4`，**行高 34**。行内 item 块 `pl-4 pr-8 py-2`、内容高 26。复选框 16×16，与文字 `gap 8`；带操作时 content 与 extra `gap 4`。操作图标 16×16（`edit`、`bulletpoint`）。**缩进 24px / 层**（从连接线定位 `-36/-60/-84` 反推，无显式标注）。连接线横段 32×1px、竖段 17×1px。展开后整块高度步进 34（与行高一致）。

**状态**（作用于内层 item 块，左侧缩进区不着色）

| 状态 | 填充 | 文字 | 圆角 |
| --- | --- | --- | --- |
| normal | `bg-container` | primary | **3px 写死** |
| hover | `bg-component` #f2f4f7 | primary | 4px token |
| actived 高亮 | `bg-brand-light` #f3f6fe | `text-link` #1450f5 | 4px token |
| disabled | `bg-container` | `text-disabled` | **3px 写死** |

高亮态与本仓库导航选中态（`bg-brand-light` + `text-link`，6.01:1 达 AA）**完全一致，可直接复用**。

**缺口**

- ⚠ **层级深度做成了 4 个独立组件集而非一个 prop。** 4 层以上没有母版，改缩进要同步 8 个组件集。**这是本组件最大的结构性问题。**
- ⚠ **轴名 `options` 与真实 prop `operations` 不同名。**
- ⚠ **`line` 与 `options` 无法同时为 true** —— 48 个变体里两者组合缺失（`item/line/*` 本身没有 `options` 轴）。连接线树 + 行内操作按钮的样式未定义。
- ⚠ **同一元素圆角随状态跳变**：hover/actived 4px，normal/disabled 与全部连接线行 3px，切换时跳 1px。
- ⚠ **`hover 悬浮` 语义错位**：Figma 的 `hover=true` 是「正在悬浮」，TDesign 的 `hover={true}` 是「允许悬浮」的开关。
- `linePlacement` 是纯作图辅助轴（各层级取值集合还不同：base 8 值、3level 4 值、2level 2 值、1level 无），映射时整条丢弃。
- 异步加载（`load` / `lazy`）无变体，demo 区有实例但 loading 行、展开转圈样式没进组件集。
- 操作图标未标注来源库，也没有 hover/disabled 的图标色规格（disabled 变体里图标仍是原色）。
- `icon` / `checkStrictly` / `expandMutex` / `expandLevel` / `valueMode` / `filter` / `draggable` 无变体。

### Transfer 穿梭框

[Figma 46709-352686](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=46709-352686) · `Transfer`（组件集 `48890:525315`，18 变体）

> 以直观的方式在两栏中移动选项元素。左栏是"源"，右边是"目标"。

**变体轴**：`with tree 带树结构` → `tree`；`search 搜索` → `search`；`pagination 分页` → `pagination`；`source empty` / `target empty` → `empty`。控制器 `.Control`（`48883:528251`）：`State` = `Default` / `leftChecked` / `rightChecked` / `Checked`。

**尺寸**：整体 448×239（基础）。左右列表框各宽 **200**，与控制器间距 12。列表框 1px `border-component-border`、圆角 6px、白底、`py-8`。头部计数行高 32（`px-16 py-5`，16×16 全选 Checkbox + 「0项」14/22），下方 1px 分割线。列表区 `px-8`、行间 `gap 4`；单行 `px-8 py-5`、高 32、**圆角 3px**。中央控制器 24×64（两个 24×24 按钮，纵向 `gap 16`）。

变体高度：无分页 239 / 带分页 281 / 带搜索 272 / 带树 335 / 树+搜索 368。

**缺口**

- ⚠ **头部只有「N项」计数，没有列表标题**，而 TDesign 默认渲染 `title` + 计数。要复刻 Figma 得显式传 `title={null}` 或自定义，否则视觉不一致。
- **无 `direction` 变体轴** —— 「右移」「左移」只以 demo 实例存在，`direction='both'` 的双向态只体现在 `.Control` 的 4 个 State 上。
- **`showCheckAll` 无对应轴** —— 全选 checkbox 恒定存在，没有关掉它的变体。
- `tree` 与 `pagination` 从不共存（TDesign 树形穿梭框同样不支持分页，行为一致，但设计稿没显式标注该约束）。
- 圆角三档混用：外框 6px、checkbox 4px、**列表行 3px 裸值**。
- 列表行有独立 `active点击` 态，TDesign 只区分 hover / checked / disabled。
- `targetDraggable` / `targetSort` / `footer` 无变体。

### Collapse 折叠面板

[Figma 27782-86747](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=27782-86747) · `Collapse` / `CollapsePanel`（组件集 `74387:227326`，24 变体）

**变体轴**：`item 数量` = 2/4/6/8；`placement 图标位置` = `left` / `right` / `none`；`borderless 无边框`。子组件：`expand 展开` → `Collapse.value`；`disabled` → `CollapsePanel.disabled`。

**尺寸**：header 高 **46**（`px-16 py-12` + 22 行高），图标与标题 `gap 8`，展开图标 16×16，白底，标题 14/22 primary。内容区 `pl-40`（16+16+8，与标题左对齐）`pr-16 py-12`，文字 14/22 `text-secondary-text`。

**border 主题**：header 与内容区各带 1px 底部 `border-stroke`，内容区底色 **`bg-component` #f2f4f7**。
**borderless 主题**：无描边，内容区底色改为**白色**。

**缺口**

- ⚠ **`placement=none` 是伪值。** TDesign 的 `expandIconPlacement` 只有 `left | right`，「无图标」要靠 `expandIcon={false}`。Figma 把两个 prop 压成一个三值轴，**直译会写出不存在的枚举值**。
- ⚠ **`borderless` 在 Figma 里同时改了内容区底色**（#f2f4f7 → 白），而 TDesign 的 `borderless` 只去边框不改底色。**这是需要额外样式覆盖的实质差异。**
- 内容区底色 #f2f4f7 本身是 China 主题的定制，TDesign 默认是透明/白底。
- `expandMutex`（手风琴）/ `expandOnRowClick` / `defaultExpandAll` 只有 demo 实例，没有变体轴。
- ⚠ **该页还有一个非 TDesign 的 `Accordion 手风琴` 组件**（`27449:2417`，`State = Collapsed | Expanded`，宽 640，浅蓝底）。页面说明写明它「用于网站静态信息区如常见问题模块，背景浅蓝，仅可用在白底上；交互式内容请用卡片/列表自建」。**与 TDesign Collapse 不是同一个东西，不要混用。**

---

## 反馈

### Dialog 对话框

[Figma 41952-300048](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=41952-300048) · `Dialog 对话框`（20 个标准变体 + 全屏两种）· 关闭按钮 `item/closeBtn`（`42005:300066`）

> 对话框是一种临时窗口，通常在不想中断整体任务流程，但又需要为用户展示信息或获得用户响应时使用。

**变体轴（4 轴）**

| Figma 轴 | 取值 | TDesign React 1.18.3 |
| --- | --- | --- |
| `theme 主题` | `default 默认`（无图标）/ `info 信息` / `warning 警告` / `error 错误` / `success 成功` | `Dialog.theme`：`default` / `info` / `warning` / **`danger`** / `success`。⚠ Figma 叫 `error`，API 是 `danger` |
| `closeBtn 关闭按钮` | true / false | `closeBtn` |
| `divider 分割线` | true / false | **无对应 prop**，用 `dialogClassName="km-dialog--divider"`（补丁见 `tdesign-patches.css`） |
| `fullscreen 全屏` | true / false | `mode="full-screen"`（`modal` 为默认） |

**尺寸与排版（基础，无分割线）**

| 部位 | 规格 |
| --- | --- |
| 容器 | 宽 **480**（自定义宽度范围 min 480 / max 960，对应 `width`），白底 `bg-container`，圆角 **8px**（`rounded-lg`），**无描边**，内边距 32 |
| 头部 | 图标 24×24 + 间距 8 + 标题 `text-h7` 16/24 **Semibold** primary，单行省略；右侧关闭按钮 |
| 关闭按钮 | 点击区 24×24，图标 16×16，圆角 **3px**；normal 透明 / hover `bg #dfe1e8`（`--component-stroke`）/ active `bg #c8cad0`（`--component-border`） |
| 内容区 | 上 16 / 下 24，`text-body` 14/22 `text-secondary-text` |
| 页脚 | 右对齐，按钮间距 8；取消 = 灰底按钮（`bg-component` #f2f4f7，文字 primary），确认 = 品牌蓝主按钮，均为 medium 32 高 |

**带分割线变体**：头 / 内容 / 脚各自 `px-32 py-24`；头部底部、页脚顶部各一条 1px `border-stroke`（#dfe1e8）。关闭按钮与标题同行垂直居中。

**主题图标色**：info `--brand-color`、warning `--warning-color`、error `--error-color`、success `--success-color`，均为基础色，`default` 不带图标。

**全屏模式**（`1200×640` 示例）：头部 56 高、`px-32 py-16`，**标题与图标居中**，关闭按钮 20×20；页脚 80 高，按钮距上沿 16（有分割线时 24）。

**落地方式**

- 项目补丁在 `tdesign-patches.css`（去描边、内容区 16/24、页脚不再叠内边距、关闭按钮 24×24 与 hover/active 底色、分割线变体），`tdesign-bridge.css` 把 `--td-radius-large` 从 9px 改为 8px。调用处不要再覆盖这些值。
- 取消按钮在 TDesign 里默认是 `outline`，设计稿是灰底，调用时传 `cancelBtn={{ content: "取消", theme: "default", variant: "base" }}`。
- 居中弹出传 `placement="center"`（TDesign 默认是靠上 20vh，设计稿示例为居中）。含表单的弹窗再加 `closeOnOverlayClick={false}`，避免误点蒙层丢失输入。
- 验证页：`#/design-system/dialog`。业务示例：`ForgotPasswordDialog.tsx`（带分割线变体 + 表单）。

**缺口**

- ⚠ **`error` ≠ `danger`**：Figma 主题名与 TDesign API 不一致，别照抄轴值。
- ⚠ **分割线没有 API**：`divider` 是 Figma 独有的轴，靠自定义 class 实现。
- ⚠ **全屏模式的样式尚未补进补丁**：TDesign 全屏头部默认带 `secondarycontainer` 底色且靠右对齐，与设计稿「白底、居中标题」不一致。要用全屏时先补 CSS 再用。
- 设计稿没有遮罩的规格（示例底板是 #666666 的纯色块）。运行时沿用 TDesign 默认遮罩 `--td-mask-active`（半透明黑）。
- 没有 hover / focus 等键盘焦点的视觉规格，沿用 TDesign 默认（`Dialog` 本身不做焦点圈定，含表单的弹窗请自行保证 Tab 顺序合理）。
- 圆角 3px 是未 token 化的裸值（关闭按钮），用 `rounded-xs` 承接，与全库已知的「3px 越档」是同一问题。

### Message 全局提示

[Figma 46808-353123](https://www.figma.com/design/b5cc1y3jzLmOQkpa8vz5AX/China-Design-system-for-web?node-id=46808-353123) · `Message 全局提示`（12 变体）

> 对用户的操作作出轻量的全局反馈。参照案例：旧版 myKONE web 的「登录成功！」Toast。

**变体轴（2 轴）**

| Figma 轴 | 取值 | TDesign React 1.18.3 |
| --- | --- | --- |
| `theme 主题` | `info 默认` / `question 帮助` / `success 成功` / `warning 警告` / `error 错误` / `loading 等待` | `Message.theme` 六值一一对应；快捷调用 `MessagePlugin.info/question/success/warning/error/loading` |
| `closeBtn 关闭` | true / false | `closeBtn` |

**尺寸与排版**

| 部位 | 规格 |
| --- | --- |
| 容器 | 高 **48**，宽自适应内容（不限制大小），白底，圆角 **6px**（`rounded-md`），**0.5px `border-component-border`**，阴影 `0 8px 10px rgba(0,0,0,.1)`（`shadow-modal`） |
| 内边距 | `px-16`，`py-13`（描边在内侧） |
| 内容 | 图标 **20×20** + 间距 8 + 文字 `text-body` 14/22 `text-primary-text`，单行不换行 |
| 关闭按钮 | 与文字间距 24，16×16；hover / active 底色与 Dialog 关闭按钮一致（#dfe1e8 / #c8cad0），圆角 3px |

**图标色**：info / question `--brand-color`；success `--success-color`；warning `--warning-color`；error `--error-color`；loading 为品牌色描边圆环。

**落地方式**

- 补丁在 `tdesign-patches.css`：换成 0.5px 描边 + 单层 `--elevation-modal` 阴影（去掉 TDesign 的三层阴影和四边内描边）、内边距 `12.5px 16px`、关闭按钮 hover / active 底色。
- 调用用 `MessagePlugin.success("密码重置成功", 3000)`；位置沿用 TDesign 默认（顶部居中，距顶 32）。需要关闭按钮时传对象：`MessagePlugin.success({ content, closeBtn: true, duration: 0 })`。
- 验证页：`#/design-system/dialog`。业务示例：`ForgotPasswordDialog.tsx`（重置成功后提示）。
- 与 `IoTToastContent`（sonner）并存：列表页模板里已有的 Toast 不迁移；**新增的轻量全局反馈走 TDesign `Message`**。同一页面不要两套混用。

**缺口**

- ⚠ **阴影变量与节点实测不一致**：绑定的 `Light/Shadow/3` 变量是 `0 8px 20px rgba(0,0,0,.1)`，而节点实际渲染 `0 8px 10px`。以实测为准，用 `shadow-modal`，这是全库已知的阴影定义冲突的又一例。
- ⚠ **`question` 帮助与 `loading` 等待没有使用场景说明**：TDesign 的 `question` 是帮助图标，`loading` 需要手动关闭（`MessagePlugin.close`），设计稿未定义何时用。
- Figma 没有定义弹出位置、停留时长、多条堆叠间距与入场动画，沿用 TDesign 默认：顶部居中、3 秒、条间距 8。
- 文字不换行，超长文案的最大宽度与折行策略未定义。
- 状态图标 20px 的 success / warning / error 是基础状态色，与全库一致；Message 以文字+图标共同表达，不会只靠颜色传达状态。

---

## 待设计确认清单

按影响面排序，方便一次性带去评审：

1. **基础组件的 focus 设计系统性不完整**，键盘可见焦点在设计侧普遍空白。Table 自身没有单一 focus 轴，其行选择、排序、筛选、展开、分页等交互必须沿用对应子组件的 focus 规格。
2. **`status` 校验态系统性缺失** —— Input 只在 demo 里，InputNumber / Search / Select / Cascader / DatePicker 完全没有，而 TDesign 这些组件都支持 `status` + `tips`。表单场景必然用到。
3. **`readonly` 在适用的输入/选择组件中普遍缺失。** Table 本身没有 readonly 语义；可编辑表格应通过 `editableCellState` 明确只读单元格。
4. **状态色直接做文字色**：Link 的 warning（2.49:1）/ success（2.00:1）、Breadcrumb 可点击项（3.16:1）、Slider 刻度文字（3.16:1）、Table 的健康/警告/异常状态文字（2.00/2.49/4.21:1），以及 Tooltip 的 success/warning/danger 浅底主题均不达 AA。
5. **Tooltip 跟随鼠标的六主题无法由单一 TDesign 组件覆盖**：`Tooltip` 有六主题但无 mouse，`TooltipLite` 有 mouse 但只有 default/light。
6. **Button 的 `Secondary 次要` 主题** TDesign 不存在，需定义落地方式。
7. **Switch medium 档滑块两态尺寸不同**（15 vs 12），疑似失误。
8. **Radio filled 比 outline 矮 4px**，需二选一。
9. **Slider 焦点环 `#d9e1ff`** 不在色阶内，需确认是笔误还是新档位。
10. **Cascader 的 `clearable` 与 Select 的 `clearable`** 都没有视觉设计。
11. **圆角越出档位**：多处裸值 3px（见 `design-system.md` 通用规则），Tree 同一元素还会随状态跳 1px。
12. **`Light/Shadow/2`（0 4px 10px）与节点实测（0 4px 5px）不一致**，需统一。
13. **Search 只有 32px 一档**，无法与 small 档控件并排。
14. **DatePicker 缺 quarter / week 模式**，且输入框与面板的 mode 集合不一致。
15. **Tree 层级深度是 4 个独立组件集**，4 层以上无母版。
16. **变量命名瑕疵**：`Color/Text/text_sucess` 拼错、`dimension/success/*` 命名空间错位、`rang` / `seleted` / `disable` 拼写不全、`radius_full` 与 `radius-default` 两种命名风格。
17. **Dialog 的 `error` 主题与 `divider` 分割线**：主题名与 TDesign 的 `danger` 不一致，分割线没有 API；全屏模式样式也需设计与开发共同确认后再补。
18. **Message 的阴影变量（0 8px 20px）与节点实测（0 8px 10px）不一致**，以及 `question` / `loading` 主题的使用场景。
19. **轴名风格三套并存**：`size 尺寸`（空格）/ `布局`（纯中文）/ `State状态`（无空格）。做 Code Connect 或自动化映射需要三套解析规则。
