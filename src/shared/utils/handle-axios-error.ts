import { AxiosError } from 'axios';

import { routePath } from '@shared/constants/path';

export function isAxiosError(error: unknown): error is AxiosError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'isAxiosError' in error &&
    (error as AxiosError).isAxiosError === true
  );
}

export function handleAuthError(error: unknown) {
  if (isAxiosError(error)) {
    const status = error.response?.status;
    if (status !== 200) {
      window.location.href = routePath.ONBOARDING;
    }
  }
}
