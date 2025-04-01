// @shared/hooks/use-goal-modal.ts
import { useState } from 'react';

import { tbColorMap } from '@shared/utils/color-map';

type ModalType = 'list' | 'input-goal' | 'input-folder' | 'palette' | null;
export type GoalColor = keyof typeof tbColorMap;

export function useGoalModal() {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [goalName, setGoalName] = useState('');
  const [goalColor, setGoalColor] = useState<GoalColor | null>(null);

  const openModal = (type: ModalType) => setModalType(type);

  const closeModal = () => {
    setModalType(null);
    setGoalName('');
    setGoalColor(null);
  };

  const goBack = (type: ModalType) => {
    setModalType(type);
  };

  return {
    modalType,
    goalName,
    goalColor,
    openModal,
    closeModal,
    goBack,
    setGoalName,
    setGoalColor,
  };
}
