import { useContext } from "react";
import Cart from "../../store/cart";
import card from "../UI/Card.module.css";
import button from "../UI/Button.module.css";
import styles from "./CartModal.module.css";

export default function CartModal(props) {
  const cart = useContext(Cart);
  const cartList = cart.itemsInCart.map((meal) => {
    return (
      <div className={styles.cart_meal}>
        <h3 key={Math.random().toString()}>
          {meal.item} x {meal.amount}
        </h3>
        <h3>{meal.amount * meal.price}</h3>
      </div>
    );
  });

  //TODO: Make this update when cart.itemsInCart updates
  return (
    <div className={card.card}>
      {cart.itemsInCart.length > 0 ? cartList : <p>No items in cart.</p>}
      <div className={styles.footer}>
        <div className={styles.total}>Total: ${cart.totalPrice}</div>
        <div className={styles.button_div}>
          <button className={button.cancel}>Cancel</button>
          <button className={button.checkout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}
