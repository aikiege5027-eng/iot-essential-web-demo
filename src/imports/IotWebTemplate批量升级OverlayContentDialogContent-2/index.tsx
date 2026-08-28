import svgPaths from "./svg-p0m9k99e2p";

function Mouse({ className }: { className?: string }) {
  return (
    <div className={className || "h-[25.552px] relative w-[25px]"} data-name="mouse">
      <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-30 flex-none h-[hypot(38.5132cqw,65.2669cqh)] w-[hypot(61.4868cqw,-34.7331cqh)]">
          <div className="relative size-full">
            <div className="absolute inset-[-10.39%_-11.27%]">
              <svg className="block size-full" fill="none" height="23.2566" preserveAspectRatio="none" viewBox="0 0 21.7497 23.2566" width="21.7497">
                <g filter="url(#filter0_d_0_335)" id="Polygon 14">
                  <path d={svgPaths.p349fd00} fill="white" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.2566" id="filter0_d_0_335" width="21.7497" x="-9.80488e-08" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_335" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_335" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[16.63%_13.57%_13.12%_16.19%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-30 flex-none h-[hypot(38.5132cqw,65.2669cqh)] w-[hypot(61.4868cqw,-34.7331cqh)]">
          <div className="relative size-full">
            <svg className="absolute block inset-0 size-full" fill="none" height="13.5274" preserveAspectRatio="none" viewBox="0 0 12.4688 13.5274" width="12.4688">
              <path d={svgPaths.p38513580} fill="#11161A" id="Polygon 13" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Folder2Filed({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[16px]"} data-name="folder2-filed">
      <div className="absolute inset-[12.5%_9.38%]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 13 12" width="13">
          <path d={svgPaths.p3a3c6d00} fill="#141414" id="Union" />
        </svg>
      </div>
    </div>
  );
}
type ComponentProps = {
  className?: string;
  prefixIcon?: boolean;
  property1?: "Normal" | "Selected";
  propValue?: boolean;
};

function Component({ className, prefixIcon = true, property1 = "Selected", propValue = false }: ComponentProps) {
  const isNormal = property1 === "Normal";
  const isSelected = property1 === "Selected";
  return (
    <div className={className || `relative rounded-[4px] w-[356px] ${isNormal ? "bg-white" : "bg-[#f3f6fe]"}`}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          {isSelected && propValue && (
            <div className="relative shrink-0 size-[16px]" data-name="item/unit/radio">
              <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                <circle cx="8" cy="8" fill="white" id="Ellipse 6" r="7.5" stroke="#1450F5" />
              </svg>
              <div className="absolute inset-1/4">
                <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
                  <circle cx="4" cy="4" fill="#1450F5" id="Ellipse 7" r="4" />
                </svg>
              </div>
            </div>
          )}
          {isSelected && (
            <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative">
              {prefixIcon && (
                <div className="relative shrink-0 size-[16px]" data-name="folder2-filed">
                  <div className="absolute inset-[12.5%_9.38%]" data-name="Union">
                    <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 13 12" width="13">
                      <path d={svgPaths.p3a3c6d00} fill="#1450F5" id="Union" />
                    </svg>
                  </div>
                </div>
              )}
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Medium',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#1450f5] text-[14px] text-ellipsis whitespace-nowrap">ES-NKE-ALL-99.0.2.2-250617 T08:24:04UTC</p>
            </div>
          )}
          {isNormal && propValue && (
            <div className="relative shrink-0 size-[16px]" data-name="item/unit/radio">
              <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                <circle cx="8" cy="8" fill="white" id="Ellipse 6" r="7.5" stroke="#C8CAD0" />
              </svg>
              <div className="absolute inset-1/4">
                <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
                  <ellipse cx="4" cy="4" fill="white" id="Ellipse 7" rx="4" ry="4" />
                </svg>
              </div>
            </div>
          )}
          {isNormal && (
            <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative">
              {prefixIcon && <Folder2Filed className="relative shrink-0 size-[16px]" />}
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">ES-NKE-ALL-99.0.2.2-250617 T08:24:04UTC</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
type ItemNormalOperateRightMProps = {
  className?: string;
  chevron?: "true";
  disabled?: "false";
  state?: "normal 默认";
  text?: "false";
};

function ItemNormalOperateRightM({ className, chevron = "true", disabled = "false", state = "normal 默认", text = "false" }: ItemNormalOperateRightMProps) {
  return (
    <div className={className || "bg-white h-[48px] relative w-[40px]"}>
      <div aria-hidden className="absolute border-[#dfe1e8] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
            <div className="absolute flex inset-[22.12%_31.75%_22.13%_34.63%] items-center justify-center" style={{ containerType: "size" }}>
              <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                <div className="relative size-full" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="8.91924" preserveAspectRatio="none" viewBox="0 0 5.37886 8.91924" width="5.37886">
                    <path d={svgPaths.p2e389000} fill="#676A72" id="Union" />
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
type ItemNormalOperateLeftMProps = {
  className?: string;
  chevron?: "true";
  disabled?: "false";
  state?: "normal 默认";
  text?: "false";
};

function ItemNormalOperateLeftM({ className, chevron = "true", disabled = "false", state = "normal 默认", text = "false" }: ItemNormalOperateLeftMProps) {
  return (
    <div className={className || "bg-white h-[48px] relative w-[40px]"}>
      <div aria-hidden className="absolute border-[#dfe1e8] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="chevron-left">
            <div className="absolute inset-[22.12%_34.63%_22.13%_31.75%]" data-name="Union">
              <svg className="absolute block inset-0 size-full" fill="none" height="8.91924" preserveAspectRatio="none" viewBox="0 0 5.37886 8.91924" width="5.37886">
                <path d={svgPaths.p2e389000} fill="#676A72" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Master({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[80px]"} data-name=".master/黑色蒙层">
      <div className="absolute bg-[#141414] inset-0 opacity-60" data-name="overlay" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['PingFang_SC:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">批量系统升级</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="header">
      <Frame1 />
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] whitespace-nowrap">共6个硬件类型</p>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[32px] py-[24px] relative size-full">
          <Header1 />
          <div className="absolute right-[32px] rounded-[3px] size-[24px] top-[28px]" data-name="closeBtn">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[2px] relative size-full">
                <div className="relative shrink-0 size-[16px]" data-name="状态=normal 默认">
                  <div className="absolute inset-[25.03%]" data-name="Union">
                    <svg className="absolute block inset-0 size-full" fill="none" height="7.99033" preserveAspectRatio="none" viewBox="0 0 7.99031 7.99033" width="7.99031">
                      <path d={svgPaths.p1e5ad00} fill="#727272" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="title-container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center pr-[16px] relative size-full">
          <p className="[word-break:break-word] font-['PingFang_SC:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1450f5] text-[16px] whitespace-nowrap">选择安装包</p>
          <div className="bg-[#c8cad0] flex-[1_0_0] h-[2px] min-w-px relative" data-name="divider" />
        </div>
      </div>
    </div>
  );
}

function Head() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full" data-name="head">
      <div className="relative shrink-0 size-[24px]" data-name=".master/unit/stepper">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
          <circle cx="12" cy="12" fill="#1450F5" id="Ellipse 20" r="11.5" stroke="#1450F5" />
        </svg>
        <div className="[word-break:break-word] absolute flex flex-col font-['PingFang_SC:Semibold',sans-serif] inset-[0_29.17%] justify-center leading-[0] not-italic text-[16px] text-center text-white">
          <p className="leading-[24px]">1</p>
        </div>
      </div>
      <TitleContainer />
    </div>
  );
}

function TitleContainer1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="title-container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center pr-[16px] relative size-full">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#8f9195] text-[16px] whitespace-nowrap">设置执行时间</p>
          <div className="bg-[#c8cad0] flex-[1_0_0] h-[2px] min-w-px relative" data-name="divider" />
        </div>
      </div>
    </div>
  );
}

function Head1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full" data-name="head">
      <div className="relative shrink-0 size-[24px]" data-name=".master/unit/stepper">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
          <circle cx="12" cy="12" id="Ellipse 20" r="11.5" stroke="#8F9195" />
        </svg>
        <div className="[word-break:break-word] absolute flex flex-col font-['PingFang_SC:Semibold',sans-serif] inset-[0_29.17%] justify-center leading-[0] not-italic text-[#8f9195] text-[16px] text-center">
          <p className="leading-[24px]">2</p>
        </div>
      </div>
      <TitleContainer1 />
    </div>
  );
}

function TitleContainer2() {
  return (
    <div className="content-stretch flex items-center overflow-clip pr-[16px] relative shrink-0" data-name="title-container">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#8f9195] text-[16px] whitespace-nowrap">升级内容确认</p>
    </div>
  );
}

function Head2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0" data-name="head">
      <div className="relative shrink-0 size-[24px]" data-name=".master/unit/stepper">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
          <circle cx="12" cy="12" id="Ellipse 20" r="11.5" stroke="#8F9195" />
        </svg>
        <div className="[word-break:break-word] absolute flex flex-col font-['PingFang_SC:Semibold',sans-serif] inset-[0_29.17%] justify-center leading-[0] not-italic text-[#8f9195] text-[16px] text-center">
          <p className="leading-[24px]">3</p>
        </div>
      </div>
      <TitleContainer2 />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0" data-name="content">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
        <div className="absolute inset-[6.25%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
            <path clipRule="evenodd" d={svgPaths.p72a000} fill="#1450F5" fillRule="evenodd" id="Union" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1450f5] text-[14px] whitespace-nowrap">KM52152006G02</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-white content-stretch flex items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0" data-name="content">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] whitespace-nowrap">KM52152006G02</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-white content-stretch flex items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0" data-name="content">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] whitespace-nowrap">KM52152006G02</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-white content-stretch flex items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0" data-name="content">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] whitespace-nowrap">KM52152006G02</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="bg-white content-stretch flex items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0" data-name="content">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] whitespace-nowrap">KM52152006G02</p>
    </div>
  );
}

function TabsContent() {
  return (
    <div className="absolute content-stretch flex items-start left-[40px] top-0 w-[1120px]" data-name="tabs content">
      <div className="bg-white relative shrink-0" data-name="item/normalTabs/top/m">
        <div aria-hidden className="absolute border-[#1450f5] border-b-3 border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Content1 />
        </div>
      </div>
      <div className="bg-white relative shrink-0" data-name="item/normalTabs/top/m">
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Content2 />
        </div>
      </div>
      <div className="bg-white relative shrink-0" data-name="item/normalTabs/top/m">
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Content3 />
        </div>
      </div>
      <div className="bg-white relative shrink-0" data-name="item/normalTabs/top/m">
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Content4 />
        </div>
      </div>
      <div className="bg-white relative shrink-0" data-name="item/normalTabs/top/m">
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function OperationsLeft() {
  return (
    <div className="absolute content-stretch drop-shadow-[10px_0px_10px_rgba(0,0,0,0.05)] flex items-center left-0 top-0" data-name="operations-left">
      <ItemNormalOperateLeftM className="bg-white h-[48px] relative shrink-0 w-[40px]" />
    </div>
  );
}

function OperationsRight() {
  return (
    <div className="absolute content-stretch drop-shadow-[-10px_0px_10px_rgba(0,0,0,0.05)] flex items-center justify-end right-0 top-0" data-name="operations-right">
      <ItemNormalOperateRightM className="bg-white h-[48px] relative shrink-0 w-[40px]" />
    </div>
  );
}

function Tabs() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="tabs">
      <TabsContent />
      <OperationsLeft />
      <OperationsRight />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative">
      <div className="relative shrink-0 size-[16px]" data-name="folder2-filed">
        <div className="absolute inset-[12.5%_9.38%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 13 12" width="13">
            <path d={svgPaths.p3a3c6d00} fill="#1450F5" id="Union" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Medium',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#1450f5] text-[14px] text-ellipsis whitespace-nowrap">ES-NKE-ALL-99.0.2.2-250617 T08:24:04UTC</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex items-center justify-center left-[33.87%] px-[7px] py-[2px] right-0 rounded-[4px] top-[calc(50%+11px)]">
      <p className="[word-break:break-word] font-['KONE_Information:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#1450f5] text-[12px] whitespace-nowrap">Checked</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="bg-[#f3f6fe] relative rounded-[4px] shrink-0 w-full" data-name="Component 1">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="item/unit/radio">
              <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                <circle cx="8" cy="8" fill="white" id="Ellipse 6" r="7.5" stroke="#1450F5" />
              </svg>
              <div className="absolute inset-1/4">
                <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
                  <circle cx="4" cy="4" fill="#1450F5" id="Ellipse 7" r="4" />
                </svg>
              </div>
            </div>
            <Frame15 />
          </div>
        </div>
      </div>
      <Component className="bg-white relative rounded-[4px] shrink-0 w-full" property1="Normal" propValue />
      <Component className="bg-white relative rounded-[4px] shrink-0 w-full" property1="Normal" propValue />
      <Component className="bg-white relative rounded-[4px] shrink-0 w-full" property1="Normal" propValue />
      <Component className="bg-white relative rounded-[4px] shrink-0 w-full" property1="Normal" propValue />
      <Component className="bg-white relative rounded-[4px] shrink-0 w-full" property1="Normal" propValue />
      <Component className="bg-white relative rounded-[4px] shrink-0 w-full" property1="Normal" propValue />
      <Component className="bg-white relative rounded-[4px] shrink-0 w-full" property1="Normal" />
      <div className="absolute h-[38px] left-[14px] top-[27px] w-[62px]" data-name="Mouse">
        <Mouse className="absolute inset-[0_59.68%_32.76%_0]" />
        <Frame />
      </div>
    </div>
  );
}

function ItemMenuOptionM() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="item/menu option/m">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative size-full">
        <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] w-full">安装包列表</p>
        <Frame12 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic overflow-hidden relative shrink-0 text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">文件名称</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">ES-NKE-ALL-99.0.2.2-250617</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic overflow-hidden relative shrink-0 text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">文件大小</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">17.30MB</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic overflow-hidden relative shrink-0 text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">硬件类型</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">KM5215006G02</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic overflow-hidden relative shrink-0 text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">文件日期</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">2025-06-24 17:14:21</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-[240px]">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <Frame6 />
          <Frame2 />
        </div>
      </div>
      <div className="relative shrink-0 w-[240px]">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <Frame7 />
          <Frame3 />
        </div>
      </div>
      <div className="relative shrink-0 w-[240px]">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <Frame8 />
          <Frame4 />
        </div>
      </div>
      <div className="relative shrink-0 w-[240px]">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <Frame9 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f5f7fa] flex-[1_0_0] min-h-px relative rounded-[6px] w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[12px] relative size-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-end min-w-px relative">
      <Frame10 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[380px] relative rounded-[8px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start pb-[2px] pt-[10px] px-[8px] relative size-full">
          <ItemMenuOptionM />
          <div className="flex h-[368px] items-center justify-center relative shrink-0 w-0">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[368px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 368 1" width="368">
                    <line id="Line 19" stroke="#DFE1E8" strokeDasharray="2 2" x2="368" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Frame13 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-[12px] px-[32px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Steps 步骤条">
            <div className="content-stretch flex items-start relative size-full">
              <div className="flex-[1_0_0] min-w-px relative" data-name=".master/horizontal/default">
                <div className="content-stretch flex flex-col items-start relative size-full">
                  <Head />
                </div>
              </div>
              <div className="flex-[1_0_0] min-w-px relative" data-name=".master/horizontal/default">
                <div className="content-stretch flex flex-col items-start relative size-full">
                  <Head1 />
                </div>
              </div>
              <div className="relative shrink-0" data-name=".master/horizontal/default">
                <div className="content-stretch flex flex-col items-start relative size-full">
                  <Head2 />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="normalTabs 选项卡-默认主题">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Tabs />
              </div>
            </div>
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
          </div>
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="footer">
      <div aria-hidden className="absolute border-[#e7e7e7] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[32px] py-[24px] relative size-full">
          <div className="bg-[#f1f1f1] h-[32px] relative rounded-[4px] shrink-0" data-name="Button 按钮">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[16px] py-[5px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[22px]">取消</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1450f5] h-[32px] relative rounded-[4px] shrink-0" data-name="Button 按钮">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[16px] py-[5px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                  <p className="leading-[22px]">下一步</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DialogContent() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white content-stretch flex flex-col h-[634px] items-start left-1/2 overflow-clip rounded-[8px] top-1/2 w-[900px]" data-name="Dialog Content">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default function IotWebTemplateOverlayContentDialogContent() {
  return (
    <div className="bg-[#5e5e5e] relative size-full" data-name="IOT-Web-Template / 批量升级 / Overlay / Content=Dialog_Content">
      <div className="absolute bg-[#141414] inset-0 opacity-60" data-name="overlay" />
      <DialogContent />
    </div>
  );
}