---
inclusion: auto
name: IoT 页面模板
description: 创建或修改 IoT 列表页、筛选页、设备查询页、Drawer、Dialog、Toast 时加载。包含 Normal Filter、Embed Filter、表格分页、页面操作和浮层模板的选型及调用规则。
---

# IoT 页面模板

## 事实来源

Figma 模板矩阵：[`IOT_Web_template` 8875:39482](https://www.figma.com/design/L9e70WefNsB8pSYKB5U7zh/IOT-Delivery?node-id=8875-39482)

代码是可执行的单一事实来源，Steering 只描述选型与调用约束：

- 列表页模板：#[[file:../../src/app/components/templates/iot-list-page/IoTListPageTemplate.tsx]]
- 浮层模板：#[[file:../../src/app/components/templates/iot-list-page/IoTPageOverlays.tsx]]
- 公开类型：#[[file:../../src/app/components/templates/iot-list-page/types.ts]]
- 完整示例：#[[file:../../src/app/design-system/IoTPageTemplateShowcase.tsx]]

验证地址：`#/design-system/iot-page-template`。

颜色、字体、图标、组件底座仍以 `design-system.md` 和 `tdesign-components.md` 为准；本文件不重复定义 token。

## 必须复用的结构

新建桌面业务页时：

1. 使用 `AppShell` 提供 TopNav、SideNav 和唯一的主滚动区。
2. 在 `AppShell` 内渲染 `IoTListPageTemplate`。
3. 通过 `columns`、`rows`、`filters`、`actions` 和 render 回调配置业务内容。
4. 不要复制模板 JSX，不要自行拼接另一套标题、筛选、表格和分页骨架。
5. 页面专属逻辑留在页面容器中；模板不负责请求、权限、路由和业务状态管理。

```tsx
<AppShell
  navItems={getSideNavItems(language, permissions)}
  activeId={activeId}
  onNavSelect={setActiveId}
>
  <IoTListPageTemplate
    title="设备查询"
    filterMode="normal"
    filters={filters}
    actions={actions}
    columns={columns}
    rows={rows}
    getRowKey={(row) => row.id}
    pagination={pagination}
  />
</AppShell>
```

## 筛选模式选型

### `filterMode="none"`

适用于无查询条件的列表页。标题右侧直接显示页面操作。

### `filterMode="normal"`

适用于字段明确、用户需要同时查看多个查询条件的管理页面。

- 0 项：不渲染表单。
- 1–4 项：单行展示。
- 超过 4 项：默认只显示前 4 项，通过“展开筛选 / 收起筛选”切换全部字段。
- 收起时不能清空隐藏字段的值。
- 需要由 URL 或外部状态控制展开态时，传 `filterExpanded` + `onFilterExpandedChange`；否则使用 `defaultFilterExpanded`。

**操作按钮位置 `actionsPlacement`**：默认 `"header"`，`actions` 在标题行右侧。传 `actionsPlacement="filter"` 时，`actions` 与筛选字段同一行、靠右并与输入框底部对齐，对应 Figma 的「Form 表单」模板（`9289:27194`：标题单独一行，下面是两个筛选项 + 一个操作按钮）。用户管理页即此形态：`关键词` + `角色` + 主按钮「查询」。该位置只对 `filterMode="normal"` 生效；字段超过折叠数量时，展开按钮排在操作按钮之后。

### `filterMode="embedded"`

适用于搜索频繁、希望首屏更紧凑的查询页面。

- 使用 `embeddedSearch` 提供关键词搜索。
- 筛选按钮负责展开额外字段。
- 任一字段有值时按钮保留选中语气，即使筛选面板已收起。
- 搜索框固定使用 TDesign medium 32px 档，不与 small 控件并排。
- 页面操作位于搜索工具栏右侧，而不是标题行。
- 筛选面板下方的补充选项用 `embeddedFooter` 传入，不要用 `beforeTable` 加负边距去贴近搜索区；紧跟搜索框右侧的选项（如设备查询的「只搜索云管家设备」「多设备查询」）用 `embeddedSearch.trailing`。
- `embeddedFilterToggle` 控制筛选按钮：`placement: "actions"` 把带文字的筛选按钮放进右侧按钮组最左边；`container: "drawer"` 改为从右侧拉出 TDesign Drawer（`drawerSize` 取 small 300 / medium 500 / large 760，默认 500，也可直接传像素宽度，设备查询用 380；`drawerOverlay` 控制蒙层，`drawerBelowNav` 让抽屉从 56px 顶栏下方开始，设备查询不带蒙层、覆盖顶栏（默认）；底部左对齐「查询 / 重置」，通过 `onSubmit` / `onReset` 接业务逻辑）。设备查询即此形态。

### 卡片列表主体 `customBody`

结果不是表格而是卡片时（如设备查询的设备卡片，Figma `8626:40208`），用 `customBody` 替换表格主体：模板不再渲染 Table，`columns` / `rows` 传空即可，`pagination` 仍在原位置渲染。标题、筛选、操作与分页继续由模板负责，不要为卡片列表另起一套页面骨架。设备卡片统一使用 `components/device-query/DeviceInfoCard`（列表灰底可点击 / 详情页白底描边两种变体）。

## 页面操作

`actions` 数组中的主要操作使用 `theme: "primary"`，放在数组末尾；每个页面操作区只允许一个 primary。若误传多个，模板只保留最后一个的主按钮视觉，其余降级为 default。

- 最多 3 个操作时直接展示，主要操作自动放到最右侧。
- 4 个及以上时，模板保留一个直接次要操作和主要操作，其余收进 TDesign Dropdown。
- 危险操作使用 `theme: "danger"`；Dropdown 内部会映射为 `theme="error"`。
- 不要通过缩小按钮、减小间距或使用 24px small 按钮容纳更多页面操作。

## 筛选字段

普通文本字段直接提供 `value`、`onChange` 和 `placeholder`，模板使用 TDesign Input。

Select、DatePicker、Cascader 等字段通过 `render` 注入，但同一表单行必须统一使用 `size="medium"`：

```tsx
{
  id: "status",
  label: "设备状态",
  value: status,
  onChange: setStatus,
  render: ({ id, value, onChange }) => (
    <Select id={id} value={value} onChange={onChange} size="medium" />
  ),
}
```

不要用 shadcn Input、Select、Button 替换模板内的 TDesign 同类控件。

## 表格与分页

- 模板表格的运行时底层统一使用 `tdesign-react` 的 `Table`；业务页继续传 `IoTTableColumn<Row>[]`，由模板内部 adapter 映射到 TDesign `columns/data`。不要改回 `components/ui/table`，也不要在业务页直接绕过模板拼 TDesign Table。
- 表格外观以当前 IoT 页面模板为准，而不是直接套用 TDesign 默认尺寸：表头 46px、数据行 54px、单元格水平内边距 24px、空态和加载态内容区 324px。定制规则集中在 `tdesign-patches.css` 的 `.iot-list-page-table` 下，禁止提升为全局 `.t-table` 覆盖。
- 列由 `IoTTableColumn<Row>[]` 描述，业务页负责 render，不要把业务字段写进模板；模板统一启用单行省略，避免内容换行破坏 54px 行高。
- 行高、表头和横向滚动由模板统一处理。
- **首尾列边距统一**（`:root` 的 `--iot-table-edge-start` 左边距、当前 24px，`--iot-table-edge-end` 右边距、当前 40px；需与 `useEdgeFitColumns.ts` 的 `TABLE_EDGE_START / TABLE_EDGE_END` 同步；带边距类的首尾列按与 16px 的差值自动加宽）：首列左内边距与末列内容右侧留白分别取这两个值，所有表格（含原生 `<table>`、弹窗内小表格、grid 表格）一致。模板自动给首/末列加 `iot-list-page-table__edge-start / __edge-end`，并由 `useEdgeFitColumns` 把左对齐的末列收窄到内容宽度、多余宽度按比例分给其他列；只改宽度，不改对齐。直接使用 TDesign `Table` 的页面（如设备总览项目列表）要自己给末列加 `EDGE_END_CLASS` 并调用该 hook。只放复选框等固定内容、不该随宽屏拉伸的列加 `NO_SCALE_CLASS`。原生自动布局表格的末列用 `w-px whitespace-nowrap` 收到内容宽度。每行末尾有详情箭头（`onRowOpen`）时，箭头列视为最右列：32px 箭头按钮的右缘距表格右边缘 = 右边距，与文字类末列同一规则。
- 列数很多、1440 视口放不下时，可传 `compactCells` 把单元格水平内边距从 24px 收为 16px（行高、字号不变）。这是例外而非默认，目前只有仟帆用户管理（9 列）使用；能靠省略号或调整列宽解决的页面不要开。
- 设备 ID、故障码等可在 render 中使用 `font-mono`；数字列使用 `tabular-nums`。
- 行级操作必须提供可读 `label`，不能只依赖图标。
- 需要详情入口时使用 `onRowOpen`，不要让整个 `<tr>` 伪装成按钮。
- 分页继续使用模板外置的 TDesign `Pagination`，不要同时启用 Table 内置 pagination；受控 `current/pageSize/total` 变化后由业务页负责将 current 重置为 1。
- 模板包含 loading 和 empty 状态；错误状态由业务页在模板上方或表格区域显式呈现。
- `AppShell` 的 `<main>` 是视口级唯一滚动区。不要给页面根节点写固定 1080px 高度，也不要让 Footer 覆盖分页。

## 浮层选型

### `IoTDetailDrawer`

用于从列表查看详情或完成轻量编辑。桌面端使用右侧 Sheet，宽度上限 477px。字段摘要优先复用 `IoTFieldList`。

### `IoTContentDialog`

- `size="content"`：内容型任务，最大宽度 706px。
- `size="basic"`：短确认或短表单，最大宽度 480px。
- 主要和次要操作通过 `primaryAction` / `secondaryAction` 传入。

删除等确认操作优先使用 `IoTConfirmDialog`，不要重复拼装确认框。`onConfirm` 可返回 Promise：模板会显示 loading、阻止重复提交，并只在 Promise 成功后关闭；失败时由业务层捕获并呈现错误。

### Toast

使用 `sonner` 的 `toast.custom()` 搭配 `IoTToastContent`。普通成功提示使用默认的礼貌播报，不用 Toast 承载必须由用户处理的重要错误。

> 设计系统现已收录 TDesign `Message`（规格见 `tdesign-components.md`）。已有页面的 Toast 不迁移；新增的轻量全局反馈（如「密码重置成功」）用 `MessagePlugin`，同一页面不要两套混用。

## 状态与无障碍

- 状态不能只用颜色表达，必须同时显示文字。
- 状态文字使用 `text-success` / `text-warning` / `text-error`；这些工具类与 `bg-surface-success` / `bg-surface-warning` / `bg-surface-alert` 统一映射到基础状态色。需要点与文字完全同色时，圆点使用 `bg-current` 继承父级颜色。
- 装饰圆点和图标加 `aria-hidden="true"`。
- Drawer、Dialog 必须传 `title`；`description` 可选，但业务含义不明显时应显式传入，省略时模板只提供隐藏的通用兜底。
- 浮层会在打开前记录当前焦点，关闭时若原触发元素仍在 DOM 中则恢复焦点。
- 展开筛选必须保持 `aria-expanded` 与 `aria-controls`。
- `text-placeholder` 只用于占位符，不用于表头、可点击链接或关键正文。

## 禁止事项

- 不要把 Figma 导出的完整 JSX、绝对定位或硬编码颜色复制到业务页。
- 不要写固定 1440×1080 页面容器；1440 是参考画布，不是浏览器约束。
- 不要在模板内部请求数据、读取路由或判断用户权限。
- 不要为了单个页面修改模板的通用布局；优先使用现有 props 和 render 回调。
- 不要在业务页重新声明 PingFang SC 字族或写 `font-['PingFang_SC:Medium']`。
- 不要在同一筛选区混用 TDesign 与 shadcn 的同类表单控件。
