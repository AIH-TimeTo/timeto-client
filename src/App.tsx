import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Router from '@shared/router/router';
import { rootStyle } from '@shared/styles';
import ThemeProvider from '@shared/styles/themeProvider';

import { queryClient } from './shared/utils/query-client';

function App() {
  useEffect(() => {
    const setScreenSize = () => {
      // vh 계산
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);

      // max-width 제한
      const windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      const maxWidth = Math.min(375, windowWidth);
      document.documentElement.style.setProperty(
        '--app-max-width',
        `${maxWidth}px`,
      );
    };

    setScreenSize(); // 처음 렌더링 시 호출
    window.addEventListener('resize', setScreenSize); // 리사이즈에도 반응

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <div className={rootStyle}>
            <Router />
          </div>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
