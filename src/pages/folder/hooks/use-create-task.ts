import { useMutation, useQueryClient } from '@tanstack/react-query';

import { FOLDER_QUERY_KEY } from '@shared/apis/folder/folder-queries';
import { createTask } from '@shared/apis/task/task';

export const useCreateTask = (folderId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: FOLDER_QUERY_KEY.DETAIL(folderId),
      });

      queryClient.refetchQueries({
        queryKey: FOLDER_QUERY_KEY.DETAIL(folderId),
      });
    },
    onError: (err) => {
      console.error('할 일 생성 실패', err);
    },
  });
};
