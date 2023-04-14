import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Orders from "./Components/Orders/Orders";
import SuccessLoader from "./Components/UI/SuccessLoader";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [ordersShown, setOrdersShown] = useState(false);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  function showCart() {
    setCartIsShown(true);
  }

  function hideCart() {
    setCartIsShown(false);
  }
  function showOrders() {
    setOrdersShown(true);
  }

  function hideOrders() {
    setOrdersShown(false);
  }

  function showSuccessAnimationHandler() {
    hideCart();
    setShowSuccessAnimation(true);
    setTimeout(() => {
      setShowSuccessAnimation(false);
    }, 7000);
  }

  function hideSuccessAnimationHandler() {
    setTimeout(() => {
      setShowSuccessAnimation(false);
    }, 200);
  }

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart
          hideCart={hideCart}
          loadSuccessAnimation={showSuccessAnimationHandler}
        />
      )}
      {ordersShown && <Orders hideOrders={hideOrders} />}
      {showSuccessAnimation && (
        <SuccessLoader onClose={hideSuccessAnimationHandler} />
      )}
      <Header showCart={showCart} showOrders={showOrders} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
