import "./styles.css";
import Input from "./input";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Online BMI Calculator</h1>

      <Input />

      <p>
        BMI(Body Mass Index) which is closely related to total body {"\n"}fat is
        a major indicator of systemic overweight and obesity. Because BMI{"\n"}{" "}
        calculates the proportion of body weight, so it is more accurate to{" "}
        {"\n"} measure the risk of heart disease and hypertension due to
        overweight.
      </p>
    </div>
  );
}
