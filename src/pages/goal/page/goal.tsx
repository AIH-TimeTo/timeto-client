import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { createFolder } from '@shared/apis/folder/folder';
import { GOAL_QUERY_OPTION } from '@shared/apis/goal/goal-queries';
import {
  IcCommonHamburger24,
  IcCommonPlus,
  IcGoalPinFill,
} from '@shared/assets/svgs';
import Header from '@shared/components/header/header';
import McInput from '@shared/components/mc-input/mc-input';
import McList from '@shared/components/mc-list/mc-list';
import { ModalContainer } from '@shared/components/modal-container/modal-container';
import { gfColorMap, parseToGfColorKey } from '@shared/utils/color-map';
import { truncateText } from '@shared/utils/truncate-text';

import AddGoalFlow from '../components/add-goal-flow/add-goal-flow';
import GoalGroup from '../components/goal-group/goal-group';
import { GOAL_LIST_ITEMS } from '../constants/goal-list-items';
import { useFolderModal } from '../hooks/use-folder-modal';
import { useGoalModal } from '../hooks/use-goal-modal';
import { mapGoalResponse } from '../utils/goal-mapper';

import * as styles from './goal.css';

export default function GoalPage() {
  const queryClient = useQueryClient();

  const {
    modalType,
    goalName,
    goalColor,
    openModal,
    closeModal,
    goBack,
    setGoalName,
    setGoalColor,
  } = useGoalModal();

  const {
    modalType: folderModalType,
    selectedGoalId,
    selectedGoalName,
    openModal: openFolderModal,
    closeModal: closeFolderModal,
    goBack: goBackFolder,
    selectGoal,
    resetFolderModal,
  } = useFolderModal();

  const { data } = useQuery(GOAL_QUERY_OPTION.LIST());
  const mappedGoals = data ? mapGoalResponse(data.data.goalsFoldersList) : [];

  const { mutate: createFolderMutate } = useMutation({
    mutationFn: createFolder,
    onSuccess: () => {
      queryClient.invalidateQueries();
      closeFolderModal();
    },
    onError: (err) => {
      console.error('폴더 생성 실패', err);
    },
  });

  const renderModal = () => {
    if (modalType === 'list') {
      return (
        <ModalContainer onClose={closeModal}>
          <McList
            title="새로 추가하기"
            items={GOAL_LIST_ITEMS}
            onItemClick={(id) => {
              if (id === 'goal') openModal('input-goal');
              else if (id === 'folder') {
                closeModal();
                openFolderModal('list');
              }
            }}
          />
        </ModalContainer>
      );
    }

    if (modalType === 'input-goal' || modalType === 'palette') {
      return (
        <AddGoalFlow
          modalType={modalType}
          goalName={goalName}
          goalColor={goalColor}
          onSetName={setGoalName}
          onSetColor={setGoalColor}
          onBack={goBack}
          onNext={openModal}
          onClose={closeModal}
        />
      );
    }

    if (folderModalType === 'list') {
      return (
        <ModalContainer onClose={closeFolderModal}>
          <McList
            title="새로 폴더 추가하기"
            showBackButton={true}
            onBack={() => {
              resetFolderModal();
              openModal('list');
            }}
            items={mappedGoals.map((goal) => ({
              id: goal.goalId.toString(),
              label: goal.goalName,
              leftIcon: (
                <IcGoalPinFill
                  width={24}
                  height={24}
                  style={{ color: gfColorMap[parseToGfColorKey(goal.color)] }}
                />
              ),
              showRightArrow: true,
            }))}
            onItemClick={(id) => {
              const selected = mappedGoals.find((g) => g.goalId === Number(id));
              if (selected) {
                selectGoal(selected.goalId, selected.goalName);
              }
            }}
          />
        </ModalContainer>
      );
    }

    if (
      folderModalType === 'input-folder' &&
      selectedGoalId &&
      selectedGoalName
    ) {
      return (
        <ModalContainer onClose={closeFolderModal}>
          <McInput
            title={`'${truncateText(selectedGoalName, 10)}'에 폴더 추가하기`}
            placeholder="폴더 이름을 입력하세요"
            confirmText="저장"
            showBackButton
            onBack={goBackFolder}
            onConfirm={(value) => {
              if (!value) return;
              createFolderMutate({ folderName: value, goalId: selectedGoalId });
            }}
          />
        </ModalContainer>
      );
    }

    return null;
  };

  return (
    <>
      <Header
        leftSlot={
          <div className={styles.iconButtonPadding}>
            <IcCommonHamburger24 height={14} />
          </div>
        }
        centerSlot={<h1 className={styles.goalPageTitle}>내 목표</h1>}
        rightSlot={
          <button onClick={() => openModal('list')}>
            <IcCommonPlus width={24} height={24} />
          </button>
        }
      />

      <main>
        {mappedGoals.map((group) => (
          <GoalGroup
            key={group.goalName}
            goalId={group.goalId}
            goalName={group.goalName}
            color={group.color}
            folders={group.folders}
          />
        ))}
      </main>

      {renderModal()}
    </>
  );
}
