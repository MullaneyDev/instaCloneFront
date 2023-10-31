import React from "react";
import "./Card.css";

const Card = ({ user }) => {
  return (
    <div className="card">
      <p className="username">{user.username}</p>
      <img src={user.img} alt={user.image.title} />
    </div>
  );
};

export default Card;
