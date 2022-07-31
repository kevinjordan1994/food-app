import CartButton from "./CartButton";
import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <div>
        <h1>McDonalds 2</h1>
      </div>
      <CartButton />
    </div>
  );
}
