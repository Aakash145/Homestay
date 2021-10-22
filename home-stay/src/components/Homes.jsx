import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
  
const Homes = () => {

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
    <section className="page-hero">
        <h1 className="page-hero-title">--- All Listings ---</h1>
    </section>
      <div className="Houselist">   
      {listing.map((eachListing) => {
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
  </div>
    );
};
  
export default Homes;