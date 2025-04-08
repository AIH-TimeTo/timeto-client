import {
  IcCommonPlus, // ✅ 추가
  IcFolderComplete,
  IcFolderProgress,
} from '@shared/assets/svgs';
import { FbColorKey, tbColorMap } from '@shared/utils/color-map';

import { Task } from '../../types/task';
import TaskItem from '../task-item/task-item';

import * as styles from './task-group.css';

interface TaskGroupProps {
  title: string;
  count: number;
  tasks: Task[];
  color: FbColorKey;
  isDone?: boolean;
  showAddButton?: boolean;
  onAddClick?: () => void;
}

export default function TaskGroup({
  title,
  count,
  tasks,
  color,
  isDone = false,
  showAddButton = false,
  onAddClick,
}: TaskGroupProps) {
  const isOnly = tasks.length === 1;

  return (
    <section>
      <div className={styles.groupHeader}>
        {isDone ? (
          <IcFolderComplete width={24} height={24} />
        ) : (
          <IcFolderProgress width={24} height={24} />
        )}
        <span className={styles.title}>
          {title} ({count}개)
        </span>
        {showAddButton && (
          <IcCommonPlus
            width={20}
            height={20}
            className={styles.addButton}
            onClick={onAddClick}
          />
        )}
      </div>

      <div
        className={styles.list}
        style={{
          border: `2px solid ${tbColorMap[color]}`,
        }}
      >
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            isDone={isDone}
            color={color}
            isOnly={isOnly}
            isFirst={index === 0}
            isLast={index === tasks.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
