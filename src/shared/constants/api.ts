export const END_POINTS = {
  GET_GOALS: '/api/v1/goals',
  POST_GOAL: '/api/v1/goals',
  PATCH_GOAL_NAME: '/api/v1/goals/name',
  PATCH_GOAL_COLOR: '/api/v1/goals/color',
  DELETE_GOAL: '/api/v1/goals',

  GET_FOLDERS: '/api/v1/folders',
  POST_FOLDER: '/api/v1/folders',
  GET_FOLDER_DETAIL: (folderId: number) => `/api/v1/folders/${folderId}`,
  PATCH_FOLDER_NAME: '/api/v1/folders/name',
  DELETE_FOLDER: '/api/v1/folders',

  POST_TASK: '/api/v1/tasks',

  GET_USER_INFO: '/api/v1/users',
};
