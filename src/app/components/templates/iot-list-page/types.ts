import type { ReactNode } from "react";

export type IoTFilterMode = "none" | "normal" | "embedded";
export type IoTPageActionTheme = "default" | "primary" | "danger";

export interface IoTPageAction {
  id: string;
  label: string;
  onClick: () => void;
  theme?: IoTPageActionTheme;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface IoTFilterField {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  /** 宽屏（4 列栅格）下占用的列数；默认 1。窄屏自动降级。 */
  span?: 1 | 2 | 3 | 4;
  /** 用于 Select、DatePicker 等非文本控件；未提供时渲染 TDesign Input。 */
  render?: (context: {
    id: string;
    value: string;
    onChange: (value: string) => void;
  }) => ReactNode;
}

export interface IoTEmbeddedFilterToggle {
  placement: "search" | "actions";
  label?: string;
  container?: "panel" | "drawer";
  /** drawer：设计规范的三档宽度 small 300 / medium 500（默认）/ large 760，或直接传像素宽度 */
  drawerSize?: "small" | "medium" | "large" | number;
  /** drawer：是否显示蒙层（规范 overlay=true / false 两种），默认 true */
  drawerOverlay?: boolean;
  /** drawer：从顶部导航栏（56px）下方开始，不覆盖顶栏，默认 false */
  drawerBelowNav?: boolean;
  /** drawer：抽屉标题，缺省用 `label` */
  drawerTitle?: string;
  /** drawer：底部主按钮，点击后执行 `onSubmit` 并关闭抽屉 */
  submitLabel?: string;
  onSubmit?: () => void;
  /** drawer：底部次按钮，清空筛选项，抽屉保持打开 */
  resetLabel?: string;
  onReset?: () => void;
  closeLabel?: string;
}

export interface IoTEmbeddedSearch {
  value: string;
  onChange: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  /** 搜索框最大宽度（px），默认 400 */
  maxWidth?: number;
  /** 紧跟在搜索框右侧的补充控件，例如搜索范围复选框 */
  trailing?: ReactNode;
}

export interface IoTTableColumn<Row> {
  id: string;
  title: ReactNode;
  width?: number | string;
  align?: "left" | "center" | "right";
  fixed?: "left" | "right";
  /** 交互或操作列可关闭模板默认的单行省略 Tooltip。 */
  ellipsis?: boolean;
  className?: string;
  render: (row: Row, index: number) => ReactNode;
}

export interface IoTRowAction<Row> {
  id: string;
  label: string | ((row: Row) => string);
  icon: ReactNode;
  onClick: (row: Row) => void;
  theme?: "default" | "danger";
  disabled?: boolean | ((row: Row) => boolean);
}

export interface IoTPaginationConfig {
  current: number;
  pageSize: number;
  total: number;
  onChange: (current: number, pageSize: number) => void;
  showPageSize?: boolean;
  showJumper?: boolean;
  totalContent?: ReactNode;
  pageSummary?: ReactNode;
}

export interface IoTListPageTemplateProps<Row> {
  title: string;
  actions?: IoTPageAction[];
  /** 标题行右侧的页面级上下文控件，例如业务模块切换。 */
  headerTrailing?: ReactNode;
  filterMode?: IoTFilterMode;
  /**
   * normal 模式下 `actions` 的位置。
   * · header（默认）：标题行右侧。
   * · filter：与筛选字段同一行、位于右侧并与输入框底部对齐（Figma「Form 表单」模板：两个筛选项 + 一个操作按钮）。
   */
  actionsPlacement?: "header" | "filter";
  filters?: IoTFilterField[];
  embeddedSearch?: IoTEmbeddedSearch;
  /** normal 模式收起时默认可见的字段数；默认 4。字段总数不超过该值时不显示展开按钮。 */
  normalCollapsedCount?: number;
  /** 展开/收起筛选的文案与可访问名称（normal 与 embedded 共用）；默认使用中文。 */
  embeddedFilterLabels?: {
    expand: string;
    collapse: string;
  };
  /** embedded 工具栏右侧的自定义操作区；未提供时使用 actions。 */
  embeddedActions?: ReactNode;
  /** embedded 展开面板中的自定义筛选内容；未提供时使用标准 FilterGrid。 */
  embeddedFilterContent?: ReactNode;
  filterExpanded?: boolean;
  defaultFilterExpanded?: boolean;
  onFilterExpandedChange?: (expanded: boolean) => void;
  columns: IoTTableColumn<Row>[];
  rows: Row[];
  getRowKey: (row: Row, index: number) => string;
  rowActions?: IoTRowAction<Row>[];
  onRowOpen?: (row: Row) => void;
  rowOpenLabel?: string | ((row: Row) => string);
  loading?: boolean;
  /** replace 为标准空态加载；overlay 保留当前数据并覆盖表格。 */
  loadingMode?: "replace" | "overlay";
  loadingContent?: ReactNode;
  emptyText?: string;
  emptyContent?: ReactNode;
  /** 空数据且非加载状态时，在表格外独立展示空态，不挂载 Table。 */
  hideTableWhenEmpty?: boolean;
  tableCaption?: string;
  minTableWidth?: number;
  /**
   * 紧凑单元格：水平内边距由 24px 收为 16px，其余（行高、字号）不变。
   * 仅用于列数较多、1440 视口放不下的表（如仟帆用户管理的 9 列）；默认关闭，保持模板的 24px 规范。
   */
  compactCells?: boolean;
  /** embedded 模式：筛选面板下方、与搜索区同组的补充选项，例如「只搜索云管家设备」复选框。 */
  embeddedFooter?: ReactNode;
  /**
   * embedded 模式：筛选按钮的位置与筛选项容器。
   *   · placement：默认 `search`（搜索框右侧的方形图标按钮）；`actions` 时改为带文字的按钮，
   *     放在右侧按钮组最左边，文字取 `label`（缺省用展开文案）
   *   · container：默认 `panel`（搜索区下方展开灰底面板）；`drawer` 时点击按钮从右侧拉出抽屉
   *     （TDesign Drawer，China Design system 45841:327431），筛选项纵向排列，底部左对齐「查询 / 重置」
   */
  embeddedFilterToggle?: IoTEmbeddedFilterToggle;
  /** 筛选区之后、表格之前的通用内容插槽，例如业务 Tabs。 */
  beforeTable?: ReactNode;
  /**
   * 替换表格的自定义主体（如设备卡片列表）。传入后不渲染 Table，
   * columns / rows 等表格 props 被忽略；pagination 仍按原位置渲染。
   */
  customBody?: ReactNode;
  pagination?: IoTPaginationConfig;
  footer?: ReactNode;
  /**
   * 白色主卡片撑满可用高度：内容较少时卡片延伸到页面底部，版权信息始终贴底；
   * 内容超出时卡片随内容增高、页面整体滚动。需要父级是撑满高度的 flex 列容器。
   */
  fillHeight?: boolean;
  /** 标题与筛选工具栏固定在初始位置，主区滚动时只有下方内容滚动 */
  stickyToolbar?: boolean;
  /** customBody 的标题行（如「搜索结果（N）」），渲染在工具栏下方；stickyToolbar 时随工具栏一起固定 */
  customBodyHeader?: ReactNode;
  className?: string;
}
