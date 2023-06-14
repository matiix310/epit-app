import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/HomePage/Home';

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Pegasus from './views/Pegasus/PegasusPage/pegasus';
import Zeus from './views/Zeus/ZeusPage/zeus';
import Moodle from './views/Moodle/MoodlePage/moodle';
import notFound from './views/NotFound/NotFoundPage/notFound';

// setup the router
const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/home" replace />,
        ErrorBoundary: notFound
    },
    {
        path: '/home',
        Component: Home
    },
    {
        path: '/pegasus',
        Component: Pegasus
    },
    {
        path: '/zeus',
        Component: Zeus
    },
    {
        path: '/moodle',
        Component: Moodle
    }
])

// get and render the root
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
