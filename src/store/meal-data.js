import React from "react";

const MealData = React.createContext({
  meals: [
    {
      name: "The Special Burger",
      description: "The signature sandwich.",
      price: 9.99,
    },
    {
      name: "Crazy Fries",
      description: "You can't put that on french fries! Yes we can.",
      price: 7.99,
    },
    {
      name: "Spicy Chicken Sandwich",
      description: "Straight fire.",
      price: 7.99,
    },
  ],
});

export default MealData;
