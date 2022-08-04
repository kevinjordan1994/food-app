import { useContext } from "react";
import Cart from "../../store/cart";
import card from "../UI/Card.module.css";

export default function CartModal(props) {
  const cart = useContext(Cart);
  const cartList = cart.itemsInCart.map((item) => {
    return (
      <h1 key={Date.now().toString()}>
        {item.name}: {item.quantity}
      </h1>
    );
  });

  //TODO: Make this update when cart.itemsInCart updates
  return <div className={card.card}>{cartList}</div>;
}
