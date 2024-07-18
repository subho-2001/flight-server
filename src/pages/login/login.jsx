import Navber from "../../components/navber/navber";
import LoginForm from "../../components/loginForm";

function Login(params) {

    return (
        <div>
            <Navber />
            {/* <h1>This is a login page</h1> */}
            <div className="loginForm">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login;