// components/task-detail.tsx
import { useState } from 'react';

import { gfColorMap } from '@shared/utils/color-map';

import TaskEditTimeModal from '../task-edit-time-modal/task-edit-time-modal';

import * as styles from './task-detail.css';

interface TaskDetailProps {
  isEdit: boolean;
  taskName: string;
  goalName: string;
  hour: string;
  minute: string;
  level: string;
  memo: string;
  color: keyof typeof gfColorMap;
  onSubmit?: () => void;
}

export default function TaskDetail({
  isEdit,
  taskName,
  hour,
  minute,
  level,
  memo,
  onSubmit,
}: TaskDetailProps) {
  const [task, setTask] = useState(taskName);
  const [inputHour, setInputHour] = useState(Number(hour));
  const [inputMinute, setInputMinute] = useState(Number(minute));
  const [selectedLevel, setSelectedLevel] = useState(level);
  const [memoText, setMemoText] = useState(memo);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const formatTimeUnit = (value: number) => value.toString().padStart(2, '0');

  const handleClick = () => {
    if (isEdit) {
      onSubmit?.();
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        alert('할 일이 완료되었습니다!');
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div className={styles.detailWrapper}>
      <section className={styles.fieldGroup}>
        {/* 할 일 */}
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

        {/* 소요 시간 */}
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
              value={inputMinute}
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

        {/* 중요도 */}
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

        {/* 메모 */}
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

      {/* 완료 or 저장 버튼 */}
      <div className={styles.fixedFooter}>
        <button
          className={styles.submitButton}
          onClick={handleClick}
          disabled={isSubmitting}
        >
          {isEdit ? '저장' : '완료'}
        </button>
      </div>

      {/* 소요 시간 모달 */}
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
