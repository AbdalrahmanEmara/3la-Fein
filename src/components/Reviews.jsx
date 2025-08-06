import React from "react";
import CardReview from "./CardReview";
import OtherReviewsHead from "./OtherReviewsHead";

import Style from "./ReviewStyle.module.css";

const Reviews = () => {
  return (
    <section className={Style["main-section-review"]}>
      <div className={Style["main-container"]}>
        <div className={Style["review-section-1"]}>
          <div className={Style["main-text-reviews"]}>
            <p className={Style["testimonial-head"]}>TESTIMONIALS</p>
            <p className={Style["ourhappyclient"]}>
              What our happy clients say
            </p>
            <button className={Style["btn--contact--us"]}>Contact Us</button>
          </div>
          <CardReview />
        </div>
        <div className={Style["client-pagingation"]}>
          <div className={Style["list-reviews"]}>
            <OtherReviewsHead
              name="Isabelle"
              job="fr"
              image="../../public/images/person1.png"
            />
            <OtherReviewsHead
              name="ali"
              job="fr"
              image="../../public/images/person2.png"
            />
            <OtherReviewsHead
              name="ali"
              job="fr"
              image="../../public/images/person3.png"
            />
            <OtherReviewsHead
              name="ali"
              job="fr"
              image="../../public/images/person4.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
