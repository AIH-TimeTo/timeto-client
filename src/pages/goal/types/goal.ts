export type FolderColorType = string;

export interface Folder {
  id: number;
  folderName: string;
  taskCount: number;
  color: FolderColorType;
}

export interface GoalGroup {
  goalId: number;
  goalName: string;
  color: FolderColorType;
  folders: Folder[];
}
