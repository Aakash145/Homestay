import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

  
const HomePage = () => {

  const [listing, setListing] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:8080/api/units")
    .then((res) => {
      setListing(res.data)
      console.log(res.data)
      console.log(listing)
    })
  }, []);

  return (
  <div className="caption">
    <section class="page-hero">
        <h1 class="page-hero-title">--- Featured Listings ---</h1>
    </section>
    <div className="Houselist">   
      {listing.slice(0,3).map((eachListing) => {
        return (
          <article className="house">
          <a href="OwnerAdlist" >
            <img src={`data:image/jpeg;base64,${eachListing.images.data}`} alt="House"></img>
            <h1 >{eachListing.title}</h1>
            <h1 >{eachListing.address}</h1>
            <h4>{eachListing.city}</h4>
            </a>
          </article>
        );
      })}
   </div>
   <button className="home-btn" onClick={ () => {
       window.location.href='Homes'
   }}>View more Products</button>
</div>
  );
};
  
export default HomePage;