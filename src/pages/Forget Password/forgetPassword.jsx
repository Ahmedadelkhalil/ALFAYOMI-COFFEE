import React, { useState } from "react";
import "./forgetPassword.css";
import resetPassImg from "../../assets/sources/Reset password.svg";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
// FORM VALIDATION
import { useFormik } from "formik";
import * as Yup from "yup";

// Alert
import Alert from "../../global/alert/alert";
import { Toast } from "bootstrap";

const ForgetPassword = () => {
  const date = new Date().getFullYear();

  // FORM VALIDATION
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setAlertMsg("We've Sent You Verification Code Via Email");
      handleAlert();
      values.email = "";
    },
  });

  // ALERT
  const alertParent = React.createRef();
  const [alertMsg, setAlertMsg] = useState("");
  const handleAlert = () => {
    const alertHolder = alertParent.current;
    const toast = new Toast(alertHolder);
    toast.show();
  };
  return (
    <>
      <Helmet>
        <title>PRIMECUT | Reset Password</title>
      </Helmet>
      <div className="resetPassword_container row">
        <div className="resetPassword_leftSide col-md-6 text-center text-md-end">
          <img src={resetPassImg} alt="reset Password img" className="w-100" />
        </div>
        <div className="resetPassword_rightSide col-md-6 pt-3 d-flex flex-column justify-content-center align-items-center align-items-md-start">
          <div>
            <h5>Reset Your Password</h5>
            <p className="mb-3">
              Fear not. we'll email you instructions to reset your password.
            </p>
            <form action="#" onSubmit={formik.handleSubmit}>
              <div className="resetPass_emailSec d-flex flex-column mb-2">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  id="Email"
                  placeholder="Enter Your Email .."
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}
              </div>
              <button className="mb-3">reset password</button>
            </form>
            <p>
              ©{date}{" "}
              <span>
                <NavLink
                  to={`https://github.com/Ahmedadelkhalil`}
                  target="_blank"
                  className="main-color-green"
                >
                  Ahmed Adel
                </NavLink>
              </span>{" "}
              All Rights Reserved. Check Our{" "}
              <span>
                <NavLink to="#">Cookies Preferences</NavLink>
              </span>{" "}
              ,{" "}
              <span>
                <NavLink to="#">Privacy</NavLink>
              </span>{" "}
              And{" "}
              <span>
                <NavLink to="#">Terms</NavLink>
              </span>
            </p>
          </div>
        </div>
        <Alert ref={alertParent} msg={alertMsg} />
      </div>
    </>
  );
};

export default ForgetPassword;
