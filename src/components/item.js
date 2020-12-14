import React from "react";
import "./item.css";

function item(props) {
  return (
    <dic className="item-style">
      <h3>Name: {props.item.name}</h3>
      <h3>Calories: {props.item.calorie}</h3>
      <button
        name={props.item.name}
        className="remove-button"
        onClick={props.onClick}
      >
        remove
      </button>
    </dic>
  );
}

export default item;
