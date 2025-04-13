import { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import { routePath } from '@shared/constants/path';

export default function RootRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    if (token) {
      localStorage.setItem('accessToken', token);
      navigate(routePath.GOAL, { replace: true });
    }
  }, [location.search, navigate]);

  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    return <Navigate to={routePath.GOAL} replace />;
  }

  return <Navigate to={routePath.ONBOARDING} replace />;
}
