import React, { useState } from "react";
import "./UpdateStatus.css";
import { updateStatus } from "../../utils";

const UpdateStatus = () => {
  const [url, setUrl] = useState("");

  const handleUrl = (e) => {
    setUrl(e.target.value);
  };

  const handleAddPhotoSubmit = async (e) => {
    e.preventDefault();
    const response = await updateStatus(url);
    console.log(response);
  };

  return (
    <div className="updateStatus">
      <form onSubmit={handleAddPhotoSubmit}>
        <label>Add a photo</label>
        <input
          type="text"
          name="imageurl"
          className="input-field"
          placeholder="Image URL"
          onChange={handleUrl}
        />
        <input type="submit" className="sidebarBtn" value="Add" />
      </form>
    </div>
  );
};

export default UpdateStatus;
