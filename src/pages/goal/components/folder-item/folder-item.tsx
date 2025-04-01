import { clsx } from 'clsx';
import * as styles from './folder-item.css';
import { IcGoalHamburger20 } from '@shared/assets/svgs';

interface FolderItemProps {
  folderName: string;
  taskCount: number;
  color: keyof typeof styles.colorMap;
  isFirst?: boolean;
  isLast?: boolean;
  isOnly?: boolean;
}

export default function FolderItem({
  folderName,
  taskCount,
  color,
  isFirst = false,
  isLast = false,
  isOnly = false,
}: FolderItemProps) {
  return (
    <div
      className={clsx(
        styles.folderItemBase,
        styles.colorMap[color],
        isOnly && styles.only,
        isFirst && !isOnly && styles.first,
        isLast && !isOnly && styles.last,
        !isFirst && !isOnly && styles.divider,
      )}
    >
      <div className={styles.row}>
        <div className={styles.hamburger}>
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
