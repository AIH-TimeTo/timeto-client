import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createGoal } from '@shared/apis/goal/goal';
import { GOAL_QUERY_KEY } from '@shared/apis/goal/goal-queries';

export const useCreateGoal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createGoal,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: GOAL_QUERY_KEY.LIST(),
      });
    },
    onError: (err) => {
      console.error('목표 생성 실패', err);
    },
  });
};
