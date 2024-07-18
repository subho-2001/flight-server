import { useContext , useEffect , useState } from "react";
import { UserData } from "../../contest/AppContest";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function TricketHistory(params) {
    const { history } = useContext(UserData);
    // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    const navigate = useNavigate()

    const goTo = (path) => {
        navigate(path);
    }
    function goToHome() {
        goTo("/")
    }


    useEffect(() => {
        if (history.length === 0) {
            document.getElementById("ifNoTicketBooked").innerHTML = "No Data to Show";
        }
    }, [history]);


    const {list, setlist} = useContext(UserData);

    const deleteHandler = (id) => {
        const newList = list.filter((li) => li.id !== id);
        setlist(newList);
    };


    return (
        <>
            <Container>
                <div className="header">
                    <h1>Flight Booking History</h1>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Flight Name</th>
                            <th scope="col">Deparature Time</th>
                            <th scope="col">Arrive End</th>
                            <th scope="col">Bording At</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Price</th>
                            <th scope="col" colSpan={1}>Action</th>
                        </tr>
                        {booking.map((booking, id) => {
                            return <tr key={id}>
                                <td>{booking.id}</td>
                                <td>{booking.name}</td>
                                <td>{booking.startTime}</td>
                                <td>{booking.endTime}</td>
                                <td>{booking.from}</td>
                                <td>{booking.to}</td>
                                <td>{booking.price}</td>
                                <td><Button onClick={() => { deleteHandler(booking.id) }}>Delete</Button></td>
                            </tr>
                        })}
                    </thead>
                </table>
                <Button variant="primary" onClick={goToHome}>Back</Button>
            </Container>

        </>
    )
}

export default TricketHistory;