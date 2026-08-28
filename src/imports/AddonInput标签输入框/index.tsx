import svgPaths from "./svg-wileltcvna";
type ItemColumnDiminishingMProps = {
  className?: string;
  disabled?: "false";
  state?: "normal 默认";
};

function ItemColumnDiminishingM({ className, disabled = "false", state = "normal 默认" }: ItemColumnDiminishingMProps) {
  return (
    <div className={className || "bg-[#f2f4f7] h-[14px] relative w-[28px]"}>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[9px] py-[4px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
            <div className="absolute inset-0 overflow-clip" data-name="chevron-down">
              <div className="absolute inset-[33.13%_20.11%_32.1%_17.39%]" data-name="chevron-right">
                <svg className="absolute block inset-0 size-full" fill="none" height="5.56346" preserveAspectRatio="none" viewBox="0 0 10 5.56346" width="10">
                  <path clipRule="evenodd" d={svgPaths.p11476100} fill="#141414" fillRule="evenodd" id="chevron-right" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type ItemColumnIncreasingMProps = {
  className?: string;
  disabled?: "false";
  state?: "normal 默认";
};

function ItemColumnIncreasingM({ className, disabled = "false", state = "normal 默认" }: ItemColumnIncreasingMProps) {
  return (
    <div className={className || "bg-[#f2f4f7] h-[14px] relative w-[28px]"}>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[9px] py-[4px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="chevron-up">
            <div className="absolute inset-0 overflow-clip" data-name="chevron-up">
              <div className="absolute inset-[32.61%_17.39%_32.61%_20.11%]" data-name="chevron-left">
                <svg className="absolute block inset-0 size-full" fill="none" height="5.56346" preserveAspectRatio="none" viewBox="0 0 10 5.56346" width="10">
                  <path clipRule="evenodd" d={svgPaths.p3d4ce700} fill="#141414" fillRule="evenodd" id="chevron-left" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0" data-name="controls">
      <ItemColumnIncreasingM className="bg-[#f2f4f7] h-[14px] relative shrink-0 w-[28px]" />
      <ItemColumnDiminishingM className="bg-[#f2f4f7] h-[14px] relative shrink-0 w-[28px]" />
    </div>
  );
}

function InputAddon() {
  return (
    <div className="bg-[#f2f4f7] relative rounded-br-[3px] rounded-tr-[3px] shrink-0 z-[1]" data-name="input-addon">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[8px] py-[5px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[22px]">台</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#c8cad0] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[3px] rounded-tr-[3px]" />
    </div>
  );
}

export default function AddonInput() {
  return (
    <div className="content-stretch flex isolate items-start relative size-full" data-name="addonInput 标签输入框">
      <div className="bg-white flex-[1_0_0] h-[32px] min-w-px relative rounded-bl-[4px] rounded-tl-[4px] z-[2]" data-name="InputNumber数字输入框">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[8px] py-px relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">200</p>
            <Controls />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#1450f5] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px] shadow-[0px_0px_0px_2px_#d0dcfd]" />
      </div>
      <InputAddon />
    </div>
  );
}