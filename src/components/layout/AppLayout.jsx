import { Outlet } from "react-router-dom"
import Navber from "../navber/navber"

const  AppLayout= () =>{
    return <div>
        <Navber/>
        <Outlet/>
    </div>
}

export default AppLayout;