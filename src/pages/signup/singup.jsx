import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Navber from "../../components/navber/navber";
import SignupForm from "../../components/singUpFrom";
function Signup(params) {

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login")
    }

    return (
        <div>
            <Navber />
            {/* <h1>This is a singup page</h1> */}
            <SignupForm />
        </div>
    )
}

export default Signup;