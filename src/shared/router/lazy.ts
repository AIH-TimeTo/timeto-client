import { lazy } from 'react';

export const GoalPage = lazy(() => import('@pages/goal/page/goal'));
export const FolderPage = lazy(() => import('@pages/folder/page/folder'));
export const OnboardingPage = lazy(
  () => import('@pages/onboarding/page/onboarding'),
);
