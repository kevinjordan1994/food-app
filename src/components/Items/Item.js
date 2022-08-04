import ItemInformation from "./ItemInformation";
import ItemCartInfo from "./ItemCartInfo";
import styles from "./Item.module.css";

export default function Item(props) {
  return (
    <div className={styles.item}>
      <ItemInformation
        name={props.name}
        description={props.description}
        price={props.price}
      />
      <ItemCartInfo item={props.name} />
    </div>
  );
}
