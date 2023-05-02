import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../Pages/Home/Home';
import Header from '../Shared/Header';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Booking from '../Shared/Booking/Booking';
import PrivateRoutes from './PrivateRoutes';
import Dashboard from '../Pages/Dashboard/Dashboard';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
            }
        ]
    }
])
