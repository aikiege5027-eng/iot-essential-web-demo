import img from "./829c4636d017667935d957fcbe75e56486d3423a.png";
type ComponentProps = {
  className?: string;
  property1?: "系统管理员 - 张明远";
};

function Component({ className, property1 = "系统管理员 - 张明远" }: ComponentProps) {
  return (
    <div className={className || "bg-white h-[390px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] w-[220px]"}>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[32px] relative size-full">
          <div className="relative shrink-0 size-[120px]" data-name="头像">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="120" src={img} width="120" />
          </div>
          <p className="[word-break:break-word] font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#212121] text-[20px] text-center whitespace-nowrap">张明远</p>
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#737380] text-[14px] text-center whitespace-nowrap">系统管理员</p>
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[min-content]">全量功能</p>
        </div>
      </div>
    </div>
  );
}

export default function Component1() {
  return <Component className="bg-white relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] size-full" />;
}