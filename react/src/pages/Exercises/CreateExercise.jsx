import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../axios-client.js";

function CreateExercise() {

    const [muscles, setMuscles] = useState([]);

    useEffect(() => {
        axiosClient.get("/muscleGroup/index")
            .then((response) => {
                console.log(response);
                setToken(response.data.token);
            })
            .catch((error) => {
                const response = error.response;
                if (response) {
                    console.log(response.data.errors);
                }
            })
    }, []);

    return (
        <div className="container mt-5 w-50">
            <div className="card p-5 bg-light">
                <form>
                    <div className="mb-3">
                        <label htmlFor="group" className="form-label">Choose a muscle group: </label>
                        <select className="form-select form-select-md mb-3" id="group">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" required/>
                    </div>
                    <div className="mb-3">
                        <Link to="/register">Create new account</Link>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-outline-primary">Login</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default CreateExercise;
