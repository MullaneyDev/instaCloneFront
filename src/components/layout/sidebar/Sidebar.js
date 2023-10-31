import "./Sidebar.css";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import React from "react";
import { useState } from "react";
import { deleteUser, updateUsername } from "../../../utils";
import { writeCookie } from "../../../common";

const Sidebar = (user, setUser, setLoggedIn) => {
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateUsername(username, newUsername);
    await setMessage(response.message);
  };

  const handleDelete = (username) => {
    deleteUser(username);
    setLoggedIn(false);
  };
  const handleLogout = async () => {
    await writeCookie("jwt_token", user.token, 0);
    await setUser({});
    await setLoggedIn(false);
  };
  return (
    <div className="mainWindow">
      <div className="sidebar" id="mySidebar">
        <button className="menuBtn">
          <KeyboardDoubleArrowLeftIcon />
        </button>
        <div className="account">
          <h3>username</h3>
          <h3>photos</h3>
        </div>
        <div className="accountOptions">
          <form className="updateForm" onSubmit={handleSubmit}>
            <label>Update Username</label>
            <input
              type="text"
              required={true}
              placeholder="Current Username"
              className="input-field"
              onChange={(e) => handleChange(e, setUsername)}
            />
            <input
              type="text"
              required={true}
              placeholder="New Username"
              className="input-field"
              onChange={(e) => handleChange(e, setNewUsername)}
            />
            <input className="sidebarBtn" type="submit" value="Submit" />
          </form>
          <h3>{message}</h3>
          <button className="sidebarBtn" onClick={() => handleDelete(user.username)}>
            Delete Account
          </button>
          <button className="sidebarBtn" onClick={() => handleLogout()}>
            Log Out
          </button>
        </div>
      </div>
      <div className="pictureWindow">
        <h3>PICTURES HERE</h3>
      </div>
    </div>
  );
};

export default Sidebar;
