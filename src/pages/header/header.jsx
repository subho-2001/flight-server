import { useNavigate } from "react-router-dom";
import Navber from "../../components/navber/navber"


function Header() {

    return (
        <div>
            <Navber />
            <h1 className="mt-5">Welcome to Flight Ticket Booking!</h1>
        </div>
    )
}
export default Header;