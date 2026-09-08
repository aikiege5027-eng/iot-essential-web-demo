import { useState } from "react";
import { ThemeProvider } from "next-themes";
import { toast } from "sonner";
import { Button } from "tdesign-react";
import { Download, Ellipsis, Pencil, Plus, RefreshCw, Trash2 } from "lucide-react";
import { AppShell } from "../components/layout/AppShell";
import { getSideNavItems } from "../components/layout/nav-items";
import {
  LanguageIcon,
  NotificationIcon,
  WorkbenchIcon,
} from "../components/icons/nav-icons";
import {
  IoTConfirmDialog,
  IoTContentDialog,
  IoTDetailDrawer,
  IoTFieldList,
  IoTListPageTemplate,
  IoTToastContent,
} from "../components/templates/iot-list-page";
import type {
  IoTFilterMode,
  IoTPageAction,
  IoTRowAction,
  IoTTableColumn,
} from "../components/templates/iot-list-page";
import { Toaster } from "../components/ui/sonner";

interface DemoRow {
  id: string;
  device: string;
  project: string;
  location: string;
  status: "在线" | "警告" | "离线";
}

type TemplateVariant =
  | "normal-none"
  | "normal-four"
  | "normal-collapsed"
  | "normal-expanded"
  | "normal-uncontrolled"
  | "embedded-default"
  | "embedded-expanded";

type DataState = "data" | "empty" | "loading";

const VARIANTS: Array<{
  id: TemplateVariant;
  label: string;
  mode: IoTFilterMode;
  filterCount: number;
  expanded: boolean;
  controlled?: boolean;
}> = [
  { id: "normal-none", label: "Normal · 无筛选", mode: "none", filterCount: 0, expanded: false },
  { id: "normal-four", label: "Normal · 4 项", mode: "normal", filterCount: 4, expanded: false },
  { id: "normal-collapsed", label: "Normal · 折叠", mode: "normal", filterCount: 8, expanded: false },
  { id: "normal-expanded", label: "Normal · 展开", mode: "normal", filterCount: 8, expanded: true },
  { id: "normal-uncontrolled", label: "Normal · 非受控", mode: "normal", filterCount: 8, expanded: false, controlled: false },
  { id: "embedded-default", label: "Embed · 默认", mode: "embedded", filterCount: 8, expanded: false },
  { id: "embedded-expanded", label: "Embed · 展开", mode: "embedded", filterCount: 8, expanded: true },
];

const ROWS: DemoRow[] = Array.from({ length: 12 }, (_, index) => ({
  id: `KONE-${String(index + 1).padStart(4, "0")}`,
  device: `设备 ${String(index + 1).padStart(2, "0")}`,
  project: index % 2 === 0 ? "上海中心项目" : "深圳湾项目",
  location: index % 2 === 0 ? "上海市浦东新区" : "深圳市南山区",
  status: index % 5 === 0 ? "警告" : index % 7 === 0 ? "离线" : "在线",
}));

const statusVisual = {
  在线: { text: "text-success", dot: "bg-surface-success" },
  警告: { text: "text-warning", dot: "bg-surface-warning" },
  离线: { text: "text-secondary-text", dot: "bg-component-hover" },
} as const;

export default function IoTPageTemplateShowcase() {
  const [activeNav, setActiveNav] = useState("search");
  const [variantId, setVariantId] = useState<TemplateVariant>("normal-none");
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [filterValues, setFilterValues] = useState<Record<string, string>>({});
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataState, setDataState] = useState<DataState>("data");
  const [selectedRow, setSelectedRow] = useState<DemoRow | null>(null);
  const [contentDialogOpen, setContentDialogOpen] = useState(false);
  const [confirmRow, setConfirmRow] = useState<DemoRow | null>(null);

  const selectedVariant = VARIANTS.find((item) => item.id === variantId)!;
  const chooseVariant = (id: TemplateVariant) => {
    const variant = VARIANTS.find((item) => item.id === id)!;
    setVariantId(id);
    setFilterExpanded(variant.expanded);
  };

  const allFilters = Array.from({ length: 8 }, (_, index) => {
    const id = `field-${index + 1}`;
    return {
      id,
      label: index === 0 ? "设备编号" : index === 1 ? "项目名称" : `筛选项 ${index + 1}`,
      value: filterValues[id] ?? "",
      placeholder: "请输入内容",
      onChange: (value: string) =>
        setFilterValues((previous) => ({ ...previous, [id]: value })),
    };
  });

  const columns: IoTTableColumn<DemoRow>[] = [
    { id: "device", title: "设备名称", width: 232, render: (row) => row.device },
    { id: "project", title: "项目名称", width: 232, render: (row) => row.project },
    { id: "location", title: "项目地址", width: 232, render: (row) => row.location },
    {
      id: "status",
      title: "设备状态",
      width: 232,
      render: (row) => {
        const visual = statusVisual[row.status];
        return (
          <span className={`inline-flex items-center gap-1 ${visual.text}`}>
            <span aria-hidden="true" className={`size-1.5 rounded-full ${visual.dot}`} />
            {row.status}
          </span>
        );
      },
    },
  ];

  const notify = (
    message: string,
    status: "success" | "warning" | "error" | "info" = "success",
  ) =>
    toast.custom(() => <IoTToastContent status={status}>{message}</IoTToastContent>, {
      duration: 2400,
    });

  const pageActions: IoTPageAction[] = [
    {
      id: "refresh",
      label: "刷新",
      icon: <RefreshCw aria-hidden="true" />,
      onClick: () => notify("数据已刷新"),
    },
    {
      id: "export",
      label: "导出（禁用）",
      icon: <Download aria-hidden="true" />,
      disabled: true,
      onClick: () => notify("导出任务已创建"),
    },
    {
      id: "danger",
      label: "批量删除",
      theme: "danger",
      onClick: () => notify("危险操作示例", "warning"),
    },
    {
      id: "secondary",
      label: "次要按钮",
      onClick: () => setContentDialogOpen(true),
    },
    {
      id: "primary",
      label: "主要按钮",
      theme: "primary",
      icon: <Plus aria-hidden="true" />,
      onClick: () => setContentDialogOpen(true),
    },
  ];

  const rowActions: IoTRowAction<DemoRow>[] = [
    {
      id: "edit",
      label: (row) => `编辑 ${row.device}`,
      icon: <Pencil />,
      onClick: setSelectedRow,
    },
    {
      id: "delete",
      label: (row) => `删除 ${row.device}`,
      icon: <Trash2 />,
      theme: "danger",
      onClick: setConfirmRow,
    },
    {
      id: "more",
      label: (row) => `${row.device} 更多操作`,
      icon: <Ellipsis />,
      onClick: (row) => notify(`${row.device}：已打开更多操作`),
    },
  ];

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <AppShell
        navItems={getSideNavItems("cn")}
        activeId={activeNav}
        onNavSelect={setActiveNav}
        title="IOT Essential"
        user={{ name: "模板验证用户" }}
        headerSlot={<span className="text-foot12 text-secondary-text">页面模板验证</span>}
        actions={[
          { id: "workbench", label: "工作台", icon: <WorkbenchIcon /> },
          { id: "language", label: "切换语言", icon: <LanguageIcon />, dividerBefore: true },
          { id: "notification", label: "通知", icon: <NotificationIcon />, badgeCount: 3 },
        ]}
      >
        <div className="sticky top-0 z-20 flex flex-wrap items-center gap-2 border-b border-stroke bg-container px-6 py-2 shadow-popover">
          <span className="mr-2 text-foot12 font-medium text-secondary-text">模板变体</span>
          {VARIANTS.map((variant) => (
            <Button
              key={variant.id}
              size="small"
              theme={variant.id === variantId ? "primary" : "default"}
              variant={variant.id === variantId ? "base" : "text"}
              onClick={() => chooseVariant(variant.id)}
            >
              {variant.label}
            </Button>
          ))}
          <span aria-hidden="true" className="mx-2 h-5 w-px bg-stroke" />
          {(["data", "empty", "loading"] as const).map((state) => (
            <Button
              key={state}
              size="small"
              theme={dataState === state ? "primary" : "default"}
              variant={dataState === state ? "outline" : "text"}
              onClick={() => setDataState(state)}
            >
              {state === "data" ? "有数据" : state === "empty" ? "空态" : "加载态"}
            </Button>
          ))}
          <span aria-hidden="true" className="mx-2 h-5 w-px bg-stroke" />
          <Button size="small" variant="outline" onClick={() => setSelectedRow(ROWS[0])}>
            Drawer
          </Button>
          <Button size="small" variant="outline" onClick={() => setContentDialogOpen(true)}>
            Dialog
          </Button>
          <Button size="small" variant="outline" onClick={() => notify("操作成功", "success")}>
            成功 Toast
          </Button>
          <Button size="small" variant="outline" onClick={() => notify("请注意设备状态", "warning")}>
            警告 Toast
          </Button>
          <Button size="small" variant="outline" onClick={() => notify("操作失败", "error")}>
            错误 Toast
          </Button>
          <Button size="small" variant="outline" onClick={() => notify("任务已进入队列", "info")}>
            信息 Toast
          </Button>
        </div>

        <IoTListPageTemplate
          key={variantId}
          title="设备查询"
          actions={pageActions}
          filterMode={selectedVariant.mode}
          filters={allFilters.slice(0, selectedVariant.filterCount)}
          embeddedSearch={{
            value: searchValue,
            onChange: setSearchValue,
            onSearch: (value) => notify(`正在搜索：${value || "全部设备"}`),
          }}
          {...(selectedVariant.controlled === false
            ? { defaultFilterExpanded: selectedVariant.expanded }
            : {
                filterExpanded,
                onFilterExpandedChange: setFilterExpanded,
              })}
          columns={columns}
          rows={dataState === "empty" ? [] : ROWS}
          loading={dataState === "loading"}
          getRowKey={(row) => row.id}
          rowActions={rowActions}
          onRowOpen={setSelectedRow}
          rowOpenLabel={(row) => `查看 ${row.device} 详情`}
          tableCaption="IoT 设备查询结果"
          minTableWidth={1120}
          pagination={{
            current: currentPage,
            pageSize: 12,
            total: 101,
            showPageSize: true,
            showJumper: true,
            onChange: (current) => setCurrentPage(current),
          }}
          footer={
            <span>
              Copyright © 2019–{new Date().getFullYear()} KONE. All Rights Reserved
            </span>
          }
        />

        <IoTDetailDrawer
          open={Boolean(selectedRow)}
          onOpenChange={(open) => !open && setSelectedRow(null)}
          title={selectedRow?.device ?? "设备详情"}
          description="设备关键字段与当前状态"
        >
          <IoTFieldList
            items={[
              { label: "设备编号", value: selectedRow?.id ?? "—" },
              { label: "项目名称", value: selectedRow?.project ?? "—" },
              { label: "项目地址", value: selectedRow?.location ?? "—" },
              {
                label: "设备状态",
                value: selectedRow?.status ?? "—",
                status:
                  selectedRow?.status === "在线"
                    ? "success"
                    : selectedRow?.status === "警告"
                      ? "warning"
                      : "neutral",
              },
            ]}
          />
        </IoTDetailDrawer>

        <IoTContentDialog
          open={contentDialogOpen}
          onOpenChange={setContentDialogOpen}
          title="页面标题"
          description="内容型对话框模板"
          secondaryAction={{ label: "次要按钮", onClick: () => setContentDialogOpen(false) }}
          primaryAction={{
            label: "主要按钮",
            onClick: () => {
              setContentDialogOpen(false);
              notify("内容已保存");
            },
          }}
        >
          <div className="flex min-h-[316px] items-center justify-center rounded-md bg-secondarycontainer p-2 text-h7 font-medium text-secondary-text">
            功能区名称
          </div>
        </IoTContentDialog>

        <IoTConfirmDialog
          open={Boolean(confirmRow)}
          onOpenChange={(open) => !open && setConfirmRow(null)}
          title="删除设备"
          description={`确认删除 ${confirmRow?.device ?? "该设备"}？此操作无法撤销。`}
          confirmLabel="删除"
          danger
          onConfirm={async () => {
            await new Promise((resolve) => window.setTimeout(resolve, 350));
            notify("设备已删除");
          }}
        />
        <Toaster position="top-center" />
      </AppShell>
    </ThemeProvider>
  );
}
