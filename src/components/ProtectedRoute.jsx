import { useContext, useLayoutEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { authenticationContext } from "../providers/AuthenticationProvider";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useContext(authenticationContext);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    if (!user) {
      const persistedUser = localStorage.getItem("user");

      setUser(persistedUser);
    }

    setIsLoading(false);
  }, []);

  if (user) {
    return !isLoading && children;
  } else {
    return !isLoading && <Navigate to={"/Account/Login"} replace />;
  }
}
