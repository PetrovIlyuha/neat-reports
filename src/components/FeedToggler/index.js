import React from "react";
import { NavLink } from "react-router-dom";
import { FaTags } from "react-icons/fa";

const FeedToggler = ({ tagName }) => {
  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link">
            Global Feed
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/feed" className="nav-link">
            Your Personal Feed
          </NavLink>
        </li>
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
  width: "85px",
  justifyContent: "space-around"
};
