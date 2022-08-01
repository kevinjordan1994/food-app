import ItemInformation from "./ItemInformation";
import ItemCartInfo from "./ItemCartInfo";
import styles from "./Item.module.css";
import MealData from "../../store/meal-data";

export default function Item(props) {
  return (
    <MealData.Consumer>
      {(mealData) => {
        return mealData.meals.map((meal) => (
          <div className={styles.item}>
            <ItemInformation
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
            <ItemCartInfo />
          </div>
        ));
      }}
    </MealData.Consumer>
  );
}
