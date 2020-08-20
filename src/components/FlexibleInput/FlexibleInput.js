import React from "react";
import "./FlexibleInput.css";
import BlueArrowSVG from "images/BlueArrowSVG.js";

const FlexibleInput = ({ input, placeholder }) => {
  return (
    <span className="flexible-input">
      <label className="flexible-input__label">
        <input {...input} placeholder={placeholder} />
        <BlueArrowSVG />
      </label>
    </span>
  );
};

export default FlexibleInput;
