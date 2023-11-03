import React from "react";
import { useState, useEffect, useRef } from "react";
import { getUsersPhotos } from "../../../../utils";

import AccountPhotoCard from "../accountPhotoCard/AccountPhotoCard";

import "./AccountPhotos.css";

const AccountPhotos = ({
  users,
  setUsers,
  user,
  setUser,
  loggedIn,
  setLoggedIn,
}) => {
  const [userToDisplay, setUserToDisplay] = useState({});
  const userRef = useRef(user);
  useEffect(() => {
    userRef.current = user;
    const getUsersimages = async () => {
      const currentUser = userRef.current;

      const loggedUser = await getUsersPhotos(currentUser.username);
      console.log("HELLO  USER", loggedUser);
      setUserToDisplay(loggedUser.result);
      console.log("YO BROOOOO", userToDisplay);
    };
    getUsersimages();
  }, [user]);
  console.log("YO brewwww", userToDisplay.Photos);
  if (!user) {
    return <h1>INBETWWEN LOGGING IN</h1>;
  }
  return (
    <>
      <div id="keep-together">
        <h3>{user.username}</h3>
        <h3>Your Photos</h3>
      </div>
      <div className="account-wrapper">
        {userToDisplay.Photos ? (
          userToDisplay.Photos.map((photo, index) => (
            <AccountPhotoCard
              key={index}
              users={users}
              setUsers={setUsers}
              user={user}
              photo={photo}
            />
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
};

export default AccountPhotos;
