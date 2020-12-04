import { account } from "./account";
import { authenticate } from "./authenticate";
import { IApi } from "./types";

const api: IApi = {
  account,
  authenticate,
};

export { api };
export { routes } from "./routes";
