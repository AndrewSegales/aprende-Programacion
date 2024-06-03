// Menu.jsx
import React from 'react';
import './Menu.css'; 

const Menu = () => {
  return (
    <div className="dropdown-profile">
      <div className="dropdown-menu">
        <a href="/profile">Profile</a>
        <a href="/settings">Settings</a>
        <a href="/help">Help</a>
        <a href="/logout">Logout</a>
      </div>
    </div>
  );
};

export default Menu;
