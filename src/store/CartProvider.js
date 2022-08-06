import { useReducer, useState } from "react";
import Cart from "./cart";

const ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === ACTIONS.ADD_ITEM) {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    console.log(updatedItems);
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};

export default function CartProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
  const [cartVisible, toggleCart] = useState(false);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: ACTIONS.ADD_ITEM, item: item });
  };

  const removeItemFromCartHandler = (id) => {};

  const toggleCartHandler = () => {
    toggleCart((prev) => !prev);
    console.log(cartVisible);
  };

  const cart = {
    itemsInCart: cartState.items,
    totalPrice: cartState.totalAmount.toFixed(2),
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
    checkCartVisible: cartVisible,
    toggleCartModal: toggleCartHandler,
  };

  return <Cart.Provider value={cart}>{props.children}</Cart.Provider>;
}
