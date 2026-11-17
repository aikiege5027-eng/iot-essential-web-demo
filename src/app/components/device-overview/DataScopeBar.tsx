import { useState } from "react";
import type { AppEdition } from "../../data/accounts";
import { Button, Checkbox, Select, Tag } from "tdesign-react";
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
 * 通力保留公司 → 区域 → 分公司 → 办事处 → PG → 工作组级联范围。
 * 仟帆按租户名称多选，默认全选且触发器显示「所有租户」；点「查询」才把范围应用到总览。
 */
export function DataScopeBar({
  language,
  edition,
  org,
  scope,
  onChange,
  onQuery,
  onReset,
  onOpenFilter,
}: {
  language: Language;
  edition: AppEdition;
  org: OrgNode[];
  scope: DataScope;
  onChange: (scope: DataScope) => void;
  onQuery: () => void;
  onReset: () => void;
  onOpenFilter: () => void;
}) {
  const t = overviewCopy[language];
  const options = getScopeOptions(org, scope);
  const isQianfan = edition === "qianfan";
  const [tenantPopupVisible, setTenantPopupVisible] = useState(false);
  const toOptions = (nodes: OrgNode[]) => nodes.map((node) => ({ label: node.label, value: node.id }));
  const tenantIds = org.map((tenant) => tenant.id);
  const selectedTenants = scope.tenants ?? [];
  const allTenantsSelected = tenantIds.length > 0 && tenantIds.every((tenantId) => selectedTenants.includes(tenantId));
  const tenantOptions = toOptions(org);

  // 每一级改动时清空它之后的所有级
  const levels: { key: Exclude<keyof DataScope, "workgroups" | "tenants">; placeholder: string; nodes: OrgNode[]; reset: Partial<DataScope> }[] = [
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
          {isQianfan ? (
            <LabelledControl
              label={t.scope.tenant}
              className={`min-w-[240px] max-w-[400px] flex-1 ${tenantPopupVisible ? "qianfan-tenant-selector--open" : ""}`}
            >
              <Select
                size="medium"
                multiple
                // 全选时只显示「所有租户」文案；折叠会额外追加 +N 标签
                minCollapsedNum={allTenantsSelected ? 0 : 1}
                tagProps={{ maxWidth: "100%" }}
                value={selectedTenants}
                valueDisplay={allTenantsSelected ? () => (
                  // 与单个租户标签同一套 Tag 样式，文案带租户总数；关闭等同清空全部勾选
                  <Tag
                    size="medium"
                    closable
                    maxWidth="100%"
                    onClose={({ e }) => {
                      e.stopPropagation();
                      onChange({ ...scope, tenants: [], company: "", region: "", branch: "", office: "", pg: "", workgroups: [] });
                    }}
                  >
                    {t.scope.allTenants(tenantIds.length)}
                  </Tag>
                ) : undefined}
                placeholder={t.scope.tenantPlaceholder}
                options={tenantOptions}
                panelTopContent={(
                  <div className={`t-select-option qianfan-tenant-selector__select-all ${allTenantsSelected ? "t-is-selected" : ""}`}>
                    <Checkbox
                      checked={allTenantsSelected}
                      indeterminate={selectedTenants.length > 0 && !allTenantsSelected}
                      onChange={(checked) => onChange({
                        ...scope,
                        tenants: checked ? tenantIds : [],
                        company: "",
                        region: "",
                        branch: "",
                        office: "",
                        pg: "",
                        workgroups: [],
                      })}
                    >
                      {t.scope.selectAll}
                    </Checkbox>
                  </div>
                )}
                clearable
                popupProps={{ ...MATCH_TRIGGER_WIDTH, overlayClassName: "qianfan-tenant-selector-popup" }}
                onPopupVisibleChange={setTenantPopupVisible}
                onChange={(next) => {
                  const tenants = (Array.isArray(next) ? next : []).map(String).filter((value) => tenantIds.includes(value));
                  onChange({ ...scope, tenants, company: "", region: "", branch: "", office: "", pg: "", workgroups: [] });
                }}
              />
            </LabelledControl>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {/* 次要按钮在左、主按钮在右 */}
        <Button theme="default" variant="base" size="medium" icon={<EmbeddedFilterIcon className="size-4" />} onClick={onOpenFilter}>
          {t.deviceFilter}
        </Button>
        <Button theme="default" variant="base" size="medium" onClick={onReset}>
          {t.reset}
        </Button>
        <Button theme="primary" size="medium" onClick={onQuery}>
          {t.query}
        </Button>
      </div>
    </div>
  );
}
