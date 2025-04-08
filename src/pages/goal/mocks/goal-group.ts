import type { GoalGroup } from '../types/goal';

export const mockGoalGroups: GoalGroup[] = [
  {
    goalId: 1,
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
    goalId: 2,
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
  {
    goalId: 4,
    goalName: '사이드 프로젝트',
    color: 'PURPLE01',
    folders: [
      {
        id: 5,
        folderName: '기획 정리',
        taskCount: 2,
        color: 'PURPLE01',
      },
      {
        id: 6,
        folderName: '기획 정리',
        taskCount: 2,
        color: 'PURPLE01',
      },
      {
        id: 7,
        folderName: '기획 정리',
        taskCount: 2,
        color: 'PURPLE01',
      },
      {
        id: 8,
        folderName: '기획 정리',
        taskCount: 2,
        color: 'PURPLE01',
      },
    ],
  },
];
