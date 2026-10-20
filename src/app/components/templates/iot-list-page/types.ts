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

export interface IoTEmbeddedSearch {
  value: string;
  onChange: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
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
  /** 筛选区之后、表格之前的通用内容插槽，例如业务 Tabs。 */
  beforeTable?: ReactNode;
  pagination?: IoTPaginationConfig;
  footer?: ReactNode;
  className?: string;
}
