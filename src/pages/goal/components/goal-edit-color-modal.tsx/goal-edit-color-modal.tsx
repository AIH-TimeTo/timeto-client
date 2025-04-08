import { useState } from 'react';

import { FolderColorType } from '@pages/goal/types/goal';
import McPalette from '@shared/components/mc-palette/mc-palette';
import { ModalContainer } from '@shared/components/modal-container/modal-container';

interface GoalColorEditModalProps {
  defaultColor: FolderColorType;
  onClose: () => void;
  onBack: () => void;
  onConfirm: (newColor: FolderColorType) => void;
}

export default function GoalColorEditModal({
  defaultColor,
  onClose,
  onBack,
  onConfirm,
}: GoalColorEditModalProps) {
  const [selectedColor, setSelectedColor] =
    useState<FolderColorType>(defaultColor);

  return (
    <ModalContainer onClose={onClose}>
      <McPalette
        title="색상 변경하기"
        selected={selectedColor}
        onSelect={(color) => setSelectedColor(color)}
        onBack={onBack}
        onConfirm={() => onConfirm(selectedColor)}
      />
    </ModalContainer>
  );
}
