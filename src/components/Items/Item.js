import ItemInformation from "./ItemInformation";
import ItemCartInfo from "./ItemCartInfo";
import styles from "./Item.module.css";

export default function Item(props) {
  return (
    <div className={styles.item}>
      <ItemInformation />
      <ItemCartInfo />
    </div>
  );
}
