import { END_POINTS } from '@shared/constants/api';
import { CreateGoalRequest } from '@shared/types/goal-request';
import { GoalListResponse } from '@shared/types/goal-response';
import { CreateGoalResponse } from '@shared/types/goal-response';

import { apiGet, apiPost } from '../common/methods';

export const fetchGoals = () => {
  return apiGet<GoalListResponse>(END_POINTS.GET_GOALS);
};

export const createGoal = (body: CreateGoalRequest) => {
  return apiPost<CreateGoalResponse, CreateGoalRequest>(
    END_POINTS.POST_GOAL,
    body,
  );
};
