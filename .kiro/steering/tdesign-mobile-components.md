---
inclusion: auto
name: TDesign Mobile 组件规格
description: 创建或修改移动端页面、TDesign Mobile 组件、Message 消息通知、移动端表单、抽屉或弹窗时加载。定义 Mobile Figma 设计系统与 Web TDesign 的边界和落地规则。
---

# TDesign Mobile 组件规格

## 事实来源与边界

移动端组件以 Figma **China Design system for mobile**（file key `EwHKttY9aJIOS7TM3RqGoW`）为准。Web 组件仍以 China Design system for web 为准，两者不能因为名称相同而互换。

代码侧移动端组件库为 `tdesign-mobile-react` 1.0.0。它与桌面端 `tdesign-react` 可以并存：

- `tdesign-react`：桌面端以及当前已确认复用 Web 规格的组件。
- `tdesign-mobile-react`：设计稿明确标为 Mobile 的组件。例如移动端的 `Message`。
- KONE 的颜色、字体与图标 token 仍来自 `design-system.md`。移动端组件不写硬编码颜色或自造字族。

该组件仍会生成 `.t-message` 类；`tdesign-mobile-bridge.css` 以 `.km-mobile-message.t-message` 的更高特异性覆盖桌面 Message 的全局描边与阴影。

## Message 消息通知

权威设计：[Message 消息通知 24386:5281](https://www.figma.com/design/EwHKttY9aJIOS7TM3RqGoW/China-Design-system-for-mobile?node-id=24386-5281)。

### 选型

- 页面内持续展示的提示用 `tdesign-mobile-react` 的静态 `<Message />`。
- 短暂全局反馈才用 `Message.info()` / `success()` / `warning()` / `error()`。
- 不要用桌面端 `tdesign-react` 的 `MessagePlugin` 替代移动端设计系统的 Message。

```tsx
import MobileMessage from "tdesign-mobile-react/es/message/Message";

<MobileMessage
  className="km-mobile-message"
  theme="warning"
  visible
  duration={0}
  content="请确保控制器加载成功，并获取实时数据后，完成设备注册。"
/>
```

### 页面内 Message 定制

Mobile Message 默认是固定在视口顶部的通知。设计稿中设备数据页的 Message 是内容区内的 68px 通知卡，使用 `.km-mobile-message` 将定位收回正常文档流：

- `position: relative`，`top/left/right: auto`，`width: 100%`。
- 最小高 48px、左右 16、上下 12、圆角 6px。单行按内容保持基础高度，文本换成两行后自动增长（例如中文设备数据提示为 68px）。
- warning 图标与正文从顶部对齐，间距 8px。
- 文本使用 `text-body`，按可用宽度自然换行，不能单行省略。
- 阴影使用 `shadow-popover`（KONE 允许的浮层阴影），由 `.km-mobile-message` bridge 写入组件变量。

其他 Message 主题：`info`（蓝）、`success`（绿）、`warning`（橙）、`error`（红）。主题色由移动 bridge 映射到 KONE token，调用处不覆盖颜色。

## 新增 Mobile 组件的规则

1. 先确认节点属于 Mobile 设计系统，再选 `tdesign-mobile-react`。
2. 只在该组件被 Mobile Figma 明确指定时安装或使用该库，避免把移动端高度和交互带入桌面页。
3. 图标优先从对应 Mobile Figma 节点或 Design Token China 图标库导出，转换为 `currentColor` React 组件。
4. 自建移动端交互组件仍需使用 KONE 语义 token、配对排版类和文本状态标签。
5. 新增移动端 bridge 规则必须说明 Figma 节点、使用方和为何不能用现有 Web TDesign bridge 表达。

## Cell

设备详情的指标 Cell 以 IOT Delivery `5532:18053` 为唯一来源。Web 与 Mobile 变体都必须复用 `device-detail/MetricCard`；调用方只保留数据和网格布局。Mobile 变体固定 100×106、8px 间距，使用 40px 装饰性 `aria-hidden` 图标底与可截断的居中 Foot 12 标签；方向等附加内容必须保持可读语义。

## 设备数据子模块标签

设备数据页的“子模块”是业务后加标签，不是状态文字。设计来源 IOT Delivery `10291:151813`：固定 62×22px、灰 250 底、6px 圆角、4px 内边距、14px node 图标与 Foot 12 常规文字，图标和文字间距 4px。实现使用 `.km-mobile-submodule-tag`（定义在 `tdesign-mobile-bridge.css`），不要将它替换为 `StatusLabel` 或裸文字。标签内的灰 700 文字为该 Mobile Figma 节点指定色，仅限该业务标签使用。英文固定宽度下使用 `Child`，完整的 `Submodule` 不适合该 62px 节点。


## Dialog 对话框

权威设计：[Dialog 对话框 24386:5278](https://www.figma.com/design/EwHKttY9aJIOS7TM3RqGoW/China-Design-system-for-mobile?node-id=24386-5278)。移动端确认、完成和未完成流程使用 `tdesign-mobile-react/es/dialog/Dialog`，不要沿用桌面端 `tdesign-react` 的 Dialog。

```tsx
import MobileDialog from "tdesign-mobile-react/es/dialog/Dialog";

<MobileDialog
  className="km-mobile-registration-dialog"
  visible={open}
  title="设备注册完成"
  content="所有数据已加载，本设备已成功完成注册。"
  cancelBtn="返回首页"
  confirmBtn="留在当页"
  closeOnOverlayClick={false}
  onCancel={returnHome}
  onConfirm={() => setOpen(false)}
  onClose={() => setOpen(false)}
/>
```

`Dialog` 与桌面组件也有同名 `.t-dialog` 选择器。直接引入逻辑模块，不导入其通用 CSS；在 `tdesign-mobile-bridge.css` 用 `.km-mobile-registration-dialog` 补齐 311px 宽、12px 圆角、**32px 顶部 / 24px 两侧**内容区内边距、24px 操作区内边距、18/26 标题和 16/24 内容排版。footer 的 `light` 按钮为品牌浅底 + 品牌字，`primary` 按钮为品牌实底 + 白字；两者均为 40px 高。样式只能限定在 Mobile class，不能覆盖全局 `.t-dialog`。


## 设备详情实时数据 Cell

实时数据、传感器数据和最近一次运行的指标单元以 IOT Delivery `5532:18053` 为准，统一使用 `src/app/components/device-detail/MetricCard.tsx`。不要在注册页、Web 设备详情或 Mobile 设备详情重写小方块。`layout="web"` 使用横向 Cell，`layout="mobile"` 使用 100×106 的纵向 Cell；颜色由 `tone="brand" | "sensor" | "neutral"` 决定。neutral 变体使用 Grey 250 图标底与 `metric-icon-neutral`（Mobile Figma Grey 700）图标。方向箭头等内容通过 `trailing` 传入，不能用 Unicode 字符代替 Figma 图标。