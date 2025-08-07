import Style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={Style.footer}>
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
          <ul>
            <li>Discover</li>
            <li>Find Travel</li>
            <li>Popular Destinations</li>
            <li>Reviews</li>
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
