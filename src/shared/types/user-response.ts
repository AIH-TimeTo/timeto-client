export interface GetUserInfoResponse {
  status: string;
  code: string | null;
  message: string;
  data: {
    userId: number;
    userName: string;
    userEmail: string;
  };
}
