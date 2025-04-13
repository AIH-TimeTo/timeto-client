// @shared/hooks/use-complete-task.ts
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { completeTask } from '@shared/apis/task/task';
import { CompleteTaskResponse } from '@shared/types/task-response';

export const useCompleteTask = () => {
  const navigate = useNavigate();

  return useMutation<CompleteTaskResponse, Error, number>({
    mutationFn: (taskId) => completeTask(taskId),
    onSuccess: (res) => {
      const folderId = res.data.folderId;
      console.log('완료 성공, folderId:', folderId);
      navigate(`/folder/${folderId}`);
    },
    onError: (err) => {
      console.error('할 일 완료 실패', err);
    },
  });
};
