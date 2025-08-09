import CardReview from "./CardReview";
import OtherReviewsHead from "./OtherReviewsHead";
import React, { useState } from "react";

import Style from "./ReviewStyle.module.css";

const Reviews = () => {
  const [count, setCount] = useState(0);

  const handleClick = (id) => {
    setCount(id);
  };

  const navigateToSection = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className={Style["main-section-review"]}>
      <div className={Style["main-container"]}>
        <div className={Style["review-section-1"]}>
          <div className={Style["main-text-reviews"]}>
            <p className={Style["testimonial-head"]}>TESTIMONIALS</p>
            <p className={Style["ourhappyclient"]}>
              What our happy clients say
            </p>
            <button
              className={Style["btn--contact--us"]}
              onClick={() => navigateToSection("Footer")}
            >
              Contact Us
            </button>
          </div>
          <CardReview count={count} setCount={setCount} />
        </div>
        <div className={Style["client-pagingation"]}>
          <div className={Style["list-reviews"]}>
            <OtherReviewsHead
              name="Isabelle"
              job="BA at Robin"
              image="/images/person1.png"
              onClick={() => handleClick(0)}
            />
            <OtherReviewsHead
              name="Jonas"
              job="Computer Science"
              image="/images/person2.png"
              onClick={() => handleClick(1)}
            />
            <OtherReviewsHead
              name="Omar"
              job="UX Designer"
              image="/images/person3.png"
              onClick={() => handleClick(2)}
            />
            <OtherReviewsHead
              name="Margrete"
              job="Product Manager"
              image="/images/person4.png"
              onClick={() => handleClick(3)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
