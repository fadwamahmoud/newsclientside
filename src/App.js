import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import "./assets/scss/blk-design-system-react.scss";
import "./assets/css/nucleo-icons.css";
import "./assets/css/custom.css";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SourcesPage from "./components/SourcesPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/register"
          render={(props) => <RegisterPage {...props}></RegisterPage>}
        ></Route>
        <Route
          path="/login"
          render={(props) => <LoginPage {...props}></LoginPage>}
        ></Route>
        <Route
          path="/home"
          render={(props) => <LandingPage {...props}></LandingPage>}
        ></Route>
        <Route
          path="/sources"
          render={(props) => <SourcesPage {...props}></SourcesPage>}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
