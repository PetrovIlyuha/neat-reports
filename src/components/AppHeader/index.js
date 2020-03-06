import React from "react";
import { Link, NavLink } from "react-router-dom";
import MainLogo from "./assets/neatLogo.png";
import "./styles.css";

const AppHeader = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container fluid">
        <Link to="/" className="navbar-brand">
          <img src={MainLogo} alt="" className="main_logo" />
        </Link>
        <ul className="nav navbar-nav pull-xs-right users_right_nav_section">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link" exact>
              Log In
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link" exact>
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AppHeader;
