import ThemeProvider from '@shared/styles/themeProvider';
import { BrowserRouter } from 'react-router-dom';
import Router from '@shared/router/router';
import { rootStyle } from '@shared/styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className={rootStyle}>
          <Router />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
