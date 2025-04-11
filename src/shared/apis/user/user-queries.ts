import { fetchUserInfo } from '@shared/apis/user/user';

export const USER_QUERY_KEY = {
  INFO: ['user', 'info'] as const,
};

export const USER_QUERY_OPTION = {
  INFO: {
    queryKey: USER_QUERY_KEY.INFO,
    queryFn: fetchUserInfo,
    retry: false,
    staleTime: 1000 * 60 * 5,
  },
};
