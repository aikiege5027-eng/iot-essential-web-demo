import { useLayoutEffect, useState } from "react";
import type { RefObject } from "react";
import type { PrimaryTableCol, TableRowData } from "tdesign-react";

/**
 * 表格首尾列的统一边距（tdesign-patches.css 中 :root 的 `--iot-table-edge-start / -end`）。
 *
 * - 首列左内边距、末列右内边距由 CSS 类 `iot-list-page-table__edge-start / __edge-end` 统一。
 * - 各页面声明的首尾列宽度是按 16px 边距设计的；边距加大后，带边距类的首尾列自动加宽
 *   （TABLE_EDGE_START / TABLE_EDGE_END 与 BASE_EDGE 的差值），保证内容区不被挤窄。
 * - 末列是左对齐时，列宽比内容宽就会在右侧留下大块空白（table-layout: fixed 下，
 *   所有列都有像素宽度时浏览器会把多余宽度按比例分给每一列，末列也会被拉宽）。
 *   这个 hook 实测末列内容的自然宽度，把末列收窄到「内容 + 左右内边距」，
 *   多出的宽度改由其余列按原比例分摊，于是末列内容右侧的留白正好等于边距。
 *
 * 只调整列宽，不改对齐方式；末列为居中 / 右对齐时右侧留白本来就是内边距，不处理。
 */

/** 首列左边距 / 末列右边距（px）。必须与 tdesign-patches.css 里 `--iot-table-edge-start / -end` 保持一致。 */
export const TABLE_EDGE_START = 24;
export const TABLE_EDGE_END = 40;
/** 各页面列宽设计时采用的边距；首尾列按两者差值加宽。 */
const BASE_EDGE = 16;

export const EDGE_START_CLASS = "iot-list-page-table__edge-start";
export const EDGE_END_CLASS = "iot-list-page-table__edge-end";
/** 固定宽度、不参与按比例拉伸的列（如只放复选框的选择列），宽屏时保持声明宽度。 */
export const NO_SCALE_CLASS = "iot-list-page-table__no-scale";

/** 这些元素整体算作内容（图标按钮、图标、输入控件），其余只量文字。 */
const BOX_TAGS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "IMG", "CANVAS", "svg"]);

function hasPaintedBox(element: Element) {
  const style = getComputedStyle(element);
  return (
    (style.backgroundColor !== "transparent" && style.backgroundColor !== "rgba(0, 0, 0, 0)") ||
    parseFloat(style.borderRightWidth) > 0
  );
}

/** 单元格放下全部内容所需的宽度：从单元格左边缘到内容最右端，再加右内边距。 */
function requiredCellWidth(cell: HTMLElement) {
  const cellRect = cell.getBoundingClientRect();
  const style = getComputedStyle(cell);
  const range = document.createRange();
  let maxRight = -Infinity;
  const walker = document.createTreeWalker(cell, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const parent = node.nodeType === Node.TEXT_NODE ? node.parentElement : (node as Element);
    // 读屏专用文本是 1px 的绝对定位盒子，里面的文字会溢出，不能计入
    if (!parent || parent.closest(".sr-only")) continue;
    if (node.nodeType === Node.TEXT_NODE) {
      if (!node.textContent?.trim()) continue;
      range.selectNodeContents(node);
      for (const rect of range.getClientRects()) if (rect.width > 0) maxRight = Math.max(maxRight, rect.right);
    } else if (BOX_TAGS.has(parent.tagName) || hasPaintedBox(parent)) {
      const rect = parent.getBoundingClientRect();
      if (rect.width > 0) maxRight = Math.max(maxRight, rect.right);
    }
  }
  if (!Number.isFinite(maxRight)) return 0;
  return Math.ceil(maxRight - cellRect.left + parseFloat(style.paddingRight) + parseFloat(style.borderRightWidth));
}

/** 末列所有单元格（表头 + 数据行，不含展开行里的嵌套表格）放下内容所需的最大宽度。 */
function measureEdgeEnd(container: HTMLElement) {
  const cells = Array.from(container.querySelectorAll<HTMLElement>(`th.${EDGE_END_CLASS}, td.${EDGE_END_CLASS}`)).filter(
    (cell) => !cell.closest(".t-table__expanded-row"),
  );
  if (cells.length === 0) return null;
  // 量自然宽度时临时禁止换行，否则被收窄后换行的文字会把「当前宽度」误当成所需宽度
  const previous = cells.map((cell) => cell.style.whiteSpace);
  cells.forEach((cell) => (cell.style.whiteSpace = "nowrap"));
  const width = Math.max(...cells.map(requiredCellWidth));
  cells.forEach((cell, index) => (cell.style.whiteSpace = previous[index]));
  return width;
}

type Layout = { container: number; fit: number | null };

/**
 * @param columns     TDesign 列定义；末列需带 `EDGE_END_CLASS`，且 `width` 为数字才会被调整
 * @param containerRef 表格的滚动容器（表格宽度 = 容器内宽与 minWidth 的较大者）
 * @param minWidth    表格的 min-width
 */
export function useEdgeFitColumns<Row extends TableRowData>(
  columns: PrimaryTableCol<Row>[],
  containerRef: RefObject<HTMLElement | null>,
  minWidth: number,
): PrimaryTableCol<Row>[] {
  const [layout, setLayout] = useState<Layout>({ container: 0, fit: null });
  columns = withEdgeWidths(columns);
  const last = columns[columns.length - 1];
  const enabled =
    !!last && typeof last.width === "number" && (last.align ?? "left") === "left" && String(last.className ?? "").includes(EDGE_END_CLASS);

  const [observed, setObserved] = useState<HTMLElement | null>(null);

  // 每次提交后重新量（换页、筛选、切换语言都会改变末列内容）；结果不变时 setState 会直接跳过
  useLayoutEffect(() => {
    const container = enabled ? containerRef.current : null;
    if (container !== observed) setObserved(container);
    if (!container) return;
    const next: Layout = { container: container.clientWidth, fit: measureEdgeEnd(container) };
    setLayout((current) => (current.container === next.container && current.fit === next.fit ? current : next));
  });

  // 容器宽度变化（窗口缩放、侧栏折叠）时重新分配列宽
  useLayoutEffect(() => {
    if (!observed) return;
    const observer = new ResizeObserver(() => {
      const width = observed.clientWidth;
      setLayout((current) => (current.container === width ? current : { ...current, container: width }));
    });
    observer.observe(observed);
    return () => observer.disconnect();
  }, [observed]);

  if (!enabled || !layout.fit || !layout.container) return columns;

  const lastIndex = columns.length - 1;
  const declaredLast = last.width as number;
  const others = columns.slice(0, lastIndex);
  const withLast = (width: number) => columns.map((column, index) => (index === lastIndex ? { ...column, width } : column));

  // 操作列等不允许省略的末列（ellipsis 未开启）始终按内容宽度；可省略的文字列不超过声明宽度
  const mustFit = !last.ellipsis;

  // 有列没给像素宽度（自适应列或百分比列）时，多余宽度由那些列吸收，末列只需收到内容宽度
  if (!others.every((column) => typeof column.width === "number")) {
    return withLast(mustFit ? layout.fit : Math.min(declaredLast, layout.fit));
  }

  const tableWidth = Math.max(minWidth, layout.container);
  const othersSum = others.reduce((sum, column) => sum + (column.width as number), 0);
  const isFixed = (column: PrimaryTableCol<Row>) => String(column.className ?? "").includes(NO_SCALE_CLASS);
  const fixedSum = others.reduce((sum, column) => sum + (isFixed(column) ? (column.width as number) : 0), 0);
  // 末列取「内容所需」；可省略的末列不挤占其余列的声明宽度，空间不够时仍按声明宽度（超出部分照常省略）
  const lastWidth = mustFit ? layout.fit : Math.min(layout.fit, Math.max(declaredLast, tableWidth - othersSum));
  const scale = Math.max(1, (tableWidth - lastWidth - fixedSum) / (othersSum - fixedSum));
  const scaled = others.map((column) => (isFixed(column) ? (column.width as number) : Math.floor((column.width as number) * scale)));
  // 取整后的余数补给最宽的列，保证列宽之和正好等于表格宽度，避免浏览器再把零头按比例分给末列
  const remainder = Math.max(0, tableWidth - lastWidth - scaled.reduce((sum, width) => sum + width, 0));
  if (remainder > 0 && scale > 1) {
    const widest = scaled.indexOf(Math.max(...scaled));
    scaled[widest] += remainder;
  }
  return columns.map((column, index) => ({ ...column, width: index === lastIndex ? lastWidth : scaled[index] }));
}

const hasClass = (column: PrimaryTableCol<TableRowData>, name: string) => String(column.className ?? "").includes(name);

/** 带首尾边距类、宽度为数字的列按边距增量加宽（不使用 hook 的直接 TDesign 表格也可单独调用）。 */
export function withEdgeWidths<Row extends TableRowData>(columns: PrimaryTableCol<Row>[]): PrimaryTableCol<Row>[] {
  return columns.map((column, index) => {
    if (typeof column.width !== "number") return column;
    let extra = 0;
    if (index === 0 && hasClass(column as PrimaryTableCol<TableRowData>, EDGE_START_CLASS)) extra += TABLE_EDGE_START - BASE_EDGE;
    if (index === columns.length - 1 && hasClass(column as PrimaryTableCol<TableRowData>, EDGE_END_CLASS)) extra += TABLE_EDGE_END - BASE_EDGE;
    return extra === 0 ? column : { ...column, width: column.width + extra };
  });
}
