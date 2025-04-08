import { FolderColorType } from '@pages/goal/types/goal';
import { GoalListResponse } from '@shared/types/goal-response';

interface Goal {
  goalId: number;
  goalName: string;
  color: FolderColorType;
  folders: {
    id: number;
    folderName: string;
    taskCount: number;
    color: FolderColorType;
  }[];
}

export const mapGoalResponse = (
  response: GoalListResponse['data']['goalsFoldersList'],
): Goal[] => {
  return response.map((goal) => ({
    goalId: goal.goalId,
    goalName: goal.goalName,
    color: goal.color as FolderColorType,
    folders: (goal.folderInfoList ?? []).map((folder) => ({
      id: folder.folderId,
      folderName: folder.folderName,
      taskCount: folder.taskCount,
      color: goal.color as FolderColorType,
    })),
  }));
};
