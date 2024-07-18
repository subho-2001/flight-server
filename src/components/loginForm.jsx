import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { UserData } from "../contest/AppContest";
import { useDispatch } from "react-redux";
import { login } from "./redux/authSlice";

function LoginForm() {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [matchError, setMatchError] = useState("");

    const { userData, matchedFlightsData, setMatchedFlightsData } = useContext(UserData);


    const navigate = useNavigate();

    const dispatch = useDispatch()

    const goTo = (path) => {
        navigate(path);
    }


    const addUser = async () => {
        let isValid = true;

        if (!email) {
            isValid = false;
            setEmailError("Enter your email")
        }
        if (!password) {
            isValid = false;
            setPasswordError("Enter your password")
        }
        if (isValid) {
            await dispatch(login({ email, password })).unwrap();
            if (matchedFlightsData.length !== 0) {
                goTo("/tricketlist");
            } else {
                goTo("/home");
            }
        }
    };



    return (
        <>
            <div className="from-section">
                <form action="">
                    <h1>Login page</h1>
                    <div className="mb-3">
                        <label>Email</label>
                        <input type="email" className="fromData" placeholder="Enter your email" onChange={(event) => { setEmail(event.target.value); emailError && setEmailError(""); }} value={email} />
                        <div className="text-danger">{emailError}</div>
                    </div>
                    <div className="mb-3">
                        <label>password</label>
                        <input type="password" className="fromData" placeholder="Enter your password" onChange={(event) => { setPassword(event.target.value); passwordError && setPasswordError(""); }} value={password} />
                        <div className="text-danger">{passwordError}</div>
                    </div>
                    <div className="button-section">
                        <Button className="button" variant="primary" onClick={addUser}>Submit</Button>
                        <div className="matchError">{matchError}</div>
                        <p>Don't Have An Account? <Link to="/auth/signup" >Sign up</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm;