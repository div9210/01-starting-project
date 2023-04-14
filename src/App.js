import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Orders from "./Components/Orders/Orders";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [ordersShown, setOrdersShown] = useState(false);

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
  return (
    <CartProvider>
      {cartIsShown && <Cart hideCart={hideCart} />}
      {ordersShown && <Orders hideOrders={hideOrders} />}
      <Header showCart={showCart} showOrders={showOrders} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
