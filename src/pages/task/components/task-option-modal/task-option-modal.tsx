// components/task-option-modal.tsx
import { IcCommonGarbage, IcCommonRename } from '@shared/assets/svgs';
import McList from '@shared/components/mc-list/mc-list';
import { ModalContainer } from '@shared/components/modal-container/modal-container';
import { themeVars } from '@shared/styles';

interface TaskOptionModalProps {
  taskName: string;
  onClose: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
}

export default function TaskOptionModal({
  taskName,
  onClose,
  onClickEdit,
  onClickDelete,
}: TaskOptionModalProps) {
  return (
    <ModalContainer onClose={onClose}>
      <McList
        title={taskName}
        items={[
          {
            id: 'edit',
            label: '수정하기',
            leftIcon: <IcCommonRename width={24} />,
          },
          {
            id: 'delete',
            label: '삭제하기',
            leftIcon: <IcCommonGarbage width={24} />,
            labelColor: themeVars.color.redDelete,
          },
        ]}
        onItemClick={(id) => {
          if (id === 'edit') onClickEdit();
          if (id === 'delete') onClickDelete();
        }}
      />
    </ModalContainer>
  );
}
