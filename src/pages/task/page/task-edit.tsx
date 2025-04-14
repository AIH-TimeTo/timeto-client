import { useNavigate, useParams } from 'react-router-dom';
import clsx from 'clsx';

import { IcCommonBack } from '@shared/assets/svgs';
import Header from '@shared/components/header/header';
import { gfColorMap, parseToGfColorKey } from '@shared/utils/color-map';

import TaskDetail from '../components/task-detail/task-detail';
import { useTaskDetail } from '../hooks/use-task-detail';
import { useTaskOptions } from '../hooks/use-task-options';
import { convertLevelToServer } from '../utils/level-map';

import * as styles from './task.css';

export default function TaskEditPage() {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useTaskDetail(taskId);
  const { updateTaskMutate } = useTaskOptions();

  const handleGoBack = () => {
    if (!data) return;
    const folderId = data.data.folderId;
    navigate(`/folder/${folderId}`);
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>에러 발생</div>;

  const { taskName, goalName, color, hour, minute, memo, level } = data.data;
  const gfColor = parseToGfColorKey(color);

  return (
    <div className={clsx(styles.pageWrapper, styles.editBackground)}>
      <Header
        leftSlot={
          <IcCommonBack
            width={24}
            height={24}
            onClick={handleGoBack}
            className={styles.HeaderButton}
          />
        }
        centerSlot={<h1 className={styles.folderTitle}>{taskName}</h1>}
        rightSlot={null}
      />

      <p className={styles.goalName} style={{ color: gfColorMap[gfColor] }}>
        {goalName}
      </p>

      <TaskDetail
        isEdit={true}
        taskName={taskName}
        goalName={goalName}
        hour={hour}
        minute={minute}
        level={level === 'HIGH' ? '상' : level === 'MIDDLE' ? '중' : '하'}
        memo={memo || ''}
        color={gfColor}
        onSubmit={({ task, hour, minute, level, memo }) => {
          updateTaskMutate({
            taskId: Number(taskId),
            taskName: task,
            hour,
            minute,
            level: convertLevelToServer(level as '상' | '중' | '하'),
            memo,
          });
        }}
      />
    </div>
  );
}
