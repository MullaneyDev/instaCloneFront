import "./App.css";

import { useState, useEffect } from "react";
import { getTokenFromCookie } from "./common";
import { authCheck } from "./utils";
import LoggedIn from "./components/loggedIn/LoggedIn";
import NotLoggedIn from "./components/notLoggedIn/NotLoggedIn";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("HELLO FROM COOKIE USE EFFECT");
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
    console.log("HELLO FROM PERSISTANT USER", persistentUser);
    await setUser(persistentUser.user);

    await setLoggedIn(true);
  };

  if (!loggedIn) {
    return (
      <>
        <div className="App">
          <Header user={user} loggedIn={loggedIn} />
          <NotLoggedIn
            user={user}
            setUser={setUser}
            users={users}
            setUsers={setUsers}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
          <Footer />
        </div>{" "}
      </>
    );
  }
  return (
    <>
      <div className="App">
        <Header user={user} loggedIn={loggedIn} />
        <LoggedIn
          user={user}
          setUser={setUser}
          users={users}
          setUsers={setUsers}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
