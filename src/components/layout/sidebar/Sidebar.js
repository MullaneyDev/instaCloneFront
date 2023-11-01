import "./Sidebar.css";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import React from "react";
import { useCollapse } from "react-collapsed";
import { useState } from "react";
import { deleteUser } from "../../../utils";
import { updateUsername } from "../../../utils";
import { writeCookie } from "../../../common";
import CardContainer from "../../cards/CardContainer/CardContainer";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Sidebar = ({ users, setUsers, user, setUser, loggedIn, setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateUsername(username, newUsername);
    await setMessage(response.message);
  };

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

  const openModal = async () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  function Collapsible() {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps} = useCollapse();
    return (
      <div className="collapsible">
        <div className="header" {...getToggleProps({ onClick: () => setExpanded((prevExpanded) => !prevExpanded),})}>
          {isExpanded ? "Account Options" : "Account Options"}
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
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
              <button className="sidebarBtn" onClick={openModal}>
                Delete Account
              </button>
              <Modal
                className="ModalStyle"
                isOpen={modal}
                onRequestClose={closeModal}
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
        <Collapsible />
      </div>
      <div className="pictureWindow">
        <h3>PICTURES HERE</h3>
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
