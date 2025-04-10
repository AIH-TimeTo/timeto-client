import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { createFolder } from '@shared/apis/folder/folder';
import { GOAL_QUERY_OPTION } from '@shared/apis/goal/goal-queries';

export const useGoalFolderList = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery(GOAL_QUERY_OPTION.LIST());

  const createFolderMutation = useMutation({
    mutationFn: createFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: GOAL_QUERY_OPTION.LIST().queryKey,
      });
    },
    onError: (err) => {
      console.error('폴더 생성 실패', err);
    },
  });

  return {
    data,
    isLoading,
    isError,
    createFolder: createFolderMutation.mutate,
  };
};
