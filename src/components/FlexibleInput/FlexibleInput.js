import React from "react";
import "./FlexibleInput.css";
import BlueArrow from "images/BlueArrow/BlueArrow";

const FlexibleInput = ({ input, placeholder }) => {
  return (
    <span className="flexible-input">
      <input {...input} placeholder={placeholder} id="input"></input>
      <label htmlFor="input">
        <BlueArrow></BlueArrow>
      </label>
    </span>
  );
};

export default FlexibleInput;
