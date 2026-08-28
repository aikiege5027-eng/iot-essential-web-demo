import svgPaths from "./svg-6poc07urjb";
type ComponentProps = {
  className?: string;
  prefixIcon?: boolean;
  property1?: "日志上传";
  propValue?: "设备";
  propValue1?: "大";
};

function Component({ className, prefixIcon = true, property1 = "日志上传", propValue = "设备", propValue1 = "大" }: ComponentProps) {
  return (
    <div className={className || "bg-[#f5f7fa] relative rounded-[3px]"}>
      <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
          {prefixIcon && (
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
              <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                  <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                </svg>
              </div>
            </div>
          )}
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">日志上传</p>
        </div>
      </div>
    </div>
  );
}

export default function Component1() {
  return <Component className="bg-[#f5f7fa] relative rounded-[3px] size-full" />;
}