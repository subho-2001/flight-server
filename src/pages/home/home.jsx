import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertLink, Button } from "react-bootstrap";
import Navber from "../../components/navber/navber";
import { useContext, useState } from "react";
import { UserData } from "../../contest/AppContest";
import { AllFlights } from "../../components/costand/flight";
import TricketList from "../tricketList/tricketList";
// import { Form } from "react-bootstrap";

function Home() {

  const [from, setFrom] = useState("");
  const [fromError, setFromError] = useState("");

  const [to, setTo] = useState("");
  const [toError, setToError] = useState("");

  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");

  // const { booking, setBooking } = useContext(UserData);
  const [filteredFlight, setFilteredFlight] = useState(null);
  // const [filter, setFilter] = useState({ from: '', to: '' });
  const [setSearchFlight, setFilteredFlightData] = useContext(UserData);


  useEffect(() => {
    let searchInfoObj = {};

    searchInfoObj.from = from;

    searchInfoObj.to = to;

    searchInfoObj.date = date;

    if (from && to && date) {
      setSearchFlight((currentValue) => {
        currentValue.splice(0);
        currentValue.push(searchInfoObj);
        return currentValue;
      });
    }
  }, [
    from,
    to,
    date,
  ]);



  const navigate = useNavigate();

  const goTo = () => {
    navigate("/tricketlist")
  }


  // const hendleSearch = () => {
  //   setFilteredFlight(AllFlights.filter((flight) => flight.from === from && flight.to === to))
  // };
  const hendleSearch = () => {
    const matchedFlights = AllFlights.filter((element) => {
      element.from === from && element.to === to && element.availableDates === date
    });
    if (matchedFlights.length > 0) {
      setFilteredFlightData((currentValue) => {
        currentValue.splice(0);
        currentValue.push(...matchedFlights);
        return currentValue;
      });
    } else {
      setFilteredFlightData([]);
    }
  };


  const searchFlightHandler = () => {
    let isValid = true;

    if (!from) {
      isValid = false;
      setFromError("Enter your location");
    }
    if (!to) {
      isValid = false;
      setToError("Enter your destination");
    }
    if (isValid) {
      hendleSearch();
      goTo("/tricketlist");
    }
  };


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFilter({
  //     ...filter,
  //     [name]: value,
  //   });
  // };

  // const hendleSearch = () => {
  //   const filtered = AllFlights.filter((flight) => {
  //     return (
  //       (filter.from === '' || flight.from.toLowerCase().includes(filter.from.toLowerCase()) && filter.endPlace === '' || flight.to.toLowerCase().includes(filter.to.toLowerCase()))
  //     );

  //   });
  //   setFilteredData(filtered);
  //   // goTo("/flightlist-page") 
  // };


  return (
    <>
      <Navber />
      <div className="from-section">
        <form action="">
          <h1>Flight Booking</h1>
          <div className="mb-3">
            <label>From</label>
            <input type="text" className="fromData" placeholder="Where do you want to go?" autoFocus onChange={(event) => { setFrom(event.target.value); fromError && setFromError(""); }} value={from} />
            <div className="text-danger">{fromError}</div>
            {/* <Form.Select className="fromData" value={searchState.from} onChange={(e) => setSearchState((prevState) => ({ ...prevState, from: e.target.value }))}>
              {
                locations.map((data) => { <option key={`${data}-from`} value={data}>{data}</option> })
              }
            </Form.Select> */}
          </div>
          <div className="mb-3">
            <label>To</label>
            <input type="text" className="fromData" placeholder="Where do you want to go?" onChange={(event) => { setTo(event.target.value); toError && setToError(""); }} value={to} />
            <div className="text-danger">{toError}</div>
            {/* <Form.Select className="fromData" value={searchState.to} onChange={(event) => setSearchState((prevState) => ({ ...prevState, to: event.target.value }))}>
              {
                locations.map((data) => { <option key={`${data}-to`} value={data}>{data}</option> })
              }
            </Form.Select> */}
          </div>
          <div className="mb-3">
            <label>Date</label>
            <input type="date" className="fromData" placeholder="dd-mm-yy" onChange={(event) => { setDate(event.target.value); dateError && setDateError(""); }} value={date} />
            <div className="text-danger">{dateError}</div>
          </div>
          <div className="button-section">
            <Button className="button" variant="primary" onClick={searchFlightHandler} style={{ cursor: "pointer" }}>search</Button>
            {/* {filteredFlight && filteredFlight?.length > 0 && <TricketList AllFlights={filteredFlight} />} */}
            {filteredFlight && filteredFlight.length < 1 && <h3>No Flight Found</h3>}
          </div>
        </form>
      </div>
    </>
  )
}

export default Home;