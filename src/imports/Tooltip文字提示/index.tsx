function Container() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] leading-[22px] min-w-px not-italic relative text-[#141414] text-[14px]">查看进度视图</p>
        </div>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="arrow">
      <div className="h-[6px] relative shrink-0 w-[10px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 10 6" width="10">
          <path d="M10 0H0L5 6L10 0Z" fill="white" id="Vector 3" />
        </svg>
      </div>
    </div>
  );
}

export default function Tooltip() {
  return (
    <div className="drop-shadow-[0px_4px_5px_rgba(0,0,0,0.1)] relative size-full" data-name="Tooltip 文字提示">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <Container />
        <Arrow />
      </div>
    </div>
  );
}