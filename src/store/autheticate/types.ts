export interface AuthenticateStore {
  isAuthentificate: boolean;
  permissions: string[];
  subject: Nullable<{
    token: string;
    role: string;
  }>;
}
