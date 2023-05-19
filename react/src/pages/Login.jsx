import {Link} from "react-router-dom";
import {useRef} from "react";
import {useStateContext} from "../context/contextProvider.jsx";
import axiosClient from "../axios-client.js";

function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const {setUser, setToken} = useStateContext();

    const onSubmit = (event) => {
        event.preventDefault();
        const payload = {
            email : emailRef.current.value,
            password : passwordRef.current.value
        }
        axiosClient.post("/login", payload)
            .then((response) => {
                setUser(response.data.user);
                setToken(response.data.token);
            })
            .catch((error) => {
                const response = error.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            })
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input ref={emailRef} type="email" className="form-control" id="email" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input ref={passwordRef} type="password" className="form-control" id="password" required/>
            </div>
            <div className="mb-3">
                <Link to="/register">Create new account</Link>
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-outline-primary">Login</button>
            </div>
        </form>
    );
}

export default Login;
