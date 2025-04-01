import { ReactNode } from 'react';
import * as styles from './goal-group.css';
import { IcGoalPinFill, IcCommonKebab } from '@shared/assets/svgs';
import { FolderColorType } from '../../types/goal';

interface GoalGroupProps {
  goalName: string;
  color: FolderColorType;
  children: ReactNode;
}

export default function GoalGroup({
  goalName,
  color,
  children,
}: GoalGroupProps) {
  return (
    <section className={styles.goalGroupWrapper}>
      <header className={styles.goalGroupHeader}>
        <div className={styles.pinWithTitle}>
          <IcGoalPinFill
            width={24}
            height={24}
            className={styles.fontColorMap[color]}
          />
          <h2 className={styles.title}>{goalName}</h2>
        </div>
        <IcCommonKebab className={styles.kebabIcon} width={20} height={20} />
      </header>
      <div className={styles.folderList}>{children}</div>
    </section>
  );
}
