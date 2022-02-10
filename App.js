import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

function BMIcal() {
  let [weight, setWeight] = useState("");
  let [height, setHeight] = useState("");
  let [bmi, setBmi] = useState("");

  return (
    <div>
      <h1>BMI Calculator</h1>
      <div className="div">
        <label>
          <b>Height in cm </b>
        </label>
        <input onChange={(event) => setHeight(event.target.value)} />
      </div>
      <div className="div">
        <label>
          <b>Weight in kg </b>
        </label>
        <input onChange={(event) => setWeight(event.target.value)} />
      </div>
      <button
        onClick={() => {
          let res = (weight / (height * 2)) * 100;
          setBmi(res.toFixed(2));
        }}
      >
        <b>Calculate</b>
      </button>

      <div className="div" id="res">
        <b>Your BMI is: {bmi}</b>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <BMIcal />
    </div>
  );
}
