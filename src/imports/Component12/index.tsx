import img from "./bc0dd9340cdc398d64fc0d77ad0831df457c309f.png";
type ComponentProps = {
  className?: string;
  property1?: "维保经理 - 王志强";
};

function Component({ className, property1 = "维保经理 - 王志强" }: ComponentProps) {
  return (
    <div className={className || "bg-white h-[390px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] w-[220px]"}>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[32px] relative size-full">
          <div className="relative shrink-0 size-[120px]" data-name="头像">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="120" src={img} width="120" />
          </div>
          <p className="[word-break:break-word] font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#212121] text-[20px] text-center whitespace-nowrap">王志强</p>
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#737380] text-[14px] text-center whitespace-nowrap">管理层员工</p>
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[min-content]">进入审批流条件： ①单日单台设备解绑＞10台时，再次解绑则进入审批流 ②批量设备操作，进入审批流</p>
        </div>
      </div>
    </div>
  );
}

export default function Component1() {
  return <Component className="bg-white relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] size-full" />;
}