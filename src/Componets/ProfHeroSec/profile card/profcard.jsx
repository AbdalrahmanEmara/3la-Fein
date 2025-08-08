import star from "../img/star.png";
import share from "../img/share.png";
import face from "../img/Facebook.png";
import twit from "../img/Twitter.png";
import insta from "../img/Instagram.png";
import { useNavigate } from "react-router-dom";
import {
  getCurrentUser,
  clearCurrentUser,
  getUsers,
  setCurrentUser,
} from "../../Forms/Storage";
import { useState, useEffect } from "react";

function ProfileCard({ name, description }) {
  const [showAlert, setShowAlert] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [currentUser, setCurrentUserState] = useState(getCurrentUser());

  const navigate = useNavigate();

  const handleLogout = () => {
    clearCurrentUser();
    setCurrentUserState(null);
    navigate("/");
  };

  const handleShare = () => {
    setShowAlert(true);
  };

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result; // Data URL string

        const user = getCurrentUser();
        if (user) {
          user.src = base64;

          // Save to current user storage
          localStorage.setItem("currentUser", JSON.stringify(user));

          // Also update in users list
          const users = getUsers();
          const updatedUsers = users.map((u) =>
            u.email === user.email ? { ...u, src: base64 } : u
          );
          localStorage.setItem("users", JSON.stringify(updatedUsers));

          // Update both localStorage and state
          setCurrentUser(user);
          setCurrentUserState(user);
          setImageURL(base64);
        }
      };
      reader.readAsDataURL(file); // <-- converts to base64
    }
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
        {currentUser?.src ? (
          <img src={currentUser.src} alt={name} className="rounded-circle" />
        ) : (
          <div
            className="rounded-circle bg-secondary"
            style={{ width: "100px", height: "100px" }}
          ></div>
        )}
      </div>

      <h5 className="my-3">
        {currentUser?.email ? currentUser.email.split("@")[0] : ""}
      </h5>

      <div className="d-flex justify-content-center align-items-center">
        <img src={star} alt="star" />
        <span>4.9</span>
        <span className="text-muted">(256 reviews)</span>
      </div>

      <div className="d-flex justify-content-center gap-2 my-5">
        <button className="btn-log px-3 py-2 text-white" onClick={handleLogout}>
          Log Out
        </button>

        <button type="button" className="btn btn-light" onClick={handleShare}>
          <img src={share} alt="share" width="20" />
        </button>

        <div
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          <button
            className="btn btn-light"
            style={{ cursor: "default", position: "relative" }}
          >
            Update Image
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                cursor: "default",
                opacity: 0,
              }}
            />
          </button>
        </div>
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
