export default function Dropdown() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_5px_rgba(0,0,0,0.1)] relative rounded-[6px] size-full" data-name="dropdown 下拉菜单">
      <div aria-hidden className="absolute border-[#c8cad0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start p-[6px] relative size-full">
        <div className="bg-[#f1f1f1] relative rounded-[4px] shrink-0 w-full" data-name="item/dropdown/1st">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[8px] py-[3px] relative size-full">
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">Hover悬浮</p>
            </div>
          </div>
        </div>
        <button className="bg-[#dfe1e8] cursor-pointer relative rounded-[4px] shrink-0 w-full" data-name="item/dropdown/1st">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[8px] py-[3px] relative size-full">
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis text-left whitespace-nowrap">active点击</p>
            </div>
          </div>
        </button>
        <div className="relative rounded-[4px] shrink-0 w-full" data-name="item/dropdown/1st">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[8px] py-[3px] relative size-full">
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">Default默认</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}