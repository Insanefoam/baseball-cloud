import React from "react";
import Logo from "components/Logo";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Logo></Logo>
      </div>
    </header>
  );
};

export default Header;
