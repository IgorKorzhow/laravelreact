import {Link} from "react-router-dom";
import {useRef} from "react";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../context/contextProvider.jsx";

function Register() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();
    const {setUser, setToken} = useStateContext();

    const onSubmit = (event) => {
        event.preventDefault();
        const payload = {
            email : emailRef.current.value,
            password : passwordRef.current.value,
            password_confirmation : repeatPasswordRef.current.value
        }
        axiosClient.post("/register", payload)
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
                <label htmlFor="password_repeat" className="form-label">Repeat password</label>
                <input ref={repeatPasswordRef} type="password" className="form-control" id="password_repeat" required/>
            </div>
            <div className="mb-3">
                <Link to="/login">Already have an account</Link>
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-outline-primary">Register</button>
            </div>
        </form>
    );
}

export default Register;
