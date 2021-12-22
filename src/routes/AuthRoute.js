import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const AuthRoute = ({ children, reverse }) => {
  const [state] = useContext(UserContext);

  const { isLogin } = state;

  if (reverse) {
    return children;
  }

  return !isLogin ? children : <Navigate replace to="/" />;
};

export default AuthRoute;
