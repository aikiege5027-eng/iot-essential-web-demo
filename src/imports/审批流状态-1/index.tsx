function Head() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center pt-[8px] relative shrink-0" data-name="head">
      <div className="relative rounded-[100px] shrink-0 size-[8px]" data-name="dot">
        <div aria-hidden className="absolute border-2 border-[#1450f5] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-[#1450f5] flex-[1_0_0] min-h-px relative w-[2px]" data-name="divider" />
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="content-stretch flex items-center overflow-clip pr-[16px] relative shrink-0" data-name="title-container">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">zhiqiang.wang@kone.com</p>
    </div>
  );
}

function DescriptionAction() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="description&action">
      <TitleContainer />
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] w-[240px]">2026-08-18 10:16:00</p>
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] w-[240px]">备注：请于夜间维护窗口执行升级。</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative self-stretch shrink-0">
      <Head />
      <DescriptionAction />
    </div>
  );
}

function MasterVerticalDot() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name=".master/vertical/dot">
      <Frame />
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1450f5] text-[14px] whitespace-nowrap">已发起</p>
    </div>
  );
}

function Head1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center pt-[8px] relative self-stretch shrink-0" data-name="head">
      <div className="bg-[#1450f5] relative rounded-[100px] shrink-0 size-[8px]" data-name="dot">
        <div aria-hidden className="absolute border-2 border-[#1450f5] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
    </div>
  );
}

function TitleContainer1() {
  return (
    <div className="content-stretch flex items-center overflow-clip pr-[16px] relative shrink-0" data-name="title-container">
      <p className="[word-break:break-word] font-['PingFang_SC:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1450f5] text-[16px] whitespace-nowrap">{`Administrator `}</p>
    </div>
  );
}

function DescriptionAction1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="description&action">
      <TitleContainer1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Head1 />
      <DescriptionAction1 />
    </div>
  );
}

function MasterVerticalDot1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name=".master/vertical/dot">
      <Frame1 />
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#8f9195] text-[14px] whitespace-nowrap">待审批</p>
    </div>
  );
}

function Steps() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Steps 步骤条">
      <MasterVerticalDot />
      <MasterVerticalDot1 />
    </div>
  );
}

function Head2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center pt-[8px] relative shrink-0" data-name="head">
      <div className="relative rounded-[100px] shrink-0 size-[8px]" data-name="dot">
        <div aria-hidden className="absolute border-2 border-[#1450f5] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-[#1450f5] flex-[1_0_0] min-h-px relative w-[2px]" data-name="divider" />
    </div>
  );
}

function TitleContainer2() {
  return (
    <div className="content-stretch flex items-center overflow-clip pr-[16px] relative shrink-0" data-name="title-container">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">zhiqiang.wang@kone.com</p>
    </div>
  );
}

function DescriptionAction2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="description&action">
      <TitleContainer2 />
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] w-[240px]">2026-08-18 10:16:00</p>
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] w-[240px]">备注：请于夜间维护窗口执行升级。</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative self-stretch shrink-0">
      <Head2 />
      <DescriptionAction2 />
    </div>
  );
}

function MasterVerticalDot2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name=".master/vertical/dot">
      <Frame2 />
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1450f5] text-[14px] whitespace-nowrap">已发起</p>
    </div>
  );
}

function Head3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center pt-[8px] relative shrink-0" data-name="head">
      <div className="bg-[#f51414] relative rounded-[100px] shrink-0 size-[8px]" data-name="dot">
        <div aria-hidden className="absolute border-2 border-[#f51414] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
    </div>
  );
}

function TitleContainer3() {
  return (
    <div className="content-stretch flex items-center overflow-clip pr-[16px] relative shrink-0" data-name="title-container">
      <p className="[word-break:break-word] font-['PingFang_SC:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f51414] text-[16px] whitespace-nowrap">{`Administrator `}</p>
    </div>
  );
}

function DescriptionAction3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="description&action">
      <TitleContainer3 />
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] w-[240px]">2026-08-18 10:16:00</p>
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] w-[240px]">备注：不符合升级条件。</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative self-stretch shrink-0">
      <Head3 />
      <DescriptionAction3 />
    </div>
  );
}

function MasterVerticalDot3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name=".master/vertical/dot">
      <Frame3 />
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f51414] text-[14px] whitespace-nowrap">已驳回</p>
    </div>
  );
}

function Steps1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Steps 步骤条">
      <MasterVerticalDot2 />
      <MasterVerticalDot3 />
    </div>
  );
}

function Head4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center pt-[8px] relative shrink-0" data-name="head">
      <div className="relative rounded-[100px] shrink-0 size-[8px]" data-name="dot">
        <div aria-hidden className="absolute border-2 border-[#1450f5] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-[#1450f5] flex-[1_0_0] min-h-px relative w-[2px]" data-name="divider" />
    </div>
  );
}

function TitleContainer4() {
  return (
    <div className="content-stretch flex items-center overflow-clip pr-[16px] relative shrink-0" data-name="title-container">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">zhiqiang.wang@kone.com</p>
    </div>
  );
}

function DescriptionAction4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="description&action">
      <TitleContainer4 />
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] w-[240px]">2026-08-18 10:16:00</p>
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] w-[240px]">备注：请于夜间维护窗口执行升级。</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative self-stretch shrink-0">
      <Head4 />
      <DescriptionAction4 />
    </div>
  );
}

function MasterVerticalDot4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name=".master/vertical/dot">
      <Frame5 />
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1450f5] text-[14px] whitespace-nowrap">已发起</p>
    </div>
  );
}

function Head5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center pt-[8px] relative shrink-0" data-name="head">
      <div className="relative rounded-[100px] shrink-0 size-[8px]" data-name="dot">
        <div aria-hidden className="absolute border-2 border-[#1450f5] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-[#1450f5] flex-[1_0_0] min-h-px relative w-[2px]" data-name="divider" />
    </div>
  );
}

function TitleContainer5() {
  return (
    <div className="content-stretch flex items-center overflow-clip pr-[16px] relative shrink-0" data-name="title-container">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">{`Administrator `}</p>
    </div>
  );
}

function DescriptionAction5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="description&action">
      <TitleContainer5 />
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] w-[240px]">2026-08-18 10:16:00</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative self-stretch shrink-0">
      <Head5 />
      <DescriptionAction5 />
    </div>
  );
}

function MasterVerticalDot5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name=".master/vertical/dot">
      <Frame6 />
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1450f5] text-[14px] whitespace-nowrap">已批准</p>
    </div>
  );
}

function Steps2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Steps 步骤条">
      <MasterVerticalDot4 />
      <MasterVerticalDot5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-[35px] top-[48px] w-[690px]">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">待审批</p>
      <Steps />
      <div className="h-0 relative shrink-0 w-[680px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 680 1" width="680">
            <line id="Line 257" stroke="#C8CAD0" x2="680" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">驳回</p>
      <Steps1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 690 1" width="690">
            <line id="Line 258" stroke="#C8CAD0" x2="690" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">批准</p>
      <Steps2 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="审批流状态">
      <Frame4 />
    </div>
  );
}