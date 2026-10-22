import { useMemo, useState } from "react";
import { Button, Checkbox, Drawer, Input, Select } from "tdesign-react";
import emptyIllustration from "../../../imports/MainContent/a61db6f0d80700688e3c9c49f1c3d1437e8f0bd9.png";
import type { AppEdition } from "../../data/accounts";
import { EMPTY_DEVICE_FILTERS, type DeviceFilterKey, type DeviceFilters } from "../../data/deviceOverview";
import { getQueryDevice, loadRecentDeviceIds, pushRecentDeviceId, searchDevices, type QueryDevice } from "../../data/deviceQuery";
import { deviceCopy, overviewCopy } from "../device-overview/copy";
import { FILTER_ORDER, filterOptions } from "../device-overview/DeviceFilterView";
import { LabelledControl } from "../device-overview/shared";
import { deviceQueryCopy } from "../device-query/copy";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { CloseMIcon, MobileFilterIcon, MobileSearchIcon } from "../icons/mobile-icons";
import { MobileDeviceCard } from "./MobileDeviceCard";
import { MobileBottomBar, MobilePageTitle, type MobileLang } from "./MobileShell";

/**
 * 移动端 · 设备查询首页（Figma IOT Delivery 7105:15182 默认态 / 7105:16178 筛选面板）。
 *
 *   · 页面标题「设备查询」（一级页，无返回）
 *   · 胶囊搜索框（回车查询）+ 右侧 40 圆形筛选按钮；下方「只搜索云管家设备」（默认勾选）与「多设备查询」
 *   · 未查询：「最近查看设备」，没有记录时「暂无设备 / 请在上方搜索」；查询后：「搜索结果（N）」
 *   · 筛选按钮从底部拉起「设备筛选」面板：字段、选项与 Web 端「设备筛选」一致（12 项，均可多选），
 *     底部「重置」清空筛选项、「查询」按当前关键词 + 筛选项查询并收起
 *
 * 搜索结果与最近查看的卡片按最新 Web 版更新的移动端卡片（Figma 8626:40736 / 8626:40922，MobileDeviceCard）；
 * 搜索结果带模块列表，最近查看不带。
 * 搜索条件、最近查看记录与 Web 端共用 deviceQuery 数据层（按平台 + 账号存 localStorage）。
 */

const PAGE_SIZE = 10;

type Applied = { keyword: string; stewardOnly: boolean; multi: boolean; filters: DeviceFilters };

const hasAnyFilter = (filters: DeviceFilters) => FILTER_ORDER.some((key) => filters[key].length > 0);

export function MobileDeviceQuery({
  language,
  edition,
  email,
  onOpenDevice,
}: {
  language: MobileLang;
  edition: AppEdition;
  email: string;
  onOpenDevice: (device: QueryDevice) => void;
}) {
  const t = deviceQueryCopy[language];
  const filterCopy = deviceCopy[language];
  const options = filterOptions(filterCopy);
  const sheetTitle = overviewCopy[language].deviceFilter;

  const [keyword, setKeyword] = useState("");
  const [stewardOnly, setStewardOnly] = useState(true);
  const [multi, setMulti] = useState(false);
  const [filters, setFilters] = useState<DeviceFilters>(EMPTY_DEVICE_FILTERS);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [applied, setApplied] = useState<Applied | null>(null);
  const [recentIds, setRecentIds] = useState(() => loadRecentDeviceIds(edition, email));
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const results = useMemo(() => (applied ? searchDevices(edition, applied) : []), [applied, edition]);
  const recent = useMemo(
    () => recentIds.map((id) => getQueryDevice(edition, id)).filter((device): device is QueryDevice => Boolean(device)),
    [edition, recentIds],
  );
  const list = applied ? results : recent;
  const filtered = hasAnyFilter(filters);

  const submit = (nextKeyword = keyword) => {
    setApplied({ keyword: nextKeyword.trim(), stewardOnly, multi, filters });
    setVisibleCount(PAGE_SIZE);
  };

  const openDevice = (device: QueryDevice) => {
    setRecentIds(pushRecentDeviceId(edition, email, device.id));
    onOpenDevice(device);
  };

  return (
    <div className="flex flex-1 flex-col bg-container">
      {/* 页面标题 + 搜索区 + 列表标题吸顶（贴在 56 高顶栏下方），结果多时只有卡片列表滚动 */}
      <div className="sticky top-14 z-20 bg-container pb-3">
        <MobilePageTitle title={t.title} language={language} />

        {/* 搜索区：搜索框 56 高（上下 8），筛选按钮 40 圆形，与搜索框之间无额外间距（搜索框自带 16 右内边距） */}
        <div className="flex items-center pr-4">
          <div className="km-mobile-search min-w-0 flex-1 px-4 py-2">
            <LabelledControl label={t.title}>
              <Input
                size="large"
                value={keyword}
                clearable
                placeholder={multi ? t.mobileMultiPlaceholder : t.mobileSearchPlaceholder}
                prefixIcon={<MobileSearchIcon className="size-6 text-placeholder" />}
                onChange={(value) => setKeyword(String(value))}
                onEnter={(value) => submit(String(value))}
                onClear={() => setApplied(null)}
              />
            </LabelledControl>
          </div>
          <button
            type="button"
            aria-label={sheetTitle}
            aria-haspopup="dialog"
            aria-expanded={sheetOpen}
            onClick={() => setSheetOpen(true)}
            className={`flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-base ${
              // 有已选筛选项时保持品牌浅底语气，提示筛选生效中
              filtered ? "bg-brand-light text-brand" : "bg-component text-icon-primary hover:bg-component-hover"
            }`}
          >
            <MobileFilterIcon className="size-5" />
          </button>
        </div>

        {/* 搜索范围：与 Web 端一致的两个复选框 */}
        <div className="flex flex-wrap items-center gap-x-6 px-4 py-2">
          <Checkbox checked={stewardOnly} onChange={(checked) => setStewardOnly(Boolean(checked))}>
            {t.stewardOnly}
          </Checkbox>
          <Checkbox checked={multi} onChange={(checked) => setMulti(Boolean(checked))}>
            {t.multiDevice}
          </Checkbox>
        </div>


        <h2 id="mobile-device-query-list-title" aria-live="polite" className="m-0 px-4 pt-3 text-h7 font-semibold text-primary-text">
            {applied ? t.results(results.length) : t.recent}
          </h2>
      </div>

      <section aria-labelledby="mobile-device-query-list-title" className="flex flex-1 flex-col">
        {list.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-4 py-3">
            <ImageWithFallback src={emptyIllustration} alt="" className="mb-[-8px] size-[200px] object-cover" />
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="m-0 text-h7 font-semibold text-primary-text">{applied ? t.noResultTitle : t.emptyTitle}</p>
              <p className="m-0 text-foot12 text-secondary-text">{applied ? t.noResultHint : t.emptyHint}</p>
            </div>
          </div>
        ) : (
          <ul className="m-0 flex list-none flex-col gap-3 px-4 pb-4">
            {list.slice(0, visibleCount).map((device) => (
              <li key={device.id}>
                <MobileDeviceCard device={device} language={language} showModules={Boolean(applied)} onOpen={() => openDevice(device)} />
              </li>
            ))}
          </ul>
        )}
        {/* 与 Web 端每页 10 条一致，移动端改为「加载更多」逐批追加，避免一次渲染数百张卡片 */}
        {list.length > visibleCount && (
          <div className="px-4 pb-4">
            <Button theme="default" variant="outline" size="large" block onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>
              {t.loadMore(list.length - visibleCount)}
            </Button>
          </div>
        )}
      </section>

      <FilterSheet
        open={sheetOpen}
        title={sheetTitle}
        language={language}
        filters={filters}
        onChange={setFilters}
        options={options}
        labels={filterCopy.filters}
        onClose={() => setSheetOpen(false)}
        onReset={() => setFilters(EMPTY_DEVICE_FILTERS)}
        onSubmit={() => {
          submit();
          setSheetOpen(false);
        }}
      />
    </div>
  );
}

/**
 * 设备筛选底部面板（7105:16178）：TDesign Drawer placement="bottom"，蒙层 60%，顶部圆角 12；
 * 标题 H6 居中 + 右侧 24 关闭；表单项上标签下选择器、项间距 24；底部「重置 / 查询」各占一半。
 * 样式收口在 tdesign-patches.css 的 .km-mobile-sheet 下。
 */
function FilterSheet({
  open,
  title,
  language,
  filters,
  onChange,
  options,
  labels,
  onClose,
  onReset,
  onSubmit,
}: {
  open: boolean;
  title: string;
  language: MobileLang;
  filters: DeviceFilters;
  onChange: (next: DeviceFilters) => void;
  options: Record<DeviceFilterKey, { label: string; value: string }[]>;
  labels: Record<DeviceFilterKey, string>;
  onClose: () => void;
  onReset: () => void;
  onSubmit: () => void;
}) {
  const t = deviceQueryCopy[language];
  return (
    <Drawer
      className="km-mobile-sheet"
      visible={open}
      placement="bottom"
      size="90%"
      header={<h2 className="m-0 text-h6 font-semibold text-primary-text">{title}</h2>}
      closeBtn={<CloseMIcon className="size-6" />}
      onClose={onClose}
      footer={
        <MobileBottomBar>
          <Button className="km-mobile-button--secondary" theme="default" size="large" block onClick={onReset}>
            {t.reset}
          </Button>
          <Button theme="primary" size="large" block onClick={onSubmit}>
            {t.query}
          </Button>
        </MobileBottomBar>
      }
    >
      <div role="group" aria-label={title} className="flex flex-col">
        {FILTER_ORDER.map((key) => (
          <div key={key} className="flex flex-col pb-6">
            <span className="pb-2 text-body text-primary-text">{labels[key]}</span>
            <LabelledControl label={labels[key]}>
              <Select
                size="medium"
                multiple
                minCollapsedNum={1}
                clearable
                value={filters[key]}
                placeholder={t.filterPlaceholder}
                options={options[key]}
                tagProps={{ maxWidth: "100%" }}
                popupProps={{ overlayInnerStyle: (trigger) => ({ width: `${trigger.offsetWidth}px`, minWidth: 0 }) }}
                onChange={(next) => onChange({ ...filters, [key]: (Array.isArray(next) ? next : []).map(String) })}
              />
            </LabelledControl>
          </div>
        ))}
      </div>
    </Drawer>
  );
}
