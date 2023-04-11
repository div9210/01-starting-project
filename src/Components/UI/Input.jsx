import React from "react";
import classes from "./Input.module.css";

function Input(props) {
  return (
    <div className={classes["input"]}>
      <label htmlFor={props?.input?.id}>{props.label}</label>
      <input
        name={props.input.name}
        id={props?.input?.id}
        type={props.type}
        {...props.input}
      />
    </div>
  );
}

export default Input;
