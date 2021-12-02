import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from './Loader'
  
const UserReservations = () => {
  const [loadState, setLoadState] = useState(true);
  const count = 0;
  const [listing, setListing] = useState([]);

  useEffect(() => {
    setTimeout(() => setLoadState(false), 2000)
    let user = JSON.parse(localStorage.getItem("user"));
    
    axios
      .get("http://localhost:8080/api/appointment/", {
        params: { email: user.userName },
        auth: {
          username: user.userName,
          password: user.password,
        },
      })
      .then((res) => {
        setListing(res.data);
        console.log(res.data);
        console.log(listing);
      });
  }, []);

  function loadListing(){
    return(
    <div className="Houselist">
    {listing.map((eachListing) => {
      return (
        <article className="house">
          <h1>Appointment No: {count+1}</h1>
          <h4>Appointment Email: {eachListing.email}</h4>
          <h4>Appointment Date/Time: {eachListing.date}</h4>
        </article>
      );
    })}
  </div>
    )
  }

  return (
    <div className="caption">
    <section class="page-hero">
        <h1 class="page-hero-title">--- My Reservations ---</h1>

    </section>
      <div className="Houselist">   
      {loadState ? <Loader /> : loadListing()}
     </div>
  </div>
    );
};
  
export default UserReservations;