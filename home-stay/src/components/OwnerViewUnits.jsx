import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

//axios.get(`/api/v3/product/${productId}`)

const OwnerViewUnits = () => {
  const [username, setUsername] = useState("abc@gmail.com");

  const [listing, setListing] = useState([]);

  useEffect(() => {
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

  return (
    <div className="caption">
      <h2>Owner Listings</h2>
      <div className="Houselist">
        {listing.map((eachListing) => {
          return (
            <article className="house">
              <img
                src={`data:image/jpeg;base64,${eachListing.images.data}`}
                alt="House"
              ></img>
              <h1>{eachListing.title}</h1>
              <h1>{eachListing.address}</h1>
              <h4>{eachListing.city}</h4>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default OwnerViewUnits;
