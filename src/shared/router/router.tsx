import { Route, Routes } from 'react-router-dom';
import { GoalPage } from './lazy';
import GlobalLayout from './global-layout'
import { routePath } from '@shared/constants/path';

export default function Router() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path={routePath.GOAL} element={<GoalPage />} />
      </Route>
    </Routes>
  );
}
