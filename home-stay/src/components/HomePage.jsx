import React from 'react';
import { houses } from "./HouseListing";
  
const HomePage = () => {

  return (
  <div className="caption">
    <h2>Featured Listings</h2>
    <div className="Houselist">   
      {houses.map((eachBook) => {
        return (
          <article className="house">
            <img src={eachBook.img} alt="House"></img>
            <h1 >{eachBook.title}</h1>
            <h1 >{eachBook.address}</h1>
            <h4>{eachBook.aurthor}</h4>
          </article>
        );
      })}
   </div>
</div>
  );
};
  
export default HomePage;