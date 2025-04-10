export interface CreateTaskRequest {
  folderId: number;
  taskName: string;
  hour: number;
  minute: number;
  level: 'HIGH' | 'MIDDLE' | 'LOW';
  memo?: string;
}
