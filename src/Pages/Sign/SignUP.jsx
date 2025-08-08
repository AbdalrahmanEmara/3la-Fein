import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import toast from "react-hot-toast";
import Style from "./Sign.module.css";
import InputBox from "../../Componets/Forms/InputBox";
import img from "../../../public/profile/deafult.jpg";
import { useState } from "react";

import {
  getUsers,
  saveUser,
  setCurrentUser,
} from "../../Componets/Forms/Storage";

function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(13, "Password must not exceed 13 characters")
      .matches(/[A-Z]/, "Password must include at least one uppercase letter")
      .matches(/\d/, "Password must include at least one number")
      .matches(
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
        "Password must include at least one special character"
      ),
  });

  const handleRegister = (values) => {
    const users = getUsers();
    const alreadyExists = users.find((u) => u.email === values.email);

    if (alreadyExists) {
      toast.error("Email already registered!", {
        position: "bottom-center",
        duration: 1500,
      });
      return;
    }

    const newUser = {
      email: values.email,
      password: values.password,
      src: img,
    };
    saveUser(newUser);
    setCurrentUser(newUser);

    toast.success("Account created successfully!", {
      position: "bottom-center",
      duration: 1500,
    });

    navigate("/");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleRegister,
  });

  return (
    <div className={`container-fluid vh-100 ${Style.containerFluid}`}>
      <div className="row h-100">
        <div className="col-lg-4 d-none d-lg-block">
          <img
            src="/background.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              marginLeft: "-15px",
            }}
            alt="background"
          />
        </div>

        <div className="col-lg-8 col-md-12 d-flex justify-content-center align-items-center">
          <div className={`${Style.content} text-center w-100 px-3 px-md-5`}>
            <div className="logo mb-5">
              <img className={Style.logoImg} src="/logo.png" />
            </div>

            <h2 className="mb-4">Sign Up</h2>
            <p className="text-secondary mb-5">Use your email and password</p>

            <div
              className={`buttons gap-4 d-flex justify-content-evenly mb-5 ${Style.buttons}`}
            >
              <button className="d-flex btn-white align-items-center">
                <img className={Style.icon} src="/google.png" />
                <span>Google</span>
              </button>
              <button className="d-flex align-items-center">
                <img className={Style.icon} src="/Apple.png" />
                <span>Apple ID</span>
              </button>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <InputBox
                  type="email"
                  name="email"
                  id="Inemail"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your email"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-danger">{formik.errors.email}</p>
                )}
              </div>

              <div className="mb-4">
                <InputBox
                  type="password"
                  name="password"
                  id="Inpassword"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your password"
                />

                {formik.touched.password && formik.errors.password && (
                  <p className="text-danger">{formik.errors.password}</p>
                )}
              </div>

              <button type="submit" className={`${Style.mainBtn} mb-3`}>
                Create Account
              </button>
            </form>

            <p className="text-center mt-3">
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
