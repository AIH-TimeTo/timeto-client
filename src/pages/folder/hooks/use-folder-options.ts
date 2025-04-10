import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteFolder, editFolderName } from '@shared/apis/folder/folder';

interface Props {
  onClose: () => void;
  setSelectedFolderName: (name: string) => void;
}

export const useFolderOptions = ({ onClose, setSelectedFolderName }: Props) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: updateFolderName } = useMutation({
    mutationFn: editFolderName,
    onSuccess: (res) => {
      queryClient.invalidateQueries();
      setSelectedFolderName(res.data.folderName);
      onClose();
    },
    onError: (err) => {
      console.error('폴더 이름 변경 실패', err);
    },
  });

  const { mutate: deleteFolderMutate } = useMutation({
    mutationFn: deleteFolder,
    onSuccess: () => {
      queryClient.invalidateQueries();
      navigate(-1); // 삭제 후 이전 페이지로 이동
    },
    onError: (err) => {
      console.error('폴더 삭제 실패', err);
    },
  });

  return {
    updateFolderName,
    deleteFolderMutate,
  };
};
