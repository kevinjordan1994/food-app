import Item from "./Item";
import card from "../UI/Card.module.css";
import styles from "./ItemList.module.css";

export default function ItemList(props) {
  return (
    <div className={card.card}>
      <div className={styles.item_list}>
        <Item />
      </div>
    </div>
  );
}
