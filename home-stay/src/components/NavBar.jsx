import React from "react";
import logo from "../assets/images/logo.jpg";
const NavBar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="HomeStay" />
        </div>
        <div className="links-container2">
          <ul className="links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/homes">View Units</a>
            </li>
            {/*                                 <li><a href='/userReservations'>User Reservations</a></li> */}
            {/*                                 <li><a href='/userHomePage'>My Profile User</a></li> */}
            {/*                                 <li><a href='/ownerHomePage'>My Profile Owner</a></li> */}
            {/*                                 <li><a href='/ownerViewUnits'>Owner Postings</a></li> */}
            {/*                                 <li><a href='/ownerAdPost'>Post Ad</a></li> */}
            <li>
              <a href="/login">Login</a>
            </li>
            {/* <li><a>||</a></li> */}
            <li>
              <a href="/registration">Register</a>
            </li>
            {/*                                 <li><a href='/'>Logout</a></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
