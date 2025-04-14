import { useMutation } from '@tanstack/react-query';

import { logoutUser } from '@shared/apis/user/user';

export const useLogout = () => {
  return useMutation({
    mutationFn: logoutUser,
  });
};
