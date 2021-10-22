import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader'


const Homes = () => {

  const [listing, setListing] = useState([]);
  const [loadState, setLoadState] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoadState(false), 2000)

    axios.get("http://localhost:8080/api/units")
    .then((res) => {
      setListing(res.data)
      console.log(res.data)
      console.log(listing)
    })
  }, []);

  function loadListing(){
    return(
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
    )
  }
  return (
    <div className="caption">
    <section class="page-hero">
        <h1 class="page-hero-title">--- All Listings ---</h1>
    </section>
    {loadState ? <Loader /> : loadListing()}
  </div>
    );
};
  
export default Homes;