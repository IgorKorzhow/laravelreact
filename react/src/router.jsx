import {createBrowserRouter, Navigate} from "react-router-dom";
import UserLayout from "./layouts/UserLayout.jsx";
import UnauthorizedLayout from "./layouts/UnauthorizedLayout.jsx";
import Login from "./pages/Login.jsx";
import User from "./pages/User.jsx";
import Register from "./pages/Register.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: '/user',
                element: <User />
            }
        ]
    },
    {
        path: '/',
        element: <UnauthorizedLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to="/" />
    },
]);

export default router;
