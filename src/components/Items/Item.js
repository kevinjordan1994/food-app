import ItemInformation from "./ItemInformation";
import ItemCartInfo from "./ItemCartInfo";
import styles from "./Item.module.css";
import Cart from "../../store/cart";
import { useContext } from "react";

export default function Item(props) {
  const cart = useContext(Cart);

  //TODO: Consider useReducer for the cart logic.

  const addToCart = (amount) => {
    const cost = amount * props.price;
    cart.totalPrice += cost;
    cart.itemsInCart.push({ name: props.name, quantity: amount });
    console.log(cart);
  };

  return (
    <div className={styles.item}>
      <ItemInformation
        name={props.name}
        description={props.description}
        price={props.price}
      />
      <ItemCartInfo onAddToCart={addToCart} />
    </div>
  );
}
