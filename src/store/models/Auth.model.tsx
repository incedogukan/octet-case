export interface AuthContext {
  user: boolean;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}
