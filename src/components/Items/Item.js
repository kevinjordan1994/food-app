import ItemInformation from "./ItemInformation";
import ItemCartInfo from "./ItemCartInfo";
import styles from "./Item.module.css";
import { useContext } from "react";
import Cart from "../../store/cart";

export default function Item(props) {
  const cart = useContext(Cart);

  const addItem = (amount) => {
    const newItem = { item: props.name, price: props.price, amount: amount };
    cart.addItemToCart(newItem);
  };

  return (
    <div className={styles.item}>
      <ItemInformation
        name={props.name}
        description={props.description}
        price={props.price}
      />
      <ItemCartInfo onAddItem={addItem} />
    </div>
  );
}
