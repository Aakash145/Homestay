import React from 'react';
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import { houses } from "./HouseListing";
import Popup from "./Popup"
import { get } from 'jquery';
import createBrowserHistory from "../helpers/history";

const OwnerHomePage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    const getBackToLogin = () => {
        localStorage.clear();
        return(
        <div>
        {createBrowserHistory.push("/")} hello {window.location.reload()}
        </div>
        )
    }

    const [userName, setUserName] = useState();
    const [role, setRole] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user"));
        setUserName(user.userName);
        setRole(user.role);
    })

    const updatePassword = async () => {
        let user = JSON.parse(localStorage.getItem("user"));
        let data = new FormData();
        data.append("username", userName);
        data.append("password", password);
    
        axios({
          method: "put",
          url: "http://localhost:8080/api/user/updatePass",
          data: data,
          headers: { Accept: "application/json ,text/plain, */*" },
          auth: {
            username: user.userName,
            password: user.password,
          },
        })
          .then((res) => {
            //console.log(res)
            togglePopup();
          })
          .catch((error) => {
            console.log(error.response);
          });
    
          setPassword('');

      };
    return (
        <div >
        <section class="page-hero">
            <h1 class="page-hero-title">--- Owner Profile ---</h1>
        </section>
    
        <div className="AdPostList">   
              <article className="AdPostList-article">
    
              <h2>Update Password</h2>
              <label>Email: {userName}</label>
              <label>Role: {role}</label>

              <label htmlFor="password">Password</label>
              <input name="password" type="password" className="loginReg-input" onChange={(e) => setPassword(e.target.value)}/>
    
              <label htmlFor="cpassword">Confirm Password</label>
              <input name="cpassword" type="password" className="loginReg-input"/>
    
               <button className="regLog-btn" onClick={() => updatePassword()} >Update</button>
               {isOpen && <Popup
      content={<div>
      <h3 className="errorLogin">Password updated Successfully!</h3>
      <h3 className="errorLogin">Your Password has been updated Successfully!</h3>
      </div>}
      handleClose={getBackToLogin}
    />}
              </article>
            
       </div>
     </div>
    );
}

export default OwnerHomePage;