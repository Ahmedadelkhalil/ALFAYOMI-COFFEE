import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./register.css";
import { NavLink, useNavigate } from "react-router-dom";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
// FORM VALIDATION
import { useFormik } from "formik";
import * as Yup from "yup";
// Alert
import Alert from "../../../global/alert/alert";
import { Toast } from "bootstrap";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [signnedUp, setSignnedUp] = useState(false);
  const [counter, setCounter] = useState(5);
  const [customerName, setCustomerName] = useState("");
  const navigate = useNavigate();
  // FORM VALIDATION
  const validationSchema = Yup.object().shape({
    fName: Yup.string().required("First Name is Required"),
    lName: Yup.string().required("Last Name is Required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });
  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setSignnedUp(true);
      setCustomerName(values.fName);
      handleAlert();
      values.fName = "";
      values.lName = "";
      values.email = "";
      values.password = "";
    },
  });
  // ALERT
  const alertParent = React.createRef();
  const handleAlert = () => {
    const alertHolder = alertParent.current;
    const toast = new Toast(alertHolder);
    toast.show();
  };

  if (signnedUp) {
    const holder = setInterval(() => {
      setCounter(counter - 1);
      if (counter === 0) {
        clearInterval(holder);
        navigate("/", { replace: true });
      }
    }, 1000);
  }
  return (
    <>
      <Helmet>
        <title>PRIMECUT | SIGN UP</title>
      </Helmet>
      <div className="register_container d-flex flex-column justify-content-center align-items-center p-0 p-md-5">
        <div className="registerTitle_container mt-5 mt-md-5 text-center">
          <h1 className="mb-3">PRIMECUT</h1>
          <h1 className="mb-3">SIMPLY GREAT BURGERS AND FRIES</h1>
        </div>
        <div className="registerForm_container mb-5">
          <h4 className="text-center mb-3 text-uppercase main-color-green">
            sign up
          </h4>
          <form action="#" onSubmit={formik.handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Enter Your First Name"
                {...formik.getFieldProps("fName")}
              />
              {formik.touched.fName && formik.errors.fName && (
                <div className="text-danger">{formik.errors.fName}</div>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                {...formik.getFieldProps("lName")}
              />
              {formik.touched.lName && formik.errors.lName && (
                <div className="text-danger">{formik.errors.lName}</div>
              )}
            </div>
            <div>
              <input
                type="Email"
                placeholder="Enter Your Email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-danger">{formik.errors.email}</div>
              )}
            </div>
            <div>
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter Your Password"
                {...formik.getFieldProps("password")}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPass(!showPass);
                }}
              >
                <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} />
              </button>
              {formik.touched.password && formik.errors.password && (
                <div className="text-danger">{formik.errors.password}</div>
              )}
            </div>
            <div className="text-center">
              <p>
                Already a member?{" "}
                <NavLink to="/signIn" className="main-color-green fw-semibold">
                  Log in
                </NavLink>
              </p>
            </div>
            <div className="text-center mt-3 signUp_btn">
              <button type="submit">sign up</button>
            </div>
          </form>
        </div>
        <Alert
          ref={alertParent}
          msg={`You've Signned In Successfuly ${customerName} You Will Redirect in ${counter}`}
        />
      </div>
    </>
  );
};

export default Register;
