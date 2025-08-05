import React from "react";
import CardReview from "./CardReview";
import OtherReviewsHead from "./OtherReviewsHead";

import Style from '../Forms/ReviewStyle.module.css'

const Reviews = () => {
  return (
    <section className={Style["main-section-review"]}>
      <div className={Style["main-container"]}>
        <div className={Style["review-section-1"]}>
          <div className={Style["main-text-reviews"]}>
            <p className={Style["testimonial-head"]}>TESTIMONIALS</p>
            <p className={Style["ourhappyclient"]}>What our happy clients say</p>
            <button className={Style["btn--contact--us"]}>Contact Us</button>
          </div>
          <CardReview/>
        </div>
        <div className={Style["client-pagingation"]}>
          <div className={Style["list-reviews"]}>
          <OtherReviewsHead name='ali' job='fr'/>
          <OtherReviewsHead name='ali' job='fr'/>
          <OtherReviewsHead name='ali' job='fr'/>
          <OtherReviewsHead name='ali' job='fr'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
