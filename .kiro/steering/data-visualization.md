---
inclusion: auto
name: 数据可视化图表规范
description: 新增或修改饼图、折线图、条形图等数据可视化图表，或需要图表配色、图例、悬浮提示、亮暗主题 token 时加载。包含 PieChart / LineChart / BarChart 的形态、规格、token 与使用方式。
---

# 数据可视化图表

## 事实来源

Figma **China Data Visualization**（file key `f4nG73gc9qgxn2vwk0GElY`）。它是图表的唯一设计来源，与 Design Token China 的界面 token **互相独立**：图表有自己的一套亮 / 暗主题，暗色是固定的 `#141414` 卡片，不是应用 `.dark` 的推导值。

| 图表 | 节点 | 组件 |
| --- | --- | --- |
| 饼图 PieChart | [224:5919](https://www.figma.com/design/f4nG73gc9qgxn2vwk0GElY/China-Data-Visualization?node-id=224-5919) | `components/charts/PieChart.tsx` |
| 折线图 LineChart | [202:2](https://www.figma.com/design/f4nG73gc9qgxn2vwk0GElY/China-Data-Visualization?node-id=202-2) | `components/charts/LineChart.tsx` |
| 条形图 BarChart | [214:8610](https://www.figma.com/design/f4nG73gc9qgxn2vwk0GElY/China-Data-Visualization?node-id=214-8610) | `components/charts/BarChart.tsx` |

验证页：`#/design-system/charts`（`src/app/design-system/ChartsShowcase.tsx`），同一份数据按 Light / Dark 各渲染一遍，与设计稿两栏对照。

新增图表（柱状图、雷达图…）沿用同一套外框 / 图例 / 提示 / token，不要各自再写一份。

## Token

| 位置 | 内容 |
| --- | --- |
| `theme.css` | 定性色板 `--categorical-color-1…8`：`#4373f7` `#0dd2e1` `#ffcb49` `#43e7c0` `#706eff`（主系列 1–5），`#ffe141` `#3252aa` `#c4a5ff`（仅嵌套环形图内圈 6–8）。亮暗取值相同 |
| `charts.css` | 主题变量 `--viz-*`，作用域 `.km-chart`：`background` `title` `subtitle` `axis-label` `legend-text` `gridline` `axisline` `tooltip-axis` `tooltip-background` `mark-text` 以及 `card-shadow` `tooltip-shadow` |

亮 / 暗由 `data-theme="light" | "dark"` 指定（组件的 `theme` prop）；不传则跟随祖先 `.dark`。

| `--viz-*` | Light | Dark |
| --- | --- | --- |
| background | `#ffffff` | `#141414` |
| title | `#141414` | `#ffffff` |
| subtitle / axis-label / legend-text | `#727272` | `#d0d0d0` |
| gridline | `#dddddd` | `#4f4f4f` |
| axisline | `#727272` | `#d0d0d0` |
| tooltip-background | `#ffffff` | `#2b2b2b` |
| tooltip-axis | `#a1b9fb` | `#a1b9fb` |

组件里**不写 hex**，只引用上面的变量。图表的灰（`#727272`、`#d0d0d0`）与界面 token 的灰（`#676a72`）是两套，不要互相替换。

## 通用规格

- 卡片：圆角 12（`rounded-xl`）、阴影 `0 0 15px rgba(0,0,0,.04)`、内边距 上 14 / 左右 28 / 下 28（嵌套环形图 上 16 / 下 19）、默认高 320。
- 头部 24 高：主标题 H7 16/24 Semibold 靠左，图例整行居中。
- 图表文字带字距：饼图 10px / 0.5，折线图 12px / 0.6。这是图表规范特例，与界面「无字间距」不冲突，只限 `.km-chart` 内。
- 图例：饼图是 12×8、圆角 2 的色块；折线图是 19×9 的「线 + 空心圆点」（圆点 r 3.8，填充取背景色）。
- 悬浮提示 `ChartTooltipCard`：圆角 8、内边距 12、阴影 `1px 1px 3px rgba(0,0,0,.23)`；左列标题 + 「圆点 + 名称」，右列数值 Medium。

## PieChart

四种形态共用一套几何，用 SVG 绘制（Recharts 画不出引导线 / 玫瑰半径 / 嵌套内圈）：

| variant | 说明 |
| --- | --- |
| `pie` | 半径 80 |
| `ring` | 外径 80 / 内径 64 |
| `rose` | 角度按占比，半径随数值 40 → 90 线性变化，中心孔 r=14 |
| `nested` | 外环同 ring，内圈是半径 52 的饼图，扇区名用 `--viz-mark-text` 写在色块里；需传 `innerData` |

扇区间 1px 描边（取背景色），从 12 点钟顺时针。外圈标签是「色块 + 名称: 占比」，经 45° 斜线 + 水平线连接（`--viz-axisline`），同侧相邻标签自动做垂直防碰撞（最小间距 16），否则 10% 与 5% 的标签会叠在一起。

```tsx
<PieChart variant="ring" title="设备在线情况" theme="light" data={[{ name: "在线", value: 213 }, { name: "离线", value: 90 }]} />
```

## LineChart

设计稿的 12 个形态由正交开关组合，**不要为每个形态新建组件**：

| 形态 | 开关 |
| --- | --- |
| 基础折线图 | — |
| 平滑 | `smooth` |
| 面积 / 平滑面积 | `area`（+ `smooth`） |
| 堆叠折线 / 平滑 / 面积 / 平滑面积 | `stacked`（+ `smooth`、`area`），第一个系列在最上层 |
| 区域高亮 | `highlight={{ from, to }}` |
| X 轴对称 | `layout="mirror"`，上下两个绘图区，第一个系列在下半区向下生长 |
| 上下 X 轴 | `layout="bipolar"`，左轴向上、右轴向下，第二个系列挂右轴 |
| 阶梯 | `step` |

规格：线宽 1.5；数据点 r=2.92 空心圆（描边 1.5、填充取背景色）；面积填充为系列色 20%（`bipolar` 为 90%）；网格线 1px `1 1` 点划；纵轴标签列宽 29、右对齐、距绘图区 8；横轴首尾各内缩 20；悬停时出现 `--viz-tooltip-axis` 竖向虚线。纵轴刻度按 5 等分取整（250 → 0,50,…,250；`mirror` 用 4 等分）。多于一个系列时才显示图例。

```tsx
<LineChart title="设备在线率" subtitle="近 7 天" data={rows} series={[{ key: "online", name: "在线率" }]} smooth area />
```

## BarChart

条形水平生长（类目在纵轴、数值在横轴）。6 个形态由开关组合，不是 6 个组件：

| 形态 | 开关 |
| --- | --- |
| 基础条形图 | 单序列 |
| 带背景基础条形图 | `background`（底槽取 `--viz-bar-track`） |
| 多值条形图 | 多个序列（默认分组） |
| 堆叠条形图 | `stacked` |
| 正负轴条形图 | `diverging`（类目文字贴在零线上、位于柱子另一侧） |
| 极坐标条形图 | `polar`（每行数据一圈，起点 12 点钟顺时针） |

定制化调整走 props，不要改组件内部：`barSize`（设计稿 20）、`barGap`、`barCategoryGap`、`categoryWidth`、`legendSize`、`subtitle`。
设备详情「楼层统计」就是用 `barSize={5} barGap={2} barCategoryGap="22%"` 把设计稿的粗柱收细，业务页里的这类取值改动不应被组件默认值覆盖。

```tsx
<BarChart surface="page" height={620} data={floors} categoryKey="floor"
  series={[{ key: "up", name: "上行次数" }, { key: "down", name: "下行次数" }]}
  subtitle="单位（次）" barSize={5} barGap={2} barCategoryGap="22%" />
```

## LineChart 的业务扩展

`yTicks`（指定纵轴刻度，如 `[0.2, 0.4, 0.6, 0.8, 1]`）、`formatTick`（刻度文字格式，如百分比）、`xInterval`（横轴标签间隔，点很多时用）、`flushEdges`（折线贴满绘图区两端，首尾日期靠边对齐）。纵轴 3 位及以上的刻度，标签列宽自动加宽。

## 注意

- Recharts 的 `YAxis` / `XAxis` 即使 `tickLine={false}` 也保留 6px 的 `tickSize` 偏移，必须同时写 `tickSize={0}`，否则纵轴标签被推出左侧并被裁掉。
- 图表本体对读屏隐藏（`aria-hidden`），数据由组件自带的 sr-only 表格 / 摘要提供；不要把状态只放在颜色上，图例与标签必须有文字。
- 设备总览里已有的 `device-overview/OverviewCharts.tsx`（`Ring`、`TrendChart`）是存量业务图表，**不主动迁移**；新业务图表用 `components/charts`。
