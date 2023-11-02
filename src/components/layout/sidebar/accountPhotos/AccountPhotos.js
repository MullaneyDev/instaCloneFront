import React from "react";
import { useState, useEffect } from "react";
import { getUsersPhotos } from "../../../../utils";

const AccountPhotos = ({
  users,
  setUsers,
  user,
  setUser,
  loggedIn,
  setLoggedIn,
}) => {
  console.log("HELLO FROM USEEFFECT", user);

  useEffect(() => {
    console.log("HELLO FROM USEEFFECT22222222", user);
    const getUsersimages = async (user) => {
      const loggedUser = await getUsersPhotos(user);
      console.log("FROM ACCOUTPHOTOS", loggedUser);

      return loggedUser;
    };
    getUsersimages();
  }, [user]);

  if (!user) {
    return <h1>INBETWWEN LOGGING IN</h1>;
  }
  return (
    <div className="account">
      <h3>{user.username}</h3>
      <h3>Your Photos</h3>
    </div>
  );
};

export default AccountPhotos;
