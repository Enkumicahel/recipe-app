import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
// config
import { ROUTES } from "./config/routes";

function App() {
  const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  let routes = (
    <Route>
      <Login setToken={() => setIsAuthenticated(true)} />
    </Route>
  );

  if (isAuthenticated)
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
