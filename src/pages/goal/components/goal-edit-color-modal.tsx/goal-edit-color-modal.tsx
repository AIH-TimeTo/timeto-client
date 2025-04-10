import { useState } from 'react';

import { FolderColorType } from '@pages/goal/types/goal';
import McPalette from '@shared/components/mc-palette/mc-palette';
import { ModalContainer } from '@shared/components/modal-container/modal-container';
import { tbColorMap } from '@shared/utils/color-map';

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
        selected={selectedColor as keyof typeof tbColorMap} // 어쩔 수 없이 단언 나중에 리팩토링
        onSelect={(color) => setSelectedColor(color as FolderColorType)} // 어쩔 수 없이 단언 나중에 리팩토링
        onBack={onBack}
        onConfirm={() => onConfirm(selectedColor)} // 이미 FolderColorType이므로 그대로 전달
      />
    </ModalContainer>
  );
}
