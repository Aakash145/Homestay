import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
const NavBar = () => {
    return (
        <nav>
        <div className="nav-wrapper">
                <NavLink to="/" className="brand-logo"><img src={logo} alt="HomeStay"/></NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink className="navlink-style" to='/'>Home</NavLink></li>
                <li><NavLink className="navlink-style" to='/homes'>View Units</NavLink></li>
                <li><NavLink className="navlink-style" to='/reservations'>Reservations</NavLink></li>
                <li><NavLink className="navlink-style" to='/user'>My Profile</NavLink></li>
                <li><NavLink className="navlink-style" to='/login' className="waves-effect waves-light btn teal">Login/Register</NavLink></li>
                </ul>
        </div>
        </nav>
    )
}

export default NavBar;