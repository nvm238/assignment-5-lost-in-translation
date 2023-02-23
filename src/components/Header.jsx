import React from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Navbar from "./navbar/Navbar";
import { storageRemove } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";

const Header = () => {
  const { user, setUser } = useUser();

  const handleLogoutClick = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      storageRemove(STORAGE_KEY_USER);
      setUser(null);
    }
  };

  return (
    <div class="header">
      <NavLink to="/">
        <h1 class="title">Lost In Translation</h1>
      </NavLink>
      <Navbar />
      <div>
        <NavLink to="/profile">
          <h2>{user && user.username}</h2>
        </NavLink>
      </div>
      {user !== null &&
        <div class="logout-container">
          <button class="logout-button" onClick={handleLogoutClick}>
            {user && <h3>Logout</h3>}
          </button>
        </div>
      }
    </div>
  );
};

export default Header;
