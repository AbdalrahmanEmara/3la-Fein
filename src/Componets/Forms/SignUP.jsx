import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Yup from "yup";
import InputBox from "./InputBox";
import toast from "react-hot-toast";
import { getUsers, saveUser, setCurrentUser } from "./Storage";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(13, "Password must not exceed 13 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{7,13}$/,
        "Password must include at least one uppercase letter, one number, and one special character"
      )
      .required("Password is required"),
  });

  const navigate = useNavigate();

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
      src: "https://i.ibb.co/3y0x5fH/Avatar.png", // Default avatar
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
    onSubmit: handleRegister,
    validationSchema,
  });

  return (
    <div className="container-fluid vh-100">
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
          <div className="content text-center w-100 px-3 px-md-5">
            <div className="logo">
              <img className="logoImg" src="/Logo symbol.png" alt="logo" />
            </div>

            <h2 className="mb-3">Sign Up</h2>
            <p className="text-secondary">Create your account</p>

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
                <InputBox
                  type="password"
                  name="password"
                  id="Inpassword"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your password"
                />
                {formik.errors.password && formik.touched.password && (
                  <p className="text-danger">{formik.errors.password}</p>
                )}
              </div>

              <button type="submit" className="main-btn">
                Create Account
              </button>
            </form>

            <p className="text-center mt-3">Already have an account?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
