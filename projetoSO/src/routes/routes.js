import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/login/login";
import Register from "../components/register/register";
import Home from "../components/home/home";
import NewReservation from "../components/newReservation/newReservation";
import ProtectedRoute from "./protectedRoute";

export const Routes = () => {
    const routes = [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ];
  
    const authenticatedRoutes = [
      {
        path: '/home',
        element: <ProtectedRoute element={<Home />} />
      },
      {
        path: '/newReservation',
        element: <ProtectedRoute element={<NewReservation />} />
      }
    ];
  
    const router = createBrowserRouter([
      ...routes,
      ...authenticatedRoutes
    ]);
  
    return <RouterProvider router={router} />;
  };