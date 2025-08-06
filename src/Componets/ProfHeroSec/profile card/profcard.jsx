import star from "../img/star.png";
import more from "../img/more-fill 1.png";
import share from "../img/share.png";
import face from "../img/Facebook.png";
import twit from "../img/Twitter.png";
import insta from "../img/Instagram.png";
import { useState } from "react";

function ProfileCard({ image, name, description }) {
  const [showAlert, setShowAlert] = useState(false);

  const handleShare = () => {
    setShowAlert(true);
  };

  return (
    <div className="text-center p-3 prof-card position-relative">
      {showAlert && (
        <div className="alert alert-light border shadow px-4 py-2">
          Profile link is copied
          <button
            type="button"
            className="btn-close ms-2"
            onClick={() => setShowAlert(false)}
          ></button>
        </div>
      )}

      <div className="mx-auto py-3">
        <img src={image} alt={name} className="rounded-circle" />
      </div>
      <h5 className="my-3">{name}</h5>

      <div className="d-flex justify-content-center align-items-center">
        <img src={star} alt="star" />
        <span>4.9</span>
        <span className="text-muted">(256 reviews)</span>
      </div>

      <div className="d-flex justify-content-center gap-2 my-5">
        <button className="btn-log px-3 py-2 text-white">Log Out</button>
        <button className="btn btn-light" onClick={handleShare}>
          <img src={share} alt="share" width="20" />
        </button>
        <button className="btn btn-light">
          <img src={more} alt="more" width="20" />
        </button>
      </div>

      <div className="d-flex justify-content-center gap-3 mb-5">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light"
        >
          <img src={face} alt="facebook" width="20" />
        </a>

        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light"
        >
          <img src={twit} alt="twitter" width="20" />
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light"
        >
          <img src={insta} alt="instagram" width="20" />
        </a>
      </div>

      <p className="text-muted fs-7">{description}</p>
    </div>
  );
}

export default ProfileCard;
