type ItemNormalTabsTopLProps = {
  className?: string;
  disabled?: "false";
  icon?: "false";
  remove?: "false";
  state?: "normal 默认" | "select 选中";
};

function ItemNormalTabsTopL({ className, disabled = "false", icon = "false", remove = "false", state = "normal 默认" }: ItemNormalTabsTopLProps) {
  const isFalseAndSelectAndFalseAndFalse = icon === "false" && state === "select 选中" && disabled === "false" && remove === "false";
  return (
    <div className={className || "bg-white relative"}>
      <div aria-hidden={isFalseAndSelectAndFalseAndFalse ? true : undefined} className={isFalseAndSelectAndFalseAndFalse ? "absolute border-[#1450f5] border-b-3 border-solid inset-0 pointer-events-none" : "content-stretch flex items-start p-[8px] relative size-full"}>
        {icon === "false" && state === "normal 默认" && disabled === "false" && remove === "false" && (
          <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative rounded-[3px] shrink-0" data-name="content">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#676a72] text-[16px] whitespace-nowrap">默认选项</p>
          </div>
        )}
      </div>
      {isFalseAndSelectAndFalseAndFalse && (
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative rounded-[3px] shrink-0" data-name="content">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1450f5] text-[16px] whitespace-nowrap">默认选项</p>
          </div>
        </div>
      )}
    </div>
  );
}
type NormalTabsProps = {
  className?: string;
  add?: "false";
  chevron?: "false";
  icon?: "false";
  items?: "5";
  placement?: "top 顶部";
  removable?: "false";
  size?: "large 大尺寸";
};

function NormalTabs({ className, add = "false", chevron = "false", icon = "false", items = "5", placement = "top 顶部", removable = "false", size = "large 大尺寸" }: NormalTabsProps) {
  return (
    <div className={className || "bg-white relative w-[1200px]"}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start relative size-full">
          <ItemNormalTabsTopL className="bg-white relative shrink-0" />
          <ItemNormalTabsTopL className="bg-white relative shrink-0" state="select 选中" />
          <ItemNormalTabsTopL className="bg-white relative shrink-0" />
          <ItemNormalTabsTopL className="bg-white relative shrink-0" />
          <ItemNormalTabsTopL className="bg-white relative shrink-0" />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function NormalTabs1() {
  return <NormalTabs className="bg-white relative size-full" />;
}