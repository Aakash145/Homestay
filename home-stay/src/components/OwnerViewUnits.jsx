import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from './Loader'

//axios.get(`/api/v3/product/${productId}`)
const OwnerViewUnits = () => {
  const [loadState, setLoadState] = useState(true);

  const [listing, setListing] = useState([]);


  useEffect(() => {
    setTimeout(() => setLoadState(false), 2000)
    let user = JSON.parse(localStorage.getItem("user"));
    
    axios
      .get("http://localhost:8080/api/ownerunits/", {
        params: { username: user.userName },
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
          <img
            src={`data:image/jpeg/png;base64,${eachListing.images[0].data}`}
            alt="House"
          ></img>
          <h1>{eachListing.title}</h1>
          <h1>{eachListing.address}</h1>
          <h4>{eachListing.city}</h4>
        </article>
      );
    })}
  </div>
    )
  }

  return (
    
    <div className="caption">
      <h2>Owner Listings</h2>
      {loadState ? <Loader /> : loadListing()}

    </div>
  );
};

export default OwnerViewUnits;
