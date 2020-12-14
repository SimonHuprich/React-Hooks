import React, { useState } from "react";
import "./App.css";
import Item from "./components/item";

const initListe = [
  {
    name: "tomato",
    calorie: 20,
  },
  {
    name: "rice",
    calorie: 30,
  },
  {
    name: "candy",
    calorie: 100,
  },
  {
    name: "apple",
    calorie: 55,
  },
];

function App() {
  const [list, setList] = useState(initListe);

  const removeItemHandle = (e) => {
    const filterdList = list.filter((value) => value.name !== e.target.name);
    setList(filterdList);

    console.dir(e.target);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
        {list.map((data, key) => {
          return <Item key={key} item={data} onClick={removeItemHandle} />;
        })}
      </header>
    </div>
  );
}

export default App;
