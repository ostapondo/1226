import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ROUTES } from '../constants/routes'
import Navbar from './Navbar';
import Slider from './Slider';

const Layout = () => {
    const location = useLocation();

    const isRouteAllowed = [ROUTES.CONTACTS, ROUTES.HOME, ROUTES.VACANCIES].includes(location.pathname);

    return (
        <React.Fragment>
            <Navbar />
            {isRouteAllowed ? <Slider /> : null}
            <Outlet />
        </React.Fragment>
    )
}

export default Layout;