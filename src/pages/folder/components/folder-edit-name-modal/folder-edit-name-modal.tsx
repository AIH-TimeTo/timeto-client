import McInput from '@shared/components/mc-input/mc-input';
import { ModalContainer } from '@shared/components/modal-container/modal-container';

interface FolderNameEditModalProps {
  defaultName: string;
  onClose: () => void;
  onBack: () => void;
  onConfirm: (newName: string) => void;
}

export default function FolderNameEditModal({
  defaultName,
  onClose,
  onBack,
  onConfirm,
}: FolderNameEditModalProps) {
  return (
    <ModalContainer onClose={onClose}>
      <McInput
        title="폴더 이름 변경하기"
        placeholder="폴더 이름을 입력하세요"
        confirmText="저장"
        showBackButton
        defaultValue={defaultName}
        onBack={onBack}
        onConfirm={(value) => {
          if (value) onConfirm(value);
        }}
      />
    </ModalContainer>
  );
}
