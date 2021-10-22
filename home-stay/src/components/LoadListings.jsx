import React from 'react';


const LoadListings = (listings) => {
    return (
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

export default LoadListings;