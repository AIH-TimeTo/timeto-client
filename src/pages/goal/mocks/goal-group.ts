import type { GoalGroup } from '../types/goal';

export const mockGoalGroups: GoalGroup[] = [
  {
    id: 1,
    goalName: '광고학 강의 레포트',
    color: 'GREEN01',
    folders: [
      {
        id: 1,
        folderName: '자료 조사',
        taskCount: 4,
        color: 'GREEN01',
      },
      {
        id: 2,
        folderName: '1안 작성',
        taskCount: 3,
        color: 'GREEN01',
      },
      {
        id: 3,
        folderName: '2안 작성',
        taskCount: 3,
        color: 'GREEN01',
      },
    ],
  },
  {
    id: 2,
    goalName: '사이드 프로젝트',
    color: 'RED01',
    folders: [
      {
        id: 3,
        folderName: '기획 정리',
        taskCount: 2,
        color: 'RED01',
      },
    ],
  },
];
