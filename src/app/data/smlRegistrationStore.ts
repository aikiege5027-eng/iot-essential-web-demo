import type { SmlRegistration } from "../components/mobile/Mobile310RegistrationFlow";

/**
 * 补注册的 SML / 云管家信息（Demo 用，只在内存里，刷新页面后清空）。
 *
 * 注册完成后点「完成」会回到设备注册首页，再次输入同一个设备号时要直接看到已注册的数据，
 * 所以不能放在随页面卸载的组件 state 里。解绑时清除。
 */
const registeredSml = new Map<string, SmlRegistration | null>();
const registeredCloud = new Map<string, string>();

/** 没记录过返回 undefined；解绑过返回 null；否则返回已注册的 SML。 */
export const getRegisteredSml = (equipment: string): SmlRegistration | null | undefined => registeredSml.get(equipment);

export function setRegisteredSml(equipment: string, sml: SmlRegistration | null) {
  registeredSml.set(equipment, sml);
}

/** 补注册云管家时输入的序列号；未注册返回 null。 */
export const getRegisteredCloudSerial = (equipment: string): string | null => registeredCloud.get(equipment) ?? null;

export function setRegisteredCloudSerial(equipment: string, serial: string | null) {
  if (serial) registeredCloud.set(equipment, serial);
  else registeredCloud.delete(equipment);
}
