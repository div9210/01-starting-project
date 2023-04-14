import React from "react";
import "./SuccessLoader.css";
import Modal from "./Modal";

function SuccessLoader(props) {
  return (
    <Modal>
      <div className="cross" onClick={props.onClose}></div>
      <svg
        className="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        {" "}
        <circle
          className="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />{" "}
        <path
          className="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>

      <div className="order-placed-text">
        <h2>Order Placed</h2>
        <p>Thank you for choosing us.</p>
      </div>
    </Modal>
  );
}

export default SuccessLoader;
