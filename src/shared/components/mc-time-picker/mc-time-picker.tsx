import { useState } from 'react';

import { IcCommonBack } from '@shared/assets/svgs';

import McScrollPicker from '../scroll-picker/scroll-picker';

import * as styles from './mc-time-picker.css';

interface McTimePickerProps {
  onClose: () => void;
  onBack: () => void;
  confirmText?: string;
  onConfirm: (hour: number, minute: number) => void;
  defaultHour?: number;
  defaultMinute?: number;
}

const HOUR_OPTIONS = Array.from({ length: 13 }, (_, i) => i);
const MINUTE_OPTIONS = [0, 10, 20, 30, 40, 50];

export default function McTimePicker({
  onBack,
  confirmText = '다음',
  onConfirm,
  defaultHour = 0,
  defaultMinute = 0,
}: McTimePickerProps) {
  const [selectedHour, setSelectedHour] = useState(defaultHour);
  const [selectedMinute, setSelectedMinute] = useState(defaultMinute);

  const handleConfirm = () => {
    onConfirm(selectedHour, selectedMinute);
  };

  // 시간 변경 핸들러
  const handleHourChange = (hour: number) => {
    setSelectedHour(hour);
  };

  // 분 변경 핸들러
  const handleMinuteChange = (minute: number) => {
    setSelectedMinute(minute);
  };

  return (
    <>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={onBack}>
          <IcCommonBack width={24} />
        </button>
        <h2 className={styles.title}>예상 소요 시간</h2>
        <button className={styles.confirmButton} onClick={handleConfirm}>
          {confirmText}
        </button>
      </header>

      <div className={styles.pickerContainer}>
        <div className={styles.highlight} />
        <div className={styles.pickerWrapper}>
          <McScrollPicker
            items={HOUR_OPTIONS}
            selected={selectedHour}
            onChange={handleHourChange}
            unit="H"
          />
          <McScrollPicker
            items={MINUTE_OPTIONS}
            selected={selectedMinute}
            onChange={handleMinuteChange}
            unit="M"
          />
        </div>
      </div>
    </>
  );
}
