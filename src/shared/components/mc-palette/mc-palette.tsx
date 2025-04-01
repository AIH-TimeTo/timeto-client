import { useEffect, useState } from 'react';

import { IcCommonBack, IcPaletteCheck } from '@shared/assets/svgs';
import { gfColorMap, tbColorMap } from '@shared/utils/color-map';

import * as styles from './mc-palette.css';

interface McPaletteProps {
  title: string;
  selected: keyof typeof tbColorMap | null;
  onSelect: (color: keyof typeof tbColorMap) => void;
  onBack: () => void;
  onConfirm: () => void;
}

const paletteOrder: (keyof typeof tbColorMap)[] = [
  'RED01',
  'PURPLE01',
  'GREEN01',
  'BLUE01',
  'BROWN01',
  'RED02',
  'PURPLE02',
  'GREEN02',
  'BLUE02',
  'BROWN02',
];

export default function McPalette({
  title,
  selected,
  onSelect,
  onBack,
  onConfirm,
}: McPaletteProps) {
  const [selectedColor, setSelectedColor] = useState<
    keyof typeof tbColorMap | null
  >(selected);

  useEffect(() => {
    setSelectedColor(selected); // 외부 상태 동기화
  }, [selected]);

  const handleSelect = (color: keyof typeof tbColorMap) => {
    setSelectedColor(color);
    onSelect(color); // 부모 상태 동기화
  };

  const handleConfirm = () => {
    if (selectedColor) onConfirm();
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={onBack}>
          <IcCommonBack width={24} height={24} />
        </button>
        <h2 className={styles.title}>{title}</h2>
        <button
          className={styles.confirmButton({ active: !!selectedColor })}
          onClick={handleConfirm}
          disabled={!selectedColor}
        >
          저장
        </button>
      </header>

      <div className={styles.grid}>
        {paletteOrder.map((colorKey) => (
          <button
            key={colorKey}
            className={styles.colorCircle}
            style={{ backgroundColor: tbColorMap[colorKey] }}
            onClick={() => handleSelect(colorKey)}
          >
            {selectedColor === colorKey && (
              <IcPaletteCheck
                width={16}
                height={16}
                style={{
                  color: gfColorMap[colorKey],
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
