import { fbColorMap, tbColorMap } from '@shared/utils/color-map';

import { Task } from '../../types/task';

import * as styles from './task-item.css';

interface TaskItemProps {
  task: Task;
  isDone?: boolean;
  color: keyof typeof fbColorMap;
  isFirst?: boolean;
  isLast?: boolean;
  isOnly?: boolean;
}

export default function TaskItem({
  task,
  isDone = false,
  color,
  isFirst = false,
}: TaskItemProps) {
  const { taskName, level, hour, minute, date } = task;
  const time = `${hour ? `${hour}H` : ''} ${minute ? `${minute}M` : ''}`.trim();

  return (
    <div
      className={styles.wrapper({ isDone, isFirst })}
      style={{
        borderTop: isFirst ? 'none' : `2px solid ${tbColorMap[color]}`,
        backgroundColor: fbColorMap[color],
      }}
    >
      <div className={styles.levelBadge({ level, isDone })}>
        {level === 'HIGH' ? '상' : level === 'MID' ? '중' : '하'}
      </div>
      <div className={styles.texts}>
        <p className={styles.taskName({ isDone })}>{taskName}</p>
        <p className={styles.date({ isDone })}>{date}</p>
      </div>
      <div className={styles.time({ isDone })}>{time}</div>
    </div>
  );
}
