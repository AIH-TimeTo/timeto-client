export interface CreateTaskResponse {
  status: string;
  code: string;
  message: string;
  data: {
    taskId: number;
    taskName: string;
  };
}

export interface GetTaskDetailResponse {
  status: string;
  code: string;
  message: string;
  data: {
    taskId: number;
    goalName: string;
    color: string;
    taskName: string;
    hour: number;
    minute: number;
    memo: string | null;
    level: 'HIGH' | 'MIDDLE' | 'LOW';
    folderId: number;
    done: boolean;
  };
}

export interface UpdateTaskResponse {
  status: string;
  code: string;
  message: string;
  data: {
    taskName: string;
    hour: number;
    minute: number;
    level: 'HIGH' | 'MIDDLE' | 'LOW';
    memo: string;
  };
}

export interface DeleteTaskResponse {
  status: string;
  code: string;
  message: string;
  data: {
    taskId: number;
    timeBlockId: number;
    folderId: number;
  };
}

export interface CompleteTaskResponse {
  status: string;
  code: string;
  message: string;
  data: {
    folderId: number;
  };
}
