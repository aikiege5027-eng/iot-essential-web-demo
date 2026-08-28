import svgPaths from "./svg-fuhbm0xw0w";
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

function ItemContentCellNormal({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white relative w-[145px]"} data-name="item/content/cell/normal">
      <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[11px] relative size-full">
          <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="edit">
              <div className="absolute inset-[12.5%_12.5%_18.75%_18.75%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="12.375" preserveAspectRatio="none" viewBox="0 0 12.375 12.375" width="12.375">
                  <path clipRule="evenodd" d={svgPaths.p98da280} fill="#1450F5" fillRule="evenodd" id="Union" />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="delete">
              <div className="absolute inset-[6.25%_12.5%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="15.75" preserveAspectRatio="none" viewBox="0 0 13.5 15.75" width="13.5">
                  <g id="Union">
                    <path d={svgPaths.p1acf9880} fill="#1450F5" />
                    <path d={svgPaths.p29e2a00} fill="#1450F5" />
                    <path d={svgPaths.p452b80} fill="#1450F5" />
                  </g>
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
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">表头</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">表头</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
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
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">表头</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalL3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="item/content/column/normal/l">
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">表头</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">表内容</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContentColumnNormalM() {
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
      <ItemContentCellNormal className="bg-white relative shrink-0 w-full" />
      <ItemContentCellNormal className="bg-white relative shrink-0 w-full" />
      <ItemContentCellNormal className="bg-white relative shrink-0 w-full" />
      <ItemContentCellNormal className="bg-white relative shrink-0 w-full" />
      <ItemContentCellNormal className="bg-white relative shrink-0 w-full" />
      <ItemContentCellNormal className="bg-white relative shrink-0 w-full" />
      <ItemContentCellNormal className="bg-white relative shrink-0 w-full" />
      <ItemContentCellNormal className="bg-white relative shrink-0 w-full" />
      <ItemContentCellNormal className="bg-white relative shrink-0 w-full" />
      <ItemContentCellNormal className="bg-white relative shrink-0 w-full" />
      <ItemContentCellNormal className="bg-white relative shrink-0 w-full" />
      <ItemContentCellNormal className="bg-white relative shrink-0 w-full" />
    </div>
  );
}

function ItemContentColumnNormalM1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-name="item/content/column/normal/m">
      <div className="bg-[#f5f7fa] relative shrink-0 w-full" data-name="item/header/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">​</p>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[11px] relative size-full">
            <div className="overflow-clip relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="chevron-right">
                <div className="absolute flex inset-[19.27%_33.98%_18.23%_31.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="relative size-full" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 5.56346 10" width="5.56346">
                        <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="#8F9195" fillRule="evenodd" id="Union" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[11px] relative size-full">
            <div className="overflow-clip relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="chevron-right">
                <div className="absolute flex inset-[19.27%_33.98%_18.23%_31.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="relative size-full" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 5.56346 10" width="5.56346">
                        <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="#8F9195" fillRule="evenodd" id="Union" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[11px] relative size-full">
            <div className="overflow-clip relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="chevron-right">
                <div className="absolute flex inset-[19.27%_33.98%_18.23%_31.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="relative size-full" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 5.56346 10" width="5.56346">
                        <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="#8F9195" fillRule="evenodd" id="Union" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[11px] relative size-full">
            <div className="overflow-clip relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="chevron-right">
                <div className="absolute flex inset-[19.27%_33.98%_18.23%_31.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="relative size-full" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 5.56346 10" width="5.56346">
                        <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="#8F9195" fillRule="evenodd" id="Union" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[11px] relative size-full">
            <div className="overflow-clip relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="chevron-right">
                <div className="absolute flex inset-[19.27%_33.98%_18.23%_31.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="relative size-full" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 5.56346 10" width="5.56346">
                        <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="#8F9195" fillRule="evenodd" id="Union" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[11px] relative size-full">
            <div className="overflow-clip relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="chevron-right">
                <div className="absolute flex inset-[19.27%_33.98%_18.23%_31.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="relative size-full" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 5.56346 10" width="5.56346">
                        <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="#8F9195" fillRule="evenodd" id="Union" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[11px] relative size-full">
            <div className="overflow-clip relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="chevron-right">
                <div className="absolute flex inset-[19.27%_33.98%_18.23%_31.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="relative size-full" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 5.56346 10" width="5.56346">
                        <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="#8F9195" fillRule="evenodd" id="Union" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[11px] relative size-full">
            <div className="overflow-clip relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="chevron-right">
                <div className="absolute flex inset-[19.27%_33.98%_18.23%_31.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="relative size-full" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 5.56346 10" width="5.56346">
                        <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="#8F9195" fillRule="evenodd" id="Union" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[11px] relative size-full">
            <div className="overflow-clip relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="chevron-right">
                <div className="absolute flex inset-[19.27%_33.98%_18.23%_31.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="relative size-full" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 5.56346 10" width="5.56346">
                        <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="#8F9195" fillRule="evenodd" id="Union" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[11px] relative size-full">
            <div className="overflow-clip relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="chevron-right">
                <div className="absolute flex inset-[19.27%_33.98%_18.23%_31.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="relative size-full" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 5.56346 10" width="5.56346">
                        <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="#8F9195" fillRule="evenodd" id="Union" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[11px] relative size-full">
            <div className="overflow-clip relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="chevron-right">
                <div className="absolute flex inset-[19.27%_33.98%_18.23%_31.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="relative size-full" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 5.56346 10" width="5.56346">
                        <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="#8F9195" fillRule="evenodd" id="Union" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="item/content/cell/normal">
        <div aria-hidden className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[11px] relative size-full">
            <div className="overflow-clip relative rounded-[128px] shrink-0 size-[32px]" data-name="Button 按钮">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="chevron-right">
                <div className="absolute flex inset-[19.27%_33.98%_18.23%_31.25%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="relative size-full" data-name="Union">
                      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 5.56346 10" width="5.56346">
                        <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="#8F9195" fillRule="evenodd" id="Union" />
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

function Frame() {
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

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame />
      <Pagination className="h-[64px] relative shrink-0 w-full" />
    </div>
  );
}