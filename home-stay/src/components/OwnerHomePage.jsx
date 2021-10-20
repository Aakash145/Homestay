import React from 'react';
import axios from 'axios';
import { useState, useRef } from 'react';
  
const OwnerHomePage = () => {
    return (
        <div >
        <section class="page-hero">
            <h1 class="page-hero-title">--- Owner Profile ---</h1>
        </section>
    
        <div className="AdPostList">   
              <article className="AdPostList-article">
    
              <h2>Update Info</h2>
              <label htmlFor="firstName">First Name</label>
              <input name="firstName" type="text" className="loginReg-input"/>
    
              <label htmlFor="lastName">Last Name</label>
              <input name="lastName" type="text" className="loginReg-input"/>
    
              <label htmlFor="password">Password</label>
              <input name="password" type="password" className="loginReg-input"/>
    
              <label htmlFor="cpassword">Confirm Password</label>
              <input name="cpassword" type="password" className="loginReg-input"/>
    
              <label htmlFor="email">Email</label>
              <input name="email" type="email" className="loginReg-input"/>
    
              <label htmlFor="phoneNumber">Phone</label>
              <input name="phoneNumber" type="text" className="loginReg-input"/>
    
               <button className="regLog-btn">Update</button>
    
              </article>
            
       </div>
     </div>
    );
}

export default OwnerHomePage;