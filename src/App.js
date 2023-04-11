import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCart() {
    setCartIsShown(true);
  }

  function hideCart() {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart hideCart={hideCart} />}
      <Header showCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
