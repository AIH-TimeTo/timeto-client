import McConfirm from '@shared/components/mc-confirm/mc-confirm';

interface FolderDeleteModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export default function FolderDeleteModal({
  onClose,
  onConfirm,
}: FolderDeleteModalProps) {
  return (
    <McConfirm
      title="폴더를 삭제하시겠어요?"
      description="폴더 내 할일도 모두 삭제돼요."
      confirmLabel="삭제"
      cancelLabel="취소"
      onCancel={onClose}
      onConfirm={onConfirm}
    />
  );
}
