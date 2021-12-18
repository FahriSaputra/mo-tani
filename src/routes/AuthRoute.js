import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const AuthRoute = ({ children }) => {
  const [state] = useContext(UserContext);

  const { isLogin } = state;

  return !isLogin ? children : <Navigate replace to="/" />;
};

export default AuthRoute;
