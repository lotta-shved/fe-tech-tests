import { Layout } from "@/layout";
import { CreateUserPage } from "@/pages/create user";
import ErrorPage from "@/pages/error";
import { UserPage } from "@/pages/user";
import { UsersPage } from "@/pages/users";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <UsersPage />,
      },
      {
        path: 'users',
        element: <UsersPage />,
      },
      {
        path: 'users/create',
        element: <CreateUserPage />,
      },
      {
        path: 'users/:userId',
        element: <UserPage />,
      },
    ],
  },
]);

export const Routes = () => <RouterProvider router={routes} />;
