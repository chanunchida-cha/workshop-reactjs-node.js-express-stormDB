import React from "react";
import {NavLink} from "react-router-dom"

export default function Header() {
  return (
    <div className="header">
      <div className="header-center">Pantip</div>
      <div className="menu">
        <NavLink
          className="menu-list"
          to={`/`}
          activeClassName="menu-active"
          exact
        >
          HOME
        </NavLink>
        <NavLink
          className="menu-list"
          to={`/post`}
          activeClassName="menu-active"
          exact
        >
          WRITE
        </NavLink>
      </div>
    </div>
  );
}
