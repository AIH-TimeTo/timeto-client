import { ReactNode } from 'react';

import { IcCommonBack } from '@shared/assets/svgs';

import * as styles from './mc-list.css';

interface ListModalItem {
  id: string;
  label: string;
  leftIcon?: ReactNode;
  showRightArrow?: boolean;
}

interface McListProps {
  title?: string;
  subTitle?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  items: ListModalItem[];
  onItemClick: (id: string) => void;
}

export default function McList({
  title,
  subTitle,
  showBackButton = false,
  onBack,
  items,
  onItemClick,
}: McListProps) {
  return (
    <div className={styles.wrapper}>
      {(title || subTitle) && (
        <header className={styles.header}>
          <div className={styles.titleRow}>
            {showBackButton && (
              <button className={styles.backButton} onClick={onBack}>
                <IcCommonBack width={24} />
              </button>
            )}
            <h2 className={styles.title}>{title}</h2>
          </div>
          {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
        </header>
      )}

      <ul className={styles.list}>
        {items.map(({ id, label, leftIcon, showRightArrow }, index) => {
          const isFirst = index === 0;
          const isLast = index === items.length - 1;
          const itemClass = isFirst
            ? styles.itemTop
            : isLast
              ? styles.itemBottom
              : styles.item;

          return (
            <li
              key={id}
              className={itemClass}
              onClick={(e) => {
                e.stopPropagation(); // ✅ 이벤트 전파 방지!
                onItemClick(id);
              }}
            >
              {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
              <span className={styles.label}>{label}</span>
              {showRightArrow && (
                <div className={styles.rightIcon}>
                  <IcCommonBack width={20} className={styles.rightArrow} />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
