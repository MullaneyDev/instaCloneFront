import "./App.css";

import { useState, useEffect } from "react";
import { getTokenFromCookie } from "./common";
import { authCheck } from "./utils";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

    useEffect(() => {
      if (document.cookie) {
        let token = getTokenFromCookie("jwt_token");

        if (token === false) {
          setUser({});
          setLoggedIn(false);
        } else {
          loginWithToken(token, setUser);
        }
      }
    }, []);

      const loginWithToken = async (token, setUser) => {
        const persistentUser = await authCheck(token);
        await setUser(persistentUser);
        await setLoggedIn(true);
      };


  if(!loggedIn) {
    return <div className="App">
      <h1> You are not logged in</h1>
    </div>;
  }
  return <div className="App">
<h1>You are logged in</h1>
  </div>;
}

export default App;
