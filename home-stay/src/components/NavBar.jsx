import React from 'react';
import logo from '../assets/images/logo.jpg';
const NavBar = () => {
   
    return (
        <nav>
                <div className="nav-center">
                    <div className='nav-header'>
                        <img src={logo} className='logo' alt="HomeStay"/>
                    </div>
                        <div className='links-container' > 
                            <ul className='links'>
                                <li><a href='/'>Home</a></li>
                                <li><a href='/homes'>View Units</a></li>
                                <li><a href='/reservations'>Reservations</a></li>
                                <li><a href='/user'>My Profile</a></li>
                           </ul>
                       </div>  
                       <div className='links-container' > 
                            <ul className='links'>
                                <li><a href='/login'>Login</a></li>
                                <li><a>||</a></li>
                                <li><a href='/registration'>Register</a></li>
                                <li><a>||</a></li>
                                <li><a href='/ownerHomePage'>Owner Home Page</a></li>
                           </ul>
                       </div>  
                   </div>
        </nav>
    )
}

export default NavBar;