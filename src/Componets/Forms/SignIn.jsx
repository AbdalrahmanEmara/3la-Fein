import { Formik, useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import * as Yup from "yup";
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
    <div>
      <InputBox
        type="email"
        name="email"
        id="Inemail"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </div>
  );
}

export default SignIn;
