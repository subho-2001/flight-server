import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AllFlights } from "../../components/costand/flight";
import { UserData } from "../../contest/AppContest";
import { useSelector } from "react-redux";
import { useContext , useEffect } from "react";

function BookingTricket(params) {

    const { flightNumber, setFlightNumber } = useContext(UserData);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const navigate = useNavigate();

    const goTo = (path) => {
        navigate(path);
    };

    // const goToBookigTricket = () => {
    //     navigate("/bookingtricket")
    // }

    let flightObject = AllFlights.find((element) => {
        if (element.flightNumber === flightNumber) {
            return true;
        }
    });


    useEffect(() => {
        if (!flightObject) {
            document.getElementById("ifNoData").innerHTML = "No Details to Show";
        }
    }, [flightObject]);

    const goToBookigTricket = (flightNumber) => {
        if (isLoggedIn === true) {
            setFlightNumber(flightNumber);
            goTo("/trickethistory");
        } else {
            goTo("/auth/login");
        }
    };

    return (
        <>
            <Container>
                <div className="header">
                    <h1>Booking Tricket</h1>
                </div>
                <div className="main">
                    <h1>Flight Id: {flightObject?.flightNumber}</h1>
                    <h1> Name: {flightObject?.name}</h1>
                    <h1> From: {flightObject?.from}</h1>
                    <h1> To: {flightObject?.to}</h1>
                    <h1> StartTime: {flightObject?.startTime}</h1>
                    <h1> EndTime: {flightObject?.endTime}</h1>
                    <h1> price: {flightObject?.price}</h1>
                    <Button className="button" variant="primary" onClick={() => { goToBookigTricket(flightNumber) }} style={{ cursor: "pointer" }}>Booking Tricket</Button>
                    <Button className="button" variant="primary" onClick={() => goTo("/home")} style={{ cursor: "pointer" }}>Back</Button>
                </div>
            </Container>
        </>
    )
}

export default BookingTricket;