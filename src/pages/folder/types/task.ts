export type TaskLevel = 'HIGH' | 'MIDDLE' | 'LOW';

export interface Task {
  taskId: number;
  taskName: string;
  level: TaskLevel;
  hour: number;
  minute: number;
  date: string;
}

export interface TaskResponse {
  goalName: string;
  folderName: string;
  color: string;
  progressCount: number;
  progressTasks: Task[];
  doneCount: number;
  doneTasks: Task[];
}
