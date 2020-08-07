import React from "react";
import Logo from "components/Logo";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ navigation: Navigation }) => {
  return (
    <header>
      <NavLink to="/">
        <div className="logo">
          <Logo></Logo>
        </div>
      </NavLink>
      {Navigation ? <Navigation /> : undefined}
    </header>
  );
};

export default Header;
