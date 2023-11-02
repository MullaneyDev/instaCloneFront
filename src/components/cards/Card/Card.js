import React from "react";
import "./Card.css";

const Card = ({ user }) => {
  console.log(user);
  return (
    <div className="card">
      <p className="username">{user.username}</p>
    </div>
  );
};

export default Card;
