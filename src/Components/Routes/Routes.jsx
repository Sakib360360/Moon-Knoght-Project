
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home/Home';
import Main from '../Layouts/Main/Main';
import LoginLayout from '../Layouts/Main/LoginLayout';
import Login from '../page/Shared/Footer/Login';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        // errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            
        ]
    },
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
          {
            path: "login",
            element: <Login></Login>
          }]
        }
])

export default Routes;