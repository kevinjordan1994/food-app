import React from "react";
import card from "../UI/Card.module.css";
import styles from "./Overview.module.css";

function Overview(props) {
  return (
    <div className={card.dark_card}>
      <div className={styles.overview}>
        <h1 className={styles.header}>Changing food forever</h1>
        <p className={styles.overview_text}>
          McDonalds 2 believes in raising the bar for fast food and provides the
          tastiest (and healthiest) options on the market.
        </p>
      </div>
    </div>
  );
}

export default React.memo(Overview);
