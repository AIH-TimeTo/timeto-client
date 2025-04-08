import McInput from '@shared/components/mc-input/mc-input';
import { ModalContainer } from '@shared/components/modal-container/modal-container';

interface GoalNameEditModalProps {
  defaultName: string;
  onClose: () => void;
  onBack: () => void;
  onConfirm: (newName: string) => void;
}

export default function GoalNameEditModal({
  defaultName,
  onClose,
  onBack,
  onConfirm,
}: GoalNameEditModalProps) {
  return (
    <ModalContainer onClose={onClose}>
      <McInput
        title="목표 이름 변경하기"
        placeholder="목표 이름을 입력하세요"
        confirmText="저장"
        showBackButton
        defaultValue={defaultName}
        onBack={onBack}
        onConfirm={(value) => {
          if (value.trim()) {
            onConfirm(value);
          }
        }}
      />
    </ModalContainer>
  );
}
