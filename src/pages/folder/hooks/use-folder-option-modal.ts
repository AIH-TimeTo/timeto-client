import { useState } from 'react';

export type FolderModalStep = 'option' | 'edit-name' | 'delete';

export const useFolderOptionModal = () => {
  const [modalStep, setModalStep] = useState<FolderModalStep | null>(null);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [selectedFolderName, setSelectedFolderName] = useState('');

  const openOptionModal = (id: number, name: string) => {
    setSelectedFolderId(id);
    setSelectedFolderName(name);
    setModalStep('option');
  };

  const openEditNameModal = () => setModalStep('edit-name');
  const openDeleteModal = () => setModalStep('delete');

  const goBack = () => setModalStep('option');
  const closeModal = () => setModalStep(null);

  return {
    modalStep,
    selectedFolderId,
    selectedFolderName,
    openOptionModal,
    openEditNameModal,
    openDeleteModal,
    goBack,
    closeModal,
    setSelectedFolderName,
  };
};
