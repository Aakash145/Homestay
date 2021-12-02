import React from "react";
import { icons } from "react-icons";
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader'

const ListingDetails = (props) => {

    const [listing, setListing] = useState();
    const [current, setCurrent] = useState(0)
    const [loadState, setLoadState] = useState(true);
    const {id} = props.match.params
    const [noOfImages, setNoOfImages] = useState(0);

    const nextSlide = () => {
        setCurrent(current === noOfImages - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? noOfImages - 1 : current - 1);
    };

    // if (!Array.isArray(listing) || listing.length <= 0) {
    //     return null;
    // }

    console.log(noOfImages)
    useEffect(() => {
        setTimeout(() => setLoadState(false), 3000)
        var idOfUnit = id
        // {console.log(idOfUnit)}
        axios
          .get("http://localhost:8080/api/unit/", {
            params: { ID: idOfUnit }
          })
          .then((res) => {
            setListing(res.data);
            setNoOfImages(res.data.images.length)
          });
      }, []);

      function loadListingDetails(){

        return (
            <div>
                <section className="slider">
                    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                    {listing.images.map((eachImage, index) => {
                        return (
                            <div
                                className={index === current ? 'slide active' : 'slide'}
                                key={index}
                            >
                                {index === current && (
                                    <img src={`data:image/jpeg;base64,${eachImage.data}`} alt='house image' className='image' />
                                )}
                            </div>
                        );
                    })}
                    {/* <div>
                    <img src={`data:image/jpeg;base64,${listing.images[0].data}`} alt='house image' className='image' /> 
                    </div> */}
                </section>

                <section class="sectionLD bg-greyLD">
    
                    <div class="section-titleLD">
                        <h1 class="page-hero-title">--- Owner Details ---</h1>
                        <br></br>
                    </div>
    
                    <div class="services-centerLD section-centerLD">
                        <article class="serviceLD">
                            <h1><b>Unit Title</b></h1>
                            <div class="underlineLD"></div>
                            <p>
                            {listing.title}
                            </p>
                        </article>
    
                        <article class="serviceLD">
                            <h1><b>Street Address</b></h1>
                            <div class="underlineLD"></div>
                            <p>
                            {listing.address}
                            </p>
                        </article>
    
                        <article class="serviceLD">
                            <h1><b>City</b></h1>
                            <div class="underlineLD "></div>
                            <p>
                            {listing.city}
                            </p>
                        </article>
                        <article class="serviceLD">
                            <h1><b>Country</b></h1>
                            <div class="underlineLD "></div>
                            <p>
                            {listing.country}
                            </p>
                        </article>
                        <article class="serviceLD">
                            <h1><b>Postal Code</b></h1>
                            <div class="underlineLD "></div>
                            <p>
                            {listing.postalCode}
                            </p>
                        </article>
                        <article class="serviceLD">
                            <h1><b>Contact Info</b></h1>
                            <div class="underlineLD "></div>
                            <p>
                            {listing.username}
                            </p>
                        </article>
                    </div>
                    <Link to="/bookAppointment"
                        className="home-btn"
                    >
                        Confirm
                    </Link>
                </section>
                </div>
        )
      }

      console.log(listing);

    return (
    
        <div className="caption">
        <section class="page-hero">
            <h1 class="page-hero-title">--- Listing Detail ---</h1>

        </section>
          {loadState ? <Loader /> : loadListingDetails()}
    
        </div>
      );
    };
    

export default ListingDetails;