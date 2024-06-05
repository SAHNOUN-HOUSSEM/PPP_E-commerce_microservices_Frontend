import axios from "axios";
import { createContext, useEffect, useState } from "react";

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const getUserByToken = async () => {
        try {
          const payload = { token: token };
          const response = await axios.post(
            "http://localhost:8083/auth/me",
            payload
          );
          console.log(response.data);
          const user = response.data.user;
          const newToken = response.data.token;
          console.log(user);
          console.log(newToken);

          setAuth({
            username: user.username,
            role: user.role,
            token: newToken,
          });
        } catch (error) {
          console.error("Failed to fetch user by token", error);
          // localStorage.removeItem("token");
        }
      };
      getUserByToken();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
