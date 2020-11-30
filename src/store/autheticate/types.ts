export interface AuthenticateStore {
  isAuthentificate: boolean;
  subject: Nullable<{
    token: string;
    role: string;
  }>;
}
