export interface Folder {
  folderId: number;
  folderName: string;
  taskCount: number;
}

export interface Goal {
  goalId: number;
  goalName: string;
  color: string;
  folderInfoList: Folder[];
}

export interface GoalListResponse {
  status: string;
  code: string | null;
  message: string;
  data: {
    goalsFoldersList: Goal[];
  };
}

export interface CreateGoalResponse {
  status: string;
  code: string | null;
  message: string;
  data: {
    goalId: number;
    goalName: string;
    color: string;
  };
}

export interface EditGoalNameResponse {
  status: string;
  code: string;
  message: string;
  data: {
    goalId: number;
    goalName: string;
  };
}

export interface EditGoalColorResponse {
  status: string;
  code: string;
  message: string;
  data: {
    goalId: number;
    color: string;
  };
}

export interface DeleteGoalResponse {
  status: string;
  code: string;
  message: string;
  data: {
    goalId: number;
    deletedFolderIds: number[];
    deletedTaskIds: number[];
    deletedTimeBlockIds: number[];
  };
}
