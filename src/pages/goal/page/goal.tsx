import { IcCommonHamburger24, IcCommonPlus } from '@shared/assets/svgs';
import Header from '@shared/components/header/header';
import McList from '@shared/components/mc-list/mc-list';
import { ModalContainer } from '@shared/components/modal-container/modal-container';

import AddGoalFlow from '../components/add-goal-flow/add-goal-flow';
import GoalGroup from '../components/goal-group/goal-group';
import { GOAL_LIST_ITEMS } from '../constants/goal-list-items';
import { useGoalModal } from '../hooks/use-goal-modal';
import { mockGoalGroups } from '../mocks/goal-group';

import * as styles from './goal.css';

export default function GoalPage() {
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

  const renderModal = () => {
    if (modalType === 'list') {
      return (
        <ModalContainer onClose={closeModal}>
          <McList
            title="새로 추가하기"
            items={GOAL_LIST_ITEMS}
            onItemClick={(id) => {
              if (id === 'goal') openModal('input-goal');
              else if (id === 'folder') openModal('input-folder');
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
        {mockGoalGroups.map((group) => (
          <GoalGroup
            key={group.id}
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
