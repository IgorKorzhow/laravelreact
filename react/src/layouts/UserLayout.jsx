import {useStateContext} from "../context/contextProvider.jsx";
import {Navigate, Outlet} from "react-router-dom";

function UserLayout() {

    const {token} = useStateContext();

    if (!token) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <div>User</div>
            <Outlet />
        </>
    );
}

export default UserLayout;
