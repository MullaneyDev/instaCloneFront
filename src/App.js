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
  const [apiPhotos, setApiPhotos] = useState([]);

  useEffect(() => {
    async function getPhotos() {
      const response = await fetch(`https://picsum.photos/v2/list`);
      const data = await response.json();
      setApiPhotos(data);
    }
    getPhotos();
    // if (apiPhotos === false) {
    //   setApiPhotos(false);
    // } else {
    //   console.log("apiPhotos");
    // }
  }, []);

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
          apiPhotos={apiPhotos}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
