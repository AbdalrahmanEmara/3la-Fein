import Style from "./ReviewStyle.module.css";

const OtherReviewsHead = ({ name, job, image, onClick }) => {
  return (
    <button className={Style["another-review"]} onClick={onClick}>
      <img src={image} alt="" className={Style["avatar"]} />
      <div className={Style["section-name-job"]}>
        <p className={Style["review-profile-name"]}>{name}</p>
        <p className={Style["review-profile-job"]}>{job}</p>
      </div>
    </button>
  );
};

export default OtherReviewsHead;
