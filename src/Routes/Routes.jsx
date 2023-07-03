import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Pages/Home/Homepage";
import Register from "../Pages/Login and Register/Register";
import Login from "../Pages/Login and Register/Login";
import Candidates from "../Pages/Candidates";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Homepage/>
        },
        {
            path: "login",
            element: <Login/>
        },
        {
            path: "registration",
            element: <Register/>
        },
        {
            path: "candidates",
            element: <Candidates/>
        },
      ]
      
    },
  ]);


  export default router;