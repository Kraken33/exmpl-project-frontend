import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { BASE_API_URL, HTTP_CONTENT_TYPES } from "consts";

import { requestInterceptor } from "./interceptor";

const http: AxiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": HTTP_CONTENT_TYPES.json,
    Accept: HTTP_CONTENT_TYPES.json,
    "Admin-Panel": true,
  },
});

http.interceptors.request.use(requestInterceptor);

http.interceptors.response.use(
  (response: AxiosResponse<any>): AxiosResponse => response.data,
  (error: AxiosError): never => {
    throw error;
  }
);

export { http };
