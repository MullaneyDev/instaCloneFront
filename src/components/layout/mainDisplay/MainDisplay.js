import React from "react";

const MainDisplay = () => {
  return (
    <>
      <h1>Your Feed</h1>;
      <div className="image-feed">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.description}
            className="image-item"
          />
        ))}
      </div>
    </>
  );
};

export default MainDisplay;
