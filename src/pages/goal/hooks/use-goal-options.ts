import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  deleteGoal,
  editGoalColor,
  editGoalName,
} from '@shared/apis/goal/goal';
import { GOAL_QUERY_KEY } from '@shared/apis/goal/goal-queries';

import { FolderColorType } from '../types/goal';

export const useEditGoalOption = ({
  onClose,
  setSelectedGoalName,
  setSelectedColor,
}: {
  onClose: () => void;
  setSelectedGoalName: (name: string) => void;
  setSelectedColor: (color: FolderColorType) => void;
}) => {
  const queryClient = useQueryClient();

  const { mutate: updateNameMutate } = useMutation({
    mutationFn: editGoalName,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: GOAL_QUERY_KEY.LIST(),
      });
      setSelectedGoalName(data.data.goalName);
      onClose();
    },
    onError: (err) => {
      console.error('이름 변경 실패', err);
    },
  });

  const { mutate: updateColorMutate } = useMutation({
    mutationFn: editGoalColor,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: GOAL_QUERY_KEY.LIST(),
      });
      setSelectedColor(data.data.color as FolderColorType);
      onClose();
    },
    onError: (err) => {
      console.error('색상 변경 실패', err);
    },
  });

  const { mutate: deleteGoalMutate } = useMutation({
    mutationFn: deleteGoal,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: GOAL_QUERY_KEY.LIST(),
      });
      onClose();
    },
    onError: (err) => {
      console.error('삭제 실패', err);
    },
  });

  return {
    updateNameMutate,
    updateColorMutate,
    deleteGoalMutate,
  };
};
