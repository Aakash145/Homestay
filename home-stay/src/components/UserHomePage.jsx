import React from 'react';
  
const UserHomePage = () => {
  return (
    <div >
    <section class="page-hero">
        <h1 class="page-hero-title">--- User Profile ---</h1>
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
};
  
export default UserHomePage;