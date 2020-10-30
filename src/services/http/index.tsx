import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from "axios";

import { BASE_API_URL } from 'consts';

const http: AxiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Admin-Panel": true
  }
});

const requestInterceptor = (config: AxiosRequestConfig) => {
  return config;
};

http.interceptors.request.use(requestInterceptor);

http.interceptors.response.use(
  (response: AxiosResponse<{ data: any }>): AxiosResponse => response,
  (error: AxiosError): never => {
    throw error;
  }
);

export { http };
