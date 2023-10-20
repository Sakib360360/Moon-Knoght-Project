import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home/Home";
import Main from "../Layouts/Main/Main";
import Login from "../page/Shared/Footer/Login";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Dashboard",
        element: <Dashboard></Dashboard>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default Routes;
