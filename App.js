import "./styles.css";
import React, { Fragment, useState } from "react";

function BMIcal() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [show, setShow] = useState(false);
  let calculateBmi = () => {
    var res = weight / (height * height);
    if (height === "" || weight === "") {
      alert("Input Fiels Cannot be left Empty");
    } else if (height < 0 || weight < 0) {
      alert("Please Enter Valid Input");
    } else {
      setShow(true);
      setBmi(res.toFixed(2));
    }
  };

  const getBmi = (bmi) => {
    if (bmi === "") {
      return " ";
    }
    if (bmi < 18.5) {
      return " : You are Underweight";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return " : You are Normal weight";
    }
    if (bmi >= 25 && bmi < 29.9) {
      return " : You are Overweight";
    }
    if (bmi >= 30) {
      return " : You are Obese";
    }
  };
  let onReset = () => {
    setBmi("");
    setHeight("");
    setWeight("");
  };
  const handleUserHeight = (event) => {
    const userHeight = event.target.value;
    setHeight(userHeight);
  };

  const handleUserWeight = (event) => {
    const userWeight = event.target.value;
    setWeight(userWeight);
  };
  return (
    <Fragment id="fragment">
      <h1>BMI Calculator</h1>
      <div className="div">
        <label>
          <b>Height in metres </b>
        </label>
        <input type="text" value={height} onChange={handleUserHeight} />
      </div>
      <div className="div">
        <label>
          <b>Weight in kg </b>
        </label>
        <input type="text" value={weight} onChange={handleUserWeight} />
      </div>
      <button className="btn" onClick={calculateBmi}>
        Calulate
      </button>{" "}
      <button className="btn" onClick={onReset}>
        Reset
      </button>
      {show ? (
        <div className="div" id="res">
          {bmi} {getBmi(bmi)}
        </div>
      ) : null}
    </Fragment>
  );
}

export default function App() {
  return (
    <div className="App">
      <BMIcal />
    </div>
  );
}
