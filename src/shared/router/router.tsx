import { Route, Routes } from 'react-router-dom';

import { routePath } from '@shared/constants/path';

import GlobalLayout from './global-layout';
import { FolderPage, GoalPage, OnboardingPage } from './lazy';

export default function Router() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path={routePath.GOAL} element={<GoalPage />} />
        <Route path={routePath.FOLDER} element={<FolderPage />} />{' '}
        <Route path={routePath.ONBOARDING} element={<OnboardingPage />} />
      </Route>
    </Routes>
  );
}
