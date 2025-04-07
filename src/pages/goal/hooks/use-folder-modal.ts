import { useState } from 'react';

type ModalStep = 'list' | 'input-folder';

export function useFolderModal() {
  const [modalType, setModalType] = useState<ModalStep | null>(null);
  const [folderName, setFolderName] = useState('');
  const [selectedGoalId, setSelectedGoalId] = useState<number | null>(null);
  const [selectedGoalName, setSelectedGoalName] = useState('');

  const openModal = (step: ModalStep) => {
    setModalType(step);
  };

  const closeModal = () => {
    setModalType(null);
    setFolderName('');
    setSelectedGoalId(null);
    setSelectedGoalName('');
  };

  const goBack = () => {
    if (modalType === 'input-folder') setModalType('list');
  };

  const selectGoal = (goalId: number, goalName: string) => {
    setSelectedGoalId(goalId);
    setSelectedGoalName(goalName);
    setModalType('input-folder');
  };

  return {
    modalType,
    folderName,
    selectedGoalId,
    selectedGoalName,
    openModal,
    closeModal,
    goBack,
    setFolderName,
    selectGoal,
  };
}
