import type { SmlRegistration } from "../components/mobile/Mobile310RegistrationFlow";

/**
 * 已为某个设备号补注册的 SML 信息（Demo 用，只在内存里，刷新页面后清空）。
 *
 * 注册完 SML 点「完成」会回到设备注册首页，再次输入同一个设备号时要直接看到已注册的 SML，
 * 所以不能放在随页面卸载的组件 state 里。解绑时清除。
 */
const registeredSml = new Map<string, SmlRegistration>();

export const getRegisteredSml = (equipment: string): SmlRegistration | null => registeredSml.get(equipment) ?? null;

export function setRegisteredSml(equipment: string, sml: SmlRegistration | null) {
  if (sml) registeredSml.set(equipment, sml);
  else registeredSml.delete(equipment);
}
