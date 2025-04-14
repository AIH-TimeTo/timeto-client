import { END_POINTS } from '@shared/constants/api';
import { GetUserInfoResponse } from '@shared/types/user-response';
import { handleAuthError } from '@shared/utils/handle-axios-error';

import { apiDelete, apiGet, apiPost } from '../common/methods';

export const fetchUserInfo = async () => {
  try {
    return await apiGet<GetUserInfoResponse>(END_POINTS.GET_USER_INFO);
  } catch (error: unknown) {
    handleAuthError(error);
    throw error;
  }
};

export const logoutUser = () => {
  return apiPost(END_POINTS.POST_USER_LOGOUT);
};

export const deleteUser = () => {
  return apiDelete(END_POINTS.DELETE_USER);
};
