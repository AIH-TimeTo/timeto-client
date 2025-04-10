export interface CreateTaskResponse {
  status: string;
  code: string;
  message: string;
  data: {
    taskId: number;
    taskName: string;
  };
}
