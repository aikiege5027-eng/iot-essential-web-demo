import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Button, Drawer, Dropdown, Input, Pagination, Table } from "tdesign-react";
import type { PrimaryTableCol, PrimaryTableRef, TableRowData } from "tdesign-react";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  MoreHorizontal,
} from "lucide-react";
import {
  EmbeddedFilterIcon,
  EmbeddedSearchIcon,
} from "../../icons/iot-list-page-icons";
import { cn } from "../../ui/utils";
import type {
  IoTEmbeddedFilterToggle,
  IoTFilterField,
  IoTListPageTemplateProps,
  IoTPageAction,
  IoTRowAction,
} from "./types";
import { EDGE_END_CLASS, EDGE_START_CLASS, TABLE_EDGE_END, useEdgeFitColumns } from "./useEdgeFitColumns";

const actionTheme = (action: IoTPageAction) => action.theme ?? "default";

function PageActions({ actions }: { actions: IoTPageAction[] }) {
  const { directActions, overflowActions } = useMemo(() => {
    const primaryIndex = actions.reduce(
      (found, action, index) => (action.theme === "primary" ? index : found),
      -1,
    );
    // 模板每个区域只允许一个主操作。若调用方误传多个 primary，保留最后一个，
    // 其余按 default 呈现，避免出现两个直接主按钮。
    const normalized = actions.map((action, index) =>
      action.theme === "primary" && index !== primaryIndex
        ? { ...action, theme: "default" as const }
        : action,
    );
    const primary = primaryIndex >= 0 ? normalized[primaryIndex] : undefined;
    const secondary = normalized.filter((_, index) => index !== primaryIndex);
    const ordered = primary ? [...secondary, primary] : normalized;

    if (ordered.length <= 3) {
      return { directActions: ordered, overflowActions: [] };
    }

    const direct = primary ? [secondary[0], primary].filter(Boolean) : ordered.slice(-2);
    return {
      directActions: direct,
      overflowActions: ordered.filter((action) => !direct.includes(action)),
    };
  }, [actions]);

  if (actions.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      {overflowActions.length > 0 && (
        <Dropdown
          trigger="click"
          options={overflowActions.map((action) => ({
            content: action.label,
            value: action.id,
            disabled: action.disabled,
            theme: action.theme === "danger" ? ("error" as const) : undefined,
          }))}
          onClick={(option) => {
            const action = overflowActions.find((item) => item.id === option.value);
            if (action && !action.disabled) action.onClick();
          }}
        >
          <Button
            size="medium"
            theme="default"
            variant="base"
            suffix={<ChevronDown aria-hidden="true" />}
          >
            更多
          </Button>
        </Dropdown>
      )}

      {directActions.map((action) => (
        <Button
          key={action.id}
          size="medium"
          theme={actionTheme(action)}
          variant="base"
          icon={action.icon}
          disabled={action.disabled}
          onClick={action.onClick}
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
}

// Tailwind 需要静态类名，因此用映射表而不是拼接。
const FIELD_SPAN_CLASS: Record<NonNullable<IoTFilterField["span"]>, string> = {
  1: "",
  2: "min-[768px]:col-span-2",
  3: "min-[768px]:col-span-2 min-[1180px]:col-span-3",
  4: "min-[768px]:col-span-2 min-[1180px]:col-span-4",
};

function FilterField({ field }: { field: IoTFilterField }) {
  const inputId = `iot-filter-${field.id}`;

  return (
    <div className={cn("flex min-w-0 flex-col items-start pb-6", FIELD_SPAN_CLASS[field.span ?? 1])}>
      <label htmlFor={inputId} className="pb-2 text-body font-normal text-primary-text">
        {field.label}
      </label>
      <div className="w-full">
        {field.render ? (
          field.render({ id: inputId, value: field.value, onChange: field.onChange })
        ) : (
          <Input
            id={inputId}
            value={field.value}
            onChange={field.onChange}
            placeholder={field.placeholder ?? "请输入内容"}
            size="medium"
          />
        )}
      </div>
    </div>
  );
}

function FilterGrid({ fields }: { fields: IoTFilterField[] }) {
  return (
    <div className="grid min-w-0 flex-1 grid-cols-1 gap-x-5 min-[768px]:grid-cols-2 min-[1180px]:grid-cols-4">
      {fields.map((field) => (
        <FilterField key={field.id} field={field} />
      ))}
    </div>
  );
}

function ExpansionButton({
  expanded,
  controls,
  labels,
  onClick,
}: {
  expanded: boolean;
  controls: string;
  labels: { expand: string; collapse: string };
  onClick: () => void;
}) {
  return (
    <Button
      theme="primary"
      variant="text"
      size="medium"
      // 设计稿中的文字按钮无水平内边距，右缘与表格右缘对齐；
      // 保留默认内边距会让 80px 容器溢出并被卡片 overflow-hidden 裁切。
      style={{ paddingInline: 0 }}
      suffix={expanded ? <ChevronUp aria-hidden="true" /> : <ChevronDown aria-hidden="true" />}
      aria-expanded={expanded}
      aria-controls={controls}
      onClick={onClick}
    >
      {expanded ? labels.collapse : labels.expand}
    </Button>
  );
}

function NormalFilters({
  fields,
  collapsedCount,
  labels,
  expanded,
  panelId,
  onToggle,
  trailing,
}: {
  fields: IoTFilterField[];
  collapsedCount: number;
  labels: { expand: string; collapse: string };
  expanded: boolean;
  panelId: string;
  onToggle: () => void;
  /** 与字段同一行、靠右的操作区（actionsPlacement="filter"）。 */
  trailing?: ReactNode;
}) {
  const canExpand = fields.length > collapsedCount;
  const visibleFields = canExpand && !expanded ? fields.slice(0, collapsedCount) : fields;

  if (fields.length === 0) return null;

  return (
    <div id={panelId} className="flex flex-col gap-2 px-5 lg:flex-row lg:items-start lg:gap-8">
      <FilterGrid fields={visibleFields} />
      {(trailing || canExpand) && (
        // 顶部留出标签行（22 + 8）高度，让按钮与输入框同一水平线
        <div className="flex shrink-0 items-center gap-4 pb-6 lg:pt-[30px]">
          {trailing}
          {canExpand && <ExpansionButton expanded={expanded} controls={panelId} labels={labels} onClick={onToggle} />}
        </div>
      )}
    </div>
  );
}

const DRAWER_WIDTH = { small: "300px", medium: "500px", large: "760px" } as const;

/**
 * 筛选抽屉（TDesign Drawer，Figma China Design system 45841:327431「placement=right, overlay=true」）：
 * 宽度按规范三档 300 / 500 / 760（默认 500）、#141414 60% 蒙层；头部 56 高（H7 Semibold 标题 + 关闭按钮），底部 56 高、按钮左对齐「主按钮 / 次按钮」。
 * 样式收口在 tdesign-patches.css 的 .km-drawer 下。
 */
function FilterDrawer({
  id,
  open,
  onClose,
  title,
  toggle,
  children,
}: {
  id: string;
  open: boolean;
  onClose: () => void;
  title: string;
  toggle?: IoTEmbeddedFilterToggle;
  children: ReactNode;
}) {
  // 不带蒙层时点击抽屉外的页面任意处关闭抽屉（该次点击照常作用于页面，不拦截）。
  // 排除：抽屉本身、挂在 body 上的下拉 / 日期等弹出层、打开抽屉的按钮（它自己负责切换）。
  const overlay = toggle?.drawerOverlay ?? true;
  useEffect(() => {
    if (!open || overlay) return;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Element | null;
      if (!target?.closest) return;
      if (target.closest(".km-drawer .t-drawer__content-wrapper, .t-popup, .t-select__dropdown, [role='listbox']")) return;
      if (target.closest(`[aria-controls="${id}"]`)) return;
      onClose();
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, [open, overlay, id, onClose]);

  return (
    <Drawer
      // 不带蒙层时加 km-drawer--floating：左侧投影把抽屉与页面（尤其同高 56 的顶栏）区分开
      className={cn("km-drawer", toggle?.drawerOverlay === false && "km-drawer--floating", toggle?.drawerBelowNav && "km-drawer--below-nav")}
      visible={open}
      placement="right"
      size={typeof toggle?.drawerSize === "number" ? `${toggle.drawerSize}px` : DRAWER_WIDTH[toggle?.drawerSize ?? "medium"]}
      showOverlay={toggle?.drawerOverlay ?? true}
      header={<h2 id={`${id}-drawer-title`} className="m-0 text-h7 font-semibold text-primary-text">{title}</h2>}
      closeBtn
      onClose={onClose}
      destroyOnClose={false}
      footer={
        <div className="flex items-center gap-2">
          <Button
            theme="primary"
            size="medium"
            onClick={() => {
              toggle?.onSubmit?.();
              onClose();
            }}
          >
            {toggle?.submitLabel ?? "查询"}
          </Button>
          <Button theme="default" variant="base" size="medium" onClick={() => toggle?.onReset?.()}>
            {toggle?.resetLabel ?? "重置"}
          </Button>
        </div>
      }
    >
      <div id={id} role="group" aria-labelledby={`${id}-drawer-title`} className="flex flex-col">
        {children}
      </div>
    </Drawer>
  );
}

function EmbeddedFilters({
  fields,
  search,
  actions,
  customActions,
  customFilterContent,
  filterLabels,
  expanded,
  panelId,
  onToggle,
  onClose,
  footer,
  toggle,
}: {
  /** 只关不开（抽屉的关闭按钮、蒙层、Esc、查询后关闭），避免已关闭时再次触发变成打开 */
  onClose: () => void;
  footer?: ReactNode;
  toggle?: IoTEmbeddedFilterToggle;
  fields: IoTFilterField[];
  search?: IoTListPageTemplateProps<unknown>["embeddedSearch"];
  actions: IoTPageAction[];
  customActions?: ReactNode;
  customFilterContent?: ReactNode;
  filterLabels: { expand: string; collapse: string };
  expanded: boolean;
  panelId: string;
  onToggle: () => void;
}) {
  const hasSelectedFilters = fields.some((field) => field.value.trim().length > 0);
  const active = expanded || hasSelectedFilters;
  const inActions = toggle?.placement === "actions";
  const inDrawer = toggle?.container === "drawer";
  const toggleProps = {
    size: "medium" as const,
    theme: active ? ("primary" as const) : ("default" as const),
    variant: active ? ("outline" as const) : ("base" as const),
    icon: <EmbeddedFilterIcon className="size-4" />,
    "aria-expanded": expanded,
    "aria-controls": panelId,
    ...(inDrawer ? { "aria-haspopup": "dialog" as const } : {}),
    onClick: onToggle,
  };

  return (
    <div className="flex flex-col gap-4 px-5 pb-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex min-w-0 flex-1 items-center gap-4">
          {search && (
            <div className="w-full" style={{ maxWidth: search.maxWidth ?? 400 }}>
              <Input
                value={search.value}
                onChange={search.onChange}
                onEnter={(value) => search.onSearch?.(value)}
                placeholder={
                  search.placeholder ?? "设备编号/项目编号/项目名称/项目地址"
                }
                prefixIcon={<EmbeddedSearchIcon className="t-icon size-4" />}
                size="medium"
                clearable
              />
            </div>
          )}
          {search?.trailing && <div className="flex shrink-0 items-center gap-4">{search.trailing}</div>}
          {fields.length > 0 && !inActions && (
            <Button {...toggleProps} shape="square" aria-label={expanded ? filterLabels.collapse : filterLabels.expand} />
          )}
        </div>
        {fields.length > 0 && inActions ? (
          // 带文字的筛选按钮放在右侧按钮组最左边（样式同设备总览的「设备筛选」）
          <div className="flex flex-wrap items-center justify-end gap-2">
            <Button {...toggleProps}>{toggle?.label ?? filterLabels.expand}</Button>
            {customActions ?? <PageActions actions={actions} />}
          </div>
        ) : (
          customActions ?? <PageActions actions={actions} />
        )}
      </div>

      {fields.length > 0 && !inDrawer && (
        <div
          id={panelId}
          hidden={!expanded}
          className="rounded-md bg-secondarycontainer px-4 pt-2"
        >
          {expanded && (customFilterContent ?? <FilterGrid fields={fields} />)}
        </div>
      )}
      {fields.length > 0 && inDrawer && (
        <FilterDrawer
          id={panelId}
          open={expanded}
          onClose={onClose}
          title={toggle?.drawerTitle ?? toggle?.label ?? filterLabels.expand}
          toggle={toggle}
        >
          {customFilterContent ?? fields.map((field) => <FilterField key={field.id} field={{ ...field, span: 1 }} />)}
        </FilterDrawer>
      )}
      {footer}
    </div>
  );
}

function RowActionButton<Row>({ action, row }: { action: IoTRowAction<Row>; row: Row }) {
  const label = typeof action.label === "function" ? action.label(row) : action.label;
  const disabled =
    typeof action.disabled === "function" ? action.disabled(row) : action.disabled;

  return (
    <button
      type="button"
      onClick={() => action.onClick(row)}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={cn(
        "flex size-8 items-center justify-center rounded-sm border-0 bg-transparent transition-colors",
        "hover:bg-container-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base",
        action.theme === "danger" ? "text-error" : "text-link",
        "disabled:cursor-not-allowed disabled:text-disabled",
      )}
    >
      <span aria-hidden="true" className="[&>svg]:size-4">
        {action.icon}
      </span>
    </button>
  );
}

type InternalTableRow<Row> = TableRowData & {
  __iotKey: string;
  __iotIndex: number;
  value: Row;
};

function DataTable<Row>({
  columns,
  rows,
  getRowKey,
  rowActions = [],
  onRowOpen,
  rowOpenLabel,
  loading,
  loadingMode = "replace",
  loadingContent,
  emptyText = "暂无数据",
  emptyContent,
  hideTableWhenEmpty = false,
  tableCaption,
  minTableWidth = 880,
  compactCells = false,
}: Pick<
  IoTListPageTemplateProps<Row>,
  | "columns"
  | "rows"
  | "getRowKey"
  | "rowActions"
  | "onRowOpen"
  | "rowOpenLabel"
  | "loading"
  | "loadingMode"
  | "loadingContent"
  | "emptyText"
  | "emptyContent"
  | "hideTableWhenEmpty"
  | "tableCaption"
  | "minTableWidth"
  | "compactCells"
>) {
  const tableRef = useRef<PrimaryTableRef>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const captionId = `iot-table-caption-${useId().replaceAll(":", "")}`;
  const tableRows: InternalTableRow<Row>[] = rows.map((value, index) => ({
    __iotKey: getRowKey(value, index),
    __iotIndex: index,
    value,
  }));

  const tableColumns: PrimaryTableCol<InternalTableRow<Row>>[] = columns.map(
    (column, index) => ({
      colKey: `__iot_column_${index}`,
      title: column.title,
      width: column.width,
      align: column.align,
      fixed: column.fixed,
      className: cn("iot-list-page-table__cell", column.className),
      ellipsis: column.ellipsis ?? true,
      ellipsisTitle: true,
      cell: ({ row }) => column.render(row.value, row.__iotIndex),
    }),
  );

  if (rowActions.length > 0) {
    tableColumns.push({
      colKey: "__iot_actions",
      title: "操作",
      width: 145,
      className: "iot-list-page-table__actions",
      cell: ({ row }) => (
        <div className="flex items-center">
          {rowActions.map((action) => (
            <RowActionButton key={action.id} action={action} row={row.value} />
          ))}
        </div>
      ),
    });
  }

  if (onRowOpen) {
    tableColumns.push({
      colKey: "__iot_details",
      title: (
        <span className="sr-only">
          {typeof rowOpenLabel === "string" ? rowOpenLabel : "详情"}
        </span>
      ),
      // 箭头列视为最右列：8 + 32px 按钮 + 右边距，按钮右缘距表格右边缘 = 右边距
      width: TABLE_EDGE_END + 40,
      className: "iot-list-page-table__details",
      cell: ({ row }) => (
        <button
          type="button"
          onClick={() => onRowOpen(row.value)}
          aria-label={
            typeof rowOpenLabel === "function"
              ? rowOpenLabel(row.value)
              : (rowOpenLabel ?? "查看详情")
          }
          className="flex size-8 items-center justify-center rounded-sm border-0 bg-transparent text-icon-inactive hover:bg-container-hover hover:text-icon-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base"
        >
          <ChevronRight aria-hidden="true" className="size-4" />
        </button>
      ),
    });
  }

  // 首尾列统一边距（详情箭头列宽度固定为 8 + 按钮 + 右边距，由自身样式控制，不参与末列收窄）
  const edgeColumns = tableColumns.map((column, index) => {
    const isFirst = index === 0;
    const isLast = index === tableColumns.length - 1 && column.colKey !== "__iot_details";
    if (!isFirst && !isLast) return column;
    return { ...column, className: cn(column.className as string, isFirst && EDGE_START_CLASS, isLast && EDGE_END_CLASS) };
  });
  const fittedColumns = useEdgeFitColumns(edgeColumns, wrapperRef, minTableWidth);

  // TDesign Table 没有原生 caption / table HTML attributes prop。
  // 通过实例 ref 把模板的可访问名称和 busy 状态补到内部原生 table 上。
  useEffect(() => {
    const tableElement = tableRef.current?.tableHtmlElement;
    if (!tableElement) return;

    if (tableCaption) {
      tableElement.setAttribute("aria-labelledby", captionId);
    } else {
      tableElement.removeAttribute("aria-labelledby");
    }

    if (loading) {
      tableElement.setAttribute("aria-busy", "true");
    } else {
      tableElement.removeAttribute("aria-busy");
    }
  }, [captionId, hideTableWhenEmpty, loading, rows.length, tableCaption]);

  if (hideTableWhenEmpty && !loading && rows.length === 0) {
    return (
      <div className="mx-5 flex min-h-[324px] items-center justify-center">
        {emptyContent ?? emptyText}
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className="relative mx-5 overflow-x-auto rounded-md border border-stroke"
      aria-busy={loading || undefined}
    >
      {loading && loadingMode === "overlay" && (
        <div className="absolute inset-0 z-10 flex min-h-[280px] items-center justify-center bg-container/85 backdrop-blur-[1px]">
          {loadingContent ?? (
            <div className="flex items-center gap-2 rounded-md bg-container px-4 py-3 text-body text-brand shadow-popover">
              <span
                aria-hidden="true"
                className="size-4 animate-spin rounded-full border-2 border-brand-disabled border-t-brand-base"
              />
              正在加载数据…
            </div>
          )}
        </div>
      )}
      {tableCaption && (
        <span id={captionId} className="sr-only">
          {tableCaption}
        </span>
      )}
      <Table<InternalTableRow<Row>>
        ref={tableRef}
        className={cn("iot-list-page-table", compactCells && "iot-list-page-table--compact")}
        style={{ minWidth: `${minTableWidth}px` }}
        columns={fittedColumns}
        data={loading && loadingMode === "replace" ? [] : tableRows}
        rowKey="__iotKey"
        size="medium"
        tableLayout="fixed"
        hover
        disableDataPage
        empty={
          loading && loadingMode === "replace"
            ? (loadingContent ?? "正在加载数据…")
            : (emptyContent ?? emptyText)
        }
      />
    </div>
  );
}

function PagePagination({ pagination }: Pick<IoTListPageTemplateProps<unknown>, "pagination">) {
  if (!pagination) return null;

  return (
    <div className="flex min-h-16 flex-wrap items-center justify-between gap-4 px-11 py-3">
      <p className="text-body text-secondary-text">
        {pagination.totalContent ?? `共 ${pagination.total} 项数据`}
      </p>
      <div className="iot-list-page-pagination-controls flex shrink-0 items-center gap-2 whitespace-nowrap">
        <Pagination
          current={pagination.current}
          pageSize={pagination.pageSize}
          total={pagination.total}
          size="medium"
          showPageSize={pagination.showPageSize ?? false}
          showJumper={pagination.showJumper ?? false}
          totalContent={false}
          onChange={(pageInfo) => pagination.onChange(pageInfo.current, pageInfo.pageSize)}
        />
        {pagination.pageSummary && (
          <span className="shrink-0 whitespace-nowrap text-body text-secondary-text">{pagination.pageSummary}</span>
        )}
      </div>
    </div>
  );
}

/**
 * IoT 后台列表页的配置驱动模板。
 *
 * 只负责标题、操作、筛选、表格和分页；视口级导航与滚动交给 AppShell。
 */
export function IoTListPageTemplate<Row>({
  title,
  actions = [],
  headerTrailing,
  filterMode = "none",
  actionsPlacement = "header",
  filters = [],
  embeddedSearch,
  normalCollapsedCount = 4,
  embeddedFilterLabels = { expand: "展开筛选", collapse: "收起筛选" },
  embeddedActions,
  embeddedFilterContent,
  filterExpanded,
  defaultFilterExpanded = false,
  onFilterExpandedChange,
  columns,
  rows,
  getRowKey,
  rowActions,
  onRowOpen,
  rowOpenLabel,
  loading,
  loadingMode,
  loadingContent,
  emptyText,
  emptyContent,
  hideTableWhenEmpty = false,
  tableCaption,
  minTableWidth,
  compactCells,
  embeddedFooter,
  embeddedFilterToggle,
  beforeTable,
  customBody,
  pagination,
  footer,
  fillHeight = false,
  stickyToolbar = false,
  customBodyHeader,
  className,
}: IoTListPageTemplateProps<Row>) {
  const [internalExpanded, setInternalExpanded] = useState(defaultFilterExpanded);
  const isControlled = filterExpanded !== undefined;
  const expanded = isControlled ? filterExpanded : internalExpanded;
  const panelId = `iot-filter-panel-${useId().replaceAll(":", "")}`;

  const setExpanded = (next: boolean) => {
    if (!isControlled) setInternalExpanded(next);
    onFilterExpandedChange?.(next);
  };

  return (
    <div className={cn("flex min-h-full w-full min-w-0 flex-col px-6 pt-[22px]", fillHeight && "flex-1", className)}>
      <section
        aria-labelledby={`${panelId}-title`}
        // 吸顶时卡片不能设 overflow：overflow-hidden 会让卡片自身成为滚动容器（sticky 失效），overflow-clip 会裁掉上方的遮挡层
        className={cn("rounded-md border border-stroke bg-container", !stickyToolbar && "overflow-hidden", fillHeight && "flex flex-1 flex-col")}
      >
        {/* 标题 + 筛选工具栏；stickyToolbar 时固定在初始位置（距主区顶部 22px）不随结果滚动：
            外层向上延伸 22px、页面底色，遮住滚上去的结果；内层自带卡片的上、左、右描边覆盖在卡片描边上。
            customBodyHeader（如「搜索结果（N）」）也在固定区内，下方只有结果列表滚动 */}
        <div className={cn(stickyToolbar && "sticky top-0 z-10 -mx-px -mt-[23px] bg-page pt-[22px]")}>
        <div className={cn(stickyToolbar && "rounded-t-md border-x border-t border-stroke bg-container")}>
          <header className="flex min-h-[68px] flex-wrap items-center justify-between gap-4 px-5 py-4">
            <h1 id={`${panelId}-title`} className="text-h5 font-semibold text-primary-text">
              {title}
            </h1>
            {headerTrailing ??
              (filterMode !== "embedded" && !(filterMode === "normal" && actionsPlacement === "filter") ? (
                <PageActions actions={actions} />
              ) : null)}
          </header>

          {filterMode === "normal" && (
            <NormalFilters
              fields={filters}
              collapsedCount={normalCollapsedCount}
              labels={embeddedFilterLabels}
              expanded={expanded}
              panelId={panelId}
              onToggle={() => setExpanded(!expanded)}
              trailing={actionsPlacement === "filter" ? <PageActions actions={actions} /> : undefined}
            />
          )}

          {filterMode === "embedded" && (
            <EmbeddedFilters
              fields={filters}
              search={embeddedSearch}
              actions={actions}
              customActions={embeddedActions}
              customFilterContent={embeddedFilterContent}
              filterLabels={embeddedFilterLabels}
              expanded={expanded}
              panelId={panelId}
              onToggle={() => setExpanded(!expanded)}
              onClose={() => setExpanded(false)}
              footer={embeddedFooter}
              toggle={embeddedFilterToggle}
            />
          )}
          {customBodyHeader && <div className="px-5 pb-5">{customBodyHeader}</div>}
        </div>
        </div>
        {beforeTable}

        {customBody ? (
          <div className={cn("px-5 pb-2", fillHeight && "flex-1")}>{customBody}</div>
        ) : (
        <DataTable
          columns={columns}
          rows={rows}
          getRowKey={getRowKey}
          rowActions={rowActions}
          onRowOpen={onRowOpen}
          rowOpenLabel={rowOpenLabel}
          loading={loading}
          loadingMode={loadingMode}
          loadingContent={loadingContent}
          emptyText={emptyText}
          emptyContent={emptyContent}
          hideTableWhenEmpty={hideTableWhenEmpty}
          tableCaption={tableCaption}
          minTableWidth={minTableWidth}
          compactCells={compactCells}
        />
        )}
        <PagePagination pagination={pagination} />
      </section>

      {footer && (
        <footer className="mt-auto flex min-h-[52px] items-center justify-center px-5 text-foot12 text-secondary-text">
          {footer}
        </footer>
      )}
      {!footer && <div className="h-6 shrink-0" aria-hidden="true" />}
    </div>
  );
}
