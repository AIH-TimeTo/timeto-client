import { useLocation, useNavigate } from 'react-router-dom';

/**
 * 현재 경로가 목적지와 같으면 navigate 생략하고 onClose만 실행.
 * 다르면 navigate 후 onClose.
 */
export const useNavigateWithClose = (onClose: () => void) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (destinationPath: string) => {
    if (location.pathname === destinationPath) {
      onClose();
    } else {
      navigate(destinationPath);
      onClose();
    }
  };
};
