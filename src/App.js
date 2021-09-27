import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
// config
import ROUTES from "./config/routes.js";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
}

function App() {
  // const [token, setToken] = useState();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const token = getToken();
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  console.log("token", token);
  let routes = (
    <Route>
      {/* <Login setToken={() => setIsAuthenticated(true)} /> */}
      <Login setToken={setToken} />
    </Route>
  );

  if (token)
    routes = (
      <>
        {ROUTES.map((route) => (
          <Route path={route.path} exact component={route.component} />
        ))}
      </>
    );

  return (
    <div className="wrapper bg-light pt-5">
      <div className="content">
        <Switch>{routes}</Switch>
      </div>
    </div>
  );
}

export default App;
