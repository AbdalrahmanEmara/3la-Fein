import React from 'react';
import './Discover.css';
import { FaCheckCircle } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="subheading">TAKE A TOUR</p>
        <h1 className="heading">Discover Our Travel<br />Guideline</h1>
        <p className="description">
          An enim nullam tempor gravida donec enim congue magna at pretium purus pretium ligula rutrum luctus risus
          diam eget risus varius blandit sit amet non magna.
        </p>

        <ul className="features">
          <li><FaCheckCircle className="check-icon" />  Luctus risusd diam eget</li>
          <li><FaCheckCircle className="check-icon" />  Donec enim congue magna</li>
          <li><FaCheckCircle className="check-icon" />  Blandit sit amet non magna</li>
        </ul>


        <button className="hero-button">Learn more</button>
      </div>

      <div className="hero-image">
        <div className="image-wrapper">
          <img src="/images/discover0.png" alt="View" className="bg-img" />
          <img src="/images/discover1.png" alt="Window" className="window-img" />
          <img src="/images/discover2.png" alt="Clouds" className="clouds-img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
