import React from 'react'
import "./Register.css";
import { useState } from "react";
import { registerUser } from "../../../utils";

const Register = () => {
    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage] = useState("")

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   const response = await registerUser(username, email, password);
   await setMessage(response.message)
  };

  return (
    <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
        <input
          type="text"
          id="usernameRegister"
          placeholder="Username"
          required={true}
          onChange={(e) => handleChange(e, setUsername)}
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          required={true}
          onChange={(e) => handleChange(e, setEmail)}
        />
        <input
          type="password"
          id="passwordRegister"
          placeholder="Password"
          required={true}
          onChange={(e) => handleChange(e, setPassword)}
        />
        <input type="submit" value="Register" />
      </form>
      <h2>{message}</h2>
    </div>)
}

export default Register