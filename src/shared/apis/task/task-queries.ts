import { queryOptions } from '@tanstack/react-query';
// import { fetchTasks } from './task'; // 나중에 할 일 조회 연결 시 사용

export const TASK_QUERY_KEY = {
  ALL: ['tasks'],
  LIST: () => ['tasks', 'list'],
} as const;

// 현재는 조회 API 없음 그래서 임시 주석 or placeholder
export const TASK_QUERY_OPTION = {
  LIST: () =>
    queryOptions({
      queryKey: TASK_QUERY_KEY.LIST(),
      // queryFn: fetchTasks, // 주석 처리해서 에러 방지
      // placeholder: () => Promise.resolve([]), // 혹은 더미 함수 사용 가능
      queryFn: async () => {
        console.warn('fetchTasks는 아직 구현되지 않았습니다.');
        return []; // 임시 빈 배열 반환
      },
    }),
};
