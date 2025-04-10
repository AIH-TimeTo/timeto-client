import { queryOptions } from '@tanstack/react-query';

import { fetchFolderDetail, fetchFolders } from './folder';

export const FOLDER_QUERY_KEY = {
  ALL: ['folders'],
  LIST: () => ['folders', 'list'],
  DETAIL: (folderId: number) => ['folders', 'detail', folderId],
} as const;

export const FOLDER_QUERY_OPTION = {
  LIST: () =>
    queryOptions({
      queryKey: FOLDER_QUERY_KEY.LIST(),
      queryFn: fetchFolders,
    }),
  DETAIL: (folderId: number) =>
    queryOptions({
      queryKey: FOLDER_QUERY_KEY.DETAIL(folderId),
      queryFn: () => fetchFolderDetail(folderId),
    }),
};
