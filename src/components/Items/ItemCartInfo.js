import { useRef } from "react";
import button from "../UI/Button.module.css";
import styles from "./ItemCartInfo.module.css";

export default function ItemCartInfo(props) {
  const amountRef = useRef();

  const addItemHandler = (event) => {
    event.preventDefault();
    const amount = +amountRef.current.value;
    props.onAddItem(amount);
  };

  return (
    <form className={styles.cart_info}>
      <div>
        <label>Amount: </label>
        <input ref={amountRef} type="number" min="1" max="9" />
      </div>
      <div>
        <button onClick={addItemHandler} className={button.add}>
          + Add
        </button>
      </div>
    </form>
  );
}
