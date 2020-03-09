import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaTags } from "react-icons/fa";

import { CurrentUserContext } from "../../contexts/currentUser";

const FeedToggler = ({ tagName }) => {
  const [currentUserState] = useContext(CurrentUserContext);
  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link">
            Global Feed
          </NavLink>
        </li>
        {currentUserState.isLoggedIn && (
          <li className="nav-item">
            <NavLink to="/feed" className="nav-link">
              Personal Feed
            </NavLink>
          </li>
        )}
        {tagName && (
          <li className="nav-item">
            <NavLink
              to={`/tags/${tagName}`}
              exact
              className="nav-link"
              style={tagFlex}
            >
              <FaTags />
              {tagName}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FeedToggler;

const tagFlex = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  maxWidth: "130px",
  justifyContent: "space-evenly"
};
