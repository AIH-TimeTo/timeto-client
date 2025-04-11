import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { routePath } from '@shared/constants/path';
import { useUserInfo } from '@shared/hooks/use-user-info';

export const ProtectedRoute = ({ protect = false }) => {
  const location = useLocation();
  const { isLoading, data } = useUserInfo();

  if (isLoading) return null;

  if (protect && !data) {
    return (
      <Navigate to={routePath.ONBOARDING} state={{ from: location }} replace />
    );
  }

  return <Outlet />;
};
