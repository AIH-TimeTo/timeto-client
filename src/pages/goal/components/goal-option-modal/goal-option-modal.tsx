import {
  IcCommonGarbage,
  IcCommonPalette,
  IcCommonRename,
} from '@shared/assets/svgs';
import McList from '@shared/components/mc-list/mc-list';
import { ModalContainer } from '@shared/components/modal-container/modal-container';
import { themeVars } from '@shared/styles';

interface GoalOptionModalProps {
  goalName: string;
  onClose: () => void;
  onClickRename: () => void;
  onClickChangeColor: () => void;
  onClickDelete: () => void;
}

export default function GoalOptionModal({
  goalName,
  onClose,
  onClickRename,
  onClickChangeColor,
  onClickDelete,
}: GoalOptionModalProps) {
  return (
    <ModalContainer onClose={onClose}>
      <McList
        title={goalName}
        items={[
          {
            id: 'rename',
            label: '이름 변경하기',
            leftIcon: <IcCommonRename width={24} />,
            showRightArrow: true,
          },
          {
            id: 'color',
            label: '색상 변경하기',
            leftIcon: <IcCommonPalette width={24} />,
            showRightArrow: true,
          },
          {
            id: 'delete',
            label: '삭제하기',
            leftIcon: <IcCommonGarbage width={24} />,
            labelColor: themeVars.color.redDelete,
          },
        ]}
        onItemClick={(id) => {
          if (id === 'rename') onClickRename();
          if (id === 'color') onClickChangeColor();
          if (id === 'delete') onClickDelete();
        }}
      />
    </ModalContainer>
  );
}
