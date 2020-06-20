import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import "./assets/scss/blk-design-system-react.scss";
import "./assets/css/nucleo-icons.css";
import "./assets/css/custom.css";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import ExamplesNavbar from "./components/ExamplesNavbar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/register"
          render={(props) => (
            <>
              <ExamplesNavbar path={props.match.path} />
              <RegisterPage {...props}></RegisterPage>
            </>
          )}
        ></Route>
        <Route
          path="/login"
          render={(props) => (
            <>
              <ExamplesNavbar path={props.match.path} />
              <LoginPage {...props}></LoginPage>
            </>
          )}
        ></Route>
        <Route
          path={["/home", "/sources"]}
          render={(props) => (
            <>
              <ExamplesNavbar path={props.match.path} />
              <LandingPage {...props}></LandingPage>
            </>
          )}
        ></Route>

        <Route
          path="/"
          render={(props) => (
            <>
              <ExamplesNavbar path={props.match.path} />
              <HomePage {...props}></HomePage>
            </>
          )}
        ></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
