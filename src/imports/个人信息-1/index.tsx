function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[24px] relative shrink-0 text-[#141414] text-[16px]">消息通知</p>
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#1450f5] text-[14px]">进入消息中心</p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="header">
      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Semibold',sans-serif] leading-[22px] min-w-px not-italic relative text-[#141414] text-[14px]">审批请求</p>
    </div>
  );
}

function Details() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['PingFang_SC:Regular',sans-serif] gap-[4px] items-start leading-[22px] not-italic relative shrink-0 text-[14px] w-full" data-name="details">
      <p className="relative shrink-0 text-[#141414] w-full">王志强发起 · 7 台设备批量升级</p>
      <p className="relative shrink-0 text-[#676a72] w-full">备注：已确认符合升级条件。</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="text">
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

function Header1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="header">
      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Semibold',sans-serif] leading-[22px] min-w-px not-italic relative text-[#141414] text-[14px]">审批请求</p>
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="details">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] w-full">王志强发起 · 7 台设备批量升级</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="text">
      <Header1 />
      <Details1 />
    </div>
  );
}

function IconText1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="icon+text">
      <Text1 />
    </div>
  );
}

function Footer1() {
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

export default function Component() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_5px_rgba(0,0,0,0.1)] flex flex-col gap-[8px] items-start p-[12px] relative rounded-[8px] size-full" data-name="个人信息">
      <Frame />
      <div className="bg-[#f5f7fa] relative rounded-[6px] shrink-0 w-[340px]" data-name="Side Notification">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[12px] py-[8px] relative size-full">
            <IconText />
            <Footer />
          </div>
        </div>
      </div>
      <div className="bg-[#f5f7fa] relative rounded-[6px] shrink-0 w-[340px]" data-name="Side Notification">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[12px] py-[8px] relative size-full">
            <IconText1 />
            <Footer1 />
          </div>
        </div>
      </div>
    </div>
  );
}