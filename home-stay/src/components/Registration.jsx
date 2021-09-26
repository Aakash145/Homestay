import React from 'react';
import axios from 'axios';

class Registration extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      id: 0,
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      phoneNumber: '',
      streetAddress: '',
      city: '',
      country: '',
      postalCode: ''
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
      axios.post("http://localhost:8080/api/user", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber,
        streetAddress: this.state.streetAddress,
        city: this.state.city,
        country: this.state.country,
        postalCode: this.state.postalCode
      })
      // .then(() => {
      //   this.componentDidMount();
      // })
  }

  handleChange(event){
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render(){
  return (
      <form className="col s12 card large" onSubmit={(e) => this.registerUser(e)}>
          <h3 className="center">New user</h3>
    <br/>
    <br/>

      <div className="row">
        <div className="input-field col s6">
          <input id="firstName" type="text" className="validate" onChange={(e) => this.handleChange(e)}/>
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="lastName" type="text" className="validate" onChange={(e) => this.handleChange(e)}/>
          <label htmlFor="lastName">Last Name</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" onChange={(e) => this.handleChange(e)}/>
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="email" type="email" className="validate" onChange={(e) => this.handleChange(e)}/>
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field col s6">
          <input id="phoneNumber" type="text" className="validate" onChange={(e) => this.handleChange(e)}/>
          <label htmlFor="phoneNumber">Phone</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="streetAddress" type="text" className="validate" onChange={(e) => this.handleChange(e)}/>
          <label htmlFor="streetAddress">Street Address</label>
        </div>
        <div className="input-field col s6">
          <input id="city" type="text" className="validate" onChange={(e) => this.handleChange(e)}/>
          <label htmlFor="city">City</label>
        </div>
        <div className="input-field col s6">
          <input id="country" type="text" className="validate" onChange={(e) => this.handleChange(e)}/>
          <label htmlFor="country">Country</label>
        </div>
        <div className="input-field col s6">
          <input id="postalCode" type="text" className="validate" onChange={(e) => this.handleChange(e)}/>
          <label htmlFor="postalCode">Postal Code</label>
        </div>
        </div>
        <button className="btn waves-effect waves-light teal" type="submit" name="action">Submit</button>
    </form>
  );
  }
};
  
export default Registration;