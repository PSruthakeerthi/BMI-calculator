import "./styles.css";
import Btn from "./btn";
import React, { useState } from "react";

function Input() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  let clearFields = () => {
    setHeight("");
    setWeight("");
  };
  return (
    <>
      <div className="div">
        <label>
          Height:{" "}
          <input
            type="text"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          />
          (m)
        </label>
      </div>
      <div className="div">
        <label>
          Weight:{" "}
          <input
            type="text"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
          />
          (Kgs)
        </label>
      </div>
      <div className="div">
        <Btn height={height} weight={weight} clearFields={clearFields} />
      </div>
    </>
  );
}

export default Input;
