import img from "./bc0dd9340cdc398d64fc0d77ad0831df457c309f.png";

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip p-[32px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] size-full" data-name="维保经理 - 王志强">
      <div className="relative shrink-0 size-[120px]" data-name="头像">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="120" src={img} width="120" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#212121] text-[20px] text-center whitespace-nowrap">王志强</p>
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#737380] text-[14px] text-center whitespace-nowrap">维保经理</p>
    </div>
  );
}