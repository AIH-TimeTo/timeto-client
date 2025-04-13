import { queryOptions } from '@tanstack/react-query';

import { fetchTaskDetail } from './task';

export const TASK_QUERY_KEY = {
  ALL: ['tasks'],
  LIST: () => ['tasks', 'list'],
  DETAIL: (taskId: number) => ['tasks', 'detail', taskId],
} as const;

export const TASK_QUERY_OPTION = {
  LIST: () =>
    queryOptions({
      queryKey: TASK_QUERY_KEY.LIST(),
      queryFn: async () => {
        console.warn('fetchTasks는 아직 구현되지 않았습니다.');
        return [];
      },
    }),

  DETAIL: (taskId: number) =>
    queryOptions({
      queryKey: TASK_QUERY_KEY.DETAIL(taskId),
      queryFn: () => fetchTaskDetail(taskId),
      staleTime: 0,
      refetchOnWindowFocus: false,
    }),
};
