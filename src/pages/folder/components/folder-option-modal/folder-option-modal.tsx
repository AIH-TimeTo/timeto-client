import { IcCommonGarbage, IcCommonRename } from '@shared/assets/svgs';
import McList from '@shared/components/mc-list/mc-list';
import { ModalContainer } from '@shared/components/modal-container/modal-container';
import { themeVars } from '@shared/styles';

interface FolderOptionModalProps {
  folderName: string;
  onClose: () => void;
  onClickRename: () => void;
  onClickDelete: () => void;
}

export default function FolderOptionModal({
  folderName,
  onClose,
  onClickRename,
  onClickDelete,
}: FolderOptionModalProps) {
  return (
    <ModalContainer onClose={onClose}>
      <McList
        title={folderName}
        items={[
          {
            id: 'rename',
            label: '이름 변경하기',
            leftIcon: <IcCommonRename width={24} />,
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
          if (id === 'delete') onClickDelete();
        }}
      />
    </ModalContainer>
  );
}
