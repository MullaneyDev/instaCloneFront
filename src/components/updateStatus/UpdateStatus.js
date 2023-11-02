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
    <div>
      <form onSubmit={handleAddPhotoSubmit}>
        <label>Image URL</label>
        <input type="text" name="imageurl" onChange={handleUrl} />
        <input type="submit" value="Add Photo" />
      </form>
    </div>
  );
};

export default UpdateStatus;
