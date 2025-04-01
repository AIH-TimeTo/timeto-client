import { IcCommonHamburger24, IcCommonPlus } from '@shared/assets/svgs/index';
import Header from '@shared/components/header/header';

import GoalGroup from '../components/goal-group/goal-group';
import { mockGoalGroups } from '../mocks/goal-group';

import * as styles from './goal.css';

export default function GoalPage() {
  return (
    <>
      <Header
        leftSlot={
          <div className={styles.iconButtonPadding}>
            <IcCommonHamburger24 height={14} />
          </div>
        }
        centerSlot={<h1 className={styles.goalPageTitle}>내 목표</h1>}
        rightSlot={<IcCommonPlus width={24} height={24} />}
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
    </>
  );
}
