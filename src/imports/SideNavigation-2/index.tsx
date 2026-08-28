import svgPaths from "./svg-9ivxva3ssw";

function MenuItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="menu item 菜单选项">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[8px] relative size-full">
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

export default function SideNavigation() {
  return (
    <div className="bg-white relative size-full" data-name="Side_Navigation">
      <div className="flex flex-col justify-center size-full">
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
  );
}