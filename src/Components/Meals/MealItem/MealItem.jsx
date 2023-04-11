import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  function onAddItemHandler({ quantity }) {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: Number(props.price),
      quantity: Number(quantity),
    });
  }
  return (
    <li className={classes["meal"]}>
      {" "}
      <div>
        <h3>{props.name}</h3>
      </div>
      <div className={classes["description"]}>{props.description}</div>
      <div className={classes["price"]}>{props.price}</div>{" "}
      <MealItemForm id={props.id} onAddItem={onAddItemHandler} />
    </li>
  );
}

export default MealItem;
