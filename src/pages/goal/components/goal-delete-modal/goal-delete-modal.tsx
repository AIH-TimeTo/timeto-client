import McConfirm from '@shared/components/mc-confirm/mc-confirm';

interface GoalDeleteModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export default function GoalDeleteModal({
  onClose,
  onConfirm,
}: GoalDeleteModalProps) {
  return (
    <McConfirm
      title="목표를 삭제하시겠어요?"
      description="목표 내 폴더와 할 일도 삭제돼요."
      confirmLabel="삭제"
      cancelLabel="취소"
      onCancel={onClose}
      onConfirm={onConfirm}
    />
  );
}
