import "./Sidebar.css";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import React, { useRef } from "react";
import { useCollapse } from "react-collapsed";
import { useState } from "react";
import { deleteUser } from "../../../utils";
import { updateUsername, updatePassword } from "../../../utils";
import { writeCookie } from "../../../common";
import CardContainer from "../../cards/CardContainer/CardContainer";
import Modal from "react-modal";
import MainDisplay from "../mainDisplay/MainDisplay";
import UpdateStatus from "../../updateStatus/UpdateStatus";

Modal.setAppElement("#root");

const Sidebar = ({
  users,
  setUsers,
  user,
  setUser,
  loggedIn,
  setLoggedIn,
  apiPhotos,
}) => {
  const [message, setMessage] = useState("");
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdateUsername, setModalUpdateUsername] = useState(false);
  const [modalUpdatePassword, setModalUpdatePassword] = useState(false);

  const password = useRef(null)
  const newPassword = useRef(null)
  const username = useRef(null)
  const newUsername = useRef(null)

  const handleNewUsername = async (e) => {
    e.preventDefault();
    console.log(username?.current?.value);
    console.log(newUsername?.current?.value);

    const response = await updateUsername(
      username?.current?.value,
      newUsername?.current?.value
    );
    await setMessage(response.message);
  };
  const handleNewPassword = async (e) => {
    e.preventDefault()
    console.log(password?.current?.value);
    console.log(newPassword?.current?.value);
  
    const response = await updatePassword(password?.current?.value,newPassword?.current?.value)
    await setMessage(response.message)
  }

  const handleDelete = async (username) => {
    await deleteUser(username);
    await writeCookie("jwt_token", user.token, 0);
    await setUser({});
    await setLoggedIn(false);
  };
  const handleLogout = async () => {
    await writeCookie("jwt_token", user.token, 0);
    await setUser({});
    await setLoggedIn(false);
  };

  const openModal = async (setter) => {
    await setter(true);
  };
  const closeModal = async (setter) => {
    await setter(false);
  };

  function Collapsible() {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse();
    return (
      <div className="collapsible">
        <div
          className="header"
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          {isExpanded ? "Account Options" : "Account Options"}
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            <button
              className="sidebarBtn"
              onClick={() => openModal(setModalUpdateUsername)}
            >
              Update Username
            </button>
            <Modal
              className="ModalStyle"
              isOpen={modalUpdateUsername}
              onRequestClose={() => closeModal(setModalUpdateUsername)}
            >
              <>
                <div className="accountOptions">
                  <form
                    className="updateForm"
                    onSubmit={(e) =>
                      handleNewUsername(e)
                    }
                  >
                    <label>Update Username</label>
                    <input
                      type="text"
                      required={true}
                      placeholder="Current Username"
                      className="input-field"
                      ref={username}
                    />
                    <input
                      type="text"
                      required={true}
                      placeholder="New Username"
                      className="input-field"
                      ref={newUsername}
                    />
                    <input
                      className="sidebarBtn"
                      type="submit"
                      value="Submit"
                    />
                  </form>
                  <h3>{message}</h3>
                </div>
              </>
            </Modal>
            <button
              className="sidebarBtn"
              onClick={() => openModal(setModalUpdatePassword)}
            >
              Update Password
            </button>
            <Modal
              className="ModalStyle"
              isOpen={modalUpdatePassword}
              onRequestClose={() => closeModal(setModalUpdatePassword)}
            >
              <>
                <div className="accountOptions">
                  <form
                    className="updateForm"
                    onSubmit={(e) =>
                      handleNewPassword(e)
                    }
                  >
                    <label>Update Password</label>
                    <input
                      type="password"
                      required={true}
                      placeholder="Current Password"
                      className="input-field"
                      ref={password}
                    />
                    <input
                      type="password"
                      required={true}
                      placeholder="New Password"
                      className="input-field"
                      ref={newPassword}
                    />
                    <input
                      className="sidebarBtn"
                      type="submit"
                      value="Submit"
                    />
                  </form>
                  <h3>{message}</h3>
                </div>
              </>
            </Modal>
            <button
              className="sidebarBtn"
              onClick={() => openModal(setModalDelete)}
            >
              Delete Account
            </button>
            <Modal
              className="ModalStyle"
              isOpen={modalDelete}
              onRequestClose={() => closeModal(setModalDelete)}
            >
              <>
                <h3> Are you sure you want to delete your account?</h3>
                <button
                  className="sidebarBtn"
                  onClick={() => handleDelete(user.username)}
                >
                  Confirm Delete
                </button>
              </>
            </Modal>
            <button className="sidebarBtn" onClick={() => handleLogout()}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mainWindow">
      <div className="sidebar" id="mySidebar">
        <button className="menuBtn">
          <KeyboardDoubleArrowLeftIcon />
        </button>
        <div className="account">
          <h3>{user.username}</h3>
          <h3>Your Photos</h3>
        </div>       
         <div className="updateStatus">
          <UpdateStatus />
        </div>
        <Collapsible />
      </div>

      <div className="pictureWindow">
        <MainDisplay apiPhotos={apiPhotos} />
      </div>

      <div className="users">
        <CardContainer
          users={users}
          setUsers={setUsers}
          user={user}
          setUser={setUser}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      </div>
    </div>
  );
};

export default Sidebar;
