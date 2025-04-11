import { Navigate } from 'react-router-dom';

import { routePath } from '@shared/constants/path';
import { useUserInfo } from '@shared/hooks/use-user-info';

export default function RootRedirect() {
  const { isLoading } = useUserInfo();

  if (isLoading) return null;

  return <Navigate to={routePath.GOAL} replace />;
}
