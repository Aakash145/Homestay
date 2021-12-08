import React from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

class Registration extends React.Component {

  constructor(props){
    super(props);
//     this.history = useHistory();
    this.state = {
      users: [],
      id: 0,
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      phoneNumber: '',
      role: ''
    }
  }

  // componentDidMount(){
  //   axios.get("http://localhost:8080/api/")
  //   .then((res) => {
  //     this.setState({
  //       ...this.state,
  //       users: res.body,
  //     })
  //   })
  // }

  registerUser(event){
      event.preventDefault();
      const { history } = this.props;
      axios.post("http://localhost:8080/api/user", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber,
        role: this.state.role
      });
        history.push("/login");

  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
  return (
    <div>
    <section class="page-hero">
        <h1 class="page-hero-title">--- Registration ---</h1>
    </section>

    <main>
    <section className="midSection midBlock">
      <form className="loginRegform" onSubmit={(e) => this.registerUser(e)}>
        <div className="container">
        <h2>New User</h2>

        {/* First Name */}
        <div className="loginReg-control">
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" type="text" className="loginReg-input" onChange={(e) => this.handleChange(e)}/>
        </div>

        {/* Last Name */}
        <div className="loginReg-control">
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" type="text" className="loginReg-input"  onChange={(e) => this.handleChange(e)}/>
        </div>

        {/* Password */}
        <div className="loginReg-control">
        <label htmlFor="password">Password</label>
        <input name="password" type="password" className="loginReg-input" onChange={(e) => this.handleChange(e)}/>
        </div>

        {/* Email */}
        <div className="loginReg-control">
        <label htmlFor="email">Email</label>
        <input name="email" type="email" className="loginReg-input" onChange={(e) => this.handleChange(e)}/>
        </div>

        {/* Phone */}
        <div className="loginReg-control">
        <label htmlFor="phoneNumber">Phone</label>
        <input name="phoneNumber" type="text" className="loginReg-input" onChange={(e) => this.handleChange(e)}/>
        </div>

        <div className="loginReg-control">
        <label>Register As:</label>
        <p>
        <label id="rad1">
        <input name="role" type="radio" value="STUDENT" onChange={(e) => this.handleChange(e)}/>
        <span>Student</span>
        </label>
        <label id="rad2">
        <input name="role" type="radio" value="OWNER" onChange={(e) => this.handleChange(e)}/>
        <span>Owner</span>
        </label>
        </p>
        </div>
        <button className="reg-btn" type="submit" name="action">
          Register
        </button>
        </div>
      </form>
    </section>
  </main>
</div>
    //   <form className="col s12 card large" onSubmit={(e) => this.registerUser(e)}>
    //       <h3 className="center">New user</h3>
    // <br/>
    // <br/>

    //   <div className="row">
    //     <div className="input-field col s6">
    //       <input id="firstName" type="text" className="validate" onChange={(e) => this.handleChange(e)}/>
    //       <label htmlFor="firstName">First Name</label>
    //     </div>
    //     <div className="input-field col s6">
    //       <input id="lastName" type="text" className="validate" onChange={(e) => this.handleChange(e)}/>
    //       <label htmlFor="lastName">Last Name</label>
    //     </div>
    //   </div>

    //   <div className="row">
    //     <div className="input-field col s12">
    //       <input id="password" type="password" className="validate" onChange={(e) => this.handleChange(e)}/>
    //       <label htmlFor="password">Password</label>
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="input-field col s6">
    //       <input id="email" type="email" className="validate" onChange={(e) => this.handleChange(e)}/>
    //       <label htmlFor="email">Email</label>
    //     </div>
    //     <div className="input-field col s6">
    //       <input id="phoneNumber" type="text" className="validate" onChange={(e) => this.handleChange(e)}/>
    //       <label htmlFor="phoneNumber">Phone</label>
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="input-field col s6">
    //       <input id="streetAddress" type="text" className="validate" onChange={(e) => this.handleChange(e)}/>
    //       <label htmlFor="streetAddress">Street Address</label>
    //     </div>
    //     <div className="input-field col s6">
    //       <input id="city" type="text" className="validate" onChange={(e) => this.handleChange(e)}/>
    //       <label htmlFor="city">City</label>
    //     </div>
    //     <div className="input-field col s6">
    //       <input id="country" type="text" className="validate" onChange={(e) => this.handleChange(e)}/>
    //       <label htmlFor="country">Country</label>
    //     </div>
    //     <div className="input-field col s6">
    //       <input id="postalCode" type="text" className="validate" onChange={(e) => this.handleChange(e)}/>
    //       <label htmlFor="postalCode">Postal Code</label>
    //     </div>
    //     </div>
    //     <button className="btn waves-effect waves-light teal" type="submit" name="action">Submit</button>
    // </form>
  );
  }
};
  
export default Registration;