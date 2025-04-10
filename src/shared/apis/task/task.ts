import { END_POINTS } from '@shared/constants/api';
import { CreateTaskRequest } from '@shared/types/task-request';
import { CreateTaskResponse } from '@shared/types/task-response';

import { apiPost } from '../common/methods';

export const createTask = (body: CreateTaskRequest) => {
  return apiPost<CreateTaskResponse, CreateTaskRequest>(
    END_POINTS.POST_TASK,
    body,
  );
};
