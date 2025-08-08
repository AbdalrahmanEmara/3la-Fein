import { useNavigate } from "react-router-dom";
import Style from "./Footer.module.css";

export default function Footer() {
  const navigate = useNavigate();

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
    <footer className={Style.footer} id="Footer">
      <div className={Style.footerContent}>
        <div className={`${Style.logoCol} ${Style.footerCol}`}>
          <div className={Style.logo}>
            <img src="/images/logo-icon.png" alt="Logo" />
            <span>3la Fe!n</span>
          </div>
          <p>
            There are many variations of passages of available but it is the
            majority of suffered that a alteration.
          </p>
        </div>
        <div className={`${Style.footerCol}`}>
          <h5>About</h5>
          <ul className={Style.footerLinksSections}>
            <li className={Style.footerLi}>
              <button
                onClick={() => {
                  navigateToSection("Hero");
                }}
              >
                Hero
              </button>
            </li>
            <li className={Style.footerLi}>
              <button
                onClick={() => {
                  navigateToSection("Categories");
                }}
              >
                Categories
              </button>
            </li>
            <li className={Style.footerLi}>
              <button
                onClick={() => {
                  navigateToSection("Discover");
                }}
              >
                Discover
              </button>
            </li>
            <li className={Style.footerLi}>
              <button
                onClick={() => {
                  navigateToSection("Navigator");
                }}
              >
                Navigator
              </button>
            </li>
            <li className={Style.footerLi}>
              <button
                onClick={() => {
                  navigateToSection("Reviews");
                }}
              >
                Reviews
              </button>
            </li>
          </ul>
        </div>
        <div className={`${Style.footerCol}`}>
          <h5>Support</h5>
          <ul>
            <li>Customer Support</li>
            <li>Privacy & Policy</li>
            <li>Contact Channels</li>
          </ul>
        </div>
        <div className={`${Style.footerCol} ${Style.subscribeCol}`}>
          <h5>
            JOIN OUR COMMUNITY<span className={Style.emoji}>🔥</span>
          </h5>
          <div className={Style.subscribeForm}>
            <input type="email" placeholder="Enter your email" />
            <button>
              <span>&#8594;</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
