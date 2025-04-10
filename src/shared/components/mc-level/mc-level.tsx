import { useState } from 'react';

import { IcCommonBack } from '@shared/assets/svgs';

import * as styles from './mc-level.css';

interface McLevelProps {
  onBack: () => void;
  onConfirm: (level: 'HIGH' | 'MIDDLE' | 'LOW') => void;
}

const levelOptions = [
  { id: 'HIGH', label: '상' },
  { id: 'MIDDLE', label: '중' },
  { id: 'LOW', label: '하' },
];

export default function McLevel({ onBack, onConfirm }: McLevelProps) {
  const [selectedLevel, setSelectedLevel] = useState<
    'HIGH' | 'MIDDLE' | 'LOW' | null
  >(null);

  const handleClick = () => {
    if (selectedLevel) {
      onConfirm(selectedLevel);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={onBack}>
          <IcCommonBack width={24} />
        </button>
        <h2 className={styles.title}>중요도</h2>
        <button
          className={styles.confirmButton({ active: !!selectedLevel })}
          onClick={handleClick}
          disabled={!selectedLevel}
        >
          저장
        </button>
      </header>

      <div className={styles.levelContainer}>
        {levelOptions.map(({ id, label }) => (
          <button
            key={id}
            className={
              selectedLevel === id
                ? styles.levelButton.selected
                : styles.levelButton.default
            }
            onClick={() => setSelectedLevel(id as 'HIGH' | 'MIDDLE' | 'LOW')}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}
