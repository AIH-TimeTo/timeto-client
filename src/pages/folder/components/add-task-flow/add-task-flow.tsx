import { useState } from 'react';

import McInput from '@shared/components/mc-input/mc-input';
import McLevel from '@shared/components/mc-level/mc-level';
import McTimePicker from '@shared/components/mc-time-picker/mc-time-picker';
import { ModalContainer } from '@shared/components/modal-container/modal-container';

import { useCreateTask } from '../../hooks/use-create-task';

type Step = 'input' | 'duration' | 'level';

interface AddTaskFlowProps {
  folderId: number;
  onClose: () => void;
  onComplete?: (data: {
    taskName: string;
    hour: number;
    minute: number;
    level: 'HIGH' | 'MIDDLE' | 'LOW';
  }) => void;
}

export default function AddTaskFlow({
  folderId,
  onClose,
  onComplete,
}: AddTaskFlowProps) {
  const [step, setStep] = useState<Step>('input');
  const [taskName, setTaskName] = useState('');
  const [duration, setDuration] = useState({ hour: 0, minute: 0 });
  const [level, setLevel] = useState<'HIGH' | 'MIDDLE' | 'LOW' | null>(null);

  const { mutate: createTask } = useCreateTask(folderId);

  const handleConfirmInput = (name: string) => {
    setTaskName(name);
    setStep('duration');
  };

  const handleConfirmDuration = (hour: number, minute: number) => {
    setDuration({ hour, minute });
    setStep('level');
  };

  const handleConfirmLevel = (selectedLevel: 'HIGH' | 'MIDDLE' | 'LOW') => {
    setLevel(selectedLevel);

    const taskPayload = {
      folderId,
      taskName,
      hour: duration.hour,
      minute: duration.minute,
      level: selectedLevel,
    };

    createTask(taskPayload);

    onComplete?.(taskPayload);
    onClose();
  };

  return (
    <>
      {step === 'input' && (
        <ModalContainer onClose={onClose}>
          <McInput
            title="새로 할 일 추가하기"
            placeholder="할 일을 추가해주세요"
            confirmText="다음"
            onConfirm={handleConfirmInput}
          />
        </ModalContainer>
      )}

      {step === 'duration' && (
        <ModalContainer onClose={onClose}>
          <McTimePicker
            defaultHour={duration.hour}
            defaultMinute={duration.minute}
            onBack={() => setStep('input')}
            onConfirm={handleConfirmDuration}
            confirmText="다음"
            onClose={onClose}
          />
        </ModalContainer>
      )}

      {step === 'level' && (
        <ModalContainer onClose={onClose}>
          <McLevel
            onBack={() => setStep('duration')}
            onConfirm={handleConfirmLevel}
          />
        </ModalContainer>
      )}
    </>
  );
}
