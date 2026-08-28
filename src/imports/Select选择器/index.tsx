import svgPaths from "./svg-z8ca1z1z12";

export default function Select() {
  return (
    <div className="bg-white relative rounded-[4px] size-full" data-name="Select 选择器">
      <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[22px] overflow-hidden text-ellipsis">选择物联卡状态</p>
          </div>
          <div className="relative shrink-0" data-name="chevron-down">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start px-[4px] py-[5px] relative size-full">
                <div className="h-[5.379px] relative shrink-0 w-[8.919px]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="5.37886" preserveAspectRatio="none" viewBox="0 0 8.91924 5.37886" width="8.91924">
                    <path d={svgPaths.p1df28700} fill="#8F9195" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}