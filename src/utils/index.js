import { getTokenFromCookie, writeCookie } from "../common";

export const authCheck = async (jwt) => {
  try {
    const response = await fetch("http://localhost:5001/user/authCheck", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const findAllUsers = async () => {
  try {
    const token = getTokenFromCookie("jwt_token");
    const response = await fetch(`http://localhost:5001/user/`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`http://localhost:5001/user/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    if (
      data.message !== "Invalid username." &&
      data.message !== "Unauthorised Login!"
    ) {
      writeCookie("jwt_token", data.user.token, 7);
      return data;
    }
    if (data.message === "Invalid username.") {
      return { message: "Invalid username", data };
    }
    if (data.message === "Unauthorised Login!") {
      return { message: "Invalid password", data };
    }
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (username, email, password) => {
  try {
    const response = await fetch(`http://localhost:5001/user/register`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        isAdmin: false,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUsername = async (username, newUsername) => {
  try {
    const response = await fetch(
      `http://localhost:5001/user/login/updateUsername`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          newUsername: newUsername,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePassword = async (password, newPassword) => {
  try {
    const response = await fetch(
      `http://localhost:5001/user/login/updatePassword`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
          newPassword: newPassword,
        }),
      }
    );
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (username) => {
  try {
    const response = await fetch("http://localhost:5001/user/login/delete", {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = async (url) => {
  try {
    const token = getTokenFromCookie("jwt_token");
    const response = await fetch(`http://localhost:5001/photo`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        url: url,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
