import React from "react";
import CartModal from "./components/Cart/CartModal";
import Header from "./components/Header/Header";
import ItemList from "./components/Items/ItemList";
import Overview from "./components/Overview/Overview";
import Cart from "./store/cart";

function App() {
  return (
    <Cart.Provider value={{ itemsInCart: [], totalPrice: 0 }}>
      <Header />
      <Overview />
      <CartModal />
      <ItemList />
    </Cart.Provider>
  );
}

export default App;
