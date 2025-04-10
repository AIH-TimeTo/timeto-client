import { END_POINTS } from '@shared/constants/api';
import {
  CreateFolderRequest,
  EditFolderNameRequest,
} from '@shared/types/folder-request';
import {
  CreateFolderResponse,
  EditFolderNameResponse,
  FolderListResponse,
  GetFolderDetailResponse,
} from '@shared/types/folder-response';

import { apiDelete, apiGet, apiPatch, apiPost } from '../common/methods';

export const fetchFolders = () => {
  return apiGet<FolderListResponse>(END_POINTS.GET_FOLDERS);
};

export const createFolder = (body: CreateFolderRequest) => {
  return apiPost<CreateFolderResponse, CreateFolderRequest>(
    END_POINTS.POST_FOLDER,
    body,
  );
};

export const fetchFolderDetail = (folderId: number) => {
  return apiGet<GetFolderDetailResponse>(
    END_POINTS.GET_FOLDER_DETAIL(folderId),
  );
};

export const editFolderName = (body: EditFolderNameRequest) => {
  return apiPatch<EditFolderNameResponse, EditFolderNameRequest>(
    END_POINTS.PATCH_FOLDER_NAME,
    body,
  );
};

export const deleteFolder = (folderId: number) => {
  return apiDelete(`${END_POINTS.DELETE_FOLDER}/${folderId}`);
};
