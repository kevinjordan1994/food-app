import { useRef } from "react";
import button from "../UI/Button.module.css";
import styles from "./ItemCartInfo.module.css";

export default function ItemCartInfo(props) {
  const amountRef = useRef();

  const addItems = (event) => {
    event.preventDefault();
    const amount = amountRef.current.value;
    props.onAddToCart(amount);
  };

  return (
    <form className={styles.cart_info}>
      <div>
        <label>Amount: </label>
        <input ref={amountRef} type="number" min="1" max="99" />
      </div>
      <div>
        <button onClick={addItems} className={button.add}>
          + Add
        </button>
      </div>
    </form>
  );
}
