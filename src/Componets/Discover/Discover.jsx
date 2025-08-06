import { FaCheckCircle } from "react-icons/fa";
import Style from "./Discover.module.css";

const HeroSection = () => {
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
          An enim nullam tempor gravida donec enim congue magna at pretium purus
          pretium ligula rutrum luctus risus diam eget risus varius blandit sit
          amet non magna.
        </p>

        <ul className={Style.features}>
          <li>
            <FaCheckCircle className={Style.checkIcon} /> Luctus risusd diam
            eget
          </li>
          <li>
            <FaCheckCircle className={Style.checkIcon} /> Donec enim congue
            magna
          </li>
          <li>
            <FaCheckCircle className={Style.checkIcon} /> Blandit sit amet non
            magna
          </li>
        </ul>

        <button className={Style.heroButton}>Learn more</button>
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
