import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logoutUser } from "store/actions";
import { useDispatch } from "react-redux";

const Navigation = () => {
  const dispatch = useDispatch();
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <nav className="nav">
      <NavLink to="/leaderboard" className="nav__link">
        Leaderboard
      </NavLink>
      <NavLink to="/network" className="nav__link">
        Network
      </NavLink>
      <NavLink to="/profile" className="nav__profile">
        <div className="nav_profile-image"></div>
      </NavLink>
      <button className="dropdown" onClick={() => setIsDropdown(!isDropdown)}>
        <span>Profile name</span>
        <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        <div className={isDropdown ? "dropdown-visible" : "dropdown-invisible"}>
          <NavLink to="/profile">My Profile</NavLink>
          <NavLink onClick={() => dispatch(logoutUser())} to="/login">
            Log out
          </NavLink>
        </div>
      </button>
    </nav>
  );
};

export default Navigation;
