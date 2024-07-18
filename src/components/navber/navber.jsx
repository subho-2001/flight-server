import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import { UserData } from "../../contest/AppContest";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";


function Navber(params) {
    const { setMatchedFlightsData } =
        useContext(UserData);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const goTo = (path) => {
        navigate(path);
    };

    const goToLogin = () => {
        goTo("/auth/login");
    }

    const goToSingup = () => {
        goTo("/auth/signup");
    }

    const handleLogout = () => {
        setMatchedFlightsData((matchedDataArray, index) => {
            matchedDataArray.splice(0);
            return matchedDataArray;
        });
        dispatch(logout());
        navigate("/home");
    };

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/trickethistory">History</Nav.Link>
                    </Nav>
                    {isLoggedIn ? (
                        <Button className="button" variant="primary" onClick={handleLogout}>Log Out</Button>
                    ) : (
                        <div>
                            <Button className="button" variant="primary" onClick={goToLogin}>Login</Button>
                            <Button className="button" variant="primary" onClick={goToSingup}>Singup</Button>
                        </div>
                    )}
                </Container>
            </Navbar>
        </>
    )
}

export default Navber;