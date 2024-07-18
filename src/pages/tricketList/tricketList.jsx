import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { UserData } from "../../contest/AppContest";
import { useContext , useState } from "react";
import { AllFlights } from "../../components/costand/flight";
import Home from "../home/home";

function TricketList(params) {   
    const {setId} = useContext (UserData);
    const [filteredData] = useState(AllFlights);
    // const { userData, setUsers } = useContext(UserData);
    // const { userdata, Id } = useContext(UserData);

    // const [show, setShow] = useState(false);
    // const [editShow, setEditShow] = useState(false);

    // const [name, setName] = useState("");

    // const [startTime, setStartTime] = useState("");

    // const [endTime, setEndTime] = useState("");

    // const [startPlace, setStartPlace] = useState("");

    // const [endPlace, setEndPlace] = useState("");

    // const [price, setPrice] = useState("");

    const navigate = useNavigate();


    const goToMoreDetails = (flightId) => {
        setId(flightId)
        navigate("/moredetails")
    }

    const goToBookigTricket = () => {
        navigate("/bookingtricket")
    }

    return (
        <>
            <Container>
                <h1>Tricket List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th className="expand">Name</th>
                            <th className="expand">StartTime</th>
                            <th className="expand">EndTime</th>
                            <th className="expand">StartPlace</th>
                            <th className="expand">EndPlace</th>
                            <th className="expand">Price</th>
                            <th colSpan={3}>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredData.map((flight) => {
                                return <tr key={flight.from}>
                                    <td>{flight.id}</td>
                                    <td>{flight.name}</td>
                                    <td>{flight.startTime}</td>
                                    <td>{flight.endTime}</td>
                                    <td>{flight.from}</td>
                                    <td>{flight.to}</td> 
                                    <td>{flight.price}</td>
                                    <td><Button className="button" variant="primary" onClick={() => goToBookigTricket()} style={{ cursor: "pointer" }}>Booking Tricket</Button></td>
                                    <td><Button className="button" variant="primary" onClick={() => goToMoreDetails(flight.id)} style={{ cursor: "pointer" }}>More Details</Button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </Container>
        </>
    )
}

export default TricketList;