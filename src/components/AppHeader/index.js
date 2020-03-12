import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import MainLogo from "./assets/neatLogo.png";
import { FaFeatherAlt } from "react-icons/fa";
import { GiHeatHaze } from "react-icons/gi";
import { AiOutlineLogin, AiTwotoneSetting } from "react-icons/ai";
import { FaFileSignature } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";

import "./styles.css";

import { CurrentUserContext } from "../../contexts/currentUser";

const AppHeader = () => {
  const [currentUserState] = useContext(CurrentUserContext);

  return (
    <nav className="navbar navbar-light">
      <div className="container fluid">
        <Link to="/" className="navbar-brand">
          <img src={MainLogo} alt="" className="main_logo" />
        </Link>
        <ul className="nav navbar-nav pull-xs-right users_right_nav_section">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact>
              <GiHeatHaze />
              <span style={{ marginLeft: "4px" }}>Home</span>
            </NavLink>
          </li>
          {!currentUserState.isLoggedIn && (
            <>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" exact>
                  <AiOutlineLogin />
                  <span style={{ marginLeft: "4px" }}>Log In</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link" exact>
                  <FaFileSignature />
                  <span style={{ marginLeft: "4px" }}>Sign Up</span>
                </NavLink>
              </li>
            </>
          )}
          {currentUserState.isLoggedIn && (
            <>
              <li className="nav-item">
                <NavLink to="/articles/new" className="nav-link">
                  <FaFeatherAlt />
                  {""}
                  <span style={{ marginLeft: "4px" }}>New Post</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/settings" className="nav-link">
                  <AiTwotoneSetting />
                  {""}
                  <span style={{ marginLeft: "4px" }}>Settings</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`/profiles/${currentUserState.currentUser.username}`}
                  className="nav-link"
                >
                  <FaUserAstronaut />
                  {""}
                  <span style={{ marginLeft: "4px" }}>Profile</span>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default AppHeader;
