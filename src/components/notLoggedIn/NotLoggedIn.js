import React from 'react'
import UserContainer from "../user/userContainer/UserContainer";

const NotLoggedIn = ({
  users,
  setUsers,
  user,
  setUser,
  loggedIn,
  setLoggedIn,
}) => {
  return (
    <div className="App">
      <UserContainer
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

export default NotLoggedIn