import Item from "./Item";
import styles from "../UI/Card.module.css";

export default function ItemList(props) {
  return (
    <div className={styles.card}>
      <Item />
    </div>
  );
}
