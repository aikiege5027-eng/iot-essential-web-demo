import svgPaths from "./svg-7mf4otpesx";

function Branding() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Branding">
      <div className="h-[28px] relative shrink-0 w-[72px]" data-name="KONE_logo">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 28">
          <g id="KONE">
            <path d="M0 28H16.2514V0H0V28Z" fill="var(--fill-0, white)" />
            <path d={svgPaths.p1faf6380} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1128c580} fill="var(--fill-0, white)" />
            <path d="M55.7486 28H72V0H55.7486V28Z" fill="var(--fill-0, white)" />
          </g>
        </svg>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 28">
          <g id="KONE">
            <path d={svgPaths.p703bc80} fill="var(--fill-0, #1450F5)" />
            <path d={svgPaths.pff15b80} fill="var(--fill-0, #1450F5)" />
            <path d={svgPaths.p3502a900} fill="var(--fill-0, #1450F5)" />
            <path d={svgPaths.p3fb91880} fill="var(--fill-0, #1450F5)" />
            <path d={svgPaths.p2336ce80} fill="var(--fill-0, #1450F5)" />
          </g>
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:600',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">IoT Essential</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Buttons">
      <div className="bg-[#f3f6fe] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="user">
          <div className="absolute inset-[10%_14.06%_9.38%_14.06%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9375 14.5132">
              <path clipRule="evenodd" d={svgPaths.p3a4d8700} fill="var(--fill-0, #1450F5)" fillRule="evenodd" id="Union" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f6fe] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
        <div className="relative shrink-0 size-[18px]" data-name="close-M">
          <div className="absolute inset-1/4" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
              <path clipRule="evenodd" d={svgPaths.pa608700} fill="var(--fill-0, #1450F5)" fillRule="evenodd" id="Union" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[290px]">
      <div className="relative shrink-0 size-[20px]" data-name="server">
        <div className="absolute inset-[12.5%_9.37%_12.5%_9.38%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2514 15">
            <g id="Union">
              <path d={svgPaths.p28f67f40} fill="var(--fill-0, #141414)" />
              <path d={svgPaths.p13d65580} fill="var(--fill-0, #141414)" />
              <path d={svgPaths.p1b60f080} fill="var(--fill-0, #141414)" />
              <path d={svgPaths.p231bb80} fill="var(--fill-0, #141414)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#141414] text-[16px]">
        <p className="leading-[24px]">设备注册</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[290px]">
      <div className="relative shrink-0 size-[20px]" data-name="elevator">
        <div className="absolute inset-[12.5%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path clipRule="evenodd" d={svgPaths.p3b76af00} fill="var(--fill-0, #141414)" fillRule="evenodd" id="Union" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#141414] text-[16px]">
        <p className="leading-[24px]">设备查询</p>
      </div>
    </div>
  );
}

function Scroll() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[64px]" data-name="scroll">
      <div className="content-stretch flex gap-[255px] items-center px-[20px] py-[12px] relative shrink-0 w-[375px]" data-name="item-title">
        <Frame />
      </div>
      <div className="bg-[#f3f6fe] content-stretch flex gap-[255px] items-center px-[20px] py-[12px] relative shrink-0 w-[375px]" data-name="item-title">
        <Frame1 />
      </div>
    </div>
  );
}

function Drawer() {
  return (
    <div className="absolute bg-white bottom-[180px] left-0 overflow-clip top-[56px] w-[375px]" data-name="Drawer">
      <Scroll />
      <div className="absolute bg-[#dfe1e8] content-stretch flex gap-[4px] items-start left-[16px] p-[2px] rounded-[4px] top-[20px] w-[343px]" data-name="radioButton-Group 单选按钮组">
        <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[2px]" data-name=".master/radioGroup">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[16px] py-[3px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] text-center whitespace-nowrap">中文</p>
            </div>
          </div>
        </div>
        <div className="bg-[#dfe1e8] flex-[1_0_0] min-w-px relative rounded-[2px]" data-name=".master/radioGroup">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[16px] py-[3px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">English</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IoTMobile() {
  return (
    <div className="bg-[#f5f7fa] relative size-full" data-name="IoT-Mobile">
      <div className="absolute bg-white content-stretch flex items-center justify-between left-0 px-[16px] py-[12px] top-0 w-[375px]" data-name="main_navigation - app">
        <div aria-hidden="true" className="absolute border-[#d7d8db] border-b border-solid inset-0 pointer-events-none" />
        <Branding />
        <Buttons />
      </div>
      <Drawer />
    </div>
  );
}