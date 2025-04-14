import { useMutation } from '@tanstack/react-query';

import { deleteUser } from '@shared/apis/user/user';

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: deleteUser,
  });
};
