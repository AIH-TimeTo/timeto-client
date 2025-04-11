import { useNavigate, useParams } from 'react-router-dom';

import { IcCommonBack, IcCommonKebab } from '@shared/assets/svgs';
import Header from '@shared/components/header/header';
import { gfColorMap } from '@shared/utils/color-map';

import TaskDeleteModal from '../components/task-delete-modal/task-delete-modal';
import TaskDetail from '../components/task-detail/task-detail';
import TaskOptionModal from '../components/task-option-modal/task-option-modal';
import { useTaskOptionModal } from '../hooks/use-task-option-modal';

import * as styles from './task.css';

export default function TaskPage() {
  const navigate = useNavigate();
  const { taskId } = useParams(); // 수정 페이지 이동 시 필요

  // TODO: 추후 조회 API 연결해서 받아올 값
  const taskName = '경쟁사 캠페인 비교';
  const goalName = '자료 조사';
  const gfColor = 'GREEN01';

  const {
    modalStep,
    selectedTaskId,
    selectedTaskName,
    openOptionModal,
    openDeleteModal,
    closeModal,
  } = useTaskOptionModal();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    if (!taskId) return;
    navigate(`/task/${taskId}/edit`);
  };

  const handleDelete = () => {
    // TODO: 삭제 API 호출 후 이동
    alert('삭제되었습니다!');
    closeModal();
    navigate(-1);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* 📌 헤더 */}
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
        rightSlot={
          <IcCommonKebab
            width={24}
            height={24}
            className={styles.HeaderButton}
            onClick={() => openOptionModal(Number(taskId), taskName)}
          />
        }
      />

      {/* 📌 목표명 */}
      <p className={styles.goalName} style={{ color: gfColorMap[gfColor] }}>
        {goalName}
      </p>

      {/* 📌 상세 정보 */}
      <TaskDetail
        isEdit={false}
        taskName={taskName}
        goalName={goalName}
        hour="01"
        minute="30"
        level="상"
        memo=""
        color={gfColor}
      />

      {/* 📌 옵션 모달 */}
      {modalStep === 'option' && selectedTaskId === Number(taskId) && (
        <TaskOptionModal
          taskName={selectedTaskName}
          onClose={closeModal}
          onClickEdit={handleEdit}
          onClickDelete={openDeleteModal}
        />
      )}

      {/* 📌 삭제 확인 모달 */}
      {modalStep === 'delete' && selectedTaskId === Number(taskId) && (
        <TaskDeleteModal onClose={closeModal} onConfirm={handleDelete} />
      )}
    </div>
  );
}
