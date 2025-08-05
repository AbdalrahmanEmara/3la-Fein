import { Formik, useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Yup from "yup";
import InputBox from "./InputBox";
import axios from "axios";
import toast from "react-hot-toast";

function SignIn() {
  //validation
  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Invalid Match email"
      )
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .max(13, "Password must not exceed 13 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{7,13}$/,
        "Password must include at least one uppercase letter, one number, and one special character"
      )
      .required("Password is required"),
  });
  //handleSubmit
  async function handleLogin(values) {
    console.log(values);
    // toast.success(values.username);
    try {
      let response = await axios.post(
        "https://dummyjson.com/auth/login",
        values
      );
      console.log(response);

      if (response.status == 200) {
        toast.success("Login Sucessfully", {
          position: "bottom-center",
          duration: 1500,
        });
      }
    } catch (error) {
      toast.error(error.message, {
        duration: 1500,
        position: "bottom-center",
      });
    }
  }

  //useFormik
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleLogin,
    validationSchema: validationSchema,
  });
  return (
    <div className="container-fluid d-flex vh-100">
      <div className="row">
        <div className="col-lg-4 d-none d-lg-block">
          <img
            src="/background.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              marginLeft: "-15px",
            }}
          />
        </div>

        <div className="col-lg-8 col-10 col-sm-12 content d-flex flex-column justify-content-center align-items-center w-100 w-md-75 w-lg-50">
          <div className="logo">
            <img className="logoImg" src="/Logo symbol.png" />
          </div>

          <h2 className="mb-3">Sign in</h2>

          <p className="text-secondary">Use Your OpenID to Sign in</p>

          <div className="buttons d-flex justify-content-evenly mb-5">
            <button className="d-flex btn-white align-items-center">
              <img className="icon" src="/google.png" />
              <span>Google</span>
            </button>
            <button className="d-flex align-items-center">
              <img className="icon" src="/Apple.png" />
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

              {formik.errors.email && formik.touched.email && (
                <p className="text-danger">{formik.errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <div style={{ position: "relative" }}>
                <InputBox
                  type="password"
                  name="password"
                  id="Inpassword"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Password"
                />
                <img src="/eye-slash.png" className="eye-slash" />
              </div>
              <div className="error-message-wrapper">
                {formik.errors.password && formik.touched.password && (
                  <p className="text-danger">{formik.errors.password}</p>
                )}
              </div>
            </div>
          </form>

          <p className="text-center mb-3">Forget Password?</p>

          <button type="submit" className="main-btn">
            login
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
