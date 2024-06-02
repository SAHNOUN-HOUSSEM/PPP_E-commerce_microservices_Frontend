import { createContext, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

export interface IAuthState {
  username: string;
  token: string;
  role: string;
}

const AuthContext = createContext<{
  auth: IAuthState;
  setAuth: React.Dispatch<React.SetStateAction<IAuthState>>;
}>({
  auth: { username: "", token: "", role: "" },
  setAuth: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<IAuthState>({
    username: "",
    token: "",
    role: "",
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
