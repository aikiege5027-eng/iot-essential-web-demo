import img from "./bc0dd9340cdc398d64fc0d77ad0831df457c309f.png";
import img1 from "./f53b42671c153590ed4a8a58db404198110e34af.png";
import img2 from "./829c4636d017667935d957fcbe75e56486d3423a.png";
import img3 from "./6847d687db3edf3e5d330faa9a67e02d91c0298f.png";
import img4 from "./340e161f99fe54cc796d4ef8ee2b090b96f49df0.png";
import img5 from "./ddf94a90705d5dea2421c8ad86a24839c9b0e289.png";
import img6 from "./2ce0faf98af7b6e81e7b1e7e4a1fd3b77c325d8f.png";
type ComponentProps = {
  className?: string;
  property1?: "系统管理员 - 张明远" | "维保员工 - 李建国" | "维保经理 - 王志强" | "L2人员 - 刘洋" | "超级管理员 - 周强" | "Devops人员 - 赵敏" | "研发人员 - 林雪";
};

export default function Component({ className, property1 = "维保经理 - 王志强" }: ComponentProps) {
  const is = property1 === "维保员工 - 李建国";
  const is1 = property1 === "系统管理员 - 张明远";
  const is2 = property1 === "研发人员 - 林雪";
  const is3 = property1 === "超级管理员 - 周强";
  const isDevops = property1 === "Devops人员 - 赵敏";
  const isL2 = property1 === "L2人员 - 刘洋";
  const isOr = ["系统管理员 - 张明远", "超级管理员 - 周强"].includes(property1);
  return (
    <div className={className || "bg-white h-[390px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] w-[220px]"}>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[32px] relative size-full">
          <div className="relative shrink-0 size-[120px]" data-name="头像">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="120" src={is3 ? img6 : isDevops ? img5 : isL2 ? img4 : is2 ? img3 : is1 ? img2 : is ? img1 : img} width="120" />
          </div>
          <p className={`[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#212121] text-[20px] text-center whitespace-nowrap ${["系统管理员 - 张明远", "Devops人员 - 赵敏"].includes(property1) ? 'font-["Inter:Bold","Noto_Sans_JP:Bold","Noto_Sans_SC:Bold",sans-serif]' : 'font-["Inter:Bold","Noto_Sans_JP:Bold",sans-serif]'}`}>{is3 ? "周强" : isDevops ? "赵敏" : isL2 ? "刘洋" : is2 ? "林雪" : is1 ? "张明远" : is ? "李建国" : "王志强"}</p>
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#737380] text-[14px] text-center whitespace-nowrap">{is3 ? "超级管理员（系统）" : isDevops ? "Devops人员（自建）" : isL2 ? "L2人员（自建）" : is2 ? "研发人员（自建）" : is1 ? "系统管理员（预置）" : is ? "维保员工（预置）" : "管理层员工（预置）"}</p>
          {["维保经理 - 王志强", "维保员工 - 李建国", "系统管理员 - 张明远", "超级管理员 - 周强"].includes(property1) && <p className={`[word-break:break-word] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[min-content] ${isOr ? 'font-["Inter:Regular","Noto_Sans_JP:Regular",sans-serif]' : 'font-["Inter:Regular","Noto_Sans_JP:Regular","Noto_Sans_SC:Regular",sans-serif]'}`}>{isOr ? "全量功能" : is ? "进入审批流条件：单日单台设备解绑＞10台时，再次解绑则进入审批流" : "进入审批流条件： ①单日单台设备解绑＞10台时，再次解绑则进入审批流 ②批量设备操作，进入审批流"}</p>}
          {["研发人员 - 林雪", "L2人员 - 刘洋", "Devops人员 - 赵敏"].includes(property1) && (
            <div className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-[min-content]">
              <p className="leading-[1.5] mb-0">进入审批流条件：</p>
              <p className="leading-[1.5]">批量设备操作，进入审批流</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}