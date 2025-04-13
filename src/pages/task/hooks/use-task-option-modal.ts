import { useState } from 'react';

export type TaskModalStep = 'option' | 'delete';

export const useTaskOptionModal = () => {
  const [modalStep, setModalStep] = useState<TaskModalStep | null>(null);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const [selectedTaskName, setSelectedTaskName] = useState('');

  const openOptionModal = (id: number, name: string) => {
    setSelectedTaskId(id);
    setSelectedTaskName(name);
    setModalStep('option');
  };

  const openDeleteModal = () => {
    console.log('✅ openDeleteModal 실행됨');
    setModalStep('delete');
  };

  const goBack = () => setModalStep('option');
  const closeModal = () => setModalStep(null);

  return {
    modalStep,
    selectedTaskId,
    selectedTaskName,
    openOptionModal,
    openDeleteModal,
    goBack,
    closeModal,
  };
};
