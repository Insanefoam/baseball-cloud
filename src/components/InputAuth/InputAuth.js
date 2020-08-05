import React from "react";
import "./InputAuth.css";

const InputAuth = ({ input, placeholder }) => {
  return <input {...input} placeholder={placeholder} className="input"></input>;
};

export default InputAuth;
