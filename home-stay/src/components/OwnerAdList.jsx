import React from 'react';
import { houses } from "./HouseListing";
  
const OwnerAdList = () => {
  return (
    <div className="caption">
    <section class="page-hero">
        <h1 class="page-hero-title">--- My Posted Ads ---</h1>
    </section>
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
  
export default OwnerAdList;