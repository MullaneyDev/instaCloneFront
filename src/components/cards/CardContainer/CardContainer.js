import React, { useState } from "react";
import Card from "../Card/Card";
import "./CardContainer.css";
import { findAllUsers } from "../../../utils";

const CardContainer = ({ users, setUsers }) => {
  const [toggle, setToggle] = useState(false);
  const getUsers = async () => {
    setToggle(true);
    const registeredUsers = await findAllUsers();
    setUsers(registeredUsers.result);
  };

  if (toggle) {
    return (
    <>
      <div className="cardContainer">
        {users.map((user, index) => (
          <Card key={index} user={user} />
        ))}
      </div>
    </>)
  }
  return (
    <>
      <div className="cardContainer">
        <button onClick={getUsers}>See Users</button>
      </div>
    </>
  );
};

export default CardContainer;
