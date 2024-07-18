import { useState } from 'react'
import { UserData } from './contest/AppContest';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './App.css'

function App() {
  const [userData, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [booking, setBooking] = useState([]);
  const [Id, setId] = useState([]);
  const [ticketID, setTicketID] = useState(null);
  const [history, setHistory] = useState([]);
  const [matchedFlightsData, setMatchedFlightsData] = useState([]);

  const isLoggedIn = () => {
    let data = localStorage.getItem("ff-data");
    if (data) {
      let loggedInD = JSON.parse(data);
      setLoggedIn(loggedInD.isLogin)
      return loggedInD.isLogin
    } else {
      return loggedIn
    }
  }

  const setIsLoggedIn = (value) => {
    localStorage.setItem("ff-data", JSON.stringify({ "isLogin": value }));
    setLoggedIn(value)
  }

  return (
    <>
      {/* <UserData.Provider value={{ userData, setUsers }}>   */}
      <UserData.Provider value={{ userData, setUsers, booking, setBooking, matchedFlightsData, setMatchedFlightsData, Id, setId, ticketID, setTicketID, history, setHistory }}>
        <RouterProvider router={router} />
      </UserData.Provider>
    </>
  )
}

export default App;
