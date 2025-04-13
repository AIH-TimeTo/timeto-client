import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { routePath } from '@shared/constants/path';

export const ProtectedRoute = ({ protect = false }) => {
  const location = useLocation();
  const accessToken = localStorage.getItem('accessToken');

  if (protect && !accessToken) {
    return (
      <Navigate to={routePath.ONBOARDING} state={{ from: location }} replace />
    );
  }

  return <Outlet />;
};
