import svgPaths from "./svg-9m67fi3fjq";
type ItemDatepickerCellDateProps = {
  className?: string;
  active?: "false";
  activeEnd?: "false";
  activeStart?: "false";
  additional?: boolean;
  dateText?: string;
  disabled?: "false";
  highlight?: "false";
  hover?: "false";
  now?: boolean;
};

function ItemDatepickerCellDate({ className, active = "false", activeEnd = "false", activeStart = "false", additional = false, dateText = "02", disabled = "false", highlight = "false", hover = "false", now = false }: ItemDatepickerCellDateProps) {
  const isNowAndFalseAndFalseAndFalseAndFalseAndFalseAndNotAdditional = now && hover === "false" && active === "false" && activeStart === "false" && activeEnd === "false" && disabled === "false" && !additional;
  return (
    <div className={className || `relative rounded-[3px] size-[24px] ${isNowAndFalseAndFalseAndFalseAndFalseAndFalseAndNotAdditional ? "bg-[#f3f6fe]" : ""}`}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-px relative size-full">
          {!now && hover === "false" && active === "false" && activeStart === "false" && activeEnd === "false" && disabled === "false" && !additional && (
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">{dateText}</p>
            </div>
          )}
          {!now && hover === "false" && active === "false" && activeStart === "false" && activeEnd === "false" && disabled === "false" && additional && (
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abadb2] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">{dateText}</p>
            </div>
          )}
          {isNowAndFalseAndFalseAndFalseAndFalseAndFalseAndNotAdditional && (
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1450f5] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">{dateText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
type SpacerProps = {
  className?: string;
  spacer?: "8px";
};

function Spacer({ className, spacer = "8px" }: SpacerProps) {
  return <div className={className || "relative size-[8px]"} />;
}

function Master({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[80px]"} data-name=".master/黑色蒙层">
      <div className="absolute bg-[#141414] inset-0 opacity-60" data-name="overlay" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['PingFang_SC:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">批量系统升级</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="header">
      <Frame />
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
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">选择安装包</p>
          <div className="bg-[#1450f5] flex-[1_0_0] h-[2px] min-w-px relative" data-name="divider" />
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
          <circle cx="12" cy="12" id="Ellipse 20" r="11.5" stroke="#1450F5" />
        </svg>
        <div className="absolute inset-[16.67%]" data-name="check">
          <div className="absolute inset-[23.12%_15.15%_26.5%_12.34%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="8.06114" preserveAspectRatio="none" viewBox="0 0 11.6013 8.06114" width="11.6013">
              <path d={svgPaths.p3cb13d00} fill="#1450F5" id="Union" />
            </svg>
          </div>
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
          <p className="[word-break:break-word] font-['PingFang_SC:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1450f5] text-[16px] whitespace-nowrap">设置执行时间</p>
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
          <circle cx="12" cy="12" fill="#1450F5" id="Ellipse 20" r="11.5" stroke="#1450F5" />
        </svg>
        <div className="[word-break:break-word] absolute flex flex-col font-['PingFang_SC:Semibold',sans-serif] inset-[0_29.17%] justify-center leading-[0] not-italic text-[16px] text-center text-white">
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

function Label() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['PingFang_SC:Regular',sans-serif] gap-[2px] items-center leading-[22px] not-italic pb-[8px] relative shrink-0 text-[14px] text-right w-full whitespace-nowrap" data-name="label">
      <p className="relative shrink-0 text-[#141414]">执行时间</p>
      <p className="relative shrink-0 text-[#f51414]">*</p>
    </div>
  );
}

function ItemFormTop() {
  return (
    <div className="content-stretch flex flex-col h-[86px] items-start pb-[24px] relative shrink-0 w-[500px]" data-name="item/form/top">
      <Label />
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="DatePicker-input 日期选择输入框">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[8px] py-[5px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#8f9195] text-[14px]">
              <p className="leading-[22px]">请设定执行时间</p>
            </div>
            <Spacer className="flex flex-row items-center self-stretch" />
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="calendar">
              <div className="absolute inset-[9.38%_12.5%_12.5%_12.5%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="12.5" preserveAspectRatio="none" viewBox="0 0 12 12.5" width="12">
                  <path d={svgPaths.p3ed34000} fill="#0052D9" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#1450f5] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0px_0px_2px_#d0dcfd]" />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[20px] relative size-full">
        <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] whitespace-nowrap">请设定批量系统升级执行时间。</p>
        <ItemFormTop />
      </div>
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
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-start relative size-full">
                    <Head />
                  </div>
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
          <Frame1 />
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
                  <p className="leading-[22px]">上一步</p>
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

function Select() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="select">
      <div className="bg-white relative rounded-[4px] shrink-0 w-[80px]" data-name="Select 选择器">
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[22px] overflow-hidden text-ellipsis">7月</p>
            </div>
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
      <div className="bg-white relative rounded-[4px] shrink-0 w-[80px]" data-name="Select 选择器">
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[22px] overflow-hidden text-ellipsis">2022</p>
            </div>
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
    </div>
  );
}

function Controller() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="controller">
      <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Button 按钮">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="chevron-left">
          <div className="absolute inset-[22.12%_34.63%_22.13%_31.75%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="7.80433" preserveAspectRatio="none" viewBox="0 0 4.7065 7.80433" width="4.7065">
              <path d={svgPaths.p11c11f40} fill="#141414" id="Union" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Button 按钮">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="round">
          <div className="absolute inset-[18.75%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="8.75" preserveAspectRatio="none" viewBox="0 0 8.75 8.75" width="8.75">
              <path d={svgPaths.p1c1cb600} fill="#141414" id="Union" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Button 按钮">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="chevron-right">
          <div className="absolute flex inset-[22.12%_31.75%_22.13%_34.63%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
              <div className="relative size-full" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="7.80433" preserveAspectRatio="none" viewBox="0 0 4.7065 7.80433" width="4.7065">
                  <path d={svgPaths.p11c11f40} fill="#141414" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[12px] px-[12px] relative size-full">
          <Select />
          <Controller />
        </div>
      </div>
    </div>
  );
}

function DateHead() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[3px] shrink-0 size-[24px]" data-name="date-head">
      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8f9195] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[22px]">Su</p>
      </div>
    </div>
  );
}

function DateHead1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[3px] shrink-0 size-[24px]" data-name="date-head">
      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8f9195] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[22px]">Mo</p>
      </div>
    </div>
  );
}

function DateHead2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[3px] shrink-0 size-[24px]" data-name="date-head">
      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8f9195] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[22px]">Tu</p>
      </div>
    </div>
  );
}

function DateHead3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[3px] shrink-0 size-[24px]" data-name="date-head">
      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8f9195] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[22px]">We</p>
      </div>
    </div>
  );
}

function DateHead4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[3px] shrink-0 size-[24px]" data-name="date-head">
      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8f9195] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[22px]">Th</p>
      </div>
    </div>
  );
}

function DateHead5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[3px] shrink-0 size-[24px]" data-name="date-head">
      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8f9195] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[22px]">Fr</p>
      </div>
    </div>
  );
}

function DateHead6() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[3px] shrink-0 size-[24px]" data-name="date-head">
      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8f9195] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[22px]">Sa</p>
      </div>
    </div>
  );
}

function DateHeadRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="dateHead-row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[3px] relative size-full">
          <DateHead />
          <DateHead1 />
          <DateHead2 />
          <DateHead3 />
          <DateHead4 />
          <DateHead5 />
          <DateHead6 />
        </div>
      </div>
    </div>
  );
}

function DateRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="date-row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[3px] relative size-full">
          <div className="relative rounded-[3px] shrink-0 size-[24px]" data-name="item/datepicker-cell/date">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center p-px relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abadb2] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[22px]">25</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[3px] shrink-0 size-[24px]" data-name="item/datepicker-cell/date">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center p-px relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abadb2] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[22px]">26</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[3px] shrink-0 size-[24px]" data-name="item/datepicker-cell/date">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center p-px relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abadb2] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[22px]">27</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[3px] shrink-0 size-[24px]" data-name="item/datepicker-cell/date">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center p-px relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abadb2] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[22px]">28</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[3px] shrink-0 size-[24px]" data-name="item/datepicker-cell/date">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center p-px relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abadb2] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[22px]">29</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[3px] shrink-0 size-[24px]" data-name="item/datepicker-cell/date">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center p-px relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abadb2] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[22px]">30</p>
                </div>
              </div>
            </div>
          </div>
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="1" />
        </div>
      </div>
    </div>
  );
}

function DateRow1() {
  return (
    <div className="relative shrink-0 w-full" data-name="date-row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[3px] relative size-full">
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="2" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="3" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="4" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="5" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="6" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="7" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="8" />
        </div>
      </div>
    </div>
  );
}

function DateRow2() {
  return (
    <div className="relative shrink-0 w-full" data-name="date-row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[3px] relative size-full">
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="9" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="10" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="11" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="12" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="13" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="14" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="15" />
        </div>
      </div>
    </div>
  );
}

function DateRow3() {
  return (
    <div className="relative shrink-0 w-full" data-name="date-row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[3px] relative size-full">
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="16" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="17" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="18" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="19" />
          <div className="bg-[#f3f6fe] relative rounded-[3px] shrink-0 size-[24px]" data-name="item/datepicker-cell/date">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center p-px relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1450f5] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[22px]">20</p>
                </div>
              </div>
            </div>
          </div>
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="21" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="22" />
        </div>
      </div>
    </div>
  );
}

function DateRow4() {
  return (
    <div className="relative shrink-0 w-full" data-name="date-row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[3px] relative size-full">
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="23" />
          <div className="relative rounded-[3px] shrink-0 size-[24px]" data-name="item/datepicker-cell/date">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center p-px relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[22px]">24</p>
                </div>
              </div>
            </div>
          </div>
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="25" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="26" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="27" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="28" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="29" />
        </div>
      </div>
    </div>
  );
}

function DateRow5() {
  return (
    <div className="relative shrink-0 w-full" data-name="date-row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[3px] relative size-full">
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="30" />
          <ItemDatepickerCellDate className="relative rounded-[3px] shrink-0 size-[24px]" dateText="31" />
          <div className="relative rounded-[3px] shrink-0 size-[24px]" data-name="item/datepicker-cell/date">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center p-px relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abadb2] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[22px]">1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[3px] shrink-0 size-[24px]" data-name="item/datepicker-cell/date">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center p-px relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abadb2] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[22px]">2</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[3px] shrink-0 size-[24px]" data-name="item/datepicker-cell/date">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center p-px relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abadb2] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[22px]">3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[3px] shrink-0 size-[24px]" data-name="item/datepicker-cell/date">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center p-px relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abadb2] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[22px]">4</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[3px] shrink-0 size-[24px]" data-name="item/datepicker-cell/date">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center p-px relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abadb2] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[22px]">5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Date1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full z-[1]" data-name="date">
      <DateHeadRow />
      <DateRow />
      <DateRow1 />
      <DateRow2 />
      <DateRow3 />
      <DateRow4 />
      <DateRow5 />
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[280px]" data-name="date">
      <Header2 />
      <Date1 />
    </div>
  );
}

function TimesHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="times-header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[5px] pt-[17px] px-[12px] relative size-full">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] text-center whitespace-nowrap">14 : 45 : 31</p>
        </div>
      </div>
    </div>
  );
}

function TimesColumns() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] h-[204px] items-start min-w-px relative" data-name="times-columns">
      <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">11</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">12</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">13</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f6fe] h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1450f5] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">14</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">15</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">16</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">17</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimesColumns1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] h-[204px] items-start min-w-px relative" data-name="times-columns">
      <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">42</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">43</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">44</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f6fe] h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1450f5] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">45</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">46</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">47</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">48</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimesColumns2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] h-[204px] items-start min-w-px relative" data-name="times-columns">
      <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">28</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">29</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">30</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f6fe] h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1450f5] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">31</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">32</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">33</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[24px] relative rounded-[3px] shrink-0 w-full" data-name="item/timepicker-cell/time">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#676a72] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">34</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Times1() {
  return (
    <div className="relative shrink-0 w-full" data-name="times">
      <div className="content-stretch flex gap-[8px] items-start px-[12px] py-[15px] relative size-full">
        <TimesColumns />
        <TimesColumns1 />
        <TimesColumns2 />
      </div>
    </div>
  );
}

function TimePicker() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="timePicker">
      <TimesHeader />
      <Times1 />
    </div>
  );
}

function Times() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="times">
      <div className="relative self-stretch shrink-0 w-0" data-name="border top">
        <div className="absolute flex inset-[0_calc(200%+1px)_0_calc(-100%-1px)] items-center justify-center" style={{ containerType: "size" }}>
          <div className="flex-none h-[0px] rotate-90 w-[100cqh]">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 278 1" width="278">
                  <line id="Line 1" stroke="#DFE1E8" x2="278" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TimePicker />
    </div>
  );
}

function DateTimes() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="date&times">
      <Date />
      <Times />
    </div>
  );
}

function Presets() {
  return (
    <div className="absolute bottom-[12px] content-stretch flex gap-[8px] items-start left-[12px] top-[12px]" data-name="presets">
      <div className="h-[24px] relative rounded-[4px] shrink-0" data-name="Button 按钮">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1450f5] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[24px] relative rounded-[4px] shrink-0" data-name="Button 按钮">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1450f5] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Label2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Apply() {
  return (
    <div className="absolute bottom-[12px] content-stretch flex gap-[8px] items-center justify-end right-[12px] top-[12px]" data-name="apply">
      <div className="bg-[#1450f5] h-[22px] relative rounded-[4px] shrink-0" data-name="Button 按钮">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
              <p className="leading-[20px]">确定</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="footer-bottom">
      <div aria-hidden className="absolute border-[#dfe1e8] border-solid border-t inset-0 pointer-events-none" />
      <Presets />
      <Apply />
    </div>
  );
}

function DialogContent() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white content-stretch flex flex-col h-[634px] items-start left-1/2 overflow-clip rounded-[8px] top-1/2 w-[900px]" data-name="Dialog Content">
      <Header />
      <Content />
      <Footer />
      <div className="absolute bg-white left-[32px] rounded-[6px] top-[262px] w-[496px]" data-name="DatePicker-popup 日期选择菜单">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <DateTimes />
            <FooterBottom />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#c8cad0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)]" />
      </div>
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