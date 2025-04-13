import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { gfColorMap } from '@shared/utils/color-map';

import { useCompleteTask } from '../../hooks/use-complete-task';
import TaskEditTimeModal from '../task-edit-time-modal/task-edit-time-modal';

import * as styles from './task-detail.css';

interface TaskDetailProps {
  isEdit: boolean;
  taskName: string;
  goalName: string;
  hour: number;
  minute: number;
  level: string;
  memo: string;
  done?: boolean;
  color: keyof typeof gfColorMap;
  onSubmit?: (data: {
    task: string;
    hour: number;
    minute: number;
    level: '상' | '중' | '하';
    memo: string;
  }) => void;
}

export default function TaskDetail({
  isEdit,
  taskName,
  hour,
  minute,
  level,
  memo,
  onSubmit,
  done,
}: TaskDetailProps) {
  const [task, setTask] = useState(taskName);
  const [inputHour, setInputHour] = useState(hour);
  const [inputMinute, setInputMinute] = useState(minute);
  const [selectedLevel, setSelectedLevel] = useState(level);
  const [memoText, setMemoText] = useState(memo);
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  const { taskId } = useParams();
  const { mutate: completeTaskMutate } = useCompleteTask();

  const formatTimeUnit = (value: number) => value.toString().padStart(2, '0');

  useEffect(() => {
    const isSame =
      task === taskName &&
      inputHour === hour &&
      inputMinute === minute &&
      selectedLevel === level &&
      memoText === memo;
    setIsChanged(!isSame);
  }, [task, inputHour, inputMinute, selectedLevel, memoText]);

  const handleClick = () => {
    if (isEdit && isChanged) {
      onSubmit?.({
        task,
        hour: inputHour,
        minute: inputMinute,
        level: selectedLevel as '상' | '중' | '하',
        memo: memoText,
      });
    }

    if (!isEdit && taskId) {
      completeTaskMutate(Number(taskId));
    }
  };

  return (
    <div className={styles.detailWrapper}>
      <section className={styles.fieldGroup}>
        <FieldLabel label="할 일" />
        {isEdit ? (
          <input
            className={styles.inputField}
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        ) : (
          <p className={styles.textField}>{task}</p>
        )}

        <FieldLabel label="예상 소요 시간" />
        {isEdit ? (
          <div className={styles.timeGroup}>
            <input
              className={styles.timeInput}
              value={formatTimeUnit(inputHour)}
              readOnly
              onClick={() => setIsTimeModalOpen(true)}
            />
            <span className={styles.timeUnit}>H</span>
            <input
              className={styles.timeInput}
              value={formatTimeUnit(inputMinute)}
              readOnly
              onClick={() => setIsTimeModalOpen(true)}
            />
            <span className={styles.timeUnit}>M</span>
          </div>
        ) : (
          <p className={styles.textField}>
            {formatTimeUnit(inputHour)}H {formatTimeUnit(inputMinute)}M
          </p>
        )}

        <FieldLabel label="중요도" />
        {isEdit ? (
          <div className={styles.levelGroup}>
            {['상', '중', '하'].map((lvl) => (
              <button
                key={lvl}
                className={`${styles.levelButton} ${
                  selectedLevel === lvl ? styles.levelButtonActive : ''
                }`}
                onClick={() => setSelectedLevel(lvl)}
                type="button"
              >
                {lvl}
              </button>
            ))}
          </div>
        ) : (
          <p className={styles.textField}>{selectedLevel}</p>
        )}

        <FieldLabel label="메모" />
        {isEdit ? (
          <textarea
            className={styles.memoInput}
            value={memoText}
            placeholder="메모를 입력하세요."
            onChange={(e) => setMemoText(e.target.value)}
          />
        ) : memoText.trim() ? (
          <p className={styles.memoText}>{memoText}</p>
        ) : (
          <p className={styles.memoPlaceholder}>작성된 메모가 없습니다.</p>
        )}
      </section>

      <div className={styles.fixedFooter}>
        <button
          className={styles.submitButton}
          onClick={handleClick}
          disabled={(isEdit && !isChanged) || (!isEdit && done)}
        >
          {isEdit ? '저장' : '완료'}
        </button>
      </div>

      {isEdit && isTimeModalOpen && (
        <TaskEditTimeModal
          onClose={() => setIsTimeModalOpen(false)}
          defaultHour={inputHour}
          defaultMinute={inputMinute}
          onConfirm={(h, m) => {
            setInputHour(h);
            setInputMinute(m);
            setIsTimeModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

function FieldLabel({ label }: { label: string }) {
  return <p className={styles.fieldLabel}>{label}</p>;
}
