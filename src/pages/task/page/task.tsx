import { useNavigate, useParams } from 'react-router-dom';

import { IcCommonBack, IcCommonKebab } from '@shared/assets/svgs';
import Header from '@shared/components/header/header';
import { gfColorMap, parseToGfColorKey } from '@shared/utils/color-map';

import TaskDeleteModal from '../components/task-delete-modal/task-delete-modal';
import TaskDetail from '../components/task-detail/task-detail';
import TaskOptionModal from '../components/task-option-modal/task-option-modal';
import { useTaskDetail } from '../hooks/use-task-detail';
import { useTaskOptionModal } from '../hooks/use-task-option-modal';
import { useTaskOptions } from '../hooks/use-task-options';

import * as styles from './task.css';

export default function TaskPage() {
  const navigate = useNavigate();
  const { taskId } = useParams();

  const {
    modalStep,
    selectedTaskId,
    selectedTaskName,
    openOptionModal,
    openDeleteModal,
    closeModal,
  } = useTaskOptionModal();

  const { data, isLoading, isError } = useTaskDetail(taskId);
  const { deleteTaskMutate } = useTaskOptions();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    if (!taskId) return;
    navigate(`/task/${taskId}/edit`);
  };

  const handleDelete = () => {
    if (!taskId) return;

    deleteTaskMutate(Number(taskId), {
      onSuccess: (res) => {
        const folderId = res.data.folderId;
        closeModal();
        navigate(`/folder/${folderId}`);
      },
    });
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>에러 발생</div>;

  const { taskName, goalName, color, hour, minute, memo, level, done } =
    data.data;
  const gfColor = parseToGfColorKey(color);

  return (
    <div className={styles.pageWrapper}>
      {/* 헤더 */}
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

      {/* 목표명 */}
      <p className={styles.goalName} style={{ color: gfColorMap[gfColor] }}>
        {goalName}
      </p>

      {/* 상세 정보 */}
      <TaskDetail
        isEdit={false}
        taskName={taskName}
        goalName={goalName}
        hour={hour}
        minute={minute}
        level={level === 'HIGH' ? '상' : level === 'MIDDLE' ? '중' : '하'}
        memo={memo || ''}
        color={gfColor}
        done={done}
      />

      {/* 옵션 모달 */}
      {modalStep === 'option' && selectedTaskId === Number(taskId) && (
        <TaskOptionModal
          taskName={selectedTaskName}
          onClose={closeModal}
          onClickEdit={handleEdit}
          onClickDelete={openDeleteModal}
        />
      )}

      {/* 삭제 확인 모달 */}
      {modalStep === 'delete' && selectedTaskId === Number(taskId) && (
        <TaskDeleteModal onClose={closeModal} onConfirm={handleDelete} />
      )}
    </div>
  );
}
