import React from "react";
import { useState } from "react";
import UserContainer from "../user/userContainer/UserContainer";
import { deleteUser, updateUsername } from "../../utils";
import { writeCookie } from "../../common";
import CardContainer from "../cards/CardContainer/CardContainer";

const LoggedIn = ({
  users,
  setUsers,
  user,
  setUser,
  loggedIn,
  setLoggedIn,
}) => {
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
    <div>
      <UserContainer
        users={users}
        setUsers={setUsers}
        user={user}
        setUser={setUser}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />

      <div className="accountOptions">
        <h2>{user.username}</h2>
        <form className="updateForm" onSubmit={handleSubmit}>
          <label>Update Username</label>
          <input
            type="text"
            required={true}
            placeholder="Current Username"
            onChange={(e) => handleChange(e, setUsername)}
          />
          <input
            type="text"
            required={true}
            placeholder="New Username"
            onChange={(e) => handleChange(e, setNewUsername)}
          />
          <input type="submit" value="Submit" />
        </form>
        <h3>{message}</h3>
        <button
          className="deleteBtn"
          onClick={() => handleDelete(user.username)}
        >
          Delete Account
        </button>
        <button onClick={() => handleLogout()}>Log Out</button>
      </div>
      <CardContainer
        users={users}
        setUsers={setUsers}
        user={user}
        setUser={setUser}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
    </div>
  );
};

export default LoggedIn;
