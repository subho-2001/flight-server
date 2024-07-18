import { createBrowserRouter } from "react-router-dom";
import Header from "./pages/header/header"
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import TricketList from "./pages/tricketList/tricketList";
import MoreDetails from "./pages/moreDetails/moreDetails";
import TricketHistory from "./pages/history/history";
import BookingTricket from "./pages/bookingTricket/bookingTricket";
import Signup from "./pages/signup/singup"
import AppLayout from "./components/layout/AppLayout";
import UnAuth from "./auth/unAuth";
import WithAuth from "./auth/withAuth";
import AuthLayout from "./components/layout/authLayout";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    Children: [
      {
        path: "/",
        element: < Home />
      },
      {
        path: "/tricketlist",
        element: < TricketList />
      },
      {
        path: "/moredetails",
        element: < MoreDetails />
      },
      {
        path: "/bookingtricket",
        element: < BookingTricket />
      },
      {
        path: "/trickethistory",
        element: <WithAuth>< TricketHistory /></WithAuth>
      },
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout/>,
    Children: [
      {
        path: "signup",
        element: <UnAuth><Signup /></UnAuth>
      },
      {
        path: "login",
        element: <UnAuth><Login /></UnAuth>
      },
    ]
  }
];
const router = createBrowserRouter(routes);
export default router;