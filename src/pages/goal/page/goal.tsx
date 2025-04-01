import Header from '@shared/components/header/header';
import { IcCommonHamburger24, IcCommonPlus } from '@shared/assets/svgs/index';
import GoalGroup from '../components/goal-group/goal-group';
import FolderItem from '../components/folder-item/folder-item';
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
          >
            {group.folders.map((folder, index) => (
              <FolderItem
                key={folder.id}
                folderName={folder.folderName}
                taskCount={folder.taskCount}
                color={folder.color}
                isOnly={group.folders.length === 1}
                isFirst={index === 0}
                isLast={index === group.folders.length - 1}
              />
            ))}
          </GoalGroup>
        ))}
      </main>
    </>
  );
}
