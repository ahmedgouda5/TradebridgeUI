import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Register from "../features/auth/pages/Register";
import SignIn from "../features/auth/pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardRedirect from "../features/Dashboard/utils";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "auth",
        children: [
          {
            path: "login",
            element: <SignIn />,
          },
          {
            path: "signup",
            element: <Register />,
          },
        ],
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <DashboardLayout>
        <DashboardRedirect />
      </DashboardLayout>
    ),
    children: [{ path: "*", element: null }],
  },
]);
