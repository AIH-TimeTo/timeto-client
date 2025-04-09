import { useNavigate, useParams } from 'react-router-dom';

import TaskGroup from '@pages/folder/components/task-group/task-group';
import { IcCommonBack, IcCommonKebab } from '@shared/assets/svgs';
import Header from '@shared/components/header/header';
import {
  gfColorMap,
  parseToGfColorKey,
  parseToTbColorKey,
} from '@shared/utils/color-map';

import FolderDeleteModal from '../components/folder-delete-modal/folder-delete-modal';
import FolderNameEditModal from '../components/folder-edit-name-modal/folder-edit-name-modal';
import FolderOptionModal from '../components/folder-option-modal/folder-option-modal';
import { useFolderDetail } from '../hooks/use-folder-detail';
import { useFolderOptionModal } from '../hooks/use-folder-option-modal';
import { useFolderOptions } from '../hooks/use-folder-options';

import * as styles from './folder.css';

export default function FolderPage() {
  const { folderId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useFolderDetail(folderId);

  const {
    modalStep,
    selectedFolderId,
    selectedFolderName,
    openOptionModal,
    openEditNameModal,
    openDeleteModal,
    closeModal,
    setSelectedFolderName,
  } = useFolderOptionModal();

  const { updateFolderName, deleteFolderMutate } = useFolderOptions({
    onClose: closeModal,
    setSelectedFolderName,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>에러 발생</div>;

  const {
    folderName,
    goalName,
    color,
    progressTasks,
    doneTasks,
    progressCount,
    doneCount,
  } = data.data;

  const parsedGfColor = parseToGfColorKey(color);
  const parsedTbColor = parseToTbColorKey(color);

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
            className={styles.HeaderButton}
          />
        }
        centerSlot={<h1 className={styles.folderTitle}>{folderName}</h1>}
        rightSlot={
          <IcCommonKebab
            width={24}
            height={24}
            className={styles.HeaderButton}
            onClick={() => openOptionModal(Number(folderId), folderName)}
          />
        }
      />

      <p
        className={styles.goalName}
        style={{ color: gfColorMap[parsedGfColor] }}
      >
        {goalName}
      </p>

      <main className={styles.taskSection}>
        <TaskGroup
          title="진행"
          tasks={progressTasks}
          count={progressCount}
          color={parsedTbColor}
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
          color={parsedTbColor}
        />
      </main>

      {modalStep === 'option' && selectedFolderId === Number(folderId) && (
        <FolderOptionModal
          folderName={selectedFolderName}
          onClose={closeModal}
          onClickRename={openEditNameModal}
          onClickDelete={openDeleteModal}
        />
      )}

      {modalStep === 'edit-name' && selectedFolderId === Number(folderId) && (
        <FolderNameEditModal
          defaultName={selectedFolderName}
          onClose={closeModal}
          onBack={openOptionModal.bind(null, Number(folderId), folderName)}
          onConfirm={(newName) => {
            updateFolderName({
              folderId: Number(folderId),
              folderName: newName,
            });
          }}
        />
      )}

      {modalStep === 'delete' && selectedFolderId === Number(folderId) && (
        <FolderDeleteModal
          onClose={closeModal}
          onConfirm={() => {
            deleteFolderMutate(Number(folderId));
          }}
        />
      )}
    </div>
  );
}
