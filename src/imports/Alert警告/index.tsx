import svgPaths from "./svg-lexqrocy29";

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="17.5" preserveAspectRatio="none" viewBox="0 0 17.5 17.5" width="17.5">
            <path d={svgPaths.p29dc3600} fill="#F98600" id="Union" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">当前选中数量已超出 5000 条上限，任务将自动拆分为多批执行，提交后请留意任务列表中拆分任务的处理状态。</p>
    </div>
  );
}

export default function Alert() {
  return (
    <div className="bg-[#fff1db] content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[10px] relative rounded-[6px] size-full" data-name="Alert 警告">
      <Frame />
    </div>
  );
}