import svgPaths from "./svg-axudvnah6k";
type SpacerProps = {
  className?: string;
  spacer?: "4px";
};

function Spacer({ className, spacer = "4px" }: SpacerProps) {
  return <div className={className || "relative size-[4px]"} />;
}

function Tag() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="tag">
      <div className="bg-[#dfe1e8] relative rounded-[3px] shrink-0" data-name="Tag 标签">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative size-full">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">可测试</p>
            <div className="relative shrink-0 size-[14px]" data-name="item/tag-closeBtn">
              <div className="absolute inset-[25.03%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="6.99154" preserveAspectRatio="none" viewBox="0 0 6.99152 6.99154" width="6.99152">
                  <path d={svgPaths.pd8ef600} fill="#8F9195" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#dfe1e8] relative rounded-[3px] shrink-0" data-name="Tag 标签">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative size-full">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">库存</p>
            <div className="relative shrink-0 size-[14px]" data-name="item/tag-closeBtn">
              <div className="absolute inset-[25.03%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="6.99154" preserveAspectRatio="none" viewBox="0 0 6.99152 6.99154" width="6.99152">
                  <path d={svgPaths.pd8ef600} fill="#8F9195" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="content">
      <Tag />
    </div>
  );
}

function PrefixContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="prefix content">
      <Spacer className="flex flex-row items-center self-stretch" />
      <Content />
    </div>
  );
}

export default function Select() {
  return (
    <div className="bg-white relative rounded-[4px] size-full" data-name="Select 选择器">
      <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] py-[4px] relative size-full">
          <PrefixContent />
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