// components/task-delete-modal.tsx
import McConfirm from '@shared/components/mc-confirm/mc-confirm';

interface TaskDeleteModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export default function TaskDeleteModal({
  onClose,
  onConfirm,
}: TaskDeleteModalProps) {
  return (
    <McConfirm
      title="할 일을 삭제하시겠어요?"
      description="타임 블로킹에 있는 기록도 삭제돼요."
      confirmLabel="삭제"
      cancelLabel="취소"
      onCancel={onClose}
      onConfirm={onConfirm}
    />
  );
}
