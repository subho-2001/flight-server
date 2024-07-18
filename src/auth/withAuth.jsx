import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const WithAuth = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    if (isLoggedIn) {
        return <> {children} </>
    } else {
        return <Navigate to="/auth/login" replace />
    }
}
export default WithAuth