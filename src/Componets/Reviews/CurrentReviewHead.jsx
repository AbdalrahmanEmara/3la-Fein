import Style from "./ReviewStyle.module.css";

const CurrentReviewHead = ({ name, job, image, description }) => {
  return (
    <>
      <div className={Style["current-review-head"]}>
        <img src={image} alt="" className={Style["avatar"]} />
        <div className={Style["section-name-job"]}>
          <p className={Style["review-profile-name"]}>{name}</p>
          <p className={Style["review-profile-job"]}>{job}</p>
        </div>
      </div>
      <p className={Style["review-content-text"]}>{description}</p>
    </>
  );
};

export default CurrentReviewHead;
