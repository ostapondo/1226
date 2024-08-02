import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import { ROUTES } from '../constants/routes';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-sm">
            <a className="navbar-brand" href="#">
                <img src={Logo} alt="Bootstrap" width="40" height="42" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav w-100">
                <li className="nav-item">
                    <NavLink className="nav-link" to={ROUTES.HOME}>Головна</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={ROUTES.VACANCIES}>Вакансії</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={ROUTES.CONTACTS}>Контакти</NavLink>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;