import { Route, Routes } from 'react-router-dom';

import { routePath } from '@shared/constants/path';

import GlobalLayout from './global-layout';
import { GoalPage } from './lazy';

export default function Router() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path={routePath.GOAL} element={<GoalPage />} />
      </Route>
    </Routes>
  );
}
