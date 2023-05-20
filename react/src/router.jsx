import {createBrowserRouter, Navigate} from "react-router-dom";
import AuthorizedLayout from "./layouts/AuthorizedLayout.jsx";
import UnauthorizedLayout from "./layouts/UnauthorizedLayout.jsx";
import Login from "./pages/Login.jsx";
import User from "./pages/User.jsx";
import Register from "./pages/Register.jsx";
import Main from "./pages/Main.jsx";
import Exercises from "./pages/Exercises/Exercises.jsx";
import CreateExercise from "./pages/Exercises/CreateExercise.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <UnauthorizedLayout />,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: '/exercises',
                element: <Exercises />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path: '/',
        element: <AuthorizedLayout />,
        children: [
            {
                path: '/user',
                element: <User />
            },
            {
                path: '/exercises',
                element: <Exercises />
            },
            {
                path: '/exercises/create',
                element: <CreateExercise />
            },
        ]
    },
    {
        path: '*',
        element: <Navigate to="/" />
    },
]);

export default router;
