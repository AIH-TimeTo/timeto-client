import { useQuery } from '@tanstack/react-query';

import { FOLDER_QUERY_OPTION } from '@shared/apis/folder/folder-queries';

export const useFolderDetail = (folderId: string | undefined) => {
  return useQuery(FOLDER_QUERY_OPTION.DETAIL(Number(folderId)));
};
