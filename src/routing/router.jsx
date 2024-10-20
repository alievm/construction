import {createBrowserRouter, Navigate} from "react-router-dom";
import DefaultLayout from "../pages/layout/DefaultLayout.jsx";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Properties from "../pages/Properties.jsx";
import Clients from "../pages/Clients.jsx";
import Sales from "../pages/Sales.jsx";
import Payments from "../pages/Payments.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/properties',
                element: <Properties />
            },
            {
                path: '/clients',
                element: <Clients />
            },
            {
                path: '/sales',
                element: <Sales />
            },
            {
                path: '/transactions',
                element: <Payments />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
]);

export default router;