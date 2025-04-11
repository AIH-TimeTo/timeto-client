// pages/task/page/task-edit.tsx
import { useNavigate, useParams } from 'react-router-dom';
import clsx from 'clsx';

import { IcCommonBack } from '@shared/assets/svgs';
import Header from '@shared/components/header/header';
import { gfColorMap } from '@shared/utils/color-map';

import TaskDetail from '../components/task-detail/task-detail';

import * as styles from './task.css';

export default function TaskEditPage() {
  const { taskId } = useParams();
  const navigate = useNavigate();

  // TODO: 추후 API 연결 시 불러올 값
  const taskName = '경쟁사 캠페인 비교';
  const goalName = '자료 조사';
  const gfColor = 'GREEN01';

  const handleGoBack = () => {
    navigate(-1);
  };

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
        rightSlot={null} // ✅ 수정 페이지는 케밥 없음
      />

      <p className={styles.goalName} style={{ color: gfColorMap[gfColor] }}>
        {goalName}
      </p>

      <TaskDetail
        isEdit={true}
        taskName={taskName}
        goalName={goalName}
        hour="01"
        minute="30"
        level="상"
        memo="이전 캠페인 분석 필요"
        color={gfColor}
        onSubmit={() => {
          navigate(`/task/${taskId}`); // 저장 후 조회 페이지로 이동
        }}
      />
    </div>
  );
}
