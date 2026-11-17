import { useEffect, useMemo, useRef, useState } from "react";
import type { AppEdition } from "../data/accounts";
import {
  buildTenantLookup,
  EMPTY_DEVICE_FILTERS,
  EMPTY_SCOPE,
  filterByScope,
  getOverviewDataset,
  matchesDeviceFilters,
  type DataScope,
  type DeviceFilters,
} from "../data/deviceOverview";
import type { Language } from "./device-overview/copy";
import { DeviceFilterView, type DeviceResultRow } from "./device-overview/DeviceFilterView";
import { OverviewView } from "./device-overview/OverviewView";

export type DeviceOverviewView = "overview" | "filter";

/**
 * 设备总览（通力 / 仟帆共用，父级按 edition 重挂载）。
 *
 * 两个视图共用一份状态：
 *   · overview —— 设备总览（Figma IOT Delivery 7105:16867）
 *   · filter   —— 设备筛选（Figma IOT Delivery 8463:34559），从总览的「设备筛选」进入
 * 当前视图由父级托管：设备筛选视图下顶栏开启 pageControls（返回 / 前进 / 刷新），
 * 「返回」回到总览，「刷新」按已应用的条件重新加载结果（refreshKey 递增）。
 * 数据范围与筛选条件留在这里，来回切换不会丢失；两个平台的组织架构、项目与设备各是一份演示数据。
 */
export default function DeviceOverviewContent({
  language,
  edition,
  view,
  onViewChange,
  refreshKey = 0,
}: {
  language: Language;
  edition: AppEdition;
  view: DeviceOverviewView;
  onViewChange: (view: DeviceOverviewView) => void;
  refreshKey?: number;
}) {
  const dataset = useMemo(() => getOverviewDataset(edition), [edition]);
  const rootRef = useRef<HTMLDivElement>(null);

  // 数据范围：草稿（下拉当前值）与已应用（点「查询」后）分开
  // 仟帆首次进入时选中所有真实租户；通力不启用租户范围（null）。
  const initialScope = () => edition === "qianfan"
    ? { ...EMPTY_SCOPE, tenants: dataset.org.map((tenant) => tenant.id) }
    : EMPTY_SCOPE;
  const [scopeDraft, setScopeDraft] = useState<DataScope>(initialScope);
  const [scope, setScope] = useState<DataScope>(initialScope);
  const scoped = useMemo(() => filterByScope(dataset, scope), [dataset, scope]);

  // 设备筛选：同样分草稿与已应用；进入时条件为空，直接列出当前数据范围内的所有设备
  const [filterDraft, setFilterDraft] = useState<DeviceFilters>(EMPTY_DEVICE_FILTERS);
  const [appliedFilters, setAppliedFilters] = useState<DeviceFilters>(EMPTY_DEVICE_FILTERS);

  const results = useMemo<DeviceResultRow[]>(() => {
    const projectById = new Map(scoped.projects.map((project) => [project.id, project]));
    const tenantByWorkgroup = buildTenantLookup(dataset.org);
    return scoped.devices
      .filter((device) => matchesDeviceFilters(device, appliedFilters))
      .map((device) => {
        const project = projectById.get(device.projectId);
        return { ...device, project, tenant: project ? tenantByWorkgroup.get(project.workgroupId) : undefined };
      });
  }, [appliedFilters, scoped, dataset.org]);

  // 顶栏「刷新」：演示数据是静态的，用一段短暂的加载态表示「按当前条件重新拉取」
  const [refreshing, setRefreshing] = useState(false);
  const isFirstRefresh = useRef(true);
  useEffect(() => {
    if (isFirstRefresh.current) {
      isFirstRefresh.current = false;
      return;
    }
    setRefreshing(true);
    const timer = window.setTimeout(() => setRefreshing(false), 400);
    return () => window.clearTimeout(timer);
  }, [refreshKey]);

  // AppShell 的 <main> 是唯一滚动区；切换视图后回到顶部
  useEffect(() => {
    rootRef.current?.scrollIntoView({ block: "start" });
  }, [view]);

  return (
    <div ref={rootRef} className="flex min-h-full flex-1 flex-col">
      {view === "overview" ? (
        <OverviewView
          language={language}
          edition={edition}
          dataset={dataset}
          scope={scopeDraft}
          scoped={scoped}
          scopeKey={JSON.stringify(scope)}
          onScopeChange={setScopeDraft}
          onQuery={() => setScope(scopeDraft)}
          onReset={() => {
            // 恢复默认范围（仟帆：所有租户；通力：不限）并立即应用到总览
            setScopeDraft(initialScope());
            setScope(initialScope());
          }}
          onOpenFilter={() => {
            // 带着当前选中的数据范围进入设备筛选
            setScope(scopeDraft);
            onViewChange("filter");
          }}
        />
      ) : (
        <DeviceFilterView
          language={language}
          edition={edition}
          filters={filterDraft}
          onFiltersChange={setFilterDraft}
          results={results}
          loading={refreshing && results.length > 0}
          onQuery={() => setAppliedFilters(filterDraft)}
          onReset={() => {
            setFilterDraft(EMPTY_DEVICE_FILTERS);
            setAppliedFilters(EMPTY_DEVICE_FILTERS);
          }}
        />
      )}
    </div>
  );
}
