import { useQuery } from '@tanstack/react-query';

import { fetchFolderDetail } from '@shared/apis/folder/folder';

export const useFolderDetail = (folderId: string | undefined) => {
  return useQuery({
    queryKey: ['folderDetail', folderId],
    queryFn: () => fetchFolderDetail(Number(folderId)),
    enabled: !!folderId,
  });
};
