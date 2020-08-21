import React from "react";
import "./InputProfile.css";
import PropTypes from "prop-types";

const InputProfile = ({ placeholder, input }) => {
  return <input {...input} placeholder={placeholder} className="pr-input" />;
};

InputProfile.propTypes = {
  placeholder: PropTypes.string,
  input: PropTypes.object,
};

export default InputProfile;
