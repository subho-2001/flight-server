import { AllFlights } from "../../components/costand/flight";
import { UserData } from "../../contest/AppContest";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";

function MoreDetails(params) {
    const { Id, setBooking } = useContext(UserData)
    const [flight, setFlight] = useState([]);


    // //const Context=()=>{}
    // const getUserById = (id) => {
    //     return AllFlights.find((user) => user.id === id);
    // };


    // useEffect(() => {
    //     const user = getUserById(Id);
    //     if (user) {
    //         console.log("User name:", user.name);
    //     }
    // }, []);


    useEffect(() => {
        const foundFlight = AllFlights.find((flight) => {
            if (flight.id === Id) {
                return true;
            }
        });
        if (foundFlight) {
            setFlight(foundFlight);
        }
    }, [Id]);


    const navigate = useNavigate();

    function goToHistory() {
        setBooking((oldBookings) => {
            oldBookings.push(flight)
            return oldBookings;
        });

        goTo("/trickethistory");
    };
    function goTo(path) {
        navigate(path);
    };

    return (
        <>
            <Container>
                <div className="header">
                    <h1>MoreDetails</h1>
                </div>
                <div className="main">
                    <h1>Flight Id: {flight.id}</h1>
                    <h1> Name: {flight.name}</h1>
                    <h1> From: {flight.from}</h1>
                    <h1> To: {flight.to}</h1>
                    <h1> StartTime: {flight.startTime}</h1>
                    <h1> EndTime: {flight.endTime}</h1>
                    <h1> Price: {flight.price}</h1>
                    <Button className="button" variant="primary" onClick={goToHistory} style={{ cursor: "pointer" }}>Check History</Button>
                </div>
            </Container>
        </>
    )
}

export default MoreDetails;