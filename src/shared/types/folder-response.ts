import type { Task } from '@pages/folder/types/task';

export interface FolderListResponse {
  status: string;
  code: string;
  message: string;
  data: {
    folders: {
      folderId: number;
      folderName: string;
      color: string;
    }[];
  };
}

export interface CreateFolderResponse {
  status: string;
  code: string;
  message: string;
  data: {
    folderId: number;
    folderName: string;
    color: string;
  };
}

export interface FolderDetailResponse {
  goalName: string;
  folderName: string;
  color: string;
  progressCount: number;
  progressTasks: Task[];
  doneCount: number;
  doneTasks: Task[];
}

export interface GetFolderDetailResponse {
  status: string;
  code: string | null;
  message: string;
  data: FolderDetailResponse;
}

export interface EditFolderNameResponse {
  status: string;
  code: string;
  message: string;
  data: {
    folderId: number;
    folderName: string;
  };
}
