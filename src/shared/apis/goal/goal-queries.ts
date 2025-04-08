import { queryOptions } from '@tanstack/react-query';

import { fetchGoals } from './goal';

export const GOAL_QUERY_KEY = {
  ALL: ['goals'],
  LIST: () => ['goals', 'list'],
} as const;

export const GOAL_QUERY_OPTION = {
  LIST: () =>
    queryOptions({
      queryKey: GOAL_QUERY_KEY.LIST(),
      queryFn: fetchGoals,
    }),
};
