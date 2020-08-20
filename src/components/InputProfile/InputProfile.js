import React from "react";
import "./InputProfile.css";

const InputProfile = ({ placeholder, input }) => {
  return <input {...input} placeholder={placeholder} className="pr-input" />;
};

export default InputProfile;
