import { useEffect, useState } from 'react';

import { IcCommonBack } from '@shared/assets/svgs';

import * as styles from './mc-input.css';

interface McInputProps {
  title: string;
  placeholder: string;
  confirmText?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  onConfirm: (value: string) => void;
  defaultValue?: string;
}

export default function McInput({
  title,
  placeholder,
  confirmText = '저장',
  showBackButton = false,
  onBack,
  onConfirm,
  defaultValue = '',
}: McInputProps) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleConfirm = () => {
    if (value.trim()) {
      onConfirm(value);
    }
  };

  const isActive = value.trim().length > 0;

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        {showBackButton && (
          <button className={styles.backButton} onClick={onBack}>
            <IcCommonBack width={24} />
          </button>
        )}
        <h2 className={styles.title}>{title}</h2>
        <button
          className={styles.confirmButton({ active: isActive })}
          onClick={handleConfirm}
          disabled={!isActive}
        >
          {confirmText}
        </button>
      </header>

      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
