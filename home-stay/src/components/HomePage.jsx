import React from 'react';
import { houses } from "./HouseListing";
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
    <h2>Featured Listings</h2>
    <div className="Houselist">   
      {listing.map((eachListing) => {
        return (
          <article className="house">
            <img src={`data:image/jpeg;base64,${eachListing.images.data}`} alt="House"></img>
            <h1 >{eachListing.title}</h1>
            <h1 >{eachListing.address}</h1>
            <h4>{eachListing.city}</h4>
          </article>
        );
      })}
   </div>
</div>
  );
};
  
export default HomePage;