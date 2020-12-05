import { AxiosRequestConfig } from "axios";
import { store } from "store";
import { IStoreState } from "store/types";

const requestInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const { token } = (store.getState() as IStoreState).authenticate;
  const setToken2Header = (token: string) => {
    config.headers["X-Token"] = token;
  };
  const setValidateOnly2Header = () => {
    config.headers["X-Validate-Only"] = true;
  };

  token && setToken2Header(token);
  config?.data?.validate && setValidateOnly2Header();

  return config;
};

export { requestInterceptor };
