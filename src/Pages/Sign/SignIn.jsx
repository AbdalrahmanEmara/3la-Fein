import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import InputBox from "../../Componets/Forms/InputBox";
import { getUsers, setCurrentUser } from "../../Componets/Forms/Storage";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      const users = getUsers();

      const found = users.find(
        (u) => u.email === values.email && u.password === values.password
      );

      if (found) {
        setCurrentUser(found);
        toast.success("Signed in successfully!", {
          position: "bottom-center",
          duration: 1500,
        });
        navigate("/");
      } else {
        toast.error("Invalid email or password.", {
          position: "bottom-center",
          duration: 1500,
        });
      }
    },
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
            <div className="logo mb-5">
              <img className="logoImg" src="/Logo symbol.png" />
            </div>

            <h2 className="mb-4">Sign In</h2>
            <p className="text-secondary mb-5">Use your email and password</p>

            <div className="buttons gap-3 d-flex justify-content-evenly mb-5">
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
              </div>

              <button type="submit" className="main-btn mb-3">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
