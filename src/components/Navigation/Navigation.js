import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

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
      <button className="dropdown">Profile name</button>
    </nav>
  );
};

export default Navigation;
