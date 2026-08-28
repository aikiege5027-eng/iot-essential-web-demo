import svgPaths from "./svg-o1xlcz3uwi";
type ItemCloseBtnProps = {
  className?: string;
  propValue?: "normal 默认";
};

function ItemCloseBtn({ className, propValue = "normal 默认" }: ItemCloseBtnProps) {
  return (
    <div className={className || "relative rounded-[3px] size-[24px]"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[2px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="状态=normal 默认">
            <div className="absolute inset-[25.03%]" data-name="Union">
              <svg className="absolute block inset-0 size-full" fill="none" height="7.99033" preserveAspectRatio="none" viewBox="0 0 7.99031 7.99033" width="7.99031">
                <path d={svgPaths.p1e5ad00} fill="#676A72" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Master({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[80px]"} data-name=".master/黑色蒙层">
      <div className="absolute bg-[#141414] inset-0 opacity-60" data-name="overlay" />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#f5f7fa] flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="字段描述">
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[22px] not-italic px-[12px] py-[6px] relative size-full text-[14px] whitespace-nowrap">
          <p className="font-['PingFang_SC:Medium',sans-serif] overflow-hidden relative shrink-0 text-[#141414] text-ellipsis w-[80px]">字段名称</p>
          <p className="flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] min-w-px overflow-hidden relative text-[#676a72] text-ellipsis text-right">字段内容</p>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#f5f7fa] flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="字段描述">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[6px] relative size-full">
          <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[14px] text-ellipsis w-[80px] whitespace-nowrap">字段状态</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis text-right whitespace-nowrap">​</p>
          <div className="relative shrink-0 w-[38px]" data-name="item/content/state">
            <div className="flex flex-row items-center justify-end size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-end relative size-full">
                <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                  <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                    <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                  </svg>
                </div>
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">已完成</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] top-[77px] w-[437px]">
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Component />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Component1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Drawer() {
  return (
    <div className="absolute bg-white inset-[0_0_0_66.88%] overflow-clip" data-name="Drawer">
      <div className="absolute bg-white h-[56px] left-0 right-0 top-0" data-name=".item/drawer/header">
        <div aria-hidden className="absolute border-[#c8cad0] border-b border-solid inset-0 pointer-events-none" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] left-[16px] not-italic text-[#141414] text-[16px] top-1/2 whitespace-nowrap">
          <p className="leading-[24px]">页面标题</p>
        </div>
        <ItemCloseBtn className="-translate-y-1/2 absolute right-[16px] rounded-[3px] size-[16px] top-1/2" />
      </div>
      <Frame />
    </div>
  );
}

export default function PageTypeOverlayContentSidePanel() {
  return (
    <div className="bg-[#5e5e5e] relative size-full" data-name="Page type=Overlay;Content=Side Panel">
      <div className="absolute bg-[#141414] inset-0 opacity-60" data-name="overlay" />
      <Drawer />
    </div>
  );
}