import img from "./a61db6f0d80700688e3c9c49f1c3d1437e8f0bd9.png";

function Component({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[687px]"} data-name="空状态">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="[word-break:break-word] font-['PingFang_SC:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">审批中心</p>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white content-stretch flex items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0" data-name="content">
      <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1450f5] text-[14px] whitespace-nowrap">我发起的</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white content-stretch flex items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0" data-name="content">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] whitespace-nowrap">待我审批</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 whitespace-nowrap">
      <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[24px] relative shrink-0 text-[#141414] text-[16px]">暂无数据</p>
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#676a72] text-[12px]">当前没有发起审批的内容</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[492px] items-center justify-center relative shrink-0 w-full">
      <Component className="mb-[-8px] overflow-clip relative shrink-0 size-[200px]" />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white relative rounded-bl-[6px] rounded-br-[6px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[2px] relative size-full">
        <div className="bg-white relative shrink-0 w-full" data-name="normalTabs 选项卡-默认主题">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-start relative size-full">
              <div className="bg-white relative shrink-0" data-name="item/normalTabs/top/m">
                <div aria-hidden className="absolute border-[#1450f5] border-b-3 border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-start p-[8px] relative size-full">
                  <Content />
                </div>
              </div>
              <div className="bg-white relative shrink-0" data-name="item/normalTabs/top/m">
                <div className="content-stretch flex items-start p-[8px] relative size-full">
                  <Content1 />
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <Frame />
      </div>
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="relative rounded-[8px] size-full" data-name="Main Content">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-white h-[68px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full" data-name="Title">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center pb-[16px] pt-[24px] px-[20px] relative size-full">
              <Frame2 />
            </div>
          </div>
        </div>
        <Frame3 />
      </div>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}