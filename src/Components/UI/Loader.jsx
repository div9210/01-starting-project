import React from "react";
import classes from "./Loader.module.css";

function Loader() {
  return (
    <div className={classes["sk-chase"]}>
      <div className={classes["sk-chase-dot"]}></div>
      <div className={classes["sk-chase-dot"]}></div>
      <div className={classes["sk-chase-dot"]}></div>
      <div className={classes["sk-chase-dot"]}></div>
      <div className={classes["sk-chase-dot"]}></div>
      <div className={classes["sk-chase-dot"]}></div>
    </div>
  );
}

export default Loader;
