import React, { useState, useEffect } from "react";
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
// MAP
import Map from "./map/map";
// EMAIL
import emailjs from "@emailjs/browser";

const Contact = () => {
  // Initialize EmailJS once
  useEffect(() => {
    emailjs.init("mJltcnR7xye0I5OGv"); // Will replace this
  }, []);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid Email").required("Email Is Required"),
    phone: Yup.string()
      .required("Egypt Phone Number is Required")
      .matches(/^(\+?20)?1[0125]\d{8}$/, "Enter a valid Egypt phone number")
      .min(11, "Phone number must be 11 digits")
      .max(14, "Phone number must be 11 digits with optional +20 prefix"),
    msg: Yup.string().required("Write Your Message Please"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      msg: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        // Show loading state
        const submitButton = document.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        // Send email using EmailJS
        await emailjs.send("service_5218tot", "template_0ipl3x7", {
          to_email: "ahmedkhalil4774@gmail.com",
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.msg,
        });

        // Success
        setAlertMsg(
          `Your Message has been sent Successfully ${values.name} :)`,
        );
        formik.resetForm();
        handleAlert();
      } catch (error) {
        console.error("Error:", error);
        setAlertMsg("Error sending message. Please try again.");
        handleAlert();
      } finally {
        // Restore button state
        const submitButton = document.querySelector('button[type="submit"]');
        submitButton.disabled = false;
        submitButton.textContent = "send";
      }
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

  // CURRENT DATE
  const currentDate = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <title>ALFAYOMI | CONTACT</title>
      </Helmet>
      <div className="contactPage_container row">
        <div className="col-md-6 contact-leftSide">
          <span>contact us</span>
          <h1>let's be in touch</h1>
          <img
            src="https://raw.githubusercontent.com/Ahmedadelkhalil/ALFAYOMI-COFFEE/refs/heads/master/src/assets/logo/footer-logo.png"
            alt="ALFAYOMI COFFEE LOGO"
          />
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
              <label htmlFor="userPhone">Phone Number *</label>
              <input
                type="tel"
                name="userPhone"
                id="userPhone"
                placeholder="Enter Your Number example: +201025521486"
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-danger">{formik.errors.phone}</div>
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
        <div className="text-center main-labels-color mb-5">
          <span>{`©${currentDate}`}</span>
          <span>
            {" "}
            <Link
              to={`https://github.com/Ahmedadelkhalil`}
              target="_blank"
              className="main-labels-color text-decoration-underline"
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
