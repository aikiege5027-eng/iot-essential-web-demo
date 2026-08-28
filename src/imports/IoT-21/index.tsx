import svgPaths from "./svg-x56stsrjk2";
import imgRectangle from "./d1ec9a2bcc7821df0090bd0956bba2d84ba868f7.png";
type SpacerProps = {
  className?: string;
  spacer?: "4px" | "8px";
};

function Spacer({ className, spacer = "4px" }: SpacerProps) {
  return <div className={className || `relative ${spacer === "8px" ? "size-[8px]" : "size-[4px]"}`} />;
}

function Frame2({ className }: { className?: string }) {
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="h-[5.84px] relative shrink-0 w-[5.838px]">
            <div className="absolute inset-[-12.84%_-12.85%]">
              <svg className="block size-full" fill="none" height="7.34" preserveAspectRatio="none" viewBox="0 0 7.33784 7.34" width="7.33784">
                <ellipse cx="3.66892" cy="3.67" fill="white" id="Ellipse 1" rx="2.91892" ry="2.92" stroke="#4373F7" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type Frame72Props = {
  className?: string;
  icon?: boolean;
};

function Frame72({ className, icon = true }: Frame72Props) {
  return (
    <div className={className || "relative w-[119px]"}>
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
          {icon && (
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="officebuilding-1">
              <div className="absolute inset-[6.25%_18.75%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="12.25" preserveAspectRatio="none" viewBox="0 0 8.75 12.25" width="8.75">
                  <path clipRule="evenodd" d={svgPaths.p38371400} fill="#676A72" fillRule="evenodd" id="Union" />
                </svg>
              </div>
            </div>
          )}
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">所属项目</p>
        </div>
        <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] w-full">中国国家博物馆</p>
      </div>
    </div>
  );
}
type Component2Props = {
  className?: string;
  language?: "CN";
  status?: "信号中等";
  type?: "移动";
};

function Component2({ className, language = "CN", status = "信号中等", type = "移动" }: Component2Props) {
  return (
    <div className={className || "bg-[#f5f7fa] relative rounded-[4px]"}>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[2px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="中国移动">
            <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
              <g id="ä¸­å½ç§»å¨">
                <circle cx="8" cy="8" fill="white" id="Ellipse 2738" r="8" />
                <path d={svgPaths.p167e6800} fill="#0085D0" id="Vector" />
              </g>
            </svg>
          </div>
          <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#141414] text-[0px] whitespace-nowrap">
            <span className="leading-[20px] text-[12px]">{`-65dBm `}</span>
            <span className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[12px]">(信号中等)</span>
          </p>
        </div>
      </div>
    </div>
  );
}
type ComponentProps = {
  className?: string;
  property1?: "AWS";
};

function Component({ className, property1 = "AWS" }: ComponentProps) {
  return (
    <div className={className || "bg-[#f2f4f7] relative rounded-[3px]"}>
      <div aria-hidden className="absolute border border-[#43464f] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative size-full">
          <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">AWS</p>
        </div>
      </div>
    </div>
  );
}
type Component1Props = {
  className?: string;
  language?: "CN";
  status?: "云管家在线";
};

function Component1({ className, language = "CN", status = "云管家在线" }: Component1Props) {
  return (
    <div className={className || "bg-[#f7fffa] relative rounded-[4px]"}>
      <div aria-hidden className="absolute border border-[#1ed273] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
          <div className="relative shrink-0 size-[14px]" data-name="cloud">
            <div className="absolute inset-[18.74%_6.25%_18.76%_6.25%]" data-name="Union">
              <svg className="absolute block inset-0 size-full" fill="none" height="8.75" preserveAspectRatio="none" viewBox="0 0 12.25 8.75" width="12.25">
                <path d={svgPaths.p1f537200} fill="#1ED273" id="Union" />
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1ed273] text-[12px] text-center whitespace-nowrap">云管家在线</p>
        </div>
      </div>
    </div>
  );
}
type ContainerProps = {
  className?: string;
  property1?: "直梯";
};

function Container({ className, property1 = "直梯" }: ContainerProps) {
  return (
    <div className={className || "bg-white relative rounded-[8px] w-[1160px]"}>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[29px] py-[17px] relative size-full">
        <div className="relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[28px]" data-name="elevator">
                <div className="absolute inset-[12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
                    <path clipRule="evenodd" d={svgPaths.p11425840} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
              <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#141414] text-[18px] whitespace-nowrap">DT1</p>
              <div className="bg-[#fafbfc] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[6px] shrink-0">
                <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">#45509091</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="信号强度">
              <div className="bg-[#f3f6fe] relative rounded-[3px] shrink-0" data-name="Tag 标签">
                <div aria-hidden className="absolute border border-[#1450f5] border-solid inset-0 pointer-events-none rounded-[3px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative size-full">
                    <div className="relative shrink-0 size-[14px]" data-name="prefixIcon">
                      <div className="absolute inset-[8.11%_15.63%]" data-name="Union">
                        <svg className="absolute block inset-0 size-full" fill="none" height="11.7299" preserveAspectRatio="none" viewBox="0 0 9.625 11.7299" width="9.625">
                          <path d={svgPaths.p234d300} fill="#1450F5" id="Union" />
                        </svg>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1450f5] text-[12px] whitespace-nowrap">24/7</p>
                  </div>
                </div>
              </div>
              <Component1 className="bg-[#f7fffa] relative rounded-[4px] shrink-0" />
              <Component className="bg-[#f2f4f7] relative rounded-[3px] shrink-0" />
              <Component2 className="bg-[#f5f7fa] relative rounded-[4px] shrink-0" />
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
            <Frame72 className="relative shrink-0 w-[180px]" icon={false} />
            <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0">
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[20px]">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 20 1" width="20">
                      <line id="Line 231" stroke="#DFE1E8" x2="20" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-[180px]">
              <div className="content-stretch flex flex-col items-start relative size-full">
                <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">项目地址</p>
                </div>
                <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] w-full">北京市东城区东长安街16号</p>
              </div>
            </div>
            <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0">
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[20px]">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 20 1" width="20">
                      <line id="Line 231" stroke="#DFE1E8" x2="20" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-[180px]">
              <div className="content-stretch flex flex-col items-start relative size-full">
                <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">保养合同</p>
                </div>
                <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] w-full">有效 (KONE Care Plus)</p>
              </div>
            </div>
            <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0">
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[20px]">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 20 1" width="20">
                      <line id="Line 231" stroke="#DFE1E8" x2="20" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-[180px]">
              <div className="content-stretch flex flex-col items-start relative size-full">
                <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">云管家协议</p>
                </div>
                <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] w-full">有效</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type AvatarProps = {
  className?: string;
  icon?: "false";
  image?: "true";
  shape?: "circle 圆形";
  size?: "medium 中";
};

function Avatar({ className, icon = "false", image = "true", shape = "circle 圆形", size = "medium 中" }: AvatarProps) {
  return (
    <div className={className || "bg-[#d0dcfd] relative rounded-[16px] size-[32px]"}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer({ className }: { className?: string }) {
  return (
    <div className={className || "relative w-[1160px]"} data-name="footer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#959595] text-[12px] text-center whitespace-nowrap">Copyright @ 2019-2022 KONE. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[24px] h-[32px] items-center relative shrink-0" data-name="content">
      <div className="relative shrink-0" data-name=".master/item headerMenu/menuLogo">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <div className="h-[28px] relative shrink-0" data-name="item/menuLogo/baseLogo-light">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center relative size-full">
                  <div className="h-[28px] relative shrink-0 w-[71.6px]" data-name="KONE">
                    <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 71.6004 28" width="71.6004">
                      <g id="Vector">
                        <path d={svgPaths.p32cebaf0} fill="#1450F5" />
                        <path d={svgPaths.p373e9b00} fill="#1450F5" />
                        <path d={svgPaths.p1adcf9f0} fill="#1450F5" />
                        <path d={svgPaths.p10952800} fill="#1450F5" />
                        <path d={svgPaths.p2a30a00} fill="#1450F5" />
                      </g>
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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Content />
      <p className="[word-break:break-word] font-['PingFang_SC:Semibold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#141414] text-[18px] text-center whitespace-nowrap">IOT Essential</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="chevron-left">
          <div className="absolute flex inset-[18.75%_31.25%_18.75%_33.98%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
              <div className="relative size-full" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 5.56346 10" width="5.56346">
                  <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="#141414" fillRule="evenodd" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="chevron-right">
          <div className="absolute flex inset-[19.27%_33.98%_18.23%_31.25%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
              <div className="relative size-full" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 5.56346 10" width="5.56346">
                  <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="#959595" fillRule="evenodd" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="refresh-2">
          <div className="absolute inset-[6.25%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
              <path clipRule="evenodd" d={svgPaths.p8641600} fill="#141414" fillRule="evenodd" id="Union" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <Frame6 />
      <div className="flex h-[37px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[37px]" data-name="Vertical divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 37 1" width="37">
                <line id="Vertical divider" stroke="#E7E7E7" x2="37" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <div className="h-[32px] relative shrink-0" data-name=".master/item headerMenu/menuOperations">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center relative size-full">
            <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="mail">
                <div className="absolute inset-[18.74%_9.38%_18.76%_9.37%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 13 10" width="13">
                    <path d={svgPaths.p2ac74a00} fill="black" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="setting">
                <div className="absolute inset-[7.81%_12.11%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 12.1244 13.5" width="12.1244">
                    <g id="Union">
                      <path d={svgPaths.pd588f00} fill="black" />
                      <path d={svgPaths.p23b95380} fill="black" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Avatar className="bg-[#d0dcfd] relative rounded-[16px] shrink-0 size-[32px]" />
    </div>
  );
}

function MenuItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="menu item 菜单选项">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[8px] relative size-full">
        <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st-light">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[7px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="prefixIcon">
                <div className="absolute inset-[8.19%_12.5%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="15.8612" preserveAspectRatio="none" viewBox="0 0 15 15.8612" width="15">
                    <path clipRule="evenodd" d={svgPaths.p315b5a80} fill="#727272" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#727272] text-[14px] text-ellipsis whitespace-nowrap">首页</p>
            </div>
          </div>
        </div>
        <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st-light">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[7px] relative size-full">
              <div className="relative shrink-0 size-[20px]" data-name="prefixIcon">
                <div className="absolute inset-[12.5%_9.37%_12.5%_9.38%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 16.2514 15" width="16.2514">
                    <g id="Union">
                      <path d={svgPaths.p28f67f40} fill="#676A72" />
                      <path d={svgPaths.p13d65580} fill="#676A72" />
                      <path d={svgPaths.p1b60f080} fill="#676A72" />
                      <path d={svgPaths.p231bb80} fill="#676A72" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">设备注册</p>
            </div>
          </div>
        </div>
        <div className="bg-[#f3f6fe] relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st-light">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[7px] relative size-full">
              <div className="relative shrink-0 size-[20px]" data-name="prefixIcon">
                <div className="absolute inset-[12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                    <path clipRule="evenodd" d={svgPaths.p3b76af00} fill="#1450F5" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#1450f5] text-[14px] text-ellipsis whitespace-nowrap">设备查询</p>
            </div>
          </div>
        </div>
        <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st-light">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[7px] relative size-full">
              <div className="relative shrink-0 size-[20px]" data-name="prefixIcon">
                <div className="absolute inset-[18.75%_6.25%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.5" preserveAspectRatio="none" viewBox="0 0 17.5 12.5" width="17.5">
                    <g id="Union">
                      <path d={svgPaths.p3c437a30} fill="#676A72" />
                      <path d={svgPaths.p38607500} fill="#676A72" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">SIM卡管理</p>
            </div>
          </div>
        </div>
        <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st-light">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[7px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="prefixIcon">
                <div className="absolute inset-[6.25%_3.13%_10%_6.25%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="16.751" preserveAspectRatio="none" viewBox="0 0 18.125 16.751" width="18.125">
                    <path d={svgPaths.p11290b00} fill="#676A72" id="Union" />
                  </svg>
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">权限管理</p>
            </div>
          </div>
        </div>
        <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st-light">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[7px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="prefixIcon">
                <div className="absolute inset-[9.38%_15.63%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="16.25" preserveAspectRatio="none" viewBox="0 0 13.75 16.25" width="13.75">
                    <path clipRule="evenodd" d={svgPaths.p34913e80} fill="#676A72" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">操作日志</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="content">
      <MenuItem />
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0" data-name="content">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
        <div className="absolute inset-[9.37%_9.38%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
            <path clipRule="evenodd" d={svgPaths.p10544e00} fill="#676A72" fillRule="evenodd" id="Union" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] whitespace-nowrap">实时数据</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0" data-name="content">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
        <div className="absolute inset-[15.63%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
            <g id="Union">
              <path clipRule="evenodd" d={svgPaths.p1ef8d500} fill="#676A72" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p30675900} fill="#676A72" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p958cc00} fill="#676A72" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1152d200} fill="#676A72" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] whitespace-nowrap">设备档案</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0" data-name="content">
      <div className="relative shrink-0 size-[16px]" data-name="prefixIcon">
        <div className="absolute inset-[12.5%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
            <g id="Union">
              <path d={svgPaths.p1705a400} fill="#1450F5" />
              <path d={svgPaths.p2eaf3500} fill="#1450F5" />
              <path d={svgPaths.p35603380} fill="#1450F5" />
              <path d={svgPaths.p311a7ac0} fill="#1450F5" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1450f5] text-[14px] whitespace-nowrap">统计数据</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0" data-name="content">
      <div className="relative shrink-0 size-[16px]" data-name="prefixIcon">
        <div className="absolute flex inset-[12.5%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
            <div className="relative size-full" data-name="Union">
              <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                <g id="Union">
                  <path d={svgPaths.p624b00} fill="#676A72" />
                  <path d={svgPaths.p36a62500} fill="#676A72" />
                  <path d={svgPaths.p1a0d76f0} fill="#676A72" />
                  <path d={svgPaths.p311a7ac0} fill="#676A72" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] whitespace-nowrap">设备事件</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0" data-name="content">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
        <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
            <path d={svgPaths.p10a0fe40} fill="#676A72" id="Union" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] whitespace-nowrap">操作记录</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="bg-[#4373f7] h-[14px] relative rounded-[1px] shrink-0 w-[4px]" />
        <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">统计总览</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="h-full relative shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pt-[2px] relative size-full">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">次</p>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">593,583</p>
      <Frame49 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full">
      <div className="bg-[#1450f5] relative rounded-[16px] shrink-0 size-[6px]" />
      <Frame54 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">运行总次数</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[170.8px]">
      <Frame12 />
      <Frame11 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="h-full relative shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pt-[2px] relative size-full">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">小时/天</p>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">6.2</p>
      <Frame51 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full">
      <div className="bg-[#1450f5] relative rounded-[16px] shrink-0 size-[6px]" />
      <Frame55 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">平均运行时长</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[170.8px]">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="h-full relative shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pt-[2px] relative size-full">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">千米</p>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">28,593</p>
      <Frame52 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full">
      <div className="bg-[#1450f5] relative rounded-[16px] shrink-0 size-[6px]" />
      <Frame56 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">运行总距离</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[170.8px]">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="h-full relative shrink-0 w-[24px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pt-[2px] relative size-full" />
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">10:00 ~ 11:00</p>
      <Frame53 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full">
      <div className="bg-[#1450f5] relative rounded-[16px] shrink-0 size-[6px]" />
      <Frame57 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">运行高峰时段</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[170.8px]">
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="h-full relative shrink-0 w-[24px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pt-[2px] relative size-full" />
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">5F</p>
      <Frame59 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full">
      <div className="bg-[#1450f5] relative rounded-[16px] shrink-0 size-[6px]" />
      <Frame58 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">访问最多的楼层</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[170.8px]">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="bg-[#f5f7fa] flex-[1_0_0] min-w-px relative rounded-[6px]">
        <div className="content-stretch flex items-start px-[16px] py-[10px] relative size-full">
          <Frame8 />
        </div>
      </div>
      <div className="bg-[#f5f7fa] flex-[1_0_0] min-w-px relative rounded-[6px]">
        <div className="content-stretch flex items-start px-[16px] py-[10px] relative size-full">
          <Frame9 />
        </div>
      </div>
      <div className="bg-[#f5f7fa] flex-[1_0_0] min-w-px relative rounded-[6px]">
        <div className="content-stretch flex items-start px-[16px] py-[10px] relative size-full">
          <Frame10 />
        </div>
      </div>
      <div className="bg-[#f5f7fa] flex-[1_0_0] min-w-px relative rounded-[6px]">
        <div className="content-stretch flex items-start px-[16px] py-[10px] relative size-full">
          <Frame17 />
        </div>
      </div>
      <div className="bg-[#f5f7fa] flex-[1_0_0] min-w-px relative rounded-[6px]">
        <div className="content-stretch flex items-start px-[16px] py-[10px] relative size-full">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="h-full relative shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pt-[2px] relative size-full">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">次</p>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">384,482</p>
      <Frame61 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full">
      <div className="bg-[#f51414] relative rounded-[16px] shrink-0 size-[6px]" />
      <Frame60 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">故障发生总次数</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[170.8px]">
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="h-full relative shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pt-[2px] relative size-full">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">次</p>
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">35</p>
      <Frame63 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full">
      <div className="bg-[#f51414] relative rounded-[16px] shrink-0 size-[6px]" />
      <Frame62 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">挡门故障次数</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[170.8px]">
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="h-full relative shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pt-[2px] relative size-full">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">分钟</p>
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">5</p>
      <Frame65 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full">
      <div className="bg-[#f51414] relative rounded-[16px] shrink-0 size-[6px]" />
      <Frame64 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">最长挡门时长</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[170.8px]">
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="h-full relative shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pt-[2px] relative size-full">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">分钟</p>
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">4</p>
      <Frame67 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full">
      <div className="bg-[#f51414] relative rounded-[16px] shrink-0 size-[6px]" />
      <Frame66 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">平均挡门时长</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[170.8px]">
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="h-full relative shrink-0 w-[24px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pt-[2px] relative size-full" />
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">3F</p>
      <Frame69 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full">
      <div className="bg-[#f51414] relative rounded-[16px] shrink-0 size-[6px]" />
      <Frame68 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">挡门最多楼层</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[170.8px]">
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="bg-[#f5f7fa] flex-[1_0_0] min-w-px relative rounded-[6px]">
        <div className="content-stretch flex items-start px-[16px] py-[10px] relative size-full">
          <Frame23 />
        </div>
      </div>
      <div className="bg-[#f5f7fa] flex-[1_0_0] min-w-px relative rounded-[6px]">
        <div className="content-stretch flex items-start px-[16px] py-[10px] relative size-full">
          <Frame27 />
        </div>
      </div>
      <div className="bg-[#f5f7fa] flex-[1_0_0] min-w-px relative rounded-[6px]">
        <div className="content-stretch flex items-start px-[16px] py-[10px] relative size-full">
          <Frame30 />
        </div>
      </div>
      <div className="bg-[#f5f7fa] flex-[1_0_0] min-w-px relative rounded-[6px]">
        <div className="content-stretch flex items-start px-[16px] py-[10px] relative size-full">
          <Frame33 />
        </div>
      </div>
      <div className="bg-[#f5f7fa] flex-[1_0_0] min-w-px relative rounded-[6px]">
        <div className="content-stretch flex items-start px-[16px] py-[10px] relative size-full">
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame26 />
      <Frame42 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-start flex flex-wrap gap-y-[12px] items-start p-[12px] relative size-full">
        <Frame50 />
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="h-[195px] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#fafbfc] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center pb-[9px] pt-[8px] px-[12px] relative size-full">
              <Frame77 />
            </div>
          </div>
        </div>
        <div className="absolute bg-[#dfe1e8] right-[12px] rounded-[4px] top-[8px] w-[168px]" data-name="radioButton-Group 单选按钮组">
          <div className="content-stretch flex gap-[4px] items-start p-[2px] relative size-full">
            <div className="bg-[#dfe1e8] flex-[1_0_0] min-w-px relative rounded-[2px]" data-name=".master/radioGroup">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] text-center whitespace-nowrap">近7天</p>
                </div>
              </div>
            </div>
            <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[2px]" data-name=".master/radioGroup">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[12px] text-center whitespace-nowrap">近30天</p>
                </div>
              </div>
            </div>
            <div className="bg-[#dfe1e8] flex-[1_0_0] min-w-px relative rounded-[2px]" data-name=".master/radioGroup">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] text-center whitespace-nowrap">近90天</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Frame43 />
      </div>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame78() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="bg-[#4373f7] h-[14px] relative rounded-[1px] shrink-0 w-[4px]" />
        <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">日在线率趋势</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute bg-[#ffe5dc] content-stretch drop-shadow-[0px_2px_2.5px_rgba(0,0,0,0.1)] flex flex-col items-start left-[7px] px-[6px] py-[2px] rounded-[4px] top-[108px]">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f51414] text-[12px] text-center whitespace-nowrap">50%</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex items-start justify-end pr-[8px] relative shrink-0 w-[29px]" data-name="数字">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">100%</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex items-start justify-end pr-[8px] relative shrink-0 w-[29px]" data-name="数字">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">80%</p>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex items-start justify-end pr-[8px] relative shrink-0 w-[29px]" data-name="数字">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">60%</p>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex items-start justify-end pr-[8px] relative shrink-0 w-[29px]" data-name="数字">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">40%</p>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex items-start justify-end pr-[8px] relative shrink-0 w-[29px]" data-name="数字">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">20%</p>
    </div>
  );
}

function Y() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
      <div className="content-stretch flex flex-col items-start pb-[20px] relative size-full">
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center py-[4px] relative size-full">
              <Component5 />
              <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1095 1" width="1095">
                    <line id="Line" stroke="#DDDDDD" strokeDasharray="2 2" x2="1095" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center py-[4px] relative size-full">
              <Component6 />
              <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1095 1" width="1095">
                    <line id="Line" stroke="#DDDDDD" strokeDasharray="2 2" x2="1095" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center py-[4px] relative size-full">
              <Component7 />
              <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1095 1" width="1095">
                    <line id="Line" stroke="#DDDDDD" strokeDasharray="2 2" x2="1095" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center py-[4px] relative size-full">
              <Component8 />
              <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1095 1" width="1095">
                    <line id="Line" stroke="#DDDDDD" strokeDasharray="2 2" x2="1095" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center py-[4px] relative size-full">
              <Component9 />
              <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1095 1" width="1095">
                    <line id="Line" stroke="#DDDDDD" strokeDasharray="2 2" x2="1095" y1="0.5" y2="0.5" />
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

function Component10() {
  return (
    <div className="content-stretch flex items-start justify-end pr-[8px] relative shrink-0 w-[29px]" data-name="数字">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">0</p>
    </div>
  );
}

function Component11() {
  return (
    <div className="relative shrink-0 w-full" data-name="文字">
      <div className="content-stretch flex items-start pl-[28px] relative size-full">
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.1</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.2</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.3</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.4</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.5</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.6</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.7</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.8</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.9</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.10</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.11</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.12</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.13</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.14</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.15</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.16</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.17</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.18</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.19</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.20</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.21</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.22</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.23</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.24</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.25</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.26</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.27</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.28</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.29</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="x轴">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function X() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="x轴">
      <div className="h-px relative shrink-0 w-full" data-name="y轴">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Component10 />
            <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1095 1" width="1095">
                  <line id="Line" stroke="#727272" x2="1095" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Component11 />
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start" data-name="坐标轴">
      <Y />
      <X />
    </div>
  );
}

function Bg() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[34px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg />
        </div>
      </div>
    </div>
  );
}

function Bg1() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[50px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg1 />
        </div>
      </div>
    </div>
  );
}

function Bg2() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[28px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar2() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg2 />
        </div>
      </div>
    </div>
  );
}

function Bg3() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[80px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar3() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg3 />
        </div>
      </div>
    </div>
  );
}

function Bg4() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[60px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar4() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg4 />
        </div>
      </div>
    </div>
  );
}

function Bg5() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[22px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar5() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg5 />
        </div>
      </div>
    </div>
  );
}

function Bg6() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[34px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar6() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg6 />
        </div>
      </div>
    </div>
  );
}

function Bg7() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[50px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar7() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg7 />
        </div>
      </div>
    </div>
  );
}

function Bg8() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[28px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar8() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg8 />
        </div>
      </div>
    </div>
  );
}

function Bg9() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[80px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar9() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg9 />
        </div>
      </div>
    </div>
  );
}

function Bg10() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[34px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar10() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg10 />
        </div>
      </div>
    </div>
  );
}

function Bg11() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[50px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar11() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg11 />
        </div>
      </div>
    </div>
  );
}

function Bg12() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[28px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar12() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg12 />
        </div>
      </div>
    </div>
  );
}

function Bg13() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[80px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar13() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg13 />
        </div>
      </div>
    </div>
  );
}

function Bg14() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[60px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar14() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg14 />
        </div>
      </div>
    </div>
  );
}

function Bg15() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[22px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar15() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg15 />
        </div>
      </div>
    </div>
  );
}

function Bg16() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[50px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar16() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg16 />
        </div>
      </div>
    </div>
  );
}

function Bg17() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[28px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar17() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg17 />
        </div>
      </div>
    </div>
  );
}

function Bg18() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[80px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar18() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg18 />
        </div>
      </div>
    </div>
  );
}

function Bg19() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[60px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar19() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg19 />
        </div>
      </div>
    </div>
  );
}

function Bg20() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[34px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar20() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg20 />
        </div>
      </div>
    </div>
  );
}

function Bg21() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[50px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar21() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg21 />
        </div>
      </div>
    </div>
  );
}

function Bg22() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[60px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar22() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg22 />
        </div>
      </div>
    </div>
  );
}

function Bg23() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[22px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar23() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg23 />
        </div>
      </div>
    </div>
  );
}

function Bg24() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[34px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar24() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg24 />
        </div>
      </div>
    </div>
  );
}

function Bg25() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[50px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar25() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg25 />
        </div>
      </div>
    </div>
  );
}

function Bg26() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[80px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar26() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg26 />
        </div>
      </div>
    </div>
  );
}

function Bg27() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[50px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar27() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg27 />
        </div>
      </div>
    </div>
  );
}

function Bg28() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[28px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar28() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg28 />
        </div>
      </div>
    </div>
  );
}

function Bg29() {
  return (
    <div className="bg-[rgba(114,114,114,0.2)] h-full relative shrink-0 w-[8px]" data-name="bg">
      <div className="content-stretch flex items-start pt-[80px] relative size-full">
        <div className="bg-[#4373f7] flex-[1_0_0] h-full min-w-px relative" />
      </div>
    </div>
  );
}

function Bar29() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bar">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex items-end justify-center pb-[27px] relative size-full">
          <Bg29 />
        </div>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="left">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">在线时长占比</p>
      <div className="relative shrink-0" data-name="图例">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center relative size-full">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">2026-3-8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col h-full items-end justify-between leading-[normal] not-italic relative shrink-0 text-[12px] tracking-[0.6px] whitespace-nowrap" data-name="right">
      <p className="font-['PingFang_SC:Regular',sans-serif] opacity-0 relative shrink-0 text-[rgba(0,0,0,0.85)] text-center">AAA</p>
      <p className="font-['PingFang_SC:Medium',sans-serif] relative shrink-0 text-[#141414] text-right">63.2%</p>
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px relative w-full" data-name="数据">
      <Left />
      <Right />
    </div>
  );
}

function BarGroup() {
  return (
    <div className="absolute content-stretch flex inset-[6.99%_0_1.34%_29px] items-start" data-name="bar group">
      <Bar />
      <Bar1 />
      <Bar2 />
      <Bar3 />
      <Bar4 />
      <Bar5 />
      <Bar6 />
      <Bar7 />
      <Bar8 />
      <Bar9 />
      <Bar10 />
      <Bar11 />
      <Bar12 />
      <Bar13 />
      <Bar14 />
      <Bar15 />
      <Bar16 />
      <Bar17 />
      <Bar18 />
      <Bar19 />
      <Bar20 />
      <Bar21 />
      <Bar22 />
      <Bar23 />
      <Bar24 />
      <Bar25 />
      <Bar26 />
      <Bar27 />
      <Bar28 />
      <Bar29 />
      <div className="absolute bg-white drop-shadow-[1px_1px_3px_rgba(0,0,0,0.23)] inset-[7.47%_61.65%_58.79%_26.21%] rounded-[8px]" data-name="数据悬浮">
        <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
          <Component12 />
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="flex-[1_0_0] h-[224px] min-w-px relative" data-name="折线图">
      <Component4 />
      <BarGroup />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-start flex flex-wrap gap-[12px] items-start pb-[12px] pl-[20px] pr-[16px] pt-[16px] relative size-full">
        <Frame39 />
        <Component3 />
        <div className="absolute h-0 left-[49px] top-[120px] w-[1095px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1095 1" width="1095">
              <line id="Line 121" stroke="#F51414" strokeDasharray="2 2" x2="1095" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#fafbfc] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center pb-[9px] pt-[8px] px-[12px] relative size-full">
              <Frame78 />
            </div>
          </div>
        </div>
        <Frame44 />
      </div>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame79() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="bg-[#4373f7] h-[14px] relative rounded-[1px] shrink-0 w-[4px]" />
        <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">数据分析</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="content">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[20px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#141414] text-[12px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden text-ellipsis">总运行次数</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <div className="bg-white relative rounded-[4px] shrink-0 w-[240px]" data-name="Select 选择器">
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative size-full">
            <Content7 />
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
      <p className="[word-break:break-word] absolute font-['PingFang_SC:Medium',sans-serif] leading-[22px] left-0 not-italic text-[#141414] text-[14px] top-0 whitespace-nowrap">分时段统计</p>
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex items-start justify-end pr-[8px] relative shrink-0 w-[29px]" data-name="数字">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">600</p>
    </div>
  );
}

function Component16() {
  return (
    <div className="content-stretch flex items-start justify-end pr-[8px] relative shrink-0 w-[29px]" data-name="数字">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">500</p>
    </div>
  );
}

function Component17() {
  return (
    <div className="content-stretch flex items-start justify-end pr-[8px] relative shrink-0 w-[29px]" data-name="数字">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">400</p>
    </div>
  );
}

function Component18() {
  return (
    <div className="content-stretch flex items-start justify-end pr-[8px] relative shrink-0 w-[29px]" data-name="数字">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">300</p>
    </div>
  );
}

function Component19() {
  return (
    <div className="content-stretch flex items-start justify-end pr-[8px] relative shrink-0 w-[29px]" data-name="数字">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">200</p>
    </div>
  );
}

function Component20() {
  return (
    <div className="content-stretch flex items-start justify-end pr-[8px] relative shrink-0 w-[29px]" data-name="数字">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">100</p>
    </div>
  );
}

function Y1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
      <div className="content-stretch flex flex-col items-start pb-[20px] relative size-full">
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center py-[4px] relative size-full">
              <Component15 />
              <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1095 1" width="1095">
                    <line id="Line" stroke="#DDDDDD" strokeDasharray="2 2" x2="1095" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center py-[4px] relative size-full">
              <Component16 />
              <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1095 1" width="1095">
                    <line id="Line" stroke="#DDDDDD" strokeDasharray="2 2" x2="1095" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center py-[4px] relative size-full">
              <Component17 />
              <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1095 1" width="1095">
                    <line id="Line" stroke="#DDDDDD" strokeDasharray="2 2" x2="1095" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center py-[4px] relative size-full">
              <Component18 />
              <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1095 1" width="1095">
                    <line id="Line" stroke="#DDDDDD" strokeDasharray="2 2" x2="1095" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center py-[4px] relative size-full">
              <Component19 />
              <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1095 1" width="1095">
                    <line id="Line" stroke="#DDDDDD" strokeDasharray="2 2" x2="1095" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center py-[4px] relative size-full">
              <Component20 />
              <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1095 1" width="1095">
                    <line id="Line" stroke="#DDDDDD" strokeDasharray="2 2" x2="1095" y1="0.5" y2="0.5" />
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

function Component21() {
  return (
    <div className="content-stretch flex items-start justify-end pr-[8px] relative shrink-0 w-[29px]" data-name="数字">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">0</p>
    </div>
  );
}

function Component22() {
  return (
    <div className="relative shrink-0 w-full" data-name="文字">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-between pl-[20px] relative size-full">
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.1</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.2</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.3</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.4</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.5</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.6</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.7</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.8</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.9</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.10</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.11</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.12</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.13</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.14</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.15</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.16</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.17</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.18</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.19</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.20</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.21</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.22</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.23</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.24</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.25</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.26</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.27</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.28</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.29</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[32px]" data-name="x轴">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3.30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function X1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="x轴">
      <div className="h-px relative shrink-0 w-full" data-name="y轴">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Component21 />
            <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1095 1" width="1095">
                  <line id="Line" stroke="#727272" x2="1095" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Component22 />
    </div>
  );
}

function Component14() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start" data-name="坐标轴">
      <Y1 />
      <X1 />
    </div>
  );
}

function Component23() {
  return (
    <div className="absolute inset-[11.67%_2px_20.67%_36px]" data-name="线1">
      <div className="absolute h-[126.691px] left-[2.81px] top-[20px] w-[1043.187px]">
        <div className="absolute inset-[-0.79%_0]">
          <svg className="block size-full" fill="none" height="128.691" preserveAspectRatio="none" viewBox="0 0 1045.19 128.691" width="1045.19">
            <path d={svgPaths.p18aad400} id="Line 1" stroke="#4373F7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Frame2 className="absolute left-0 top-[132px]" />
      <Frame2 className="absolute left-[35px] top-[144px]" />
      <Frame2 className="absolute left-[71px] top-[141px]" />
      <Frame2 className="absolute left-[107px] top-[126px]" />
      <Frame2 className="absolute left-[143px] top-[84px]" />
      <Frame2 className="absolute left-[179px] top-[74px]" />
      <Frame2 className="absolute left-[215px] top-[129px]" />
      <Frame2 className="absolute left-[251px] top-[115px]" />
      <Frame2 className="absolute left-[287px] top-[128px]" />
      <Frame2 className="absolute left-[323px] top-[104px]" />
      <Frame2 className="absolute left-[359px] top-[90px]" />
      <Frame2 className="absolute left-[395px] top-[57px]" />
      <Frame2 className="absolute left-[431px] top-[81px]" />
      <Frame2 className="absolute left-[467px] top-[72px]" />
      <Frame2 className="absolute left-[503px] top-[92px]" />
      <Frame2 className="absolute left-[539px] top-[118px]" />
      <Frame2 className="absolute left-[575px] top-[110px]" />
      <Frame2 className="absolute left-[611px] top-[94px]" />
      <Frame2 className="absolute left-[647px] top-[112px]" />
      <Frame2 className="absolute left-[683px] top-[84px]" />
      <Frame2 className="absolute left-[719px] top-[88px]" />
      <Frame2 className="absolute left-[755px] top-[56px]" />
      <Frame2 className="absolute left-[791px] top-[78px]" />
      <Frame2 className="absolute left-[827px] top-[62px]" />
      <Frame2 className="absolute left-[863px] top-[68px]" />
      <Frame2 className="absolute left-[935px] top-[43px]" />
      <Frame2 className="absolute left-[899px] top-[59px]" />
      <Frame2 className="absolute left-[971px] top-[75px]" />
      <Frame2 className="absolute left-[1007px] top-[51px]" />
      <Frame2 className="absolute left-[1043px] top-[18px]" />
    </div>
  );
}

function Component13() {
  return (
    <div className="h-[300px] relative shrink-0 w-full" data-name="折线图">
      <Component14 />
      <div className="absolute h-[247px] left-[290px] top-[21px] w-0">
        <div className="absolute inset-[-0.2%_-0.5px]">
          <svg className="block size-full" fill="none" height="248" preserveAspectRatio="none" viewBox="0 0 1 248" width="1">
            <path d="M0.5 0.5V247.5" id="Vector 10" stroke="#A1B9FB" strokeDasharray="3 3" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Component23 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[300px] relative shrink-0 w-full">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pl-[4px] relative size-full">
          <Component13 />
        </div>
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="left">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">总运行次数</p>
      <div className="relative shrink-0" data-name="图例">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center relative size-full">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">2026-3-8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Right1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col h-full items-end justify-between leading-[normal] not-italic relative shrink-0 text-[12px] tracking-[0.6px] whitespace-nowrap" data-name="right">
      <p className="font-['PingFang_SC:Regular',sans-serif] opacity-0 relative shrink-0 text-[rgba(0,0,0,0.85)] text-center">AAA</p>
      <p className="font-['PingFang_SC:Medium',sans-serif] relative shrink-0 text-[#141414] text-right">289</p>
    </div>
  );
}

function Component24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px relative w-full" data-name="数据">
      <Left1 />
      <Right1 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame />
      <Frame1 />
      <div className="absolute bg-white drop-shadow-[1px_1px_3px_rgba(0,0,0,0.23)] inset-[50.9%_60.79%_27.71%_27.43%] rounded-[8px]" data-name="数据悬浮">
        <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
          <Component24 />
        </div>
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="图例">
      <div className="bg-[#4373f7] h-[8px] relative rounded-[2px] shrink-0 w-[12px]" />
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[12px] text-right whitespace-nowrap">上行次数</p>
    </div>
  );
}

function Component26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="图例">
      <div className="bg-[#0dd2e1] h-[8px] relative rounded-[2px] shrink-0 w-[12px]" />
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[12px] text-right whitespace-nowrap">下行次数</p>
    </div>
  );
}

function Component27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="图例">
      <div className="bg-[#ffcb49] h-[8px] relative rounded-[2px] shrink-0 w-[12px]" />
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[12px] text-right whitespace-nowrap">总运行次数</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[17px] items-center relative shrink-0">
      <Component25 />
      <Component26 />
      <Component27 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">单位（次）</p>
      <Frame75 />
    </div>
  );
}

function Component30() {
  return (
    <div className="h-[25px] relative shrink-0 w-full" data-name="文字">
      <div className="content-stretch flex items-start pl-[16px] relative size-full">
        <div className="flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
          <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full" data-name="x轴">
              <div className="flex flex-row items-center justify-end size-full">
                <div className="content-stretch flex items-center justify-end py-[4px] relative size-full">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">1F</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
          <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full" data-name="x轴">
              <div className="flex flex-row items-center justify-end size-full">
                <div className="content-stretch flex items-center justify-end py-[4px] relative size-full">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">2F</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
          <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full" data-name="x轴">
              <div className="flex flex-row items-center justify-end size-full">
                <div className="content-stretch flex items-center justify-end py-[4px] relative size-full">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">3F</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
          <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full" data-name="x轴">
              <div className="flex flex-row items-center justify-end size-full">
                <div className="content-stretch flex items-center justify-end py-[4px] relative size-full">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">4F</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
          <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full" data-name="x轴">
              <div className="flex flex-row items-center justify-end size-full">
                <div className="content-stretch flex items-center justify-end py-[4px] relative size-full">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">5F</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
          <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full" data-name="x轴">
              <div className="flex flex-row items-center justify-end size-full">
                <div className="content-stretch flex items-center justify-end py-[4px] relative size-full">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">6F</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
          <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full" data-name="x轴">
              <div className="flex flex-row items-center justify-end size-full">
                <div className="content-stretch flex items-center justify-end py-[4px] relative size-full">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">7F</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
          <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full" data-name="x轴">
              <div className="flex flex-row items-center justify-end size-full">
                <div className="content-stretch flex items-center justify-end py-[4px] relative size-full">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">8F</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
          <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full" data-name="x轴">
              <div className="flex flex-row items-center justify-end size-full">
                <div className="content-stretch flex items-center justify-end py-[4px] relative size-full">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">9F</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
          <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full" data-name="x轴">
              <div className="flex flex-row items-center justify-end size-full">
                <div className="content-stretch flex items-center justify-end py-[4px] relative size-full">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">10F</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
          <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full" data-name="x轴">
              <div className="flex flex-row items-center justify-end size-full">
                <div className="content-stretch flex items-center justify-end py-[4px] relative size-full">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">11F</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
          <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full" data-name="x轴">
              <div className="flex flex-row items-center justify-end size-full">
                <div className="content-stretch flex items-center justify-end py-[4px] relative size-full">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">12F</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component31() {
  return (
    <div className="flex h-[8px] items-center justify-center relative shrink-0 w-[17px]">
      <div className="flex-none rotate-90">
        <div className="content-stretch flex items-start justify-end relative" data-name="数字">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">0</p>
        </div>
      </div>
    </div>
  );
}

function Y2() {
  return (
    <div className="content-stretch flex gap-[4px] h-px items-center relative shrink-0 w-full" data-name="y轴">
      <Component31 />
      <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 580.212 1" width="580.212">
            <line id="Line" stroke="#727272" x2="580.212" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function X2() {
  return (
    <div className="flex h-[601.212px] items-center justify-center relative shrink-0 w-[110px]">
      <div className="-rotate-90 flex-none">
        <div className="content-stretch flex flex-col gap-[8px] items-start pb-[76px] relative w-[601.212px]" data-name="x轴">
          <Component30 />
          <Y2 />
        </div>
      </div>
    </div>
  );
}

function Component32() {
  return (
    <div className="flex h-[29px] items-center justify-center relative shrink-0 w-[17px]">
      <div className="flex-none rotate-90">
        <div className="content-stretch flex items-center justify-center relative w-[29px]" data-name="数字">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">50</p>
        </div>
      </div>
    </div>
  );
}

function Y4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center py-[4px] relative size-full">
          <Component32 />
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 580.212 1" width="580.212">
                <line id="Line" stroke="#DDDDDD" strokeDasharray="2 2" x2="580.212" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component33() {
  return (
    <div className="flex h-[29px] items-center justify-center relative shrink-0 w-[17px]">
      <div className="flex-none rotate-90">
        <div className="content-stretch flex items-center justify-center relative w-[29px]" data-name="数字">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">100</p>
        </div>
      </div>
    </div>
  );
}

function Y5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center py-[4px] relative size-full">
          <Component33 />
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 580.212 1" width="580.212">
                <line id="Line" stroke="#DDDDDD" strokeDasharray="2 2" x2="580.212" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component34() {
  return (
    <div className="flex h-[29px] items-center justify-center relative shrink-0 w-[17px]">
      <div className="flex-none rotate-90">
        <div className="content-stretch flex items-center justify-center relative w-[29px]" data-name="数字">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">150</p>
        </div>
      </div>
    </div>
  );
}

function Y6() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center py-[4px] relative size-full">
          <Component34 />
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 580.212 1" width="580.212">
                <line id="Line" stroke="#DDDDDD" strokeDasharray="2 2" x2="580.212" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component35() {
  return (
    <div className="flex h-[29px] items-center justify-center relative shrink-0 w-[17px]">
      <div className="flex-none rotate-90">
        <div className="content-stretch flex items-center justify-center relative w-[29px]" data-name="数字">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">200</p>
        </div>
      </div>
    </div>
  );
}

function Y7() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center py-[4px] relative size-full">
          <Component35 />
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 580.212 1" width="580.212">
                <line id="Line" stroke="#DDDDDD" strokeDasharray="2 2" x2="580.212" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component36() {
  return (
    <div className="flex h-[29px] items-center justify-center relative shrink-0 w-[17px]">
      <div className="flex-none rotate-90">
        <div className="content-stretch flex items-center justify-center relative w-[29px]" data-name="数字">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">300</p>
        </div>
      </div>
    </div>
  );
}

function Y8() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center py-[4px] relative size-full">
          <Component36 />
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 580.212 1" width="580.212">
                <line id="Line" stroke="#DDDDDD" strokeDasharray="2 2" x2="580.212" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component37() {
  return (
    <div className="flex h-[29px] items-center justify-center relative shrink-0 w-[17px]">
      <div className="flex-none rotate-90">
        <div className="content-stretch flex items-center justify-center relative w-[29px]" data-name="数字">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">350</p>
        </div>
      </div>
    </div>
  );
}

function Y9() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center py-[4px] relative size-full">
          <Component37 />
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 580.212 1" width="580.212">
                <line id="Line" stroke="#DDDDDD" strokeDasharray="2 2" x2="580.212" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component38() {
  return (
    <div className="flex h-[29px] items-center justify-center relative shrink-0 w-[17px]">
      <div className="flex-none rotate-90">
        <div className="content-stretch flex items-center justify-center relative w-[29px]" data-name="数字">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#727272] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">400</p>
        </div>
      </div>
    </div>
  );
}

function Y10() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="y轴">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center py-[4px] relative size-full">
          <Component38 />
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 580.212 1" width="580.212">
                <line id="Line" stroke="#DDDDDD" strokeDasharray="2 2" x2="580.212" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Y3() {
  return (
    <div className="flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
      <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
        <div className="content-stretch flex flex-col items-start relative size-full" data-name="y轴">
          <Y4 />
          <Y5 />
          <Y6 />
          <Y7 />
          <Y8 />
          <Y9 />
          <Y10 />
        </div>
      </div>
    </div>
  );
}

function Component29() {
  return (
    <div className="absolute content-stretch flex inset-0 items-start" data-name="坐标轴">
      <X2 />
      <Y3 />
    </div>
  );
}

function Bg30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bg">
      <div className="bg-[#4373f7] h-[6px] relative shrink-0 w-0" />
    </div>
  );
}

function Bg31() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#0dd2e1] h-[6px] relative shrink-0 w-[740px]" />
      </div>
    </div>
  );
}

function Bg32() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#ffcb49] h-[6px] relative shrink-0 w-[423px]" />
      </div>
    </div>
  );
}

function Bar30() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[33px] relative size-full">
          <Bg30 />
          <Bg31 />
          <Bg32 />
        </div>
      </div>
    </div>
  );
}

function Bg33() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bg">
      <div className="bg-[#4373f7] h-[6px] relative shrink-0 w-[217px]" />
    </div>
  );
}

function Bg34() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#0dd2e1] h-[6px] relative shrink-0 w-[553px]" />
      </div>
    </div>
  );
}

function Bg35() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#ffcb49] h-[6px] relative shrink-0 w-[910px]" />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[871px] top-[7.99px]">
      <div className="absolute bg-white drop-shadow-[0px_4px_5px_rgba(0,0,0,0.1)] left-[871px] rounded-[4px] top-[7.99px]" data-name="Tooltip 文字提示">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] relative size-full">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#141414] text-[0px] whitespace-nowrap">
              <span className="leading-[20px] text-[12px]">{`总运行次数 `}</span>
              <span className="font-['PingFang_SC:Medium',sans-serif] leading-[20px] text-[12px]">39,056</span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute left-[910px] size-[16px] top-[30.99px]" data-name="Cursor/arrow">
        <div className="absolute inset-[0_16.67%_16.67%_0]" data-name="Bounding Box" />
        <div className="absolute inset-[20.83%_33.33%]" data-name="Cursor">
          <div className="absolute inset-[-47.3%_-101.52%_-54.44%_-75%]">
            <svg className="block size-full" fill="none" height="18.8284" preserveAspectRatio="none" viewBox="0 0 14.7475 18.8284" width="14.7475">
              <g filter="url(#filter0_d_0_1157)" id="Cursor">
                <path clipRule="evenodd" d={svgPaths.p2128f980} fill="black" fillRule="evenodd" />
                <path d={svgPaths.p3b571a00} stroke="white" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="18.8284" id="filter0_d_0_1157" width="14.7475" x="0" y="-2.38419e-07">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_1157" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_1157" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bar31() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[33px] relative size-full">
          <Bg33 />
          <Bg34 />
          <Bg35 />
          <Group />
        </div>
      </div>
    </div>
  );
}

function Bg36() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bg">
      <div className="bg-[#4373f7] h-[6px] relative shrink-0 w-[217px]" />
    </div>
  );
}

function Bg37() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#0dd2e1] h-[6px] relative shrink-0 w-[135px]" />
      </div>
    </div>
  );
}

function Bg38() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#ffcb49] h-[6px] relative shrink-0 w-[687px]" />
      </div>
    </div>
  );
}

function Bar32() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[33px] relative size-full">
          <Bg36 />
          <Bg37 />
          <Bg38 />
        </div>
      </div>
    </div>
  );
}

function Bg39() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bg">
      <div className="bg-[#4373f7] h-[6px] relative shrink-0 w-[217px]" />
    </div>
  );
}

function Bg40() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#0dd2e1] h-[6px] relative shrink-0 w-[48px]" />
      </div>
    </div>
  );
}

function Bg41() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#ffcb49] h-[6px] relative shrink-0 w-[321px]" />
      </div>
    </div>
  );
}

function Bar33() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[33px] relative size-full">
          <Bg39 />
          <Bg40 />
          <Bg41 />
        </div>
      </div>
    </div>
  );
}

function Bg42() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bg">
      <div className="bg-[#4373f7] h-[6px] relative shrink-0 w-[217px]" />
    </div>
  );
}

function Bg43() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#0dd2e1] h-[6px] relative shrink-0 w-[96px]" />
      </div>
    </div>
  );
}

function Bg44() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#ffcb49] h-[6px] relative shrink-0 w-[423px]" />
      </div>
    </div>
  );
}

function Bar34() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[33px] relative size-full">
          <Bg42 />
          <Bg43 />
          <Bg44 />
        </div>
      </div>
    </div>
  );
}

function Bg45() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bg">
      <div className="bg-[#4373f7] h-[6px] relative shrink-0 w-[363px]" />
    </div>
  );
}

function Bg46() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#0dd2e1] h-[6px] relative shrink-0 w-[135px]" />
      </div>
    </div>
  );
}

function Bg47() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#ffcb49] h-[6px] relative shrink-0 w-[782px]" />
      </div>
    </div>
  );
}

function Bar35() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[33px] relative size-full">
          <Bg45 />
          <Bg46 />
          <Bg47 />
        </div>
      </div>
    </div>
  );
}

function Bg48() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bg">
      <div className="bg-[#4373f7] h-[6px] relative shrink-0 w-[217px]" />
    </div>
  );
}

function Bg49() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#0dd2e1] h-[6px] relative shrink-0 w-[402px]" />
      </div>
    </div>
  );
}

function Bg50() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#ffcb49] h-[6px] relative shrink-0 w-[589px]" />
      </div>
    </div>
  );
}

function Bar36() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[33px] relative size-full">
          <Bg48 />
          <Bg49 />
          <Bg50 />
        </div>
      </div>
    </div>
  );
}

function Bg51() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bg">
      <div className="bg-[#4373f7] h-[6px] relative shrink-0 w-[217px]" />
    </div>
  );
}

function Bg52() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#0dd2e1] h-[6px] relative shrink-0 w-[553px]" />
      </div>
    </div>
  );
}

function Bg53() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#ffcb49] h-[6px] relative shrink-0 w-[860px]" />
      </div>
    </div>
  );
}

function Bar37() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[33px] relative size-full">
          <Bg51 />
          <Bg52 />
          <Bg53 />
        </div>
      </div>
    </div>
  );
}

function Bg54() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bg">
      <div className="bg-[#4373f7] h-[6px] relative shrink-0 w-[217px]" />
    </div>
  );
}

function Bg55() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#0dd2e1] h-[6px] relative shrink-0 w-[96px]" />
      </div>
    </div>
  );
}

function Bg56() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#ffcb49] h-[6px] relative shrink-0 w-[321px]" />
      </div>
    </div>
  );
}

function Bar38() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[33px] relative size-full">
          <Bg54 />
          <Bg55 />
          <Bg56 />
        </div>
      </div>
    </div>
  );
}

function Bg57() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bg">
      <div className="bg-[#4373f7] h-[6px] relative shrink-0 w-[363px]" />
    </div>
  );
}

function Bg58() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#0dd2e1] h-[6px] relative shrink-0 w-[402px]" />
      </div>
    </div>
  );
}

function Bg59() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#ffcb49] h-[6px] relative shrink-0 w-[589px]" />
      </div>
    </div>
  );
}

function Bar39() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[33px] relative size-full">
          <Bg57 />
          <Bg58 />
          <Bg59 />
        </div>
      </div>
    </div>
  );
}

function Bg60() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bg">
      <div className="bg-[#4373f7] h-[6px] relative shrink-0 w-[217px]" />
    </div>
  );
}

function Bg61() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#0dd2e1] h-[6px] relative shrink-0 w-[135px]" />
      </div>
    </div>
  );
}

function Bg62() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#ffcb49] h-[6px] relative shrink-0 w-[589px]" />
      </div>
    </div>
  );
}

function Bar40() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[33px] relative size-full">
          <Bg60 />
          <Bg61 />
          <Bg62 />
        </div>
      </div>
    </div>
  );
}

function Bg63() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bg">
      <div className="bg-[#4373f7] h-[6px] relative shrink-0 w-[757px]" />
    </div>
  );
}

function Bg64() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#0dd2e1] h-[6px] relative shrink-0 w-0" />
      </div>
    </div>
  );
}

function Bg65() {
  return (
    <div className="relative shrink-0 w-full" data-name="bg">
      <div className="content-stretch flex items-start pr-[60px] relative size-full">
        <div className="bg-[#ffcb49] h-[6px] relative shrink-0 w-[589px]" />
      </div>
    </div>
  );
}

function Bar41() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[33px] relative size-full">
          <Bg63 />
          <Bg64 />
          <Bg65 />
        </div>
      </div>
    </div>
  );
}

function BarGroup1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="bar group">
      <div className="content-stretch flex flex-col items-start pb-[10px] relative size-full">
        <Bar30 />
        <Bar31 />
        <Bar32 />
        <Bar33 />
        <Bar34 />
        <Bar35 />
        <Bar36 />
        <Bar37 />
        <Bar38 />
        <Bar39 />
        <Bar40 />
        <Bar41 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] inset-[1.89%_0_1.14%_0] items-start">
      <Component29 />
      <BarGroup1 />
    </div>
  );
}

function Component28() {
  return (
    <div className="h-[620px] relative shrink-0 w-full" data-name="折线图">
      <Frame3 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame40 />
      <Component28 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] w-full">楼层统计</p>
      <Frame76 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative">
      <Frame70 />
      <Frame73 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-start flex flex-wrap gap-y-[12px] items-start pb-[12px] pt-[16px] px-[16px] relative size-full">
        <Frame74 />
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
      <div className="relative rounded-[3px] shrink-0" data-name="Tag 标签">
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[3px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[8px] py-[2px] relative size-full">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">90天</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[3px] shrink-0" data-name="Tag 标签">
        <div aria-hidden className="absolute border border-[#1450f5] border-solid inset-0 pointer-events-none rounded-[3px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[8px] py-[2px] relative size-full">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1450f5] text-[12px] whitespace-nowrap">30天</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[3px] shrink-0" data-name="Tag 标签">
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[3px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[8px] py-[2px] relative size-full">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">24小时</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[3px] shrink-0" data-name="Tag 标签">
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[3px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[8px] py-[2px] relative size-full">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">60分钟</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0 w-[170px]" data-name="DatePicker-input 日期选择输入框">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[8px] py-[2px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#8f9195] text-[12px]">
              <p className="leading-[20px]">请选择开始日期</p>
            </div>
            <Spacer className="flex flex-row items-center self-stretch" spacer="8px" />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="calendar">
              <div className="absolute inset-[9.38%_12.5%_12.5%_12.5%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.9375" preserveAspectRatio="none" viewBox="0 0 10.5 10.9375" width="10.5">
                  <path d={svgPaths.pd8bd400} fill="#8F9195" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0 w-[170px]" data-name="DatePicker-input 日期选择输入框">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[8px] py-[2px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#8f9195] text-[12px]">
              <p className="leading-[20px]">请选择结束日期</p>
            </div>
            <Spacer className="flex flex-row items-center self-stretch" spacer="8px" />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="calendar">
              <div className="absolute inset-[9.38%_12.5%_12.5%_12.5%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.9375" preserveAspectRatio="none" viewBox="0 0 10.5 10.9375" width="10.5">
                  <path d={svgPaths.pd8bd400} fill="#8F9195" id="Union" />
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

function Frame71() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center right-[12px] top-[8px]">
      <Frame41 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#fafbfc] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center pb-[9px] pt-[8px] px-[12px] relative size-full">
              <Frame79 />
            </div>
          </div>
        </div>
        <Frame45 />
        <Frame71 />
      </div>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame80() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[256px] top-[288px] w-[1160px]">
      <Frame46 />
      <Frame47 />
      <Frame48 />
    </div>
  );
}

export default function IoT() {
  return (
    <div className="bg-[#f5f7fa] relative size-full" data-name="IoT">
      <Footer className="absolute bottom-[-231px] right-[24px] w-[1160px]" />
      <div className="absolute bg-white h-[56px] left-0 top-0 w-[1440px]" data-name="headerMenu 顶部菜单导航">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative size-full">
            <Frame4 />
            <Frame7 />
          </div>
        </div>
      </div>
      <div className="absolute bg-white bottom-0 left-0 top-[56px] w-[232px]" data-name="Menu 侧边菜单导航">
        <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-between pt-[8px] relative size-full">
            <Content1 />
            <div className="bg-white h-[56px] relative shrink-0 w-full" data-name=".master/item normalMenu/menuOperations">
              <div aria-hidden className="absolute border-[#dfe1e8] border-solid border-t inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[14px] relative size-full">
                  <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="view-list">
                      <div className="absolute inset-[21.88%_12.5%]" data-name="Union">
                        <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 12 9" width="12">
                          <g id="Union">
                            <path d="M12 1H0V0H12V1Z" fill="#141414" />
                            <path d="M12 5H0V4H12V5Z" fill="#141414" />
                            <path d="M0 9H12V8H0V9Z" fill="#141414" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container className="absolute bg-white left-[256px] rounded-[8px] top-[76px] w-[1160px]" />
      <div className="absolute bg-white left-[256px] rounded-tl-[8px] rounded-tr-[8px] top-[224px] w-[1160px]" data-name="Tab">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start relative size-full">
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
              <div aria-hidden className="absolute border-[#1450f5] border-b-3 border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex items-start p-[8px] relative size-full">
                <Content4 />
              </div>
            </div>
            <div className="bg-white relative shrink-0" data-name="item/normalTabs/top/m">
              <div className="content-stretch flex items-start p-[8px] relative size-full">
                <Content5 />
              </div>
            </div>
            <div className="bg-white relative shrink-0" data-name="item/normalTabs/top/m">
              <div className="content-stretch flex items-start p-[8px] relative size-full">
                <Content6 />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      </div>
      <Frame80 />
    </div>
  );
}