import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { BASE_API_URL, HTTP_CONTENT_TYPES } from "consts";
import { store } from "store";
import { IStoreState } from "store/types";

const http: AxiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": HTTP_CONTENT_TYPES.json,
    Accept: HTTP_CONTENT_TYPES.json,
    "Admin-Panel": true,
  },
});

const requestInterceptor = (config: AxiosRequestConfig) => {
  const token = (store.getState() as IStoreState).authenticate.token;
  const setToken2Header = (token: string) => {
    config.headers["X-Token"] = token;
  };
  const setValidateOnly2Header = () => {
    config.headers["X-Validate-Only"] = true;
  };

  token && setToken2Header(token);
  config.data.validate && setValidateOnly2Header();

  return config;
};

http.interceptors.request.use(requestInterceptor);

http.interceptors.response.use(
  (response: AxiosResponse<any>): AxiosResponse => response.data,
  (error: AxiosError): never => {
    throw error;
  }
);

export { http };
