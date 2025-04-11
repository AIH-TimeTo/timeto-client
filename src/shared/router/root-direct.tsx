import { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import { routePath } from '@shared/constants/path';
import { useUserInfo } from '@shared/hooks/use-user-info';

export default function RootRedirect() {
  const { isLoading, data } = useUserInfo(); // 로그인 여부 판단
  const location = useLocation();
  const navigate = useNavigate();

  // URL 쿼리로 token 전달된 경우 저장
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    if (token) {
      localStorage.setItem('accessToken', token);
      navigate(routePath.GOAL, { replace: true });
    }
  }, [location.search, navigate]);

  if (isLoading) return null;

  // 로그인 상태라면 /goal로 이동
  if (data) {
    return <Navigate to={routePath.GOAL} replace />;
  }

  // 로그인 안 된 상태라면 /onboarding(혹은 /login)으로 이동
  return <Navigate to={routePath.ONBOARDING} replace />;
}
