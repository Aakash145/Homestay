import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Popup from "./Popup"


  class BookAppointment extends React.Component {

    state = {
        seen: false
        };

       togglePopup = () => {
        this.setState({
         seen: !this.state.seen
        });
       };

    constructor(props){
        super(props);
        this.state = {
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          type: '',
          comments: '',
          date: ''
        }
      }
    
      

      submitAppointment(event){
          event.preventDefault();
          const { history } = this.props;
          axios.post("http://localhost:8080/api/appointments", {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            type: this.state.type,
            comments: this.state.comments,
            date: this.state.date.toString()
          }).then((res) => {
            this.togglePopup();
          }
          );
            //history.push("/")
      }
    
      handleChange(event){
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    render(){
    return (
        <div >
            <section class="page-hero">
                <h1 class="page-hero-title">--- Book Appointments ---</h1>
            </section>
            <form className="appointmentForm" onSubmit={(e) => this.submitAppointment(e)}>
            <div className="AdPostList">
                <article className="AdPostList-article">
                    <h2>Appointment Info</h2>

                    <label htmlFor="fname">Firstname</label>
                    <input
                        name="firstName"
                        type="text"
                        className="validate"
                        onChange={(e) => this.handleChange(e)}
                    />

                    <label htmlFor="lname">Lastname</label>
                    <input
                        name="lastName"
                        type="text"
                        className="validate"
                        onChange={(e) => this.handleChange(e)}
                    />

                    <label htmlFor="phone">Contact</label>
                    <input
                        name="phoneNumber"
                        type="text"
                        className="validate"
                        onChange={(e) => this.handleChange(e)}
                    />

                    <label htmlFor="email">Email Address</label>
                    <input
                        name="email"
                        type="text"
                        className="validate"
                        onChange={(e) => this.handleChange(e)}
                    />

                    <div className="loginReg-control">
                        <label>Appointment Medium:</label>
                        <p>
                            <label id="rad1">
                                <input name="role" type="radio" value="ONLINE" onChange={(e) => this.handleChange(e)}/>
                                <span>Online</span>
                            </label>
                            <label id="rad2">
                                <input name="role" type="radio" value="OFFLINE" onChange={(e) => this.handleChange(e)}/>
                                <span>Offline</span>
                            </label>
                        </p>
                    </div>

                    <label htmlFor="comments">Any Comments</label>
                    <input
                        name="comments"
                        type="text"
                        className="validate"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <label htmlFor="email">Date </label>
                    <input type="datetime-local" name="date" onChange={(e) => this.handleChange(e)}/>
                    <button className="reg-btn" type="submit" name="action">
          Confirm Appointment
        </button>
        {this.state.seen && <Popup
      content={<div>
      <h3 className="errorLogin">Appointment Booking Successfull!</h3>
      <h3 className="errorLogin">A confirmation link has been forwarded to your email!</h3>
      </div>}
      handleClose={this.togglePopup}
    />}
                </article>
                
            </div>
            </form>
        </div>

    );
    }
};

export default BookAppointment;




