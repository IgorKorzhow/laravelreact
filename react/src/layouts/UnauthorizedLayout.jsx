import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../context/contextProvider.jsx";

function UnauthorizedLayout() {
    const {token} = useStateContext();

    if (token) {
        return <Navigate to="/" />
    }

    return (
        <div className="container mt-5" style={{width: "35%"}}>
            <div className="card p-5">
                <Outlet/>
            </div>
        </div>
    );
}

export default UnauthorizedLayout;
