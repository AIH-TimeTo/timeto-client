export interface CreateTaskRequest {
  folderId: number;
  taskName: string;
  hour: number;
  minute: number;
  level: 'HIGH' | 'MIDDLE' | 'LOW';
  memo?: string;
}

export interface UpdateTaskRequest {
  taskId: number;
  taskName: string;
  hour: number;
  minute: number;
  level: 'HIGH' | 'MIDDLE' | 'LOW';
  memo?: string;
}
