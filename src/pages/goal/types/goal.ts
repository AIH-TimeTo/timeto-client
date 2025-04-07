import type { GfColorKey } from '@shared/utils/color-map';

export type FolderColorType = GfColorKey;

export interface Folder {
  id: number;
  folderName: string;
  taskCount: number;
  color: FolderColorType;
}

export interface GoalGroup {
  id: number;
  goalName: string;
  color: FolderColorType;
  folders: Folder[];
}
