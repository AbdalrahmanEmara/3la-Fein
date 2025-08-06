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
          <div className={Style["btn-container"]}>
            <button className={Style["btn-prev-review"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.4091 7.26521C10.0032 6.8906 9.37058 6.9159 8.99597 7.32172L5.7652 10.8217C5.4116 11.2047 5.4116 11.7952 5.76519 12.1782L8.99597 15.6783C9.37057 16.0841 10.0032 16.1094 10.409 15.7348C10.8149 15.3602 10.8402 14.7276 10.4656 14.3217L8.78397 12.5L18.5 12.5C19.0523 12.5 19.5 12.0523 19.5 11.5C19.5 10.9477 19.0523 10.5 18.5 10.5L8.784 10.5L10.4656 8.67829C10.8402 8.27247 10.8149 7.63981 10.4091 7.26521Z"
                  fill="#777E91"
                />
              </svg>
            </button>
            <button className={Style["btn-next-review"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.5909 7.26521C14.9968 6.8906 15.6294 6.9159 16.004 7.32172L19.2348 10.8217C19.5884 11.2047 19.5884 11.7952 19.2348 12.1782L16.004 15.6783C15.6294 16.0841 14.9968 16.1094 14.591 15.7348C14.1851 15.3602 14.1598 14.7276 14.5344 14.3217L16.216 12.5L6.5 12.5C5.94771 12.5 5.5 12.0523 5.5 11.5C5.5 10.9477 5.94771 10.5 6.5 10.5L16.216 10.5L14.5344 8.67829C14.1598 8.27247 14.1851 7.63981 14.5909 7.26521Z"
                  fill="#777E91"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={Style["client-pagingation"]}>
          <div className={Style["list-reviews"]}>
            <OtherReviewsHead name="ali" job="fr" image="images/person1.png" />
            <OtherReviewsHead name="ali" job="fr" image="images/person2.png" />
            <OtherReviewsHead name="ali" job="fr" image="images/person3.png" />
            <OtherReviewsHead name="ali" job="fr" image="images/person4.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
