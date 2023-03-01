import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { authenticationContext } from "../providers/AuthenticationProvider";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useContext(authenticationContext);

  useEffect(() => {
    if (!user) {
      const persistedUser = localStorage.getItem("user");

      setUser(persistedUser);
    }
  }, []);

  return user ? children : <Navigate to={"/Account/Login"} replace />;
}
