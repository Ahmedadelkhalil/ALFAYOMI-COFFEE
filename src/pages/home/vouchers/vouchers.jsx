import "./vouchers.css";
import { NavLink } from "react-router-dom";

const Vouchers = () => {
  return (
    <div className="vouchers_container mb-4">
      <h3 className="mb-4">RESTAURANT VOUCHERS</h3>
      <p className="mb-4">
        Buy gift vouchers to use in our restaurants. An email will be sent to
        you with
        <br /> your PDF voucher and unique code within 24 hours.
      </p>
      <button>
        <NavLink to="/menu">SHOP NOW</NavLink>
      </button>
    </div>
  );
};

export default Vouchers;
