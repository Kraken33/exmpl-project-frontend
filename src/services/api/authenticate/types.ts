import { Credinatals } from "store/autheticate/types";

export interface AuthenticateApi {
  login: (p: Credinatals) => Promise<null>;
  signUp: (p: Credinatals) => Promise<null>;
}
