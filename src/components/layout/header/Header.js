import React from 'react'
import "./Header.css";

const Header = ({ user, loggedIn }) => {
  if (!loggedIn) {
    return (
      <div className="header">
        <h1>Promptelex</h1>
        <h3>log in or register</h3>
      </div>
    );
  } else {
    return (
      <div className="header">
        <h1>Promptelex</h1>
      </div>
    );
  }
};

export default Header