import React from "react";
import Card from "../Card/Card";
import "./CardContainer.css";
import { findAllUsers } from "../../../utils";


const CardContainer = ({
  users,
  setUsers,
}) => {
  const getUsers = async () => {
    const registeredUsers = await findAllUsers();
    setUsers(registeredUsers.getUsers);
  };
  getUsers()


  return (
    <>
      <div className="cardContainer">
        {users.map((user, index) => (
          <Card key={index} user={user} />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
