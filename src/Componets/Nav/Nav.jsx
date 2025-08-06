import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${styles.navbarCustom} align-items-center justify-content-center`}
      style={{
        top: "16px",
        position: "fixed",
        zIndex: "1000",
        width: "70%",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <div className="container">
        <Link className={`nav-link ${styles.navLink}`} to="/home">
          <div className={`${styles.logo} pe-3`}>
            <img
              src="./logo.png"
              alt="logo"
              className="rounded-circle me-3"
              style={{ width: "50px", height: "50px" }}
            />
            3la-fe!n
          </div>
        </Link>

        <div className="d-md-flex d-lg-none">
          <div className={styles.hideOnSmall}>
            <Link className={`nav-link me-2`} to="/login">
              <button className={`${styles.mainBtn} ${styles.butt}`}>
                <img src="./Shape.svg" alt="search" />
              </button>
            </Link>
          </div>
          <Link className="nav-link" to="/signup">
            <button className={styles.mainBtn}>Sign Up</button>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul
            className={`navbar-nav m-md-0 m-sm-0 mx-lg-auto d-flex justify-content-between w-50 ${styles.navbarFont}`}
          >
            <li className="nav-item text-md-center">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Groups">
                Public Groups
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
            <li
              className="d-lg-none d-sm-block px-3 py-2 mx-auto"
              style={{
                border: "1px solid #f4f4f4",
                backgroundColor: "transparent",
                borderRadius: "20px",
                width: "fit-content",
              }}
            >
              <input
                type="text"
                style={{ backgroundColor: "transparent", border: "none" }}
                placeholder="search"
              />
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-flex">
          <Link className="nav-link me-2" to="/signup">
            <button className={`${styles.mainBtn} ${styles.butt}`}>
              <img src="./Shape.svg" alt="search" />
            </button>
          </Link>
          <Link className="nav-link" to="/signup">
            <button className={styles.mainBtn}>Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
