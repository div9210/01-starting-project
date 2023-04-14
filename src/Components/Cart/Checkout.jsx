import React from "react";
import classes from "./Checkout.module.css";

function isEmpty(value) {
  return value.trim() === "";
}

function isFiveChars(value) {
  return value.trim().length === 5;
}

function Checkout(props) {
  function onSubmitHandler(e) {
    e.preventDefault();
    const submittedValues = {
      name: e.target.name.value,
      street: e.target.street.value,
      postal: e.target.postal.value,
      city: e.target.city.value,
    };
    if (
      isEmpty(submittedValues.name) ||
      isEmpty(submittedValues.street) ||
      isEmpty(submittedValues.city) ||
      !isFiveChars(submittedValues.postal)
    ) {
      alert("Please enter valid values");
      return;
    } else {
      props.makeAnOrder({ userInfo: submittedValues });
    }
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={classes["control"]}>
        <label htmlFor="name">Your Name</label>
        <input name="name" type="text" id="name" />
      </div>
      <div className={classes["control"]}>
        <label htmlFor="street">Street</label>
        <input name="street" type="text" id="street" />
      </div>
      <div className={classes["control"]}>
        <label htmlFor="postal">Postal Code</label>
        <input name="postal" type="text" id="postal" />
      </div>
      <div className={classes["control"]}>
        <label htmlFor="city">City</label>
        <input name="city" type="text" id="city" />
      </div>
      <div className={classes["actions"]}>
        <button type="button" onClick={props.onCloseForm}>
          Cancel
        </button>
        <button className={classes["submit"]} type="submit">
          Confirm
        </button>
      </div>
    </form>
  );
}

export default Checkout;
