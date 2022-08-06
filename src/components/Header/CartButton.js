import { useContext } from "react";
import Cart from "../../store/cart";
import styles from "../UI/Button.module.css";

export default function CartButton(props) {
  const cart = useContext(Cart);

  const showCart = () => {
    cart.toggleCartModal();
  };

  const amountOfItemsInCart = cart.itemsInCart
    .map((item) => {
      return Number(item.amount);
    })
    .reduce((a, b) => a + b, 0);

  return (
    <button onClick={showCart} className={styles.cart_button}>
      Your Cart <span>{amountOfItemsInCart}</span>
    </button>
  );
}
