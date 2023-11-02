import React from "react";
import UserContainer from "../user/userContainer/UserContainer";
import "../../App.css";

const NotLoggedIn = ({
  users,
  setUsers,
  user,
  setUser,
  loggedIn,
  setLoggedIn,
}) => {
  return (
    <UserContainer
      users={users}
      setUsers={setUsers}
      user={user}
      setUser={setUser}
      loggedIn={loggedIn}
      setLoggedIn={setLoggedIn}
    />
  );
};

export default NotLoggedIn;
