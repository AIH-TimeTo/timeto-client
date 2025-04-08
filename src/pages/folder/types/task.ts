export type TaskLevel = 'HIGH' | 'MID' | 'LOW';
import type { FbColorKey } from '@shared/utils/color-map';

export interface Task {
  taskName: string;
  level: TaskLevel;
  hour: number;
  minute: number;
  date: string;
}

export interface TaskResponse {
  goalName: string;
  folderName: string;
  color: FbColorKey;
  progressCount: number;
  progressTasks: Task[];
  doneCount: number;
  doneTasks: Task[];
}
