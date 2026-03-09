import "./css/errorPage.css";
import errorImg_1 from "../../assets/sources/404/img-2.svg";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>PRIMECUT | Error 404</title>
      </Helmet>
      <div className="errorPage_container d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={errorImg_1} alt="error-Img" />
          <p>we couldn't find the page you're looking for ...</p>
          <NavLink to="/">
            <button>back home</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
