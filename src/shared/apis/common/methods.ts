import axiosInstance from '../config/instance';

export const apiGet = async <TResponse, TParams = undefined>(
  url: string,
  params?: TParams,
): Promise<TResponse> => {
  const response = await axiosInstance.get<TResponse>(url, {
    params,
  });
  return response.data;
};

export const apiPost = async <TResponse, TBody = undefined>(
  url: string,
  body?: TBody,
): Promise<TResponse> => {
  const response = await axiosInstance.post<TResponse>(url, body);
  return response.data;
};

export const apiPatch = async <TResponse, TBody = undefined>(
  url: string,
  body?: TBody,
): Promise<TResponse> => {
  const response = await axiosInstance.patch<TResponse>(url, body);
  return response.data;
};

export const apiDelete = async <TResponse>(url: string): Promise<TResponse> => {
  const response = await axiosInstance.delete<TResponse>(url);
  return response.data;
};
