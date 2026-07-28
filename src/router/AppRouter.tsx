import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Register from "../features/auth/pages/Register";
import SignIn from "../features/auth/pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
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
]);
