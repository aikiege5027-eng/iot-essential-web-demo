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
  filters?: IoTFilterField[];
  embeddedSearch?: IoTEmbeddedSearch;
  /** embedded 筛选按钮的可访问名称；默认使用中文。 */
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
  /** 筛选区之后、表格之前的通用内容插槽，例如业务 Tabs。 */
  beforeTable?: ReactNode;
  pagination?: IoTPaginationConfig;
  footer?: ReactNode;
  className?: string;
}
