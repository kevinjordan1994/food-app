import { useContext, useEffect, useState } from "react";
import Cart from "../../store/cart";
import card from "../UI/Card.module.css";

export default function CartModal(props) {
  const cart = useContext(Cart);
  const [cartState, updateCart] = useState(cart.itemsInCart);

  //TODO: Make this update when cart.itemsInCart updates
  useEffect(() => {
    updateCart(cart.itemsInCart);
  }, [cart.amount]);

  return (
    <div className={card.card}>
      {cartState.map((item) => {
        return (
          <h1 key={Date.now().toString()}>
            {item.name}: {item.quantity}
          </h1>
        );
      })}
    </div>
  );
}
