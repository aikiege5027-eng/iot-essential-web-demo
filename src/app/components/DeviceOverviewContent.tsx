import { useEffect, useMemo, useRef, useState } from "react";
import type { AppEdition } from "../data/accounts";
import {
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
  const [scopeDraft, setScopeDraft] = useState<DataScope>(EMPTY_SCOPE);
  const [scope, setScope] = useState<DataScope>(EMPTY_SCOPE);
  const scoped = useMemo(() => filterByScope(dataset, scope), [dataset, scope]);

  // 设备筛选：同样分草稿与已应用；未查询前不出结果
  const [filterDraft, setFilterDraft] = useState<DeviceFilters>(EMPTY_DEVICE_FILTERS);
  const [appliedFilters, setAppliedFilters] = useState<DeviceFilters | null>(null);

  const results = useMemo<DeviceResultRow[]>(() => {
    if (!appliedFilters) return [];
    const projectById = new Map(scoped.projects.map((project) => [project.id, project]));
    return scoped.devices
      .filter((device) => matchesDeviceFilters(device, appliedFilters))
      .map((device) => ({ ...device, project: projectById.get(device.projectId) }));
  }, [appliedFilters, scoped]);

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
    <div ref={rootRef} className="min-h-full">
      {view === "overview" ? (
        <OverviewView
          language={language}
          dataset={dataset}
          scope={scopeDraft}
          scoped={scoped}
          scopeKey={JSON.stringify(scope)}
          onScopeChange={setScopeDraft}
          onQuery={() => setScope(scopeDraft)}
          onOpenFilter={() => {
            // 带着当前选中的数据范围进入设备筛选
            setScope(scopeDraft);
            onViewChange("filter");
          }}
        />
      ) : (
        <DeviceFilterView
          language={language}
          filters={filterDraft}
          onFiltersChange={setFilterDraft}
          results={results}
          hasQueried={appliedFilters !== null}
          loading={refreshing && results.length > 0}
          onQuery={() => setAppliedFilters(filterDraft)}
          onReset={() => {
            setFilterDraft(EMPTY_DEVICE_FILTERS);
            setAppliedFilters(null);
          }}
        />
      )}
    </div>
  );
}
