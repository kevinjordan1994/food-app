import { useContext, useEffect, useState } from "react";
import Cart from "../../store/cart";
import styles from "../UI/Button.module.css";

export default function CartButton(props) {
  const cart = useContext(Cart);
  const [buttonStyles, changeButtonStyles] = useState(`${styles.cart_button}`);

  const showCart = () => {
    cart.toggleCartModal();
  };

  const amountOfItemsInCart = cart.itemsInCart
    .map((item) => {
      return Number(item.amount);
    })
    .reduce((a, b) => a + b, 0);

  useEffect(() => {
    changeButtonStyles(`${styles.cart_button} ${styles.bump}`);
    setTimeout(() => {
      changeButtonStyles(`${styles.cart_button}`);
    }, 500);
  }, [amountOfItemsInCart]);

  return (
    <button onClick={showCart} className={buttonStyles}>
      Your Cart <span>{amountOfItemsInCart}</span>
    </button>
  );
}
