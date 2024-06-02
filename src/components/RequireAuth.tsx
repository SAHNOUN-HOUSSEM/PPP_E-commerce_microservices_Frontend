import { useContext, useEffect, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context";
import axios from "axios";

interface RequireAuthProps {
  allowedRoles: string[];
}

const RequireAuth = ({ allowedRoles }: RequireAuthProps) => {
  const { auth, setAuth } = useContext(AuthContext);
  const location = useLocation();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserByToken = async () => {
      setLoading(true);
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
      } finally {
        setLoading(false); // Set loading to false after request completes
      }
    };

    if (token) {
      console.log("Token found");
      getUserByToken();
    } else {
      console.log("No token found");

      setLoading(false); // No token, so no need to load
    }
  }, []);

  if (loading) {
    return (
      <>
        <div>Loading...</div>
        <div>Loading...</div>
        <div>Loading...</div>
        <div>Loading...</div>
        <div>Loading...</div>
        <div>Loading...</div>
        <div>Loading...</div>
        <div>Loading...</div>
        <div>Loading...</div>
        <div>Loading...</div>
        <div>Loading...</div>
        <div>Loading...</div>
        <div>Loading...</div>
        <div>Loading...</div>
      </>
    ); // You can replace this with a proper loading indicator
  }

  return allowedRoles.includes(auth?.role) ? (
    <Outlet />
  ) : auth?.token ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { RequireAuth };
