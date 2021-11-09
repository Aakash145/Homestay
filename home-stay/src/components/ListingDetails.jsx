import React, { useState } from "react";
import { icons } from "react-icons";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
import { houses } from "./HouseListing";

const ListingDetails = () => {
    const [current, setCurrent] = useState(0)
    const length = houses.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(houses) || houses.length <= 0) {
        return null;
    }

    return (
        <div className="caption">
            <section class="page-hero">
                <h1 class="page-hero-title">--- Listing Detail ---</h1>

            </section>
            <section className="slider">
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                {houses.map((house, index) => {
                    return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                                <img src={house.img} alt='house image' className='image' />
                            )}
                        </div>
                    );
                })}
            </section>

            <section class="sectionLD bg-greyLD">

                <div class="section-titleLD">
                    <h1 class="page-hero-title">--- Owner Details ---</h1>
                    <br></br>
                </div>

                <div class="services-centerLD section-centerLD">

                    {/* Loop here */}

                    <article class="serviceLD">
                        <h1><b>Owner Name</b></h1>
                        <div class="underlineLD"></div>
                        <p>
                            Name here...
                        </p>
                    </article>

                    <article class="serviceLD">
                        <h1><b>Street Address</b></h1>
                        <div class="underlineLD"></div>
                        <p>
                            Address here...
                        </p>
                    </article>

                    <article class="serviceLD">
                        <h1><b>City</b></h1>
                        <div class="underlineLD "></div>
                        <p>
                            City here...
                        </p>
                    </article>
                    <article class="serviceLD">
                        <h1><b>Country</b></h1>
                        <div class="underlineLD "></div>
                        <p>
                            Country here...
                        </p>
                    </article>
                    <article class="serviceLD">
                        <h1><b>Postal Code</b></h1>
                        <div class="underlineLD "></div>
                        <p>
                            Postal Code here...
                        </p>
                    </article>
                    <article class="serviceLD">
                        <h1><b>Contact Info</b></h1>
                        <div class="underlineLD "></div>
                        <p>
                            Contact here...
                        </p>
                    </article>

                </div>
            </section>

        </div >
    )
}

export default ListingDetails;