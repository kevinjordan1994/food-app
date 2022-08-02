import React from "react";

const Cart = React.createContext({
  itemsInCart: [],
  totalPrice: 0,
});

export default Cart;
