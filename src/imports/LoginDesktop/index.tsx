import svgPaths from "./svg-7e80m0sp87";
import imgKoneExperience2022Kalasatama03OriginalFile1 from "./c139536a8499b15e3dcc9f92c8c622e4be36e24d.png";
type ItemUnitCheckboxProps = {
  className?: string;
  checked?: "true";
  disabled?: "false";
  indeterminate?: "false";
  state?: "normal 默认";
};

function ItemUnitCheckbox({ className, checked = "true", disabled = "false", indeterminate = "false", state = "normal 默认" }: ItemUnitCheckboxProps) {
  return (
    <div className={className || "relative size-[16px]"}>
      <div className="absolute bg-[#1450f5] inset-0 rounded-[4px]" />
      <div className="absolute bottom-[29.09%] left-[18.75%] right-[19.38%] top-1/4" data-name="check">
        <svg className="absolute block inset-0 size-full" fill="none" height="7.34573" preserveAspectRatio="none" viewBox="0 0 9.8995 7.34573" width="9.8995">
          <path d={svgPaths.p5542430} fill="white" id="check" />
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="h-[28px] relative shrink-0 w-[72px]" data-name="KONE">
        <div className="absolute inset-[7.14%_2.79%_8.57%_2.79%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" height="23.5996" preserveAspectRatio="none" viewBox="0 0 67.9775 23.5996" width="67.9775">
            <path d={svgPaths.p3e567100} fill="white" id="Union" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 72 28" width="72">
          <g id="Vector">
            <path d={svgPaths.p198dcb00} fill="#1450F5" />
            <path d={svgPaths.p4753000} fill="#1450F5" />
            <path d={svgPaths.p12b1f00} fill="#1450F5" />
            <path d={svgPaths.p2bd62680} fill="#1450F5" />
            <path d={svgPaths.p41f170} fill="#1450F5" />
          </g>
        </svg>
      </div>
      <p className="[word-break:break-word] font-['PingFang_SC:Semibold',sans-serif] leading-[36px] min-w-full not-italic relative shrink-0 text-[#141414] text-[28px] w-[min-content]">Welcome to myKONE!</p>
    </div>
  );
}

function Password() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[24px] items-center min-w-px overflow-clip relative" data-name="password">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#141414" id="Ellipse 1" r="4" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#141414" id="Ellipse 1" r="4" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#141414" id="Ellipse 1" r="4" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#141414" id="Ellipse 1" r="4" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#141414" id="Ellipse 1" r="4" />
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="input 输入框">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[24px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#141414] text-[16px] text-ellipsis whitespace-nowrap">
              <p className="leading-[24px] overflow-hidden text-ellipsis">Admin</p>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="inputPassword 密码输入框">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <Password />
            <div className="overflow-clip relative shrink-0 size-[18px]" data-name="hide">
              <div className="absolute bottom-1/4 left-[12.41%] right-[12.4%] top-[27.98%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="8.46449" preserveAspectRatio="none" viewBox="0 0 13.5337 8.46449" width="13.5337">
                  <path d={svgPaths.p3a0f3200} fill="#8F9195" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex items-start pt-[3px] relative shrink-0" data-name="checkbox">
      <ItemUnitCheckbox className="relative shrink-0 size-[16px]" />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[362px]" data-name="Checkbox 多选">
      <Checkbox1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] leading-[22px] min-w-px not-italic relative text-[#141414] text-[14px]">Remember me</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex h-[22px] items-center relative shrink-0 w-[360px]">
      <Checkbox />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Frame4 />
      <div className="bg-[#1450f5] h-[40px] relative rounded-[128px] shrink-0 w-[360px]" data-name="Button 按钮">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[24px]">Log In</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[362px]" data-name="Checkbox 多选">
      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Semibold',sans-serif] leading-[22px] min-w-px not-italic relative text-[#1450f5] text-[14px] text-center">Forgot password？</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Checkbox2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame6 />
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

export default function LoginDesktop() {
  return (
    <div className="bg-white relative size-full" data-name="Login desktop">
      <div className="absolute h-[960px] left-0 top-[-60px] w-[1440px]" data-name="KONE-Experience-2022_Kalasatama_03-Original File 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKoneExperience2022Kalasatama03OriginalFile1} />
      </div>
      <div className="-translate-y-1/2 absolute bg-white left-[500px] rounded-[24px] top-1/2 w-[440px]" data-name="Component 1">
        <div className="content-stretch flex flex-col gap-[32px] items-start p-[40px] relative size-full">
          <Frame />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}