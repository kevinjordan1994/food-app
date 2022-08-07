import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Cart from "../../store/cart";
import card from "../UI/Card.module.css";
import button from "../UI/Button.module.css";
import styles from "./CartModal.module.css";

export default function CartModal(props) {
  const cart = useContext(Cart);

  const removeItemHandler = (e) => {
    e.preventDefault();
    cart.removeItemFromCart(e.target.value);
  };

  const cartList = cart.itemsInCart.map((meal) => {
    return (
      <div className={styles.cart_meal} key={Math.random().toString()}>
        <h3>
          {meal.item} x {meal.amount}
        </h3>
        <h3>{meal.amount * meal.price}</h3>
        <button
          value={meal.item}
          className={button.add}
          onClick={removeItemHandler}
        >
          Remove
        </button>
      </div>
    );
  });

  const closeModal = (e) => {
    e.preventDefault();
    cart.toggleCartModal();
  };

  const cartModal = (
    <>
      <div className={styles.backdrop} onClick={closeModal}></div>
      <div className={styles.modal}>
        <div className={card["modal_card"]}>
          {cart.itemsInCart.length > 0 ? cartList : <p>No items in cart.</p>}
          <div className={styles.footer}>
            <div className={styles.total}>Total: ${cart.totalPrice}</div>
            <div className={styles.button_div}>
              <button onClick={closeModal} className={button.cancel}>
                Cancel
              </button>
              <button className={button.checkout}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return ReactDOM.createPortal(
    cart.checkCartVisible ? cartModal : "",
    document.getElementById("modal")
  );
}
