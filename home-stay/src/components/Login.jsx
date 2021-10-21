import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Registration } from '../components/Registration';
import { User } from '../model/User';
import { authHeader } from '../helpers/auth-header';

import createBrowserHistory from "../helpers/history";
import { Redirect } from 'react-router';



class Login extends React.Component{
  constructor(props){
    super(props);

    this.state={
      emailLogin:'',
      passwordLogin:'',
      loginFlag : 0
    }
  }

    handleChange(event){
      this.setState({
        [event.target.name]: event.target.value
      })
    }


  loginUser(event){
        event.preventDefault();
        let user_name = this.state.emailLogin;
        let pass = this.state.passwordLogin;
        localStorage.clear();

        const response = axios.post("http://localhost:8080/user/login", {
          username: this.state.emailLogin,
          password: this.state.passwordLogin
        },
         {
            auth: {
               username: this.state.emailLogin,
               password: this.state.passwordLogin
             }
          }
           ).then((response) => {
            const user = new User(user_name, pass,response.data.role,1);
            localStorage.setItem('user', JSON.stringify(user));

          }).catch(error => {
                    console.error(error);
                   const user = new User(null, null,null,2);
                    localStorage.setItem('user', JSON.stringify(user));
          });

          setTimeout(() => {
               let user = JSON.parse(localStorage.getItem('user'));
                 if(user && user.loginStatus ==1){
                             if(user.role =="STUDENT"){
                               createBrowserHistory.push("/userHomePage");
                               window.location.reload();

                               }else{
                               createBrowserHistory.push('/ownerHomePage');
                               window.location.reload();
                 }
              }else if(user && user.loginStatus === 2){
                this.state.loginFlag =2;
                this.setState({loginFlag: 2});
              }


          }, 1000);



    }

  render(){
  return (
    <main>
      <section className="midSection midBlock">
        <form className="loginRegform" onSubmit={(e) => this.loginUser(e)}>
          <div className="container">
          <h2>Existing User</h2>

          {/* Email ID */}
          <div className="loginReg-control">
           <label htmlFor='emailLogin'>Email</label>
           <input id="emailLogin" type="email" name="emailLogin" className="loginReg-input" onChange={(e) => this.handleChange(e)}/>
          </div>

          {/* Password */}
          <div className="loginReg-control">
           <label htmlFor="passwordLogin">Password</label>
           <input id="passwordLogin" name="passwordLogin" type="password" className="loginReg-input" onChange={(e) => this.handleChange(e)} />
          </div>
         <button className="regLog-btn" type="submit" name="action">
            Login
          </button>
          { this.state.loginFlag === 2 && <h4 className="errorLogin">Your login credentials could not be verified, please try again.</h4>}

          </div>

        </form>

      </section>

    </main>

  //   <div className="container"> 
  //   <div className="row">
  //   <div className="col s3">
  //   <form className="col s12 card small">
  //   <h3 className="center">Existing user</h3>
  //   <br/>
  //   <br/>
  //   <div className="row">
  //       <div className="input-field col s12">
  //         <input id="emailLogin" type="email" className="validate" />
  //         <label htmlFor="emailLogin">Email</label>
  //       </div>
  //     </div>
  //     <div className="row">
  //       <div className="input-field col s12">
  //         <input id="passwordLogin" type="password" className="validate" />
  //         <label htmlFor="passwordLogin">Password</label>
  //       </div>
  //     </div>
  //     <button className="btn waves-effect waves-light teal" type="submit" name="action">Login</button>
  //   </form>
  //     </div>
  //     <div className="col s9">
  //     <Registration/>
  //     </div>
  //     </div>
  // </div>
  );
}
};
  
export default Login;