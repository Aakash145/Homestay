import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader'


const Homes = () => {

  const [listing, setListing] = useState([]);
  const [loadState, setLoadState] = useState(true);
  const [recommendations, setRecommendations] = useState(true);
  const [userName, setUserName] = useState();

  useEffect(() => {
    setTimeout(() => setLoadState(false), 2000)

    let user = JSON.parse(localStorage.getItem("user"));
    if(user != null){
      console.log("Username in Home" + user.userName);
      setUserName(user.userName);
      axios({
        method: "get",
        url: "http://localhost:8080/api/user/recommendation/"+ user.userName,
        headers: { Accept: "application/json ,text/plain, */*" },
        auth: {
          username: user.userName,
          password: user.password,
        },
      }).then((res) => {
        setRecommendations(res.data)   
        console.log(res.data)     
      });
    }

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
    let user = JSON.parse(localStorage.getItem("user"));
    let data = {
      "city": citySearch
    }
    axios({
      method: "post",
      url: "http://localhost:8080/api/search",
      data: data,
      auth: {
        username: user.userName,
        password: user.password,
      },
    })
      .then((res) => {
        //console.log(res)
        setListing(res.data)   

      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  function loadListing() {
    return (
      <div className="Houselist">
        {listing.map((eachListing) => {
          return (
            <article className="house">
              <a href={`ListingDetails/${eachListing.id}`} >
                <img src={`data:image/jpeg;base64,${eachListing.images[0].data}`} alt="House"></img>
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

    // Recommendations
    function loadRecommendations() {
      if (Array. isArray(recommendations.recommendedItems) && recommendations.recommendedItems. length) {
        
        return (
          <div>
            <div className="caption">
              {/* <section class="page-hero"> */}
              <h1 class="page-hero-title_2">  Your Recommendations</h1>
  
              {/* </section> */}
            </div>
            <div className="Houselist">
              {recommendations.recommendedItems.map((eachListing) => {
                return (
                  <article className="house">
                    <a href={`ListingDetails/${eachListing.id}`} >
                      <img src={`data:image/jpeg;base64,${eachListing.images[0].data}`} alt="House"></img>
                      <h1 >{eachListing.title}</h1>
                      <h1 >{eachListing.address}</h1>
                      <h4>{eachListing.city}</h4>
                    </a>
                  </article>
                );
              })}
            </div>
            <br>
            </br>
            <br></br>
  
            <div className="caption">
              {/* <section class="page-hero"> */}
              <h1 class="page-hero-title_2">  All Other Listings</h1>
  
              {/* </section> */}
            </div>
  
          </div>
        )
      }
  
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

            <h5>City</h5>

            <ul>
              <li onClick={e => handleClick(e,"Surrey")} class="filterOptn">&nbsp;&nbsp;Surrey</li>
              <li onClick={e => handleClick(e,"Langley")} class="filterOptn">&nbsp;&nbsp;Langley</li>
              <li onClick={e => handleClick(e,"Delta")} class="filterOptn">&nbsp;&nbsp;Delta</li>
              <li onClick={e => handleClick(e,"Vancouver")} class="filterOptn">&nbsp;&nbsp;Vancouver</li>
            </ul>

          </div>
        </div>

        <div className="caption">
          {loadRecommendations()}
          {loadState ? <Loader /> : loadListing()}
          
        </div>
      </section>
    </div>
  );
};

export default Homes;