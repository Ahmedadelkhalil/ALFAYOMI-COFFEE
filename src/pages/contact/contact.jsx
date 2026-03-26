import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/contact.css";
import Arrow from "../../assets/sources/Arrow.svg";
import { Helmet } from "react-helmet";
// FORM VALIDATION
import { useFormik } from "formik";
import * as Yup from "yup";
// TOAST
import { Toast } from "bootstrap";
// ALERT
import Alert from "../../global/alert/alert";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// MAP
import Map from "./map/map";

const Contact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid Email").required("Email Is Required"),
    password: Yup.string()
      .required("Password Is Required")
      .min(8, "password length must be From 8 - 10")
      .max(10, "password length must be From 8 - 10"),
    msg: Yup.string().required("Write Your Message Please"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      msg: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setAlertMsg(`Your Message has been sent Successfuly ${values.name} :)`);
      handleAlert();
      values.name = "";
      values.email = "";
      values.password = "";
      values.msg = "";
      setShowPass(false);
    },
  });

  // handle toaster
  const [alertMsg, setAlertMsg] = useState("");
  const alertHolder = React.createRef();
  const handleAlert = () => {
    const toastholder = alertHolder.current;
    const toast = new Toast(toastholder);
    toast.show();
  };

  // handle show password While Clicking Eye Iocn
  const [showPass, setShowPass] = useState(false);

  // CURRENT DATE
  const currentDate = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <title>PRIMECUT | CONTACT</title>
      </Helmet>
      <div className="contactPage_container row">
        <div className="col-md-6 contact-leftSide">
          <span>contact us</span>
          <h1>let's be in touch</h1>
        </div>
        <div className="col-md-6 contact-rightSide">
          <p>
            we can help. our team of experts is on hand to answer your questions
          </p>
          <form action="#" onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="userName">name *</label>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter Your Name"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-danger">{formik.errors.name}</div>
              )}
            </div>
            <div>
              <label htmlFor="userEmail">email *</label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Enter Your Email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-danger">{formik.errors.email}</div>
              )}
            </div>
            <div>
              <label htmlFor="userPass">password *</label>
              <div className="position-relative contact-pass-blockField d-flex align-items-center">
                <input
                  type={`${showPass ? "text" : "password"}`}
                  name="userPass"
                  id="userPass"
                  placeholder="Enter Your Password"
                  {...formik.getFieldProps("password")}
                />
                {showPass ? (
                  <FontAwesomeIcon
                    icon={faEye}
                    className={`position-absolute`}
                    onClick={() => setShowPass(false)}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className={`position-absolute`}
                    onClick={() => setShowPass(true)}
                  />
                )}
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="text-danger">{formik.errors.password}</div>
              )}
            </div>
            <div>
              <label htmlFor="userMsg">message *</label>
              <textarea
                name="userMsg"
                id="userMsg"
                placeholder="Enter Your Message"
                {...formik.getFieldProps("msg")}
              />
              {formik.touched.msg && formik.errors.msg && (
                <div className="text-danger">{formik.errors.msg}</div>
              )}
            </div>
            <div className="form_submition_field d-flex justify-content-end align-items-center">
              <button type="submit" className="d-flex align-items-center">
                send
                <img src={`${Arrow}`} alt="arrow" />
              </button>
            </div>
          </form>
        </div>
        <Map />
        <div className="text-center main-color-green mb-5">
          <span>{`©${currentDate}`}</span>
          <span>
            {" "}
            <Link
              to={`https://github.com/Ahmedadelkhalil`}
              target="_blank"
              className="main-color-green text-decoration-underline"
            >
              Ahmed Adel
            </Link>{" "}
            All Rights Reserved.
          </span>
        </div>
        <Alert ref={alertHolder} msg={alertMsg} />
      </div>
    </>
  );
};

export default Contact;
