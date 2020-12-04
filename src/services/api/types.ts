import { AcountApi } from "./account/types";
import { AuthenticateApi } from "./authenticate/types";

export interface IApi {
  account: AcountApi;
  authenticate: AuthenticateApi;
}
