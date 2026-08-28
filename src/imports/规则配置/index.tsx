import svgPaths from "./svg-rnnbuwzt9g";
import imgRectangle from "./d1ec9a2bcc7821df0090bd0956bba2d84ba868f7.png";
type ItemColumnDiminishingMProps = {
  className?: string;
  disabled?: "false";
  state?: "normal 默认";
};

function ItemColumnDiminishingM({ className, disabled = "false", state = "normal 默认" }: ItemColumnDiminishingMProps) {
  return (
    <div className={className || "bg-[#f2f4f7] h-[14px] relative w-[28px]"}>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[9px] py-[4px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
            <div className="absolute inset-0 overflow-clip" data-name="chevron-down">
              <div className="absolute inset-[33.13%_20.11%_32.1%_17.39%]" data-name="chevron-right">
                <svg className="absolute block inset-0 size-full" fill="none" height="5.56346" preserveAspectRatio="none" viewBox="0 0 10 5.56346" width="10">
                  <path clipRule="evenodd" d={svgPaths.p11476100} fill="#141414" fillRule="evenodd" id="chevron-right" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type ItemColumnIncreasingMProps = {
  className?: string;
  disabled?: "false";
  state?: "normal 默认";
};

function ItemColumnIncreasingM({ className, disabled = "false", state = "normal 默认" }: ItemColumnIncreasingMProps) {
  return (
    <div className={className || "bg-[#f2f4f7] h-[14px] relative w-[28px]"}>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[9px] py-[4px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="chevron-up">
            <div className="absolute inset-0 overflow-clip" data-name="chevron-up">
              <div className="absolute inset-[32.61%_17.39%_32.61%_20.11%]" data-name="chevron-left">
                <svg className="absolute block inset-0 size-full" fill="none" height="5.56346" preserveAspectRatio="none" viewBox="0 0 10 5.56346" width="10">
                  <path clipRule="evenodd" d={svgPaths.p3d4ce700} fill="#141414" fillRule="evenodd" id="chevron-left" />
                </svg>
              </div>
            </div>
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
type HeaderMenuProps = {
  className?: string;
  badge?: boolean;
  badge1?: boolean;
};

function HeaderMenu({ className, badge = false, badge1 = false }: HeaderMenuProps) {
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
              {badge && (
                <div className="absolute bg-[#f51414] left-[22px] rounded-[999px] size-[16px] top-0" data-name="Badge 徽标">
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-center justify-center px-[4px] relative size-full">
                      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">2</p>
                    </div>
                  </div>
                </div>
              )}
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
              {badge1 && (
                <div className="absolute bg-[#f51414] left-[104px] rounded-[999px] size-[16px] top-0" data-name="Badge 徽标">
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-center justify-center px-[4px] relative size-full">
                      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">2</p>
                    </div>
                  </div>
                </div>
              )}
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
      <div className="relative shrink-0 size-[20px]" data-name="Large screen">
        <div className="absolute inset-[11.11%_11.11%_12.5%_11.11%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="15.2777" preserveAspectRatio="none" viewBox="0 0 15.5556 15.2777" width="15.5556">
            <g id="Union">
              <path d={svgPaths.p98443b0} fill="#141414" />
              <path d={svgPaths.p3239d500} fill="#141414" />
              <path d={svgPaths.p53904f0} fill="#141414" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">运维管理</p>
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

function PrefixContent3() {
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">系统配置</p>
    </div>
  );
}

function ItemNormalMenu1st3() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[7px] relative size-full">
          <PrefixContent3 />
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
                  <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">设备批量操作</p>
                </div>
              </div>
            </div>
            <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/2nd-light">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[44px] pr-[16px] py-[7px] relative size-full">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">设备运维监控</p>
                </div>
              </div>
            </div>
            <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/2nd-light">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[44px] pr-[16px] py-[7px] relative size-full">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">平台操作日志</p>
                </div>
              </div>
            </div>
            <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/2nd-light">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[44px] pr-[16px] py-[7px] relative size-full">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">用户反馈管理</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="item/normalMenu/1st-light">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
            <ItemNormalMenu1st2 />
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
        <div className="relative shrink-0 w-full" data-name="item/normalMenu/1st-light">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
            <ItemNormalMenu1st3 />
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
            <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/2nd-light">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[44px] pr-[16px] py-[7px] relative size-full">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">Fault信息管理</p>
                </div>
              </div>
            </div>
            <div className="bg-[#f3f6fe] relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/2nd-light">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[44px] pr-[16px] py-[7px] relative size-full">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#1450f5] text-[14px] text-ellipsis whitespace-nowrap">规则配置</p>
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

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="[word-break:break-word] font-['PingFang_SC:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">规则配置</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white content-stretch flex items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0" data-name="content">
      <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1450f5] text-[14px] whitespace-nowrap">设备批量操作设置</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-white content-stretch flex items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0" data-name="content">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#676a72] text-[14px] whitespace-nowrap">单设备解绑操作审批设置</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">批量设备操作将提交至所选角色审批。</p>
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

function Label() {
  return (
    <div className="content-stretch flex gap-[2px] items-center pb-[8px] relative shrink-0 w-full" data-name="label">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] text-right whitespace-nowrap">审批角色</p>
      <div className="relative shrink-0 size-[16px]" data-name="help-circle">
        <div className="absolute inset-[6.25%_6.29%_6.25%_6.21%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
            <g id="Union">
              <path d={svgPaths.p313397f0} fill="#8F9195" />
              <path d={svgPaths.p3c610f80} fill="#8F9195" />
              <path d={svgPaths.p375ffc00} fill="#8F9195" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f51414] text-[14px] text-right whitespace-nowrap">*</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center pb-[8px] relative shrink-0 w-full" data-name="label">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] text-right whitespace-nowrap">单次调度数量</p>
      <div className="relative shrink-0 size-[16px]" data-name="help-circle">
        <div className="absolute inset-[6.25%_6.29%_6.25%_6.21%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
            <g id="Union">
              <path d={svgPaths.p313397f0} fill="#8F9195" />
              <path d={svgPaths.p3c610f80} fill="#8F9195" />
              <path d={svgPaths.p375ffc00} fill="#8F9195" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f51414] text-[14px] text-right whitespace-nowrap">*</p>
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0" data-name="controls">
      <ItemColumnIncreasingM className="bg-[#f2f4f7] h-[14px] relative shrink-0 w-[28px]" />
      <ItemColumnDiminishingM className="bg-[#f2f4f7] h-[14px] relative shrink-0 w-[28px]" />
    </div>
  );
}

function InputAddon() {
  return (
    <div className="bg-[#f2f4f7] relative rounded-br-[3px] rounded-tr-[3px] shrink-0 z-[1]" data-name="input-addon">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[8px] py-[5px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[22px]">台</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#c8cad0] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[3px] rounded-tr-[3px]" />
    </div>
  );
}

function AddonInput() {
  return (
    <div className="content-stretch flex isolate items-start relative shrink-0 w-full" data-name="addonInput 标签输入框">
      <div className="bg-white flex-[1_0_0] h-[32px] min-w-px relative rounded-bl-[4px] rounded-tl-[4px] z-[2]" data-name="InputNumber数字输入框">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[8px] py-px relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">200</p>
            <Controls />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#1450f5] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px] shadow-[0px_0px_0px_2px_#d0dcfd]" />
      </div>
      <InputAddon />
    </div>
  );
}

function ItemFormTop() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="item/form/top">
      <Label1 />
      <AddonInput />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center pb-[8px] relative shrink-0 w-full" data-name="label">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] text-right whitespace-nowrap">单次调度完成率指标</p>
      <div className="relative shrink-0 size-[16px]" data-name="help-circle">
        <div className="absolute inset-[6.25%_6.29%_6.25%_6.21%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
            <g id="Union">
              <path d={svgPaths.p313397f0} fill="#8F9195" />
              <path d={svgPaths.p3c610f80} fill="#8F9195" />
              <path d={svgPaths.p375ffc00} fill="#8F9195" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f51414] text-[14px] text-right whitespace-nowrap">*</p>
    </div>
  );
}

function InputAddon1() {
  return (
    <div className="bg-[#f2f4f7] relative rounded-br-[3px] rounded-tr-[3px] shrink-0 z-[1]" data-name="input-addon">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[8px] py-[5px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[22px]">%</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#c8cad0] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[3px] rounded-tr-[3px]" />
    </div>
  );
}

function AddonInput1() {
  return (
    <div className="content-stretch flex isolate items-start relative shrink-0 w-full" data-name="addonInput 标签输入框">
      <div className="bg-white flex-[1_0_0] h-[32px] min-w-px relative rounded-bl-[4px] rounded-tl-[4px] z-[2]" data-name="InputNumber数字输入框">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[8px] py-[5px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">95</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      </div>
      <InputAddon1 />
    </div>
  );
}

function ItemFormTop1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="item/form/top">
      <Label2 />
      <AddonInput1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[440px]">
      <div className="relative shrink-0 w-full" data-name="item/form/top">
        <div className="content-stretch flex flex-col items-start pb-[24px] relative size-full">
          <Label />
          <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Select 选择器">
            <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative size-full">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">
                  <p className="leading-[22px] overflow-hidden text-ellipsis">系统管理员</p>
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
      </div>
      <ItemFormTop />
      <ItemFormTop1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[56px] items-start justify-center pt-[24px] relative shrink-0 w-[440px]" data-name="Container">
      <div className="bg-[#1450f5] h-[32px] relative rounded-[4px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[5px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[22px]">保存配置</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">批量任务中单次执行的子任务数量，范围 100–1000，步长 100。</p>
        </div>
      </div>
    </div>
  );
}

function Arrow1() {
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

function Container3() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">单次调度验证结果视为通过的完成率标准，范围 0–100%。</p>
        </div>
      </div>
    </div>
  );
}

function Arrow2() {
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

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[26px] px-[16px] relative size-full">
          <Frame2 />
          <Container1 />
          <div className="absolute drop-shadow-[0px_4px_5px_rgba(0,0,0,0.1)] left-[222.58px] top-[50.5px]" data-name="维保合同无效（已编排）">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <Container2 />
              <Arrow1 />
            </div>
          </div>
          <div className="absolute drop-shadow-[0px_4px_5px_rgba(0,0,0,0.1)] left-[282.58px] top-[136.5px]" data-name="维保合同无效（已编排）">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <Container3 />
              <Arrow2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-bl-[6px] rounded-br-[6px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[2px] relative size-full">
        <div className="bg-white relative shrink-0 w-full" data-name="normalTabs 选项卡-默认主题">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-start relative size-full">
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
            </div>
          </div>
          <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="absolute drop-shadow-[0px_4px_5px_rgba(0,0,0,0.1)] left-[298.58px] top-[37.5px]" data-name="维保合同无效（已编排）">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <Container />
            <Arrow />
          </div>
        </div>
        <ContainerMargin />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute left-[256.42px] rounded-[8px] top-[78.5px] w-[1160px]" data-name="Main Content">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-white h-[68px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full" data-name="Title">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center pb-[16px] pt-[24px] px-[20px] relative size-full">
              <Frame />
            </div>
          </div>
        </div>
        <Frame1 />
      </div>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f5f7fa] relative size-full" data-name="规则配置">
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
      <MainContent />
    </div>
  );
}