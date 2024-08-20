import { createContext, useContext, useState } from "react";
import { AuthContext } from "../models";

const Context = createContext<AuthContext | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(false);

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("context is cannot be undefined");
  }

  return context;
};

export default AuthProvider;
