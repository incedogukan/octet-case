import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../store/contexts/AuthContext";

const ProtectedRoute = () => {
  const { user, setUser } = useAuth();
  const localUser = localStorage.getItem("user");
  const isAuthenticated = user || localUser;
  const location = useLocation();

  useEffect(() => {
    if (!!localUser) {
      setUser(!!localUser);
    }
  }, [user, localUser, setUser]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (location.pathname === "/") {
    return <Navigate to="/list" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
