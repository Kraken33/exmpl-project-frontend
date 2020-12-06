import { http } from "services";

import { routes } from "../routes";
import { AuthenticateApi } from "./types";

export const authenticate: AuthenticateApi = {
  login: (credintals) => http.post(routes.login(), credintals),
  signUp: (credintals) => http.post(routes.signUp(), credintals),
};
