import { useState } from 'react';

import type { FolderColorType } from '@pages/goal/types/goal';

type GoalOptionModalStep =
  | 'option'
  | 'edit-name'
  | 'edit-color'
  | 'delete'
  | null;

export function useGoalOptionModal() {
  const [modalStep, setModalStep] = useState<GoalOptionModalStep>(null);
  const [selectedGoalId, setSelectedGoalId] = useState<number | null>(null);
  const [selectedGoalName, setSelectedGoalName] = useState('');
  const [selectedGoalColor, setSelectedGoalColor] =
    useState<FolderColorType>('RED01');

  const openOptionModal = (
    goalId: number,
    goalName: string,
    color: FolderColorType,
  ) => {
    setSelectedGoalId(goalId);
    setSelectedGoalName(goalName);
    setSelectedGoalColor(color);
    setModalStep('option');
  };

  const openEditNameModal = () => {
    setModalStep('edit-name');
  };

  const openEditColorModal = () => {
    setModalStep('edit-color');
  };

  const openDeleteModal = () => {
    setModalStep('delete');
  };

  const closeModal = () => {
    setModalStep(null);
    setSelectedGoalId(null);
    setSelectedGoalName('');
    setSelectedGoalColor('RED01');
  };

  const goBack = () => {
    setModalStep('option');
  };

  const isOpen = modalStep !== null;

  return {
    modalStep,
    selectedGoalId,
    selectedGoalName,
    selectedGoalColor,
    openOptionModal,
    openEditNameModal,
    openEditColorModal,
    openDeleteModal,
    closeModal,
    goBack,
    setSelectedGoalName,
    setSelectedGoalColor,
    isOpen,
  };
}
