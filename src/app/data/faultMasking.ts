/**
 * 故障屏蔽管理（仅通力）的演示数据与规则。
 *
 * 一条记录 = 一个 Domain + 若干 FaultCode + 生效的总公司。
 *   · Domain：固定四位数字；
 *   · FaultCode：固定五位数字，录入不足五位时前面补 0 到五位（1 → 00001）；同一条记录里去重；
 *   · 「已屏蔽故障代码」列由 Domain 与 FaultCode 组合而成：`Domain-FaultCode`。
 */
export type FaultMaskRecord = {
  id: string;
  /** 生效的总公司，多选；与操作人的数据权限无关 */
  scope: string[];
  domain: string;
  faultCodes: string[];
  /** 屏蔽时间，格式 YYYY-MM-DD HH:mm */
  maskedAt: string;
};

export const FAULT_CODE_MAX_LENGTH = 5;
/** FaultCode 展示 / 存储的位数：不足时前面补 0 */
export const FAULT_CODE_LENGTH = 5;
export const DOMAIN_LENGTH = 4;

/** 把一个录入值规整成标签文字：只留数字、至多五位，不足五位前面补 0；没有数字返回空串。 */
export function normalizeFaultCode(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, FAULT_CODE_MAX_LENGTH);
  return digits ? digits.padStart(FAULT_CODE_LENGTH, "0") : "";
}

/** 规整并去重（保持首次出现的顺序） */
export function normalizeFaultCodes(raws: string[]): string[] {
  const result: string[] = [];
  for (const raw of raws) {
    const code = normalizeFaultCode(raw);
    if (code && !result.includes(code)) result.push(code);
  }
  return result;
}

/** 「已屏蔽故障代码」：每个 FaultCode 与 Domain 组合为 Domain-FaultCode */
export const getMaskedFaultCodes = (record: Pick<FaultMaskRecord, "domain" | "faultCodes">): string[] =>
  record.faultCodes.map((code) => `${record.domain}-${code}`);

export function formatMaskedAt(date: Date = new Date()): string {
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function getInitialFaultMasks(): FaultMaskRecord[] {
  return [
    { id: "fm-12", scope: ["通力", "巨人通力"], domain: "1001", faultCodes: ["00023", "00045", "00108"], maskedAt: "2026-09-18 14:32" },
    { id: "fm-11", scope: ["通力"], domain: "1203", faultCodes: ["00007"], maskedAt: "2026-09-12 10:05" },
    { id: "fm-10", scope: ["巨人通力"], domain: "2005", faultCodes: ["00310", "00311", "12345"], maskedAt: "2026-09-03 16:48" },
    { id: "fm-9", scope: ["通力", "巨人通力"], domain: "0310", faultCodes: ["00001", "00002"], maskedAt: "2026-08-27 09:20" },
    { id: "fm-8", scope: ["通力"], domain: "4100", faultCodes: ["00512"], maskedAt: "2026-08-19 17:41" },
    { id: "fm-7", scope: ["通力", "巨人通力"], domain: "3002", faultCodes: ["00066", "00067", "00068", "00069"], maskedAt: "2026-08-08 11:13" },
    { id: "fm-6", scope: ["巨人通力"], domain: "1201", faultCodes: ["00900"], maskedAt: "2026-07-29 15:26" },
    { id: "fm-5", scope: ["通力"], domain: "5007", faultCodes: ["00150", "00151"], maskedAt: "2026-07-21 13:59" },
    { id: "fm-4", scope: ["通力", "巨人通力"], domain: "2210", faultCodes: ["00404"], maskedAt: "2026-07-10 08:37" },
    { id: "fm-3", scope: ["通力"], domain: "6001", faultCodes: ["00032", "00033"], maskedAt: "2026-06-30 18:02" },
    { id: "fm-2", scope: ["巨人通力"], domain: "7010", faultCodes: ["00800", "00801", "00802"], maskedAt: "2026-06-17 10:44" },
    { id: "fm-1", scope: ["通力", "巨人通力"], domain: "8008", faultCodes: ["00099"], maskedAt: "2026-06-05 09:15" },
  ];
}
