import React from "react";
import "./AccountPhotoCard.css";

const AccountPhotoCard = ({ index, users, user, photo }) => {
  return (
    <div className="account-card">
      <img src={photo.url} />
    </div>
  );
};

export default AccountPhotoCard;
