import React from "react";
import logo from "../assets/images/logo.jpg";
const NavBarUser = () => {
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
            {/* <li><a>|</a></li> */}
            <li>
              <a href="/homes">View Units</a>
            </li>
            <li>
              <a href="/userReservations">My Reservations</a>
            </li>
            <li>
              <a href="/userHomePage">My Profile</a>
            </li>
            <li>
              <a href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarUser;
