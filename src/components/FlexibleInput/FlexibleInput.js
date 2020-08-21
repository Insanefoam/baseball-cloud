import React from "react";
import "./FlexibleInput.css";
import PropTypes from "prop-types";
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

FlexibleInput.propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
};

export default FlexibleInput;
