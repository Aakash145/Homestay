import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/homes'>View Units</NavLink>
                <NavLink to='/reservations'>Reservations</NavLink>
                <NavLink to='/user'>My Profile</NavLink>
        </div>
    )
}

export default NavBar;