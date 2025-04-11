import { Route, Routes } from 'react-router-dom';

import { routePath } from '@shared/constants/path';

import GlobalLayout from './global-layout';
import {
  FolderPage,
  GoalPage,
  OnboardingPage,
  TaskEditPage,
  TaskPage,
} from './lazy';
import { ProtectedRoute } from './protected-route';
import RootRedirect from './root-direct';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />

      <Route path={routePath.ONBOARDING} element={<OnboardingPage />} />

      <Route element={<ProtectedRoute protect />}>
        <Route element={<GlobalLayout />}>
          <Route path={routePath.GOAL} element={<GoalPage />} />
          <Route path={routePath.FOLDER} element={<FolderPage />} />
          <Route path={routePath.TASK} element={<TaskPage />} />
          <Route path={routePath.TASK_EDIT} element={<TaskEditPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
