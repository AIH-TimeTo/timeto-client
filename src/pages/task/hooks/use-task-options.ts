import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteTask, updateTask } from '@shared/apis/task/task';
import { TASK_QUERY_KEY } from '@shared/apis/task/task-queries';
import { UpdateTaskRequest } from '@shared/types/task-request';
import { DeleteTaskResponse } from '@shared/types/task-response';

export const useTaskOptions = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const updateMutation = useMutation({
    mutationFn: (body: UpdateTaskRequest) => updateTask(body),
    onSuccess: (res, variables) => {
      queryClient.setQueryData(TASK_QUERY_KEY.DETAIL(variables.taskId), res);
      navigate(`/task/${variables.taskId}`);
    },
    onError: (err) => {
      console.error('할 일 수정 실패', err);
    },
  });

  const deleteMutation = useMutation<DeleteTaskResponse, Error, number>({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (err) => {
      console.error('할 일 삭제 실패', err);
    },
  });

  const deleteTaskWithCallback = (
    taskId: number,
    options?: { onSuccess?: (res: DeleteTaskResponse) => void },
  ) => {
    deleteMutation.mutate(taskId, {
      onSuccess: (res) => {
        if (options?.onSuccess) {
          options.onSuccess(res);
        }
      },
    });
  };

  return {
    updateTaskMutate: updateMutation.mutate,
    isUpdating: updateMutation.isPending,
    deleteTaskMutate: deleteTaskWithCallback,
    isDeleting: deleteMutation.isPending,
  };
};
