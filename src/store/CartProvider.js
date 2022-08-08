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
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingItem = state.items.find(
      (item) => item.item === action.item.item
    );
    if (existingItem) {
      existingItem.amount += action.item.amount;
      return { items: state.items, totalAmount: updatedTotalAmount };
    }
    const updatedItems = state.items.concat(action.item);
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === ACTIONS.REMOVE_ITEM) {
    //TODO: FIND OUT WHY REDUCED AMOUNT IS BUGGY.
    const targetMeal = state.items.find((meal) => meal.item === action.id);
    const reducedAmount = state.totalAmount - targetMeal.price;
    if (targetMeal.amount > 1) {
      targetMeal.amount--;
      return { items: state.items, totalAmount: reducedAmount };
    } else {
      const updatedItems = state.items.filter(
        (meal) => meal.item !== targetMeal.item
      );
      return { items: updatedItems, totalAmount: reducedAmount };
    }
  }
  return defaultCartState;
};

export default function CartProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
  const [cartVisible, toggleCart] = useState(false);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: ACTIONS.ADD_ITEM, item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: ACTIONS.REMOVE_ITEM, id: id });
  };

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
