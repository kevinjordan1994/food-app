import React from "react";

const Cart = React.createContext({
  itemsInCart: [],
  totalPrice: 0,
  addItemToCart: (item) => {},
  removeItemFromCart: (id) => {},
});

export default Cart;
