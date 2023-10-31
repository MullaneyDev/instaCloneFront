import React from 'react'
import "./Header.css";

const Header = ({ user, loggedIn }) => {
  if (!loggedIn) {
    return (
      <div className="header">
        <h1>Promptelex</h1>
        <h3>Please log in</h3>
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