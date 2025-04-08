import { END_POINTS } from '@shared/constants/api';
import {
  CreateGoalRequest,
  EditGoalColorRequest,
  EditGoalNameRequest,
} from '@shared/types/goal-request';
import {
  CreateGoalResponse,
  DeleteGoalResponse,
  EditGoalColorResponse,
  EditGoalNameResponse,
  GoalListResponse,
} from '@shared/types/goal-response';

import { apiDelete, apiGet, apiPatch, apiPost } from '../common/methods';

export const fetchGoals = () => {
  return apiGet<GoalListResponse>(END_POINTS.GET_GOALS);
};

export const createGoal = (body: CreateGoalRequest) => {
  return apiPost<CreateGoalResponse, CreateGoalRequest>(
    END_POINTS.POST_GOAL,
    body,
  );
};

export const editGoalName = (body: EditGoalNameRequest) => {
  return apiPatch<EditGoalNameResponse, EditGoalNameRequest>(
    END_POINTS.PATCH_GOAL_NAME,
    body,
  );
};

export const editGoalColor = (body: EditGoalColorRequest) => {
  return apiPatch<EditGoalColorResponse, EditGoalColorRequest>(
    END_POINTS.PATCH_GOAL_COLOR,
    body,
  );
};

export const deleteGoal = (goalId: number) => {
  return apiDelete<DeleteGoalResponse>(`${END_POINTS.DELETE_GOAL}/${goalId}`);
};
