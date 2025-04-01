export type FolderColorType =
  | 'RED01'
  | 'RED02'
  | 'PURPLE01'
  | 'PURPLE02'
  | 'BLUE01'
  | 'BLUE02'
  | 'GREEN01'
  | 'GREEN02'
  | 'BROWN01'
  | 'BROWN02';

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
