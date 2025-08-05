import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* Logo + Description */}
        <div className="footer-col logo-col">
          <div className="logo">
            <img src="/images/logo-icon.png" alt="Logo" />
            <span>3la Fe!n</span>
          </div>
          <p>
            There are many variations of 
            passages of available but it is
            the majority of suffered that a 
            alteration.
          </p>
        </div>

        {/* About Links */}
        <div className="footer-col">
          <h5>About</h5>
          <ul>
            <li>Discover</li>
            <li>Find Travel</li>
            <li>Popular Destinations</li>
            <li>Reviews</li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="footer-col">
          <h5>Support</h5>
          <ul>
            <li>Customer Support</li>
            <li>Privacy & Policy</li>
            <li>Contact Channels</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="footer-col subscribe-col">
          <h5>
            JOIN OUR COMMUNITY<span className="emoji">🔥</span>
          </h5>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>
              <span>&#8594;</span>
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 3la Fein</p>
      </div>
    </footer>
  );
}
