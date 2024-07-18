import React from "react";
import { useNavigate ,Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { UserData } from "../contest/AppContest";
import { useDispatch } from "react-redux";
import { register } from "./redux/authSlice";

function SignupForm(params) {


    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const { userData, setUsers } = useContext(UserData);


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const goTo = (path) => {
        navigate(path);
    };


    const addUser = async () => {
        let isValid = true;
        if (!name) {
            isValid = false;
            setNameError("Enter your name")
        }
        if (!email) {
            isValid = false;
            setEmailError("Enter your email")
        }
        if (!phone) {
            isValid = false;
            setPhoneError("Enter your phone")
        }
        if (!password) {
            isValid = false;
            setPasswordError("Enter your password")
        }
        if (isValid) {
            const newUser = {};
            newUser.name = name;
            newUser.email = email;
            newUser.phone = phone;
            newUser.password = password;

            try {
                await dispatch(register(newUser)).unwrap();
                goTo("/auth/login");
                clearSignUpForm();
            } catch (error) {
                console.log(error);
            }
        }
    };

    const clearSignUpForm = () => {
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
    };


    return (
        <>
            <div className="from-section">
                <form action="">
                    <h1>Sign up</h1>
                    <div className="mb-3">
                        <label>Name</label>
                        <input type="text" className="fromData" placeholder="Enter your name" autoFocus onChange={(event) => { setName(event.target.value); nameError && setNameError(""); }} value={name} />
                        <div className="text-danger">{nameError}</div>
                    </div>
                    <div className="mb-3">
                        <label>Phone</label>
                        <input type="text" className="fromData" placeholder="Enter your number" onChange={(event) => { setPhone(event.target.value); phoneError && setPhoneError(""); }} value={phone} />
                        <div className="text-danger">{phoneError}</div>
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input type="email" className="fromData" placeholder="Enter your email" onChange={(event) => { setEmail(event.target.value); emailError && setEmailError(""); }} value={email} />
                        <div className="text-danger">{emailError}</div>
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" className="fromData" placeholder="Enter your password" onChange={(event) => { setPassword(event.target.value); passwordError && setPasswordError(""); }} value={password} />
                        <div className="text-danger">{passwordError}</div>
                    </div>
                    <div className="button-section">
                        <Button className="button" variant="primary" onClick={addUser}>Submit</Button>
                    </div>
                </form>
                <span>{message}</span>
                <div className="ifHaveAnAccount text-center">
                    <p>
                        Already Have An Account? <Link to="/auth/login">Log In</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignupForm;