import React from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Navbar = () => {

    const {user} = useUser()

  return (
    <nav>
      {user !== null && 
      <ul class="menu">
        <li class="menu-item">
          <NavLink to="/translation">Translations</NavLink>
        </li>
        <li class="menu-item">
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>}
    </nav>
  );
};

export default Navbar;
