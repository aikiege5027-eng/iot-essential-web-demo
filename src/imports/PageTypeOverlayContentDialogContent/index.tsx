import svgPaths from "./svg-51182gu1a5";

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
      <p className="[word-break:break-word] font-['PingFang_SC:Semibold',sans-serif] leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[16px] text-ellipsis whitespace-nowrap">页面标题</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="header">
      <Frame />
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

function Component() {
  return (
    <div className="bg-[#f5f7fa] flex-[1_0_0] min-h-px relative rounded-[6px] w-full" data-name="功能区名称">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8f9195] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[24px]">功能区名称</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="content">
      <div className="content-stretch flex flex-col items-start px-[32px] py-[24px] relative size-full">
        <Component />
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
                  <p className="leading-[22px]">次要按钮</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1450f5] h-[32px] relative rounded-[4px] shrink-0" data-name="Button 按钮">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[16px] py-[5px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                  <p className="leading-[22px]">主要按钮</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dialog() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col h-[540px] items-start left-[25.49%] overflow-clip right-[25.49%] rounded-[8px] top-[calc(50%+1px)]" data-name="Dialog 对话框">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default function PageTypeOverlayContentDialogContent() {
  return (
    <div className="bg-[#5e5e5e] relative size-full" data-name="Page type=Overlay;Content=Dialog_Content">
      <div className="absolute bg-[#141414] inset-0 opacity-60" data-name="overlay" />
      <Dialog />
    </div>
  );
}