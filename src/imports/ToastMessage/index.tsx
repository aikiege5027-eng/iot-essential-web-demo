import svgPaths from "./svg-5yubahwo3j";
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

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="content">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="17.5" preserveAspectRatio="none" viewBox="0 0 17.5 17.5" width="17.5">
            <path d={svgPaths.p2cd67100} fill="#1ED273" id="Union" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">批量升级任务已进入审批，您可以在审批记录中查看进度</p>
    </div>
  );
}

export default function ToastMessage() {
  return (
    <div className="bg-white drop-shadow-[0px_8px_10px_rgba(0,0,0,0.1)] relative rounded-[6px] size-full" data-name="Toast Message">
      <div aria-hidden className="absolute border-[#c8cad0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[16px] py-[13px] relative size-full">
          <Content />
          <ItemCloseBtn className="relative rounded-[3px] shrink-0 size-[16px]" />
        </div>
      </div>
    </div>
  );
}