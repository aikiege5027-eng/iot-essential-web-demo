import svgPaths from "./svg-khl5yyk2mo";
type DividerProps = {
  className?: string;
  align?: "none" | "center";
  content?: boolean;
  dashed?: "false";
  layout?: "horizontal";
};

function Divider({ className, align = "none", content = false, dashed = "false", layout = "horizontal" }: DividerProps) {
  const isNoneAndNotContent = align === "none" && !content;
  return (
    <div className={className || `relative ${isNoneAndNotContent ? "h-[0.001px] w-[34px]" : "h-[20px] w-[375px]"}`}>
      {align === "center" && content && (
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <div className="flex-[1_0_0] h-px min-w-px relative" data-name="Divider 分割线">
              <div className="absolute h-0 left-0 right-0 top-0" data-name="Line">
                <div className="absolute inset-[-0.25px_0]">
                  <svg className="block size-full" fill="none" height="0.5" preserveAspectRatio="none" viewBox="0 0 157 0.5" width="157">
                    <path d="M0 0.25H157" id="Line" stroke="#DFE1E8" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8f9195] text-[12px] text-center whitespace-nowrap">TDesign</p>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-name="Divider 分割线">
              <div className="absolute h-0 left-0 right-0 top-0" data-name="Line">
                <div className="absolute inset-[-0.25px_0]">
                  <svg className="block size-full" fill="none" height="0.5" preserveAspectRatio="none" viewBox="0 0 157 0.5" width="157">
                    <path d="M0 0.25H157" id="Line" stroke="#DFE1E8" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isNoneAndNotContent && (
        <div className="absolute h-0 left-0 right-0 top-0" data-name="Line">
          <div className="absolute inset-[-0.25px_0]">
            <svg className="block size-full" fill="none" height="0.5" preserveAspectRatio="none" viewBox="0 0 34 0.5" width="34">
              <path d="M0 0.25H34" id="Line" stroke="#DFE1E8" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
type ItemCloseBtnProps = {
  className?: string;
  propValue?: "normal 默认";
};

function ItemCloseBtn({ className, propValue = "normal 默认" }: ItemCloseBtnProps) {
  return (
    <div className={className || "relative rounded-[3px] size-[24px]"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[2px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="状态=normal 默认">
            <div className="absolute inset-[25.03%]" data-name="Union">
              <svg className="absolute block inset-0 size-full" fill="none" height="7.99033" preserveAspectRatio="none" viewBox="0 0 7.99031 7.99033" width="7.99031">
                <path d={svgPaths.p1e5ad00} fill="#676A72" id="Union" />
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

function Component() {
  return (
    <div className="bg-[#f5f7fa] flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="字段描述">
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[22px] not-italic px-[12px] py-[6px] relative size-full text-[14px] whitespace-nowrap">
          <p className="font-['PingFang_SC:Medium',sans-serif] overflow-hidden relative shrink-0 text-[#141414] text-ellipsis w-[80px]">字段名称</p>
          <p className="flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] min-w-px overflow-hidden relative text-[#676a72] text-ellipsis text-right">字段内容</p>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#f5f7fa] flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="字段描述">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[6px] relative size-full">
          <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[14px] text-ellipsis w-[80px] whitespace-nowrap">字段状态</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis text-right whitespace-nowrap">​</p>
          <div className="relative shrink-0 w-[38px]" data-name="item/content/state">
            <div className="flex flex-row items-center justify-end size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-end relative size-full">
                <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                  <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                    <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                  </svg>
                </div>
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">已完成</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Component />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Component1 />
          </div>
        </div>
      </div>
    </div>
  );
}

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

function Frame4() {
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
      <Frame4 />
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

function Frame5() {
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
      <Frame5 />
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="h-[20px] relative shrink-0 w-full" data-name="Divider 分割线">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <Divider className="flex-[1_0_0] h-px min-w-px relative" />
            <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8f9195] text-[12px] text-center whitespace-nowrap">审批进度</p>
            <Divider className="flex-[1_0_0] h-px min-w-px relative" />
          </div>
        </div>
      </div>
      <Steps />
    </div>
  );
}

function ItemContentColumnNormalL() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[95px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[12px] text-ellipsis whitespace-nowrap">设备类型</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[12px] text-black text-ellipsis whitespace-nowrap">LCE</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[12px] text-black text-ellipsis whitespace-nowrap">LCE</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[12px] text-black text-ellipsis whitespace-nowrap">LCE</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[12px] text-black text-ellipsis whitespace-nowrap">LCE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[12px] text-ellipsis whitespace-nowrap">硬件类型</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[12px] text-black text-ellipsis whitespace-nowrap">KM52152006G02</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[12px] text-black text-ellipsis whitespace-nowrap">KM52152006G02</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[12px] text-black text-ellipsis whitespace-nowrap">KM52152006G02</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[12px] text-black text-ellipsis whitespace-nowrap">KM52152006G02</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[12px] text-ellipsis whitespace-nowrap">升级安装包</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[12px] text-black text-ellipsis whitespace-nowrap">ES-NKE-ALL-99.0.2.2-250617 T08:24:04UTC</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[12px] text-black text-ellipsis whitespace-nowrap">ES-NKE-ALL-99.0.2.2-250617 T08:24:04UTC</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[12px] text-black text-ellipsis whitespace-nowrap">ES-NKE-ALL-99.0.2.2-250617 T08:24:04UTC</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[12px] text-black text-ellipsis whitespace-nowrap">ES-NKE-ALL-99.0.2.2-250617 T08:24:04UTC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[109px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[12px] text-ellipsis whitespace-nowrap">升级数量</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[12px] text-black text-ellipsis whitespace-nowrap">000</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[12px] text-black text-ellipsis whitespace-nowrap">000</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[12px] text-black text-ellipsis whitespace-nowrap">000</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[20px] leading-[20px] min-w-px not-italic overflow-hidden relative text-[12px] text-black text-ellipsis whitespace-nowrap">000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataTableCard() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Data Table Card">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <ItemContentColumnNormalL />
        <ItemContentColumnNormalL1 />
        <ItemContentColumnNormalL2 />
        <ItemContentColumnNormalL3 />
      </div>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="h-[20px] relative shrink-0 w-full" data-name="Divider 分割线">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <Divider className="flex-[1_0_0] h-px min-w-px relative" />
            <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8f9195] text-[12px] text-center whitespace-nowrap">审批内容</p>
            <Divider className="flex-[1_0_0] h-px min-w-px relative" />
          </div>
        </div>
      </div>
      <DataTableCard />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[77px] w-[672px]">
      <Frame />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function BtnGroup() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[8px] items-start left-[16px] top-1/2" data-name="btn group">
      <div className="bg-[#1450f5] h-[32px] relative rounded-[4px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[5px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[22px]">批准</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f4f7] h-[32px] relative rounded-[4px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[5px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">驳回</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidePanel() {
  return (
    <div className="absolute bg-white inset-[0_0_0_50.56%] overflow-clip" data-name="Side Panel">
      <div className="absolute bg-white h-[56px] left-0 right-0 top-0" data-name=".item/drawer/header">
        <div aria-hidden className="absolute border-[#c8cad0] border-b border-solid inset-0 pointer-events-none" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] left-[16px] not-italic text-[#141414] text-[16px] top-1/2 whitespace-nowrap">
          <p className="leading-[24px]">审批详情</p>
        </div>
        <ItemCloseBtn className="-translate-y-1/2 absolute right-[16px] rounded-[3px] size-[16px] top-1/2" />
      </div>
      <Frame1 />
      <div className="absolute bg-white bottom-0 h-[56px] left-0 right-0" data-name=".item/drawer/footer">
        <div aria-hidden className="absolute border-[#c8cad0] border-solid border-t inset-0 pointer-events-none" />
        <BtnGroup />
      </div>
    </div>
  );
}

export default function IotWebTemplateOverlayContentSidePanel() {
  return (
    <div className="bg-[#5e5e5e] relative size-full" data-name="IOT-Web-Template / 审批详情 / Overlay / Content=Side Panel">
      <div className="absolute bg-[#141414] inset-0 opacity-60" data-name="overlay" />
      <SidePanel />
    </div>
  );
}