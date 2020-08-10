import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__link">
        Leaderboard
      </NavLink>
      <NavLink to="/" className="nav__link">
        Network
      </NavLink>
      <NavLink to="/" className="nav__profile">
        <div className="nav_profile-image"></div>
      </NavLink>
      <button className="dropdown">
        <span>Profile name</span>
        <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
      </button>
    </nav>
  );
};

export default Navigation;
