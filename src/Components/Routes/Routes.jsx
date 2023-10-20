import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home/Home';
import Main from '../Layouts/Main/Main';

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
    
    
])

export default Routes;