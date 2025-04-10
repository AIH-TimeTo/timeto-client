export interface CreateFolderRequest {
  folderName: string;
  goalId: number;
}

export interface EditFolderNameRequest {
  folderId: number;
  folderName: string;
}
