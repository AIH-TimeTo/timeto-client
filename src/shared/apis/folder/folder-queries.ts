import { queryOptions } from '@tanstack/react-query';

import { fetchFolders } from './folder';

export const FOLDER_QUERY_KEY = {
  ALL: ['folders'],
  LIST: () => ['folders', 'list'],
} as const;

export const FOLDER_QUERY_OPTION = {
  LIST: () =>
    queryOptions({
      queryKey: FOLDER_QUERY_KEY.LIST(),
      queryFn: fetchFolders,
    }),
};
