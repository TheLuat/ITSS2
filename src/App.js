import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import LandingPage from "./views/home/Home";
import AuthContextProvider from "./contexts/AuthContexts";
import ProtectedRoute from "./routing/ProtectedRoute";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));

class App extends Component {
  render() {
    return (
      <AuthContextProvider>
        <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route
                exact
                path="/login"
                name="Login Page"
                render={(props) => <Login {...props} />}
              />
              <Route
                exact
                path="/register"
                name="Register Page"
                render={(props) => <Register {...props} />}
              />
              <ProtectedRoute
                path="/home"
                name="Home"
                render={(props) => <TheLayout {...props} />}
              />
            </Switch>
          </React.Suspense>
        </HashRouter>
      </AuthContextProvider>
    );
  }
}

export default App;
