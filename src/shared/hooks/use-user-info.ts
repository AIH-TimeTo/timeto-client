import { useQuery } from '@tanstack/react-query';

import { USER_QUERY_OPTION } from '@shared/apis/user/user-queries';
import { GetUserInfoResponse } from '@shared/types/user-response';

export const useUserInfo = () => {
  return useQuery<GetUserInfoResponse, Error>(USER_QUERY_OPTION.INFO);
};
