import { AcountApi } from "./account/types";
import { AuthenticateApi } from "./authenticate/types";

export interface IApi {
  account: AcountApi;
  authenticate: AuthenticateApi;
}

export type Routes = {
  [k: string]: Function;
};
