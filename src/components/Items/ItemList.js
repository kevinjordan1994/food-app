import Item from "./Item";
import card from "../UI/Card.module.css";
import styles from "./ItemList.module.css";
import meals from "../../store/meal-data";

export default function ItemList(props) {
  const mealsList = meals.map((meal) => {
    return (
      <Item
        name={meal.name}
        description={meal.description}
        price={meal.price}
        key={meal.key}
      />
    );
  });

  return (
    <div className={card.card}>
      <div className={styles.item_list}>{mealsList}</div>
    </div>
  );
}
