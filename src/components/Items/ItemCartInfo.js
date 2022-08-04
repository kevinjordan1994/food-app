import { useContext, useRef } from "react";
import Cart from "../../store/cart";
import button from "../UI/Button.module.css";
import styles from "./ItemCartInfo.module.css";

export default function ItemCartInfo(props) {
  const amountRef = useRef();
  const cart = useContext(Cart);

  //TODO: FIX THIS

  const addItemHandler = (event) => {
    event.preventDefault();
    cart.addItemToCart({
      name: props.item,
      price: props.price,
      amount: amountRef.current.value,
    });
  };

  return (
    <form className={styles.cart_info}>
      <div>
        <label>Amount: </label>
        <input ref={amountRef} type="number" min="1" max="99" />
      </div>
      <div>
        <button onClick={addItemHandler} className={button.add}>
          + Add
        </button>
      </div>
    </form>
  );
}
