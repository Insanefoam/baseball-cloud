import React from "react";
import "./FlexibleInput.css";
import BlueArrow from "images/BlueArrow/BlueArrow";

const FlexibleInput = ({ input, placeholder }) => {
  return (
    <span className="flexible-input">
      <label className="flexible-input__label">
        <input {...input} placeholder={placeholder}></input>
        <BlueArrow></BlueArrow>
      </label>
    </span>
  );
};

export default FlexibleInput;
