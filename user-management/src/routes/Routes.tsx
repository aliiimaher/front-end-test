import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Login from "../pages/auth/Login";
import Home from "../pages/Home";
import SingleUserDetail from "../pages/SingleUserDetail";
import UserList from "../pages/UserList";
import UserManagement from "../pages/UserManagement";
import CreatedUsers from "../pages/CreatedUsers";
// import PrivateRoute from "./PrivateRoute";
// import { PersonRole } from "../types/person.types";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <h1>Not Found</h1>,
      },
      {
        path: "/user-list",
        element: (
          // <PrivateRoute
          //   allowedRoles={
          //     [
          //       /*PersonRole.ADMIN*/
          //     ]
          //   }
          // >
          <UserList />
          // </PrivateRoute>
        ),
      },
      {
        path: "/user/:id",
        element: (
          //   <PrivateRoute
          //     allowedRoles={
          //       [
          //         /*PersonRole.ADMIN*/
          //       ]
          //     }
          //   >
          <SingleUserDetail />
          // </PrivateRoute>
        ),
      },
      {
        path: "/user-management",
        element: (
          // <PrivateRoute
          //   allowedRoles={
          //     [
          //       /*PersonRole.ADMIN*/
          //     ]
          //   }
          // >
          <UserManagement />
          // </PrivateRoute>
        ),
      },
      {
        path: "/created-users",
        element: (
          // <PrivateRoute
          //   allowedRoles={
          //     [
          //       /*PersonRole.ADMIN*/
          //     ]
          //   }
          // >
          <CreatedUsers />
          // </PrivateRoute>
        ),
      },
    ],
  },
]);
