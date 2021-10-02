import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbars/Navbar.js";
import Login from "./pages/Login";
// config
import ROUTES from "./config/routes.js";
import Registration from "./pages/Registration.jsx";

import AuthService from "./services/auth.service";

function logout() {
  AuthService.logout();
}

function App(props) {
  // const [user, setUser] = useState(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user?.token) {
      setIsAuthenticated(true);
    }
  }, []);

  const onLogoutHandler = () => {
    AuthService.logout();
    setIsAuthenticated(false);
  };

  console.log("isAuthenticated", isAuthenticated);
  if (!isAuthenticated) {
    return (
      <Switch>
        <Route
          path="/login"
          render={({ history }) => (
            <Login
              // setToken={(token) => setToken(token)}
              onLogin={() => {
                setIsAuthenticated(true);
                history.push("/");
              }}
            />
          )}
        />
        {/* // </Route> */}
        <Route path="/register" component={Registration} />
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      </Switch>
    );
  }

  let routes = (
    <>
      {ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact
          component={route.component}
        />
      ))}
      <Redirect to={{ pathname: "/" }} />
    </>
  );

  return (
    <div className="wrapper bg-light pt-5">
      <Navbar {...props} logout={onLogoutHandler} />
      <div className="content">
        <Switch>{routes}</Switch>
      </div>
    </div>
  );
}

export default App;
