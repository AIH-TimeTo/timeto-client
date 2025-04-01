import { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

import { IcGoalHamburger20 } from '@shared/assets/svgs';
import { tbColorMap } from '@shared/utils/color-map';

import * as styles from './folder-item.css';

export interface FolderItemProps {
  folderName: string;
  taskCount: number;
  color: keyof typeof tbColorMap;
  isFirst?: boolean;
  isLast?: boolean;
  isOnly?: boolean;
  isOverlay?: boolean;
  dragHandleProps?: HTMLAttributes<HTMLDivElement>;
}

export default function FolderItem({
  folderName,
  taskCount,
  color,
  isFirst = false,
  isLast = false,
  isOnly = false,
  dragHandleProps,
}: FolderItemProps) {
  return (
    <div
      {...dragHandleProps}
      className={clsx(
        styles.folderItemBase,
        isOnly && styles.only,
        isFirst && !isOnly && styles.first,
        isLast && !isOnly && styles.last,
        !isFirst && !isOnly && styles.divider,
      )}
      style={{ backgroundColor: tbColorMap[color] }}
    >
      <div className={styles.row}>
        <div className={styles.hamburger} style={{ touchAction: 'none' }}>
          <IcGoalHamburger20 width={20} height={20} />
        </div>
        <div className={styles.textGroup}>
          <p className={styles.folderName}>{folderName}</p>
          <p className={styles.taskCount}>할 일 {taskCount}개</p>
        </div>
      </div>
    </div>
  );
}
