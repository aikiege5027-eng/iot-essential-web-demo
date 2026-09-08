export type BatchValidationCriterion = "state" | "motion";

export interface BatchDispatchRule {
  dispatch: number;
  validationCriteria: BatchValidationCriterion[];
  validationTime: number;
  completion: number;
}

export interface UnbindApprovalRule {
  approvalRole: "system" | "l2";
  dailyLimit: number;
  weeklyLimit: number;
}

export interface NkeFloorLearningRule {
  interval: number;
  motionCount: number;
}

export const DEFAULT_BATCH_DISPATCH_RULE: BatchDispatchRule = {
  dispatch: 200,
  validationCriteria: [],
  validationTime: 10,
  completion: 95,
};

export const DEFAULT_UNBIND_APPROVAL_RULE: UnbindApprovalRule = {
  approvalRole: "l2",
  dailyLimit: 10,
  weeklyLimit: 50,
};

export const DEFAULT_NKE_FLOOR_LEARNING_RULE: NkeFloorLearningRule = {
  interval: 5,
  motionCount: 2000,
};
