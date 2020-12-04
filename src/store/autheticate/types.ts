export type Credinatals = {
  login: string;
  password: string;
};

export interface AuthenticateStore {
  isAuthenticate: boolean;
  permissions: string[];
  token: Nullable<string>;
  role: Nullable<string>;
}
