import React from "react";

const MainDisplayCard = ({ apiPhoto }) => {
  console.log("HELLO FROM MAIN DISPLAY CARD", apiPhoto);
  if (!apiPhoto) <h1>NO PHOTO</h1>;
  return (
    <div className="main-display-card">
      <img className="photo" src={apiPhoto.url} />
    </div>
  );
  console.log();
};

export default MainDisplayCard;
