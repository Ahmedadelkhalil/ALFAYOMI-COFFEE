import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./signIn.css";
import { NavLink, useNavigate } from "react-router-dom";
// FORM VALIDATION
import { useFormik } from "formik";
import * as Yup from "yup";
// ALERT
import Alert from "../../../global/alert/alert";
import { Toast } from "bootstrap";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  //FORM VALIDATION
  const validationschema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationschema,
    onSubmit: (values) => {
      setSignedIn(true);
      handleAlert();
      values.email = "";
      values.password = "";
    },
  });

  // ALERT
  const [signedIn, setSignedIn] = useState(false);
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const alertParent = React.createRef();
  const handleAlert = () => {
    const alertHolder = alertParent.current;
    const toast = new Toast(alertHolder);
    toast.show();
  };
  if (signedIn) {
    const holder = setInterval(() => {
      setCount(count - 1);
      if (count === 0) {
        clearInterval(holder);
        navigate("/", { replace: true });
      }
    }, 1000);
  }

  return (
    <>
      <Helmet>
        <title>PRIMECUT | SIGN IN</title>
      </Helmet>
      <div className="signIn-container row p-0 p-md-5">
        <div className="col-12 signIn-leftSide mb-5 text-center text-md-start mt-5">
          <h3>primecut</h3>
          <h3>simply great burgers and fries</h3>
        </div>
        <div className="col-12 signIn-rightSide mb-5">
          <div className="signIn-form">
            <h4>sign in</h4>
            <form action="#" onSubmit={formik.handleSubmit}>
              <div className="signIn-inputs-container d-flex flex-column">
                <div>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    {...formik.getFieldProps("email")}
                    className="w-100"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-danger">{formik.errors.email}</div>
                  )}
                </div>
                <div>
                  <div>
                    <input
                      type={`${showPass ? "text" : "password"}`}
                      placeholder="Enter Your Password"
                      className="w-100"
                      {...formik.getFieldProps("password")}
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPass(!showPass);
                      }}
                    >
                      {showPass ? (
                        <FontAwesomeIcon icon={faEye} />
                      ) : (
                        <FontAwesomeIcon icon={faEyeSlash} />
                      )}
                    </button>
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-danger">{formik.errors.password}</div>
                  )}
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <input type="radio" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <button>
                  <NavLink to="/forgetPassword">Lost your password?</NavLink>
                </button>
              </div>
              <div className="d-flex flex-column">
                <button className="loginSubmition">login</button>
                <NavLink to="/register">
                  <button>create an account</button>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
        <Alert
          ref={alertParent}
          msg={`You've Signned In Successfuly You'll Redirect in ${count}s`}
        />
      </div>
    </>
  );
};

export default SignIn;
