import svgPaths from "./svg-x5ue2eqdut";
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
type InputProps = {
  className?: string;
  clearable?: "off";
  disabled?: "off";
  prefixIcon?: "off";
  size?: "medium 中尺寸";
  state?: "normal 默认";
  suffixIcon?: "off";
  text?: string;
  tips?: "off";
};

function Input({ className, clearable = "off", disabled = "off", prefixIcon = "off", size = "medium 中尺寸", state = "normal 默认", suffixIcon = "off", text = "请输入内容", tips = "off" }: InputProps) {
  return (
    <div className={className || "bg-white relative rounded-[4px] w-[240px]"}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[8px] py-[5px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[22px] overflow-hidden text-ellipsis">{text}</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}
type ItemFormTopProps = {
  className?: string;
  help?: "false";
  required?: "false";
  statusIcon?: "false";
  tooltips?: "false";
  type?: "input 输入" | "select 选择器";
};

function ItemFormTop({ className, help = "false", required = "false", statusIcon = "false", tooltips = "false", type = "input 输入" }: ItemFormTopProps) {
  const isSelectAndFalseAndFalseAndFalseAndFalse = type === "select 选择器" && required === "false" && help === "false" && statusIcon === "false" && tooltips === "false";
  return (
    <div className={className || `relative ${isSelectAndFalseAndFalseAndFalseAndFalse ? "w-[399.999px]" : "w-[400px]"}`}>
      <div className="content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <div className="content-stretch flex items-center pb-[8px] relative shrink-0 w-full" data-name="label">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] text-right whitespace-nowrap">Label</p>
        </div>
        {type === "input 输入" && required === "false" && help === "false" && statusIcon === "false" && tooltips === "false" && <Input className="bg-white relative rounded-[4px] shrink-0 w-full" />}
        {isSelectAndFalseAndFalseAndFalseAndFalse && (
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
        )}
      </div>
    </div>
  );
}

function Form({ className }: { className?: string }) {
  return (
    <div className={className || "relative w-[1120px]"} data-name="Form 表单">
      <div className="content-stretch flex gap-[284px] items-start relative size-full">
        <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-start min-w-px relative" data-name="form">
          <ItemFormTop className="flex-[1_0_0] max-w-[400px] min-w-px relative" />
          <ItemFormTop className="flex-[1_0_0] max-w-[400px] min-w-px relative" />
        </div>
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
          <div className="content-stretch flex gap-[8px] items-start pt-[30px] relative shrink-0" data-name="controls">
            <div className="bg-[#f2f4f7] h-[32px] relative rounded-[4px] shrink-0" data-name="Button 按钮">
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
type SideNavigationProps = {
  className?: string;
  property1?: "CN";
  state?: "expand";
};

function SideNavigation({ className, property1 = "CN", state = "expand" }: SideNavigationProps) {
  return (
    <div className={className || "bg-white h-[1084px] relative w-[232px]"}>
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between pt-[8px] relative size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="content">
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
                    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center px-[16px] py-[7px] relative size-full">
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
                    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center px-[16px] py-[7px] relative size-full">
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
                    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center px-[16px] py-[7px] relative size-full">
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
                    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/1st">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center px-[16px] py-[7px] relative size-full">
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
                    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="item/normalMenu/2nd-light">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pl-[44px] pr-[16px] py-[7px] relative size-full">
                          <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#676a72] text-[14px] text-ellipsis whitespace-nowrap">规则配置</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
type HeaderMenuProps = {
  className?: string;
  badge?: boolean;
  badge1?: boolean;
  propValue?: boolean;
};

function HeaderMenu({ className, badge = false, badge1 = false, propValue = false }: HeaderMenuProps) {
  return (
    <div className={className || "bg-white h-[56px] relative w-[1440px]"} data-name="headerMenu 顶部菜单导航">
      <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative size-full">
          <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
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
            {propValue && (
              <div className="flex h-[37px] items-center justify-center relative shrink-0 w-0">
                <div className="flex-none rotate-90">
                  <div className="h-0 relative w-[37px]" data-name="Vertical divider">
                    <svg className="absolute block inset-0 size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 37 1" width="37">
                      <line id="Vertical divider" stroke="#E7E7E7" x2="37" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
            {propValue && (
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
            )}
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

function Frame7() {
  return (
    <div className="content-stretch flex gap-[11px] items-end relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['PingFang_SC:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#141414] text-[20px] whitespace-nowrap">任务进度视图</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="bg-[#4373f7] h-[14px] relative rounded-[1px] shrink-0 w-[4px]" />
        <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">子任务状态</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f5f7fa] flex-[1_0_0] h-[62px] min-w-px relative rounded-[6px]">
      <div className="relative size-full" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f5f7fa] flex-[1_0_0] h-[62px] min-w-px relative rounded-[6px]">
      <div className="relative size-full" />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#f5f7fa] flex-[1_0_0] h-[62px] min-w-px relative rounded-[6px]">
      <div className="relative size-full" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f5f7fa] flex-[1_0_0] h-[62px] min-w-px relative rounded-[6px]">
      <div className="relative size-full" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f5f7fa] flex-[1_0_0] h-[62px] min-w-px relative rounded-[6px]">
      <div className="relative size-full" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f5f7fa] flex-[1_0_0] h-[62px] min-w-px relative rounded-[6px]">
      <div className="relative size-full" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[1136px]">
      <Frame1 />
      <Frame3 />
      <Frame />
      <Frame2 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white h-[86px] relative shrink-0 w-full">
      <div className="content-start flex flex-wrap gap-y-[12px] items-start p-[12px] relative size-full">
        <Frame6 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#fafbfc] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center pb-[9px] pt-[8px] px-[12px] relative size-full">
              <Frame14 />
            </div>
          </div>
        </div>
        <Frame8 />
      </div>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="bg-[#4373f7] h-[14px] relative rounded-[1px] shrink-0 w-[4px]" />
        <p className="[word-break:break-word] font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">子任务列表</p>
      </div>
    </div>
  );
}

function ItemContentColumnNormalM() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[125px]" data-name="item/content/column/normal/m">
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">状态</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">验证成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">验证成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">验证成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">验证成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">验证成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">验证成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">验证成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">验证成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">验证成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">验证成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
            <div className="relative shrink-0" data-name="item/content/state">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                      <circle cx="3" cy="3" fill="#1ED273" id="Ellipse " r="3" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1ed273] text-[14px] whitespace-nowrap">验证成功</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="table">
      <div className="flex-[1_0_0] min-w-px relative" data-name="item/content/column/normal/m">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">列名</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="item/content/column/normal/m">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">列名</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="item/content/column/normal/m">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">列名</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="item/content/column/normal/m">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">列名</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
            <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">表内容</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ItemContentColumnNormalM />
    </div>
  );
}

function TableColumn() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Table 表格(column 列模式)">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Table />
      </div>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Form className="relative shrink-0 w-full" />
        <TableColumn />
        <Pagination className="h-[64px] relative shrink-0 w-full" />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[1160px]">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#fafbfc] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center pb-[9px] pt-[8px] px-[12px] relative size-full">
              <Frame15 />
            </div>
          </div>
        </div>
        <Frame9 />
      </div>
      <div aria-hidden className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame10 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[256px] top-[80px] w-[1160px]">
      <Frame7 />
      <Frame12 />
    </div>
  );
}

export default function IoT() {
  return (
    <div className="bg-[#f5f7fa] relative size-full" data-name="IoT">
      <Footer className="absolute bottom-[18px] right-[24px] w-[1160px]" />
      <HeaderMenu className="absolute bg-white h-[56px] left-0 top-0 w-[1440px]" propValue />
      <SideNavigation className="absolute bg-white bottom-0 left-0 top-[56px] w-[232px]" />
      <Frame13 />
    </div>
  );
}