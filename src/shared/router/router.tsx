import { Route, Routes } from 'react-router-dom';
import { GoalPage } from './lazy';
import { routePath } from '@shared/constants/path';

export default function Router() {
  return (
    <Routes>
      <Route path={routePath.GOAL} element={<GoalPage />} />
    </Routes>
  );
}
