import button from "../UI/Button.module.css";
import styles from "./ItemCartInfo.module.css";

export default function ItemCartInfo(props) {
  return (
    <form className={styles.cart_info}>
      <div>
        <label>Amount: </label>
        <input type="number" min="1" max="99" />
      </div>
      <div>
        <button className={button.add}>+ Add</button>
      </div>
    </form>
  );
}
