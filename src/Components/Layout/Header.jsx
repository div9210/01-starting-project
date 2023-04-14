import React from "react";

import MealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>Foodies</h1>
        <HeaderCartButton showCart={props.showCart} />
        <button className={classes["button-25"]} onClick={props.showOrders}>
          Show Orders
        </button>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImage} alt="" />
      </div>
    </>
  );
}

export default Header;
