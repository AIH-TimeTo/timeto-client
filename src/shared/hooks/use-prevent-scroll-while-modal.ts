import { useEffect } from 'react';

export const usePreventScrollWhileModal = () => {
  useEffect(() => {
    const scrollY = window.scrollY;
    const originalStyle = window.getComputedStyle(document.body).overflow;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflowY = 'hidden';
    document.body.style.width = '100%';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflowY = originalStyle;
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, []);
};
