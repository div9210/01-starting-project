import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

function MealItemForm(props) {
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddItem({
      quantity: event.target.quantity.value,
    });
  };
  return (
    <form className={classes["form"]} onSubmit={submitHandler}>
      {" "}
      <Input
        label={"Amount"}
        input={{
          id: "meal_input_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
          name: "quantity",
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default MealItemForm;
