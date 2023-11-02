import React from "react";
import "./MainDisplayCard.css";

const MainDisplayCard = ({ apiPhoto }) => {
  console.log("HELLO FROM MAIN DISPLAY CARD", apiPhoto);
  if (!apiPhoto) <h1>NO PHOTO</h1>;
  return (
    <div className="main-display-card">
      <img
        className="photo"
        src={apiPhoto.download_url}
        alt={apiPhoto.author}
      />
    </div>
  );
};

export default MainDisplayCard;
