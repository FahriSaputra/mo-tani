import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const AdminRoute = ({ children }) => {
  const [state] = useContext(UserContext);

  const { isLogin, user } = state;

  return isLogin && user?.role.toLowerCase() === "admin" ? (
    children
  ) : (
    <Navigate replace to="/" />
  );
};

export default AdminRoute;
