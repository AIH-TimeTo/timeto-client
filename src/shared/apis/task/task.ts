import { END_POINTS } from '@shared/constants/api';
import {
  CreateTaskRequest,
  UpdateTaskRequest,
} from '@shared/types/task-request';
import {
  CompleteTaskResponse,
  CreateTaskResponse,
  DeleteTaskResponse,
  GetTaskDetailResponse,
  UpdateTaskResponse,
} from '@shared/types/task-response';

import {
  apiDelete,
  apiGet,
  apiPatch,
  apiPost,
  apiPut,
} from '../common/methods';

export const createTask = (body: CreateTaskRequest) => {
  return apiPost<CreateTaskResponse, CreateTaskRequest>(
    END_POINTS.POST_TASK,
    body,
  );
};

export const fetchTaskDetail = (taskId: number) => {
  return apiGet<GetTaskDetailResponse>(END_POINTS.GET_TASK_DETAIL(taskId));
};

export const updateTask = (body: UpdateTaskRequest) => {
  return apiPut<UpdateTaskResponse, UpdateTaskRequest>(
    END_POINTS.PATCH_TASK,
    body,
  );
};

export const deleteTask = (taskId: number) => {
  return apiDelete<DeleteTaskResponse>(`/api/v1/tasks/${taskId}`);
};

export const completeTask = (taskId: number) => {
  return apiPatch<CompleteTaskResponse>(END_POINTS.PATCH_TASK_DONE(taskId));
};
