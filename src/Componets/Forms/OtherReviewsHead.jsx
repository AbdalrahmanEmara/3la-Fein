import React from "react";
import Style from "./ReviewStyle.module.css"
const CardReviewOthers = ({ name, job}) => {
  return (
    <div className= {Style["another-review"]} >
      <img src="" alt="" className={Style["avatar"]}/>
      <div className={Style["section-name-job"]}>
        <p className={Style["review-profile-name"]}>{name}</p>
        <p className={Style["review-profile-job"]}>{job}</p>
      </div>
    </div>
  );
};

export default CardReviewOthers;
