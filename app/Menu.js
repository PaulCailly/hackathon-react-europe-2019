import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from "./AppContext";

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faBars, faTimes)

const Menu = () => {
  const ctx = useContext(AppContext);
  return (
    <ul>
      <li className="menu">
        <FontAwesomeIcon icon={`${ctx.navOpen ? 'times' : 'bars'}`} className="hoverable" onClick={() => {
          ctx.toggleSidenav(!ctx.navOpen)
        }} />
      </li>
      <li className="link"><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li className="link"><NavLink activeClassName="active" to="/destinations">Destinations</NavLink></li>
      <li className="link"><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
      <li className="link"><a href="https://github.com/httpJunkie/kendoreact-tripxpert">Source Code</a></li>
    </ul>
  )
}

export default Menu;