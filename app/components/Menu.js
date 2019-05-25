import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../AppContext";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faTimes,
  faInfoCircle,
  faPencil,
  faUniversity
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Logo from "./Logo";
library.add(faBars, faTimes, faGithub, faInfoCircle);

const Menu = () => {
  const ctx = useContext(AppContext);
  return (
    <ul
      style={{
        padding: "1rem 1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <li className="menu">
        <FontAwesomeIcon
          icon={`${ctx.navOpen ? "times" : "bars"}`}
          className="hoverable"
          onClick={() => {
            ctx.toggleSidenav(!ctx.navOpen);
          }}
        />
      </li>

      <Logo />
      <div className="topnav">
        <ul style={{ justifyContent: "flex-end" }}>
          <li className="link">
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="link">
            <NavLink activeClassName="active" to="/destinations">
              Destinations
            </NavLink>
          </li>
          <li className="link">
            <NavLink activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="link">
            <NavLink activeClassName="active" to="/admin">
              Admin
            </NavLink>
          </li>
          <li className="link">
            <div style={{ display: "flex", alignItems: "center" }}>
              <FontAwesomeIcon
                style={{
                  marginRight: ".5rem",
                  width: "1em",
                  height: "1em",
                  display: "inline-block",
                  verticalAlign: "text-top"
                }}
                icon={["fab", "github"]}
              />
              <a href="https://github.com/httpJunkie/kendoreact-tripxpert">
                Source Code
              </a>
            </div>
          </li>
        </ul>
      </div>
    </ul>
  );
};

export default Menu;
