import { http } from "services";

import { routes } from "../routes";
import { AcountApi } from "./types";

export const account: AcountApi = {
  info: () => http.get(routes.account()),
};
