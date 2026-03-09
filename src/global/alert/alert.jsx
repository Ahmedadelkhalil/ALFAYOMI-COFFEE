import React from "react";
import "./alert.css";

const Alert = React.forwardRef((props, ref) => {
  return (
    <div className="toast-container position-fixed top-0 end-0 p-3">
      <div
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        ref={ref}
      >
        <div className="toast-header">
          <strong className="me-auto main-color-green">PRIMECUT</strong>
          <small className="main-color-green">Just Now</small>
          <button type="button" data-bs-dismiss="toast" aria-label="Close">
            X
          </button>
        </div>
        <div className="toast-body text-uppercase">{props.msg}</div>
      </div>
    </div>
  );
});

export default Alert;
