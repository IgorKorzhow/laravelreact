import {useStateContext} from "../context/contextProvider.jsx";
import {NavLink} from "react-router-dom";

function Searchbar() {

    const {token} = useStateContext();

    return (
        <nav className="navbar bg-light border border-end-0">
            {!!token ?
                <div className="container-fluid d-flex ">
                    <div className="d-flex w-50">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                    <div>
                        <NavLink className="btn btn-outline-dark" to="/exercises/create">Create exercise</NavLink>
                    </div>
                </div>
            :
                <div className="container d-flex justify-content-center">
                    <div className="d-flex w-50">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </div>
            }
        </nav>
    );
}

export default Searchbar;
