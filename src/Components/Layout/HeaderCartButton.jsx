import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const [btnBump, setBtnBump] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  useEffect(() => {
    setBtnBump(true);
    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + Number(item.quantity);
  }, 0);
  const classesButton = `${classes["button"]} ${btnBump ? classes.bump : ""}`;
  return (
    <button className={classesButton} onClick={props.showCart}>
      <span className={classes["icon"]}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes["badge"]}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
