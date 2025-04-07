import { END_POINTS } from '@shared/constants/api';
import { CreateFolderRequest } from '@shared/types/folder-request';
import {
  CreateFolderResponse,
  FolderListResponse,
} from '@shared/types/folder-response';

import { apiGet, apiPost } from '../common/methods';

export const fetchFolders = () => {
  return apiGet<FolderListResponse>(END_POINTS.GET_FOLDERS);
};

export const createFolder = (body: CreateFolderRequest) => {
  return apiPost<CreateFolderResponse, CreateFolderRequest>(
    END_POINTS.POST_FOLDER,
    body,
  );
};
