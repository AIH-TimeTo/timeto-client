import { lazy } from 'react';

export const GoalPage = lazy(() => import('@pages/goal/page/goal'));
export const FolderPage = lazy(() => import('@pages/folder/page/folder'));
export const TaskPage = lazy(() => import('@pages/task/page/task'));
export const TaskEditPage = lazy(() => import('@pages/task/page/task-edit'));
export const OnboardingPage = lazy(
  () => import('@pages/onboarding/page/onboarding'),
);
