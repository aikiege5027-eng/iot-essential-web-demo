function Header() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="header">
      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Semibold',sans-serif] leading-[24px] min-w-px not-italic relative text-[#141414] text-[16px]">审批请求</p>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="details">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] w-full">zhiqiang.wang@kone.com发起7 台设备批量升级。</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="text">
      <Header />
      <Details />
    </div>
  );
}

function IconText() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="icon+text">
      <Text />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="footer">
      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] leading-[22px] min-w-px not-italic relative text-[#676a72] text-[14px]">2026/8/18 10:15:43</p>
      <div className="relative rounded-[4px] shrink-0" data-name="Button 按钮">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1450f5] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">查看审批</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SideNotification() {
  return (
    <div className="bg-white drop-shadow-[0px_8px_10px_rgba(0,0,0,0.1)] relative rounded-[6px] size-full" data-name="Side Notification">
      <div aria-hidden className="absolute border-[#c8cad0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative size-full">
          <IconText />
          <Footer />
        </div>
      </div>
    </div>
  );
}