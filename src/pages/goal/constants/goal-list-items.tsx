import { IcCommonFolder, IcGoalPinDefault24 } from '@shared/assets/svgs';

export const GOAL_LIST_ITEMS = [
  {
    id: 'goal',
    label: '목표 추가하기',
    leftIcon: <IcGoalPinDefault24 width={24} />,
    showRightArrow: true,
  },
  {
    id: 'folder',
    label: '폴더 추가하기',
    leftIcon: <IcCommonFolder width={24} />,
    showRightArrow: true,
  },
];
