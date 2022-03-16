import "./styles.css";
import React, { useState } from "react";

function Btn(props) {
  const [bmi, setBmi] = useState("");
  const [show, setShow] = useState(false);
  let { height, weight, clearFields } = props;

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
    clearFields();
  };

  return (
    <>
      <button className="btn" onClick={calculateBmi}>
        Calculate
      </button>{" "}
      <button className="btn" onClick={onReset}>
        Reset
      </button>
      {show ? (
        <h2 className="div" id="res">
          {bmi} {getBmi(bmi)}
        </h2>
      ) : null}
    </>
  );
}

export default Btn;
