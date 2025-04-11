// components/task-edit-time-modal.tsx
import McTimePicker from '@shared/components/mc-time-picker/mc-time-picker';
import { ModalContainer } from '@shared/components/modal-container/modal-container';

interface TaskEditTimeModalProps {
  onClose: () => void;
  defaultHour: number;
  defaultMinute: number;
  onConfirm: (hour: number, minute: number) => void;
}

export default function TaskEditTimeModal({
  onClose,
  defaultHour,
  defaultMinute,
  onConfirm,
}: TaskEditTimeModalProps) {
  return (
    <ModalContainer onClose={onClose}>
      <McTimePicker
        defaultHour={defaultHour}
        defaultMinute={defaultMinute}
        onBack={onClose}
        onConfirm={onConfirm}
        confirmText="저장"
        onClose={onClose}
      />
    </ModalContainer>
  );
}
