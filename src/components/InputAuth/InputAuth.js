import React from "react";
import "./InputAuth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputAuth = ({ input, placeholder, icon }) => {
  return (
    <div className="input">
      <span className="input__icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <input
        {...input}
        placeholder={placeholder}
        className="input__field"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = placeholder)}
      />
    </div>
  );
};

export default InputAuth;
