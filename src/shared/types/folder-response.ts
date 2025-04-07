export interface FolderListResponse {
  status: string;
  code: string;
  message: string;
  data: {
    folders: {
      folderId: number;
      folderName: string;
      color: string;
    }[];
  };
}

export interface CreateFolderResponse {
  status: string;
  code: string;
  message: string;
  data: {
    folderId: number;
    folderName: string;
    color: string;
  };
}
