import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { getCurrentUser } from "../../Componets/Forms/Storage";
import navImage from "/logo.png";
import shape from "/Shape.svg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = getCurrentUser();
    setCurrentUser(user);
  }, []);

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
        <Link className={`nav-link ${styles.navLink}`} to="/">
          <div className={`${styles.logo} pe-1`}>
            <img
              src={navImage}
              alt="logo"
              className="rounded-circle me-3"
              style={{ width: "50px", height: "50px" }}
            />
            3la-fe!n
          </div>
        </Link>

        {/* Mobile Buttons */}
        <div className="d-md-flex d-lg-none">
          <div className={styles.hideOnSmall}>
            <Link className="nav-link me-2" to="/search">
              <button
                className={
                  currentUser
                    ? `${styles.mainBtn} ${styles.searchWide}`
                    : `${styles.mainBtn} ${styles.butt}`
                }
              >
                <img src={shape} alt="search" />
                {currentUser && <span className="ms-2">Search</span>}
              </button>
            </Link>
          </div>
          <Link className="nav-link" to="/signup">
            {currentUser ? (
              <Link className="nav-link" to="/profile">
                <img
                  src={currentUser.src || "../../../public/profile/deafult.jpg"}
                  alt=" "
                  className={styles.avatar}
                />
              </Link>
            ) : (
              <button className={styles.mainBtn}>Sign Up</button>
            )}
          </Link>
        </div>

        {/* Burger Toggle */}
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

        {/* Nav Links */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul
            className={`navbar-nav m-md-0 m-sm-0 mx-lg-auto d-flex justify-content-between w-50 ${styles.navbarFont}`}
          >
            <li className="nav-item text-md-center">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/publicGroups">
                Public Groups
              </Link>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigateToSection("Discover");
                }}
              >
                About
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigateToSection("Footer");
                }}
              >
                Contact
              </div>
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

        {/* Desktop Buttons */}
        <div className="d-none d-lg-flex">
          <Link className="nav-link me-2" to="/search">
            <button
              className={
                currentUser
                  ? `${styles.mainBtn} ${styles.searchWide}`
                  : `${styles.mainBtn} ${styles.butt}`
              }
            >
              <img src={shape} alt="search" />
              {currentUser && <span className="ms-2">Search</span>}
            </button>
          </Link>
          <Link className="nav-link" to="/signup">
            {currentUser ? (
              <Link className="nav-link" to="/profile">
                <img
                  src={currentUser.src}
                  alt="avatar"
                  className={styles.avatar}
                />
              </Link>
            ) : (
              <button className={styles.mainBtn}>Sign Up</button>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;