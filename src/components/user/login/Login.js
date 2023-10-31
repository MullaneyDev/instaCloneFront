import React from "react";
import "./Login.css";
import { useState } from "react";
import { loginUser } from "../../../utils";

const Login = ({ setUser, setLoggedIn, loggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loggedIn) {
      const response = await loginUser(username, password);
      await setMessage(response.message);
      if (response.message === "Success!") {
        await setUser(response.user);
        await setLoggedIn(true);
      }
    }
    setMessage("Log Out first before switching accounts");
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          type="text"
          id="usernameLogin"
          placeholder="Username"
          className="input-field"
          required={true}
          onChange={(e) => handleChange(e, setUsername)}
        />
        <input
          type="password"
          id="passwordLogin"
          placeholder="Password"
          className="input-field"
          required={true}
          onChange={(e) => handleChange(e, setPassword)}
        />
        <input type="submit" className="Btn" value="Sign in" />
      </form>
      <h2>{message}</h2>
    </div>
  );
};

export default Login;
