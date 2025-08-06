import React from 'react'
import Style from './ReviewStyle.module.css'
const CurrentReviewHead = ({name, job}) => {
  return (
    <div className= {Style["current-review-head"]} >
              <img src="../../public/images/person1.png" alt="" className={Style["avatar"]}/>
              <div className={Style["section-name-job"]}>
                <p className={Style["review-profile-name"]}>{name}</p>
                <p className={Style["review-profile-job"]}>{job}</p>
              </div>
        </div>
  )
}

export default CurrentReviewHead;