import { useContext } from "react";
import Cart from "../../store/cart";
import styles from "../UI/Button.module.css";

export default function CartButton(props) {
  const cart = useContext(Cart);
  const amountOfItemsInCart = cart.itemsInCart
    .map((item) => {
      return Number(item.quantity);
    })
    .reduce((a, b) => a + b, 0);

  return (
    <button className={styles.cart_button}>
      Your Cart <span>{amountOfItemsInCart}</span>
    </button>
  );
}
