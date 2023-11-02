import React from "react";

// import CardContainer from "../cards/CardContainer/CardContainer";
import Sidebar from "../layout/sidebar/Sidebar";

const LoggedIn = ({
  users,
  setUsers,
  user,
  setUser,
  loggedIn,
  setLoggedIn,
  apiPhotos,
}) => {
  return (
    <div>
      <Sidebar
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
