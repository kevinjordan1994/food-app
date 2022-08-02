import Item from "./Item";
import card from "../UI/Card.module.css";
import styles from "./ItemList.module.css";
import MealData from "../../store/meal-data";

export default function ItemList(props) {
  return (
    <div className={card.card}>
      <div className={styles.item_list}>
        <MealData.Consumer>
          {(mealData) =>
            mealData.meals.map((meal) => {
              return (
                <Item
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
                  key={meal.key}
                />
              );
            })
          }
        </MealData.Consumer>
      </div>
    </div>
  );
}
