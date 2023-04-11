import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  // cartItems = [{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}]
  const CartCtx = useContext(CartContext);
  function AddQuantity(id) {
    const existingCartItemIndex = CartCtx.items.findIndex(
      (item) => item.id === id
    );
    const existingCartItem = CartCtx.items[existingCartItemIndex];
    CartCtx.addItem({ ...existingCartItem, quantity: 1 });
  }

  function removeQuantity(id) {
    CartCtx.removeItem(id);
  }
  return (
    <Modal onBackdropClick={props.hideCart}>
      <ul className={classes["cart-items"]}>
        {CartCtx.items
          .filter((item) => item.quantity > 0)
          .map((item) => (
            <CartItem
              id={item.id}
              price={item.price}
              quantity={item.quantity}
              onAddQuantity={AddQuantity}
              onRemoveQuantity={removeQuantity}
            />
          ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{CartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.hideCart} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
