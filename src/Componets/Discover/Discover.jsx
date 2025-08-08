import { FaCheckCircle } from "react-icons/fa";
import Style from "./Discover.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // import useState

const HeroSection = () => {
  const navigate = useNavigate();

  const [buttonText, setButtonText] = useState("Learn more"); // state for button label

  const navigateToSection = (sectionId) => {
    setButtonText("Use now");
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
    <section className={Style.heroSection}>
      <div className={Style.heroContent}>
        <p className={Style.subheading}>TAKE A LOOK!</p>
        <h1 className={Style.heading}>
          Discover Our Magical Button
          <br />
          3la Fe!n
        </h1>
        <p className={Style.description}>
          Discover exciting activities, events, and destinations with just one
          click. Whether you're craving adventure, culture, or family fun — 3la
          Fe!n connects you with experiences that match your interests, all in
          one magical button.
        </p>

        <ul className={Style.features}>
          <li>
            <FaCheckCircle className={Style.checkIcon} /> Personalized activity
            recommendations
          </li>
          <li>
            <FaCheckCircle className={Style.checkIcon} /> Discover trending
            events near you
          </li>
          <li>
            <FaCheckCircle className={Style.checkIcon} /> Join groups with
            shared interests
          </li>
        </ul>

        <button
          className={Style.heroButton}
          onClick={() => {
            navigateToSection("Hero");
          }}>
          {buttonText}
        </button>
      </div>

      <div className={Style.heroImage}>
        <div className={Style.imageWrapper}>
          <img src="/images/discover0.png" alt="View" className={Style.bgImg} />
          <img
            src="/images/discover1.png"
            alt="Window"
            className={Style.windowImg}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
