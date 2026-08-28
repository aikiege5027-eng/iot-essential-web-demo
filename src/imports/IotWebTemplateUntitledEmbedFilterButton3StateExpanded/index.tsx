import svgPaths from "./svg-va7lyorg8l";
import imgRectangle from "./d1ec9a2bcc7821df0090bd0956bba2d84ba868f7.png";
type ItemContentSelectCellNormalProps = {
  className?: string;
  blank?: "false";
  check?: "true";
  expandIcon?: "false";
  fixedrow?: "false";
  radio?: "false";
  size?: "large 大尺寸";
};

function ItemContentSelectCellNormal({ className, blank = "false", check = "true", expandIcon = "false", fixedrow = "false", radio = "false", size = "large 大尺寸" }: ItemContentSelectCellNormalProps) {
  return (
    <div className={className || "bg-white relative size-[54px]"}>
      <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="item/unit/checkbox">
            <div className="absolute bg-white border border-[#c8cad0] border-solid inset-0 rounded-[4px]" data-name="bg" />
          </div>
        </div>
      </div>
    </div>
  );
}
type ItemHeaderSelectCellNormalProps = {
  className?: string;
  blank?: "false";
  check?: "true";
  fixedrow?: "true";
  size?: "medium 中尺寸";
};

function ItemHeaderSelectCellNormal({ className, blank = "false", check = "true", fixedrow = "true", size = "medium 中尺寸" }: ItemHeaderSelectCellNormalProps) {
  return (
    <div className={className || "bg-[#f5f7fa] relative size-[46px]"}>
      <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="item/unit/checkbox">
            <div className="absolute bg-white border border-[#c8cad0] border-solid inset-0 rounded-[4px]" data-name="bg" />
          </div>
        </div>
      </div>
    </div>
  );
}
type ItemSearchBoxProps = {
  className?: string;
  disabled?: "false";
  iconLabel?: "false";
  iconOnly?: "true";
  labelOnly?: "false";
  state?: "normal";
};

function ItemSearchBox({ className, disabled = "false", iconLabel = "false", iconOnly = "true", labelOnly = "false", state = "normal" }: ItemSearchBoxProps) {
  return (
    <div className={className || "h-[24px] relative rounded-[2px]"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="search">
            <div className="absolute inset-[10.94%_14.06%_14.06%_10.94%]" data-name="Union">
              <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                <path d={svgPaths.p396f6980} fill="#727272" id="Union" />
              </svg>
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
        <div className="bg-[#f3f6fe] relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st-light">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[7px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="prefixIcon">
                <div className="absolute inset-[9.38%_15.63%]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="16.25" preserveAspectRatio="none" viewBox="0 0 13.75 16.25" width="13.75">
                    <path clipRule="evenodd" d={svgPaths.pb1de680} fill="#1450F5" fillRule="evenodd" id="Union" />
                  </svg>
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#1450f5] text-[14px] text-ellipsis whitespace-nowrap">设备批量操作</p>
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="[word-break:break-word] font-['PingFang_SC:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">设备批量操作</p>
    </div>
  );
}

function PageTitle() {
  return (
    <div className="bg-white relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full" data-name="Page Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16px] pt-[24px] px-[20px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] leading-[22px] min-w-px not-italic relative text-[#959595] text-[14px]">设备编号/项目编号/项目名称/项目地址</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="bg-white h-[32px] max-w-[400px] relative rounded-[4px] shrink-0 w-[400px]" data-name="Search">
        <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center max-w-[inherit] size-full">
          <div className="content-stretch flex items-center max-w-[inherit] pl-[4px] pr-[8px] py-[4px] relative size-full">
            <ItemSearchBox className="h-full relative rounded-[2px] shrink-0" />
            <Content1 />
          </div>
        </div>
      </div>
      <div className="bg-[#f5f7fa] relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="filter">
            <div className="absolute inset-[12.5%_12.5%_13.88%_12.5%]" data-name="Union">
              <svg className="absolute block inset-0 size-full" fill="none" height="11.779" preserveAspectRatio="none" viewBox="0 0 12 11.779" width="12">
                <path d={svgPaths.p1d949680} fill="#141414" id="Union" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-[#f2f4f7] h-[32px] relative rounded-[4px] shrink-0" data-name="Button 按钮">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center pl-[16px] pr-[8px] py-[5px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[22px]">批量操作</p>
            </div>
            <div className="relative shrink-0" data-name="chevron-down">
              <div className="content-stretch flex flex-col items-start px-[4px] py-[5px] relative size-full">
                <div className="h-[5.379px] relative shrink-0 w-[8.919px]" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" height="5.37886" preserveAspectRatio="none" viewBox="0 0 8.91924 5.37886" width="8.91924">
                    <path d={svgPaths.p1df28700} fill="#141414" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f4f7] h-[32px] relative rounded-[4px] shrink-0" data-name="Button 按钮">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[5px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">
              <p className="leading-[22px]">重置</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1450f5] h-[32px] relative rounded-[4px] shrink-0" data-name="Button 按钮">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[5px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
              <p className="leading-[22px]">查询</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame />
      <Frame8 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="bg-white flex-[1_0_0] min-w-px mr-[-1px] relative rounded-bl-[4px] rounded-tl-[4px]" data-name="Select 选择器">
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[22px] overflow-hidden text-ellipsis">选择公司</p>
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
      <div className="bg-[#f2f4f7] flex-[1_0_0] min-w-px mr-[-1px] relative" data-name="Select 选择器">
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#abadb2] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[22px] overflow-hidden text-ellipsis">选择区域</p>
            </div>
            <div className="relative shrink-0" data-name="chevron-down">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start px-[4px] py-[5px] relative size-full">
                  <div className="h-[5.379px] relative shrink-0 w-[8.919px]" data-name="Union">
                    <svg className="absolute block inset-0 size-full" fill="none" height="5.37886" preserveAspectRatio="none" viewBox="0 0 8.91924 5.37886" width="8.91924">
                      <path d={svgPaths.p1df28700} fill="#ABADB2" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f4f7] flex-[1_0_0] min-w-px mr-[-1px] relative" data-name="Select 选择器">
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#abadb2] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[22px] overflow-hidden text-ellipsis">选择分公司</p>
            </div>
            <div className="relative shrink-0" data-name="chevron-down">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start px-[4px] py-[5px] relative size-full">
                  <div className="h-[5.379px] relative shrink-0 w-[8.919px]" data-name="Union">
                    <svg className="absolute block inset-0 size-full" fill="none" height="5.37886" preserveAspectRatio="none" viewBox="0 0 8.91924 5.37886" width="8.91924">
                      <path d={svgPaths.p1df28700} fill="#ABADB2" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f4f7] flex-[1_0_0] min-w-px mr-[-1px] relative" data-name="Select 选择器">
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#abadb2] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[22px] overflow-hidden text-ellipsis">选择办事处</p>
            </div>
            <div className="relative shrink-0" data-name="chevron-down">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start px-[4px] py-[5px] relative size-full">
                  <div className="h-[5.379px] relative shrink-0 w-[8.919px]" data-name="Union">
                    <svg className="absolute block inset-0 size-full" fill="none" height="5.37886" preserveAspectRatio="none" viewBox="0 0 8.91924 5.37886" width="8.91924">
                      <path d={svgPaths.p1df28700} fill="#ABADB2" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f4f7] flex-[1_0_0] min-w-px mr-[-1px] relative" data-name="Select 选择器">
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#abadb2] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[22px] overflow-hidden text-ellipsis">选择PG</p>
            </div>
            <div className="relative shrink-0" data-name="chevron-down">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start px-[4px] py-[5px] relative size-full">
                  <div className="h-[5.379px] relative shrink-0 w-[8.919px]" data-name="Union">
                    <svg className="absolute block inset-0 size-full" fill="none" height="5.37886" preserveAspectRatio="none" viewBox="0 0 8.91924 5.37886" width="8.91924">
                      <path d={svgPaths.p1df28700} fill="#ABADB2" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f4f7] flex-[1_0_0] min-w-px relative rounded-br-[4px] rounded-tr-[4px]" data-name="Select 选择器">
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#abadb2] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[22px] overflow-hidden text-ellipsis">选择工作组</p>
            </div>
            <div className="relative shrink-0" data-name="chevron-down">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start px-[4px] py-[5px] relative size-full">
                  <div className="h-[5.379px] relative shrink-0 w-[8.919px]" data-name="Union">
                    <svg className="absolute block inset-0 size-full" fill="none" height="5.37886" preserveAspectRatio="none" viewBox="0 0 8.91924 5.37886" width="8.91924">
                      <path d={svgPaths.p1df28700} fill="#ABADB2" id="Union" />
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

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] w-full">数据范围</p>
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="bg-white mr-[-1px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 w-[277.333px]" data-name="Select 选择器">
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[22px] overflow-hidden text-ellipsis">选择设备类型</p>
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
      <div className="bg-[#f2f4f7] mr-[-1px] relative shrink-0 w-[277.333px]" data-name="Select 选择器">
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#abadb2] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[22px] overflow-hidden text-ellipsis">选择硬件类型</p>
            </div>
            <div className="relative shrink-0" data-name="chevron-down">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start px-[4px] py-[5px] relative size-full">
                  <div className="h-[5.379px] relative shrink-0 w-[8.919px]" data-name="Union">
                    <svg className="absolute block inset-0 size-full" fill="none" height="5.37886" preserveAspectRatio="none" viewBox="0 0 8.91924 5.37886" width="8.91924">
                      <path d={svgPaths.p1df28700} fill="#ABADB2" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f4f7] relative rounded-br-[4px] rounded-tr-[4px] shrink-0 w-[277.333px]" data-name="Select 选择器">
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#abadb2] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[22px] overflow-hidden text-ellipsis">选择软件版本</p>
            </div>
            <div className="relative shrink-0" data-name="chevron-down">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start px-[4px] py-[5px] relative size-full">
                  <div className="h-[5.379px] relative shrink-0 w-[8.919px]" data-name="Union">
                    <svg className="absolute block inset-0 size-full" fill="none" height="5.37886" preserveAspectRatio="none" viewBox="0 0 8.91924 5.37886" width="8.91924">
                      <path d={svgPaths.p1df28700} fill="#ABADB2" id="Union" />
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

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">设备筛选</p>
      <Frame5 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center pb-[8px] relative shrink-0 w-full" data-name="label">
      <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">在线状态</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Frame11 />
      <div className="max-w-[400px] relative shrink-0 w-[238px]" data-name="item/form/top">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] pb-[24px] relative size-full">
          <Label />
          <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Select 选择器">
            <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative size-full">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">
                  <p className="leading-[22px] overflow-hidden text-ellipsis">请选择内容</p>
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
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[6px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[8px] px-[16px] relative size-full">
        <Frame9 />
        <Frame10 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame6 />
    </div>
  );
}

function ItemContentColumnHeaderNormalL() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[54px]" data-name="item/content/column header/normal/l">
      <ItemHeaderSelectCellNormal className="bg-[#f5f7fa] h-[46px] relative shrink-0 w-full" />
      <ItemContentSelectCellNormal className="bg-white h-[54px] relative shrink-0 w-full" />
      <ItemContentSelectCellNormal className="bg-white h-[54px] relative shrink-0 w-full" />
      <ItemContentSelectCellNormal className="bg-white h-[54px] relative shrink-0 w-full" />
      <ItemContentSelectCellNormal className="bg-white h-[54px] relative shrink-0 w-full" />
      <ItemContentSelectCellNormal className="bg-white h-[54px] relative shrink-0 w-full" />
      <ItemContentSelectCellNormal className="bg-white h-[54px] relative shrink-0 w-full" />
      <ItemContentSelectCellNormal className="bg-white h-[54px] relative shrink-0 w-full" />
      <ItemContentSelectCellNormal className="bg-white h-[54px] relative shrink-0 w-full" />
      <ItemContentSelectCellNormal className="bg-white h-[54px] relative shrink-0 w-full" />
      <ItemContentSelectCellNormal className="bg-white h-[54px] relative shrink-0 w-full" />
      <ItemContentSelectCellNormal className="bg-white h-[54px] relative shrink-0 w-full" />
      <ItemContentSelectCellNormal className="bg-white h-[54px] relative shrink-0 w-full" />
    </div>
  );
}

function ItemContentColumnNormalL() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">设备类型</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KONE Connection 320</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KONE Connection 320</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KONE Connection 320</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KONE Connection 320</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KONE Connection 320</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KONE Connection 320</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KONE Connection 320</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KONE Connection 320</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KONE Connection 320</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KONE Connection 320</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KONE Connection 320</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KONE Connection 320</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[135px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">连接状态</p>
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
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">在线</p>
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
                      <circle cx="3" cy="3" fill="#F98600" id="Ellipse" r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f98600] text-[14px] whitespace-nowrap">断连</p>
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
                      <circle cx="3" cy="3" fill="#F98600" id="Ellipse" r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f98600] text-[14px] whitespace-nowrap">断连</p>
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
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f51414] text-[14px] whitespace-nowrap">离线</p>
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
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">在线</p>
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
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">在线</p>
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
                      <circle cx="3" cy="3" fill="#F98600" id="Ellipse" r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f98600] text-[14px] whitespace-nowrap">断连</p>
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
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">在线</p>
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
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f51414] text-[14px] whitespace-nowrap">离线</p>
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
                      <circle cx="3" cy="3" fill="#F98600" id="Ellipse" r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f98600] text-[14px] whitespace-nowrap">断连</p>
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
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">在线</p>
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
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f51414] text-[14px] whitespace-nowrap">离线</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[349px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">序列号</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KM52152006G02.100ALZ244700051</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KM52152006G02.100ALZ244700051</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KM52152006G02.100ALZ244700051</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KM52152006G02.100ALZ244700051</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KM52152006G02.100ALZ244700051</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KM52152006G02.100ALZ244700051</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KM52152006G02.100ALZ244700051</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KM52152006G02.100ALZ244700051</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KM52152006G02.100ALZ244700051</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KM52152006G02.100ALZ244700051</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KM52152006G02.100ALZ244700051</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">KM52152006G02.100ALZ244700051</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[148px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">软件版本</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1.5.0d</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1.5.0d</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1.5.0d</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1.5.0d</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1.5.0d</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1.5.0d</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1.5.0d</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1.5.0d</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1.5.0d</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1.5.0d</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1.5.0d</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">1.5.0d</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[173px]" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">设备编号</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">30358715</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">30358715</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">30358715</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">30358715</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">30358715</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">30358715</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">30358715</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">30358715</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">30358715</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">30358715</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">30358715</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">30358715</p>
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
        <ItemContentColumnHeaderNormalL />
        <ItemContentColumnNormalL />
        <ItemContentColumnNormalL1 />
        <ItemContentColumnNormalL2 />
        <ItemContentColumnNormalL3 />
        <ItemContentColumnNormalL4 />
      </div>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white relative rounded-bl-[6px] rounded-br-[6px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[20px] pt-[2px] px-[20px] relative size-full">
        <Frame7 />
        <DataTableCard />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute left-[256.42px] right-[23.58px] rounded-[8px] top-[78.5px]" data-name="Main Content">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <PageTitle />
        <Frame2 />
      </div>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function IotWebTemplateUntitledEmbedFilterButton3StateExpanded() {
  return (
    <div className="bg-[#f5f7fa] relative size-full" data-name="IOT-Web-Template / Untitled / Embed filter / Button=3 / State=Expanded">
      <Footer className="absolute bottom-0 right-[24px] w-[1160px]" />
      <HeaderMenu className="absolute bg-white h-[56px] left-0 right-0 top-0" />
      <div className="absolute bg-white bottom-0 left-0 top-[56px] w-[232px]" data-name="Side Navigation">
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