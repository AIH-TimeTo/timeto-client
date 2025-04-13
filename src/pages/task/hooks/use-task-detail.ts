import { useQuery } from '@tanstack/react-query';

import { TASK_QUERY_OPTION } from '@shared/apis/task/task-queries';

export const useTaskDetail = (taskId?: string) => {
  return useQuery({
    ...TASK_QUERY_OPTION.DETAIL(Number(taskId)),
    enabled: !!taskId,
  });
};
