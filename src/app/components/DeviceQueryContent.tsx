import { useMemo, useState } from "react";
import { Checkbox, Select } from "tdesign-react";
import emptyIllustration from "../../imports/MainContent/a61db6f0d80700688e3c9c49f1c3d1437e8f0bd9.png";
import type { AppEdition } from "../data/accounts";
import { EMPTY_DEVICE_FILTERS, type DeviceFilterKey, type DeviceFilters } from "../data/deviceOverview";
import { getQueryDevice, loadRecentDeviceIds, pushRecentDeviceId, searchDevices, type QueryDevice } from "../data/deviceQuery";
import { deviceCopy, overviewCopy } from "./device-overview/copy";
import { FILTER_ORDER, filterOptions } from "./device-overview/DeviceFilterView";
import { deviceQueryCopy, type Language } from "./device-query/copy";
import { DeviceInfoCard } from "./device-query/DeviceInfoCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { IoTListPageTemplate, type IoTFilterField } from "./templates/iot-list-page";

/**
 * 设备查询（Figma IOT Delivery 7680:52272 / 7680:52435 / 8626:40208 / 8626:40682）。
 *
 * 页面骨架：IoT 列表页模板的 embedded 筛选形态 —— 搜索框 + 筛选按钮（展开 12 项嵌套筛选）+ 右侧「重置 / 查询」，
 * 搜索框（加宽到 520）右侧是「只搜索云管家设备」（默认勾选）与「多设备查询」两个复选框，
 * 多设备查询开启后关键词可按逗号 / 空格拆成多个设备编号；主体用卡片列表替换表格（customBody）。
 *   · 未查询：展示「最近查看设备」；没有记录时为「暂无设备 / 请在上方搜索」
 *   · 查询后：展示「搜索结果（N）」，卡片带模块列表，10 条一页
 * 点卡片进入设备详情并记入最近查看（按平台 + 账号存 localStorage，下次进入仍在）。
 * 筛选项与「设备筛选」页同一套字段与选项，同样支持多选。
 */

const PAGE_SIZE = 10;

type Applied = { keyword: string; stewardOnly: boolean; multi: boolean; filters: DeviceFilters };

export default function DeviceQueryContent({
  language,
  edition,
  email,
  onOpenDevice,
}: {
  language: Language;
  edition: AppEdition;
  email: string;
  onOpenDevice: (device: QueryDevice) => void;
}) {
  const t = deviceQueryCopy[language];
  const filterCopy = deviceCopy[language];
  const options = filterOptions(filterCopy);

  const [keyword, setKeyword] = useState("");
  const [stewardOnly, setStewardOnly] = useState(true);
  const [multi, setMulti] = useState(false);
  const [filters, setFilters] = useState<DeviceFilters>(EMPTY_DEVICE_FILTERS);
  const [applied, setApplied] = useState<Applied | null>(null);
  const [page, setPage] = useState(1);
  // 最近查看：挂载时从 localStorage 读取，打开详情时写入。从详情返回时本组件保持挂载、保留搜索现场；
  // 离开设备查询再进入时重新挂载并回到「最近查看设备」—— 即设计稿的「下次再次进入，展示最近查看设备」。
  const [recentIds, setRecentIds] = useState(() => loadRecentDeviceIds(edition, email));
  const openDevice = (device: QueryDevice) => {
    setRecentIds(pushRecentDeviceId(edition, email, device.id));
    onOpenDevice(device);
  };

  const results = useMemo(() => (applied ? searchDevices(edition, applied) : []), [applied, edition]);
  const recent = useMemo(
    () => recentIds.map((id) => getQueryDevice(edition, id)).filter((device): device is QueryDevice => Boolean(device)),
    [edition, recentIds],
  );

  const submit = (nextKeyword = keyword) => {
    setApplied({ keyword: nextKeyword.trim(), stewardOnly, multi, filters });
    setPage(1);
  };

  const reset = () => {
    setKeyword("");
    setStewardOnly(true);
    setMulti(false);
    setFilters(EMPTY_DEVICE_FILTERS);
    setApplied(null);
    setPage(1);
  };

  // 模板的筛选字段只认字符串值（用于判断筛选按钮是否保持选中语气），多选值以逗号拼接传入，控件自己读数组状态
  const filterFields: IoTFilterField[] = FILTER_ORDER.map((key: DeviceFilterKey) => ({
    id: `device-query-${key}`,
    label: filterCopy.filters[key],
    value: filters[key].join(","),
    onChange: () => undefined,
    render: () => (
      <Select
        size="medium"
        multiple
        minCollapsedNum={1}
        clearable
        value={filters[key]}
        placeholder={t.filterPlaceholder}
        options={options[key]}
        onChange={(next) => setFilters((current) => ({ ...current, [key]: (Array.isArray(next) ? next : []).map(String) }))}
      />
    ),
  }));

  const pageResults = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const list = applied ? pageResults : recent;

  const empty = (
    <div className="flex flex-col items-center justify-center py-12">
      <ImageWithFallback src={emptyIllustration} alt="" className="mb-[-8px] size-[200px] object-cover" />
      <div className="flex flex-col items-center gap-2 whitespace-nowrap">
        <p className="text-h7 font-semibold text-primary-text">{applied ? t.noResultTitle : t.emptyTitle}</p>
        <p className="text-foot12 text-secondary-text">{applied ? t.noResultHint : t.emptyHint}</p>
      </div>
    </div>
  );

  return (
    <IoTListPageTemplate<QueryDevice>
      title={t.title}
      filterMode="embedded"
      embeddedSearch={{
        value: keyword,
        onChange: setKeyword,
        onSearch: (value) => submit(value),
        placeholder: multi ? t.multiPlaceholder : t.searchPlaceholder,
        maxWidth: 520,
        // 搜索范围选项紧跟搜索框右侧
        trailing: (
          <>
            <Checkbox checked={stewardOnly} onChange={(checked) => setStewardOnly(Boolean(checked))}>
              {t.stewardOnly}
            </Checkbox>
            <Checkbox checked={multi} onChange={(checked) => setMulti(Boolean(checked))}>
              {t.multiDevice}
            </Checkbox>
          </>
        ),
      }}
      embeddedFilterLabels={{ expand: t.expandFilter, collapse: t.collapseFilter }}
      // 「设备筛选」从右侧拉出抽屉：抽屉内「查询」按当前关键词 + 筛选项查询并关闭，「重置」只清空筛选项
      embeddedFilterToggle={{
        placement: "actions",
        container: "drawer",
        // 介于规范 small 300（太窄）与 medium 500 之间，按产品确认取 380
        drawerSize: 380,
        drawerOverlay: false,
        label: overviewCopy[language].deviceFilter,
        submitLabel: t.query,
        onSubmit: () => submit(),
        resetLabel: t.clearAll,
        onReset: () => setFilters(EMPTY_DEVICE_FILTERS),
      }}
      filters={filterFields}
      actions={[
        { id: "reset", label: t.reset, onClick: reset },
        { id: "query", label: t.query, theme: "primary", onClick: () => submit() },
      ]}
      fillHeight
      stickyToolbar
      columns={[]}
      rows={[]}
      getRowKey={(device) => device.id}
      customBodyHeader={
        <h2 id="device-query-list-title" className="text-h5 font-semibold text-primary-text" aria-live="polite">
          {applied ? t.results(results.length) : t.recent}
        </h2>
      }
      customBody={
        <section aria-labelledby="device-query-list-title" className="flex flex-col">
          {list.length === 0 ? (
            empty
          ) : (
            <ul className="flex flex-col gap-3">
              {list.map((device) => (
                <li key={device.id}>
                  <DeviceInfoCard device={device} language={language} showModules={Boolean(applied)} onOpen={() => openDevice(device)} />
                </li>
              ))}
            </ul>
          )}
        </section>
      }
      pagination={
        applied && results.length > PAGE_SIZE
          ? {
              current: page,
              pageSize: PAGE_SIZE,
              total: results.length,
              totalContent: t.total(results.length),
              showJumper: true,
              onChange: (current) => setPage(current),
            }
          : undefined
      }
    />
  );
}
