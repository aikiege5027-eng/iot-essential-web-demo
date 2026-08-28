import svgPaths from "./svg-v0uord5tnn";
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
                  <path d={svgPaths.p3ed34000} fill="#8F9195" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[4px]" />
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