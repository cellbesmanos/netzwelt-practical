import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authenticationContext } from "../providers/AuthenticationProvider";

export default function ProtectedRoute({ children }) {
  const [user] = useContext(authenticationContext);

  return user ? children : <Navigate to={"/Account/Login"} replace />;
}
