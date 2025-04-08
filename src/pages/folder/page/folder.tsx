import { useNavigate } from 'react-router-dom';

import TaskGroup from '@pages/folder/components/task-group/task-group';
import { IcCommonBack, IcCommonKebab } from '@shared/assets/svgs';
import Header from '@shared/components/header/header';
import { gfColorMap } from '@shared/utils/color-map';

import { mockTaskData } from '../mocks/tasks';

import * as styles from './folder.css';

export default function FolderPage() {
  const {
    folderName,
    goalName,
    color,
    progressTasks,
    doneTasks,
    progressCount,
    doneCount,
  } = mockTaskData;

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.pageWrapper}>
      <Header
        leftSlot={
          <IcCommonBack
            width={24}
            height={24}
            onClick={handleGoBack}
            className={styles.backButton}
          />
        }
        centerSlot={<h1 className={styles.folderTitle}>{folderName}</h1>}
        rightSlot={<IcCommonKebab width={24} height={24} />}
      />
      <p className={styles.goalName} style={{ color: gfColorMap[color] }}>
        {goalName}
      </p>

      <main className={styles.taskSection}>
        <TaskGroup
          title="진행"
          tasks={progressTasks}
          count={progressCount}
          color={color}
          showAddButton
          onAddClick={() => {
            console.log('할 일 추가 모달 열기');
          }}
        />
        <TaskGroup
          title="완료"
          tasks={doneTasks}
          count={doneCount}
          isDone
          color={color}
        />
      </main>
    </div>
  );
}
