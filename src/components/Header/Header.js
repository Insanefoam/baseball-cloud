import React from "react";
import Logo from "images/Logo";
import { NavLink } from "react-router-dom";
import "./Header.css";
import PropTypes from "prop-types";

const Header = ({ navigation: Navigation }) => {
  return (
    <header>
      <NavLink to="/">
        <div className="logo">
          <Logo />
        </div>
      </NavLink>
      {Navigation && <Navigation />}
    </header>
  );
};

Header.propTypes = {
  navigation: PropTypes.func,
};

export default Header;
