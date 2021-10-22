import React from "react";
import logo from "../assets/images/logo.jpg";
const NavBarOwner = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="HomeStay" />
        </div>
        <div className="links-container2">
          <ul className="links">
            {/*                                 <li><a href='/'>Home</a></li>  */}
            {/* <li><a>|</a></li> */}
            <li>
              <a href="/homes">View All Units</a>
            </li>
            <li>
              <a href="/ownerHomePage">My Profile</a>
            </li>
            <li>
              <a href="/ownerViewUnits">Ad Postings</a>
            </li>
            <li>
              <a href="/ownerAdPost">Post an Ad</a>
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

export default NavBarOwner;
