import React from "react";
import MainDisplayCard from "../mainDisplayCard/MainDisplayCard";

const MainDisplay = ({ apiPhotos }) => {
  return (
    <>
      <h1>Your Feed</h1>;
      <div className="image-feed">
        {apiPhotos.map((apiPhoto, index) => (
          <MainDisplayCard key={index} apiPhoto={apiPhoto} />
        ))}
      </div>
    </>
  );
};

export default MainDisplay;
