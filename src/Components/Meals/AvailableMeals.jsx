import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import Loader from "../UI/Loader";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    async function fetchFromDatabase() {
      try {
        let meals = await fetch(
          "https://food-react-f32aa-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
        );
        if (meals.ok) {
          meals = await meals.json();
          let transformedMeals = [];
          for (const key in meals) {
            transformedMeals.push({
              id: key,
              name: meals[key].name,
              price: meals[key].price,
              description: meals[key].description,
            });
          }
          setMeals(transformedMeals);
          setIsLoading(false);
        }
      } catch (error) {
        throw new Error("Something went wrong: " + error.message);
      }
    }

    const timeout = setTimeout(async () => {
      try {
        await fetchFromDatabase();
      } catch (error) {
        setError(error.message);
      }
    }, 1700);

    // Clean up function
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const mealsList = meals.map((meal) => (
    <Card key={meal.id}>
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    </Card>
  ));
  return (
    <>
      {error && (
        <div>
          <h2 className={classes["meals-error"]}>{error}</h2>
        </div>
      )}
      {isLoading && !error && <Loader />}
      {!isLoading && (
        <section className={classes["meals"]}>
          <ul>{mealsList}</ul>
        </section>
      )}
    </>
  );
}

export default AvailableMeals;
