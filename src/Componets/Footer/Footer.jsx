import { useNavigate } from "react-router-dom";
import Style from "./Footer.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import face from "../ProfHeroSec/img/Facebook.png";
import twit from "../ProfHeroSec/img/Twitter.png";
import insta from "../ProfHeroSec/img/Instagram.png";

export default function Footer() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

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
        <div className={` d-flex flex-column align-item-start ${Style.footerCol}`}>
          <h5>Support</h5>
          <ul>
            <li>
              Contact Channels
              <div className="mt-3 ">
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-light me-2"
                      >
                        <img src={face} alt="facebook" style={{ maxWidth: "20px" }} />
                      </a>
              
                      <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-light  me-2"
                      >
                        <img src={twit} alt="twitter" style={{ maxWidth: "20px" }} />
                      </a>
              
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-light  me-2"
                      >
                        <img src={insta} alt="instagram" style={{ maxWidth: "20px" }} />
                      </a>
                    </div>
            </li>
          </ul>
        </div>
        <div className={`${Style.footerCol} ${Style.subscribeCol}`}>
          <h5>
            JOIN OUR COMMUNITY<span className={Style.emoji}>🔥</span>
          </h5>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("Email submitted:", values.email);
              toast.success(
                "You've successfully joined! Please check your email",
                {
                  position: "bottom-center",
                  duration: 2500,
                }
              );
              setTimeout(() => {
                toast.success(
                  "A new update is coming soon! A complete trips program feature to enhance your experience!",
                  {
                    position: "bottom-center",
                    duration: 3500,
                  }
                );
              }, 1000);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form className={Style.subscribeForm}>
                <div className={Style.inputWrapper}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className={`${
                      errors.email && touched.email ? Style.errorInput : ""
                    }`}
                  />
                  <button type="submit">
                    <span>&#8594;</span>
                  </button>
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className={Style.errorMessage}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </footer>
  );
}
