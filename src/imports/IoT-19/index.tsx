import svgPaths from "./svg-qjacmxtrin";
import imgRectangle from "./d1ec9a2bcc7821df0090bd0956bba2d84ba868f7.png";
type PaginationProps = {
  className?: string;
  disable?: "false";
  jumper?: "false";
  pagesize?: "false";
  size?: "medium 中";
  theme?: "default 默认";
  totalContent?: "true";
};

function Pagination({ className, disable = "false", jumper = "false", pagesize = "false", size = "medium 中", theme = "default 默认", totalContent = "true" }: PaginationProps) {
  return (
    <div className={className || "h-[64px] relative w-[820px]"}>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] left-[24px] not-italic text-[#676a72] text-[14px] top-1/2 whitespace-nowrap">
        <p className="leading-[22px]">共 101 项数据</p>
      </div>
      <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-end right-[24px] top-1/2" data-name="group">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="page btn">
          <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="chevron-left">
              <div className="absolute inset-[22.12%_34.63%_22.13%_31.75%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="8.91924" preserveAspectRatio="none" viewBox="0 0 5.37886 8.91924" width="5.37886">
                  <path d={svgPaths.p2e389000} fill="#ABADB2" id="Union" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#1450f5] overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[14px] text-center text-white top-1/2 whitespace-nowrap">
              <p className="leading-[22px]">1</p>
            </div>
          </div>
          <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#141414] text-[14px] text-center top-1/2 whitespace-nowrap">
                <p className="leading-[22px]">2</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
          <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#141414] text-[14px] text-center top-1/2 whitespace-nowrap">
                <p className="leading-[22px]">3</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
          <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#141414] text-[14px] text-center top-1/2 whitespace-nowrap">
                <p className="leading-[22px]">4</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
          <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#141414] text-[14px] text-center top-1/2 whitespace-nowrap">
                <p className="leading-[22px]">5</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
          <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="ellipsis">
              <div className="absolute inset-[43.75%_12.5%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 12 2" width="12">
                  <g id="Union">
                    <path d={svgPaths.p3b47dc00} fill="#141414" />
                    <path d={svgPaths.p5486080} fill="#141414" />
                    <path d={svgPaths.p3f82180} fill="#141414" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#141414] text-[14px] text-center top-1/2 whitespace-nowrap">
                <p className="leading-[22px]">11</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
          <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="chevron-right">
              <div className="absolute flex inset-[22.12%_31.75%_22.13%_34.63%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                  <div className="relative size-full" data-name="Union">
                    <svg className="absolute block inset-0 size-full" fill="none" height="8.91924" preserveAspectRatio="none" viewBox="0 0 5.37886 8.91924" width="5.37886">
                      <path d={svgPaths.p2e389000} fill="#141414" id="Union" />
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

function Mouse({ className }: { className?: string }) {
  return (
    <div className={className || "h-[25.552px] relative w-[25px]"} data-name="mouse">
      <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-30 flex-none h-[hypot(38.5132cqw,65.2669cqh)] w-[hypot(61.4868cqw,-34.7331cqh)]">
          <div className="relative size-full">
            <div className="absolute inset-[-10.39%_-11.27%]">
              <svg className="block size-full" fill="none" height="23.2566" preserveAspectRatio="none" viewBox="0 0 21.7497 23.2566" width="21.7497">
                <g filter="url(#filter0_d_0_1235)" id="Polygon 14">
                  <path d={svgPaths.p349fd00} fill="white" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.2566" id="filter0_d_0_1235" width="21.7497" x="-9.80488e-08" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_1235" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_1235" mode="normal" result="shape" />
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
type SpacerProps = {
  className?: string;
  spacer?: "4px";
};

function Spacer({ className, spacer = "4px" }: SpacerProps) {
  return <div className={className || "relative size-[4px]"} />;
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

function HeaderMenu({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white h-[56px] relative w-[1440px]"} data-name="headerMenu 顶部菜单导航">
      <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative size-full">
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
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
            <p className="[word-break:break-word] font-['PingFang_SC:Semibold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#141414] text-[18px] text-center whitespace-nowrap">IOT Essential</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0" data-name=".master/item headerMenu/menuOperations">
              <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="list-rectangle">
                  <div className="absolute flex inset-[12.5%] items-center justify-center" style={{ containerType: "size" }}>
                    <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                      <div className="relative size-full" data-name="Union">
                        <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                          <g id="Union">
                            <path d={svgPaths.p624b00} fill="#1450F5" />
                            <path d={svgPaths.p36a62500} fill="#1450F5" />
                            <path d={svgPaths.p1a0d76f0} fill="#1450F5" />
                            <path d={svgPaths.p311a7ac0} fill="#1450F5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-[#f51414] h-[16px] left-[22px] rounded-[999px] top-0" data-name="Badge 徽标">
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-center px-[4px] relative size-full">
                    <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">2</p>
                  </div>
                </div>
              </div>
              <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
                <div className="flex-none rotate-90">
                  <div className="h-0 relative w-[14px]">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 14 1" width="14">
                        <line id="Line 20" stroke="#DFE1E8" x2="14" y1="0.5" y2="0.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Language2=English">
                  <div className="absolute left-[2px] size-[12px] top-[2px]" data-name="Union">
                    <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                      <path d={svgPaths.p2c6ba200} fill="#1450F5" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="notification">
                  <div className="absolute inset-[14.06%_17.15%]" data-name="Union">
                    <svg className="absolute block inset-0 size-full" fill="none" height="11.5" preserveAspectRatio="none" viewBox="0 0 10.5125 11.5" width="10.5125">
                      <g id="Union">
                        <path clipRule="evenodd" d={svgPaths.p27a9c780} fill="#1450F5" fillRule="evenodd" />
                        <path d={svgPaths.p2ab2df00} fill="#1450F5" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Avatar className="bg-[#d0dcfd] relative rounded-[16px] shrink-0 size-[32px]" />
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

function PrefixContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px overflow-clip relative" data-name="prefix content">
      <div className="relative shrink-0 size-[20px]" data-name="card">
        <div className="absolute inset-[18.75%_6.25%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.5" preserveAspectRatio="none" viewBox="0 0 17.5 12.5" width="17.5">
            <g id="Union">
              <path d={svgPaths.p3c437a30} fill="#141414" />
              <path d={svgPaths.p38607500} fill="#141414" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">物联卡管理</p>
    </div>
  );
}

function ItemNormalMenu1st() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[7px] relative size-full">
          <PrefixContent />
          <Spacer className="flex flex-row items-center self-stretch" />
          <div className="relative shrink-0 size-[16px]" data-name="chevron-up">
            <div className="absolute inset-[31.76%_22.13%_34.62%_22.13%]" data-name="Union">
              <svg className="absolute block inset-0 size-full" fill="none" height="5.37886" preserveAspectRatio="none" viewBox="0 0 8.91924 5.37886" width="8.91924">
                <path d={svgPaths.p2bdcce80} fill="#141414" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrefixContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px overflow-clip relative" data-name="prefix content">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="usergroup">
        <div className="absolute inset-[6.25%_3.13%_10%_6.25%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.751" preserveAspectRatio="none" viewBox="0 0 18.125 16.751" width="18.125">
            <path d={svgPaths.p11290b00} fill="#141414" id="Union" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">权限管理</p>
    </div>
  );
}

function ItemNormalMenu1st1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[7px] relative size-full">
          <PrefixContent1 />
          <Spacer className="flex flex-row items-center self-stretch" />
          <div className="relative shrink-0 size-[16px]" data-name="chevron-up">
            <div className="absolute inset-[31.76%_22.13%_34.62%_22.13%]" data-name="Union">
              <svg className="absolute block inset-0 size-full" fill="none" height="5.37886" preserveAspectRatio="none" viewBox="0 0 8.91924 5.37886" width="8.91924">
                <path d={svgPaths.p2bdcce80} fill="#141414" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrefixContent2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px overflow-clip relative" data-name="prefix content">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="setting">
        <div className="absolute inset-[7.22%_12.11%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="17.1132" preserveAspectRatio="none" viewBox="0 0 15.1554 17.1132" width="15.1554">
            <g id="Union">
              <path clipRule="evenodd" d={svgPaths.p3b5d8600} fill="#141414" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2b6e1c00} fill="#141414" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">系统设置</p>
    </div>
  );
}

function ItemNormalMenu1st2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[7px] relative size-full">
          <PrefixContent2 />
          <Spacer className="flex flex-row items-center self-stretch" />
          <div className="relative shrink-0 size-[16px]" data-name="chevron-up">
            <div className="absolute inset-[31.76%_22.13%_34.62%_22.13%]" data-name="Union">
              <svg className="absolute block inset-0 size-full" fill="none" height="5.37886" preserveAspectRatio="none" viewBox="0 0 8.91924 5.37886" width="8.91924">
                <path d={svgPaths.p2bdcce80} fill="#141414" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
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
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#727272] text-[14px] text-ellipsis whitespace-nowrap">设备总览</p>
            </div>
          </div>
        </div>
        <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st-light">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[7px] relative size-full">
              <div className="relative shrink-0 size-[20px]" data-name="prefixIcon">
                <div className="absolute inset-[12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                    <path clipRule="evenodd" d={svgPaths.p3b76af00} fill="#676A72" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">设备查询</p>
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
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#727272] text-[14px] text-ellipsis whitespace-nowrap">设备注册</p>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="item/normalMenu/1st-light">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
            <ItemNormalMenu1st />
            <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/2nd-light">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[44px] pr-[16px] py-[7px] relative size-full">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">物联卡查询</p>
                </div>
              </div>
            </div>
            <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/2nd-light">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[44px] pr-[16px] py-[7px] relative size-full">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">物联卡统计</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="item/normalMenu/1st-light">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
            <ItemNormalMenu1st1 />
            <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/2nd-light">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[44px] pr-[16px] py-[7px] relative size-full">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">用户管理</p>
                </div>
              </div>
            </div>
            <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/2nd-light">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[44px] pr-[16px] py-[7px] relative size-full">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">角色管理</p>
                </div>
              </div>
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
        <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st-light">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[7px] relative size-full">
              <div className="relative shrink-0 size-[20px]" data-name="prefixIcon">
                <div className="absolute inset-[11.11%_11.11%_12.5%_11.11%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="15.2777" preserveAspectRatio="none" viewBox="0 0 15.5556 15.2777" width="15.5556">
                    <g id="Union">
                      <path d={svgPaths.p98443b0} fill="#676A72" />
                      <path d={svgPaths.p3239d500} fill="#676A72" />
                      <path d={svgPaths.p53904f0} fill="#676A72" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">设备运营监控</p>
            </div>
          </div>
        </div>
        <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st-light">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[7px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="prefixIcon">
                <div className="absolute inset-[9.38%_15.63%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="16.25" preserveAspectRatio="none" viewBox="0 0 13.75 16.25" width="13.75">
                    <path clipRule="evenodd" d={svgPaths.pb1de680} fill="#676A72" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">设备批量操作</p>
            </div>
          </div>
        </div>
        <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st-light">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[7px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="prefixIcon">
                <div className="absolute inset-[12.5%_12.5%_18.75%_18.75%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.75" preserveAspectRatio="none" viewBox="0 0 13.75 13.75" width="13.75">
                    <path clipRule="evenodd" d={svgPaths.pc5545f0} fill="#676A72" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">用户反馈管理</p>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="item/normalMenu/1st-light">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
            <ItemNormalMenu1st2 />
            <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/2nd-light">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[44px] pr-[16px] py-[7px] relative size-full">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">硬件类型管理</p>
                </div>
              </div>
            </div>
            <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/2nd-light">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[44px] pr-[16px] py-[7px] relative size-full">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">软件版本管理</p>
                </div>
              </div>
            </div>
            <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/2nd-light">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[44px] pr-[16px] py-[7px] relative size-full">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">软件更新包管理</p>
                </div>
              </div>
            </div>
            <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/2nd-light">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[44px] pr-[16px] py-[7px] relative size-full">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">Profile管理</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="content">
      <MenuItem />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="[word-break:break-word] font-['PingFang_SC:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">任务列表</p>
    </div>
  );
}

function Title() {
  return (
    <div className="bg-white relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16px] pt-[24px] px-[20px] relative size-full">
          <Frame4 />
          <div className="bg-[#f2f4f7] h-[24px] relative rounded-[4px] shrink-0" data-name="Button 按钮">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
                <div className="overflow-clip relative shrink-0 size-[14px]" data-name="brush-clear">
                  <div className="absolute inset-[6.25%_24.31%_6.25%_12.52%]" data-name="Union">
                    <svg className="absolute block inset-0 size-full" fill="none" height="12.25" preserveAspectRatio="none" viewBox="0 0 8.843 12.25" width="8.843">
                      <path d={svgPaths.p176c9a80} fill="#141414" id="Union" />
                    </svg>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[12px] text-center whitespace-nowrap">
                  <p className="leading-[20px]">清空已完成记录</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[141px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">任务类型</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">日志上传</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">日志上传</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">日志上传</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">日志上传</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[198px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">开始时间</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[198px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">结束时间</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[319px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">任务名称</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalM() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[147px]" data-name="item/content/column/normal/m">
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">任务状态</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1450F5" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1450f5] text-[14px] whitespace-nowrap">进行中</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#F51414" id="Ellipse" r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f51414] text-[14px] whitespace-nowrap">失败</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1450F5" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1450f5] text-[14px] whitespace-nowrap">进行中</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#F51414" id="Ellipse" r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f51414] text-[14px] whitespace-nowrap">失败</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#ABADB2" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#abadb2] text-[14px] whitespace-nowrap">队列中</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#ABADB2" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#abadb2] text-[14px] whitespace-nowrap">队列中</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalM1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[145px]" data-name="item/content/column/normal/m">
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[28px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">操作</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
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

function Frame1() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <ItemContentColumnNormalL />
        <ItemContentColumnNormalL1 />
        <ItemContentColumnNormalL2 />
        <ItemContentColumnNormalL3 />
        <ItemContentColumnNormalM />
        <ItemContentColumnNormalM1 />
      </div>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white relative rounded-bl-[6px] rounded-br-[6px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[20px] py-[2px] relative size-full">
        <Frame1 />
        <Pagination className="h-[64px] relative shrink-0 w-full" />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute left-[256.42px] rounded-[8px] top-[78.5px] w-[1160px]">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Title />
        <Frame7 />
      </div>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="[word-break:break-word] font-['PingFang_SC:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">任务列表</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="bg-white relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16px] pt-[24px] px-[20px] relative size-full">
          <Frame5 />
          <div className="bg-[#f2f4f7] h-[24px] relative rounded-[4px] shrink-0" data-name="Button 按钮">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
                <div className="overflow-clip relative shrink-0 size-[14px]" data-name="brush-clear">
                  <div className="absolute inset-[6.25%_24.31%_6.25%_12.52%]" data-name="Union">
                    <svg className="absolute block inset-0 size-full" fill="none" height="12.25" preserveAspectRatio="none" viewBox="0 0 8.843 12.25" width="8.843">
                      <path d={svgPaths.p176c9a80} fill="#141414" id="Union" />
                    </svg>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[12px] text-center whitespace-nowrap">
                  <p className="leading-[20px]">清空已完成记录</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[141px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">任务类型</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">日志上传</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">日志上传</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">日志上传</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">日志上传</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[198px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">开始时间</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[198px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">结束时间</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[319px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">任务名称</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalM2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[147px]" data-name="item/content/column/normal/m">
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">任务状态</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1450F5" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1450f5] text-[14px] whitespace-nowrap">进行中</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#F51414" id="Ellipse" r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f51414] text-[14px] whitespace-nowrap">失败</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1450F5" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1450f5] text-[14px] whitespace-nowrap">进行中</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#F51414" id="Ellipse" r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f51414] text-[14px] whitespace-nowrap">失败</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#ABADB2" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#abadb2] text-[14px] whitespace-nowrap">队列中</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#ABADB2" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#abadb2] text-[14px] whitespace-nowrap">队列中</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalM3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[145px]" data-name="item/content/column/normal/m">
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[28px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">操作</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
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

function Frame2() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <ItemContentColumnNormalL4 />
        <ItemContentColumnNormalL5 />
        <ItemContentColumnNormalL6 />
        <ItemContentColumnNormalL7 />
        <ItemContentColumnNormalM2 />
        <ItemContentColumnNormalM3 />
      </div>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative rounded-bl-[6px] rounded-br-[6px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[20px] py-[2px] relative size-full">
        <Frame2 />
        <Pagination className="h-[64px] relative shrink-0 w-full" />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute left-[256.42px] rounded-[8px] top-[78.5px] w-[1160px]">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Title1 />
        <Frame8 />
      </div>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="[word-break:break-word] font-['PingFang_SC:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">任务列表</p>
    </div>
  );
}

function Title2() {
  return (
    <div className="bg-white relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16px] pt-[24px] px-[20px] relative size-full">
          <Frame6 />
          <div className="bg-[#f2f4f7] h-[24px] relative rounded-[4px] shrink-0" data-name="Button 按钮">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
                <div className="overflow-clip relative shrink-0 size-[14px]" data-name="brush-clear">
                  <div className="absolute inset-[6.25%_24.31%_6.25%_12.52%]" data-name="Union">
                    <svg className="absolute block inset-0 size-full" fill="none" height="12.25" preserveAspectRatio="none" viewBox="0 0 8.843 12.25" width="8.843">
                      <path d={svgPaths.p176c9a80} fill="#141414" id="Union" />
                    </svg>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[12px] text-center whitespace-nowrap">
                  <p className="leading-[20px]">清空已完成记录</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[126px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">任务类型</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">设备重启</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">更新配置</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">日志上传</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">日志上传</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">日志上传</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">日志上传</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[11px] relative size-full">
            <div className="bg-[#f5f7fa] relative rounded-[3px] shrink-0" data-name="类型标签">
              <div aria-hidden className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[5px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
                    <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 13 10.5" width="13">
                        <path d={svgPaths.p10a0fe40} fill="#333740" id="Union" />
                      </svg>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333740] text-[14px] whitespace-nowrap">系统升级</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[198px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">开始时间</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[198px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">结束时间</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">2025/12/12 00:00:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">任务名称</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">设备30264626 NEXUS 系统升级</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[118px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">任务数量</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">0000</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">0000</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">0000</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalM4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[145px]" data-name="item/content/column/normal/m">
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">任务状态</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1450F5" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1450f5] text-[14px] whitespace-nowrap">进行中 00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">成功 00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#F51414" id="Ellipse" r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f51414] text-[14px] whitespace-nowrap">失败 00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1450F5" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1450f5] text-[14px] whitespace-nowrap">进行中</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#F51414" id="Ellipse" r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f51414] text-[14px] whitespace-nowrap">失败</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#ABADB2" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#abadb2] text-[14px] whitespace-nowrap">队列中</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#ABADB2" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#abadb2] text-[14px] whitespace-nowrap">队列中</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">成功</p>
                </div>
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
    <div className="-translate-y-1/2 absolute bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex items-center justify-center left-[33.87%] px-[7px] py-[2px] right-0 rounded-[4px] top-[calc(50%+11px)]">
      <p className="[word-break:break-word] font-['KONE_Information:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#1450f5] text-[12px] whitespace-nowrap">Hover</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] leading-[22px] min-w-px not-italic relative text-[#141414] text-[14px]">查看任务进度</p>
        </div>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="arrow">
      <div className="h-[6px] relative shrink-0 w-[10px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 10 6" width="10">
          <path d="M10 0H0L5 6L10 0Z" fill="white" id="Vector 3" />
        </svg>
      </div>
    </div>
  );
}

function ItemContentColumnNormalM5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="item/content/column/normal/m">
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[28px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">操作</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="search">
                <div className="absolute inset-[12.5%_14.33%_12.5%_12.5%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4999" preserveAspectRatio="none" viewBox="0 0 13.1705 13.4999" width="13.1705">
                    <path clipRule="evenodd" d={svgPaths.p1021cbf2} fill="#141414" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="more-1">
                <div className="absolute inset-[14.29%_42.86%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.8571" preserveAspectRatio="none" viewBox="0 0 2.57143 12.8571" width="2.57143">
                    <path d={svgPaths.p29f58d00} fill="#ABADB2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute drop-shadow-[0px_4px_5px_rgba(0,0,0,0.1)] left-[-12.42px] top-[25.5px] w-[104px]" data-name="Tooltip 文字提示">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <Container />
          <Arrow />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <ItemContentColumnNormalL8 />
        <ItemContentColumnNormalL9 />
        <ItemContentColumnNormalL10 />
        <ItemContentColumnNormalL11 />
        <ItemContentColumnNormalL12 />
        <ItemContentColumnNormalM4 />
        <div className="absolute h-[38px] left-[938.58px] top-[72.5px] w-[62px]" data-name="Mouse">
          <Mouse className="absolute inset-[0_59.68%_32.76%_0]" />
          <Frame />
        </div>
        <ItemContentColumnNormalM5 />
      </div>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white relative rounded-bl-[6px] rounded-br-[6px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[20px] py-[2px] relative size-full">
        <Frame3 />
        <Pagination className="h-[64px] relative shrink-0 w-full" />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute left-[256.42px] rounded-[8px] top-[78.5px] w-[1160px]">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Title2 />
        <Frame9 />
      </div>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ItemDropdown1st() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="item/dropdown/1st">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[3px] relative size-full">
          <div className="relative shrink-0" data-name="item/content/state">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center relative size-full">
                <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                  <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                    <circle cx="3" cy="3" fill="#F51414" id="Ellipse" r="3" />
                  </svg>
                </div>
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f51414] text-[14px] whitespace-nowrap">失败 00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemDropdown1st1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="item/dropdown/1st">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[3px] relative size-full">
          <div className="relative shrink-0" data-name="item/content/state">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center relative size-full">
                <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                  <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                    <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                  </svg>
                </div>
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">成功 00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemDropdown1st2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="item/dropdown/1st">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[3px] relative size-full">
          <div className="relative shrink-0" data-name="item/content/state">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center relative size-full">
                <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                  <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                    <circle cx="3" cy="3" fill="#1450F5" id="Ellipse " r="3" />
                  </svg>
                </div>
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1450f5] text-[14px] whitespace-nowrap">进行中 00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemDropdown1st3() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="item/dropdown/1st">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[3px] relative size-full">
          <div className="relative shrink-0" data-name="item/content/state">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center relative size-full">
                <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                  <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                    <circle cx="3" cy="3" fill="#ABADB2" id="Ellipse " r="3" />
                  </svg>
                </div>
                <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#abadb2] text-[14px] whitespace-nowrap">队列中 00</p>
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
    <div className="absolute bg-white content-stretch drop-shadow-[0px_4px_5px_rgba(0,0,0,0.1)] flex flex-col gap-[2px] items-start left-[1138px] p-[6px] rounded-[6px] top-[69px] w-[108px]" data-name="状态">
      <div aria-hidden className="absolute border-[#c8cad0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <ItemDropdown1st />
      <ItemDropdown1st1 />
      <ItemDropdown1st2 />
      <ItemDropdown1st3 />
    </div>
  );
}

export default function IoT() {
  return (
    <div className="bg-[#f5f7fa] relative size-full" data-name="IoT">
      <Footer className="absolute bottom-0 right-[24px] w-[1160px]" />
      <HeaderMenu className="absolute bg-white h-[56px] left-0 top-0 w-[1440px]" />
      <div className="absolute bg-white bottom-0 left-0 top-[56px] w-[232px]" data-name="Side_Navigation">
        <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-between pt-[8px] relative size-full">
            <Content />
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
      <Frame10 />
      <Frame12 />
      <Frame11 />
      <Component />
    </div>
  );
}