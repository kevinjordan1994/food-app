import React from "react";
import CartModal from "./components/Cart/CartModal";
import Header from "./components/Header/Header";
import ItemList from "./components/Items/ItemList";
import Overview from "./components/Overview/Overview";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <CartModal />
      <Header />
      <Overview />
      <ItemList />
    </CartProvider>
  );
}

export default App;
