import { Button, Select } from "tdesign-react";
import { getScopeOptions, type DataScope, type OrgNode } from "../../data/deviceOverview";
import { EmbeddedFilterIcon } from "../icons/iot-list-page-icons";
import type { Language } from "./copy";
import { overviewCopy } from "./copy";
import { LabelledControl } from "./shared";

/** 下拉面板与所属筛选框同宽；选项过长时由 TDesign 选项自带的单行省略截断（悬停可见全文）。 */
const MATCH_TRIGGER_WIDTH = {
  overlayInnerStyle: (trigger: HTMLElement) => ({ width: `${trigger.offsetWidth}px`, minWidth: 0 }),
};

/**
 * 「数据范围」级联筛选条（Figma 7105:17083 + 全局范围筛选 4497:16000）。
 *
 * 公司 → 区域 → 分公司 → 办事处 → PG → 工作组 六个 Select 首尾相接；上一级未选时下一级置灰，
 * 改动上一级会清空所有下级。工作组可多选。点「查询」才把范围应用到总览。
 */
export function DataScopeBar({
  language,
  org,
  scope,
  onChange,
  onQuery,
  onOpenFilter,
}: {
  language: Language;
  org: OrgNode[];
  scope: DataScope;
  onChange: (scope: DataScope) => void;
  onQuery: () => void;
  onOpenFilter: () => void;
}) {
  const t = overviewCopy[language];
  const options = getScopeOptions(org, scope);
  const toOptions = (nodes: OrgNode[]) => nodes.map((node) => ({ label: node.label, value: node.id }));

  // 每一级改动时清空它之后的所有级
  const levels: { key: Exclude<keyof DataScope, "workgroups">; placeholder: string; nodes: OrgNode[]; reset: Partial<DataScope> }[] = [
    { key: "company", placeholder: t.scope.company, nodes: options.companies, reset: { region: "", branch: "", office: "", pg: "", workgroups: [] } },
    { key: "region", placeholder: t.scope.region, nodes: options.regions, reset: { branch: "", office: "", pg: "", workgroups: [] } },
    { key: "branch", placeholder: t.scope.branch, nodes: options.branches, reset: { office: "", pg: "", workgroups: [] } },
    { key: "office", placeholder: t.scope.office, nodes: options.offices, reset: { pg: "", workgroups: [] } },
    { key: "pg", placeholder: t.scope.pg, nodes: options.pgs, reset: { workgroups: [] } },
  ];

  return (
    // 宽度自适应：级联组吃掉按钮之外的全部剩余空间（与按钮间距 24px）；五个单选按 120 等比伸缩（最窄 88），
    // 工作组按 200 伸缩且分得两倍余量。再放不下时，各框内的已选值以省略号截断（见 tdesign-patches.css）。
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 rounded-lg border border-stroke bg-container py-4 pr-5 lg:flex-nowrap">
      <div role="group" aria-labelledby="device-scope-label" className="flex min-w-0 flex-1 items-center gap-4">
        <span id="device-scope-label" className="w-20 shrink-0 text-right text-body text-primary-text">
          {t.scopeLabel}
        </span>
        <div className="device-scope-group flex min-w-0 flex-1 items-center">
          {levels.map((level) => (
            <LabelledControl key={level.key} label={level.placeholder} className="min-w-[88px] flex-[1_1_120px]">
              <Select
                size="medium"
                value={scope[level.key] || undefined}
                placeholder={level.placeholder}
                options={toOptions(level.nodes)}
                disabled={level.nodes.length === 0}
                clearable
                popupProps={MATCH_TRIGGER_WIDTH}
                onChange={(next) => onChange({ ...scope, [level.key]: next ? String(next) : "", ...level.reset })}
              />
            </LabelledControl>
          ))}
          <LabelledControl label={t.scope.workgroup} className="min-w-[120px] flex-[2_1_200px]">
            <Select
              size="medium"
              multiple
              minCollapsedNum={1}
              // 已选标签不换行，超出框宽时省略；完整文字见标签 title
              tagProps={{ maxWidth: "100%" }}
              value={scope.workgroups}
              placeholder={t.scope.workgroup}
              options={toOptions(options.workgroups)}
              disabled={options.workgroups.length === 0}
              clearable
              popupProps={MATCH_TRIGGER_WIDTH}
              onChange={(next) => onChange({ ...scope, workgroups: (Array.isArray(next) ? next : []).map(String) })}
            />
          </LabelledControl>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {/* 次要按钮在左、主按钮在右 */}
        <Button theme="default" variant="base" size="medium" icon={<EmbeddedFilterIcon className="size-4" />} onClick={onOpenFilter}>
          {t.deviceFilter}
        </Button>
        <Button theme="primary" size="medium" onClick={onQuery}>
          {t.query}
        </Button>
      </div>
    </div>
  );
}
