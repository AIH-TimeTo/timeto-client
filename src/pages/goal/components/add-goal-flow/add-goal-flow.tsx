import McInput from '@shared/components/mc-input/mc-input';
import McPalette from '@shared/components/mc-palette/mc-palette';
import { ModalContainer } from '@shared/components/modal-container/modal-container';
import { tbColorMap } from '@shared/utils/color-map';

import { useCreateGoal } from '../../hooks/use-create-goal';

interface AddGoalFlowProps {
  modalType: 'input-goal' | 'palette';
  goalName: string;
  goalColor: keyof typeof tbColorMap | null;
  onSetName: (value: string) => void;
  onSetColor: (color: keyof typeof tbColorMap) => void;
  onBack: (step: 'list' | 'input-goal' | 'palette') => void;
  onNext: (step: 'palette') => void;
  onClose: () => void;
}

export default function AddGoalFlow({
  modalType,
  goalName,
  goalColor,
  onSetName,
  onSetColor,
  onBack,
  onNext,
  onClose,
}: AddGoalFlowProps) {
  const { mutate: createGoal } = useCreateGoal();

  if (modalType === 'input-goal') {
    return (
      <ModalContainer onClose={onClose}>
        <McInput
          title="새로 목표 추가하기"
          placeholder="목표 이름을 입력하세요"
          confirmText="다음"
          showBackButton
          onBack={() => onBack('list')}
          onConfirm={(value) => {
            onSetName(value);
            onNext('palette');
          }}
        />
      </ModalContainer>
    );
  }

  if (modalType === 'palette') {
    return (
      <ModalContainer onClose={onClose}>
        <McPalette
          title="색상 지정하기"
          selected={goalColor}
          onSelect={(color) => onSetColor(color)}
          onBack={() => onBack('input-goal')}
          onConfirm={() => {
            if (!goalName || !goalColor) return;
            createGoal({ goalName, color: goalColor });
            onClose();
          }}
        />
      </ModalContainer>
    );
  }

  return null;
}
