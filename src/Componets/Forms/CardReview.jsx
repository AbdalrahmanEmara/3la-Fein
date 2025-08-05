import React from "react";
import Style from "../Forms/ReviewStyle.module.css";
import CurrentReviewHead from "./CurrentReviewHead";

const CardReview = () => {
  return (
    <section className={Style["card-review"]}>
      <div className={Style["current-review"]}>
        <CurrentReviewHead name="Emara" job="Frontend Developer" />

        <p className="review-content-text">
          An enim nullam tempor gravida donec enim congue magna at pretium purus
          pretium ligula rutrum luctus risusd diam eget risus varius blandit sit
          amet non magna.
        </p>
      </div>
    </section>
  );
};

export default CardReview;
