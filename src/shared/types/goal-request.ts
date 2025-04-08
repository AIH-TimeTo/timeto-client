export interface CreateGoalRequest {
  goalName: string;
  color: string;
}

export interface EditGoalNameRequest {
  goalId: number;
  goalName: string;
}

export interface EditGoalColorRequest {
  goalId: number;
  color: string;
}
