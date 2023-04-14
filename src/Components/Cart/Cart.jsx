import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart(props) {
  const [showOrderForm, setShowOrderForm] = useState(false);
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
    if (CartCtx.items.length === 1) {
      setShowOrderForm(false);
    }
    CartCtx.removeItem(id);
  }

  function showOrderFormHandler() {
    setShowOrderForm(true);
  }
  async function newOrderHandler({ userInfo }) {
    console.log("CartCtx.items", CartCtx.items);
    console.log("userInfo", userInfo);
    console.log("window.crypto.randomUUID()", window.crypto.randomUUID());
    // Make a POST request to submit the order
    const orderId = window.crypto.randomUUID();

    let response = await fetch(
      "https://food-react-f32aa-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          id: orderId,
          userInfo,
          orderedItems: CartCtx.items,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("Order placed successfully");
      response = await response.json();
      console.log("response", response);
      CartCtx.clearCart();
      props.loadSuccessAnimation();
    }
  }
  return (
    <Modal onBackdropClick={props.hideCart}>
      <ul className={classes["cart-items"]}>
        {CartCtx.items
          .filter((item) => item.quantity > 0)
          .map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onAddQuantity={AddQuantity}
              onRemoveQuantity={removeQuantity}
            />
          ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${CartCtx.totalAmount}</span>
      </div>
      {CartCtx.items.length > 0 && showOrderForm && (
        <Checkout makeAnOrder={newOrderHandler} onCloseForm={props.hideCart} />
      )}
      <div className={classes.actions}>
        {!showOrderForm && (
          <>
            <button onClick={props.hideCart} className={classes["button--alt"]}>
              Close
            </button>
            {CartCtx.items.length > 0 && (
              <button className={classes.button} onClick={showOrderFormHandler}>
                Order
              </button>
            )}
          </>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
