import React from 'react';
import { NavLink } from 'react-router-dom';
import Registration from '../components/Registration';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }

  render(){
  return (
    <div className="container">
    <div className="row">
    <div className="col s3">
    <form className="col s12 card small">
    <h3 className="center">Existing user</h3>
    <br/>
    <br/>
    <div className="row">
        <div className="input-field col s12">
          <input id="emailLogin" type="email" className="validate" />
          <label htmlFor="emailLogin">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="passwordLogin" type="password" className="validate" />
          <label htmlFor="passwordLogin">Password</label>
        </div>
      </div>
      <button className="btn waves-effect waves-light teal" type="submit" name="action">Login</button>
    </form>
      </div>
      <div className="col s9">
      <Registration/>
      </div>
      </div>
  </div>
  );
}
};
  
export default Login;