import type { TaskLevel } from '../types/task';

export const mockTaskData = {
  goalName: '광고학 강의 레포트',
  folderName: '자료 조사',
  color: 'GREEN01' as const,
  progressCount: 5,
  progressTasks: [
    {
      taskName: '경쟁사 캠페인 비교',
      level: 'HIGH' as TaskLevel,
      hour: 1,
      minute: 10,
      date: '미정',
    },
    {
      taskName: '레퍼런스 수집',
      level: 'HIGH' as TaskLevel,
      hour: 0,
      minute: 45,
      date: '내일',
    },
    {
      taskName: '설문조사 설계',
      level: 'MID' as TaskLevel,
      hour: 1,
      minute: 0,
      date: '미정',
    },
    {
      taskName: '타겟 분석',
      level: 'MID' as TaskLevel,
      hour: 2,
      minute: 0,
      date: '미정',
    },
    {
      taskName: '자료 정리',
      level: 'LOW' as TaskLevel,
      hour: 1,
      minute: 30,
      date: '미정',
    },
  ],
  doneCount: 3,
  doneTasks: [
    {
      taskName: '초기 아이디어 정리',
      level: 'HIGH' as TaskLevel,
      hour: 1,
      minute: 0,
      date: '오늘',
    },
    {
      taskName: '사전조사',
      level: 'LOW' as TaskLevel,
      hour: 0,
      minute: 40,
      date: '오늘',
    },
    {
      taskName: '브레인스토밍 회의',
      level: 'HIGH' as TaskLevel,
      hour: 1,
      minute: 20,
      date: '오늘',
    },
  ],
};
