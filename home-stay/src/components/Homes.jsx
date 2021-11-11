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
  
  function handleClick(event,citySearch){
    event.preventDefault();
    console.log(citySearch);
    axios.post("http://localhost:8080/api/search", {
        city: citySearch        
      }).then((res) => {
        setListing(res.data)        
      });
  };

  function loadListing() {
    return (
      <div className="Houselist">
        {listing.map((eachListing) => {
          return (
            <article className="house">
              <a href={`ListingDetails/${eachListing.id}`} >
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
    <div>

      {/* Page Heading */}
      <div className="caption">
        <section class="page-hero">
          <h1 class="page-hero-title">--- All Listings ---</h1>
        </section>
      </div>

      {/* Main div */}
      <section className="products">
        <div class="filters">
          <div class="filters-container">

            <form class="form-input">
              <input type="text" class="search-input" placeholder="search..." />
            </form>

            <h5>City</h5>

            <ul>
              <li onClick={e => handleClick(e,"Surrey")} class="filterOptn">&nbsp;&nbsp;Surrey</li>
              <li onClick={e => handleClick(e,"Langley")} class="filterOptn">&nbsp;&nbsp;Langley</li>
              <li onClick={e => handleClick(e,"Delta")} class="filterOptn">&nbsp;&nbsp;Delta</li>
              <li onClick={e => handleClick(e,"Vancouver")} class="filterOptn">&nbsp;&nbsp;Vancouver</li>
            </ul>
            <h5>Price Range</h5>
            <ul>
              <li class="filterOptn">&nbsp;&nbsp;less than $500</li>
              <li class="filterOptn">&nbsp;&nbsp;$500 - $800</li>
              <li class="filterOptn">&nbsp;&nbsp;$800 - $1200</li>
              <li class="filterOptn">&nbsp;&nbsp;more than $1200</li>
            </ul>
            <h5>Amenities</h5>
            <ul>
              <li class="filterOptn">&nbsp;&nbsp;Pet Friendly</li>
              <li class="filterOptn">&nbsp;&nbsp;Car Parking</li>
            </ul>

          </div>
        </div>

        <div className="caption">
          {loadState ? <Loader /> : loadListing()}
        </div>
      </section>
    </div>
  );
};

export default Homes;