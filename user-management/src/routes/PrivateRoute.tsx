import { FC, ReactNode, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PersonRole } from "../types/person.types";
import { UserContext } from "../context/UserContext";
// import { UserContext } from "../context/UserContext";

interface PrivateRouteProps {
  children?: ReactNode;
  allowedRoles: PersonRole[];
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children, allowedRoles }) => {
  const user = useContext(UserContext);

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" replace />;
  }

  if (!user && localStorage.getItem("token")) {
    return null;
  }

  // if (!allowedRoles.includes(user?.role as PersonRole)) {
  //   return <Navigate to="/" replace />;
  // }

  return <>{children || <Outlet />}</>;
};

export default PrivateRoute;
